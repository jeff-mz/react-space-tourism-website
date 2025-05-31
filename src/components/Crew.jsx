import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Header from "./Header";

// Import crew images
import douglasImage from "../assets/images/crew/image-douglas-hurley.webp";
import markImage from "../assets/images/crew/image-mark-shuttleworth.webp";
import victorImage from "../assets/images/crew/image-victor-glover.webp";
import anoushehImage from "../assets/images/crew/image-anousheh-ansari.webp";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Crew = () => {
  const crewMembers = [
    {
      id: 1,
      name: "Douglas Hurley",
      role: "Commander",
      bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
      image: douglasImage,
    },
    {
      id: 2,
      name: "Mark Shuttleworth",
      role: "Mission Specialist",
      bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
      image: markImage,
    },
    {
      id: 3,
      name: "Victor Glover",
      role: "Pilot",
      bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
      image: victorImage,
    },
    {
      id: 4,
      name: "Anousheh Ansari",
      role: "Flight Engineer",
      bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
      image: anoushehImage,
    },
  ];

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat bg-[url('../../src/assets/images/crew/background-crew-mobile.jpg')] md:bg-[url('../../src/assets/images/crew/background-crew-tablet.jpg')] lg:bg-[url('../../src/assets/images/crew/background-crew-desktop.jpg')]">
      <Header />

      <main className="container mx-auto px-6 py-8 md:py-12 lg:py-16 lg:px-40">
        <h1 className="text-white font-sans-condensed uppercase tracking-widest text-center md:text-left mb-8 md:mb-12 lg:mb-16 text-lg md:text-xl">
          <span className="text-white/50 font-bold mr-4">02</span>
          Meet your crew
        </h1>

        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
            el: ".crew-pagination",
            bulletClass: "crew-bullet",
            bulletActiveClass: "crew-bullet-active",
          }}
          modules={[Pagination]}
          className="crew-swiper"
        >
          {crewMembers.map((member) => (
            <SwiperSlide key={member.id}>
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="text-center md:text-left order-2 md:order-1">
                  <h2 className="text-white/50 font-serif text-2xl md:text-3xl lg:text-4xl uppercase mb-2">
                    {member.role}
                  </h2>
                  <h3 className="text-white font-serif text-3xl md:text-4xl lg:text-5xl uppercase mb-4">
                    {member.name}
                  </h3>
                  <p className="text-indigo-200 font-sans text-base md:text-lg leading-6 md:leading-8 max-w-md mx-auto md:mx-0">
                    {member.bio}
                  </p>
                </div>

                {/* Image */}
                <div className="flex justify-center order-1 md:order-2">
                  <img
                    src={member.image}
                    alt={`${member.name}, ${member.role}`}
                    className="w-44 h-44 md:w-72 md:h-72 lg:w-96 lg:h-96 object-contain"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Custom Pagination Container */}
          <div className="crew-pagination flex justify-center gap-3 mt-8" />
        </Swiper>
      </main>

      {/* Custom Styles */}
      <style jsx global>{`
        .crew-bullet {
          width: 10px;
          height: 10px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .crew-bullet-active {
          background: white;
          transform: scale(1.2);
        }
        .crew-swiper {
          padding-bottom: 40px;
        }
      `}</style>
    </div>
  );
};

export default Crew;
