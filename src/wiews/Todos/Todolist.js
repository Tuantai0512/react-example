import React from "react";
import AddTodo from "./AddTodolist";
import '../Todos/Todolist.css';
import { toast } from 'react-toastify';

class Todolist extends React.Component  {
    state= {
        listTodos:[
            { id:'td1', title:"Doing homework"},
            { id:'td2', title:"Making videos"},
            { id:'td3', title:"Fixing bugs"},
        ],
        editTodo: {},
    }
    addNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })
        toast.success("Thành công!");
    }
    handleDeleteTodo = (todo) => {
        let currentTodos = this.state.listTodos;
        currentTodos = currentTodos.filter(item => item.id !== todo.id);
        this.setState({
            listTodos: currentTodos
        })
        toast.success("Xóa thành công!");
    }
    handleUpdateTodo = (todo) => {
        let { editTodo, listTodos } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;

        //save
        if(isEmptyObj === false && editTodo.id === todo.id){
            let listTodosCopy = [...listTodos];
            let objIndex = listTodosCopy.findIndex((item => item.id === todo.id));
            listTodosCopy[objIndex].title = editTodo.title;
            this.setState({
                listTodos: listTodosCopy,
                editTodo: {},
            })
            return;
        }else{
            //edit
            this.setState({
                editTodo: todo
            })
        }

    }
    handleOnChangeListTodo = (e) => {
        let editTodoCopy = {...this.state.editTodo};
        editTodoCopy.title = e.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }
    render() {
        let {listTodos, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        return(
            <div className="list-todo-container">
                <h3>This is My ListTodo</h3>
                <AddTodo 
                    addNewTodo={this.addNewTodo}
                />
                <div className="list-todo-content">
                    { listTodos && listTodos.length > 0 &&
                        listTodos.map((item, index) => {
                            return (
                                <div className="todo-child" key={item.id}>
                                    {isEmptyObj === true ? 
                                        <span>{index}:{item.title}</span>
                                        :
                                        <>
                                            { editTodo.id === item.id  ?
                                                <span>
                                                    {index} - <input value={editTodo.title} onChange={(e) => {this.handleOnChangeListTodo(e)}}/>
                                                </span>
                                                :
                                                <span>{index}:{item.title}</span>
                                            }
                                        </>
                                    }
                                    <button onClick={() => {this.handleUpdateTodo(item)}}>
                                        {isEmptyObj === false && editTodo.id === item.id ? 'Save' : 'Update'}
                                    </button>
                                    <button
                                        onClick={()=>{this.handleDeleteTodo(item)}}
                                    >Delete</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Todolist;