import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class HeadingImage extends Component {
  render () {
    return (
      <Grid>
        <Row className="show-grid avatarInfoContain">
          <Col lg={8} md={8} xs={12}>
            <div className="avatarInfo">
              <p className="sectionTitle noMargin">{this.props.title}</p>
              <p className="budgetHead noMargin">{this.props.desc}</p>
            </div>
          </Col>
          <Col lg={4} md={4} xs={12}>
            <div className="avatarContain">
              <img className="avatar" src={this.props.image}/>
            </div>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default HeadingImage;
