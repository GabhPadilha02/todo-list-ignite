import "../components/Header.modules.scss"
import rocket from '../assets/rocket.svg'
import adding from "../assets/adding.svg"
import { ChangeEvent, FormEvent, useState } from "react";

interface Props{
  onAddTask: (taskTitle:string) => void;
}

export function Header({onAddTask}: Props) {
  const [title, setTitle] = useState("")

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    onAddTask(title)
    setTitle('')
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value)
  }
  const isContentTextEmpty = title.length == 0
  return (
    <header>
      <div className="containerLogo">
        <img src={rocket} alt="" />
        <h1>to<span>do</span></h1>
      </div>
      <div className='create-task'>
        <form onSubmit={handleSubmit}>
          <input 
            name='task' 
            placeholder='Adiocione uma nova tarefa...' 
            onChange={onChangeTitle}
            value={title}
          />
          <button type='submit' disabled={isContentTextEmpty}>
            Criar <img src={adding} alt="" />
        </button>
        </form>
    </div>
    </header>
  )
}