import React from 'react'
import { connect } from 'react-redux'
import CheckIn from '../check_ins/CheckIn'

const CheckInList = (props) => {

    let checkIns = props.checkIns.map(checkIn => { 
        return <CheckIn key={checkIn.id} checkIn={checkIn} users={props.users} loggedInUser={props.loggedInUser}/>
    })
    return (
        <div className="check-in-list">
            {checkIns}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        users: state.users.all,
        loggedInUser: state.users.loggedInUser,
        checkIns: state.checkIns.all.sort((a,b) => (a.id < b.id) ? 1 : -1)
    }
}

export default connect(mapStateToProps)(CheckInList)