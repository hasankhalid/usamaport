import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import NavBar from './navbar.js';
import banner from '../resources/Portfolio/banner.jpg';
import up from '../resources/upwork.svg';
import { TiSocialLinkedin } from "react-icons/ti";
import { FaChevronDown } from "react-icons/fa";
import Fade from 'react-reveal/Fade';

class NavIntro extends Component {
  linkedIn = () => {
    window.open("https://www.linkedin.com/in/usama-waheed/", "InProfile");
    window.close();
  }

  Up = () => {
    window.open("  https://www.upwork.com/o/profiles/users/_~0175e67bf98edc6c3d/", "UpProfile");
    window.close();
  }

  Fb = () => {
    window.open("https://www.facebook.com/usamaaaaa", "FbProfile");
    window.close();
  }



  render () {
    return (
      <div className="navIntro">
        <img src={banner} alt="" className="flexImage"/>
        <div className="colorOverlay"></div>

        <Grid className="hundred">
          <Row className="show-grid hundred">
            <Col lg={12} md={12} xs={12} >
              <NavBar textcolor='white' title="Usama Waheed" navitems={[{text: 'PORTFOLIO', to: "/portfolio", margin: 5}, {text: 'ABOUT', to: "/about", margin: 5}]}/>
            </Col>
            <div className="hundred">
              <Col lg={12} md={12} xs={12} className="flexTitle">
                <div className="intro">
                  <Fade delay={450}>
                    <p className="myName">{this.props.myTitle}</p>
                  </Fade>
                  <Fade delay={950}>
                    <p className="describeYourself noMargin"><span className="slightlybigger"><span className="iamUsama">{this.props.whoAmI}</span>{this.props.myDescHead}</span></p>
                    <p className="describeYourself noMargin">{this.props.myDescription}</p>
                    <p className="describeYourself noMargin">{this.props.myDescFollow}</p>
                    <p className="describeYourself" style={{marginTop: '20px'}}>{this.props.look}</p>
                  </Fade>
                </div>
              </Col>
            </div>
          </Row>
        </Grid>
        <Fade bottom delay={1750}>
          <div className="socialOverlay">
            <Grid className="hundred">
              <Row className="show-grid hundred chevRelative">
                <Col lg={12} md={12} xs={12} className="chevContain">
                  <FaChevronDown className="socIcon chevIcon"/>
                </Col>
                <Col lg={12} md={12} xs={12} className="socIconsContain">
                  <div>
                    <div className="socIconsContain">
                      <TiSocialLinkedin onClick={() => this.linkedIn()} className="socIcon"/>
                      <img src={up} alt="Upwork icon" onClick={() => this.Up()} className="upIcon"/>
                    </div>
                    <p className="tookPhoto">{this.props.tookPhoto}</p>
                  </div>
                </Col>
              </Row>
            </Grid>
          </div>
        </Fade>
      </div>
    )
  }
}

export default NavIntro;
