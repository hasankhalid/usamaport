import React, {Component} from 'react';
import Footer from '../components/footer';
import PortTitle from '../components/portTitle';
import BackHome from '../components/backHome';
import AboutMethod from '../components/aboutMethod';
import paanCover from '../resources/Portfolio/Research & Design/Paan research/Paan cover.JPG';
import paan1 from '../resources/Portfolio/Research & Design/Paan research/Paan image 1.jpg';
import paan2 from '../resources/Portfolio/Research & Design/Paan research/Paan image 3.JPG';
import paan3 from '../resources/Portfolio/Research & Design/Paan research/Paan image 4.jpg';
import banner from '../resources/Portfolio/banner.jpg';
import naan from '../resources/nuttelabanner.jpg';
import nawn from '../resources/nawnbanner.jpg';
import roly from '../resources/applebanner.jpg';
import PortfolioTitle from '../components/portfolioTitle';
import PortSection from '../components/portSection';

class Paan extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render () {
    return (
      <div>
        <PortTitle img={banner} title="Paan Ethnography" />
        <AboutMethod challenge="Challenge" challengeDesc="Develop a comprehensive ethnography of paan (a local delicacy) consumers in the Lahore area and examine perceived link to expressions of masculinity." truth="Approach" truthDesc="Gather qualitative data on paan consumers to understand consumption scenarios" concept="Approach" conceptDesc="Use quantitative surveys to measure mental associations with masculinity expression" img={paanCover} title="" approachTitle="Approach" approach={[{title: 'Understanding product consumption' , description: 'The project involved several weeks of mingling amongst paan eaters to understand when, where, and why consumption occurred', img: paan1},{title: 'Associated Consumption' , description: 'Associated consumption of tobacco and other drugs was also examined ', img: paan2},{title: 'Survey' , description: 'Surveys were crucial in quantifying how much consumers and non-consumers identified with given user personas', img: paan3}]} description="" aggTitle="Methodology" method={["Fieldwork", "Interviews", "Participant observation", "Artifact analysis", "Surveys"]} titleAgg="Impact" aggregate={["A first-of-its-kind mixed-methods study into paan consumption that was a valuable addition to the limited literature on the subject"]}/>
        <PortfolioTitle title="Browse more projects"/>
        <PortSection port={[{title: 'Reasons Campaign', ClassName: "", client: 'Maro Tandoors', linkTo: 'portfolio/maropuns', img: naan},{title: 'Nawn Campaign', ClassName: "", client: 'Maro Tandoors', linkTo: 'portfolio/maronawn', img: nawn},{title: 'Apple Campaign', ClassName: "", client: 'Maro Tandoors', linkTo: 'portfolio/maroapple', img: roly}]}/>
        <BackHome title="Back to portfolio" ProjectLink="/portfolio"/>
        <Footer dropEmail="Say hello" lookingForward="" email="uwaheed@nyu.edu" navTitle="Navigation" navigation={[{name: 'Portfolio', linkTo: './portfolio'}, {name: 'About', linkTo: './about'}, {name: 'Home', linkTo: './'}]} socTitle="Social" footerSocial={[{name: 'LinkedIn', ClassName: 'In'}, {name: 'Upwork', ClassName: 'Up'}]}/>
      </div>
    )
  }
}

export default Paan;
