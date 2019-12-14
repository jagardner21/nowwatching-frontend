import React, { useState } from 'react'
import { connect } from 'react-redux'
import EditUser from './EditUser'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button, Container, Row, Col } from 'reactstrap'
import CheckIn from '../check_ins/CheckIn'

const UserProfile = (props) => {

    const [beingEdited, toggleBeingEdited] = useState(false)

    let loggedInUser = props.loggedInUser
    console.log("LOGGED IN USER", loggedInUser)
    
    let userCheckIns = props.checkIns.filter(checkIn => {
        return checkIn.user_id == loggedInUser.id
    })

    console.log("USER CHECKINS", userCheckIns)

    let displayCheckIns = userCheckIns.map(checkIn => {
        return <CheckIn key={checkIn.id} checkIn={checkIn} users={props.users} loggedInUser={props.loggedInUser}></CheckIn>
    })

    function handleEditToggle () {
        toggleBeingEdited(!beingEdited)
    }

    return (
        <div>            
            <Container>
                <Row>
                    <Col xs='4'>
                        <Card>
                            <CardImg className="profile-card" top width="100%" src="https://via.placeholder.com/150" alt="Card image cap" />
                            <CardBody>
                                <CardTitle className="profile-card-name">{loggedInUser.name}</CardTitle>
                                <CardSubtitle className="profile-email">{loggedInUser.email}</CardSubtitle>
                                    <Button outline onClick={handleEditToggle} size="sm">{beingEdited ? "Cancel Edit" : "Edit Info"}</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    {!beingEdited ? 
                        <Col xs="8" className="profile-checkin-list">
                            {displayCheckIns}
                        </Col>
                        :
                        <Col xs="8">
                            <EditUser userName={loggedInUser.name} userEmail={loggedInUser.email}/>
                        </Col>
                    }
                    
                </Row>
            </Container>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        loggedInUser: state.users.loggedInUser,
        checkIns: state.checkIns.all.sort((a,b) => (a.id < b.id) ? 1 : -1),
        users: state.users.all
    }
}
export default connect(mapStateToProps)(UserProfile)