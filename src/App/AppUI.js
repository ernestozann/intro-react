import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter/index';
import { TodoSearch } from '../TodoSearch/index';
import { TodoList } from '../TodoList/index';
import { TodoItem } from '../TodoItem/index';
import { TodoForm } from '../TodoForm/index';
import { CreateTodoButton } from '../CreateTodoButton/index';
import { Modal } from '../Modal';

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

	return (
		<React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <p>Oh no, un error... :( </p>}
        {loading && <p>Estamos cargando, no desespereis...</p>}
        {(!loading && !searchedTodos.length) && <p>Crea tu primer ToDo uwu</p>}

        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {!!openModal && (
        <Modal>
        <TodoForm />
        </Modal>
      )}

      <CreateTodoButton 
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
	);
}

export { AppUI };