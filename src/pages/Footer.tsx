import React from "react";
import { ScrollToView } from "../component/Functions";

export default function Footer() {
  return (
    <footer className="bg-white m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href={"#"} className="flex items-center mb-4 sm:mb-0">
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              <span className="text-xl md:text-2xl  font-bold">
                code-<span className={"text-primary"}>grow.dev</span>{" "}
              </span>
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 ">
            <li>
              <div
                role={"button"}
                onClick={() => ScrollToView("whoami")}
                className="mr-4 hover:underline md:mr-6 "
              >
                About
              </div>
            </li>
            <li>
              <div
                role={"button"}
                onClick={() => ScrollToView("resume")}
                className="mr-4 hover:underline md:mr-6"
              >
                Privacy Policy
              </div>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Licensing
              </a>
            </li>
            <li>
              <div
                role={"button"}
                onClick={() => ScrollToView("contact")}
                className="hover:underline"
              >
                Contact
              </div>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center">
          © {new Date().getFullYear()} Coded with{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mx-1 inline-block mb-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>{" "}
          by{" "}
          <a href="#" className="hover:underline">
            Chetan Salvi™.
          </a>
        </span>
      </div>
    </footer>
  );
}
