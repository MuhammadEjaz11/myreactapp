import React, { Component } from 'react';

class Todos extends Component {
    state = {
        todos: [{title: "ejaz", edit: false},{title: "anas",edit: false }, {title: "owais",edit: false}],
        value: '',
        editvalue: ''
    }
    Addtodos = ()=>{
     console.log(this.state.value)
     this.state.todos.push({title: this.state.value})
     this.setState({todos: this.state.todos,value: ""})
     
    }
    deleteTodo(index){
        this.state.todos.splice(index,1)
        this.setState({todos: this.state.todos})
    }
    edittodo(index){
        this.state.todos[index].edit = true
        this.setState({todos: this.state.todos})
    }
    edittab(index){
        this.state.todos[index].edit = false;
        this.setState({todos: this.state.todos})
    }
    handlechange(e,index){
        this.state.todos[index].title = e.target.value;
        
        console.log(e.target.value,index)
    }
    render() {
        return (

            <div>
                <input type="text" value={this.state.value} onChange={(e)=>{this.setState({value: e.target.value})}} placeholder='Entre Todo' />
                <button onClick={this.Addtodos}>Add Todo</button>
                <ul>
                    {this.state.todos.map((value, index) => {
                        return (<li key={index}>{value.edit ?
                         <input  onChange={(e)=>{this.handlechange(e,index)}} type="text" placeholder='Edit Value'/>: value.title } 
                        <button onClick={()=>{this.deleteTodo(index)}}>Delete</button>
                        {value.edit ? <button onClick={()=>{this.edittab(index)}}>Update</button>:<button onClick={()=>{this.edittodo(index)}}>Edit</button> }</li> )
                    })}
                </ul>

            </div>
        )
    }
}

export default Todos;