import { useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function DetailUser(){
    let { id } = useParams();
    const [user, setUser] = useState({});
    useEffect(() => {
        axios.get(`https://reqres.in/api/users/${id}`)
        .then((response) => {
          setUser(response.data.data);
        })
        .catch(() => {
            setUser("Guest");
        })
      }, [id]);
    return(
        <>
            <h3>Hello, my name is {user === "Guest" ? user : user.first_name + " " + user.last_name }</h3>
        </>
    )
}

export default DetailUser