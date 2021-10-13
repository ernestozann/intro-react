import React from "react";
import { withStorageListener } from "./withStorageListener";
import './ChangeAlert.css';

function ChangeAlert({ show, toggleShow }) {
	if (show) {
		return (
			<div className="ChangeAlert-bg">
				<div className="ChangeAlert-container">
					<p>looks like you change your ToDos in another window or tab</p>
					<p>Do you want to sincronize your ToDos?</p>
					<button
						className="TodoForm-button TodoForm-button--add"
						onClick={toggleShow}
					>
						Yes!
					</button>
				</div>
			</div>
		);
	} else {
		return null;
	}
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };