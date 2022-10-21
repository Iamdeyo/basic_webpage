import React from 'react';
import I4G from '../assets/img/I4G.png';
import { ReactComponent as ZuriIcon } from '../assets/icons/zuri.svg';

function Footer() {
  return (
    <footer className="py-12 mb-7">
      <div className="container mx-auto flex flex-col items-center gap-8 pt-8 border-t border-gray-200 md:flex-row md:justify-between">
        <div>
          <ZuriIcon />
        </div>
        <div className="md:order-2">
          <img src={I4G} alt="" />
        </div>
        <p className="md:order-1">HNG Internship 9 Frontend Task</p>
      </div>
    </footer>
  );
}

export default Footer;
