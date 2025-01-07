import { ContactForm } from "../components/ContactForm/ContactForm";
import { Location } from "../components/Location/Location";
import { PageHeader } from "../components/PageHeader/PageHeader";
import { Wrapper } from "../components/Wrapper/Wrapper";

export const ContactPage = () => {
  return <>
    <PageHeader headerText="Kontakt os" subText="Der er mange tilgænglige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har tilføjet humor eller tilfældige ord, som på ingen måde ser ægte ud"/>
    <Wrapper>
      <ContactForm />
      <Location />
    </Wrapper>
  </>;
};
