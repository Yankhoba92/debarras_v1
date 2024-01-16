import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import NavbarBurger from '../components/Navbarburger';
import Error from '../components/Errors';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Nettoyage() {
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
        <Error/>
      </>
    </React.Fragment>
  );
}

