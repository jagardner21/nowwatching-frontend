import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { getUsers } from './store/users/actions'
import { getCheckIns } from './store/check-ins/actions'
import CheckInList from './components/home/CheckInList'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import TopNav from './components/layout/TopNav'
import { Container, Row, Col } from 'reactstrap'

 
function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers())
    dispatch(getCheckIns())
  }, [])

  return (
    <div className="app">
      <Router>
        <TopNav />
        <Container className="pt-5 mt-5">
          <Row>
            <Col xs="2"/> 
            <Col xs="8">
              <Switch>
                <Route exact path="/" component={CheckInList}/>
                {/* <Route path="/profile/:id" component={UserProfile}/> */}
                {/* <Route path="/new-check-in" component={NewCheckInForm} */}
              </Switch>
            </Col>
            <Col xs="2" />
          </Row>
        </Container>
      </Router>
    </div>
  )
}

export default App;
