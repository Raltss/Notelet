import React from "react";
import { Camera, Mail } from "lucide-react";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <div className="flex justify-between w-full">
      <p className="flex flex-start m-10">© {currentYear} Notelet by Manwell</p>
      <div className="flex flex-end m-10">
        <div className="flex">
          <a
            href=""
            className="flex mx-3 link-hover hover:bg-red-700 rounded-lg"
          >
            <Camera className="mr-3" />
            Twitter
          </a>

          <a
            href=""
            className="flex mx-3 link-hover hover:bg-red-700 rounded-lg"
          >
            <Mail className="mr-3 " />
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
