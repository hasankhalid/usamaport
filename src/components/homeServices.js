import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

class HomeServices extends Component {
  render () {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col lg={12} md={12} xs={12}>
              <p className="sectionTitle">{this.props.title}</p>
            </Col>
            {this.props.homePort.length > 0 && this.props.homePort.map((portfolioItem, index) => (
              <Col lg={4} md={4} sm={6} xs={12} key={index} className="homeportItem">
                <Fade delay={index*400}>
                  <div className="serviceItem">
                    <div>
                      <div className="serviceImgContain">
                        <img className="serviceImage" src={portfolioItem.img}></img>
                      </div>
                      <p className="serviceTitle">{portfolioItem.title}</p>
                    </div>
                    <div>
                      <p className="serviceDesc">{portfolioItem.description}</p>
                    </div>
                  </div>
                </Fade>
              </Col>
            ))}
          </Row>
        </Grid>
      </div>
    )
  }
}

export default HomeServices;
