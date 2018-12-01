import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class AboutListAgg extends Component {

  render () {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col lg={12} md={12} sm={12} xs={12} className="budgetContain">
              <p className="sectionTitle AboutListTitle">{this.props.title}</p>
            </Col>
            <Col lg={12} md={12} sm={12} xs={12}>
              <ul>
                {this.props.aggregate.length > 0 && this.props.aggregate.map((agg, index) => (
                  <li key={index} className="budgetHead">{agg}</li>
                ))}
              </ul>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default AboutListAgg;
