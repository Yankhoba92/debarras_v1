import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo-blanc.png"

const NavbarBurger = () => {
  return (
    <div className='navbar-menu hidden fixed top-0 left-0 z-50 w-full h-full bg-coolGray-900 bg-opacity-50'>
              <div className='fixed top-0 left-0 bottom-0 w-full w-4/6 max-w-xs bg-coolGray-900'>
                <nav className='relative p-6 h-full overflow-y-auto'>
                  <div className='flex flex-col justify-arround h-full'>
                    <Link className='inline-block' to='#'>
                      <img
                        className='h-8'
                        src={logo}
                        alt=''
                      />
                    </Link>
                    <ul className='py-6'>
                      <li>
                        <Link
                          className='block py-3 px-4 text-coolGray-400 hover:text-white font-medium hover:bg-coolGray-800 rounded-md'
                          to='/'
                        >
                          ACCUEIL
                        </Link>
                      </li>
                      <li>
                        <Link
                          className='block py-3 px-4 text-coolGray-400 hover:text-white font-medium hover:bg-coolGray-800 rounded-md'
                          to='/debarras'
                        >
                           DEBARRAS IDF
                        </Link>
                      </li>
                      <li>
                        <Link
                          className='block py-3 px-4 text-coolGray-400 hover:text-white font-medium hover:bg-coolGray-800 rounded-md'
                          to='/nettoyage'
                        >
                          NETTOYAGE
                        </Link>
                      </li>
                      <li>
                        <Link
                          className='block py-3 px-4 text-coolGray-400 hover:text-white font-medium hover:bg-coolGray-800 rounded-md'
                          to='/gravas'
                        >
                          ENLÈVEMENT DES GRAVATS
                        </Link>
                      </li>
                    </ul>
                    <div className='flex flex-wrap'>
                      <div className='w-full mb-2'>
                        <Link
                          className='inline-block py-2 px-4 w-full text-sm leading-5 text-coolGray-400 hover:text-white bg-transparent font-medium text-center rounded-md'
                          to='/contact'
                        >
                          CONTACT
                        </Link>
                      </div>
                      <div className='w-full'>
                        <Link
                          className='inline-block py-2 px-4 w-full text-sm leading-5 text-white bg-green-500 hover:bg-green-600 font-medium text-center focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md'
                          to='/devis'
                        >
                          Devis Gratuit
                        </Link>
                      </div>
                    </div>
                  </div>
                </nav>
                <Link className='navbar-close absolute top-5 p-4 right-3' to='#'>
                  <svg
                    width={12}
                    height={12}
                    viewBox='0 0 12 12'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M6.94004 5.99988L11.14 1.80655C11.2656 1.68101 11.3361 1.51075 11.3361 1.33321C11.3361 1.15568 11.2656 0.985415 11.14 0.859879C11.0145 0.734344 10.8442 0.663818 10.6667 0.663818C10.4892 0.663818 10.3189 0.734344 10.1934 0.859879L6.00004 5.05988L1.80671 0.859879C1.68117 0.734344 1.51091 0.663819 1.33337 0.663819C1.15584 0.663819 0.985576 0.734344 0.860041 0.859879C0.734505 0.985415 0.66398 1.15568 0.66398 1.33321C0.66398 1.51075 0.734505 1.68101 0.860041 1.80655L5.06004 5.99988L0.860041 10.1932C0.797555 10.2552 0.747959 10.3289 0.714113 10.4102C0.680267 10.4914 0.662842 10.5785 0.662842 10.6665C0.662842 10.7546 0.680267 10.8417 0.714113 10.9229C0.747959 11.0042 0.797555 11.0779 0.860041 11.1399C0.922016 11.2024 0.99575 11.252 1.07699 11.2858C1.15823 11.3197 1.24537 11.3371 1.33337 11.3371C1.42138 11.3371 1.50852 11.3197 1.58976 11.2858C1.671 11.252 1.74473 11.2024 1.80671 11.1399L6.00004 6.93988L10.1934 11.1399C10.2554 11.2024 10.3291 11.252 10.4103 11.2858C10.4916 11.3197 10.5787 11.3371 10.6667 11.3371C10.7547 11.3371 10.8419 11.3197 10.9231 11.2858C11.0043 11.252 11.0781 11.2024 11.14 11.1399C11.2025 11.0779 11.2521 11.0042 11.286 10.9229C11.3198 10.8417 11.3372 10.7546 11.3372 10.6665C11.3372 10.5785 11.3198 10.4914 11.286 10.4102C11.2521 10.3289 11.2025 10.2552 11.14 10.1932L6.94004 5.99988Z'
                      fill='#8896AB'
                    />
                  </svg>
                </Link>
              </div>
            </div>
  );
};

export default NavbarBurger;
