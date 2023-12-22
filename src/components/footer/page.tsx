import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="flex w-full flex-col items-center justify-between px-4 py-3 md:flex md:px-16 md:py-6 border-t">
        <div className="flex flex-row flex-wrap content-center items-center justify-center py-5">
          <div className="">
            <img className="w-16" src="/logo.png" />
          </div>
          <div className="md:text-md py-3 text-center text-sm lg:text-lg">
            Alchemaid
          </div>
        </div>

        <ul className={"flex space-x-8 text-black dark:text-white pb-4"}>
          <a
            href={"https://www.instagram.com/tasc_nmamit/"}
            target={"_blank"}
            className="duration-200 hover:scale-110"
          >
            <FaInstagram />
          </a>
        </ul>

        <a href="https://github.com/tasc-nmamit" target="_blank">
          <span className="md:text-md text-sm pt-4">Team Code Crunch</span>
        </a>
      </div>
    </>
  );
};

export default Footer;
