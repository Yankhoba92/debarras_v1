import React from "react";
import { Link } from "react-router-dom";
// import logo from "../../../public/images/camion-2.png"

const Error = () => {
  return (
    <section
          className="relative bg-white"
          style={{
            backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
            backgroundPosition: "center",
          }}
        >
          <div className="relative z-10 container px-4 mx-auto">
            <div className="flex flex-wrap py-16 md:py-40 lg:py-72">
              <div className="w-full md:w-1/2 mr-auto text-center md:text-left">
                <div className="md:max-w-xl mx-auto">
                  <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-green-500 bg-green-100 font-medium rounded-full shadow-sm">
                    Error 404
                  </span>
                  <h2 className="mb-4 text-4xl md:text-5xl leading-tight font-bold tracking-tighter">
                    En maintenance
                  </h2>
                  <p className="mb-6 text-lg md:text-xl text-coolGray-500">
                    SOON
                  </p>
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-auto py-1 lg:py-0 lg:mr-6">
                      <a
                        className="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-green-50 font-medium text-center bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-green-500 rounded-md shadow-sm"
                        href="index.html"
                      >
                        Go back to Homepage
                      </a>
                    </div>
                    <div className="w-full lg:w-auto py-1 lg:py-0">
                      <a
                        className="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-coolGray-800 font-medium text-center bg-white hover:bg-coolGray-100 focus:ring-2 focus:ring-coolGray-200 focus:ring-opacity-50 border border-coolGray-200 rounded-md shadow-sm"
                        href="#"
                      >
                        Try Again
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="md:hidden w-full"
            src="flex-ui-assets/images/http-codes/dog-error-side.png"
            alt=""
          />
          <img
            className="absolute top-0 right-0 hidden md:block h-full w-2/5 md:object-cover"
            src="flex-ui-assets/images/http-codes/dog-error-side.png"
            alt=""
          />
          <img
            className="absolute top-0 left-0 w-24 md:w-auto"
            src="flex-ui-assets/elements/wave2-yellow.svg"
            alt=""
          />
          <img
            className="absolute bottom-6 left-6 w-24 md:w-auto"
            src="flex-ui-assets/elements/dots3-violet.svg"
            alt=""
          />
        </section>
  );
};

export default Error;
