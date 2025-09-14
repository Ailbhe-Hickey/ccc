type Policy = {
  text: string;
  linkText: string;
  linkUrl: string;
};

type PolicyListWithImageProps = {
  title: string;
  items: Policy[];
  imageSrc: string;
  imageAlt?: string;
};

const PolicyListWithImage: React.FC<PolicyListWithImageProps> = ({
  title,
  items,
  imageSrc,
  imageAlt = "Policy related image",
}) => {
  return (
    <section className="w-full py-16 bg-[#E6E7E8]">
      <section className="max-w-3xl mx-auto px-6 py-16 flex flex-col items-center text-center">
        <h2 className="text-3xl font-semibold mb-8 text-[#454851]">{title}</h2>
        <ul className="list-disc list-inside space-y-4 text-[#454851] text-left">
          {items.map(({ text, linkText, linkUrl }, i) => (
            <li key={i}>
              {text}{" "}
              <a
                href={linkUrl}
                className="text-[#3c5443] hover:underline font-semibold"
              >
                {linkText}
              </a>
            </li>
          ))}
        </ul>
      </section>

    </section>
  );
};

export default PolicyListWithImage;

