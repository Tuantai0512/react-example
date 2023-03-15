import React from "react";
import './nav.css';
import { NavLink, Routes, Route } from 'react-router-dom'
import Home from "../NavItem/Home";
import Todolist from "../Todos/Todolist";
import ListUsers from "../Users/ListUsers";
import DetailUser from "../Users/DetailUser";

class Nav extends React.Component{
    render(){
        return(
            <>
                <ul>
                    <li><NavLink to="/" activeClassName="active" exact={true}>Home</NavLink></li>
                    <li><NavLink to="/todos">Todos</NavLink></li>
                    <li><NavLink to="/users">Users</NavLink></li>
                </ul>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/todos" element={<Todolist/>}/>
                    <Route path="/users" element={<ListUsers/>} exact/>
                    <Route path="/users/:id" element={<DetailUser/>}/>
                </Routes>
            </>
        )
    }
    
}

export default Nav