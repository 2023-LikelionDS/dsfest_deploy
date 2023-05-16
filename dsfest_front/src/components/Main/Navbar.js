import React, { useCallback, useState, useEffect } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import FesLogo from '../../img/main_logo.svg';
import styles from '../../css/Navbar.css';

const Menubar = () => {
    // 메뉴 열림,닫힘 상태
    const [menuActive, setMenuActive] = useState(false);
    const MenuStateHandle = useCallback((e) => {
        setMenuActive(!menuActive);
    });
    const menuClose = useCallback((e) => {
        setMenuActive(false);
    });
    const handleClick = () => {
        alert('5월 19일 대개봉~! Coming sooooon');
    };

    // 스크롤 시, 네브바 닫힘
    useEffect(() => {
        const handleScroll = () => {
            setMenuActive(false);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div className={`menubar ${menuActive ? 'active' : ''}`}>
                <div className="HeaderTop">
                    <Link className="FesLogoLink" to="/main">
                        <img src={FesLogo} alt="로고" />
                    </Link>
                    <div
                        className={`hamburger ${menuActive ? 'active' : ''}`}
                        onClick={MenuStateHandle}
                    >
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </div>
                <div className="HeaderBottom">
                    <ul className={menuActive ? 'NavMenuActive' : 'NavMenu'}>
                        <NavLink
                            to="/notice"
                            className={({ isActive }) =>
                                isActive ? 'navActive' : 'nav'
                            }
                            onClick={menuClose}
                        >
                            <li className="NavItem n_item1">공지사항</li>
                        </NavLink>
                        <NavLink
                            to="/schedule"
                            className={({ isActive }) =>
                                isActive ? 'navActive' : 'nav'
                            }
                            onClick={menuClose}
                        >
                            <li className="NavItem n_item1">상영 시간표</li>
                        </NavLink>
                        <NavLink
                            to="review"
                            className={({ isActive }) =>
                                isActive ? 'navActive' : 'nav'
                            }
                            onClick={menuClose}
                        >
                            <li className="NavItem n_item1">상영작 후기</li>
                        </NavLink>
                        <NavLink
                            // to="/event"
                            className={({ isActive }) =>
                                isActive ? 'navActive' : 'nav'
                            }
                            // onClick={menuClose}
                            onClick={handleClick}
                        >
                            <li className="NavItem">낭만에 대하여</li>
                        </NavLink>
                    </ul>
                </div>
            </div>
            <div
                className={menuActive ? 'navOverlayActive' : 'navOverlay'}
                onClick={menuClose}
            ></div>
        </div>
    );
};
export default Menubar;
