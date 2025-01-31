import React, { Component } from "react";

const BurgerDisplay = props => {
	console.log(props);
	return (
		<div className="BurgerDisplay">
			<img src={props.image} />
			<br />
			<h1>{props.name}</h1>
			<br />
			<select onChange={console.log}>
				<option value="Relatable">Relatable</option>
				<option value="Bougie">Bougie</option>
			</select>
		</div>
	);
};

export default BurgerDisplay;
