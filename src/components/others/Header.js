import React from 'react'

const Header = ({userData, handleLogout}) => {
    return (
        <div className='header'>
            <div className="gree-box">
                <div className="greet">Hello,</div>
                <div className="name">{userData.name}👋</div>
            </div>
            <button className='logout-btn' onClick={handleLogout}>Log Out</button>
        </div>
    )
}

export default Header
