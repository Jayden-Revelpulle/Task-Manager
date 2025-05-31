import Input from './components/Input'
import './App.css'

function App() {

  return (
    <>
      <div className='flex flex-col justify-center items-center w-full'>
        <h1 className='text-4xl'>Task Manager</h1>
        <br></br>
        <Input/>
      </div>
    </>
  )
}

export default App