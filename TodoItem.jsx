export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
    return
    (<li>
        <label htmlFor="">
            <input type="checkbox" name="" id="" checked={todo.completed}
                onChange={e => toggleTodo(todo.id, e.target.checked)} />{todo.title}
        </label>
        <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">Delete</button>
    </li>)
}