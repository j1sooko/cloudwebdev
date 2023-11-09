import '../TodoItem.css'

function TodoItem({item, onUpdate, onDelete, inputValue}) {
    const onReplace = (e) => {
        console.log(e.target.parentElement.id);
        let id = parseInt(e.target.parentElement.id);
        let changeTodo = null;
        console.log(inputValue);
        if (inputValue !== null) changeTodo = inputValue;
        onUpdate(id, changeTodo);
    }

    const onDel = () => {
        onDelete(item);
    }
    return (
        <div className="todoitem" key={item.id} id={item.id}>
            {item.todo}
            <button onClick={onReplace}>업데이트</button>
            <button onClick={onDel}>삭제</button>
        </div>
    )
}

export default TodoItem;