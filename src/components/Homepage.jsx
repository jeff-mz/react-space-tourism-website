import Header from "./Header";
import { Link } from "react-router";

const Homepage = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat bg-[url('https://i.postimg.cc/T3SMLCGC/background-home-mobile.jpg
')] md:bg-[url('https://i.postimg.cc/XvCMwdY3/background-home-tablet.jpg')] lg:bg-[url('https://i.postimg.cc/bwdfwKXZ/background-home-desktop.jpg')]"
    >
      <Header />

      <main className="container mx-auto px-6 py-12 md:py-16 lg:py-24 lg:px-0 lg:pl-40">
        <div className="flex flex-col sm:flex-row items-center sm:justify-around gap-20">
          <div className="text-center lg:text-left max-w-md mx-auto lg:mx-0">
            <h1 className="text-indigo-100 font-sans-condensed uppercase tracking-widest text-lg md:text-xl mb-4">
              So, you want to travel to
            </h1>
            <h2 className="text-white text-[100px] uppercase md:text-[150px] leading-[100px] md:leading-[150px] mb-6 font-serif">
              Space
            </h2>
            <p className="text-indigo-200 font-sans text-base md:text-lg leading-6 md:leading-8">
              Let&apos;s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we&apos;ll give you a truly
              out of this world experience!
            </p>
          </div>

          <div className="flex justify-center lg:justify-end relative group">
            <Link
              to="/destination"
              className="w-[150px] h-[150px] md:w-[242px] md:h-[242px] bg-white rounded-full flex items-center justify-center text-xl md:text-3xl font-serif uppercase tracking-widest text-gray-900 hover:shadow-[0_0_0_40px_rgba(255,255,255,0.1)] transition-all duration-300 group-hover:shadow-[0_0_0_40px_rgba(255,255,255,0.1)]"
            >
              Explore
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Homepage;
