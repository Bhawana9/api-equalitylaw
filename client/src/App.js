import React ,{Fragment,useEffect}from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'; 
import Navbar from './components/Layout/Navbar'
import Landing from './components/Layout/Landing'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import {Provider} from 'react-redux'
import store from './store/store'
import Alert from './components/Layout/Alert'
import setAuthToken from './utils/setAuthToken'
import {loadUser} from './actions/auth'
import Dashboard from'./components/dashboard/Dashboard'
import PrivateRoute from './components/routing/PrivateRoute'
import CreateProfile from './components/profileform/CreateProfile'
import EditProfile from './components/profileform/EditProfile'
import AddExperience from './components/profileform/AddExperience'
import AddComplaints from './components/profileform/ComplaintForm'
import Footer from './components/Layout/Footer'
import AboutPage from './components/common/About'
import ContactPage from './components/common/ContactUs'
import NotFoundPage from './components/NotFoundPage'
import EditExperience from './components/profileform/EditExperience'
if(localStorage.token)
{
 setAuthToken(localStorage.token)
}

const App=()=>{ 
    useEffect(()=>{
        store.dispatch(loadUser())
    },[])
 return(
<Provider store={store}>
<Router>
<Fragment>
<Navbar/>
<Route path="/" component={Landing} exact={true}/>
<section className="container">
<Alert/>
<Switch>
<Route exact path="/register" component={Register}/>
<Route exact path="/login" component={Login} />
<Route path="/about" component={AboutPage}/>
<Route path="/contact" component={ContactPage}/>
<PrivateRoute exact path="/dashboard" component={Dashboard} />
<PrivateRoute exact path="/create-profile" component={CreateProfile} />
<PrivateRoute exact path="/edit-profile" component={EditProfile} />
<PrivateRoute exact path="/add-experience" component={AddExperience} />
<PrivateRoute exact path="/edit-experience" component={EditExperience} />
<PrivateRoute exact path="/complaints" component={AddComplaints} />

</Switch>
<Footer />
</section>
</Fragment>
</Router>
</Provider>
)}




export default App;
