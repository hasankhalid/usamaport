import React, {Component} from 'react';
import Footer from '../components/footer';
import PortTitle from '../components/portTitle';
import BackHome from '../components/backHome';
import AboutMethodHalf from '../components/aboutMethodHalf';
import EmbedYoutube from '../components/embedYoutube';
import grocCover from '../resources/Portfolio/Research & Design/Groceries research/Groceries cover.png';
import groc1 from '../resources/Portfolio/Research & Design/Groceries research/Groceries image 1.png';
import groc2 from '../resources/Portfolio/Research & Design/Groceries research/Groceries image 2.png';
import groc3 from '../resources/Portfolio/Research & Design/Groceries research/concept.jpg';
import banner from '../resources/Portfolio/banner.jpg';
import naan from '../resources/nuttelabanner.jpg';
import roly from '../resources/applebanner.jpg';
import paan from '../resources/paanbanner.jpg';
import PortfolioTitle from '../components/portfolioTitle';
import PortSection from '../components/portSection';

class Grocery extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render () {
    return (
      <div>
        <PortTitle img={banner} title="Grocery Store Disruption" />
        <AboutMethodHalf challenge="Challenge" challengeDesc="Disrupt the grocery store experience by prototyping an innovative new concept store." truth="Approach" truthDesc="Conduct extensive user experience research surrounding existing stores to identify pain points. Address pain points in developing iterative solutions" concept="Approach" conceptDesc="Test concepts amongst focus groups to identify desired features" img={groc1} title="" approachTitle="Approach" approach={[{title: 'Affinity Diagram' , description: 'Affinity diagram to consolidate qualitative data and categorize pain points by theme. This was then used to identify actionable areas.', img: grocCover},{title: 'Understanding the process' , description: 'The user journey across a typical grocery store experience was mapped to understand where disruption could take place to improve the process', img: groc2},{title: 'Concept Designs' , description: 'Concept designs were presented to a focus group to help with value attribution and feature prioritization', img: groc3}]} description="" aggTitle="Methodology" method={["Contextual inquiries", "Intercept interviews", "Focused interviews", "Affinity mapping", "Concept workshop", "Prototyping"]} titleAgg="Impact" aggregate={["A visual prototype of the concept store was developed based on highly refined insights. Sales pitch made to NYU Stern MBA class", "Check out the concept video below!"]} />
        <EmbedYoutube id='TJKQL3FBjoA'/>
        <PortfolioTitle title="Browse more projects"/>
        <PortSection port={[{title: 'Reasons Campaign', ClassName: "", client: 'Maro Tandoors', linkTo: 'maropuns', img: naan},{title: 'Apple Campaign', ClassName: "", client: 'Maro Tandoors', linkTo: 'maroapple', img: roly},{title: 'Ethnography of Paan Consumers', ClassName: "", client: 'LUMS coursework', linkTo: 'ethnopaan', img: paan}]}/>
        <BackHome title="Back to portfolio" ProjectLink="/portfolio"/>
        <Footer dropEmail="Say hello" lookingForward="" email="uwaheed@nyu.edu" navTitle="Navigation" navigation={[{name: 'Portfolio', linkTo: './portfolio'}, {name: 'About', linkTo: './about'}, {name: 'Home', linkTo: './'}]} socTitle="Social" footerSocial={[{name: 'LinkedIn', ClassName: 'In'}, {name: 'Upwork', ClassName: 'Up'}]}/>
      </div>
    )
  }
}

export default Grocery;
