import "../Blog/style.scss";
import "../AddNewBlog/style.scss"
import useFetch from "../../services/fetchData";
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from "react";
import AddNewBlog from "../AddNewBlog";

function Blog() {
    const [show, setShow] = useState(false);
    const [newData, setNewData] = useState([]);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { data: dataBlog, isError, loading } = useFetch('https://jsonplaceholder.typicode.com/posts', false);
    useEffect(() => {        
        if (dataBlog && dataBlog.length > 0) {
            const newDataSimple = dataBlog.slice(0, 9);
            setNewData(newDataSimple);
        }
    },[dataBlog])
    const handleAddNew = (blog) => {
        setShow(false);
        const data = newData;
        data.unshift(blog);
        setNewData(data)
    }
    const deletePost = (id) => {
        let data = newData;
        data = data.filter(item => item.id !== id);
        setNewData(data);
    }
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                + Add new blog
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body><AddNewBlog handleAddNew={handleAddNew}/></Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>
            <br />
            <h2>This is blog page</h2>
            <div className="blogs-container">
                {newData && newData.length > 0 && newData.map((item) => {
                    return (
                        <div className="single-blog" key={item.id}>
                            <span className="title">{item.title}</span>
                            <button onClick={() => deletePost(item.id)}>X</button>
                            <div className="content">{item.body}</div>
                            <button>
                                <Link to={`/blog/${item.id}`}>View detail</Link>
                            </button>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Blog