import "../AddNewBlog/style.scss";
import { useState } from "react";

function AddNewBlog() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        if(!title){
            alert('empty title!');
            return
        }
        if(!content){
            alert('empty content!');
            return
        }
        console.log("Check form:", title, " + ", content);
    }
    return (
        <div className="add-new-container">
            <form onSubmit={handleSubmit}>
                <h2 className="text-add-new">Add new blog</h2>
                <div className="inputs-data">
                    <label>Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}></input>
                </div>
                <div className="inputs-data">
                    <label>Content</label>
                    <input type="text" value={content} onChange={(e) => setContent(e.target.value)}></input>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddNewBlog