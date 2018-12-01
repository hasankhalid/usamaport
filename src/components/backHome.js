import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import {IndexLinkContainer} from 'react-router-bootstrap';
import { TiArrowLeft } from "react-icons/ti";

class BackHome extends Component {
  render () {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col lg={12} md={12} sm={12} xs={12}>
              <IndexLinkContainer to={this.props.ProjectLink}>
                <div className="portfolioLink">
                  <p className="viewProj">{this.props.title}</p>
                  <TiArrowLeft className="backArrow"/>
                </div>
              </IndexLinkContainer>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default BackHome;
