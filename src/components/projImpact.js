import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';

class ProjImpact extends Component {

  render () {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            {this.props.projInsights.length > 0 && this.props.projInsights.map((insightItem, index) => (
              <Col key={index} lg={3} md={3} sm={6} xs={12} className="insightContain">
                <div className="insightContainer">
                  <Zoom delay={index * 150}>
                    <p className="budgetHead">{insightItem.title}</p>
                    <p className="budgetNumber">{insightItem.number}</p>
                  </Zoom>
                </div>
              </Col>
            ))}
          </Row>
        </Grid>
      </div>
    )
  }
}

export default ProjImpact;
