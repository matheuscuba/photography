import React, { Component } from 'react';
import LogoImage from './../../assets/img/logo.png'
import './sidebar.scss';

export default class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <img src={LogoImage} className="logo" />
                <p className="title">
                    Hello, I’m Matheus Cuba
                    <br />
                    I’m a amateur photographer 
                </p>
            </div>
        );
    }
}
