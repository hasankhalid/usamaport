import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import {IndexLinkContainer} from 'react-router-bootstrap';
import classnames from 'classnames';

class PortSection extends Component {
  render () {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            {this.props.port.length > 0 && this.props.port.map((portfolioItem, index) => (
              <IndexLinkContainer key={index} className={classnames('portSection', portfolioItem.ClassName)} to={portfolioItem.linkTo}>
                <Col lg={3} md={3} sm={6} xs={12} className="homeportItem">
                    <div className="homePortItem">
                      <div>
                        <div className="portfolioImgContain">
                          <img className="homePortImage" src={portfolioItem.img}></img>
                          <div className="portfolioTint"></div>
                        </div>
                        <p className="homeProjTitle">{portfolioItem.title}</p>
                        <p className={classnames('homeProjClient', portfolioItem.ClassName)}>Client: {portfolioItem.client}</p>
                      </div>
                    </div>
                </Col>
              </IndexLinkContainer>
            ))}
          </Row>
        </Grid>
      </div>
    )
  }
}

export default PortSection;
