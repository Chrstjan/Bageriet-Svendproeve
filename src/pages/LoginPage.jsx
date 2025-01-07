import { LoginForm } from "../components/LoginForm/LoginForm";
import { PageHeader } from "../components/PageHeader/PageHeader";
import { Wrapper } from "../components/Wrapper/Wrapper";

export const LoginPage = () => {
  return <Wrapper type="loginWrapper">
    <PageHeader headerText="Login" subText="Der er mange tilgænglige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har tilføjet humor eller tilfældige ord, som på ingen måde ser ægte ud"/>
    <LoginForm />
  </Wrapper>;
};
