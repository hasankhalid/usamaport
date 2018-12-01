import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import {IndexLinkContainer} from 'react-router-bootstrap';
import { TiArrowRight } from "react-icons/ti";
import Fade from 'react-reveal/Fade';
import classnames from 'classnames';

class HomeProjects extends Component {

  doClick = (type) => {
    if (type.classList.contains("Instagram")) {
      window.open('https://drive.google.com/file/d/19FnkPXPdBNk8JZKPofnCRViP58uMCyb4/view', "InstaProfile");
      window.close();
    }
  }

  render () {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col lg={12} md={12} xs={12}>
              <p className="sectionTitle">{this.props.title}</p>
            </Col>
            {this.props.homePort.length > 0 && this.props.homePort.map((portfolioItem, index) => (
              <IndexLinkContainer key={index} className="portSection" to={portfolioItem.linkTo}>
                <Col lg={3} md={3} sm={6} xs={12} className="homeportItem">
                  <Fade delay={index*400}>
                    <div className="homePortItem homePortHeight">
                      <div>
                        <div className="portfolioImgContain">
                          <img className="homePortImage" src={portfolioItem.img}></img>
                          <div className="portfolioTint"></div>
                        </div>
                        <p className="homeProjTitle">{portfolioItem.title}</p>
                        <p className="homeProjClient">Client: {portfolioItem.client}</p>
                      </div>
                      <div>
                        <p className="homeProjDesc">{portfolioItem.description}</p>
                      </div>
                    </div>
                  </Fade>
                </Col>
              </IndexLinkContainer>
            ))}
            {this.props.PDFPort.length > 0 && this.props.PDFPort.map((portfolioItem, index) => (
              <Fade delay={1600} key={index}>
                <Col lg={3} md={3} sm={6} xs={12} key={index} onClick={(e) => this.doClick(e.target)}  className={classnames('portSection', 'homeportItem', portfolioItem.ClassName)}>
                  <div className="homePortItem homePortHeight">
                    <div>
                      <div className="portfolioImgContain">
                        <img className={classnames('homePortImage', portfolioItem.ClassName)} src={portfolioItem.img}></img>
                        <div className={classnames('portfolioTint', portfolioItem.ClassName)}></div>
                      </div>
                      <p className={classnames('homeProjTitle', portfolioItem.ClassName)}>{portfolioItem.title}</p>
                      <p className={classnames('homeProjClient', portfolioItem.ClassName)}>Client: {portfolioItem.client}</p>
                      <div>
                        <p className="homeProjDesc">{portfolioItem.description}</p>
                      </div>
                    </div>
                  </div>
                </Col>
              </Fade>
            ))}
            <Col lg={12} md={12} sm={12} xs={12}>
              <IndexLinkContainer to={this.props.ProjectLink}>
                <div className="portfolioLink">
                  <p className="viewProj">View Projects</p>
                  <TiArrowRight/>
                </div>
              </IndexLinkContainer>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default HomeProjects;
