import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import ProjImpact from './projImpact.js';
import Fade from 'react-reveal/Fade';
import ListAggMeth from '../components/aggregateMethod'

class AboutHalfImage extends Component {
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
                </div>
              </Fade>
              <Fade delay={900}>
                <div>
                  <div className="topBox"/>
                  <p className="halfInfoTitle">{this.props.concept}</p>
                  <p className="description sixteen">{this.props.conceptDesc}</p>
                </div>
              </Fade>
            </Col>
            <Col lg={6} md={6} sm={6} xs={12} className="halfBannerContain">
              <img className="halfBanner" alt="Project Image" src={this.props.img}/>
            </Col>
            <Col lg={12} md={12} sm={12} xs={12}>
              <p className="sectionTitle">{this.props.impactTitle}</p>
            </Col>
            <ProjImpact projInsights={this.props.projInsights}/>
            <ListAggMeth methods={this.props.methods} titleMethod={this.props.titleMethod} aggregate={this.props.aggregate} titleAgg={this.props.titleAgg}/>
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
                    <img className="halfBannerApproach" src={approachItem.img}/>
                  </Col>
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
                </div>
            )}
          </Row>
        </Grid>
      </div>
    )
  }
}

export default AboutHalfImage;
