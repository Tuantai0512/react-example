import "../BlogDetail/style.scss";
import useFetch from "../../services/fetchData";
import { useParams, useNavigate } from "react-router-dom";

function BlogDetail() {
    const { id } = useParams();
    const nav = useNavigate();
    const { data: dataBlog, isError, loading } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`, false);
    const handleBack = () => {
        nav("/blog");
    }

    return (
        <>
            <button onClick={handleBack}>&lt;--  Back</button>
            <h2>This is blog Detail page by id = {id}</h2>
            {dataBlog &&
                <>
                    <h5>{dataBlog.title}</h5>
                    <p>{dataBlog.body}</p>
                </>
            }
        </>
    )
}

export default BlogDetail