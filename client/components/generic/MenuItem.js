import React from 'react';

const MenuItem = React.createClass({
    render() {
        return (
            <li className="nav-item start">
                <a href="javascript:;" className="nav-link nav-toggle">
                    <i className="icon-home"></i>
                    <span className="title">{this.props.title}</span>
                    <span className="selected"></span>
                </a>
            </li>
        )
    }
});

export default MenuItem;
