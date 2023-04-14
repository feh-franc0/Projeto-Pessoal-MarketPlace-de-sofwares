import { HeaderContainer, HeaderSearchAndInfo } from './styled'
import { User, List } from 'phosphor-react'

export function Header() {
  return (
    <HeaderSearchAndInfo>
      <HeaderContainer>
        <User className="ImageUserHeader" size={25} />

        <input
          className="searchContainerHeader"
          type="text"
          placeholder="Faça sua pesquisa"
        />

        <button className="buttonContainer">
          <List size={25} />
        </button>
      </HeaderContainer>
    </HeaderSearchAndInfo>
  )
}
