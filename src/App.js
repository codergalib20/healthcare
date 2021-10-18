import { createContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import useFetch from './hooks/useFetch';
import FooterBottom from './pages/Footer/FooterBottom/FooterBottom';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
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
            <FooterBottom/>
          </Route>
          <Route path="/home">
            <Header/>
            <Home/>
          </Route>
          <Route path="/serviceItem/:serviceID">
            <Header/>
            <SingleService/>
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
