import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class Heading extends Component {
  render () {
    return (
      <Grid>
        <Row className="show-grid">
          <Col lg={12} md={12} xs={12}>
            <div>
              <p className="sectionTitle noMargin">{this.props.title}</p>
            </div>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Heading;
