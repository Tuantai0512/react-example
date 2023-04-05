import "../BlogDetail/style.scss";
import useFetch from "../../services/fetchData";
import { useParams } from "react-router-dom";

function BlogDetail() {
    const { id} = useParams();
    const { data: dataBlog, isError, loading } = useFetch('https://jsonplaceholder.typicode.com/posts', false);
    let newData = [];
    if (dataBlog && dataBlog.length > 0) {
        newData = dataBlog.slice(0, 9);
    }
    console.log(newData);

    return (
        <>
            <h2>This is blog Detail page by id = {id }</h2>
        </>
    )
}

export default BlogDetail