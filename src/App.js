import './App.css';
import Content from './components/Content';
import NavBar from './components/Navigation';
import { showUsers } from './store';
import {useEffect } from 'react';
import { useDispatch } from 'react-redux';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
   dispatch(showUsers())
  },[dispatch])
  
  return (
    <div className="App">
      <div className='header flex'>
        <NavBar/>
      </div>
      <main className="app-content">
       <Content/>
      </main>
    </div>
  );
}

export default App;
