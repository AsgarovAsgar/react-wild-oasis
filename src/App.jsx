import styled from "styled-components"
import GlobalStyles from "./styles/GlobalStyles"
import Button from "./ui/Button"
import Input from "./ui/Input"
import Heading from "./ui/Heading"
import Row from "./ui/Row"

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
        <Row>
          <Row type="horizontal">
            <Heading as='h1'>Wild oss</Heading>
            <div>
              <Heading as='h2'>Check in and out</Heading>
              <Button >Check in</Button>
              <Button variation="secondary" size="small">Check out</Button>
            </div>  
          </Row>
          <Row>
            <Heading as='h3'>Form</Heading>
            <form>
              <Input type="number" placeholder="number of guests" />
              <Input type="number" placeholder="number of guests" />
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  )
}