import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Back } from '../assets/icons/backIcon.svg';

function ErrorPage() {
  return (
    <div className="py-16 mt-2">
      <p className="text-[#5925DC] text-base font-semibold mb-3">404 error</p>
      <p className="font-semibold text-4xl mb-4 text-gray-900 md:mb-6 md:text-6xl">
        We can't find that page
      </p>
      <p className="text-lg text-gray-600 font-normal mb-8 md:mb-12 md:text-xl">
        {' '}
        Sorry, the page you are looking for doesn't exist or has been moved
      </p>
      <div className="flex flex-col gap-3 md:flex-row">
        <Link
          to={'/'}
          className="text-white text-center text-base font-semibold rounded-lg w-full py-3 px-5 gap-2 border bg-[#5925DC] md:w-fit md:order-2"
        >
          Take me home
        </Link>
        <Link
          to={'/'}
          className="text-gray-700 justify-center text-base font-semibold rounded-lg w-full py-3 px-5 gap-3 flex border border-[#D0D5DD] items-center md:w-fit md:order-1"
        >
          <Back /> Go back
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
