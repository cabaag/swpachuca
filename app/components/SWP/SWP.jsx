import styles from './_SWP.scss';
import React from 'react';

import '../../assets/imgs/beaker_green.png';
import '../../assets/imgs/designer.png';
import '../../assets/imgs/developer.png';
import '../../assets/imgs/business.png';
import '../../assets/imgs/expert.png';

export default class SWP extends React.Component {
  render() {
    let SWP = (
      <section id="swp">
        <div className="container-fluid">
          <div className="row col-xs-12 center-xs middle-xs" style={{minHeight: 600}}>
            <div className="row center-xs">
              <div className="row">
                <div className="col-xs-12 col-sm-4">
                  <img src="../../assets/imgs/beaker_green.png" alt="SW" className={styles.beaker} />
                </div>
                <div className={'col-xs-12 col-sm ' + styles.title}>
                  <span>¿Qué es un </span>
                  <div><span className={styles.sw}>Startup Weekend Pachuca</span>?</div>
                </div>
              </div>
              <div className="row center-xs">
                <div className={'col-xs-12 col-sm-10 col-md-8 col-lg-6 ' + styles.descriptionWrapper}>
                  <div className={styles.wrapper}></div>
                  <div className={styles.description}>
                    <span className={styles.sw}>Startup Weekend </span>
                    es un evento intenso de 54 horas en el que emprendedores de varios perfiles 
                    (principalmente desarrolladores de software, diseñadores gráficos y gente de negocios) 
                    se reunen en equipos alrededor de una idea para convertirla en realidad y crear una 
                    empresa en internet.
                  </div>
                </div>
              </div>
              <div className="row">
                <h2 className="col-xs-12"> Perfiles clave </h2>
                <div className={'col-xs-6 col-sm-3 ' + styles.beakerPeople}>
                  <img src="../../assets/imgs/designer.png" alt="Designer" />
                  <span>Diseñador</span>
                </div>
                <div className={'col-xs-6 col-sm-3 ' + styles.beakerPeople}>
                  <img src="../../assets/imgs/developer.png" alt="Developer" />
                  <span>Developer</span>
                </div>
                <div className={'col-xs-6 col-sm-3 ' + styles.beakerPeople}>
                  <img src="../../assets/imgs/business.png" alt="Business" />
                  <span>Business</span>
                </div>
                <div className={'col-xs-6 col-sm-3 ' + styles.beakerPeople}>
                  <img src="../../assets/imgs/expert.png" alt="Expert" />
                  <span>Experto</span>
                </div>
              </div>
              <div className={"col-xs-12 center-xs " + styles.title} style={{textAlign: 'center', marginTop: 40}}>
                Techstars Global Startup Weekend
              </div>
              <div className="row center-xs">
                <div className={'col-xs-12 col-sm-10 col-md-8 col-lg-6 ' + styles.descriptionWrapper}>
                  <div className={styles.wrapper}></div>
                  <div className={styles.description}>
                    Este año es especial para la comunidad de <span className={styles.sw}> Startup Weekend </span>,
                    ya que contamos con el orgullo de ser parte de un evento a nivel global, el 
                    <span className={styles.sw}> Techstars Global Startup Weekend </span>, el cual se trata de 
                    varios Startup Wekeend realizados en la misma temporada al rededor del mundo, teniendo así
                    diferentes comunidades compitiendo al mismo tiempo.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
    return SWP;
  }
}