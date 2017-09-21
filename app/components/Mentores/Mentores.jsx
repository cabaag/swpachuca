import styles from './_Mentores.scss';
import React from 'react';

import mentors from './mentors';
import Organizer from '../Organizer/Organizer';

export default class Mentores extends React.Component {
  constructor() {
    super();
    this.state = {
      heightMentor: 200,
      widthCircle: 200
    }
    this.handleResize = this.handleResize.bind(this);
    mentors = this.shuffle(mentors);
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    this.resizeMentores();
    this.resizeHeader();
  }

  resizeMentores() {
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
      heightMentor: height
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
    this.resizeMentores();
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
    let mentoresRender = mentors.map((mentor, index) =>
      ( <Organizer key={index} organizer={mentor} height={this.state.heightMentor} /> )
    );
    let Mentores = (
      <div id="mentores">
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
            Mentores
          </div>
        </div>
        
        <div className={'center-xs ' + styles.mentores}>
          <div className={styles.mentoresWrapper}>
            { mentoresRender }
          </div>
        </div>

      </div>
    );
    return Mentores;
  }
}