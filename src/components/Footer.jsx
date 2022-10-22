import React from 'react';
import I4G from '../assets/img/I4G.png';
import { ReactComponent as ZuriIcon } from '../assets/icons/zuri.svg';

function Footer() {
  return (
    <footer className="py-12 px-4 mb-7">
      <div className="container mx-auto hidden items-center pt-8 border-t border-gray-200 justify-between md:flex">
        <div>
          <ZuriIcon />
        </div>
        <p className="text-gray-500 text-base font-normal">
          HNG Internship 9 Frontend Task
        </p>
        <div>
          <img src={I4G} alt="" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
