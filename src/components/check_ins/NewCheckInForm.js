import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { addCheckIn } from '../../store/check-ins/actions'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class NewCheckInForm extends Component {

    state = {
        user_id: this.props.loggedInUser.id,
        movie_name: '',
        //find an npm package that will allow user to pick a star rating, likely react-stars
        rating: null,
        review_body: ''
    }

    // Should be triggered by 'onChange'
    handleChange = e => {
        let { name, value } = e.target
        this.setState({ [name]: value })
    }

    // The handler for the submit event, i.e. 'onSubmit'
    handleSubmit = e => {
        e.preventDefault()
        // call some method to deal with the form data
        this.props.someFunctionFromApp(this.state)
    }

    render() {
        const submitEnabled = this.state.movie_name.length > 0

        //WILL NEED TO ADD ABILITY TO SEARCH MOVIES IN OMDb
        return (
            <Form className="pb-5">
                <FormGroup>
                    <Label>Movie Name</Label>
                    <Input onChange={this.handleChange} type="text" name="movie_name" placeholder="required" />
                </FormGroup>
                <FormGroup>
                    <Label>Rating</Label>
                    <Input min={0} max={5} type="number" name="rating" placeholder="optional" />
                </FormGroup>
                <FormGroup>
                    <Label>Review</Label>
                    <Input type="textarea" name="review_body" placeholder="optional"/>
                </FormGroup>
                <Button disabled={!submitEnabled}>Submit</Button>
            </Form>
        )
    }
}

// NewCheckInForm.propTypes = {
//   someFunctionFromApp: PropTypes.func.isRequired
// }

function mapStateToProps(state) {
    return {
        loggedInUser: state.users.loggedInUser,
        users: state.users.all
    }

}
export default connect(mapStateToProps)(NewCheckInForm)
