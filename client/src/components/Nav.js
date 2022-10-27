import {NavLink} from 'react-router-dom'

import styles from './Nav.module.scss';
import logo from '../assets/logo.svg';
const Nav = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <img src={logo} alt="" />
            </div>
            <div className={styles.name}>Vita Balance</div>
            <div className={styles.links}>
                <ul>
                    <li>
                        <NavLink to='/water' className={ ({ isActive }) => isActive ? styles.active : styles.unSelected}>
                            <h1>Water Regulator</h1>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/pill' className={ ({ isActive }) => isActive ? styles.active : styles.unSelected} >
                            <h1>Pill Dispenser</h1>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/air' className={ ({ isActive }) => isActive ? styles.active : styles.unSelected} >
                            <h1>Air freshener</h1>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/uv' className={ ({ isActive }) => isActive ? styles.active : styles.unSelected} >
                            <h1>UV Detector</h1>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/plant' className={ ({ isActive }) => isActive ? styles.active : styles.unSelected} >
                            <h1>Plant Tender</h1>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <NavLink to='/about' className={ ({ isActive }) => isActive ? styles.active : styles.unSelected} >
                <h1>About us</h1>
            </NavLink>
        </div>
    );
};

export default Nav;