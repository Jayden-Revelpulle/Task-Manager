import { useState } from 'react'
import '../App.css'

export default function Input() {

  const [input, setInput] = useState('')
  
  console.log(input)
  return (
    <div>
        <input type="text" 
        className="bg-gray-100 border-2 p-1"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />
        <button className='border-2 p-1'>Submit</button>
    </div>
  )
}
