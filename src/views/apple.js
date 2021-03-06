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
        <PortTitle img={banner} title="Apple Campaign" logo={maro} />
        <AboutHalfImage
          projInsights={[{number: '379,000' , title: 'People Reached'}, {number: '64,000' , title: 'Engagement/Clicks'}, {number: 4500 , title: 'Likes'}, {number: '0 $', title: 'Budget'}]}
          challenge="Challenge"
          challengeDesc="Launching a brand new menu offering to regenerate interest in the brand."
          truth="Insight"
          truthDesc="Repeated exposure to distinguished branding develop a reflexive memory system in people."
          concept="Concept"
          conceptDesc="Leverage these memory systems by pairing our branding with an already well-loved product, Piggyback off Apple’s September event media coverage. Advertise our food like iPhones."
          img={roly}
          title="About Maro"
          approachTitle="Campaign"
          approach={[
            {title: 'Memory systems',
            description: ['The campaign leveraged psychological research on memory systems to pair the Apple brand image with MARO’s by triggering instant recognizability. It successfully hijacked the conversation surrounding the launch of the iPhone 7 and invited widespread sharing'], img: roly1},{title: 'Copy testing' , description: ['The copy-writing capitalized on popular local trends and was carefully tested to ensure the references to Apple were understood – while still adding our original brand of humor.', 'The bilingual captions appealed to a wider audience and were a nod to our eastern-western fusion cuisine.'],
            img: roly2},
            {title: 'Strategic planning' ,
            description: ['MARO was competing against several copycats that all offered a range of experiences. The strategic decision to mimic Apple in particular firmly established MARO as a premium brand in the tandoor space (given that our prices were already as astronomical as Apple’s)'],
            img: roly3}
          ]}
          logo={maro}
          description="MARO Tandoors is a food startup whose original proposition was to offer standardized naan bread, a staple food across Southeast Asia. They catapulted to national fame when they started selling innovative new products such as the Nutella Naan, promoted by quirky marketing campaigns"
          titleMethod="Methods & Measurements"
          methods={["Memory systems research", "Copy testing", "Strategic planning", "Sales data mapping"]}
          titleAgg="Aggregated Impact at Maro"
          aggregate={["Market leader in the ‘tandoor’ space", "17x growth in social media audience within 1 year", "2 million+ views across campaigns", "4x growth in sales"]}
        />
        <PortfolioTitle title="Browse more projects"/>
        <PortSection port={[{title: 'Reasons Campaign', ClassName: "", client: 'Maro Tandoors', linkTo: 'maropuns', img: naan},{title: 'Nawn Campaign', ClassName: "", client: 'Maro Tandoors', linkTo: 'maronawn', img: nawn},{title: 'Pick and Chill', ClassName: "", client: 'NYU Stern coursework', linkTo: 'uxgroceries', img: grocery}]}/>
        <BackHome title="Back to portfolio" ProjectLink="/portfolio"/>
        <Footer dropEmail="Say hello" lookingForward="" email="uwaheed@nyu.edu" navTitle="Navigation" navigation={[{name: 'Portfolio', linkTo: './portfolio'}, {name: 'About', linkTo: './about'}, {name: 'Home', linkTo: './'}]} socTitle="Social" footerSocial={[{name: 'LinkedIn', ClassName: 'In'}, {name: 'Upwork', ClassName: 'Up'}]}/>
      </div>
    )
  }
}

export default Apple;
