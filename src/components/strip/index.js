import React, { Component } from 'react';
import Imagebox from '../imagebox';

import './strip.scss';
// import { Container } from './styles';

export default class Strip extends Component {

    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
      }
      
      componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
      }
      
      listenToScroll = () => {
        const winScroll =
          document.body.scrollTop || document.documentElement.scrollTop
      
        const height =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight
      
        const scrolled = winScroll / height
      
        document.body.style.setProperty('--scroll', scrolled);
      }

    render() {

        const position = {
            marginLeft: this.props.left ?? 0,
            marginTop: this.props.top ?? 0,
        };

        let classes = "strip " + (this.props.foward ? "foward" : "backwards");

        return (
            <div className={classes} style={position}>
                <Imagebox />
                <Imagebox />
                <Imagebox />
            </div>
        );
    }
}
