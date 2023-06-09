import './App.scss';
import './Todos/Todolist'
/* import Todolist from './Todos/Todolist'; */
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav/nav';
import { connect } from 'react-redux';
import RoutesSite from '../routes/routes';
function App() {
  return (
    <div className="App">
      <Nav/>    
      <RoutesSite/>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default connect()(App);
