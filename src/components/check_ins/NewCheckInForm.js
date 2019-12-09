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
        console.log(this.state)
        this.props.dispatch(addCheckIn(this.state))
        this.props.history.goBack().forceUpdate()
    }

    render() {
        const submitEnabled = this.state.movie_name.length > 0
        console.log("THIS.PROPS", this.props.loggedInUser.id)
        //WILL NEED TO ADD ABILITY TO SEARCH MOVIES IN OMDb
        return (
            <Form onSubmit={this.handleSubmit} className="pb-5">
                <FormGroup>
                    <Label>Movie Name</Label>
                    <Input onChange={this.handleChange} type="text" name="movie_name" placeholder="required" />
                </FormGroup>
                <FormGroup>
                    <Label>Rating</Label>
                    <Input onChange={this.handleChange} min={0} max={5} type="number" name="rating" placeholder="optional" />
                </FormGroup>
                <FormGroup>
                    <Label>Review</Label>
                    <Input onChange={this.handleChange} type="textarea" name="review_body" placeholder="optional"/>
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
