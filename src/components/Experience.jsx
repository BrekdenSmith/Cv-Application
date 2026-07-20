import { useState } from 'react'
import '../styles/Experience.css'

function Experience() {
  const [info, setInfo] = useState({
    company: '',
    position: '',
    responsibilities: '',
    dates: '',
  })

  const [isEditing, setIsEditing] = useState(true)

  return (
    <section className="experience">
      <h2>Practical Experience</h2>

      {isEditing ? (
        <>
          <label>
            Company
            <input
              type="text"
              value={info.company}
              onChange={(e) => setInfo({ ...info, company: e.target.value })}
            />
          </label>

          <label>
            Position
            <input
              type="text"
              value={info.position}
              onChange={(e) => setInfo({ ...info, position: e.target.value })}
            />
          </label>

          <label>
            Responsibilities
            <input
              type="text"
              value={info.responsibilities}
              onChange={(e) =>
                setInfo({ ...info, responsibilities: e.target.value })
              }
            />
          </label>

          <label>
            Dates
            <input
              type="text"
              value={info.dates}
              onChange={(e) => setInfo({ ...info, dates: e.target.value })}
            />
          </label>

          <button type="button" onClick={() => setIsEditing(false)}>
            Submit
          </button>
        </>
      ) : (
        <>
          <p>Company: {info.company}</p>
          <p>Position: {info.position}</p>
          <p>Responsibilities: {info.responsibilities}</p>
          <p>Dates: {info.dates}</p>

          <button type="button" onClick={() => setIsEditing(true)}>
            Edit
          </button>
        </>
      )}
    </section>
  )
}

export default Experience
