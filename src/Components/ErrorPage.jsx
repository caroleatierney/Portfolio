import React from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  
  return (
    <div id="error-page" className="text-lightGrayText text-2xl text-center flex flex-col align-middle">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error?.statusText || error?.message || 'Unknown error'}</i>
      </p>
      <a
        href="/Portfolio/"
        className="mt-5 text-white bg-mediumGray hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Return to home page
      </a>
    </div>
  );
}
