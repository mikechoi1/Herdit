import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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

    renderContent() {
        switch(this.props.auth) {
            case null:
                return;
            case false:
                return (
                        <div className='logo-box'>
                            <a href="/auth/google" className='link logo-text'>Login With Google</a>
                        </div>
                );
            default:
                return (
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
                            <span><a href="/api/logout" className='link logo-text'>Logout</a></span>
                        </div>
                    </nav>
                );
        }
    }

    render() {
        return (
            <div className='header sticky'>
                <div className='logo-box'>
                    <Link to='/' className='link logo-text'>Herdit</Link>
                </div>
                {this.renderContent()}
            </div>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);