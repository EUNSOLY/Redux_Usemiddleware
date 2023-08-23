import React, { useState, useEffect } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { RootState } from "./reducers";
import axios from "axios";
import { fetchPosts } from "./reducers/actions/posts";
type Props = {
  value: any;
  onIncrement: () => void;
  onDcrement: () => void;
};

interface Post {
  userId: Number;
  id: Number;
  title: String;
}
function App({ value, onIncrement, onDcrement }: Props) {
  const counter = useSelector((state: RootState) => state.counter);
  const todos: string[] = useSelector((state: RootState) => state.todos);
  const posts: Post[] = useSelector((state: RootState) => state.posts);
  console.log("useSelector(counter)", counter);
  console.log("useSelector(todos)", todos);
  console.log("useSelector(posts)", posts);
  const dispatch = useDispatch();

  const [todoValue, setTodoValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoValue(e.target.value);
  };
  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", text: todoValue });
    setTodoValue("");
  };

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="App">
      {/* Clickd : {value}times */}
      <button onClick={onIncrement}>+</button>
      <button onClick={onDcrement}>-</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <form onSubmit={addTodo}>
        <input type="text" value={todoValue} onChange={handleChange} />
        <input type="submit" />
      </form>

      <ul>
        {posts.map((post, index) => (
          <li key={index}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
