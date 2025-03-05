"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeToDo} from "./redux/slices/toDoSlice";
import { MdDelete } from "react-icons/md";

const Page = () => {
  const [todo, setToDo] = useState("");
  const dispatch = useDispatch();
  const data = useSelector((state) => state.todos.toDos);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim()) {
      dispatch(addTodo(todo));
      setToDo("");
    }
  };

  return (
    <div className="w-screen h-screen bg-gray-200 flex justify-center items-center">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-5">
        <h1 className="text-xl font-bold text-center mb-4">Todo List</h1>
        
        {/* Input Form */}
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            placeholder="Enter your task"
            className="flex-1 p-2 border rounded-md focus:outline-none"
            value={todo}
            onChange={(e) => setToDo(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Add
          </button>
        </form>

        {/* Todo List */}
        <ul className="mt-4 space-y-2 h-96 overflow-y-scroll">
          {data?.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center bg-blue-100 text-gray-800 p-3 rounded-md shadow"
            >
              <span className="truncate">{item.text}</span>
              <MdDelete
                className="text-red-500 cursor-pointer hover:text-red-700"
                onClick={() => dispatch(removeToDo(item.id))}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Page;
