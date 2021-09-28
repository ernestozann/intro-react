import React from 'react';
import './TodoLoading.css'

function TodoLoading({ error }) {
	return (
	<div className='LoadingTodo-container'>
		<span className='LoadingTodo-completeIcon'></span>
		<p className='LoadingTodo-text'>Cargando beep boop beep beep boob</p>
		<span className='LoadingTodo-deleteIcon'></span>
	</div>
	);
}

export { TodoLoading };