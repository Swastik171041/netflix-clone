import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";
import "./App.css";
import ProfileScreen from "./screens/ProfileScreen";
import Homescreen from "./screens/Homescreen";
import LoginScreen from './screens/LoginScreen';
import {auth} from "./firebase";
import {useDispatch, useSelector} from "react-redux"; 
import {logout,login,selectUser} from "./features/userSlice";
function App() {
  const user=useSelector(selectUser);
  const dispatch=useDispatch();
  useEffect(()=>{
    const unsubscribe=auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        //Logged in
        dispatch(login({
           uid: userAuth.uid,
           email: userAuth.email,
        })
        );
      }
      else{
        //logged out
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);
  return (
    <div className="App">
      
      <Router>
      {!user ? (
        <LoginScreen/>
      ):(
        <Switch>
        <Route path='/profile'>
          <ProfileScreen/>
        </Route>
          <Route exact path="/">
          <Homescreen/>
          </Route>
        </Switch>
      )

      }
        
    </Router>
    </div>
  );
}

export default App;
