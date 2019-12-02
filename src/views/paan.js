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
        <AboutMethod
          challenge="Challenge"
          challengeDesc="Develop a comprehensive ethnography of paan (a local delicacy) consumers in the Lahore area and examine perceived link to expressions of masculinity."
          truth="Approach"
          truthDesc="Gather qualitative data on paan consumers to understand consumption scenarios"
          concept="Approach"
          conceptDesc="Use quantitative surveys to measure mental associations with masculinity expression"
          img={paanCover}
          title=""
          approachTitle="Approach"
          approach={[{
            title: 'Extensive fieldwork' ,
            description: ['The project involved months of interviews with paan eaters across socioeconmic strata to develop a comprehensive ethnography of consumption patterns. The fieldwork took my team to all corners of the city to ensure we captured variations across consumption hotspots.'],
            img: paan1
          },{
            title: 'Survey analysis' ,
            description: ['We took self-reported mental associations with a dose of skepticism, and designed surveys inspired by psychological research to create quantitative measurements of personas. This mixed-methods approach created a more robust research design.'],
            img: paan2
          },{
            title: 'Participant observation',
            description: ['No ethnography is complete without a fun little dose of participant observation. We embraced the paan eating culture by trying it out whilst being surrounded by locals – to their great amusement.', 'This willingness to ‘do’ instead of just ‘say’ defines my approach to qualitative research.'],
            img: paan3
          }]}
          description=""
          aggTitle="Methodology"
          method={["Fieldwork", "Interviews", "Participant observation", "Artifact analysis", "Surveys"]}
          titleAgg="Impact" aggregate={["A first-of-its-kind mixed-methods study into paan consumption that was a valuable addition to the limited literature on the subject"]}
        />
        <PortfolioTitle title="Browse more projects"/>
        <PortSection port={[{title: 'Reasons Campaign', ClassName: "", client: 'Maro Tandoors', linkTo: 'portfolio/maropuns', img: naan},{title: 'Nawn Campaign', ClassName: "", client: 'Maro Tandoors', linkTo: 'portfolio/maronawn', img: nawn},{title: 'Apple Campaign', ClassName: "", client: 'Maro Tandoors', linkTo: 'portfolio/maroapple', img: roly}]}/>
        <BackHome title="Back to portfolio" ProjectLink="/portfolio"/>
        <Footer dropEmail="Say hello" lookingForward="" email="uwaheed@nyu.edu" navTitle="Navigation" navigation={[{name: 'Portfolio', linkTo: './portfolio'}, {name: 'About', linkTo: './about'}, {name: 'Home', linkTo: './'}]} socTitle="Social" footerSocial={[{name: 'LinkedIn', ClassName: 'In'}, {name: 'Upwork', ClassName: 'Up'}]}/>
      </div>
    )
  }
}

export default Paan;
