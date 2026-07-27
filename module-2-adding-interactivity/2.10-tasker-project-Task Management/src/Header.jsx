import LWSLogo from "./assets/lws_logo.png";
export default function Header() {
  return (
    <nav className="py-4 md:py-6 border-b">
      <div className="container mx-auto flex items-center justify-between gap-x-6">
        <a href="/">
          <img
            className="max-w-[100px] md:max-w-[165px]"
            src={LWSLogo}
            alt="Lws"
          />
        </a>

        <div className="flex gap-4 items-center">
          <div className="relative">
            {/* <button className="flex items-center gap-2">
              <img className="max-w-8" src="./assets/lws_logo.png" alt="bangla" />
              Bangla
            </button> */}

            {/* <div className="absolute right-0 top-full mt-2 w-40 rounded-md bg-white p-2 z-10 shadow-lg">
            <li className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100">
              <img className="max-w-8" src="./assets/images/bd.png" alt="bangla" />
              Bangla
            </li>
            <li className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100">
              <img className="max-w-8" src="./assets/images/usa.png" alt="bangla" />
              English
            </li>
          </div> */}
          </div>
        </div>
      </div>
    </nav>
  );
}
