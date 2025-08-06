import ContactPersone from "./contactPersone";
import ContactSosmed from "./contactSosmed";

const Contact = () => {
  return (
    <section className="min-h-screen text-white px-6 py-16 flex justify-center items-center">
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-12">
        <ContactSosmed />
        <ContactPersone />
      </div>
    </section>
  );
};

export default Contact;
