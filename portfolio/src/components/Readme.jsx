import { Link } from 'react-router-dom';
import '../styles/common.css';
import "../styles/readme.css";


function Readme() {
    return (
        <div className="readme">
            <div className="readme_contents_wrapper">
                <h1>PORTFOLIO</h1>
                <p>I'm web publisher <br /> Jung Dahee</p>
                <div className="text_line"></div>
                <ul className="flex">
                    <li>
                        <Link to="/my_project">My Project</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact me</Link>
                    </li>
                </ul>
            </div>
            <div className="readme_animation_wrapper">
                <div className="wave wave_one"></div>
                <div className="wave wave_two"></div>
                <div className="wave wave_three"></div>
            </div>
        </div>
    );
}

export default Readme;