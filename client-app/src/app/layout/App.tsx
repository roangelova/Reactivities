import { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Header, List } from 'semantic-ui-react';
import { Activity } from '../models/activity';
import NavBar from './NavBar';

function App() {

  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5000/api/activities')
      .then(res => {
        setActivities(res.data)
      })
  }, [])

  return (
    <Fragment>
      <NavBar />
      <Container style={{ marginTop: '7em' }}>
        <List>
          {activities.map(a => (
            <List.Item key={a.id}>
              {a.title}
            </List.Item>
          ))}
        </List>
      </Container>
    </Fragment>
  );
}

export default App;
