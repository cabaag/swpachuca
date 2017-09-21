import styles from './_Tickets.scss';
import React from 'react';

import '../../assets/imgs/sw-hero-home.png';

export default class Tickets extends React.Component {
  render() {
    let Tickets = (
      <div>
        <section id="tickets" className={styles.odd}>
          <div className="container-fluid">
            <div className='row center-xs middle-xs'>
              <div className="col-xs-12">
                <h1 className='col-xs-12'>
                  Boletos
                </h1>
                <h4>Adquiere tus boletos y participa en este grandioso evento.</h4>
              </div>
              <div className={'col-xs-12 ' + styles.soon}>
                PRÓXIMAMENTE
              </div>
            </div>
          </div>
        </section>
        <section className={styles.staff}>
          <div className={styles.background}>
            <img src="../../assets/imgs/sw-hero-home.png" />
          </div>
          <div className={'container-fluid ' + styles.container}>
            <div className="row center-xs middle-xs">
              <h1 className='col-xs-12'>
                Staff
              </h1>
              <div className={'col-xs-12 col-sm-10 col-md-8 col-lg-6 ' + styles.subtitle}>
                Únete al staff del evento y ayudanos a que sea
                una experiencia inolvidable. <br />
                Ponte en contacto con nosotros al correo&nbsp;
                <b className={styles.email}>
                  <a href="mailto:caba9313@gmail.com" target="_blank">caba9313@gmail.com</a>
                </b> &nbsp;para recibir más información y sé parte de la comunidad.
              </div>
            </div>
          </div>
        </section>
      </div>
    );
    return Tickets;
  }
}