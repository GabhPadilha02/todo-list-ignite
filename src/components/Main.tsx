import clipboard from "../assets/Clipboard.svg"
import "./Main.modules.scss"
import { Task } from "./Task"


export function Main() {

   

    return (
        <section>
            <header>
                <div className="taskCounter">
                    <div className="taskCounterItem">
                        <p className="lightBlue">Tarefas criadas</p>
                        <div className="numberBox">
                            <span>0</span>
                        </div>
                    </div>
                    <div className="taskCounterItem">
                        <p className="lightPurple">Concluídas</p>
                        <div className="numberBox">
                            <span>0 de 4</span>
                        </div>
                    </div>
                </div>
                <div className="line"></div>
            </header>
            <div className="taskListContainer">
                <Task/>
                <Task/>
            </div>
            <div className="clipboardActive">
                <img src={clipboard} alt="" />
                <p>
                <span>Você ainda não tem tarefas cadastradas</span><br/>
                Crie tarefas e organize seus itens a fazer
                </p>
            </div>
        </section>
    )
}