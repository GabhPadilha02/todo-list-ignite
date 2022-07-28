import { ITask } from "../App";
import clipboard from "../assets/Clipboard.svg"
import "./Tasks.modules.scss"
import { Task } from "./Task"

interface Props{
    tasks: ITask[];
    onDelete: (taskId: string) => void
    onComplete: (taskId: string) => void
}

export function Tasks({tasks, onDelete, onComplete}:Props) {

   const tasksQuantity = tasks.length
   const completedTasks = tasks.filter( (tasks) => tasks.isCompleted).length;
   console.log(tasks)
    return (
        <section>
            <header>
                <div className="taskCounter">
                    <div className="taskCounterItem">
                        <p className="lightBlue">Tarefas criadas</p>
                        <div className="numberBox">
                            <span>{tasksQuantity}</span>
                        </div>
                    </div>
                    <div className="taskCounterItem">
                        <p className="lightPurple">Concluídas</p>
                        <div className="numberBox">
                            <span> {completedTasks} de {tasksQuantity}</span>
                        </div>
                    </div>
                </div>
                <div className="line"></div>
            </header>
            <div className="taskListContainer">
                {tasks.map((task) => (
                    <Task key={task.id} task={task} onDelete={onDelete} onComplete={onComplete}/>
                ))}
            </div>
            <div className={tasks.length === 0 ? "clipboardActive" : "clipboardInactive"}>
                <img src={clipboard} alt="" />
                <p>
                <span>Você ainda não tem tarefas cadastradas</span><br/>
                Crie tarefas e organize seus itens a fazer
                </p>
            </div>
        </section>
    )
}