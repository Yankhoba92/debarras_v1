import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const meta = {
  title: '',
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
            <nav className='flex justify-between p-6 px-4'>
              <div className='flex justify-between items-center w-full'>
                <div className='w-1/2 xl:w-1/3'>
                  <a className='block max-w-max' href='index.html'>
                    <img
                      className='h-8'
                      src='images/logo-blanc-300x37.webp'
                      alt=''
                    />
                  </a>
                </div>
                <div className='w-1/2 xl:w-1/3'>
                  <ul className='hidden xl:flex xl:justify-center'>
                    <li className='mr-12'>
                      <a
                        className='text-coolGray-400 hover:text-coolGray-50 font-medium'
                        href='index.html'
                      >
                        Accueil
                      </a>
                    </li>
                    <li className='mr-12'>
                      <a
                        className='text-coolGray-400 hover:text-coolGray-50 font-medium'
                        href='#'
                      >
                        DEBARRAS IDF
                      </a>
                    </li>
                    <li className='mr-12'>
                      <a
                        className='text-coolGray-400 hover:text-coolGray-50 font-medium'
                        href='#'
                      >
                        NETTOYAGE{' '}
                      </a>
                    </li>
                    <li>
                      <a
                        className='text-coolGray-400 hover:text-coolGray-50 font-medium'
                        href='#'
                      >
                        {' '}
                        ENLÈVEMENT DES GRAVATS
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='w-1/2 xl:w-1/3'>
                  <div className='hidden xl:flex items-center justify-end'>
                    <a
                      className='inline-block py-2 px-4 mr-2 leading-5 text-coolGray-400 hover:text-coolGray-50 bg-transparent font-medium rounded-md'
                      href='contact.html'
                    >
                      Contact
                    </a>
                    <a
                      className='inline-block py-2 px-4 text-sm leading-5 text-green-50 bg-green-500 hover:bg-green-600 font-medium focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md'
                      href='devis.html'
                    >
                      Devis Gratuit
                    </a>
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
            <div className='navbar-menu hidden fixed top-0 left-0 z-50 w-full h-full bg-coolGray-900 bg-opacity-50'>
              <div className='fixed top-0 left-0 bottom-0 w-full w-4/6 max-w-xs bg-coolGray-900'>
                <nav className='relative p-6 h-full overflow-y-auto'>
                  <div className='flex flex-col justify-between h-full'>
                    <a className='inline-block' href='#'>
                      <img
                        className='h-8'
                        src='flex-ui-assets/logos/flex-ui-green.svg'
                        alt=''
                      />
                    </a>
                    <ul className='py-6'>
                      <li>
                        <a
                          className='block py-3 px-4 text-coolGray-400 hover:text-white font-medium hover:bg-coolGray-800 rounded-md'
                          href='#'
                        >
                          Product
                        </a>
                      </li>
                      <li>
                        <a
                          className='block py-3 px-4 text-coolGray-400 hover:text-white font-medium hover:bg-coolGray-800 rounded-md'
                          href='#'
                        >
                          Features
                        </a>
                      </li>
                      <li>
                        <a
                          className='block py-3 px-4 text-coolGray-400 hover:text-white font-medium hover:bg-coolGray-800 rounded-md'
                          href='#'
                        >
                          Pricing
                        </a>
                      </li>
                      <li>
                        <a
                          className='block py-3 px-4 text-coolGray-400 hover:text-white font-medium hover:bg-coolGray-800 rounded-md'
                          href='#'
                        >
                          Resources
                        </a>
                      </li>
                    </ul>
                    <div className='flex flex-wrap'>
                      <div className='w-full mb-2'>
                        <a
                          className='inline-block py-2 px-4 w-full text-sm leading-5 text-coolGray-400 hover:text-white bg-transparent font-medium text-center rounded-md'
                          href='#'
                        >
                          Log In
                        </a>
                      </div>
                      <div className='w-full'>
                        <a
                          className='inline-block py-2 px-4 w-full text-sm leading-5 text-white bg-green-500 hover:bg-green-600 font-medium text-center focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md'
                          href='#'
                        >
                          Sign Up
                        </a>
                      </div>
                    </div>
                  </div>
                </nav>
                <a className='navbar-close absolute top-5 p-4 right-3' href='#'>
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
                </a>
              </div>
            </div>
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
                  <span className='inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-green-500 uppercase rounded-9xl'>
                    Header
                  </span>
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
                <span className='inline-block py-px px-2 mb-4 text-xs leading-5 text-green-900 bg-green-100 font-medium uppercase rounded-full shadow-sm'>
                  Features
                </span>
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
        <section className='bg-white'>
          <div className='wave-top w-full text-coolGray-900'>
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
            className='bg-coolGray-900 overflow-hidden'
            style={{
              backgroundImage:
                'url("flex-ui-assets/elements/pattern-dark.svg")',
              backgroundPosition: 'center',
            }}
          >
            <div className='container px-4 mx-auto'>
              <div className='flex flex-wrap lg:items-center pt-24 pb-12 -mx-4'>
                <div className='w-full md:w-1/4 lg:w-auto px-4'>
                  <a className='block mb-5 md:mb-0 max-w-max' href='#'>
                    <img
                      className='h-8'
                      src='images/logo-blanc-300x37.webp'
                      alt=''
                    />
                  </a>
                </div>
                <div className='w-full md:w-3/4 lg:flex-1 px-4'>
                  <div className='flex flex-wrap justify-end -mx-3 lg:-mx-6'>
                    <div className='w-full md:w-auto p-3 md:py-0 md:px-6'>
                      <a
                        className='inline-block text-lg md:text-xl text-coolGray-400 hover:text-coolGray-500 font-medium'
                        href='#'
                      >
                        À propos
                      </a>
                    </div>
                    <div className='w-full md:w-auto p-3 md:py-0 md:px-6' />
                    <div className='w-full md:w-auto p-3 md:py-0 md:px-6'>
                      <a
                        className='inline-block text-lg md:text-xl text-coolGray-400 hover:text-coolGray-500 font-medium'
                        href='#'
                      >
                        {' '}
                        Nos interventions:
                      </a>
                    </div>
                    <div className='w-full md:w-auto p-3 md:py-0 md:px-6'>
                      <a
                        className='inline-block text-lg md:text-xl text-coolGray-400 hover:text-coolGray-500 font-medium'
                        href='#'
                      >
                        Lieux d'interventions
                      </a>
                    </div>
                    <div className='w-full md:w-auto p-3 md:py-0 md:px-6'>
                      <a
                        className='inline-block text-lg md:text-xl text-coolGray-400 hover:text-coolGray-500 font-medium'
                        href='#'
                      >
                        CONTACTEZ-NOUS
                      </a>
                    </div>
                    <div className='w-full md:w-auto p-3 md:py-0 md:px-6' />
                    <div className='w-full md:w-auto p-3 md:py-0 md:px-6' />
                  </div>
                </div>
              </div>
            </div>
            <div className='border-b border-coolGray-800' />
            <div className='container px-4 mx-auto'>
              <div className='flex flex-wrap items-center py-12 md:pb-32'>
                <div className='w-full md:w-1/2 mb-6 md:mb-0'>
                  <p className='text-coolGray-400 font-medium'>
                    © 2024 Yankhoba. All rights reserved.
                  </p>
                </div>
                <div className='w-full md:w-1/2'>
                  <div className='flex flex-wrap md:justify-end -mx-5'>
                    <div className='px-5'>
                      <a
                        className='inline-block text-coolGray-300 hover:text-coolGray-400'
                        href='#'
                      >
                        <svg
                          width={10}
                          height={18}
                          viewBox='0 0 10 18'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M6.63494 17.7273V9.76602H9.3583L9.76688 6.66246H6.63494V4.68128C6.63494 3.78301 6.88821 3.17085 8.20297 3.17085L9.87712 3.17017V0.394238C9.5876 0.357335 8.59378 0.272728 7.43708 0.272728C5.0217 0.272728 3.3681 1.71881 3.3681 4.37391V6.66246H0.636475V9.76602H3.3681V17.7273H6.63494Z'
                            fill='currentColor'
                          />
                        </svg>
                      </a>
                    </div>
                    <div className='px-5'>
                      <a
                        className='inline-block text-coolGray-300 hover:text-coolGray-400'
                        href='#'
                      >
                        <svg
                          width={19}
                          height={16}
                          viewBox='0 0 19 16'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M18.8181 2.14597C18.1356 2.44842 17.4032 2.65355 16.6336 2.74512C17.4194 2.27461 18.0208 1.5283 18.3059 0.641757C17.5689 1.07748 16.7553 1.39388 15.8885 1.56539C15.1943 0.824879 14.2069 0.363636 13.1118 0.363636C11.0108 0.363636 9.30722 2.06718 9.30722 4.16706C9.30722 4.46488 9.34083 4.75576 9.40574 5.03391C6.24434 4.87512 3.44104 3.36048 1.56483 1.05894C1.23686 1.61985 1.05028 2.27342 1.05028 2.97109C1.05028 4.29106 1.72243 5.45573 2.74225 6.13712C2.11877 6.11627 1.53237 5.94476 1.01901 5.65967V5.70718C1.01901 7.54979 2.33086 9.08761 4.07031 9.43761C3.75161 9.52336 3.41555 9.57088 3.06789 9.57088C2.82222 9.57088 2.58464 9.54655 2.35171 9.50018C2.8361 11.0125 4.24067 12.1123 5.90483 12.1424C4.6034 13.1622 2.96243 13.7683 1.1801 13.7683C0.873008 13.7683 0.570523 13.7498 0.272705 13.7162C1.95655 14.7974 3.95561 15.4278 6.10416 15.4278C13.1026 15.4278 16.928 9.63115 16.928 4.60397L16.9153 4.11145C17.6627 3.57833 18.3094 2.90851 18.8181 2.14597Z'
                            fill='currentColor'
                          />
                        </svg>
                      </a>
                    </div>
                    <div className='px-5'>
                      <a
                        className='inline-block text-coolGray-300 hover:text-coolGray-400'
                        href='#'
                      >
                        <svg
                          width={20}
                          height={20}
                          viewBox='0 0 20 20'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M5.6007 0.181818H14.3992C17.3874 0.181818 19.8184 2.61281 19.8182 5.60074V14.3993C19.8182 17.3872 17.3874 19.8182 14.3992 19.8182H5.6007C2.61276 19.8182 0.181885 17.3873 0.181885 14.3993V5.60074C0.181885 2.61281 2.61276 0.181818 5.6007 0.181818ZM14.3993 18.0759C16.4267 18.0759 18.0761 16.4266 18.0761 14.3993H18.076V5.60074C18.076 3.57348 16.4266 1.92405 14.3992 1.92405H5.6007C3.57343 1.92405 1.92412 3.57348 1.92412 5.60074V14.3993C1.92412 16.4266 3.57343 18.0761 5.6007 18.0759H14.3993ZM4.85721 10.0001C4.85721 7.16424 7.16425 4.85714 10.0001 4.85714C12.8359 4.85714 15.1429 7.16424 15.1429 10.0001C15.1429 12.8359 12.8359 15.1429 10.0001 15.1429C7.16425 15.1429 4.85721 12.8359 4.85721 10.0001ZM6.62805 10C6.62805 11.8593 8.14081 13.3719 10.0001 13.3719C11.8593 13.3719 13.3721 11.8593 13.3721 10C13.3721 8.14058 11.8594 6.6279 10.0001 6.6279C8.14069 6.6279 6.62805 8.14058 6.62805 10Z'
                            fill='currentColor'
                          />
                        </svg>
                      </a>
                    </div>
                    <div className='px-5'>
                      <a
                        className='inline-block text-coolGray-300 hover:text-coolGray-400'
                        href='#'
                      >
                        <svg
                          width={18}
                          height={18}
                          viewBox='0 0 18 18'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M9 0C4.0275 0 0 4.13211 0 9.22838C0 13.3065 2.5785 16.7648 6.15375 17.9841C6.60375 18.0709 6.76875 17.7853 6.76875 17.5403C6.76875 17.3212 6.76125 16.7405 6.7575 15.9712C4.254 16.5277 3.726 14.7332 3.726 14.7332C3.3165 13.6681 2.72475 13.3832 2.72475 13.3832C1.9095 12.8111 2.78775 12.8229 2.78775 12.8229C3.6915 12.887 4.16625 13.7737 4.16625 13.7737C4.96875 15.1847 6.273 14.777 6.7875 14.5414C6.8685 13.9443 7.10025 13.5381 7.3575 13.3073C5.35875 13.0764 3.258 12.2829 3.258 8.74709C3.258 7.73988 3.60675 6.91659 4.18425 6.27095C4.083 6.03774 3.77925 5.0994 4.263 3.82846C4.263 3.82846 5.01675 3.58116 6.738 4.77462C7.458 4.56958 8.223 4.46785 8.988 4.46315C9.753 4.46785 10.518 4.56958 11.238 4.77462C12.948 3.58116 13.7017 3.82846 13.7017 3.82846C14.1855 5.0994 13.8818 6.03774 13.7917 6.27095C14.3655 6.91659 14.7142 7.73988 14.7142 8.74709C14.7142 12.2923 12.6105 13.0725 10.608 13.2995C10.923 13.5765 11.2155 14.1423 11.2155 15.0071C11.2155 16.242 11.2043 17.2344 11.2043 17.5341C11.2043 17.7759 11.3617 18.0647 11.823 17.9723C15.4237 16.7609 18 13.3002 18 9.22838C18 4.13211 13.9703 0 9 0Z'
                            fill='currentColor'
                          />
                        </svg>
                      </a>
                    </div>
                    <div className='px-5'>
                      <a
                        className='inline-block text-coolGray-300 hover:text-coolGray-400'
                        href='#'
                      >
                        <svg
                          width={18}
                          height={18}
                          viewBox='0 0 18 18'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M16.2 0H1.8C0.81 0 0 0.81 0 1.8V16.2C0 17.19 0.81 18 1.8 18H16.2C17.19 18 18 17.19 18 16.2V1.8C18 0.81 17.19 0 16.2 0ZM5.4 15.3H2.7V7.2H5.4V15.3ZM4.05 5.67C3.15 5.67 2.43 4.95 2.43 4.05C2.43 3.15 3.15 2.43 4.05 2.43C4.95 2.43 5.67 3.15 5.67 4.05C5.67 4.95 4.95 5.67 4.05 5.67ZM15.3 15.3H12.6V10.53C12.6 9.81004 11.97 9.18 11.25 9.18C10.53 9.18 9.9 9.81004 9.9 10.53V15.3H7.2V7.2H9.9V8.28C10.35 7.56 11.34 7.02 12.15 7.02C13.86 7.02 15.3 8.46 15.3 10.17V15.3Z'
                            fill='currentColor'
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}

