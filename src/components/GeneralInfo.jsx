import { useState } from 'react'
import '../styles/GeneralInfo.css'

function GeneralInfo() {
  const [info, setInfo] = useState({
    name: '',
    email: '',
    phone: '',
  })
  const [isEditing, setIsEditing] = useState(true)

  return (
    <section className="general-info">
      <h2>General Information</h2>

      {isEditing ? (
        <>
          <label>
            Name
            <input
              type="text"
              value={info.name}
              onChange={(e) => setInfo({ ...info, name: e.target.value })}
            />
          </label>

          <label>
            Email
            <input
              type="email"
              value={info.email}
              onChange={(e) => setInfo({ ...info, email: e.target.value })}
            />
          </label>

          <label>
            Phone
            <input
              type="tel"
              value={info.phone}
              onChange={(e) => setInfo({ ...info, phone: e.target.value })}
            />
          </label>

          <button type="button" onClick={() => setIsEditing(false)}>
            Submit
          </button>
        </>
      ) : (
        <>
          <p>Name: {info.name}</p>
          <p>Email: {info.email}</p>
          <p>Phone: {info.phone}</p>

          <button type="button" onClick={() => setIsEditing(true)}>
            Edit
          </button>
        </>
      )}
    </section>
  )
}

export default GeneralInfo
