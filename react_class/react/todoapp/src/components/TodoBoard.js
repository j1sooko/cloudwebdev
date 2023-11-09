import TodoItem from "./TodoItem";

function TodoBoard({todoList, onUpdate, onDelete, inputValue}) {
    return (
        <div>
            <h1 style={{color: "rgb(183, 193, 238)"}}>Todo List</h1>
            {
                todoList.map((item) => 
                    <TodoItem key={item.id} item={item} onUpdate={onUpdate} 
                    onDelete={onDelete} inputValue={inputValue}/>)
                // props.todoList.map((item) => <TodoItem item={item} />) // key warning
                // props.todoList.map((item) => <TodoItem key={item} item={item} />)
            }
        </div>
    )

}
export default TodoBoard;