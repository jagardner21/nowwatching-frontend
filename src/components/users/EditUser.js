import React, { Component } from 'react'
import { editUser } from '../../store/users/actions'
import { connect } from 'react-redux'
import { Form, FormGroup, Label, Button, Input } from 'reactstrap'

class EditUser extends Component {

    state = {
        name: '', 
        email: ''
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
        this.props.dispatch(editUser(this.props.loggedInUserId, this.state))
    }

    handleChange = e => {
        let { name, value } = e.target
        this.setState({ [name]: value })
    }

    render() {
        return (
            <Form className="edit-user-form" onSubmit={this.handleSubmit}>
                <h4 className="edit-header">Edit User</h4>
                <FormGroup>
                    <Label>Name </Label>
                    <Input type="text" name="name" onChange={this.handleChange} placeholder={this.props.userName}/>
                </FormGroup>
                <FormGroup>
                    <Label>Email </Label>
                    <Input type="text" name="email" onChange={this.handleChange} placeholder={this.props.userEmail}/>
                </FormGroup>
                <Button>Save</Button>
            </Form>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedInUserId: state.users.loggedInUser.id
    }
}

export default connect(mapStateToProps)(EditUser)