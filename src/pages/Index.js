import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import NavbarBurger from '../components/Navbarburger';
import Footer from '../components/Footer';

const meta = {
  title: 'Accueil',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <section className='relative bg-white overflow-hidden'>
          <div className='bg-coolGray-900'>
            <Navbar/>
            <NavbarBurger/>
          </div>
          <div
            className='py-20 md:py-28 bg-coolGray-900'
            style={{
              backgroundImage:
                'url("flex-ui-assets/elements/pattern-dark2.svg")',
              backgroundPosition: 'center',
            }}
          >
            <div className='container px-4 mx-auto'>
              <div className='flex flex-wrap xl:items-center -mx-4'>
                <div className='w-full md:w-1/2 px-4 mb-16 md:mb-0'>
                  
                  <h1 className='mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight text-white font-bold tracking-tight'>
                    Eco Débarras: L'expertise d'un leader en débarras au cœur de
                    en IDF
                  </h1>
                  <p className='mb-8 text-lg md:text-xl text-coolGray-400 font-medium'>
                    Située en plein cœur de la capitale française, Eco Débarras
                    est la solution idéale pour tous vos besoins de débarras. La
                    métropole parisienne, avec sa densité de population et son
                    dynamisme économique, est un lieu où l’espace est précieux.
                    Chaque mètre carré compte, et le moindre encombrement peut
                    devenir un vrai casse-tête pour les particuliers et les
                    entreprises. C’est dans ce contexte que l’importance d’un
                    service de débarras professionnel et efficace prend tout son
                    sens. Et c’est précisément là qu’Eco Débarras intervient
                    avec son expertise et son savoir-faire.
                  </p>
                  <div className='flex flex-wrap'>
                    <div className='w-full md:w-auto py-1 md:py-0 md:mr-4'>
                      <a
                        className='inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-green-50 font-medium text-center bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm'
                        href='#'
                      >
                        DÉBARRAS POUR PARTICULIER
                      </a>
                    </div>
                    <div className='w-full md:w-auto py-1 md:py-0'>
                      <a
                        className='inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-coolGray-100 font-medium text-center bg-coolGray-700 hover:bg-coolGray-800 focus:ring-2 focus:ring-coolGray-700 focus:ring-opacity-50 rounded-md shadow-sm'
                        href='#'
                      >
                        DÉBARRAS POUR PROFESSIONNEL
                      </a>
                    </div>
                  </div>
                </div>
                <div className='w-full md:w-1/2 px-4'>
                  <div className='relative mx-auto md:mr-0 max-w-max'>
                    <img
                      className='absolute z-10 -left-8 -top-8 w-28 md:w-auto text-yellow-400'
                      src='flex-ui-assets/elements/circle3-yellow.svg'
                      alt=''
                    />
                    <img
                      className='absolute z-10 -right-7 -bottom-8 w-28 md:w-auto text-blue-500'
                      src='flex-ui-assets/elements/dots3-blue.svg'
                      alt=''
                    />
                    <img
                      className='relative rounded-7xl'
                      src='images/camion-2.png'
                      alt=''
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='wave-bottom w-full text-coolGray-900'>
            <svg
              viewBox='0 0 1440 116'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M1440 51.4091H1090.08C833.336 51.4091 580.229 116 360 116C139.771 116 0 51.4091 0 51.4091V0H1440V51.4091Z'
                fill='currentColor'
              />
            </svg>
          </div>
        </section>
        <section className='wave-top wave-bottom bg-white'>
          <div className='wave wave-top w-full text-coolGray-900'>
            <svg
              viewBox='0 0 1440 116'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M1440 64.5909H1090.08C833.336 64.5909 580.229 -7.62939e-06 360 -7.62939e-06C139.771 -7.62939e-06 0 64.5909 0 64.5909V116H1440V64.5909Z'
                fill='currentColor'
              />
            </svg>
          </div>
          <div
            className='py-24 bg-coolGray-900 overflow-hidden'
            style={{
              backgroundImage:
                'url("flex-ui-assets/elements/pattern-dark2.svg")',
              backgroundPosition: 'center',
            }}
          >
            <div className='container px-4 mx-auto'>
              <div className='md:max-w-4xl mb-16 md:mb-20'>
                
                <h1 className='mb-4 text-3xl md:text-4xl leading-tight text-white font-bold tracking-tighter'>
                  Un service adapté à la diversité des besoin
                </h1>
                <p className='text-lg md:text-xl text-coolGray-400 font-medium'>
                  La force d’Eco Débarras réside dans sa capacité à s’adapter.
                  Chaque client est unique, et ses besoins le sont aussi. Que ce
                  soit pour un déménagement, une succession, une rénovation ou
                  simplement pour faire de la place, Eco Débarras propose une
                  solution adaptée:
                </p>
              </div>
              <div className='flex flex-wrap lg:items-center -mx-4'>
                <div className='w-full md:w-1/2 px-4 mb-8 md:mb-0'>
                  <div className='flex flex-wrap p-8 text-center md:text-left hover:bg-coolGray-700 rounded-md hover:shadow-xl transition duration-200'>
                    <div className='w-full md:w-auto mb-6 md:mb-0 md:pr-6'>
                      <div className='inline-flex h-14 w-14 mx-auto items-center justify-center text-coolGray-900 bg-green-500 rounded-lg'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width={24}
                          height={24}
                          viewBox='0 0 24 24'
                          className=''
                        >
                          <path d='m21.41 11.58-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42zM13 20.01 4 11V4h7v-.01l9 9-7 7.02z' />
                          <circle cx='6.5' cy='6.5' r='1.5' />
                        </svg>
                      </div>
                    </div>
                    <div className='w-full md:flex-1 md:pt-3'>
                      <h3 className='mb-4 text-xl md:text-2xl leading-tight text-white font-bold'>
                        DÉBARRAS OFFERT{' '}
                      </h3>
                      <p className='text-coolGray-500 font-medium'>
                        Dans certains cas, les objets à débarrasser ont une
                        valeur marchande. Si cette valeur couvre les frais
                        d'intervention, le service est offert. Une formule
                        gagnant-gagnant qui ravit de nombreux clients.{' '}
                      </p>
                    </div>
                  </div>
                  <div className='flex flex-wrap p-8 text-center md:text-left hover:bg-coolGray-700 rounded-md hover:shadow-xl transition duration-200'>
                    <div className='w-full md:w-auto mb-6 md:mb-0 md:pr-6'>
                      <div className='inline-flex h-14 w-14 mx-auto items-center justify-center text-coolGray-900 bg-green-500 rounded-lg'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width={24}
                          height={24}
                          viewBox='0 0 24 24'
                          className=''
                        >
                          <path d='M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z' />
                        </svg>
                      </div>
                    </div>
                    <div className='w-full md:flex-1 md:pt-3'>
                      <h3 className='mb-4 text-xl md:text-2xl leading-tight text-white font-bold'>
                        Débarras Rémunéré
                      </h3>
                      <p className='text-coolGray-500 font-medium'>
                        {' '}
                        Si la valeur des biens excède les coûts de
                        l'intervention, Eco Débarras achète les objets et verse
                        la différence au client.{' '}
                      </p>
                    </div>
                  </div>
                  <div className='flex flex-wrap p-8 text-center md:text-left hover:bg-coolGray-700 rounded-md hover:shadow-xl transition duration-200'>
                    <div className='w-full md:w-auto mb-6 md:mb-0 md:pr-6'>
                      <div className='inline-flex h-14 w-14 mx-auto items-center justify-center text-coolGray-900 bg-green-500 rounded-lg'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width={24}
                          height={24}
                          viewBox='0 0 24 24'
                          className=''
                        >
                          <path d='M8 17h2v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1H8v-1h4V8h-2V7H8v1H7c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3v1H6v2h2v1zM20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4V6h16v12zm-6-8 2-2 2 2m0 4.25-2 2-2-2' />
                        </svg>
                      </div>
                    </div>
                    <div className='w-full md:flex-1 md:pt-3'>
                      <h3 className='mb-4 text-xl md:text-2xl leading-tight text-white font-bold'>
                        {' '}
                        Débarras à Tarif{' '}
                      </h3>
                      <p className='text-coolGray-500 font-medium'>
                        Pour les objets sans valeur, un service payant est
                        proposé à des tarifs compétitifs, avec la garantie d'une
                        intervention rapide, professionnelle, et dans le respect
                        des normes en vigueur.{' '}
                      </p>
                    </div>
                  </div>
                </div>
                <div className='w-full md:w-1/2 px-4'>
                  <div className='relative mx-auto md:mr-0 max-w-max'>
                    <img
                      className='absolute z-10 -left-8 -top-8 w-28 md:w-auto text-yellow-400'
                      src='flex-ui-assets/elements/circle3-yellow.svg'
                      alt=''
                    />
                    <img
                      className='absolute z-10 -right-7 -bottom-8 w-28 md:w-auto text-blue-500'
                      src='flex-ui-assets/elements/dots3-blue.svg'
                      alt=''
                    />
                    <img
                      src='../flex-ui-assets/images/features/stock2.png'
                      alt=''
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='wave wave-bottom w-full text-coolGray-900'>
            <svg
              viewBox='0 0 1440 116'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M0 51.4091H349.922C606.664 51.4091 859.771 116 1080 116C1300.23 116 1440 51.4091 1440 51.4091V0H0V51.4091Z'
                fill='currentColor'
              />
            </svg>
          </div>
        </section>
        <Footer/>
      </>
    </React.Fragment>
  );
}

