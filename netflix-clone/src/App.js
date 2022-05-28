import React, { useEffect , useState} from 'react';
import './App.css';
import HomeScreen from './component/HomeScreen';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import {onAuthStateChanged , getAuth} from "firebase/auth";

function App() {

  // const user = useSelector(selectUser);
  const [user, setUser] = useState(null);
  console.log("ss"+user);


  const dispatch = useDispatch()

  useEffect(() => {
    const auth = getAuth();
    const unsub = onAuthStateChanged(auth , (user) => {
      if(user){
        setUser(user);
        dispatch(
          login({
            uid : user.uid,
            email : user.email,
          })
        );
      }else{
        dispatch(logout)
      }    
    })
    return unsub;
  },[])

  return (
    <div className="App">

      <Router>
        {!user? (
          <LoginScreen />
        ): (
          <Routes>
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        )}
        
      </Router>
      
      
      
    </div>
  );
}

export default App;
