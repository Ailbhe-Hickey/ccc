const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 bg-[#E6E7E8] text-[#454851]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-8">What Our Users Say</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            {
              quote: `"TeamPass has transformed how we manage passwords. It's super secure and easy to use!"`,
              name: "Alex Johnson",
              role: "Developer at TechCo",
            },
            {
              quote: `"The best password manager I've used. Perfect for teams who need top-notch security."`,
              name: "Samantha Lee",
              role: "CTO at SoftWave",
            },
          ].map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-md max-w-xs">
              <p className="italic text-gray-600 mb-4">{t.quote}</p>
              <p className="font-semibold text-lg">{t.name}</p>
              <p className="text-gray-500">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
