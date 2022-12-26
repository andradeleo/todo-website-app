
import {Wrapper} from "./styles"

export default function ToggleSwitcher({onToggleTheme}) {
  return (
    <Wrapper>
      <label className="switch">
        <input onClick={onToggleTheme} type="checkbox" />
        <span className="slider"></span>
      </label>
    </Wrapper>
  )
}