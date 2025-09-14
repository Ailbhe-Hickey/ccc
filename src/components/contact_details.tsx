type ContactPerson = {
  role: string;
  name: string;
  email: string;
};

type ContactDetailsProps = {
  title: string;
  subtitle: string;
  contacts: ContactPerson[];
};

const ContactDetails: React.FC<ContactDetailsProps> = ({ title, subtitle, contacts }) => {
  return (
    <section className="w-full bg-gray-100">
      {/* Header Section */}
      <section className=" w-full py-12 bg-[#E6E7E8]">
        <h2 className="text-center text-3xl font-semibold mb-4 text-[#454851]">
          {title}
        </h2>
        <p className="text-center text-lg text-[#555863] mx-auto">{subtitle}</p>
      </section>

      {/* Contact List */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <ul className="list-disc list-inside space-y-6 text-[#454851]">
          {contacts.map((contact, idx) => (
            <li key={idx} className="font-semibold">
              {contact.role}
              <ul className="list-[circle] list-inside ml-6 font-normal">
                <li>{contact.name}</li>
                <ul className="list-[circle] list-inside ml-6">
                  <li>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-[#3c5443] hover:underline"
                    >
                      {contact.email}
                    </a>
                  </li>
                </ul>
              </ul>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default ContactDetails;

