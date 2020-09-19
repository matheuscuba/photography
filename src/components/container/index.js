import React, { Component } from 'react';

import './container.scss';

export default class Container extends Component {
    render() {
        return <div className="container">{ this.props.children }</div>;
    }
}
