import { useInView } from "react-intersection-observer";

const OurTeam = () => {
  const { ref: sectionRefs, inView: sectionInViews } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const teamData = [
     {
      name: "Business Partner",
      role: "Konstructo Solar Energy",
      description:
        "Businesses shift to clean, reliable, and cost-effective solar energy. With rising electricity costs and increasing environmental concerns.",
      images: ["CEO.jpeg", "BDO.png"], // 👈 Two images
      animation: "animate-zoomIn",
    },
    {
      name: "M. Usman Anjum",
      role: "Founder and CEO",
      description:
        "M Usman Anjum leads solar innovation, ensuring top-tier service and driving continuous progress in sustainable energy solutions.",
      image: "CEO.jpeg",
      animation: "animate-slideInLeft",
    },
    {
      name: "Asif Majeed",
      role: "BDO",
      description:
        "As a Business Development Officer, my mission is to help homes and businesses shift to clean, reliable, and cost-effective solar energy. With rising electricity costs and increasing environmental concerns.",
      image: "BDO.png",
      animation: "animate-fadeIn",
    },
    {
      name: "Anas Rafiq",
      role: "HR & Marketing Manager",
      description:
        "Anas drives our marketing, making sure our solar solutions effectively reach the right audience and create impact.",
      image: "HR.jpg",
      animation: "animate-slideInRight",
    },
   
  ];

  return (
    <main className="py-8 bg-[url('https://modinatheme.com/html/solarglow-html/assets/img/testimonial/map-shape.png')] bg-cover bg-center bg-[#F7F7F7]">
      <div className="text-center px-2 md:px-6 lg:px-24">
        {/* Heading */}
        <div className="gap-4 flex flex-col justify-center items-center text-center">
          <h1 className="text-[#5B9B37] text-sm uppercase font-bold font-funnel tracking-wider">
            Meet Our Expert Team
          </h1>
          <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl tracking-tight md:tracking-wide w-full md:w-[60%] lg:w-[50%] xl:w-[40%] self-center flex font-krona text-gray-800 drop-shadow-md">
            Professionals Shaping the Future of Solar Energy
          </h2>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto gap-6 mt-10 sm:px-4 px-8">
          {teamData.map((member, index) => (
            <div
              key={index}
              ref={(el) => sectionRefs(el)}
              className={`p-6 bg-white rounded-lg max-w-xs w-full duration-700 hover:scale-105 transition-transform transform ${
                sectionInViews ? member.animation : "opacity-0"
              } border border-gray-300 hover:shadow-md flex flex-col items-center`}
            >
              {/* If single image */}
              {member.image && (
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-full w-28 h-28 object-cover mb-4 border-4 border-[#0f1c47]"
                />
              )}

              {/* If multiple images */}
              {member.images && (
                <div className="flex gap-3 mb-4">
                  {member.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`${member.name} ${i + 1}`}
                      className="rounded-full w-20 h-20 object-cover border-4 border-[#0f1c47]"
                    />
                  ))}
                </div>
              )}

              <h2 className="text-xl text-[#0f1c47] mb-2 text-nowrap font-krona">
                {member.name}
              </h2>
              <p className="text-[#5B9B37] font-funnel font-semibold mb-2">
                {member.role}
              </p>
              <p className="text-gray-600 text-sm md:text-base text-justify">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default OurTeam;
