import React, { Component } from 'react';
import {IndexLinkContainer} from 'react-router-bootstrap';
import {Navbar, NavItem, Nav} from 'react-bootstrap';

class NavBar extends Component {
  render (){
    return (
      <Navbar inverse className="navbar" staticTop={true} collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <IndexLinkContainer to={'/'} style={{color: this.props.textcolor}}>
              <span className="title">{this.props.title}</span>
            </IndexLinkContainer>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            {this.props.navitems.length > 0 && this.props.navitems.map((navitem, index) => (
              <IndexLinkContainer key={navitem.text} to={navitem.to}>
                <NavItem key={navitem} style={{color: this.props.textcolor}} className="navtext" eventKey={index}>
                  <span className="navtext">{navitem.text}</span>
                </NavItem>
              </IndexLinkContainer>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavBar;
