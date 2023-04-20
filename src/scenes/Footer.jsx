import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-40 bg-blue flex items-center justify-center">
      <div className="w-10/12 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <SocialMediaIcons />
        </div>
        <div className="text-center md:text-left">
          <p className="font-playfair font-semibold text-lg text-white mb-1">
            Brett Bax
          </p>
          <p className="font-playfair text-sm text-white">
            Big Nerd
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
