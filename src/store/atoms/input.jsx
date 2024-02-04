import { atom, selector } from "recoil";

export const todoObj = atom({
  key: "todoObj",
  default: { title: "", description: "" },
});

export const todosArr = atom({
  key: "default",
  default: [],
});

export const searchValue = atom({
  key: "searchValue",
  default: "",
});

export const todosFilter = selector({
  key: "todosFilter",
  get: ({ get }) => {
    const value = get(searchValue);
    console.log(value, "=============search value");
    const todos = get(todosArr);
    console.log(todos, "todo======s");

    if (value.length == 0) {
      return [];
    }
    const filteredTodos = todos.filter((t) => t.title.includes(value));
    console.log(filteredTodos);
    return filteredTodos;
  },
});
