import 'animate.css';
import { createContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import useFetch from './hooks/useFetch';
import Doctors from './pages/Doctors/Doctors/Doctors';
import Footer from './pages/Footer/Footer';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import Hospital from './pages/Hospital/Hospital/Hospital';
import Login from './pages/Login/Login/Login';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Register from './pages/Login/Register/Register';
import NotFoundPage from './pages/NotFound/NotFoundPage';
import SingleService from './pages/SingleService/SingleService';

export const useServices = createContext()
function App() {
  const [services] = useFetch()
  return (
    <AuthProvider>
      <useServices.Provider value={[services]}>
        <Router>
          <Switch>
              <Route exact path="/">
                <Header/>
                <Home/>
                <Footer/>
              </Route>
              <Route path="/home">
                <Header/>
                <Home />
                <Footer/>
              </Route>
              <Route path="/doctors">
                <Header />
                <Doctors />
                <Footer/>
              </Route>
              <Route path="/hospital">
                <Header/>
                <Hospital />
                <Footer/>
              </Route>
              <PrivateRoute exact path="/serviceItem/:serviceID">
                  <Header/>
                  <SingleService />
                  <Footer/>
              </PrivateRoute>
              <Route path="/login">
                <Header/>
                <Login></Login>
                <Footer/>
              </Route>
              <Route path="/register">
                <Header/>
                <Register></Register>
                <Footer/>
              </Route>
              
              <Route exact path="*">
                <NotFoundPage/>
              </Route>
            
          </Switch>
        </Router>
      </useServices.Provider>
    </AuthProvider>
  );
}

export default App;
