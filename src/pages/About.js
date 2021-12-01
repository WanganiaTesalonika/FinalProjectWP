import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const About = () => {
  return(
    <>
      <Navigation />

      <div className="container my-5">
        <h1>About this Application</h1>
        <p>Tesalonika V V Wangania (105011910043), Program Studi Sistem Informasi</p>
      </div>

      <Footer />
    </>
  );
}

export default About;
