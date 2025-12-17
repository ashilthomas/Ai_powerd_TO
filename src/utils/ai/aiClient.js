// Lightweight, local heuristics as placeholders for a real AI backend

const PRIORITY_KEYWORDS = [
  { key: /\b(urgent|asap|immediately|critical|important)\b/i, priority: 'high' },
  { key: /\b(soon|this week|priority)\b/i, priority: 'medium' },
  { key: /\b(someday|later|low)\b/i, priority: 'low' },
]

export function parseNaturalLanguageTask(input) {
  if (!input || typeof input !== 'string') return null

  const result = {
    title: input.trim(),
    description: '',
    priority: 'medium',
    dueDate: '',
    tags: [],
  }

  // Time and date heuristics (very basic)
  const timeMatch = input.match(/\b(\d{1,2})(?:\:(\d{2}))?\s*(am|pm)?\b/i)
  const tomorrowMatch = /\btomorrow\b/i.test(input)
  const todayMatch = /\btoday\b/i.test(input)
  const dateMatch = input.match(/\b(\d{4}-\d{2}-\d{2}|\d{1,2}\/\d{1,2}(?:\/\d{2,4})?)\b/)

  const now = new Date()
  let target = new Date(now)

  if (tomorrowMatch) {
    target.setDate(target.getDate() + 1)
  } else if (todayMatch) {
    // keep today
  }

  if (timeMatch) {
    let hour = parseInt(timeMatch[1], 10)
    const minute = parseInt(timeMatch[2] || '0', 10)
    const meridiem = (timeMatch[3] || '').toLowerCase()
    if (meridiem === 'pm' && hour < 12) hour += 12
    if (meridiem === 'am' && hour === 12) hour = 0
    target.setHours(hour, minute, 0, 0)
  }

  if (dateMatch) {
    const d = new Date(dateMatch[1])
    if (!isNaN(d.getTime())) {
      target = d
    }
  }

  // Priority heuristics
  for (const p of PRIORITY_KEYWORDS) {
    if (p.key.test(input)) {
      result.priority = p.priority
      break
    }
  }

  // Tags: naive extraction via #hashtags
  const tags = input.match(/#([a-z0-9_-]+)/gi) || []
  result.tags = tags.map((t) => t.replace('#', '').toLowerCase())

  // If we found a reasonable date
  if (!isNaN(target.getTime())) {
    result.dueDate = target.toISOString().slice(0, 10)
  }

  // Title cleanup: remove time/date keywords
  result.title = result.title
    .replace(/\btomorrow\b/ig, '')
    .replace(/\btoday\b/ig, '')
    .replace(/\b(at|by)\b\s*\d{1,2}(?:\:\d{2})?\s*(am|pm)?/ig, '')
    .replace(/\b(on)\b\s*(\d{4}-\d{2}-\d{2}|\d{1,2}\/\d{1,2}(?:\/\d{2,4})?)/ig, '')
    .replace(/\s+/g, ' ')
    .trim()

  return result
}

export function prioritizeTasks(tasks) {
  if (!Array.isArray(tasks)) return []
  const priorityRank = { high: 0, medium: 1, low: 2 }
  return [...tasks].sort((a, b) => {
    const ap = priorityRank[(a.priority || 'medium').toLowerCase()] ?? 1
    const bp = priorityRank[(b.priority || 'medium').toLowerCase()] ?? 1
    if (ap !== bp) return ap - bp
    const ad = a.dueDate ? new Date(a.dueDate).getTime() : Infinity
    const bd = b.dueDate ? new Date(b.dueDate).getTime() : Infinity
    return ad - bd
  })
}

export function summarizeTasks(completedTasks, { range = 'daily' } = {}) {
  if (!Array.isArray(completedTasks)) return { summary: '', counts: {} }
  const now = new Date()
  const start = new Date(now)
  if (range === 'weekly') {
    const day = start.getDay() // 0=Sun
    start.setDate(start.getDate() - day) // beginning of week (Sun)
  }
  start.setHours(0, 0, 0, 0)

  const filtered = completedTasks.filter((t) => {
    const d = t.completedAt ? new Date(t.completedAt) : null
    return d && d >= start && d <= now
  })

  const counts = filtered.reduce(
    (acc, t) => {
      const p = (t.priority || 'medium').toLowerCase()
      acc.total += 1
      acc[p] = (acc[p] || 0) + 1
      return acc
    },
    { total: 0, high: 0, medium: 0, low: 0 }
  )

  const summary =
    range === 'weekly'
      ? `This week you completed ${counts.total} tasks (High: ${counts.high}, Medium: ${counts.medium}, Low: ${counts.low}).`
      : `Today you completed ${counts.total} tasks (High: ${counts.high}, Medium: ${counts.medium}, Low: ${counts.low}).`

  return { summary, counts, items: filtered }
}


