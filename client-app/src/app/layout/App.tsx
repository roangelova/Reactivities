import { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Header, List } from 'semantic-ui-react';
import { Activity } from '../models/activity';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';

function App() {

  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);

  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5000/api/activities')
      .then(res => {
        setActivities(res.data)
      })
  }, [])

  function handleSelectActivity(id: string) {
    setSelectedActivity(activities
      .find(x => x.id == id));
  }

  function handleCancelSeletActivity() {
    setSelectedActivity(undefined);
  }

  return (
    <Fragment>
      <NavBar />
      <Container style={{ marginTop: '7em' }}>
        <ActivityDashboard
          activities={activities}
          selectedActivity={selectedActivity}
          selectActivityFunction={handleSelectActivity}
          cancelSelectActivity={handleCancelSeletActivity}
        />
      </Container>
    </Fragment>
  );
}

export default App;
