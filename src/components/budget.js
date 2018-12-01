import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class Budget extends Component {

  render () {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col lg={12} md={12} sm={12} xs={12} className="budgetContain">
              <div className="budgetContainer">
                <p className="budgetHead">Budget</p>
                <p className="budgetNumber">{this.props.budget} $</p>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Budget;
