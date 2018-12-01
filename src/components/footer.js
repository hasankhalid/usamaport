import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import {IndexLinkContainer} from 'react-router-bootstrap';
import classnames from 'classnames';

class Footer extends Component {

  linkedIn = () => {
    window.open("", "TwitterProfile");
    window.close();
  }

  doClick = (type) => {
    if (type.classList.contains("In")) {
      window.open("https://www.linkedin.com/in/usama-waheed/", "InProfile");
      window.close();
    }
    else if (type.classList.contains("Fb")) {
      window.open("https://www.facebook.com/usamaaaaa", "FbProfile");
      window.close();
    }
    else if (type.classList.contains("Up")) {
      window.open("  https://www.upwork.com/o/profiles/users/_~0175e67bf98edc6c3d/", "UpProfile");
      window.close();
    }
  }

  render () {
    return (
      <footer className="footer">
        <Grid>
          <Row className="show-grid">
            <Col lg={6} md={6} xs={12}>
              <p className="footerDisclaim">{this.props.dropEmail}</p>
              <p className="footerDisclaim">{this.props.lookingForward}</p>
              <span className="footerEmail">{this.props.email}</span>
            </Col>
            <Col lg={3} md={3} xs={12} className="linksSection">
              <div>
                <span className="footerTitle">{this.props.socTitle}</span>
                <div className="footerLinksContain">
                  {this.props.footerSocial.length > 0 && this.props.footerSocial.map((footersocial, index) => (
                    <span onClick={(e) => this.doClick(e.target)} key={index} className={classnames('footerText', footersocial.ClassName)}>{footersocial.name}</span>
                  ))}
                </div>
              </div>
            </Col>
            <Col lg={3} md={3} xs={12} className="linksSection">
              <div>
                <span className="footerTitle">{this.props.navTitle}</span>
                <div className="footerLinksContain">
                  {this.props.navigation.length > 0 && this.props.navigation.map((navitem, index) => (
                    <IndexLinkContainer key={index} to={navitem.linkTo}>
                      <span className="footerText">{navitem.name}</span>
                    </IndexLinkContainer>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Grid>
      </footer>
    )
  }
}

export default Footer;
