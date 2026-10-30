import React from "react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./styles/Global.css";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

root.render(
	<BrowserRouter>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</BrowserRouter>,
	document.getElementById("root"),
);
