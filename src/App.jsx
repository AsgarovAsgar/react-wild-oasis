import styled from "styled-components"
import GlobalStyles from "./styles/GlobalStyles"
import Button from "./ui/Button"
import Input from "./ui/Input"

const H1 = styled.h1`
  font-size:30px;
  font-weight: 600;
`



const StyledApp = styled.div`
  display: flex;
  gap: 20px;
  background-color: var(--color-brand-500);
`

export default function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>Wild oss</H1>
        <Button>Check in</Button>
        <Button>Check out</Button>
        <Input type="number" placeholder="number of guests" />
      </StyledApp>
    </>
  )
}