import styles from './_Schedule.scss';
import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';

import days from './days';

export default class Schedule extends React.Component {
  constructor() {
    super();
    this.state = {
      expandedDay: 1,
    };
  }
  
  handleExpandChange = (index) => {
    if (index === this.state.expandedDay) {
      this.setState({expandedDay: 0});
    } else {
      this.setState({expandedDay: index});
    }
  };

  render() {
    let scheduleRender = days.map((day, indexDay) =>
      (<div key={indexDay}>
        <Card 
          expanded={(indexDay+1) === this.state.expandedDay} 
          onExpandChange={() => {this.handleExpandChange(indexDay+1)}}
          className={styles.dayWrapper}>
          <CardHeader
            title={day.title}
            titleColor="currentColor"
            actAsExpander={true}
            showExpandableButton={true}
            style={{textAlign: 'start', fontWeight: 'bold'}}
            className={(indexDay+1) === this.state.expandedDay ? styles.dayTitleActive : styles.dayTitle}
          />
          <CardText expandable={true} style={{color: 'currentColor'}}>
            <div className="row">
            {
              day.activities.map((activity, index) => (
                <div key={index} className={'row col-xs-12 ' + styles.activity}>
                  <div className="col-xs-5">
                    <div className="row">
                      <div className={'col-xs-12 col-sm-4 start-xs '+ styles.time}>{activity.hour}</div>
                      <div className="col-xs-12 col-sm-8 start-xs">{activity.title}</div>
                    </div>
                  </div>
                  <div className="col-xs-7 start-xs">{activity.description}</div>
                </div>
              ))
            }
            </div>
          </CardText>
        </Card>
      </div>)
    )

    let Schedule = (
      <section id="schedule" className={styles.schedule}>
        <div className="container-fluid">
          <div className='row center-xs middle-xs'>
            <h1 className={'col-xs-12' + styles.title}>
              Calendario
            </h1>
          </div>
          <div className='row center-xs middle-xs'>
            <div className='col-xs-12 col-sm-10 col-md-8 schedule-wrapper'>
              {scheduleRender}
            </div>
          </div>
        </div>
      </section>
    );
    return Schedule;
  }
}