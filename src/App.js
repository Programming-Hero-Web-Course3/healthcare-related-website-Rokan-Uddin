import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Appoinment from './components/Appoinment/Appoinment';
import Doctors from './components/Doctors/Doctors';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import AuthProvider from './context/AuthProvider';

function App() {

  return (
    <div className="App">
      <AuthProvider>
      <Router>
          <Header></Header>
          <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/home">
                <Home></Home>
              </Route>
              <PrivateRoute path="/appoinment">
                <Appoinment></Appoinment>
              </PrivateRoute>
              <PrivateRoute path="/doctors">
                <Doctors></Doctors>
              </PrivateRoute>
              <PrivateRoute path="/service/:serviceID">
                <ServiceDetails></ServiceDetails>
              </PrivateRoute>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="/register">
                  <Register></Register>
              </Route>
              <Route path="*">
                <NotFound></NotFound>
              </Route>
          </Switch>
          <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
