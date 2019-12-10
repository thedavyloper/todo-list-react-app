import React from 'react';
import TodoItem from './components/TodoItem.js';
import todoData from './components/TodoData'; 


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      todoList: todoData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState(prevState => {
      const todoUpdate = prevState.todoList.map(todo => {
        if (todo.id === id){
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        todoList: todoUpdate
      }
    })
  }

  render() {
    const theTodoData = this.state.todoList.map(data => <TodoItem key={data.id} data={data} handleChange={this.handleChange}/>)
    
    return (
      <div className="App">
        {theTodoData}
      </div>
    );
  }
  
}

export default App;
