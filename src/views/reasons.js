import React, {Component} from 'react';
import Footer from '../components/footer';
import PortTitle from '../components/portTitle';
import BackHome from '../components/backHome';
import AboutHalfImage from '../components/aboutHalf';
import maro from '../resources/marologo.png';
import reasonCover from '../resources/Portfolio/Marketing campaigns/Reasons campaign/ReasonsCover.jpg';
import reason1 from '../resources/Portfolio/Marketing campaigns/Reasons campaign/Reasons image 1.jpg';
import reason2 from '../resources/Portfolio/Marketing campaigns/Reasons campaign/Reasons image 2.jpg';
import reason3 from '../resources/Portfolio/Marketing campaigns/Reasons campaign/Reasons image 3.jpg';
import banner from '../resources/1.jpg';
import PortfolioTitle from '../components/portfolioTitle';
import nawn from '../resources/nawnbanner.jpg';
import roly from '../resources/applebanner.jpg';
import paan from '../resources/paanbanner.jpg';
import PortSection from '../components/portSection';

class Reasons extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render () {
    return (
      <div>
        <PortTitle img={banner} title="Why Choose Maro Tandoors?" logo={maro} />
        <AboutHalfImage
          challenge="Challenge"
          challengeDesc="To enter the market with a splash and increase brand awareness."
          truth="Insight"
          truthDesc="People love an underdog story. Mild controversy attracts attention."
          concept="Concept"
          conceptDesc="Take photos of our products outside big-name restaurants and cafes. Pair each photo with one-liners in the caption."
          img={reasonCover}
          title="About Maro"
          approachTitle="Campaign"
          impactTitle="Impact"
          projInsights={[{number: '550,000' , title: 'Clicks'}, {number: '17,000' , title: 'Likes'}, {number: 4200 , title: 'Shares'}, {number: 1800 , title: 'Comments'}, {number: '0 $' , title: 'Budget'}]}
          approach={[{
            title: 'Optimized Images' ,
            description: ['The image sequences were optimized to guide the audience through the album and ensure that the most eye-catching brands were at the start and end.', 'This ensured that the content was more clickable, held attention and prevented attrition, and nudged the audience towards sharing.'],
            img: reason1
          },{
            title: 'Calculated risk-taking' ,
            description: ['Indirect use of competitor logos ruffled feathers and provoked debate. This generated even more attention than anticipated.', 'It was a calculated risk that reaped rewards and even prompted some brands to respond – increasing visibility.'],
            img: reason2
          },{
            title: 'David vs Goliath’' , description: ['Our audience cheered for the newcomer taking on the big boys – which was exactly what we hoped for as a startup.', 'This built a favorable brand image, made clear which market segment we were placing ourselves in, and also attracted in-store traffic that wanted to see if we could back up our big words.'],
            img: reason3
          }]}
          logo={maro}
          description="MARO Tandoors is a food startup whose original proposition was to offer standardized naan bread, a staple food across Southeast Asia. They catapulted to national fame when they started selling innovative new products such as the Nutella Naan, promoted by quirky marketing campaigns"
          titleMethod="Methods & Measurements"
          methods={["Interviews", "Color psychology research", "User journey simulation", "Copy testing", "Sales data mapping" , "Bounce rate measurement"]}
          titleAgg="Aggregated Impact at Maro"
          aggregate={["Market leader in the ‘tandoor’ space", "17x growth in social media audience within 1 year", "2 million+ views across campaigns", "4x growth in sales"]}
        />
        <PortfolioTitle title="Browse more projects"/>
        <PortSection port={[{title: 'Nawn Campaign', ClassName: "", client: 'Maro Tandoors', linkTo: 'maronawn', img: nawn},{title: 'Apple Campaign', ClassName: "", client: 'Maro Tandoors', linkTo: 'maroapple', img: roly},{title: 'Ethnography of Paan Consumers', ClassName: "", client: 'LUMS coursework', linkTo: 'ethnopaan', img: paan}]}/>
        <BackHome title="Back to portfolio" ProjectLink="/portfolio"/>
        <Footer dropEmail="Say hello" lookingForward="" email="uwaheed@nyu.edu" navTitle="Navigation" navigation={[{name: 'Portfolio', linkTo: './portfolio'}, {name: 'About', linkTo: './about'}, {name: 'Home', linkTo: './'}]} socTitle="Social" footerSocial={[{name: 'LinkedIn', ClassName: 'In'}, {name: 'Upwork', ClassName: 'Up'}]}/>
      </div>
    )
  }
}

export default Reasons;
