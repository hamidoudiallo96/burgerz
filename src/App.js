import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BurgerContainer from "./components/BurgerContainer";
import BurgerDisplay from "./components/BurgerDisplay";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			burgers: [],
			burger: [],
			displayBurgers: []
		};
	}

	filteredBurger = type => {
		console.log(type);
		if (type !== "All") {
			this.setState({
				displayBurgers: this.state.burgers.filter(
					burger => burger.category === type
				)
			});
		} else {
			this.setState({
				displayBurgers: this.state.burgers
			});
		}
	};

	handleClick = id => {
		let filteredBurgerArr = this.state.burgers.filter(
			burger => burger.id === id
		);
		this.setState({
			burger: filteredBurgerArr
		});
		console.log(filteredBurgerArr);
	};

	componentDidMount() {
		fetch("http://localhost:3001/burgers")
			.then(res => res.json())
			.then(burgerData =>
				this.setState({ burgers: burgerData, displayBurgers: burgerData })
			);
	}
	render() {
		return (
			<div id="App">
				<BurgerContainer
					burgers={this.state.burgers}
					filteredBurger={this.filteredBurger}
					handleClick={this.handleClick}
					displayBurgers={this.state.displayBurgers}
				/>
				{this.state.burger.map(burger => (
					<BurgerDisplay
						id={burger.id}
						name={burger.name}
						image={burger.imgURL}
					/>
				))}
			</div>
		);
	}
}
export default App;
