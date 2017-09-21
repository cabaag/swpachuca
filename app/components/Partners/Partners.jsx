import styles from './_Partners.scss';
import React from 'react';


import '../../assets/partners/coca-cola.png';
import '../../assets/partners/dotCO.png';
import '../../assets/partners/eventbrite.png';
import '../../assets/partners/google.png';

const globalPartners = [{
  img: '../../assets/partners/coca-cola.png',
  name: "Coca-Cola"
}, {
  img: '../../assets/partners/dotCO.png',
  name: ".CO"
}, {
  img: '../../assets/partners/eventbrite.png',
  name: "Eventbrite"
}, {
  img: '../../assets/partners/google.png',
  name: "Google"
}];

// Platinum
import '../../assets/partners/platinum/gruvel.png';
import '../../assets/partners/platinum/stickergiant.svg';

const platinumPartners = [{
  img: '../../assets/partners/platinum/gruvel.png',
  name: "Gruvel"
}, {
  img: '../../assets/partners/platinum/stickergiant.svg',
  name: "Sticker Giant"
}]

// Gold
const goldPartners = [];

// Platinum
const silverPartners = [];

export default class Partners extends React.Component {
  renderPartners(partners) {
    return <div className={'row col-xs-12 col-sm-10 ' + styles.partners}>
    {
      partners.map(partner => (
        <div className={'col-xs-6 col-sm-4 col-md-3 ' + styles.partner} key={partner.name}>
          <img src={partner.img} alt={partner.name} />
        </div>
      ))
    }
    </div>
  }

  render() {
    let Partners = (
      <section id="partners" className={styles.partnersWrapper + ' container-fluid'}>
        <div className="row center-xs">
          <div className="col-xs-12">
            <div className={styles.title}> Patrocinadores </div>
          </div>
          <div className="col-xs-12">
            <h2>Globales</h2>
          </div>
          { this.renderPartners(globalPartners) }
          <div className="col-xs-12">
            <h2>Platinum</h2>
          </div>
          {
            platinumPartners.length > 0 
              ? this.renderPartners(platinumPartners) 
              : <h4 className="col-xs-12"> Sé un patrocinador PLATINUM </h4>
          }
          <div className="col-xs-12">
            <h2>Gold</h2>
          </div>
          {
            goldPartners.length > 0 
              ? this.renderPartners(goldPartners) 
              : <h4 className="col-xs-12"> Sé un patrocinador GOLD </h4>
          }
          <div className="col-xs-12">
            <h2>Silver</h2>
          </div>
          { 
            silverPartners.length > 0 
              ? this.renderPartners(silverPartners) 
              : <h4 className="col-xs-12"> Sé un patrocinador SILVER </h4>
          }
          <div className={'col-xs-12 col-sm-10 ' + styles.footNote}> 
            Si deseas ser patrocinador del SWPachuca, por favor 
            comunicate al siguiente correo:&nbsp;
            <b className={styles.email}>
              <a href="mailto:kevindeclemente93@gmail.com" target="_blank">kevindeclemente93@gmail.com</a>
            </b>
          </div>
        </div>
      </section>
    );
    return Partners;
  }
}