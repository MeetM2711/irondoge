import React, { useState, useEffect } from 'react'
import '../assets/css/App.css';

import TweetBox from "../components/TweetBox";
import Hero from "../components/Hero";
import News from "../components/News";
import Sale from '../components/Sale';
import Satatic from '../components/Static';
import Calculator from '../components/Calculator';
import About from '../components/About';
import MediaState from '../components/MediaState';
import Youtube from '../components/Youtube';
import Tokenomic from '../components/Tokenomic';
import Conqust from '../components/Conqust';
import Blog from '../components/Blog';
import Faqc from '../components/Faqc';
import History from '../components/History';
import Footer from '../components/Footer';
import Telegram from '../components/Telegram';
import MainModal from './MainModal';
import Modal from './Modal';

function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [hasModalOpened, setHasModalOpened] = useState(false);
    const [modalIndex, setModalIndex] = useState(0);

    const openModal = (index) => {
        setModalIndex(index);
        setIsModalOpen(true);
        document.body.style.backgroundColor = '#333';
        document.body.classList.add('modal-open');
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.backgroundColor = '';
        document.body.classList.remove('modal-open');
    };

    useEffect(() => {
        if (!hasModalOpened) {
            // openModal(0);
            setIsModalOpen(true);
        }
    }, [hasModalOpened]);

    return (
        <div className='Home'>

            <MainModal isOpen={isModalOpen} onClose={closeModal} index={modalIndex} />

            <Hero />

            <News></News>

            <Sale></Sale>

            <Satatic></Satatic>

            <Calculator></Calculator>

            <About></About>

            <MediaState></MediaState>

            <Youtube></Youtube>

            <Tokenomic></Tokenomic>

            <Conqust></Conqust>

            <TweetBox></TweetBox>

            <Blog></Blog>

            <Faqc></Faqc>

            <History></History>

            <Footer></Footer>

            <Telegram></Telegram>

        </div>
    )
}

export default Home