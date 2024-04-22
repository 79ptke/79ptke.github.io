import React, { useState, useEffect } from 'react';
import Aside from './Aside';
import Contents from './Contents';
import '../styles/common.css';

function Main() {

    const [scrollClass, setScrollClass] = useState('');
    const [selectedLink, setSelectedLink] = useState('');
    const [selectedText, setSelectedText] = useState('');
    const [isAsideOpen, setIsAsideOpen] = useState(window.innerWidth > 1012);

    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.pageYOffset;
            const windowWidth = window.innerWidth;
            if (currentPosition > 104&& windowWidth > 1012) {
                setScrollClass('scroll');
            } else {
                setScrollClass('');
            }
        };

        const handleResize = () => {
            setIsAsideOpen(window.innerWidth > 1021);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleLinkClick = (link, text) => {
        setSelectedLink(link);
        setSelectedText(text);
    };

    const handlePortfolioLinkClick = (link, text) => {
        setSelectedLink(link);
        setSelectedText(text);
    };

    const handleToggleAside = (isOpen) => {
        setIsAsideOpen(isOpen);
    };

    return (
        <div className={`AppMain ${scrollClass}`}>
            <Aside onLinkClick={handleLinkClick} onToggleAside={handleToggleAside} isAsideOpen={isAsideOpen} />
            <Contents selectedLink={selectedLink} selectedText={selectedText} onPortfolioLinkClick={handlePortfolioLinkClick} isAsideOpen={isAsideOpen} onToggleAside={handleToggleAside} />
        </div>
    );
}

export default Main;