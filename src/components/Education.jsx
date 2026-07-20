import { useState } from 'react'
import '../styles/Education.css'

function Education() {
  const [info, setInfo] = useState({
    school: '',
    major: '',
    date: '',
  })

  const [isEditing, setIsEditing] = useState(true)

  return (
    <section className="education">
      <h2>Educational Experience</h2>

      {isEditing ? (
        <>
          <label>
            School
            <input
              type="text"
              value={info.school}
              onChange={(e) => setInfo({ ...info, school: e.target.value })}
            />
          </label>

          <label>
            Major
            <input
              type="text"
              value={info.major}
              onChange={(e) => setInfo({ ...info, major: e.target.value })}
            />
          </label>

          <label>
            Graduation Date
            <input
              type="text"
              value={info.date}
              onChange={(e) => setInfo({ ...info, date: e.target.value })}
            />
          </label>

          <button type="button" onClick={() => setIsEditing(false)}>
            Submit
          </button>
        </>
      ) : (
        <>
          <p>School: {info.school}</p>
          <p>Major: {info.major}</p>
          <p>Graduation Date: {info.date}</p>

          <button type="button" onClick={() => setIsEditing(true)}>
            Edit
          </button>
        </>
      )}

    </section>
  )
}

export default Education
