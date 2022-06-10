//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
// include your styles into the webpack bundle
import "../styles/index.css";
//import your own components
import Reloj from "./component/Reloj.jsx";

let counter = 0;
setInterval(function () {
	ReactDOM.render(
		<Reloj seconds={counter} />,
		document.getElementById("app")
	);
	counter += 1;
}, 1000);
