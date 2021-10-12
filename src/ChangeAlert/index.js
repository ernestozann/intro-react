import React from "react";
import { withStorageListener } from "./withStorageListener";

function ChangeAlert({ show, toggleShow }) {
	if (show) {
		return <p>Hubo cambios!! Cambios por todos lados!!</p>;
	} else {
		
	}
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };