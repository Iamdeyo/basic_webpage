import React from 'react';
import I4G from '../assets/img/I4G.png';
import { ReactComponent as ZuriIcon } from '../assets/icons/zuri.svg';

function Footer() {
  return (
    <footer className="py-8 px-4 md:py-12">
      <div className="container mx-auto flex flex-col justify-center pt-8 border-t border-gray-200 gap-4 md:flex-row md:justify-between md:items-center">
        <ZuriIcon className="h-6 w-fit md:h-8" />
        <p className="text-gray-500 text-sm font-normal md:text-base">
          HNG Internship 9 Frontend Task
        </p>
        <div>
          <img
            src={I4G}
            alt="I4G LOGO"
            title="I4G LOGO"
            className="h-6 md:h-8"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
