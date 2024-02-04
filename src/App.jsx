import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import {
  searchValue,
  todoObj,
  todosArr,
  todosFilter,
} from "./store/atoms/input";

const initialTodo = {
  title: "",
  description: "",
};
function App() {
  // create a todo app
  // input title and description
  // btton to add the todos
  // create another input with search button to get the list of the todos only which are searched

  return (
    <div>
      <RecoilRoot>
        <Todo />
        <SearchBar />
      </RecoilRoot>
    </div>
  );
}

export default App;

function Todo() {
  const [todo, setTodo] = useRecoilState(todoObj);
  function handleTodoChange(e) {
    const { name, value } = e.target;
    console.log(value);
    const newTodo = { ...todo, [name]: value };
    setTodo(newTodo);
  }

  return (
    <div>
      <input
        type="text"
        name="title"
        placeholder="title"
        onChange={handleTodoChange}
        value={todo.title}
      />
      <input
        type="text"
        name="description"
        value={todo.description}
        placeholder="description"
        onChange={handleTodoChange}
      />
      <AddTodo />
    </div>
  );
}

function AddTodo() {
  const [todos, setTodos] = useRecoilState(todosArr);
  const [todo, setTodo] = useRecoilState(todoObj);
  function handleAddTodo() {
    console.log(todo);
    const newTodos = [...todos, todo];
    console.log(newTodos, "===========newTOdos");
    setTodos(newTodos);
    setTodo(initialTodo);
  }

  return (
    <div>
      <button onClick={handleAddTodo}>Add Todo</button>
      <div>
        {todos.map((todo, idx) => (
          <div style={{ border: "1px solid black" }}>
            {idx + 1}
            <div>{todo.title}</div>
            <div>{todo.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
function SearchBar() {
  const setSearchedKey = useSetRecoilState(searchValue);
  const filteredTodos = useRecoilValue(todosFilter);
  function handleSearch() {}
  return (
    <div>
      <input
        type="text"
        placeholder="Enter the keyword"
        onChange={(e) => setSearchedKey(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        {filteredTodos.map((todo, idx) => (
          <div style={{ border: "1px solid black" }}>
            {idx + 1}
            <div>{todo.title}</div>
            <div>{todo.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
