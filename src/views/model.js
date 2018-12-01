import React, {Component} from 'react';
import Footer from '../components/footer';
import PortTitle from '../components/portTitle';
import BackHome from '../components/backHome';
import AboutModel from '../components/aboutModel';
import maro from '../resources/marologo.png';
import nawnCover from '../resources/Portfolio/Marketing campaigns/Nawn campaign/Nawn cover image.jpg';
import nawn1 from '../resources/Portfolio/Marketing campaigns/Nawn campaign/Nawn image 3.jpg';
import nawn2 from '../resources/Portfolio/Marketing campaigns/Nawn campaign/Nawn image 2.jpg';
import nawn3 from '../resources/Portfolio/Marketing campaigns/Nawn campaign/Nawn image 4.jpg';
import banner from '../resources/5.jpg';
import naan from '../resources/nuttelabanner.jpg';
import roly from '../resources/applebanner.jpg';
import paan from '../resources/paanbanner.jpg';
import PortfolioTitle from '../components/portfolioTitle';
import PortSection from '../components/portSection';

class Model extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render () {
    return (
      <div>
        <PortTitle img={banner} title="Nawn Campaign" logo={maro} />
        <AboutModel projInsights={[{number: 8000 , title: 'Likes'}, {number: 11000 , title: 'Shares'}, {number: 1000 , title: 'Comments'}, {number: '50 $' , title: 'Budget'}]} challenge="Challenge" challengeDesc="Break through newsfeed clutter and distinguish MARO from copycat competitors’ food photos" truth="Insight" truthDesc="People attend and pay attention to incongruous things – “this does not go with that”" concept="Concept" conceptDesc="Take aim at the flurry of cliched seasonal lawn advertisements (popular clothing material amongst Southeast Asian women). Advertise our naans using fashion photography instead of food photography" img={nawnCover} title="About Maro" approachTitle="Approach" approach={[{title: 'Magazine poses' , description: 'The campaign mimicked common poses in fashion magazines and stood out because of the ridiculousness of it all', img: nawn1},{title: 'Audience Engagement' , description: 'Our ‘models’ received far more attention than we expected…', img: nawn2},{title: 'Supplementary Campaign' , description: 'A supplementary campaign highlighting the actual food dovetailed with this one to achieve both brand image and product awareness', img: nawn3}]} logo={maro} description="MARO Tandoors is a food startup whose original proposition was to offer standardized naan bread, a staple food across Southeast Asia. They catapulted to national fame when they started selling innovative new products such as the Nutella Naan, promoted by quirky marketing campaigns" titleMethod="Methods & Measurements" methods={["Cultural trends research", "Design research", "Engagement rates", "Feedback aggregation "]} titleAgg="Aggregated Impact at Maro" aggregate={["Market leader in the ‘tandoor’ space", "17x growth in social media audience within 1 year", "2 million+ views across campaigns", "4x growth in sales"]} />
        <PortfolioTitle title="Browse more projects"/>
        <PortSection port={[{title: 'Reasons Campaign', ClassName: "", client: 'Maro Tandoors', linkTo: 'maropuns', img: naan},{title: 'Apple Campaign', ClassName: "", client: 'Maro Tandoors', linkTo: 'maroapple', img: roly},{title: 'Ethnography of Paan Consumers', ClassName: "", client: 'LUMS coursework', linkTo: 'ethnopaan', img: paan}]}/>
        <BackHome title="Back to portfolio" ProjectLink="/portfolio"/>
        <Footer dropEmail="Say hello" lookingForward="" email="uwaheed@nyu.edu" navTitle="Navigation" navigation={[{name: 'Portfolio', linkTo: './portfolio'}, {name: 'About', linkTo: './'}]} socTitle="Social" footerSocial={[{name: 'LinkedIn', ClassName: 'In'}, {name: 'Upwork', ClassName: 'Up'}]}/>
      </div>
    )
  }
}

export default Model;
