import styles from './_Venue.scss';
import React from 'react';
import { Card } from 'material-ui/Card';

function loadJS(src) {
  var ref = window.document.getElementsByTagName("script")[0];
  var script = window.document.createElement("script");
  script.src = src;
  script.async = true;
  ref.parentNode.insertBefore(script, ref);
}

export default class Venue extends React.Component {
  componentDidMount() {
    window.initMap = this.initMap;
    loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyARfS_boWMoOaNg5CqXQ7z6ZdlPf24sffQ&callback=initMap');
  }

  initMap() {
    let venue = {lat: 20.0655243, lng: -98.7851341};
    let map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: venue,
      disableDefaultUI: true,
      scrollwheel: false,
      styles: [
        {
          "featureType": "administrative",
          "elementType": "geometry",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "transit",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        }
      ]
    });
    var marker = new google.maps.Marker({
      position: venue,
      map: map
    });
  }

  render() {
    let Venue = (
      <section id="venue" className={styles.odd}>
        <div className="container-fluid">
          <div className="row">
            <div className={'col-xs-12 center-xs ' + styles.title}>
              Venue
            </div>
            <div className={'col-xs-12 col-sm-6 center-xs row ' + styles.desc}>
              <h2>Centro de Negocios Pachuca</h2>
              <div className="col-xs-12 col-sm-8 center-xs">
                Es la sede donde se realizará el SWPachuca, dentro del mismo
                hay espacio para que todos los participantes trabajen, convivan
                e incluso duerman y aprovechar al máximo la experiencia del
                evento.
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <Card  className={styles.map} containerStyle={{height: '100%'}}>
                <div id="map" style={{height: '100%'}}></div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    );
    return Venue;
  }
}