import '../styles/common.css';
import '../styles/header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTerminal} from "@fortawesome/free-solid-svg-icons";
import IconSVG from '../components/IconSvg';

function Header() {

    return (
        <div className="AppHeader">
            <div className="ApperHeader_wrapper">
                <div className="AppHeader_globalBar flex">
                    <div className="AppHeader_globarBar_start flex">
                        <button type="button"className="AppHeader_btn AppHeader_icon_menu">
                                <FontAwesomeIcon icon={faBars} />
                        </button>
                        <a href="#!">
                            <IconSVG id="logo" width="32" height="32"/>
                        </a>
                        <p className="AppHeader_context_item_label">JungDaHee / <b>Portfolio</b></p>
                    </div>
                    <div className="AppHeader_globalBar_end flex">
                        <div className="AppHeader_btn AppHeader_search_wrapper">
                            <button type="button"className="AppHeader_icon_search AppHeader_btnIcon">
                                <IconSVG id="icon-search"/>
                            </button>
                            <div className="AppHeader_search_text_wrapper flex">
                                <p className="AppHeader_search_text">Type <span>/</span> to search</p>
                                <div className="AppHeader_search_text_icon">
                                    <FontAwesomeIcon icon={faTerminal} />
                                </div>
                            </div>
                        </div>
                        <div className="AppHeader_icon_wrapper flex">
                            <div className="AppHeader_btn AppHeader_icon_btn_wrapper">
                                <button type="button"className="AppHeader_icon_plus AppHeader_btnIcon">
                                    <IconSVG id="icon-plus"/>
                                </button>
                                <button type="button"className="AppHeader_icon_arrow AppHeader_btnIcon">
                                    <IconSVG id="icon-arrow"/>
                                </button>
                            </div>
                            <button type="button"className="AppHeader_btn AppHeader_icon_issues AppHeader_btnIcon">
                                <IconSVG id="icon-issues"/>
                            </button>
                            <button type="button"className="AppHeader_btn AppHeader_icon_pulls AppHeader_btnIcon">
                                <IconSVG id="icon-pullrequests"/>
                            </button>
                        </div>
                        <button type="button"className="AppHeader_btn AppHeader_icon_notification AppHeader_btnIcon">
                            <IconSVG id="icon-notifications"/>
                        </button>
                        <div className="AppHeader_btn AppHeader_profile_img"></div>
                    </div>
                </div>
                <div className="AppHeader_localBar">
                    <ul className="UnderlineNav_body flex">
                        <li className="AppHeader_btnIcon">
                            <IconSVG id="icon-code"/>
                            Code
                        </li>
                        <li className="AppHeader_btnIcon">
                            <IconSVG id="icon-issues"/>
                            Issues
                        </li>
                        <li className="AppHeader_btnIcon">
                            <IconSVG id="icon-pullrequests"/>
                            Pull requests
                        </li>
                        <li className="AppHeader_btnIcon">
                            <IconSVG id="icon-actions"/>
                            Actions
                        </li>
                        <li className="AppHeader_btnIcon">
                            <IconSVG id="icon-projects"/>
                            Projects
                        </li>
                        <li className="AppHeader_btnIcon">
                            <IconSVG id="icon-security"/>
                            Security
                        </li>
                        <li className="AppHeader_btnIcon">
                            <IconSVG id="icon-insights"/>
                            Insights
                        </li>
                        <li className="AppHeader_btnIcon">
                            <IconSVG id="icon-settings"/>
                            Settings
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;