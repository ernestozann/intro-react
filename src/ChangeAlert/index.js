import React from "react";
import { withStorageListener } from "./withStorageListener";

function ChangeAlert({ show, toggleShow }) {
	if (show) {
		return (
			<div>
				<p>Hubo cambios!! Cambios por todos lados!!</p>
				<button
					onClick={() => toggleShow(false)}
				>
					Refresh ToDos
				</button>
			</div>
		);
	} else {
		return null;
	}
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };