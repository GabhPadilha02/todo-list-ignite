import "../components/Header.modules.scss"
import rocket from '../assets/rocket.svg'
import adding from "../assets/adding.svg"


export function Header() {
  return (
    <header>
      <div className="containerLogo">
        <img src={rocket} alt="" />
        <h1>to<span>do</span></h1>
      </div>
      <div className='create-task'>
      <form >
        <input 
          name='task' 
          placeholder='Adiocione uma nova tarefa...' 
        />
        <button type='submit'>
          Criar <img src={adding} alt="" />
       </button>
      </form>
      
    </div>
    </header>
  )
}