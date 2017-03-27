import React from 'react';
import MenuItem from './MenuItem';

const Menu = React.createClass({
    render() {
        return (
            <div className="page-sidebar-wrapper">
                <div className="page-sidebar navbar-collapse collapse">
                    <ul className="page-sidebar-menu  page-header-fixed " data-keep-expanded="false" data-auto-scroll="true" data-slide-speed="200" >
                        <li className="sidebar-toggler-wrapper hide">
                            <div className="sidebar-toggler">
                                <span></span>
                            </div>
                        </li>
                        <li className="sidebar-search-wrapper">
                            <form className="sidebar-search  " action="page_general_search_3.html" method="POST">
                                <a href="javascript:;" className="remove">
                                    <i className="icon-close"></i>
                                </a>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Search..."/>
                                    <span className="input-group-btn">
                                            <a href="javascript:;" className="btn submit">
                                                <i className="icon-magnifier"></i>
                                            </a>
                                        </span>
                                </div>
                            </form>
                        </li>
                        <MenuItem title="Clients"/>
                        <MenuItem title="Invoices"/>
                    </ul>
                </div>
            </div>

        )
    }
});

export default Menu;