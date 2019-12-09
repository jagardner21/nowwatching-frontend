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
        users: state.userms.all,
        loggedInUser: state.users.loggedInUser,
        checkIns: state.checkIns.all.sort((a,b) => {
            return b["created_at"] > a["created_at"]
        })
    }
}

export default connect(mapStateToProps)(CheckInList)