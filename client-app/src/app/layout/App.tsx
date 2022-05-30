import { useEffect, useState } from 'react';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';
import { Activity } from '../models/activity';

function App() {

  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/activities')
      .then(res => {
        setActivities(res.data)
      })
  }, [])

  return (
    <div className="App">
      <Header as='h2' icon='users' content='Reactivities' />
      <List>
        {activities.map(a => (
          <List.Item key={a.id}>
            {a.title}
          </List.Item>
        ))}
      </List>
    </div>
  );
}

export default App;
