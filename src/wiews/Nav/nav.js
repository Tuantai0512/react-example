import React from "react";
import './nav.css';
import { NavLink, Routes, Route } from 'react-router-dom'
import Home from "../NavItem/Home";
import Todolist from "../Todos/Todolist";
import ListUsers from "../Users/ListUsers";
import DetailUser from "../Users/DetailUser";
import Covid19 from "../Covid19";
import Blog from "../Blog"
import BlogDetail from "../BlogDetail";
import AddNewBlog from "../AddNewBlog";

class Nav extends React.Component{
    render(){
        return(
            <>
                <ul>
                    <li><NavLink to="/" activeclassname="active" exact={`true`}>Home</NavLink></li>
                    <li><NavLink to="/todos">Todos</NavLink></li>
                    <li><NavLink to="/users">Users</NavLink></li>
                    <li><NavLink to="/covid-19">Covid-19</NavLink></li>
                    <li><NavLink to="/blog">Blog</NavLink></li>
                </ul>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/todos" element={<Todolist/>}/>
                    <Route path="/users" element={<ListUsers/>} exact/>
                    <Route path="/users/:id" element={<DetailUser/>}/>
                    <Route path="/covid-19" element={<Covid19/>}/>
                    <Route path="/blog" element={<Blog/>}/>
                    <Route path="/blog/:id" element={<BlogDetail/>}/>
                    <Route path="/blog/add-new" element={<AddNewBlog/>}/>
                </Routes>
            </>
        )
    }
    
}

export default Nav