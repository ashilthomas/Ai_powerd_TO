import React, { useMemo, useState } from 'react'
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";

// Simple helpers to work with dates without extra deps
function startOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1)
}

function endOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0)
}

function addMonths(date, count) {
  const d = new Date(date)
  d.setMonth(d.getMonth() + count)
  return d
}

function isSameDay(a, b) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
}

const WEEK_DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

function Callender() {
  const today = new Date()
  const [currentMonth, setCurrentMonth] = useState(startOfMonth(today))

  const monthLabel = useMemo(() => {
    return currentMonth.toLocaleString(undefined, { month: 'long', year: 'numeric' })
  }, [currentMonth])

  const daysGrid = useMemo(() => {
    const start = startOfMonth(currentMonth)
    const end = endOfMonth(currentMonth)
    const startWeekday = start.getDay() // 0-6 starting Sunday
    const totalDays = end.getDate()

    const cells = []
    // Leading blanks
    for (let i = 0; i < startWeekday; i++) {
      cells.push(null)
    }
    // Month days
    for (let d = 1; d <= totalDays; d++) {
      cells.push(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), d))
    }
    // Trailing blanks to fill complete weeks (42 cells max: 6 weeks x 7 days)
    while (cells.length % 7 !== 0) {
      cells.push(null)
    }
    return cells
  }, [currentMonth])

  function goPrev() {
    setCurrentMonth((d) => startOfMonth(addMonths(d, -1)))
  }

  function goNext() {
    setCurrentMonth((d) => startOfMonth(addMonths(d, 1)))
  }

  function goToday() {
    setCurrentMonth(startOfMonth(today))
  }

  return (
    <div className="px-5">
      <div className="flex items-center justify-between">
        <Breadcrumbs />
        <div className="flex items-center gap-2">
          <button onClick={goPrev} className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 hover:opacity-90">Prev</button>
          <button onClick={goToday} className="px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600">Today</button>
          <button onClick={goNext} className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 hover:opacity-90">Next</button>
        </div>
      </div>

      <div className="mt-4">
        <h1 className="text-xl font-semibold">{monthLabel}</h1>
      </div>

      {/* Week headers */}
      <div className="mt-4 grid grid-cols-7 gap-2 text-center text-sm text-gray-600 dark:text-gray-300">
        {WEEK_DAYS.map((d) => (
          <div key={d} className="py-2 font-medium">{d}</div>
        ))}
      </div>

      {/* Days grid */}
      <div className="mt-2 grid grid-cols-7 gap-2">
        {daysGrid.map((date, idx) => {
          if (!date) {
            return <div key={idx} className="h-24 rounded border border-dashed border-gray-200 dark:border-gray-700" />
          }
          const isToday = isSameDay(date, today)
          return (
            <div
              key={idx}
              className={
                "h-24 rounded border p-2 text-sm flex flex-col gap-1 " +
                (isToday ? "border-blue-500 ring-1 ring-blue-400" : "border-gray-200 dark:border-gray-700")
              }
            >
              <div className={"w-7 h-7 flex items-center justify-center rounded " + (isToday ? "bg-blue-500 text-white" : "")}>{date.getDate()}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">{/* events go here */}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Callender