'use client'

import { useState } from 'react'

export function UploadForm() {
  const [file, setFile] = useState<File>()

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!file) return

    try {
      const data = new FormData()
      data.set('file', file)

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: data
      })
      // handle the error
      if (!res.ok) throw new Error(await res.text())
    } catch (e: any) {
      // Handle errors here
      console.error(e)
    }
  }

  return  (
    <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg mt-8">
      <h2 className="text-xl font-semibold mb-4">Upload a File</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="fileInput" className={`block mb-4 cursor-pointer border-dashed border-2 ${file ? 'border-green-500' : 'border-gray-400'} rounded-lg p-4 text-center`}>
          {file ? 'File selected!' : 'Choose a file...'}
          <input
            id="fileInput"
            type="file"
            accept=".pdf"
            name="file"
            className="hidden"
            onChange={(e) => setFile(e.target.files?.[0])}
          />
        </label>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
          Upload
        </button>
      </form>
    </div>
  );

}