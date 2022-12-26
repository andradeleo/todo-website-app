
import { StyledList, MenuContainer, ThemeContainer } from "./styles"

import DoneIcon from "../../assets/images/done.svg"
import TimerIcon from "../../assets/images/timer.svg"

import ToggleSwitcher from "../ToggleSwitcher"

export default function MenuOptions({counterTasks, counterDoneTasks, onChangeState, buttonSelect, onToggleTheme }) {
  return (
    <MenuContainer>
      <div>
        <StyledList button = {buttonSelect}>
          <button onClick={onChangeState}>
            <li className="first-option"><div><img width={25} src={TimerIcon}/></div> Pendentes ({counterTasks.length})</li></button>

          <button onClick={onChangeState}>
            <li className="second-option"><div><img width={25} src={DoneIcon}/></div> Concluídas ({counterDoneTasks.length})</li></button>
        </StyledList>
      </div>
      <ThemeContainer>
        <span>Tema claro </span>
        <ToggleSwitcher onToggleTheme ={onToggleTheme}/>
      </ThemeContainer>
    </MenuContainer>
  )
}