import React from 'react';
import Hero from './components/Hero';
import Header from './components/Header';
import Logos from './components/Logos';
import Services from './components/Services';
import Testimonial from './components/Testimonial';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Trial from './components/Trial';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <>
            <Header />
            <Hero />
            <Logos />
            <Services />
            <Testimonial />
            <Pricing />
            <FAQ />
            <Trial />
            <Footer />
        </>
    );
}

export default App;
