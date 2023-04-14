import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 100vw;
  height: calc(100vh - 1rem);

  /* margin: 5rem auto; */
  /* padding: 0.5rem; */

  background: ${(props) => props.theme['color-pincipal']};
  /* border-radius: 8px; */

  /* display: flex;
  flex-direction: column; */
`
