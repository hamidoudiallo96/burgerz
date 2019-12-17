import React, { Component } from "react";
import BurgerItem from "./BurgerItem";

const BurgerList = props => {
	console.log(props);
	return (
		<div className="BurgerList">
			<BurgerItem
				id={props.id}
				name={props.name}
				image={props.imgURL}
				handleClick={props.handleClick}
			/>
		</div>
	);
};

export default BurgerList;
