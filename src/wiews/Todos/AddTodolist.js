import React from "react";
import { toast } from 'react-toastify';

class AddTodo extends React.Component {
    state={
        title: ''
    }
    handleOnChangeTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    handleAddTodo = () => {
        if(!this.state.title){
            toast.error("Ẩu rồi đó ba!");
        }else{
            let todo = {
                id: Math.floor(Math.random() * 10000),
                title: this.state.title,
            }
            this.props.addNewTodo(todo);
            this.setState({
                title: ''
            })
        }
    }
    render() {
        let {title} = this.state;
        return(
            <div className="todo-add">
                <input type="text" value={title} onChange={(e) => this.handleOnChangeTitle(e)}/>
                <button type="button" className="add"
                onClick={() => {this.handleAddTodo()}}>Add</button>
            </div>
        )
    }
}
export default AddTodo