import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class PortfolioTitle extends Component {
  render () {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col lg={12} md={12} xs={12}>
              <p className="sectionTitle">{this.props.title}</p>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default PortfolioTitle;
