import React from 'react'
import { connect } from 'react-redux'
import CheckIn from '../check_ins/CheckIn'

const UserProfile = (props) => {

    let loggedInUser = props.loggedInUser
    let userCheckIns = props.checkIns ? props.checkIns.filter(checkIn => {
        console.log(checkIn.movie_name)
        return checkIn.user_id == loggedInUser.id
    }) : []

    console.log(userCheckIns)

    return (
        <div>User Profile</div>
    )
}

const mapStateToProps = state => {
    return {
        loggedInUser: state.users.loggedInUser,
        checkIns: state.checkIns.all
    }
}
export default connect(mapStateToProps)(UserProfile)