import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class PTag extends Component {
  render () {
    return (
      <Grid>
        <Row className="show-grid">
          <Col lg={12} md={12} xs={12}>
            <p className="sixteen">{this.props.Para}</p>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default PTag;
