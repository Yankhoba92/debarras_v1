import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import NavbarBurger from '../components/Navbarburger';
import Footer from '../components/Footer';

const meta = {
  title: 'Devis',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Devis() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <section className='bg-coolGray-900'>
        <Navbar/>
        <NavbarBurger/>
        </section>
        <section className='bg-coolGray-50 py-4'>
          <div className='container px-4 mx-auto'>
            <div className='flex flex-wrap -m-3 mb-3'>
              <div className='w-full md:w-1/4 p-3'>
                <h2 className='text-coolGray-900 text-lg font-semibold'>
                  Formulaire de Devis Gratuit
                </h2>
              </div>
              <div className='w-full md:w-3/4 p-3'>
                <div className='p-6 h-full border border-coolGray-100 overflow-hidden bg-white rounded-md shadow-dashboard'>
                  <div className='flex flex-wrap pb-3 -m-3'>
                    <div className='w-full md:w-1/2 p-3'>
                      <p className='mb-1.5 font-medium text-base text-coolGray-800'>
                        Nom
                      </p>
                      <input
                        className='w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input'
                        type='text'
                        placeholder='John'
                      />
                    </div>
                    <div className='w-full md:w-1/2 p-3'>
                      <p className='mb-1.5 font-medium text-base text-coolGray-800'>
                        Prenom
                      </p>
                      <input
                        className='w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input'
                        type='text'
                        placeholder='Doe'
                      />
                    </div>
                    <div className='w-full md:w-1/2 p-3'>
                      <p className='mb-1.5 font-medium text-base text-coolGray-800'>
                        Email
                      </p>
                      <input
                        className='w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input'
                        type='text'
                        placeholder='johndoe@flex.co'
                      />
                    </div>
                    <div className='w-full md:w-1/2 p-3'>
                      <p className='mb-1.5 font-medium text-base text-coolGray-800'>
                        Téléphone
                      </p>
                      <input
                        className='w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input'
                        type='text'
                        placeholder='+48 665 340 340'
                      />
                    </div>
                  </div>
                  <div className='py-3'>
                    <div className='w-full'>
                      <div className='flex flex-wrap'>
                        <div className='w-full'>
                          <p className='mb-1 text-sm text-coolGray-800 font-semibold'>
                            Description
                          </p>
                          <textarea
                            className='block w-full h-64 p-4 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input resize-none'
                            defaultValue={''}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='py-3'>
                    <div className='w-full md:w-9/12'>
                      <div className='flex flex-wrap -m-3'></div>
                    </div>
                  </div>
                  <div className='py-3'>
                    <div className='w-full'>
                      <div className='flex flex-wrap -m-3'></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-wrap -m-3'>
              <div className='w-full md:w-1/4 p-3'>
                <h2 className='text-coolGray-900 text-lg font-semibold'>
                  Adresse
                </h2>
              </div>
              <div className='w-full md:w-3/4 p-3'>
                <div className='p-6 h-full border border-coolGray-100 overflow-hidden bg-white rounded-md shadow-dashboard'>
                  <div className='flex flex-wrap -m-3 mb-3'>
                    <div className='w-full md:w-1/2 p-3'>
                      <p className='mb-1.5 font-medium text-base text-coolGray-800'>
                        Ville
                      </p>
                      <input
                        className='w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input'
                        type='text'
                        placeholder='City'
                      />
                    </div>
                    <div className='w-full md:w-1/2 p-3'>
                      <p className='mb-1.5 font-medium text-base text-coolGray-800'>
                        Code Postale
                      </p>
                      <input
                        className='w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input'
                        type='text'
                        placeholder='ZIP / Postal code'
                      />
                    </div>
                    <div className='w-full p-3'>
                      <p className='mb-1.5 font-medium text-base text-coolGray-800'>
                        Adresse compléte
                      </p>
                      <input
                        className='w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input'
                        type='text'
                        placeholder='Street address'
                      />
                    </div>
                  </div>
                  <button className='flex flex-wrap justify-center w-full md:w-auto md:ml-auto px-4 py-2 bg-green-500 hover:bg-green-600 font-medium text-sm text-white border border-green-500 rounded-md shadow-button'>
                    <p>Envoyer</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer/>
      </>
    </React.Fragment>
  );
}

