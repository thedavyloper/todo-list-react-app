import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
  let strikeThru = {
    fontSytle : 'italic',
    color: '#f00',
    textDecoration: 'line-through'
  }

  return (
    <div className="div1">
      <div className="div2">
        <div className="div3">
          <form>
            <div className="divClass">
              <input type="checkbox" 
              name="todoList" 
              className="divContent" 
              checked={props.data.completed} 
              onChange={() => props.handleChange(props.data.id)} /> 
              <span style={props.data.completed ? strikeThru : null} className="divContent">{props.data.text}</span>
 
            </div>
          </form>
         </div>
        </div>
    </div>
  )
}

export default TodoItem;