import HowToUse from './how-to-use';
import Contact from './contact';
import Service from "./service";
import Header from "./header";
import Footer from './footer';
import Hero from "./hero";
import React, { useEffect } from 'react'
import Faq from "./faq";
import Modal from '../modals/';
import { destroyAllModal } from '../../util/modal';

const Index = () => {
    useEffect(() => {
        destroyAllModal();
    }, [])
    return (
        <div className='flex flex-col slideBottomIn'>
            <Header />
            <div className="container my-16 lg:my-24 space-y-8 lg:space-y-12">
                <Hero />
                <Service />
                <HowToUse />
                <Faq />
                <Contact />
            </div>
            <Footer />
            <Modal/>
        </div>
    )
}

export default Index;