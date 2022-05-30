import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {

  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/activities')
      .then(res => {
        setActivities(res.data)
      })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {activities.map((a: any) => (
            <li key={a.id}>
              {a.title}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
