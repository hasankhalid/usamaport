import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import NavBar from './navbar.js';
import banner from '../resources/Portfolio/banner.jpg';

class NavTitle extends Component {
  render () {
    return (
      <div className="navTitle">
        <img src={banner} alt="Navigation Banner" className="flexImageTitle"/>
        <div className="colorOverlayTitle"></div>
        <Grid className="hundred">
          <Row className="show-grid hundred">
            <Col lg={12} md={12} xs={12} className="navParent">
              <NavBar textcolor='white' title="Usama Waheed" navitems={[{text: 'PORTFOLIO', to: "/portfolio", margin: 5}, {text: 'ABOUT', to: "/about", margin: 5}]}/>
            </Col>
            <div className="hundred">
              <Col lg={12} md={12} xs={12} className="flexTitle">
                <div className="intro">
                  <p className="titleNav">{this.props.title}</p>
                </div>
              </Col>
            </div>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default NavTitle;
