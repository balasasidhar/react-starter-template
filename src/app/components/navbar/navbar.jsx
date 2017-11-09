/**
 * Created by sasidhar on 09/11/17.
 */

import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container">

                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                        </button>
                        <Link className="navbar-brand" to="/">Sasidhar</Link>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <Link to="/product">PRODUCT</Link>
                            </li>
                            <li>
                                <Link to="/app-library">APP LIBRARY</Link>
                            </li>
                            <li>
                                <Link to="/learn">LEARN</Link>
                            </li>
                            <li>
                                <Link to="/price">PRICE</Link>
                            </li>
                            <li>
                                <Link to="/blog">BLOG</Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        );
    }

}

export default Navbar;