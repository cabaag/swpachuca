import styles from './_SWP.scss';
import React from 'react';

import Animation from '../Animation/Animation';

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
                    se reúnen en equipos alrededor de una idea para convertirla en realidad y crear una 
                    empresa.
                  </div>
                </div>
              </div>
              <div className="row">
                <h2 className="col-xs-12"> Perfiles clave </h2>
                <div className={'col-xs-6 col-sm-3 ' + styles.beakerPeople}>
                  <Animation src="../../assets/imgs/designer.png" 
                    frames={9} width={1116} height={250} id="designer" interval={500}/>
                  <span>Diseñador</span>
                </div>
                <div className={'col-xs-6 col-sm-3 ' + styles.beakerPeople}>
                <Animation src="../../assets/imgs/developer.png" 
                    frames={14} width={1736} height={250} id="developer" interval={320}/>
                  <span>Developer</span>
                </div>
                <div className={'col-xs-6 col-sm-3 ' + styles.beakerPeople}>
                  <Animation src="../../assets/imgs/business.png" 
                    frames={17} width={2108} height={250} id="business" interval={400}/>
                  <span>Business</span>
                </div>
                <div className={'col-xs-6 col-sm-3 ' + styles.beakerPeople}>
                  <Animation src="../../assets/imgs/expert.png" 
                    frames={16} width={1984} height={250} id="expert" interval={520}/>
                  <span>Experto</span>
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