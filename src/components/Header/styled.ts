import styled from 'styled-components'

export const HeaderSearchAndInfo = styled.div`
  /* background-color: red; */
  display: inline-block;
  width: calc(100vw - 15vw);
`

export const HeaderContainer = styled.div`
  box-sizing: border-box;
  justify-content: space-between;
  display: flex;
  border-radius: 50px;
  padding: 10px;
  margin: 10px;
  background-color: ${(props) => props.theme['color-escuro']};

  .ImageUserHeader {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme['color-pincipal']};
  }

  .searchContainerHeader {
    display: block;
    width: 80%;
    border-radius: 20px;
    padding: 10px;
    border: none;
  }

  .buttonContainer {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
  }
`
