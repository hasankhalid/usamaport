import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import NavBar from './navbar.js';
import ListAggMeth from '../components/aggregateMethod';
import Fade from 'react-reveal/Fade';

class AboutMethodHalf extends Component {
  render () {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col lg={12} md={12} sm={12} xs={12}>
              <p className="sectionTitle">{this.props.title}</p>
              <p className="description sixteen">{this.props.description}</p>
            </Col>
            <Col lg={6} md={6} sm={6} xs={12} className="aboutInfoHalf">
              <Fade>
                <div>
                  <div className="topBox"/>
                  <p className="halfInfoTitle">{this.props.challenge}</p>
                  <p className="description sixteen">{this.props.challengeDesc}</p>
                </div>
              </Fade>
              <Fade delay={450}>
                <div>
                  <div className="topBox"/>
                  <p className="halfInfoTitle">{this.props.truth}</p>
                  <p className="description sixteen">{this.props.truthDesc}</p>
                  <p className="description sixteen">{this.props.conceptDesc}</p>
                </div>
              </Fade>

            </Col>
            <Col lg={6} md={6} sm={6} xs={12} className="halfBannerContain">
              <img className="halfBanner" alt="Project Banner" src={this.props.img}/>
            </Col>
            <ListAggMeth methods={this.props.method} titleMethod={this.props.aggTitle} aggregate={this.props.aggregate} titleAgg={this.props.titleAgg}/>
            <Col lg={12} md={12} sm={12} xs={12}>
              <p className="sectionTitle">{this.props.approachTitle}</p>
            </Col>
            {this.props.approach.length > 0 && this.props.approach.map((approachItem, index) =>
              index % 2 ?
                <div key={index} className={index % 2 ? "imageRight" : "imageLeft"}>
                  <Col lg={6} md={6} sm={6} xs={12} className="aboutApproachHalf">
                    <Fade down>
                        <p className="halfInfoTitle">{approachItem.title}</p>
                    </Fade>
                    {approachItem.description.length > 0 && approachItem.description.map((desc, index) =>
                      <Fade up delay={75} key={index}>
                        <p key={index} className="description sixteen">{desc}</p>
                      </Fade>
                    )}
                  </Col>
                  <Col lg={6} md={6} sm={6} xs={12} className="halfApproachBannerContain halfBannerContain">
                    <img className="halfBannerApproach" alt="" src={approachItem.img}/>
                  </Col>
                </div>
                :
                <div key={index} className={index % 2 ? "imageRight" : "imageLeft"}>
                  <Col lg={6} md={6} sm={6} xs={12} className="halfApproachBannerContain halfBannerContain">
                    <img className="halfBannerApproach" alt="" src={approachItem.img}/>
                  </Col>
                  <Col lg={6} md={6} sm={6} xs={12} className="aboutApproachHalf">
                    <Fade down>
                      <p className="halfInfoTitle">{approachItem.title}</p>
                    </Fade>
                    {approachItem.description.length > 0 && approachItem.description.map((desc, index) =>
                      <Fade up delay={75} key={index}>
                        <p className="description sixteen">{desc}</p>
                      </Fade>
                    )}
                  </Col>
                </div>
            )}
          </Row>
        </Grid>
      </div>
    )
  }
}

export default AboutMethodHalf;
