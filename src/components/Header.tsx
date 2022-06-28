import "../components/Header.modules.scss"
import rocket from '../assets/rocket.svg'



export function Header() {
  return (
    <header className="container">
      <img src={rocket} alt="" />
      <h1>to<span>do</span></h1>
    </header>
  )
}