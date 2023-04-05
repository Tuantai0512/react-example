import "../Blog/style.scss";
import useFetch from "../../services/fetchData";
import { Link } from "react-router-dom";

function Blog() {

    const { data: dataBlog, isError, loading } = useFetch('https://jsonplaceholder.typicode.com/posts', false);
    let newData = [];
    if (dataBlog && dataBlog.length > 0) {
        newData = dataBlog.slice(0, 9);
    }
    console.log(newData);

    return (
        <>
            <h2>This is blog page</h2>
            <div className="blogs-container">
                {newData && newData.length > 0 && newData.map((item) => {
                    return (
                        <div className="single-blog" key={item.id}>
                            <div className="title">{item.title}</div>
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