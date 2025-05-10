export default function SponsorsSection() {
  const sponsors = [
    { img: "img/media.webp", alt: "MediaTEK" },
    { img: "img/amd.webp", alt: "AMD" },
    { img: "img/ibm.webp", alt: "Visit London" },
    { img: "img/tetrivis.webp", alt: "CAS Women" },
    { img: "img/synopsys.webp", alt: "IEEE Young Professionals" },
    { img: "img/logic.webp", alt: "DEI CAS" },
    { img: "img/amd.webp", alt: "DEI CAS" },
    { img: "img/media.webp", alt: "DEI CAS" },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="w-full lg:w-[65%] mx-auto text-center px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <h4 className="text-sm font-semibold text-gray-500">SPECIAL THANKS</h4>
        <h2 className="text-3xl font-bold mb-8">Conference Sponsors</h2>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 justify-center">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl flex items-center justify-center p-6 w-full sm:w-[280px] h-[160px] mx-auto hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={sponsor.img}
                alt={sponsor.alt}
                className="max-w-full max-h-[80px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}