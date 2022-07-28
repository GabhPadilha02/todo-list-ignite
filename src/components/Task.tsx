import { Check, TagSimple } from "phosphor-react";
import { ITask } from "../App"
import Trash from "../assets/trash.svg"
import "./Task.modules.scss"

interface Props {
    task: ITask;
    onDelete: (taskId: string) => void
    onComplete: (taskId: string) => void
}

export function Task({task, onDelete, onComplete}:Props) {
    
    return(
    <div className="taskContainer">
        <div className="alignText">
            <button className="checkContainer" onClick={() => onComplete(task.id)}>
                {task.isCompleted ? <Check/> : <div/>}
            </button>
            <p className={task.isCompleted ? "taskCompleted" : ""}>{task.title}</p>
        </div>
        <button className="trash" onClick={() => onDelete(task.id) }>
            <img src={Trash}  alt="" />
        </button>
    </div>
    )
}       