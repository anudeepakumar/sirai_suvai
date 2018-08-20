import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/header";

export class Home extends React.Component {
    render() {
        return(
            <div>
                <Header/>
                Home
                <ul>
                    <li> <Link to="/products"> Products</Link></li>
                    <li> <Link to="/products/add"> New Product</Link></li>
                    <li>... more</li>
                </ul>
            </div>
        );
    };
};

// export default Home;