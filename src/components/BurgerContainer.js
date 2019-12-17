import React, { Component } from "react";
import BurgerList from "./BurgerList";
import BurgerFilter from "./BurgerFilter";

export default class BurgerContainer extends Component {
	render() {
		console.log(this.props.displayBurgers);
		return (
			<div className="BurgerContainer">
				<BurgerFilter filteredBurger={this.props.filteredBurger} />
				{this.props.displayBurgers.map(burger => (
					<BurgerList
						key={burger.id}
						id={burger.id}
						name={burger.name}
						handleClick={this.props.handleClick}
					/>
				))}
			</div>
		);
	}
}
