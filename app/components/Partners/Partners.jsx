import styles from './_Partners.scss';
import React from 'react';


import '../../assets/partners/coca-cola.png';
import '../../assets/partners/dotCO.png';
import '../../assets/partners/eventbrite.png';
import '../../assets/partners/google.png';

const globalPartners = [{
  img: '../../assets/partners/coca-cola.png',
  name: 'Coca-Cola',
  url: 'http://www.coca-cola.com.mx'
}, {
  img: '../../assets/partners/dotCO.png',
  name: '.CO',
  url: 'http://www.go.co/'
}, {
  img: '../../assets/partners/eventbrite.png',
  name: 'Eventbrite',
  url: 'http://www.eventbrite.es'
}, {
  img: '../../assets/partners/google.png',
  name: 'Google',
  url: 'https://www.googleforentrepreneurs.com/'
}];

// Platinum
import '../../assets/partners/platinum/gruvel.svg';
import '../../assets/partners/platinum/stickergiant.svg';
import '../../assets/partners/platinum/tapai.png';
import '../../assets/partners/platinum/yunop.png';

const platinumPartners = [{
  img: '../../assets/partners/platinum/gruvel.svg',
  name: 'Gruvel',
  url: 'https://www.gruvel.mx'
}, {
  img: '../../assets/partners/platinum/stickergiant.svg',
  name: 'Sticker Giant',
  url: 'https://www.stickergiant.com/'
}, {
  img: '../../assets/partners/platinum/tapai.png',
  name: 'Tapai',
  url: 'http://tapai.com.mx/'
}, {
  img: '../../assets/partners/platinum/yunop.png',
  name: 'Yunop',
  url: 'http://yunop.com.mx/'
}]

// Gold
const goldPartners = [];

// Platinum
const silverPartners = [];

export default class Partners extends React.Component {
  renderPartners(partners) {
    return <div className={'row col-xs-12 col-sm-10 col-lg-8 ' + styles.partners}>
    {
      partners.map(partner => (
        <a className={'col-xs-6 col-sm-4 col-md-3 ' + styles.partner} key={partner.name} href={partner.url} target='_blank'>
          <img src={partner.img} alt={partner.name} />
        </a>
      ))
    }
    </div>
  }

  render() {
    let Partners = (
      <section id='partners' className={styles.partnersWrapper + ' container-fluid'}>
        <div className='row center-xs middle-xs'>
          <div className='col-xs-12'>
            <div className={styles.title}> Patrocinadores </div>
          </div>
          { this.renderPartners(globalPartners) }
          {
            platinumPartners.length > 0  ? this.renderPartners(platinumPartners)  : null
          }
          {
            goldPartners.length > 0  ? this.renderPartners(goldPartners)  : null
          }
          { 
            silverPartners.length > 0  ? this.renderPartners(silverPartners)  : null
          }
          <div className={'col-xs-12 col-sm-10 col-lg-8 ' + styles.footNote}> 
            Si deseas ser patrocinador del SWPachuca, por favor 
            comunicate al siguiente correo:&nbsp;
            <b className={styles.email}>
              <a href='mailto:pachucasw@gmail.com' target='_blank'>pachucasw@gmail.com</a>
            </b>
          </div>
        </div>
      </section>
    );
    return Partners;
  }
}