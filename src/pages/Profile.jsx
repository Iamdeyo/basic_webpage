import React from 'react';
import profilePics from '../assets/img/upwork2.png';
import { ReactComponent as ShareBtnDes } from '../assets/icons/shareButtonDes.svg';
import { ReactComponent as ShareBtnMob } from '../assets/icons/shareButtonMob.svg';
import { ReactComponent as Github } from '../assets/icons/github.svg';
import { ReactComponent as Slack } from '../assets/icons/slack.svg';
import { ReactComponent as Cursor } from '../assets/icons/cursor.svg';
import { ReactComponent as CameraIcon } from '../assets/icons/cameraIcon.svg';
import { Link } from 'react-router-dom';

function Profile() {
  const data = {
    profile_section: {},
    links_section: {
      external_links: [
        {
          id: 1,
          linkId: 'twitter__btn',
          link: 'https://twitter.com/AyomidTaiwo',
          title: 'Twitter Link',
        },
        {
          id: 2,
          linkId: 'btn__zuri',
          link: 'https://training.zuri.team/',
          title: 'Zuri Team',
        },
        {
          id: 3,
          linkId: 'books',
          link: 'http://books.zuri.team',
          title: 'Zuri Books',
        },
        {
          id: 4,
          linkId: 'book__pyhton',
          link: 'https://books.zuri.team/python-for-beginners?ref_id=deyo',
          title: 'Python Books',
        },
        {
          id: 5,
          linkId: 'pitch',
          link: 'https://background.zuri.team',
          title: 'Background Check for Coders',
        },
        {
          id: 6,
          linkId: 'book__design',
          link: 'https://books.zuri.team/design-rules',
          title: 'Design Books',
        },
      ],
      routing_links: [
        {
          id: 1,
          linkId: 'contact',
          link: '/contact',
          title: 'Contact Me',
        },
      ],
    },
  };
  return (
    <div className="pt-16 pb-8 px-4 container mx-auto md:pb-16 md:px-8">
      <div id="profile_section" className="relative">
        <div className="rounded-full h-[88px] w-[88px] mx-auto overflow-hidden relative cursor-pointer">
          <img
            src={profilePics}
            alt="profile_pics"
            id="profile__img"
            className="rounded-full h-full w-full object-cover"
          />
          <div className="h-full w-full flex absolute top-0 left-0 items-end justify-center pb-2 bg-[#344054BF] opacity-0 hover:opacity-100 transition-all ease-in-out duration-300">
            <CameraIcon />
          </div>
        </div>

        <p
          id="twitter"
          className="font-bold text-gray-900 text-lg mx-auto mt-6 text-center md:text-xl"
        >
          I_am_Deyo
        </p>
        <p className="hidden" id="slack">
          deyo
        </p>
        <div
          id="share_btn"
          className="group absolute flex cursor-pointer items-center justify-center w-10 h-10 rounded-full border border-dashed border-gray-300 -top-5 right-0 transition-all ease-in-out duration-300 hover:bg-gray-50 md:right-1/4"
        >
          <ShareBtnDes className="hidden md:block" />
          <ShareBtnMob className="md:hidden" />

          <p className="text-white bg-gray-900 hidden transition-all ease-in-out duration-300 -left-24 opacity-0  w-20 text-center absolute text-xs font-semibold py-2 rounded-lg before:block before:absolute before:w-3 before:h-3 before:bg-gray-900 before:-right-[3px] before:top-1/2 before:-translate-y-1/2 before:rotate-45 group-hover:opacity-100 md:block">
            Share Link
          </p>
          <Cursor className="absolute hidden -right-[20%] -bottom-[10%] py-0.5 px-0.5 opacity-0 transition-all ease-in-out duration-300 group-hover:opacity-100 md:block" />
        </div>
      </div>
      <div id="links_section" className="flex flex-col mt-8 gap-6 md:mt-14">
        {data.links_section.external_links.map((ln) => (
          <a
            key={ln.id}
            href={ln.link}
            id={ln.linkId}
            target="_blank"
            rel="noreferrer"
            className="bg-gray-200 py-6 text-center text-gray-900 rounded-lg font-medium hover:bg-gray-300 md:font-semibold md:text-lg"
          >
            {ln.title}
          </a>
        ))}
        {data.links_section.routing_links.map((ln) => (
          <Link
            key={ln.id}
            to={ln.link}
            id={ln.linkId}
            target="_blank"
            rel="noreferrer"
            className="bg-gray-200 py-6 text-center text-gray-900 rounded-lg font-medium hover:bg-gray-300 md:font-semibold md:text-lg"
          >
            {ln.title}
          </Link>
        ))}
      </div>
      <div
        id="social_section"
        className="flex justify-center items-center gap-6 py-6 mt-6"
      >
        <Slack />
        <Github />
      </div>
    </div>
  );
}

export default Profile;
