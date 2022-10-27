import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Back } from '../assets/icons/backIcon.svg';
import { useNavigate } from 'react-router-dom';

function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="my-[72px] px-4 py-40 container mx-auto md:my-[96px]">
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
          className="text-white text-center text-base font-semibold rounded-lg w-full transition-all duration-300 ease-in-out py-3 px-5 gap-2 border bg-[#5925DC] hover:bg-[#4f20c5] md:w-fit md:order-2"
        >
          Take me home
        </Link>
        <div
          onClick={() => navigate(-1)}
          className="text-gray-700 justify-center text-base font-semibold rounded-lg w-full py-3 transition-all duration-300 ease-in-out px-5 gap-3 flex border border-[#D0D5DD] items-center hover:bg-gray-50 cursor-pointer md:w-fit md:order-1"
        >
          <Back /> Go back
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
