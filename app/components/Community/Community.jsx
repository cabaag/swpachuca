import React from 'react';
import styles from './_Community.scss';

import organizers from './organizers';
import Organizer from '../Organizer/Organizer';

export default class Community extends React.Component {
  constructor() {
    super();
    this.state = {
      heightOrganizer: 200,
      widthCircle: 200
    }
    this.handleResize = this.handleResize.bind(this);
    organizers = this.shuffle(organizers);
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    this.resizeOrganizers();
    this.resizeHeader();
  }

  resizeOrganizers() {
    let width = $(document).width();
    let height = 0;
    if (width <= 600) {
      height = width / 2;
    } else if (width > 600 && width <= 1248) {
      height = width / 3;
    } else {
      height = width / 5;
    }
    this.setState({
      heightOrganizer: height
    });
  }

  resizeHeader() {
    let width = $(document).width();
    let widthBox = 0;
    widthBox = width / 8;
    this.setState({
      widthCircle: widthBox
    });
  }

  handleResize() {
    this.resizeOrganizers();
    this.resizeHeader();
  }

  shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  render() {
    let organizersRender = organizers.map((organizer, index) =>
      ( <Organizer key={index} organizer={organizer} height={this.state.heightOrganizer} /> )
    );
    let Community = (
      <div id="community">
        <div className={styles.community}>
          <div className={styles.boxes}>
            <div className={styles.box + ' ' + styles.box1} style={{backgroundPositionX: this.state.widthCircle*0}}></div>
            <div className={styles.box + ' ' + styles.box2} style={{backgroundPositionX: this.state.widthCircle*1}}></div>
            <div className={styles.box + ' ' + styles.box3} style={{backgroundPositionX: this.state.widthCircle*2}}></div>
            <div className={styles.box + ' ' + styles.box4} style={{backgroundPositionX: this.state.widthCircle*3}}></div>
            <div className={styles.box + ' ' + styles.box5} style={{backgroundPositionX: this.state.widthCircle*4}}></div>
            <div className={styles.box + ' ' + styles.box6} style={{backgroundPositionX: this.state.widthCircle*5}}></div>
            <div className={styles.box + ' ' + styles.box7} style={{backgroundPositionX: this.state.widthCircle*6}}></div>
            <div className={styles.box + ' ' + styles.box8} style={{backgroundPositionX: this.state.widthCircle*7}}></div>
          </div>
          <div className={styles.title}>
            Comunidad
          </div>
        </div>
        <div className={'center-xs ' + styles.organizers}>
          <div className={styles.organizersWrapper}>
            { organizersRender }
          </div>
        </div>
        
      </div>
    );
    return Community;
  }
}