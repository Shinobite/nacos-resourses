import fubkLogo from "/src/assets/fubk-logo.png"
import nacosLogo from "/src/assets/nacos-logo.png"

const Header = () => {
  return (
    <header className="text-center mb-16 px-4">
      
      <div className="flex justify-center items-center gap-12 mb-8">
        <img
          src={fubkLogo}
          alt="Logo 1"
          className="size-24 p-1 object-contain hover:scale-105 transition-transform duration-300 bg-white rounded-full"
        />
        <img
          src={nacosLogo}
          alt="Logo 2"
          className="size-24 p-1 object-contain hover:scale-105 transition-transform duration-300 bg-white rounded-full"
        />
      </div>

      <h1 className="text-5xl md:text-6xl font-extrabold text-blue-400 drop-shadow-xl mb-4">
        Web Dev Resources for FUBK Students
      </h1>

      <p className="text-gray-300 mb-1 text-lg md:text-xl">
        Organized by NACOS FUBK Chapter 2024/2025
      </p>
      <p className="text-gray-400 italic text-md md:text-lg">
        "Learn Today, Lead Tomorrow"
      </p>
    </header>
  );
};

export default Header;
