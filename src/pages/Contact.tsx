import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
      <ContactInfo />
      <ContactForm />
    </div>
  );
};

export default Contact;
