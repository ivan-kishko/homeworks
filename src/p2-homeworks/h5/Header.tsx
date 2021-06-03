import React, {useState} from 'react'
import {NavLink} from 'react-router-dom';
import classes from './Header.module.css'

function Header() {
    const [visible, setVisible] = useState<boolean>(false)
    const changeMode = () => setVisible(!visible)

    return (
        <div className={classes.navWrapper}>
            <div>
                <button className={classes.navButton} onClick={changeMode}>{visible ? `Menu <<` : `Menu >>`}</button>
            </div>
            <div className={visible ? classes.navigationAppear : classes.navigationHide}>
                <NavLink onClick={changeMode} className={classes.link} to="/pre-junior">pre-junior level homeworks</NavLink>
                <NavLink onClick={changeMode} className={classes.link} to="/junior">junior level homeworks</NavLink>
                <NavLink onClick={changeMode} className={classes.link} to="/junior-plus">junior-plus level homeworks</NavLink>
            </div>
            {/*<div>*/}
            {/*    <button className={`${classes.navButton} ${visible ? classes.navButtonAppear : classes.navButtonHide}`} onClick={changeMode}>{visible ? `<< nav ` : `nav >>`}</button>*/}
            {/*</div>*/}
        </div>
    )
}

export default Header;
