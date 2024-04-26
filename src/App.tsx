import './App.css'
import LoginClassForm from './components/LoginClassForm'
import Loginform from './components/Loginform'

function App() {


  return (
    <>
    <section className='flex flex-col gap-10'>
    <Loginform></Loginform>
    <LoginClassForm></LoginClassForm>
 
    </section>

    </>

  )
}

export default App
