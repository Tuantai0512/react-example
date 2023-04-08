import React from "react";
import './nav.css';
import { NavLink } from 'react-router-dom'


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
                    <li><NavLink to="/search">Search</NavLink></li>
                </ul>
                
            </>
        )
    }
    
}

export default Nav