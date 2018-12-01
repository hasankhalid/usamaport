import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import YouTube from 'react-youtube-embed'

class EmbedYoutube extends Component {
  render () {
    return (
      <Grid className="hundred" style={{marginTop: '50px'}}>
        <Row className="show-grid">
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <Col lg={8} md={8} xs={12} className="border">
              <YouTube id={this.props.id} />
            </Col>
          </div>
        </Row>
      </Grid>
    )
  }
}

export default EmbedYoutube;
