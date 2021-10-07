import React from 'react';
import { useTodos } from './useTodos';
import { TodoHeader } from '../TodoHeader/index';
import { TodoSearch } from '../TodoSearch/index';
import { TodoCounter } from '../TodoCounter/index';
import { TodoList } from '../TodoList/index';
import { TodoItem } from '../TodoItem/index';
import { TodoForm } from '../TodoForm/index';
import { CreateTodoButton } from '../CreateTodoButton/index';
import { Modal } from '../Modal';
import { TodoError } from '../TodoError';
import { TodoLoading } from '../TodoLoading';
import { EmptyTodos } from '../EmptyTodos';
import './App.css';

function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo,
  } = useTodos();

  return (
		<React.Fragment>
      <TodoHeader>
        <TodoCounter 
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>

			<TodoList
				error={error}
				loading={loading}
				searchedTodos={searchedTodos}
				onError={() => <TodoError />}
				onLoading={() => <TodoLoading />}
				onEmptyTodos={() => <EmptyTodos />}
				render={todo => (
					<TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
				)}
			/>

      {!!openModal && (
        <Modal>
        <TodoForm
          addTodo={addTodo}
          setOpenModal={setOpenModal}
        />
        </Modal>
      )}

      <CreateTodoButton 
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
	);
}

export default App;