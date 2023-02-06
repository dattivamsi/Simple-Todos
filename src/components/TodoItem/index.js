// Write your code here
import './index.css'

const TodoItem = props => {
  const {eachTodoDetails, deleteTodo} = props
  const {id, title} = eachTodoDetails

  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="list-item">
      <p className="title">{title}</p>
      <button type="button" onClick={onDelete} className="delete-button">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
