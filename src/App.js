import '~/App.css';
import Home from './components/home.js';
import { useState } from 'react';

function App() {

  const [user,setuser] = useState({
    id: 123,
    name: "tesst",
    title: "title",
    completed: true
  })

  function setUserFunction(user_parameter){
    setuser(prev =>({
      ...prev,
      other: user_parameter.userId
    }))
  }

  var homeProps={
    user: user,
    setUserFunction: setUserFunction
  }

  return (
    <div className="App">
      <h1>{user.name}</h1>
      <h2>{user.title}</h2>
      <h3>{user.other}</h3>
      <h3>{user.completed.toString()}</h3>
      <Home props={homeProps}></Home>
    </div>
  );
}

export default App;
