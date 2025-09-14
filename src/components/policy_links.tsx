type Policy = {
  text: string;
  linkUrl: string;
};

type PolicyListWithImageProps = {
  title: string;
  subtitle?: string;
  items: Policy[];
};

const PolicyListWithImage: React.FC<PolicyListWithImageProps> = ({
  title,
  subtitle,
  items,
}) => {
  return (
    
    <section className="w-full  bg-gray-100">

      <section className=" w-full py-12 bg-[#E6E7E8]">
        <h2 className="items-center text-center text-3xl font-semibold mb-4 text-[#454851]">{title}</h2>
        <p className="items-center text-center text-lg  text-[#555863] mx-auto md:mx-0">{subtitle}</p>
      </section>


      <section className="max-w-4xl mx-auto px-6 py-16 flex flex-col items-center text-center">
        <ul className="list-disc list-inside space-y-4 text-[#454851] text-left w-full md:w-full">
          {items.map(({ text, linkUrl }, i) => (
            <li key={i}>
              <a
                href={linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3c5443] hover:underline font-semibold"
              >
                {text}
              </a>
            </li>
          ))}
        </ul>
      </section>


    </section>
  );
};

export default PolicyListWithImage;
