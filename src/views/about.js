import React, {Component} from 'react';
import Footer from '../components/footer';
import HeadingImage from '../components/headimage';
import PortTitle from '../components/portTitle';
import BackHome from '../components/backHome';
import EmbedYoutube from '../components/embedYoutube';
import banner from '../resources/Portfolio/banner.jpg';
import usama from '../resources/profpic.jpg';

import AboutListAgg from '../components/aboutListagg'

class About extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render () {
    return (
      <div>
        <PortTitle img={banner} title="About Me" />
        <HeadingImage title="Hello. We meet again." desc="If you’re wondering who I am, look no further. On this page you will find exclusive fun facts about me." image={usama}/>
        <AboutListAgg title="Here are some things you probably want to know about me" aggregate={["I hold a Master's degree in Consumer Psychology from NYU. My other educational stamp of approval is in analytics.","For several years, I've consulted on matters of video design, editing, and distribution for clients of all shapes and sizes.", "My favorite work has been disrupting the food industry with a startup by developing quirky, attention-grabbing campaigns."]}/>
        <AboutListAgg title="And here are some other tidbits that you probably don't want to know, but I'm going to tell you anyway" aggregate={["I am a budding beatboxer.","I'm training to be a competitive pun-maker (yes, it's a thing).", "I can do several voice impressions, including a mean Mr. Burns (from the Simpsons).", "I tend to dabble in the arts from time to time. Here's the last time I picked up a video camera"]}/>
        <EmbedYoutube id='BwxbGXNXbuY&'/>
        <BackHome title="Back to home" ProjectLink="/"/>
        <Footer dropEmail="Let's talk" lookingForward="" email="uwaheed@nyu.edu" navTitle="Navigation" navigation={[{name: 'Portfolio', linkTo: './portfolio'}, {name: 'About', linkTo: './about'}, {name: 'Home', linkTo: './'}]} socTitle="Social" footerSocial={[{name: 'LinkedIn', ClassName: 'In'}, {name: 'Upwork', ClassName: 'Up'}]}/>
      </div>
    )
  }
}

export default About;
