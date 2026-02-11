import { useState, useEffect } from 'react'
import './TaskManagerDashboard.css'

const INITIAL_TASKS = [
  { id: 1, text: 'Review pull requests', done: false, priority: 'high' },
  { id: 2, text: 'Update documentation', done: true, priority: 'medium' },
  { id: 3, text: 'Fix auth bug', done: false, priority: 'high' },
  { id: 4, text: 'Deploy to staging', done: false, priority: 'medium' },
  { id: 5, text: 'Team standup', done: true, priority: 'low' },
]

function TaskManagerDashboard() {
  const [tasks, setTasks] = useState(INITIAL_TASKS)
  const [progress, setProgress] = useState(40)

  useEffect(() => {
    const completed = tasks.filter(t => t.done).length
    setProgress(Math.round((completed / tasks.length) * 100))
  }, [tasks])

  useEffect(() => {
    const interval = setInterval(() => {
      setTasks(prev => {
        const idx = Math.floor(Math.random() * prev.length)
        return prev.map((t, i) => i === idx ? { ...t, done: !t.done } : t)
      })
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="task-dashboard">
      <div className="task-dashboard-header">
        <span className="task-dashboard-title">My Tasks</span>
        <span className="task-dashboard-badge">{tasks.filter(t => !t.done).length} pending</span>
      </div>
      <div className="task-dashboard-progress">
        <div className="task-progress-bar">
          <div className="task-progress-fill" style={{ width: `${progress}%` }} />
        </div>
        <span className="task-progress-text">{progress}% complete</span>
      </div>
      <ul className="task-dashboard-list">
        {tasks.map((task, i) => (
          <li key={task.id} className="task-item" style={{ animationDelay: `${i * 0.1}s` }}>
            <span className={`task-checkbox ${task.done ? 'checked' : ''}`}>
              {task.done && <span className="task-check">✓</span>}
            </span>
            <span className={`task-text ${task.done ? 'done' : ''}`}>{task.text}</span>
            {task.priority === 'high' && <span className="task-priority high" />}
          </li>
        ))}
      </ul>
      <div className="task-dashboard-footer">
        <span className="task-add-btn">+ Add task</span>
      </div>
    </div>
  )
}

export default TaskManagerDashboard
