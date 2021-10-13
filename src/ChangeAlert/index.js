import React from "react";
import { useStorageListener } from "./useStorageListener";
import './ChangeAlert.css';

function ChangeAlert({ sincronize }) {
	const { show, toggleShow } = useStorageListener(sincronize);

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

export { ChangeAlert };