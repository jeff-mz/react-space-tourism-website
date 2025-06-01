import { useState } from "react";
import Header from "./Header";

// Import crew images
import douglasImage from "../assets/images/crew/image-douglas-hurley.webp";
import markImage from "../assets/images/crew/image-mark-shuttleworth.webp";
import victorImage from "../assets/images/crew/image-victor-glover.webp";
import anoushehImage from "../assets/images/crew/image-anousheh-ansari.webp";

const Crew = () => {
  const [activeMember, setActiveMember] = useState(0);

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
    <div className="min-h-screen bg-cover bg-center bg-no-repeat bg-[url('https://i.postimg.cc/DwQy19jB/background-crew-desktop.jpg')] md:bg-[url('https://i.postimg.cc/43BfSzTc/background-crew-tablet.jpg')] lg:bg-[url('https://i.postimg.cc/DwQy19jB/background-crew-desktop.jpg')]">
      <Header />
      <main className="container mx-auto px-6 py-8 md:py-12 lg:py-16 lg:px-40">
        <h1 className="text-white font-sans-condensed uppercase tracking-widest text-center md:text-left mb-8 md:mb-12 lg:mb-16 text-lg md:text-xl">
          <span className="text-white/50 font-bold mr-4">02</span>
          Meet your crew
        </h1>

        <div className="flex flex-col-reverse lg:flex-row-reverse items-center gap-8 md:gap-12">
          {/* Crew images */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative flex justify-center pb-8 lg:pb-0">
              <img
                src={crewMembers[activeMember].image}
                alt={`${crewMembers[activeMember].name}, ${crewMembers[activeMember].role}`}
                className="w-44 h-44 md:w-72 md:h-72 lg:w-full lg:h-auto object-contain transition-opacity duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0B0D17] to-transparent"></div>
            </div>
          </div>

          {/* crew content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
            <div className="text-center lg:text-left">
              <h2 className="text-white/50 font-serif text-2xl md:text-3xl lg:text-4xl uppercase mb-2">
                {crewMembers[activeMember].role}
              </h2>
              <h3 className="text-white font-serif text-3xl md:text-4xl lg:text-5xl uppercase mb-4">
                {crewMembers[activeMember].name}
              </h3>
              <p className="text-indigo-200 font-sans text-base md:text-lg leading-6 md:leading-8 max-w-md mx-auto lg:mx-0">
                {crewMembers[activeMember].bio}
              </p>
            </div>

            {/* Indicators */}
            <div className="flex gap-4 my-8 md:mt-12">
              {crewMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveMember(index)}
                  className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all ${
                    activeMember === index
                      ? "bg-white"
                      : "bg-white/20 hover:bg-white/50"
                  }`}
                  aria-label={`View ${crewMembers[index].name}`}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Crew;
