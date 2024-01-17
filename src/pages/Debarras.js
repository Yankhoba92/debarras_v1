import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import NavbarBurger from '../components/Navbarburger';
import Error from '../components/Errors';
import Footer from '../components/Footer';

const meta = {
  title: 'Debarras',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Debarras() {
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
        <Footer/>
      </>
    </React.Fragment>
  );
}

