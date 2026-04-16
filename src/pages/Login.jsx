import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Heading from "../ui/Heading";
import Logo from "../ui/Logo";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

const InfoBox = styled.div`
  background-color: var(--color-blue-100);
  border: 1px solid var(--color-blue-700);
  border-radius: var(--border-radius-md);
  padding: 1.6rem 2rem;
  text-align: center;
  color: var(--color-blue-700);
  font-size: 1.4rem;
  line-height: 1.6;

  & strong {
    font-weight: 600;
    color: var(--color-blue-800);
  }
`;

function Login() {
  return (
    <LoginLayout>
      <Logo />
      <Heading as="h4">Log in to your account</Heading>
      <InfoBox>
        <strong>Demo Access Available</strong>
        <br />
        The email and password fields are prefilled for you to easily explore
        the internal admin dashboard.
      </InfoBox>
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
