import React, {Component} from 'react';
import NavIntro from '../components/navIntro';
import Footer from '../components/footer';
import HomeProjects from '../components/homeProjects';
import HomeServices from '../components/homeServices';
import naan from '../resources/nuttelabanner.jpg';
import nawn from '../resources/nawnbanner.jpg';
import groc from '../resources/squaregroc.jpg';
import pie from '../resources/pie-chart.png';
import idea from '../resources/idea.png';
import conversation from '../resources/conversation.png';
import instagram from '../resources/instagram.png';

class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render () {
    return (
      <div>
        <NavIntro myTitle="Research. Design. Disrupt." whoAmI="Hi, I'm Usama " myDescHead="- a mixed-methods researcher with a focus on empathy." myDescription="I believe in meshing a data-driven approach with layers of human-centered insights." myDescFollow="Empathizing with people lies at the heart of research and design - whether it's a product, an experience, or a creative endeavor." look="Take a look at how I've applied this philosophy to several projects over the years." tookPhoto="I took the photo in the background – ask me how!" />
        <HomeServices title="What I Offer" homePort={[{title: 'Human-centered Insights', description: 'I believe in contextualizing insights beyond the computer screen and around real-life scenarios with real-life people - just like you and me.', img: pie}, {title: 'Creative Problem Solving', description: 'I have an enormous appetite for trying out unorthodox methods to find solutions to tough problems', img: idea}, {title: 'Natural curiosity', description: 'I want to find answers as much as you do - whether the question is how to market your product or what a slice of pizza has to do with the NYC subway fare', img: conversation}]}/>
        <HomeProjects ProjectLink="portfolio" title="My Work" homePort={[{title: 'Why Choose Maro?', client: 'Maro Tandoors', description: 'A research-backed, pun-heavy marketing campaign developed to make a splash and break into the food industry - which it did.', linkTo: 'portfolio/maropuns', img: naan}, {title: 'Nawn Campaign', client: 'Maro Tandoors', description: 'A creative, unorthodox solution to a familiar problem - how do we cut through all the newsfeed clutter on social media to advertise new products?', linkTo: 'portfolio/maronawn', img: nawn}, {title: 'Pick and Chill', client: 'NYU Stern Coursework', description: 'A concept grocery store to designed to disrupt the industry following a deep dive into UX methods', linkTo: '/portfolio/uxgroceries', img: groc}]} PDFPort={[{title: 'Should Instagram enter the physical product market? UX & product design research', ClassName: "Instagram", client: 'NYU Stern Coursework', description: 'A mixed-methods research proposal on how to conduct user testing in Instagram for new product development', img: instagram}]}/>
        <Footer dropEmail="Let's talk" lookingForward="" email="uwaheed@nyu.edu" navTitle="Navigation" navigation={[{name: 'Portfolio', linkTo: './portfolio'}, {name: 'About', linkTo: './about'}, {name: 'Home', linkTo: './'}]} socTitle="Social" footerSocial={[{name: 'LinkedIn', ClassName: 'In'}, {name: 'Upwork', ClassName: 'Up'}]}/>
      </div>
    )
  }
}

export default Home;
