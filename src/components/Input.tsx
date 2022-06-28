import './Input.modules.scss'
import adding from '../assets/adding.svg'


export function Input() {
  return (
    <div className='create-task'>
      <input type="text" placeholder='Adiocione uma nova tarefa...'/>
      <button type="submit">
        Criar <img src={adding} alt="" />
      </button>
    </div>
  )
}