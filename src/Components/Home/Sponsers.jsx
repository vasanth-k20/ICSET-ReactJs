export default function SponsorsSection() {
    const sponsors = [
        { img: "public/media.png", alt: "MediaTEK" },
        { img: "public/amd.jpg", alt: "AMD" },
        { img: "public/ibm.jpg", alt: "Visit London" },
        { img: "/public/tetrivis.png", alt: "CAS Women" },
        { img: "/public/synopsys.png", alt: "IEEE Young Professionals" },
        { img: "public/logic.png", alt: "DEI CAS" },
    ];

    return (
        <section className="w-full lg:w-[60%] mx-auto my-12 text-center px-4">
            <h4 className="text-sm font-semibold text-gray-500">SPECIAL THANKS</h4>
            <h2 className="text-3xl font-bold mb-8">Conference Sponsors</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
                {sponsors.map((sponsor, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-2xl flex items-center justify-center p-6 w-full sm:w-[280px] h-[160px] mx-auto"
                    >
                        <img src={sponsor.img} alt={sponsor.alt} className="max-w-full max-h-[80px] object-contain" />
                    </div>
                ))}
            </div>
        </section>
    );
}