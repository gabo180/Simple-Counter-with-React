import React from "react"; //Main React.js library
import PropTypes from "prop-types";

export const Counter = props => {
	let placeholder = "000000";
	// let output = placeholder + props.seconds;

	let seconds = props.seconds.toString();
	let icon = <i className="far fa-clock"></i>;

	let output = (
		placeholder
			.split("")
			.slice(seconds.length)
			.join("") + seconds
	).split("");
	output.unshift(icon);

	// let result = "test";

	let result = output.map((element, index) => {
		return (
			<div className="box" key={index}>
				{element}
			</div>
		);
	});
	// console.log(output);

	return <div>{result}</div>;
};

Counter.propTypes = {
	seconds: PropTypes.number
};
