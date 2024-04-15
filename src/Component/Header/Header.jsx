// import React from 'react';
import './Header.css'
import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div >
            <div className='header'>
                <span className="siteName">Developer Vlogs</span>
                <img className='profileImage' src={profile} alt="" />
            </div>
            <hr className='headerHrLine' />
        </div>
    );
};

export default Header;