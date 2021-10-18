import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Contact from './Contact/Contact';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Appointment from './components/Appointment/Appointment';
import AuthProvider from './components/context/AuthProvider';

function App() {
  return (
    <div className="App">
   <AuthProvider>
   <BrowserRouter>
     <Header>
       
     </Header>
     <Switch>
       <Route exact path="/">
        <Home>

        </Home>
       </Route>
       <Route exact path="/contact">
        <Contact>

        </Contact>
       </Route>
       <Route exact path="/signin">
        <Signin>

        </Signin>
       </Route>
       <Route exact path="/register">
        <Register>

        </Register>
       </Route>
       <Route exact path="/appointment">
        <Appointment>

        </Appointment>
       </Route>
     </Switch>
     <Footer>
       
     </Footer>
     </BrowserRouter>
   </AuthProvider>
    </div>
  );
}

export default App;
