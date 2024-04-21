import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import AboutMe from './AboutMe';
import MyProject from './MyProject';
import Blog from './Blog';
import Contact from './Contact';
import Readme from './Readme';
import Portfolio from './Portfolio';
import '../styles/common.css';
import '../styles/contents.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClone } from "@fortawesome/free-regular-svg-icons";
import IconSVG from '../components/IconSvg';



function Contents({ selectedText, selectedLink, onPortfolioLinkClick, isAsideOpen, onToggleAside }) {

    const location = useLocation();

    console.log('Current URL:', location.pathname);
    console.log('Selected Link:', selectedLink);


    const handleAsideButtonClick = () => {
        onToggleAside(!isAsideOpen); 
    };


    return (
        <div className={`Contents ${isAsideOpen ? 'aside_open' : 'aside_close'}`}>
            <div className="Contents_navHeader_wrapper flex">
                <div className="Contents_left_wrapper flex">
                    <div className="Contents_aside_wrapper flex">
                        <button type="button" className="Contents_aside_file_btn flex" onClick={handleAsideButtonClick}>
                            <div className="Aside_icon oction_filetreeopen">
                                <IconSVG  className="Aside_icon" id="icon-filetreeopen"/>
                                <div className="txt_filetreeopen">
                                    &larr; Files
                                </div>
                            </div>
                        </button>
                        <div className="Contents_aside_branch_picker flex aside_border">
                            <div className="Aside_icon">
                                <IconSVG  className="Aside_icon" id="icon-branch"/>
                            </div>
                            <span>master</span>
                            <div className="Aside_icon oction_arrow">
                                <IconSVG  className="Aside_icon" id="icon-arrow"/>
                            </div>
                        </div>
                    </div>
                    <div className="Contents_navHeader_wrapper flex">
                        <ul className="Contents_navHeader flex">
                            <li className="Contents_navHeader_list">
                                Jung da hee
                            </li>
                            <li className="Contents_navHeader_list">
                                <Link to="/portfolio">
                                    Portfolio
                                </Link>
                            </li>
                            {(location.pathname === '/' || location.pathname !== '/portfolio') && (
                                <li className="Contents_navHeader_list">
                                    <Link to={selectedLink}>
                                        {location.pathname === '/' ? 'Readme.md' : selectedText}
                                    </Link>
                                </li>
                            )}
                        </ul>
                        <button type="button" className="octicon_icon">
                            <FontAwesomeIcon icon={ faClone } />
                        </button>
                    </div>
                </div>
                <div className="Contents_right_wrapper flex">
                    <div className="Contents_aside_wrapper">
                        <div className="Contents_aside_textInput_wrapper aside_border flex">
                            <div className="Aside_icon">
                                <IconSVG  className="Aside_icon" id="icon-search"/>
                            </div>
                            <input type="text" className="Contents_aside_textInput" placeholder="Go to file" />
                            <div className="Contents_aside_textInput_icon">
                                <div className="Aside_icon">
                                    <IconSVG  className="Aside_icon" id="icon-t"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="button" className="octicon_dot octicon_icon">
                        <IconSVG  className="Aside_icon" id="icon-dot"/>
                    </button>
                </div>
            </div>
            <div className="Contents_middleInfo_wrapper flex">
                <div className="Contents_middleInfo_left flex">
                    <div className="Contents_profile_img"></div>
                    <b>JungDaHee</b>
                    <p className="ContentsP commitP">update 신입 프론트엔드 포트폴리오 개발자</p>
                </div>
                <div className="Contents_middleInfo_right flex">
                    <p className="ContentsP"><span>19j9da7 &#183;</span> 2 months ago</p>
                    <p className="flex octicon_history_wrapper">
                        <span className="octicon_icon octicon_history">
                            <IconSVG  className="Aside_icon" id="icon-history"/>
                        </span>
                        <b>History</b>
                    </p>
                </div>
            </div>
            {location.pathname === '/portfolio' ? (
                <Routes>
                    <Route path="/portfolio" element={<Portfolio onPortfolioLinkClick={onPortfolioLinkClick}/>} />
                </Routes>
            ) : (
            <div className="Contents_mainBox_wraaper">
                <div className="Contents_mainBox_top_wraaper flex">
                    <div className="Contents_mainBox_topLeft_wraaper flex">
                        <ul className="Contents_segmentedControl_btn flex">
                            <li className="on">
                                Code
                            </li>
                            <li>
                                Blame
                            </li>
                        </ul>
                        <p className="Contents_p">
                            20 lines (16 loc) · 488 Bytes
                        </p>
                    </div>
                    <div className="Contents_mainBox_topRight_wraaper flex">
                        <div className="Contents_styleBtn_wrapper flex">
                            <button type="button" className="octicon_icon octicon_raw">
                                Raw
                            </button>
                            <button type="button" className="octicon_copy octicon_icon">
                                <IconSVG  className="Aside_icon" id="icon-copy"/>
                            </button>
                            <button type="button" className="octicon_download octicon_icon">
                                <IconSVG  className="Aside_icon" id="icon-download"/>
                            </button>
                        </div>
                        <div className="Contents_styleBtn_wrapper flex">
                            <button type="button" className="octicon_pencil octicon_icon">
                                <IconSVG  className="Aside_icon" id="icon-pencil"/>
                            </button>
                            <button type="button" className="octicon_arrow octicon_icon">
                                <IconSVG  className="Aside_icon" id="icon-arrow"/>
                            </button>
                        </div>
                        <button type="button" className="octicon_code octicon_icon">
                            <IconSVG  className="Aside_icon" id="icon-codebox"/>
                        </button>
                        <button type="button" className="octicon_dot octicon_icon">
                            <IconSVG  className="Aside_icon" id="icon-dot"/>
                        </button>
                    </div>
                </div>
                <div className="Contents_mainBox_bottom_wraaper">
                    <Routes>
                        <Route path="/about_me" element={<AboutMe />} />
                        <Route path="/my_project" element={<MyProject />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/readme" element={<Readme />} />
                        <Route path="/" element={<Readme />} />
                    </Routes>
                </div>
            </div>
            )}
        </div>
    );
}

export default Contents;