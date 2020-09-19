import React, { Component } from 'react';
import Demo from './../../assets/img/demo.png'

import './imagebox.scss'

export default class Imagebox extends Component {
    render() {
        return (
            <div className="imagebox"> 
                <img src={Demo} />
            </div>
        );
    }
}
