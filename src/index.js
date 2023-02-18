import React from 'react';
import ReactDOM from 'react-dom/client';
import { Footer } from './components/Footer';
import {Nav} from './components/Navbar'
import { Section1 } from './components/Section1';
import { Section2 } from './components/Section2'
import { Section3 } from './components/Section3';
import { Section4 } from './components/Section4';
import { Section5 } from './components/Section5'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
    <Footer />
  </React.StrictMode>
);