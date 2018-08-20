import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import {Home} from "./pages/home";
import {Newproduct} from "./pages/addProduct";

const App = () => (
	<Router>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/products/add" component={Newproduct} />
			<Route path="/products/edit/:productId" component={About} />
			<Route path="/products" component={Topics} />
			<Route component={ErrorPage} />
		</Switch>
	</Router>
);

class About extends React.Component {
	componentDidMount() {
		document.title = "About"
	}

	render() {
		console.log(this.props)
		return (
			<div>
				<h2>Abou<Link to="/home">t</Link></h2>
			</div>
		)
	}

};

const ErrorPage = ({ match }) => (
	<div>
		404
	</div>
);

const Topics = ({ match }) => (
	<div>
		<h2>Topics</h2>
	</div>
);

ReactDOM.render(<App />, document.getElementById("app"));