import  herodesktop from '../images/hero-desktop.jpg';
import patterndesktop from '../images/bg-pattern-desktop.svg';
import logo from '../images/logo.svg';
import heromobile from '../images/hero-mobile.jpg';
import Evalidator from './Evalidator';
import '../css/style.css';

export default function Body() {
    return (
        <div className="box">
            <div className="text">
                <img className="patterndesktop" src={patterndesktop} alt="pattern-desktop" />
                <div className="zindex">
                <img className="logo" src={logo} alt="logo" />
                <h1 className="title1">We're</h1>
                <h1 className="title2">coming</h1>
                <h1 className="title3">soon</h1>
                <p className="bodytext">Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</p>
                <Evalidator/> 
                </div>
            </div >
            <img className="herodesktp" src={herodesktop} alt="herodesktop" />   
            <img className="heromobile" src={heromobile} alt="heromobile" />
        </div>   
    )
}
