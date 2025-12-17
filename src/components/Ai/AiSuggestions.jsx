import React, { useMemo, useState } from 'react'
import Modal from "../Model/Model";
import ReusableInput from "../ReusableInput/ReusableInput";
import { parseNaturalLanguageTask, prioritizeTasks, summarizeTasks } from "../../utils/ai/aiClient";

function AiSuggestions({ tasks = [], completedTasks = [], onCreateTask }) {
  const [open, setOpen] = useState(false)
  const [tab, setTab] = useState('nlp') // 'nlp' | 'prioritize' | 'summary'
  const [nlInput, setNlInput] = useState("")
  const [parsed, setParsed] = useState(null)
  const [range, setRange] = useState('daily')

  const prioritized = useMemo(() => prioritizeTasks(tasks), [tasks])
  const summary = useMemo(() => summarizeTasks(completedTasks, { range }), [completedTasks, range])

  function handleParse() {
    const result = parseNaturalLanguageTask(nlInput)
    setParsed(result)
  }

  function handleCreate() {
    if (parsed && onCreateTask) {
      onCreateTask(parsed)
      setOpen(false)
      setNlInput("")
      setParsed(null)
    }
  }

  return (
    <div>
      <button onClick={() => setOpen(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <span></span>
        AI Suggestions
      </button>

      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <div className="space-y-4">
          <div className="flex gap-2">
            <button onClick={() => setTab('nlp')} className={"px-3 py-1 rounded " + (tab==='nlp'?"bg-blue-500 text-white":"bg-gray-200 dark:bg-gray-700")}>Task from Text</button>
            <button onClick={() => setTab('prioritize')} className={"px-3 py-1 rounded " + (tab==='prioritize'?"bg-blue-500 text-white":"bg-gray-200 dark:bg-gray-700")}>Smart Priorities</button>
            <button onClick={() => setTab('summary')} className={"px-3 py-1 rounded " + (tab==='summary'?"bg-blue-500 text-white":"bg-gray-200 dark:bg-gray-700")}>Summaries</button>
          </div>

          {tab === 'nlp' && (
            <div className="space-y-3">
              <ReusableInput
                type="text"
                name="nl"
                placeholder="e.g., Remind me to call John at 3pm tomorrow #calls"
                onChange={(e)=>setNlInput(e.target.value)}
                value={nlInput}
              />
              <div className="flex gap-2">
                <button onClick={handleParse} className="px-3 py-2 rounded bg-gray-200 dark:bg-gray-700">Parse</button>
                {parsed && onCreateTask && (
                  <button onClick={handleCreate} className="px-3 py-2 rounded bg-blue-500 text-white">Create Task</button>
                )}
              </div>
              {parsed && (
                <div className="text-sm text-gray-700 dark:text-gray-200 space-y-1">
                  <div><strong>Title:</strong> {parsed.title}</div>
                  <div><strong>Due:</strong> {parsed.dueDate || '—'}</div>
                  <div><strong>Priority:</strong> {parsed.priority}</div>
                  <div><strong>Tags:</strong> {(parsed.tags || []).join(', ') || '—'}</div>
                </div>
              )}
            </div>
          )}

          {tab === 'prioritize' && (
            <div className="space-y-2">
              <div className="text-sm text-gray-600 dark:text-gray-300">Sorted by priority and due date:</div>
              <div className="max-h-64 overflow-auto space-y-2">
                {prioritized.map((t, i) => (
                  <div key={i} className="p-2 rounded border border-gray-200 dark:border-gray-700">
                    <div className="font-medium">{t.title}</div>
                    <div className="text-xs text-gray-500">{t.priority} {t.dueDate ? `• ${t.dueDate}` : ''}</div>
                  </div>
                ))}
                {prioritized.length === 0 && (
                  <div className="text-sm text-gray-500">No tasks</div>
                )}
              </div>
            </div>
          )}

          {tab === 'summary' && (
            <div className="space-y-3">
              <div className="flex gap-2">
                <button onClick={()=>setRange('daily')} className={"px-3 py-1 rounded " + (range==='daily'?"bg-blue-500 text-white":"bg-gray-200 dark:bg-gray-700")}>Daily</button>
                <button onClick={()=>setRange('weekly')} className={"px-3 py-1 rounded " + (range==='weekly'?"bg-blue-500 text-white":"bg-gray-200 dark:bg-gray-700")}>Weekly</button>
              </div>
              <div className="text-sm text-gray-700 dark:text-gray-200">{summary.summary}</div>
              <div className="text-xs text-gray-500">High: {summary.counts?.high || 0} • Medium: {summary.counts?.medium || 0} • Low: {summary.counts?.low || 0}</div>
            </div>
          )}
        </div>
      </Modal>
    </div>
  )
}

export default AiSuggestions