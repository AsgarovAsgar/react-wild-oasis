import styled from "styled-components"
import GlobalStyles from "./styles/GlobalStyles"
import Button from "./ui/Button"
import Input from "./ui/Input"
import Heading from "./ui/Heading"

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
        <Heading as='h1'>Wild oss</Heading>
        <Button>Check in</Button>
        <Button>Check out</Button>
        <Heading as='h2'>H2 el</Heading>
        <Input type="number" placeholder="number of guests" />
        <Heading as='h3'>H3 el</Heading>
      </StyledApp>
    </>
  )
}