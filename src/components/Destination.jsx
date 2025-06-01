import { useState } from "react";
import Header from "./Header";

// destination images
import moonImage from "../assets/images/destination/image-moon.webp";
import marsImage from "../assets/images/destination/image-mars.webp";
import europaImage from "../assets/images/destination/image-europa.webp";
import titanImage from "../assets/images/destination/image-titan.webp";

const Destination = () => {
  const [activeDestination, setActiveDestination] = useState(0);

  const destinations = [
    {
      name: "Moon",
      image: moonImage,
      description:
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 km",
      travelTime: "3 days",
    },
    {
      name: "Mars",
      image: marsImage,
      description:
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      distance: "225 mil. km",
      travelTime: "9 months",
    },
    {
      name: "Europa",
      image: europaImage,
      description:
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      distance: "628 mil. km",
      travelTime: "3 years",
    },
    {
      name: "Titan",
      image: titanImage,
      description:
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      distance: "1.6 bil. km",
      travelTime: "7 years",
    },
  ];

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat bg-[url('https://i.postimg.cc/jdbjCqvL/background-destination-mobile.jpg')] md:bg-[url('https://i.postimg.cc/RVLZtrbG/background-destination-tablet.jpg')] lg:bg-[url('https://i.postimg.cc/G3Y2cTFW/background-destination-desktop.jpg')]">
      <Header />

      <main className="container mx-auto px-6 py-8 md:py-12 lg:py-16 lg:px-40">
        <h1 className="text-white font-sans-condensed uppercase tracking-widest text-center md:text-left mb-8 md:mb-12 lg:mb-16 text-lg md:text-xl">
          <span className="text-white/50 font-bold mr-4">01</span>
          Pick your destination
        </h1>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* destination image */}
          <div className="flex justify-center">
            <img
              src={destinations[activeDestination].image}
              alt={destinations[activeDestination].name}
              className="w-44 h-44 md:w-64 md:h-64 lg:w-80 lg:h-80 animate-spin-slow"
            />
          </div>

          {/* destination content */}
          <div className="text-center lg:text-left">
            {/* destination tabs */}
            <div className="flex justify-center lg:justify-start gap-6 md:gap-8 mb-6 md:mb-8">
              {destinations.map((destination, index) => (
                <button
                  key={destination.name}
                  onClick={() => setActiveDestination(index)}
                  className={`font-sans-condensed uppercase tracking-widest text-indigo-200 text-sm md:text-base pb-2 border-b-2 hover:cursor-pointer ${
                    activeDestination === index
                      ? "border-white text-white"
                      : "border-transparent hover:border-white/50"
                  }`}
                >
                  {destination.name}
                </button>
              ))}
            </div>

            {/* destination info */}
            <h2 className="text-white font-serif text-6xl md:text-7xl lg:text-8xl uppercase mb-4">
              {destinations[activeDestination].name}
            </h2>
            <p className="text-indigo-200 font-sans text-base md:text-lg leading-6 md:leading-8 mb-8 md:mb-12 max-w-md mx-auto lg:mx-0">
              {destinations[activeDestination].description}
            </p>

            <div className="border-t border-white/20 pt-6 md:pt-8 grid md:grid-cols-2 gap-8 max-w-md mx-auto lg:mx-0">
              <div>
                <h3 className="text-indigo-200 font-sans-condensed uppercase tracking-widest text-sm mb-2">
                  Avg. distance
                </h3>
                <p className="text-white font-serif text-2xl md:text-3xl uppercase">
                  {destinations[activeDestination].distance}
                </p>
              </div>
              <div>
                <h3 className="text-indigo-200 font-sans-condensed uppercase tracking-widest text-sm mb-2">
                  Est. travel time
                </h3>
                <p className="text-white font-serif text-2xl md:text-3xl uppercase">
                  {destinations[activeDestination].travelTime}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Destination;
