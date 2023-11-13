import { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { AddUser } from './components/AddUser';
import Dashboard from './components/Dashboard';
import EditUser from './components/EditUser';
import { Nopage } from './components/NoPage';
import UserComponent from './components/UserComponent';
import { UserDetails } from './components/UserDetails';
import { data } from './Data/data';


function App() {
const [user, setUser] = useState(data)
  //useEffect
  return (
    <div className="App">
      
      <Switch>

        <Route exact path="/">
        <UserComponent
        user={user}
        setUser={setUser}/>
        </Route>
        
        <Route path="/add/user">
          <AddUser
          user={user}
          setUser={setUser}/>
        </Route>

        <Route path="/edit/:id">
            <EditUser
             user={user}
             setUser={setUser}
            />
        </Route>

        <Route path="/user/:id">
           <UserDetails user={user}/>
        </Route>

        
        <Route path="/dashboard">
           <Dashboard/>
        </Route>


        <Route path="/students">
             <Redirect path= "/"/>
        </Route>

        <Route path = "**">
            <Nopage/>
        </Route>
      
      </Switch>
    </div>
  );
}

export default App;