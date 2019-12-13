import React, { useState } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';

const TopNav = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  let loggedInUserId = props.loggedInUser.id
  
  return (
    <div>
      <Navbar className="top-nav" dark fixed="top">
        <NavbarBrand><NavLink className="nav-brand" to='/'>now watching
        </NavLink></NavbarBrand>
        {/* <NavbarBrand href="/">Now Watching</NavbarBrand> */}
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink onClick={toggleNavbar} className="top-nav-link" to={`/profile/${loggedInUserId}`}>Profile</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={toggleNavbar} className="top-nav-link" to="/new-check-in">New Check-in</NavLink>
            </NavItem>
            {/* Friends list? -> or a list of users until figuring out how to only show friends and add functionality for searching users to add/remove friends */}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    loggedInUser: state.users.loggedInUser
  }
}

export default connect(mapStateToProps)(TopNav);