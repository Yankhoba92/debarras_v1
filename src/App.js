import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import IndexPage from './pages/Index.js';
import ContactPage from './pages/Contact.js';
import DevisPage from './pages/Devis.js';
import NettoyagePage from './pages/Nettoyage.js';
import GravasPage from './pages/Gravas.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
         
      <Route path="/contact" element={<ContactPage />} />
         
      <Route path="/devis" element={<DevisPage />} />
         
      <Route path="/nettoyage" element={<NettoyagePage />} />
         
      <Route path="/gravas" element={<GravasPage />} />
    </Routes>
  );
}

export default App;
