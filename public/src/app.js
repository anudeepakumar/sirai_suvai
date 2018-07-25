import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const App = () => (
	<Router>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/about/:test" component={About} />
			<Route path="/topics" component={Topics} />
			<Route component={ErrorPage} />
		</Switch>
	</Router>
);

const Home = () => (
	<div>
		<h2>Home</h2>
	</div>
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