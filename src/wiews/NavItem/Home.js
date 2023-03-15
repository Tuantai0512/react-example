import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../stores/reducers/rootReducer";
import React from "react";



function Home(){
    const dispatch = useDispatch();
    const listUsersRedux = useSelector((state) => state.users);
    console.log(listUsersRedux);
    const handleDeleteUser = (user) => {
        dispatch(deleteUser(user))
    }
    const handleCreateUser = (user) => {

    }
        return(
            <>
                <h3>This is My Homepage</h3>
                <div>
                    {listUsersRedux && listUsersRedux.length > 0 &&
                        listUsersRedux.map((item, index) => {
                            return(
                                <>
                                    <h5 key={item.id}>{index + 1} {item.name} 
                                    <span onClick={() => handleDeleteUser(item)}>X</span>
                                    </h5>
                                </>
                            )
                        })
                    }
                </div>
                <button onClick={() => handleCreateUser()}>Add new</button>
            </>
        )
}
export default React.memo(Home);