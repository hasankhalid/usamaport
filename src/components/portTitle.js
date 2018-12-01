import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import NavBar from './navbar.js';

class PortTitle extends Component {
  render () {
    return (
      <div className="navTitle">
        <img src={this.props.img} alt="" className="flexImageTitle"/>
        <div className="colorOverlayTitle portoverlay"></div>
        <Grid className="hundred">
          <Row className="show-grid hundred">
            <Col lg={12} md={12} xs={12} className="navParent">
              <NavBar textcolor='white' title="Usama Waheed" navitems={[{text: 'PORTFOLIO', to: "/portfolio", margin: 5}, {text: 'ABOUT', to: "/about", margin: 5}]}/>
            </Col>
            <div className="hundred">
              <Col lg={12} md={12} xs={12} className="flexTitle">
                <div className="intro">
                  <p className="titleNav Port">{this.props.title}</p>
                  <img src={this.props.logo} alt="" className="portLogo"/>
                </div>
              </Col>
            </div>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default PortTitle;
