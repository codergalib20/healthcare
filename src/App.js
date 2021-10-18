import { createContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import useFetch from './hooks/useFetch';
import Footer from './pages/Footer/Footer';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login/Login';
import SignIn from './pages/Login/SignIn/SignIn';
import NotFoundPage from './pages/NotFound/NotFoundPage';
import SingleService from './pages/SingleService/SingleService';


export const useServices = createContext()
function App() {
  const [services] = useFetch()
  return (
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
          <Route path="/serviceItem/:serviceID">
            <Header/>
            <SingleService />
            <Footer/>
          </Route>
          <Route to="/login">
            <Header/>
            <Login></Login>
            <Footer/>
          </Route>
          <Route exact path="/register">
            <Header/>
            <SignIn></SignIn>
            <Footer/>
          </Route>
          <Route path="*">
            <NotFoundPage/>
          </Route>
        </Switch>
      </Router>
    </useServices.Provider>
  );
}

export default App;
