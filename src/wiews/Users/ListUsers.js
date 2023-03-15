import { useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"

function ListUsers(){
    const nav = useNavigate();
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get(`https://reqres.in/api/users?page=1`)
        .then((response) => {
          setUsers(response.data.data);
        })
        .catch(() => {
            setUsers("Guest");
        })
      }, []);
        return(
            <>
                <h3 className="title">My List Users</h3>
                <div className="list_user">
                    {users && users.length > 0 &&
                        users.map((item, index) => {
                            return(
                                <div className="item" key={item.id} onClick={() => nav(`/users/${item.id}`)}>
                                    {index + 1} - {item.first_name} {item.last_name}
                                </div>
                            )
                        })
                    }
                </div>
            </>
        )
}

export default ListUsers