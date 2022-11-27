import { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer className="text-center text-white mt-auto bg-cyan-300">
      <div className="container p-6">
        <div className="">
          <p className="flex justify-center items-center">
            <span className="mr-4">Register for free</span>
            <button
              type="button"
              className="inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            >
              Sign up!
            </button>
          </p>
        </div>
      </div>

      <div className="text-center p-4 bg-cyan-600">
        @FelpApp:
        <a
          className="text-white"
          href="https://www.youtube.com/watch?v=NDS0x-IYn1o"
        >
          {" "}
          Ko ce dati gol?
        </a>
      </div>
    </footer>
  );
};
