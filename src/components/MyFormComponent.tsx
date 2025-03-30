'use client'
import { useEffect, useState } from 'react'

const MyFormComponent = ({ formId }: { formId: string }) => {
  const [cmsForm, setCmsForm] = useState<any | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Fetch the form configuration
    fetch(`/api/forms/${formId}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch form')
        }
        return res.json()
      })
      .then((data) => {
        setCmsForm(data)
        console.log('cmsForm', data)
      })
      .catch((err) => {
        setError('Error loading form')
        console.error(err)
      })
  }, [formId])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formdata = new FormData(e.currentTarget)
    console.log('formdata', formdata)
  }

  // Add null check for cmsForm to prevent runtime errors
  if (!cmsForm) {
    return <div>Loading...</div>
  }

  return (
    <>
      <h2 className=' bg-red-500  '>MyFormComponent - Form</h2>
      <p className=' bg-amber-500 text-black  '>{formId}</p>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <form onSubmit={handleSubmit}>
        {cmsForm.fields.map((field: any) => (
          <div key={field.name}>
            <label htmlFor={field.name}>{field.label}</label>
            <input
              id={field.name}
              name={field.name}
              type={field.blockType}
              required={field.required}
            />
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default MyFormComponent
