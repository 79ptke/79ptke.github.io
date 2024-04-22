import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/common.css';
import '../styles/aside.css';
import IconSVG from '../components/IconSvg';


function Aside({ onLinkClick, onToggleAside, isAsideOpen }) {

    const [isOpen, setIsOpen] = useState(true);
    const [scrollDistance, setScrollDistance] = useState(0)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768 && isAsideOpen) {
                document.body.classList.add('no-scroll');
            } else {
                document.body.classList.remove('no-scroll');
            }
        };

        const handleScroll = () => {
            const scrolled = window.scrollY;
            setScrollDistance(scrolled);
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);
        handleResize();
        handleScroll();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll); 
        };
    }, [isAsideOpen]);

    const togglePortfolio = () => {
        setIsOpen(!isOpen); 
    };

    const handleItemClick = (index) => {
        const listItems = document.querySelectorAll('.list'); 
        listItems.forEach((item, idx) => { 
            if (idx === index) { 
                item.classList.add('on'); 
            } else {
                item.classList.remove('on');
            }
        });
    };

    const handleAsideButtonClick = () => {
        onToggleAside(!isAsideOpen); 
    };

    return (
        <div className={`Aside ${isAsideOpen ? 'aside_open' : 'aside_close'}`} style={{ top: window.innerWidth <= 768 ? `calc(104px - ${scrollDistance}px)` : '0' }}>
            <div className="Aside_top_wrapper">
                <div className="Aside_file_btn_wrapper flex">
                    <button type="button" className="Aside_file_btn flex" onClick={handleAsideButtonClick}>
                        <IconSVG  className="Aside_icon" id="icon-filetree"/>
                    </button>
                    <span>Files</span>
                </div>
                <div className="Aside_branch_picker_wrapper flex">
                    <div className="Aside_branch_picker flex aside_border">
                        <IconSVG  className="Aside_icon" id="icon-branch"/>
                        <span>master</span>
                        <div className="Aside_icon_arrow_wrapper">
                            <IconSVG  className="Aside_icon arrowIcon" id="icon-arrow"/>
                        </div>
                    </div>
                    <div className="Aside_octicon_btn_wrapper aside_border">
                        <button type="button" className="octicon_plus octicon_icon">
                            <IconSVG  className="Aside_icon" id="icon-plus"/>
                        </button>
                        <button type="button" className="octicon_search octicon_icon">
                            <IconSVG  className="Aside_icon" id="icon-search"/>
                        </button>
                    </div>
                </div>
                <div className="Aside_textInput_wrapper aside_border flex">
                        <IconSVG  className="Aside_icon" id="icon-search"/>
                    <input type="text" className="Aside_textInput" placeholder="Go to file" />
                    <div className="Aside_textInput_icon">
                        <IconSVG  className="Aside_icon" id="icon-t"/>
                    </div>
                </div>
            </div>
            <div className="Aside_bottom_wrapper">
                <ul className="Aside_tree_item_wrapper">
                    <li className={`Asdie_treeView_containers ${isOpen ? 'open' : 'close'}`}>
                        <div className="list on" onClick={() => handleItemClick(0)}>
                            <div className="flex" onClick={togglePortfolio}>
                                <IconSVG  className="Aside_icon" id="icon-filearrow"/>
                                <IconSVG  className="Aside_icon" id="icon-folderopen"/>
                                <IconSVG  className="Aside_icon" id="icon-folder"/>
                                <span>Portfolio</span>
                            </div>
                        </div>
                        <ul>
                            <li className="Asdie_treeView_container list" onClick={() => handleItemClick(1)}>
                                <Link to="/about_me" onClick={() => onLinkClick("/about_me","About_me.jsx")}>
                                    <div></div>
                                    <IconSVG  className="Aside_icon" id="icon-about"/>
                                    <span>About_me.jsx</span>
                                </Link>
                            </li>
                            <li className="Asdie_treeView_container list" onClick={() => handleItemClick(2)}>
                                <Link to="/my_project" onClick={() => onLinkClick("/my_project","My_Project.js")}>
                                    <div></div>
                                    <IconSVG  className="Aside_icon" id="icon-project"/>
                                    <span>My_Project.js</span>
                                </Link>
                            </li>
                            <li className="Asdie_treeView_container list" onClick={() => handleItemClick(3)}>
                                <Link to="/blog" onClick={() => onLinkClick("/blog","Blog.css")}>
                                    <div></div>
                                    <IconSVG  className="Aside_icon" id="icon-blog"/>
                                    <span>Blog.css</span>
                                </Link>
                            </li>
                            <li className="Asdie_treeView_container list" onClick={() => handleItemClick(4)}>
                                <Link to="/contact" onClick={() => onLinkClick("/contact","Contact.html")}>
                                    <div></div>
                                    <IconSVG  className="Aside_icon" id="icon-contact"/>
                                    <span>Contact.html</span>
                                </Link>
                            </li>
                            <li className="Asdie_treeView_container list" onClick={() => handleItemClick(5)}>
                                <Link to="/readme" onClick={() => onLinkClick("/readme","README.md")}>
                                    <div></div>
                                        <IconSVG  className="Aside_icon" id="icon-readme"/>
                                    <span>README.md</span>
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Aside;