/**
 * Created by sasidhar on 09/11/17.
 */

import React, {Component} from 'react';
import Header from '../../components/header/header.jsx';
class Blog extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Header/>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Blog Page</h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Blog;