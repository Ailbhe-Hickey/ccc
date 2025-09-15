type Policy = {
  text: string;
  linkUrl: string;
};

type PolicyListWithImageProps = {
  title: string;
  subtitle?: string;
  items: Policy[];
  items2?: Policy[];
};

const PolicyListWithImage: React.FC<PolicyListWithImageProps> = ({
  title,
  subtitle,
  items,
  items2, // <-- added here
}) => {
  return (
    <section className="w-full bg-gray-100">

      {/* Header */}
      <section className="w-full py-12 bg-[#E6E7E8]">
        <h2 className="text-center text-3xl font-semibold mb-4 text-[#454851]">{title}</h2>
        {subtitle && (
          <p className="text-center text-lg text-[#555863] mx-auto md:mx-0">{subtitle}</p>
        )}
      </section>

      {/* Lists */}
      <section className="max-w-4xl mx-auto px-6 py-16 flex flex-col items-center text-center md:text-left">
        <ul className="list-disc list-inside space-y-4 text-[#454851] w-full">
          {items.map(({ text, linkUrl }, i) => (
            <li key={i}>
              <a
                href={linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3c5443] hover:underline font-semibold break-words"
              >
                {text}
              </a>
            </li>
          ))}
        </ul>

        {/* Only render items2 if it exists */}
        {items2 && items2.length > 0 && (
          <ul className="list-disc list-inside space-y-4 mt-16 text-[#454851] w-full mt-8">
            {items2.map(({ text, linkUrl }, i) => (
              <li key={i}>
                <a
                  href={linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#3c5443] hover:underline font-semibold break-words"
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        )}
      </section>
    </section>
  );
};

export default PolicyListWithImage;
