import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full mb-[100px] md:mb-5 pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[50vw]">
          ¿Listo para llevar tu{" "}
          <span className="text-purple">presencia digital</span> al{" "}
          <span className="text-purple">siguiente nivel</span>?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Contactame y hablemos de cómo puedo llevar tu idea a la realidad 🚀
        </p>
        <a href="mailto:ing.mbarreiro@gmail.com">
          <MagicButton
            title="Contactame"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          2024 © Manuel Barreiro
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              href={info.url}
              target="_blank"
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
