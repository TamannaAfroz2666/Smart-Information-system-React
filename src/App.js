
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Input } from 'semantic-ui-react'
import HomePage from './components/HomePage';

function App() {
  return (
    <Router>
      <div className="App">
        <div className=''>
          <div class="ui secondary menu parent-div">
            <Link to='/' className='navbar item'>
              Login
            </Link>

            <Link to='/home' className=' navbar item '>
              Home
            </Link>
            <Link to='/about' className='navbar item '>
              About
            </Link>
            <Link to='/products' className=' navbar item'>
              Product
            </Link>
            <div class="right menu">
              <div class=" item">
                <div class="ui icon input">
                  <Input type="text" placeholder="Search..." />
                  <i class="search link icon"></i>
                </div>
              </div>
              <Link to='/logout' className=' navbar item'>
                Logout
              </Link>
            </div>
          </div>
        </div>
        <Route path={'/home'} component={HomePage} exact />
      </div>
    </Router>
  );
}

export default App;
