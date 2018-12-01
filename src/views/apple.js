import React, {Component} from 'react';
import Footer from '../components/footer';
import PortTitle from '../components/portTitle';
import BackHome from '../components/backHome';
import AboutHalfImage from '../components/aboutHalf';
import maro from '../resources/marologo.png';
import roly from '../resources/applebanner.jpg';
import roly1 from '../resources/Portfolio/Marketing campaigns/Apple campaign/Apple image 1.png';
import roly2 from '../resources/Portfolio/Marketing campaigns/Apple campaign/Apple image 2.png';
import roly3 from '../resources/Portfolio/Marketing campaigns/Apple campaign/Apple image 3.png';
import banner from '../resources/4.jpg';
import grocery from '../resources/grocery.jpg';
import naan from '../resources/nuttelabanner.jpg';
import nawn from '../resources/nawnbanner.jpg';
import PortfolioTitle from '../components/portfolioTitle';
import PortSection from '../components/portSection';

class Apple extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render () {
    return (
      <div>
        <PortTitle img={banner} title="Apple Campaign for Maro Tandoors" logo={maro} />
        <AboutHalfImage projInsights={[{number: 379000 , title: 'People Reached'}, {number: 64000 , title: 'Engagement/Clicks'}, {number: 4500 , title: 'Likes'}, {number: '75 $', title: 'Budget'}]} challenge="Challenge" challengeDesc="Launching a brand new menu offering to regenerate interest in the brand." truth="Insight" truthDesc="Repeated exposure to distinguished branding develop a reflexive memory system in people." concept="Concept" conceptDesc="Leverage these memory systems by pairing our branding with an already well-loved product, Piggyback off Apple’s September event media coverage. Advertise our food like iPhones." img={roly} title="About Maro" approachTitle="Campaign" approach={[{title: 'Current trends for marketing' , description: 'The campaign successfully hijacked the conversation surrounding the launch of the iPhone 7 and invited widespread sharing', img: roly1},{title: 'Use of Language' , description: 'The bilingual captions capitalized on several popular trends at the time to capture a wider audience', img: roly2},{title: 'Cultivating a brand image' , description: 'The pairing with Apple raised MARO’s own image as a premium brand in the tandoor space', img: roly3}]} logo={maro} description="MARO Tandoors is a food startup whose original proposition was to offer standardized naan bread, a staple food across Southeast Asia. They catapulted to national fame when they started selling innovative new products such as the Nutella Naan, promoted by quirky marketing campaigns" titleMethod="Methods & Measurements" methods={["Memory systems research", "Copy testing", "Strategic planning", "Sales data mapping"]} titleAgg="Aggregated Impact at Maro" aggregate={["Market leader in the ‘tandoor’ space", "17x growth in social media audience within 1 year", "2 million+ views across campaigns", "4x growth in sales"]} />
        <PortfolioTitle title="Browse more projects"/>
        <PortSection port={[{title: 'Reasons Campaign', ClassName: "", client: 'Maro Tandoors', linkTo: 'maropuns', img: naan},{title: 'Nawn Campaign', ClassName: "", client: 'Maro Tandoors', linkTo: 'maronawn', img: nawn},{title: 'Pick and Chill', ClassName: "", client: 'NYU Stern coursework', linkTo: 'uxgroceries', img: grocery}]}/>
        <BackHome title="Back to portfolio" ProjectLink="/portfolio"/>
        <Footer dropEmail="Let's talk" lookingForward="" email="uwaheed@nyu.edu" navTitle="Navigation" navigation={[{name: 'Portfolio', linkTo: './portfolio'}, {name: 'About', linkTo: './about'}, {name: 'Home', linkTo: './'}]} socTitle="Social" footerSocial={[{name: 'LinkedIn', ClassName: 'In'}, {name: 'Upwork', ClassName: 'Up'}]}/>
      </div>
    )
  }
}

export default Apple;
