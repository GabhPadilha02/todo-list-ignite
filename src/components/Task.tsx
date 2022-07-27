import Trash from "../assets/trash.svg"
import "./Task.modules.scss"

export function Task() {
    return(
    <div className="taskContainer">
        <button className="checkContainer">
            <div/>
        </button>
        <p>Task</p>
        <button className="trash">
            <img src={Trash}  alt="" />
        </button>
    </div>
    )
}       