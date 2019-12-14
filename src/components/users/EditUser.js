import React, { Component } from 'react'
import { Form, FormGroup, Label, Button, Input, Col } from 'reactstrap'

class EditUser extends Component {

    state = {
        name: '', 
        email: ''
    }

    handleSubmit = () => {

    }

    handleChange = e => {
        let { name, value } = e.target
        this.setState({ [name]: value }, () => console.log())
    }

    render() {
        return (
            <Form className="edit-user-form">
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
export default EditUser