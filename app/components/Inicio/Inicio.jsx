import React from 'react';
import styles from './_Inicio.scss';
import {
  FlatButton,
  IconButton
} from 'material-ui';

import '../../assets/imgs/tgsw.png';

import Facebook from 'mui-icons/fontawesome/facebook';
import MessengerPlugin from 'react-messenger-plugin';

const links = [{
    title: 'SWP',
    link: '#swp'
  },
  {
    title: 'Venue',
    link: '#venue'
  },
  {
    title: 'Comunidad',
    link: '#community'
  }, {
    title: 'Patrocinadores',
    link: '#partners'
  },
  {
    title: 'Participar',
    link: '#tickets'
  }
];

let _second = 1000;
let _minute = _second * 60;
let _hour = _minute * 60;
let _day = _hour * 24;

export default class Inicio extends React.Component {

  constructor() {
    super();
    this.state = {
      days: null,
      hours: null,
      minutes: null,
      seconds: null,
      end: new Date('03/16/2018 6:00 PM'),
      timer: null
    }
    this.showRemaining = this.showRemaining.bind(this);
  }

  componentDidMount() {
    this.state.timer = setInterval(this.showRemaining, 1000);
  }

  handleScrollTo(hash) {
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800);
  }

  showRemaining() {
    let now = new Date();
    let distance = this.state.end - now;
    if (distance < 0) {
      clearInterval(this.state.timer);
      document.getElementById('countdown').innerHTML = '¡ES HORA DE EMPRENDER!';
      return;
    }
    let days = Math.floor(distance / _day);
    let hours = Math.floor((distance % _day) / _hour);
    let minutes = Math.floor((distance % _hour) / _minute);
    let seconds = Math.floor((distance % _minute) / _second);
    console.log(days);
    console.log(hours);
    console.log(days);
    
    this.setState({
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    });
  }

  render() {
    let Inicio = (
      <main id="home" className="container-fluid">
        <div className={styles.parallax}>
          <div className={styles.overlay}></div>
          <div className={styles.background}></div>
        </div>
        <div className={styles.front}>
          <div className="row center-xs middle-xs col-xs-12" style={{minHeight: 500, height: '100%'}}>
            <div style={{width: 400}}>
              <img src="../../assets/imgs/tgsw.png" alt="SWPachuca"/>
            </div>
            <div id="countdown" className={"col-xs-12 row center-xs " + styles.countdownWrapper}>
              FALTAN
              <div className={styles.countdown}>
                <div className={styles.wrapper}>
                  <div className={styles.up}>{this.state.days}</div>
                  <div className={styles.down}>d</div>
                </div>
                <div className={styles.wrapper}>
                  <div className={styles.up}>{this.state.hours}</div>
                  <div className={styles.down}>h</div>
                </div>
                <div className={styles.wrapper}>
                  <div className={styles.up}>{this.state.minutes}</div>
                  <div className={styles.down}>m</div>
                </div>
                <div className={styles.wrapper}>
                  <div className={styles.up}>{this.state.seconds}</div>
                  <div className={styles.down}>s</div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 row center-xs">
              {
                links.map((link) => 
                  (<FlatButton label={link.title} className={styles.buttonNav} onTouchTap={() => (this.handleScrollTo(link.link)) } key={link.title} />)
                )
              }
            </div>
            <div className="col-xs-12 center-xs">
              <div className={styles.socials}>
                <IconButton 
                href={'https://www.facebook.com/PachucaStartupWeekend/'} 
                target="_blank"
                className={styles.social}>
                  <Facebook color="#fff"/>
                </IconButton>
              </div>
            </div>
            <div className="row col-xs-12 center-xs end-sm middle-xs">
              <div className={styles.messenger}>
                <MessengerPlugin appId="130192394386861" pageId="343339826125934" color="blue" size="xlarge" type="message-us"/>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
    return Inicio;
  }
}