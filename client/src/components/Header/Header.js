import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    // header;
    // height;

    //might need if we want to have announcements above header
    // componentDidMount() {
    //     this.header = document.getElementById('header');
    //     this.height = this.header.offsetTop;
    //     window.onscroll = () => {
    //         if(window.pageYOffset > this.height)
    //             this.header.classList.add('sticky');
    //         else
    //             this.header.classList.remove('sticky');
    //     }
    // }

    render() {
        return (
            <div id='header' className='header sticky'>
                <div className='logo-box'>
                    <svg className='logo-icon'>
                        <use href='img/sprite.svg#icon-home'/>
                    </svg>
                    <span className='nav-right-space'>Herdit</span>
                </div>
                <nav className='nav-buttons'>
                    <div className='nav-box'>
                        <svg className='nav-icon'>
                            <use href='img/sprite.svg#icon-chat'/>
                        </svg>
                        <span className='notification'>5</span>
                    </div>
                    <div className='nav-box'>
                        <svg className='nav-icon'>
                            <use href='img/sprite.svg#icon-mail'/>
                        </svg>
                        <span className='notification'>10</span>
                    </div>
                    <div className='nav-box'>
                        <svg className='nav-icon'>
                            <use href='img/sprite.svg#icon-user'/>
                        </svg>
                        <span className='nav-right-space'>Mr.Rorschac</span>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;