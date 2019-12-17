import React, { Component } from "react";

const BurgerItem = props => {
	return (
		<div>
			<div className="BurgerItem">{props.name}</div>
			<div className="BurgerBottomBun">
				<button onClick={() => props.handleClick(props.id)}>Show</button>
				<button onClick={console.log}>Delete</button>
			</div>
		</div>
	);
};

export default BurgerItem;
