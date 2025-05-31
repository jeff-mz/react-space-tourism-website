import { useState } from "react";
import { Swiper } from "swiper/react";
import { Pagination } from "swiper/modules";
import Header from "./Header";

// images
import launchVehiclePortrait from "../assets/images/technology/image-launch-vehicle-portrait.jpg";
import launchVehicleLandscape from "../assets/images/technology/image-launch-vehicle-landscape.jpg";
import spaceportPortrait from "../assets/images/technology/image-spaceport-portrait.jpg";
import spaceportLandscape from "../assets/images/technology/image-spaceport-landscape.jpg";
import spaceCapsulePortrait from "../assets/images/technology/image-space-capsule-portrait.jpg";
import spaceCapsuleLandscape from "../assets/images/technology/image-space-capsule-landscape.jpg";

// swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Technology = () => {
  const [activeTech, setActiveTech] = useState(0);

  const technologies = [
    {
      id: 1,
      name: "Launch vehicle",
      description:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      portrait: launchVehiclePortrait,
      landscape: launchVehicleLandscape,
    },
    {
      id: 2,
      name: "Spaceport",
      description:
        "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, analogous to a seaport for ships or an airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch.",
      portrait: spaceportPortrait,
      landscape: spaceportLandscape,
    },
    {
      id: 3,
      name: "Space capsule",
      description:
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
      portrait: spaceCapsulePortrait,
      landscape: spaceCapsuleLandscape,
    },
  ];

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat bg-[url('../../src/assets/images/technology/background-technology-mobile.jpg')] md:bg-[url('../../src/assets/images/technology/background-technology-tablet.jpg')] lg:bg-[url('../../src/assets/images/technology/background-technology-desktop.jpg')]">
      <Header />

      <main className="w-full lg:ps-24 mx-auto py-8 md:py-12 lg:py-16">
        <h1 className="text-white font-sans-condensed uppercase tracking-widest text-center md:text-left mb-8 md:mb-12 lg:mb-16 text-lg md:text-xl">
          <span className="text-white/50 font-bold mr-4">03</span>
          Space launch 101
        </h1>

        <div className="lg:flex lg:flex-row-reverse lg:items-start lg:gap-12 lg:justify-end">
          {/* Technology image  */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              allowTouchMove={false}
              onSlideChange={(swiper) => setActiveTech(swiper.activeIndex)}
              modules={[Pagination]}
              className="tech-swiper"
            >
              <picture>
                <source
                  media="(min-width: 1024px)"
                  srcSet={technologies[activeTech].portrait}
                />
                <img
                  src={technologies[activeTech].landscape}
                  alt={technologies[activeTech].name}
                  className="w-full h-auto object-cover"
                />
              </picture>
            </Swiper>
          </div>

          {/* Technology Content */}
          <div className="lg:w-1/2 flex flex-col lg:flex-row lg:gap-20 px-2 sm:px--0">
            <div className="flex lg:flex-col justify-center gap-4 md:gap-6 mb-6 md:mb-8 lg:mb-12">
              {technologies.map((tech, index) => (
                <button
                  key={tech.id}
                  onClick={() => setActiveTech(index)}
                  className={`w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full border border-white/25 flex items-center justify-center font-serif text-lg md:text-xl lg:text-2xl transition-all ${
                    activeTech === index
                      ? "bg-white text-gray-900"
                      : "hover:border-white text-white"
                  }`}
                  aria-label={`View ${tech.name}`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            <div className="text-center lg:text-left">
              <h2 className="text-indigo-200 font-sans-condensed uppercase tracking-widest text-sm md:text-base mb-2">
                The terminology...
              </h2>
              <h3 className="text-white font-serif text-3xl md:text-4xl lg:text-5xl uppercase mb-4">
                {technologies[activeTech].name}
              </h3>
              <p className="text-indigo-200 font-sans text-base md:text-lg leading-6 md:leading-8 max-w-md mx-auto lg:mx-0">
                {technologies[activeTech].description}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Technology;
