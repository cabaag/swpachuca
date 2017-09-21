import React from 'react';
import styles from './_Organizer.scss'

import {
  IconButton
} from 'material-ui';
import Facebook from 'mui-icons/fontawesome/facebook';
import Twitter from 'mui-icons/fontawesome/twitter';


import '../../assets/imgs/beaker_silhoutte.png';
// Profile images
import '../../assets/organizers/charly.jpg';
import '../../assets/organizers/dianita.jpg';
import '../../assets/organizers/karli.jpg';
import '../../assets/organizers/kevin.jpg';
import '../../assets/organizers/pau.jpg';
import '../../assets/organizers/yakin.jpg';

export default class Organizer extends React.Component {
  constructor(props) {
    super(props);
    this.organizer = this.props.organizer;
  }

  render() {
    let Organizer = (
      <div className={styles.organizer} style={{height: this.props.height}}>
        <div className={styles.frontCard}>
          <img src={this.organizer.img} alt={this.organizer.name} />
        </div>
        <div className={styles.backCard}>
          <div className={styles.background}>
            <img src="../../assets/imgs/beaker_silhoutte.png"/>
          </div>
          <div className={styles.content}>
            <div className={styles.name}>{this.organizer.name}</div>
            <span className={styles.desc}>
              {this.organizer.description}
            </span>
            <div className={styles.socials}>
            {
              (this.organizer.facebook) ? (
                <IconButton 
                href={'https://www.facebook.com/' + this.organizer.facebook } 
                target="_blank"
                className={styles.social}>
                  <Facebook color="#3C5A98"/>
                </IconButton>
              ) : null
            }
            {
              (this.organizer.twitter) ? (
                <IconButton
                href={'https://twitter.com/' + this.organizer.twitter} 
                target="_blank"
                className={styles.social} >
                  <Twitter color="#28AAE1"/>
                </IconButton>
              ) : null
            }
            </div>
          </div>
        </div>
      </div>
    )
    return Organizer;
  }
}