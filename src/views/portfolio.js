import React, {Component} from 'react';
import NavTitle from '../components/navtitle';
import Footer from '../components/footer';
import PortfolioTitle from '../components/portfolioTitle';
import PortSection from '../components/portSection';
import PDFSection from '../components/PDFSection';
import BackHome from '../components/backHome';
import naan from '../resources/nuttelabanner.jpg';
import nawn from '../resources/nawnbanner.jpg';
import greatness from '../resources/greatnessbanner.jpg';
import samsung from '../resources/samsung.png';
import instagram from '../resources/instagram.png';
import roly from '../resources/applebanner.jpg';
import paan from '../resources/paanbanner.jpg';
import grocery from '../resources/grocery.jpg';

class Portfolio extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render () {
    return (
      <div>
        <NavTitle title="Portfolio"/>
        <PortfolioTitle title="Ad Research & Design"/>
        <PortSection port={[{title: 'Reasons Campaign', ClassName: "", client: 'Maro Tandoors', linkTo: 'portfolio/maropuns', img: naan},{title: 'Nawn Campaign', ClassName: "", client: 'Maro Tandoors', linkTo: 'portfolio/maronawn', img: nawn},{title: 'Apple Campaign', ClassName: "", client: 'Maro Tandoors', linkTo: 'portfolio/maroapple', img: roly}]}/>
        <PortfolioTitle title="UX & Field Research"/>
        <PortSection port={[{title: 'Ethnography of Paan Consumers', ClassName: "", client: 'LUMS coursework', linkTo: 'portfolio/ethnopaan', img: paan},{title: 'Pick and Chill', ClassName: "", client: 'NYU Stern coursework', linkTo: 'portfolio/uxgroceries', img: grocery}]}/>
        <PortfolioTitle title="Writing Samples"/>
        <PDFSection port={[{title: 'Finding Greatness: Analyzing Nike’s 2012 Olympics Advertisement Campaign', ClassName: "Nike", client: 'NYU Course Work', img: greatness},{title: 'Samsung and the Galaxy Note 7 Crisis: A psychological case study analysis', ClassName: "Samsung", client: 'NYU Course Work', img: samsung}, {title: 'Should Instagram enter the physical product market? UX & product design research', ClassName: "Instagram", client: 'NYU Course Work', img: instagram}]}/>
        <BackHome title="Back to home" ProjectLink="/"/>
        <Footer dropEmail="Let's talk" lookingForward="" email="uwaheed@nyu.edu" navTitle="Navigation" navigation={[{name: 'Portfolio', linkTo: './portfolio'}, {name: 'About', linkTo: './about'}, {name: 'Home', linkTo: './'}]} socTitle="Social" footerSocial={[{name: 'LinkedIn', ClassName: 'In'}, {name: 'Upwork', ClassName: 'Up'}]}/>
      </div>
    )
  }
}

export default Portfolio;
