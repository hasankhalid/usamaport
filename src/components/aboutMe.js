import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class AboutMe extends Component {
  render () {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <div>
              <Col lg={10} md={10} sm={9} xs={12}>
                <p className="sectionTitle">{this.props.title}</p>
                <p className="aboutMe">{this.props.aboutMe}</p>
              </Col>
              <Col lg={2} md={2} sm={3} xs={12} className="avatarContain">
                <img className="avatar" src={this.props.pic}/>
              </Col>
            </div>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default AboutMe;
