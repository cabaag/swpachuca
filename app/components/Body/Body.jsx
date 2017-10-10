import React from 'react';
import styles from './_Body.scss';
import Footer from '../Footer/Footer';
import Inicio from '../Inicio/Inicio';
import SWP from '../SWP/SWP';
import Venue from '../Venue/Venue';
import Community from '../Community/Community';
import Mentores from '../Mentores/Mentores';
import Partners from '../Partners/Partners';
import Schedule from '../Schedule/Schedule';
import Tickets from '../Tickets/Tickets';

export default class Body extends React.Component {
  render() {
    let Body = (
      <div>
        <Inicio/>
        <SWP/>
        <Venue />
        <Community />
        <Partners />
        <Schedule />
        <Tickets />
      </div>
    );
    return Body;
  }
}