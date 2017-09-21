import React from 'react';
import styles from './_Inicio.scss';
import {
  FlatButton
} from 'material-ui';

import '../../assets/imgs/tgsw.png';
import '../../assets/imgs/TGSW_2017.png';

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
]

export default class Inicio extends React.Component {
  handleScrollTo(hash) {
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800);
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
            <div className="col-xs-12 col-sm-10 col-md-8 col-lg-6">
              <img src="../../assets/imgs/tgsw.png" alt="SWPachuca"/>
            </div>
            <div className="col-xs-12 row center-xs">
              {
                links.map((link) => 
                  (<FlatButton label={link.title} className={styles.buttonNav} onTouchTap={() => (this.handleScrollTo(link.link)) } key={link.title} />)
                )
              }
            </div>
            <div className="row col-xs-12 end-xs">
              <div>
                <img className={styles.tgsw} src="../../assets/imgs/TGSW_2017.png" alt="Techstars Global Startup Weekend 2017" />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
    return Inicio;
  }
}