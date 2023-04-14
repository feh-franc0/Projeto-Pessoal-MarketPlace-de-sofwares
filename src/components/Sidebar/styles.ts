import styled from 'styled-components'

export const SidebarContainer = styled.header`
  float: left;
  width: 15vw;
  height: 100vh;
  background-color: #f2f2f2;
  padding: 20px;
  box-sizing: border-box;

  h1 {
    text-align: center;
  }

  p {
    text-align: center;
  }

  nav {
    a {
      color: ${(props) => props.theme.white};
      border-radius: 8px;
      text-decoration: none;
      text-align: center;
      width: 100%;
      display: inline-block;
      background-color: ${(props) => props.theme['color-sundario']};
      padding: 10px;
      margin: 5px auto;
      border-radius: 10px;
    }
  }
`
