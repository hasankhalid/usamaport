import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class ListAggMeth extends Component {

  render () {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col lg={6} md={6} sm={12} xs={12} className="budgetContain">
              <p className="sectionTitle">{this.props.titleMethod}</p>
              <ul>
                {this.props.methods.length > 0 && this.props.methods.map((agg, index) => (
                  <li key={index} className="budgetHead">{agg}</li>
                ))}
              </ul>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12} className="budgetContain">
              <p className="sectionTitle">{this.props.titleAgg}</p>
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

export default ListAggMeth;
