import React from "react";
import Logo from "../images/Logo.svg";
const Navbar = () => {
  return (
    <div>
    <div className="h-[11vh] w-full flex flex-row justify-center">
      <div className="w-5/6 flex flex-row items-center justify-between align-middle">
            <a className="logo-button" href="/">
                <img className="w-28" src={Logo} alt="logo" />
            </a>

            <div class="flex flex-row">
                <button class="connectWallet-btn text-md m-2 transition-all duration-75 hover:scale-95"
                type="submit"
            >
            0xE6Ad3566C144E7...
            </button>
            <button
            class="connectWallet-btn m-2 mr-4 items-center justify-center p-4 text-lg"
            type="submit"
             >
                <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <g>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M4 18h2v2h12V4H6v2H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3zm2-7h7v2H6v3l-5-4 5-4v3z"></path>
                    </g>
                </svg>
                </button>
            </div>
      </div>
    </div>
    <div class="Toastify"></div>
    </div>
  );
};

export default Navbar;
