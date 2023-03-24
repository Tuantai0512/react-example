import { useDispatch, useSelector } from "react-redux";
import { deleteUser, createUser } from "../../stores/actions/userActions";
import React from "react";



function Home(){
    const dispatch = useDispatch();
    const listUsersRedux = useSelector((state) => state.user.users);
    console.log(listUsersRedux);
    const handleDeleteUser = (user) => {
        dispatch(deleteUser(user))
    }
    const handleCreateUser = () => {
        dispatch(createUser())
    }
        return(
            <>
                <h3>This is My Homepage</h3>
                <div>
                    {listUsersRedux && listUsersRedux.length > 0 &&
                        listUsersRedux.map((item, index) => {
                            return(
                                <React.Fragment key={item.id}>
                                    <h5 key={item.id}>{index + 1} {item.name} <br/>
                                    <button onClick={() => handleDeleteUser(item)}>X</button>
                                    </h5>
                                </React.Fragment>
                            )
                        })
                    }
                </div>
                <button onClick={() => handleCreateUser()}>Add new</button>
            </>
        )
}
export default React.memo(Home);