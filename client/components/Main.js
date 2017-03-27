import React from 'react';
import { Link } from 'react-router';
import Header from './generic/Header';
import Footer from './generic/Footer';
import Menu from './generic/Menu';

const Main = React.createClass({
    render() {
        return (
            <div>
                <Header/>
                <div className="page-container">
                    <Menu/>
                    <div className="page-content-wrapper">
                        <div className="page-content">
                            { React.cloneElement(this.props.children, this.props) }
                        </div>
                    </div>

                </div>

                <Footer/>
            </div>
        )
    }
});

export default Main;