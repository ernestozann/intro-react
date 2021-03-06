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
import { EmptySearchResult } from '../EmptySearchResult';
import { ChangeAlert } from '../ChangeAlert';
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
    sincronizeTodos,
  } = useTodos();

  return (
		<React.Fragment>
      <TodoHeader loading={loading}>
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
				totalTodos={totalTodos}
				searchText={searchValue}
				onError={() => <TodoError />}
				onLoading={() => <TodoLoading />}
				onEmptyTodos={() => <EmptyTodos />}
				onEmptySearchResult={(searchText) => <EmptySearchResult />}
				
        // render={todo => (
				// 	<TodoItem
        //     key={todo.text}
        //     text={todo.text}
        //     completed={todo.completed}
        //     onComplete={() => completeTodo(todo.text)}
        //     onDelete={() => deleteTodo(todo.text)}
        //   />
				// )}
			>
        {todo => (
					<TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
				)}
      </TodoList>

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

      <ChangeAlert 
        sincronize={sincronizeTodos}
      />
    </React.Fragment>
	);
}

export default App;