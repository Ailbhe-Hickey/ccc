type SocialMedia = {
  text: string;      // name/title
  linkUrl: string;   // link
  iconUrl?: string;  // optional icon/logo image
};

type SocialMediaProps = {
  title: string;
  subtitle?: string;
  items: SocialMedia[];
};

const SocialMedia: React.FC<SocialMediaProps> = ({
  title,
  subtitle,
  items,
}) => {
  return (
    <section className="w-full bg-gray-100">
      {/* Header */}
      <section className="w-full py-12 bg-[#E6E7E8]">
        <h2 className="text-center text-3xl font-semibold mb-4 text-[#454851]">
          {title}
        </h2>
        {subtitle && (
          <p className="text-center text-lg text-[#555863] mx-auto">{subtitle}</p>
        )}
      </section>

      {/* Social cards */}
      <section className="max-w-4xl mx-auto px-6 py-16 flex flex-col space-y-4">
        {items.map(({ text, linkUrl, iconUrl }, i) => (
          <a
            key={i}
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 bg-white rounded-lg shadow hover:bg-gray-50 transition"
          >
            <div className="flex items-center space-x-4">
              {iconUrl && (
                <img
                  src={iconUrl}
                  alt={text + " logo"}
                  className="w-10 h-10 object-contain"
                />
              )}
              <span className="font-semibold text-[#3c5443]">{text}</span>
            </div>
            <span className="text-gray-400 text-xl">→</span>
          </a>
        ))}
      </section>
    </section>
  );
};

export default SocialMedia;
