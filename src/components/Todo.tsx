import React, { useState } from 'react';

interface TodoInt {
    id: number;
    text: string;
    completed: boolean;
}

const Todo: React.FC = () => {
    const [todos, setTodos] = useState<TodoInt[]>([]);
    const [inputValue, setInputValue] = useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleAddTodo = () => {
        if (inputValue.trim() !== '') {
            const newTodo: TodoInt = {
                id: todos.length + 1,
                text: inputValue,
                completed: false,
            };
            setTodos([...todos, newTodo]);
            setInputValue('');
        }
    };

    const handleToggleTodo = (id: number) => {
        const updatedTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
    };

    const handleDeleteTodo = (id: number) => {
        const filteredTodos = todos.filter((todo) => todo.id !== id);
        setTodos(filteredTodos);
    };

    return (
        <div style={{ textAlign: 'left' }}>
            <h1>Todo App</h1>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Add a new todo"
            />
            <button onClick={handleAddTodo}>Add Todo</button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => handleToggleTodo(todo.id)}
                        />
                        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                            {todo.text}
                        </span>
                        <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todo;