import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo-blanc.png"

const Navbar = () => {
  return (
    <nav className='flex justify-between p-6 px-4'>
              <div className='flex justify-between items-center w-full'>
                <div className='w-1/2 xl:w-1/3'>
                  <Link className='block max-w-max' to='/'>
                    <img
                      className='h-8'
                      src={logo}
                      alt=''
                    />
                  </Link>
                </div>
                <div className='w-1/2 xl:w-1/3'>
                  <ul className='hidden xl:flex xl:justify-center'>
                    <li className='mr-12'>
                      <Link
                        className='text-coolGray-400 hover:text-coolGray-50 font-medium'
                        to='/'
                      >
                        ACCUEIL
                      </Link>
                    </li>
                    <li className='mr-12'>
                      <Link
                        className='text-coolGray-400 hover:text-coolGray-50 font-medium'
                        to='/debarras'
                      >
                        DEBARRAS IDF
                      </Link>
                    </li>
                    <li className='mr-12'>
                      <Link
                        className='text-coolGray-400 hover:text-coolGray-50 font-medium'
                        to='/nettoyage'
                      >
                        NETTOYAGE{' '}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className='text-coolGray-400 hover:text-coolGray-50 font-medium'
                        to='/gravas'
                      >
                        {' '}
                        ENLÈVEMENT DES GRAVATS
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className='w-1/2 xl:w-1/3'>
                  <div className='hidden xl:flex items-center justify-end'>
                    <Link
                      className='inline-block py-2 px-4 mr-2 leading-5 text-coolGray-400 hover:text-coolGray-50 bg-transparent font-medium rounded-md'
                      to='/contact'
                    >
                      Contact
                    </Link>
                    <Link
                      className='inline-block py-2 px-4 text-sm leading-5 text-green-50 bg-green-500 hover:bg-green-600 font-medium focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md'
                      to='/devis'
                    >
                      Devis Gratuit
                    </Link>
                  </div>
                </div>
              </div>
              <button className='navbar-burger self-center xl:hidden'>
                <svg
                  width={35}
                  height={35}
                  viewBox='0 0 32 32'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <rect
                    className='text-coolGray-800'
                    width={32}
                    height={32}
                    rx={6}
                    fill='currentColor'
                  />
                  <path
                    className='text-coolGray-400'
                    d='M7 12H25C25.2652 12 25.5196 11.8946 25.7071 11.7071C25.8946 11.5196 26 11.2652 26 11C26 10.7348 25.8946 10.4804 25.7071 10.2929C25.5196 10.1054 25.2652 10 25 10H7C6.73478 10 6.48043 10.1054 6.29289 10.2929C6.10536 10.4804 6 10.7348 6 11C6 11.2652 6.10536 11.5196 6.29289 11.7071C6.48043 11.8946 6.73478 12 7 12ZM25 15H7C6.73478 15 6.48043 15.1054 6.29289 15.2929C6.10536 15.4804 6 15.7348 6 16C6 16.2652 6.10536 16.5196 6.29289 16.7071C6.48043 16.8946 6.73478 17 7 17H25C25.2652 17 25.5196 16.8946 25.7071 16.7071C25.8946 16.5196 26 16.2652 26 16C26 15.7348 25.8946 15.4804 25.7071 15.2929C25.5196 15.1054 25.2652 15 25 15ZM25 20H7C6.73478 20 6.48043 20.1054 6.29289 20.2929C6.10536 20.4804 6 20.7348 6 21C6 21.2652 6.10536 21.5196 6.29289 21.7071C6.48043 21.8946 6.73478 22 7 22H25C25.2652 22 25.5196 21.8946 25.7071 21.7071C25.8946 21.5196 26 21.2652 26 21C26 20.7348 25.8946 20.4804 25.7071 20.2929C25.5196 20.1054 25.2652 20 25 20Z'
                    fill='currentColor'
                  />
                </svg>
              </button>
            </nav>
  );
};

export default Navbar;
