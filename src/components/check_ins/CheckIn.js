import React, { Component } from 'react'
import { Row, Col, Container, Media, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import StarRatings from 'react-star-ratings'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'


class CheckIn extends Component {
    state = {
        //cannot find a use for state 
    }

    // FUTURE STATE - have an option to check in as "now watching" and change to "watched" after viewing, then you add rating and review
    render() {
        let loggedInUser = this.props.loggedInUser ? this.props.loggedInUser : {}
        let { user_id, movie_name, rating, review_body } = this.props.checkIn
        let checkInUserName = this.props.users.filter(user => user.id === user_id)[0].name
        let imageSrc = 'https://lorempixel.com/150/150'

        
        // learn how to modal, YO...
        // const toggleModal = () => {
        //     this.setState({
        //         isOpen: !this.state.isOpen
        //     })
        // }
        
        let editHidden = (user_id !== loggedInUser.id)
        return (
            <div className="check-in-card mr-4 ml-4 pt-4">
                <Media className="mb-3">
                    <Media left className="mr-3">
                        <Media object src={imageSrc} alt="Generic placeholder image" />
                    </Media>
                    <Media body>
                        <Media heading>
                            {checkInUserName}
                        </Media>
                        <Media className="mb-1">
                            watched <span className="movie-title ml-1">{movie_name}</span>                        
                        </Media>
                        <StarRatings 
                            rating={rating}
                            starDimension='20px'
                            starSpacing='5px'
                            starRatedColor='#07CAA1'
                        />
                        <Media className="mt-1">
                            {review_body}
                        </Media>
                    </Media>
                    
                    {/* Button to bring up modal that will have button for edit check in and delete check in ("are you sure?" for delete?) */}
                    <Button hidden={editHidden}>...</Button>
                    {/* learn how to modal, YO */}
                    {/* <Modal></Modal> */}
                    
                    {/* FUTURE STATE WILL HAVE LIKE AND COMMENT BUTTONS/FUNTIONALITY */}
                </Media>
            </div>
        )
    }
}

//add prop types

export default CheckIn