import React from 'react';
import styles from './_Footer.scss';

import {
  IconButton
} from 'material-ui';
import Facebook from 'mui-icons/fontawesome/facebook';

import '../../assets/imgs/charly_b.png';

export default class Footer extends React.Component {
  render() {
    let Footer = (
      <footer>
        <div className="container-fluid col-xs-12">
          <div className="row around-xs">
            <div className="col-xs-10">
              <div className={styles.charly}>
                Made with &#x2764; by 
                <a href="http://www.cabaag.com" target="_blank">
                  <img src="../../assets/imgs/charly_b.png" alt="Charly Barranco"/>
                </a>
              </div>
            </div>
            <div className="col-xs-2 end-xs">
              <div className={styles.socials}>
                <IconButton 
                href={'https://www.facebook.com/'} 
                target="_blank"
                className={styles.social}>
                  <Facebook color="#fff"/>
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
    return Footer;
  }
}