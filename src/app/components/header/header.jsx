/**
 * Created by sasidhar on 09/11/17.
 */

import './header.styles.less';

import React, {Component} from 'react';

import Navbar from '../navbar/navbar.jsx';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Navbar/>
            </div>
        );
    }

}

export default Header;