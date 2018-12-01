import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import classnames from 'classnames';

class PDFSection extends Component {

  doClick = (type) => {
    if (type.classList.contains("Nike")) {
      window.open('https://drive.google.com/file/d/1YYe-L7UErWhefWx6MTEPQhJ6zneyhNqJ/view', "Nike");
      window.close();
    }
    else if (type.classList.contains("Samsung")) {
      window.open('https://drive.google.com/file/d/1cWQrtU5dpkY-fW4qhcgE8ZrNPdegNEwY/view', "Samsung");
      window.close();
    }
    else if (type.classList.contains("Instagram")) {
      window.open('https://drive.google.com/file/d/19FnkPXPdBNk8JZKPofnCRViP58uMCyb4/view', "InstaProfile");
      window.close();
    }
  }

  render () {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            {this.props.port.length > 0 && this.props.port.map((portfolioItem, index) => (
                <Col lg={3} md={3} sm={6} xs={12} key={index} onClick={(e) => this.doClick(e.target)}  className={classnames('portSection', 'homeportItem', portfolioItem.ClassName)}>
                  <div className="homePortItem">
                    <div>
                      <div className="portfolioImgContain">
                        <img className={classnames('homePortImage', portfolioItem.ClassName)} src={portfolioItem.img}></img>
                        <div className={classnames('portfolioTint', portfolioItem.ClassName)}></div>
                      </div>
                      <p className={classnames('homeProjTitle', portfolioItem.ClassName)}>{portfolioItem.title}</p>
                      <p className={classnames('homeProjClient', portfolioItem.ClassName)}>Client: {portfolioItem.client}</p>
                    </div>
                  </div>
                </Col>
            ))}
          </Row>
        </Grid>
      </div>
    )
  }
}

export default PDFSection;
