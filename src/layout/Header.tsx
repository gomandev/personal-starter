import React, { useState, useRef } from 'react';
import classNames from 'classnames';
import { BCMSImage } from 'gatsby-source-bcms/components';
import {Link} from 'gatsby';
import { HeaderEntryMeta } from '../../bcms/types';
import ContentManager from '../components/ContentManager';
import PinIcon from '../assets/icons/pin.svg';
import MenuIcon from '../assets/icons/menu.svg';
import XIcon from '../assets/icons/x.svg';

interface HeaderProps {
  data: HeaderEntryMeta;
}

const Header: React.FC<HeaderProps> = ({ data }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const timeNow = new Date().toLocaleTimeString('en-US', {
    timeZone: 'Australia/Sydney',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  const containerRef = useRef<HTMLDivElement | null>(null);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const handleContainerClick = (e: React.MouseEvent) => {
    if (containerRef.current === e.target) {
      toggleMobileMenu();
    }
  };

  return (
    <header className="relative z-50">
      <div
        className="relative z-10 container"
        onClick={handleContainerClick}
        ref={containerRef}
      >
        <nav className="relative flex items-center justify-between pt-6">
          <Link to="/">
            <a className="flex md:flex-1" aria-label="Home page">
              <BCMSImage
                media={data.logo}
                svg
                className={classNames('w-[34px] md:w-[50px]', {
                  'max-md:grayscale max-md:brightness-100 max-md:invert':
                    showMobileMenu,
                })}
              />
            </a>
          </Link>
          <ul
            className={classNames(
              'flex flex-col gap-8 transition-colors duration-300 max-md:absolute max-md:left-0 max-md:-bottom-8 max-md:translate-y-full max-md:w-full md:flex-row md:flex-1 md:justify-center lg:gap-10',
              {
                'flex flex-col text-white md:text-appGray-500': showMobileMenu,
                'text-appGray-500 max-md:hidden': !showMobileMenu,
              },
            )}
          >
            {data.nav.map((item, index) => (
              <li key={index}>
                <ContentManager
                  item={item}
                  className="text-sm leading-none font-medium tracking-[-0.41px] md:text-base md:leading-none transition-colors duration-300 md:hover:text-appText"
                />
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-end leading-none font-medium tracking-[-0.41px] max-lg:hidden">
            <img src={PinIcon} className="w-4 h-4 mr-1" />
            <span>Sydney</span>
            <div className="w-4 h-4 bg-appAccent rounded-full mx-2" />
            <span>{timeNow}</span>
          </div>
          <button
            className="flex md:hidden"
            aria-label="Toggle mobile menu"
            onClick={toggleMobileMenu}
          >
            {showMobileMenu ? (
              <img src={XIcon} className="w-6 h-6 text-white" />
            ) : (
              <img src={MenuIcon} className="w-6 h-6" />
            )}
          </button>
        </nav>
      </div>
      {showMobileMenu && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-appText md:hidden" />
      )}
    </header>
  );
};

export default Header;
