import React from "react";
import { FlagIcon } from "@heroicons/react/24/solid";

export function ErrorPage() {
  return (
    <div className="h-screen mx-auto grid place-items-center text-center px-8">
      <div>
        <FlagIcon className="w-20 h-20 mx-auto hover:text-red-600" />
        <h2 className="mt-10 text-3xl leading-snug md:text-4xl text-blue-gray-700">
          Error 404 <br /> It looks like something went wrong.
        </h2>
        <p className="mt-8 mb-14 text-[18px] font-normal text-gray-500 mx-auto md:max-w-sm">
          Don&apos;t worry, our team is already on it. Please try refreshing
          the page or come back later.
        </p>
        <a href="/home" className="inline-block">
          <button className="bg-blue-700 text-white text-lg font-bold px-4 py-2 rounded hover:bg-blue-800">
            Back home
          </button>
        </a>
      </div>
    </div>
  );
}

export default ErrorPage;
