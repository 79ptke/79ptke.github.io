import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/common.css';
import '../styles/portfolio.css';
import IconSVG from '../components/IconSvg';

function Portfolio({onPortfolioLinkClick}) {
    
    const handleClick = (link, text) => {
        onPortfolioLinkClick(link, text);
    };

    return (
        <div className="Contents_mainBox_wraaper">
            <table className="Contents_portfolio_mainBox_wraaper">
                <thead className="Contents_mainBox_top_wraaper">
                    <tr>
                        <th>Name</th>
                        <th>Last commit message</th>
                        <th>Last commit date</th>
                    </tr>
                </thead>
                <tbody className="Contents_mainBox_bottom_wraaper">
                    <tr>
                        <td>
                            <Link className="flex" to="/about_me" onClick={() => handleClick("/about_me", "About_me.jsx")}>
                                <IconSVG className="Aside_icon" id="icon-about"/><span>About_me.jsx</span>
                            </Link>
                        </td>
                        <td>자기소개, 개인정보, 기술 및 경험</td>
                        <td>2 months ago</td>
                    </tr>
                    <tr>
                        <td>
                            <Link className="flex" to="/my_project" onClick={() => handleClick("/my_project", "My_Project.js")}>
                                <IconSVG className="Aside_icon" id="icon-project"/><span>My_Project.js</span>
                            </Link>
                        </td>
                        <td>회사 및 개인 프로젝트</td>
                        <td>3 months ago</td>
                    </tr>
                    <tr>
                        <td>
                            <Link className="flex" to="/blog" onClick={() => handleClick("/blog", "Blog.css")}>
                                <IconSVG className="Aside_icon" id="icon-blog"/><span>Blog.css</span>
                            </Link>
                        </td>
                        <td>개발 블로그</td>
                        <td>4 months ago</td>
                    </tr>
                    <tr>
                        <td>
                            <Link className="flex" to="/contact" onClick={() => handleClick("/contact", "Contact.html")}>
                                <IconSVG className="Aside_icon" id="icon-contact"/><span>Contact.html</span>
                            </Link>
                        </td>
                        <td>메일 보내기</td>
                        <td>5 months ago</td>
                    </tr>
                    <tr>
                        <td>
                            <Link className="flex" to="/readme" onClick={() => handleClick("/readme", "README.md")}>
                                <IconSVG className="Aside_icon" id="icon-readme"/><span>README.md</span>
                            </Link>
                        </td>
                        <td>포트폴리오 리드미</td>
                        <td>1 months ago</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Portfolio;