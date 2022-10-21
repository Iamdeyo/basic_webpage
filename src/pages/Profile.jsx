import React from 'react';
import profilePics from '../assets/img/upwork2.png';
import { ReactComponent as ShareBtnDes } from '../assets/icons/shareButtonDes.svg';
import { ReactComponent as ShareBtnMob } from '../assets/icons/shareButtonMob.svg';
import { ReactComponent as Github } from '../assets/icons/github.svg';
import { ReactComponent as Slack } from '../assets/icons/slack.svg';

function Profile() {
  const data = {
    profile_section: {},
    links_section: [
      {
        id: 1,
        linkId: 'twitter_btn',
        link: 'https://twitter.com/AyomidTaiwo',
        title: 'Twitter Link',
        alt: '',
      },
      {
        id: 2,
        linkId: 'btn_zuri',
        link: 'https://training.zuri.team/',
        title: 'Zuri Team',
        alt: '',
      },
      {
        id: 3,
        linkId: 'books',
        link: 'http://books.zuri.team',
        title: 'Zuri Books',
        alt: 'This is where you find books about design and coding',
      },
      {
        id: 4,
        linkId: 'book_pyhton',
        link: 'https://books.zuri.team/python-for-beginners?ref_id=Ademola Taiwo Ayomide',
        title: 'Python Books',
        alt: '',
      },
      {
        id: 5,
        linkId: 'pitch',
        link: 'https://background.zuri.team',
        title: 'Background Check for Coders',
        alt: '',
      },
      {
        id: 6,
        linkId: 'book_design',
        link: 'https://books.zuri.team/design-rules',
        title: 'Design Books',
        alt: '',
      },
    ],
  };
  return (
    <div className="">
      <div id="profile_section" className="relative">
        <img
          src={profilePics}
          alt=""
          id="profile_id"
          className="rounded-full h-[88px] w-[88px] object-cover mx-auto"
        />

        <p
          id="twitter"
          className="font-bold text-gray-900 text-lg mx-auto mt-6 text-center md:text-xl"
        >
          I_am_Deyo
        </p>
        <p className="hidden" id="slack">
          Ademola Taiwo Ayomide
        </p>
        <div id="share_btn" className="absolute -top-5 right-0 md:right-1/4">
          <ShareBtnDes className="hidden md:block" />
          <ShareBtnMob className="md:hidden" />
        </div>
      </div>
      <div id="links_section" className="flex flex-col my-6 space-y-6">
        {data.links_section.map((ln) => (
          <a
            key={ln.id}
            href={ln.link}
            id={ln.linkId}
            alt={ln.alt}
            target="_blank"
            rel="noreferrer"
            className="bg-gray-200 py-6 text-center rounded-lg font-medium md:font-semibold md:text-lg"
          >
            {ln.title}
          </a>
        ))}

        {/* 
        <a
          href="https://training.zuri.team/"
          target="_blank"
          id="btn_zuri"
          rel="noreferrer"
          className="btn-primary"
        >
          Zuri Team
        </a>
        <a
          href="http://books.zuri.team"
          id="books"
          target="_blank"
          rel="noreferrer"
          className="btn-primary"
        >
          Zuri Books
        </a>
        <a
          href="https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>"
          target="_blank"
          rel="noreferrer"
          id="book_python"
          className="btn-primary"
        >
          Python Books
        </a>
        <a
          href="https://background.zuri.team"
          target="_blank"
          id="pitch"
          rel="noreferrer"
          className="btn-primary"
        >
          Background Check for Coders
        </a>
        <a
          href="https://books.zuri.team/design-rules "
          id="book_design"
          target="_blank"
          rel="noreferrer"
          className="btn-primary"
        >
          Design Books
        </a> */}
      </div>
      <div
        id="social_section"
        className="flex justify-center items-center gap-6 py-6"
      >
        <Slack />
        <Github />
      </div>
    </div>
  );
}

export default Profile;
