import Home from "../wiews/NavItem/Home";
import Todolist from "../wiews/Todos/Todolist";
import ListUsers from "../wiews/Users/ListUsers";
import DetailUser from "../wiews/Users/DetailUser";
import Covid19 from "../wiews/Covid19";
import Blog from "../wiews/Blog"
import BlogDetail from "../wiews/BlogDetail";
import NotFound from "../wiews/Page404";
import SearchYoutube from "../wiews/SearchYoutube";
import { Routes, Route} from 'react-router-dom'

function RoutesSite() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todos" element={<Todolist />} />
            <Route path="/users" element={<ListUsers />} exact />
            <Route path="/users/:id" element={<DetailUser />} />
            <Route path="/covid-19" element={<Covid19 />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/search" element={<SearchYoutube />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default RoutesSite