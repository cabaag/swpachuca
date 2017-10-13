import React from 'react';
import MediaQuery from 'react-responsive';
import {
  AppBar,
  FlatButton,
  IconMenu,
  MenuItem,
  IconButton,
  Paper,
  Drawer
} from 'material-ui';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import styles from './_Header.scss';

import '../../assets/imgs/sw_techstars.png';
import '../../assets/imgs/sw_nav.png';

const inlineStyles = {
  header: {
    opacity: 0,
  }
};

const links = [{
    title: 'Inicio',
    link: '#home'
  },
  {
    title: 'SWP',
    link: '#swp'
  },
  {
    title: 'Venue',
    link: '#venue'
  },
  {
    title: 'Comunidad',
    link: '#community'
  },
  {
    title: 'Patrocinadores',
    link: '#partners'
  },
  {
    title: 'Participar',
    link: '#tickets'
  },
]

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      hidden: true,
      open: false
    }
    this.handleToggle = this.handleToggle.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.handleScrollTo = this.handleScrollTo.bind(this);
  }

  componentDidMount() {
    setTimeout(_ => {
      inlineStyles.header = {
        opacity: 1,
      };
    }, 10);
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    inlineStyles.header = {
      opacity: 0,
    };
    window.removeEventListener("resize", this.handleResize);
  }


  handleScrollTo(hash) {
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800);
    this.setState({
      open: false
    })
  }

  handleToggle() {
    this.setState({
      open: !this.state.open
    });
  }

  handleResize() {
    let windowWidth = window.innerWidth;
    this.setState({
      showMenu: windowWidth < 1024 ? true : false
    });
  }

  render() {
    let name = (<h4> SWPachuca </h4>)
    let Header = (
      <header style={inlineStyles.header} className="row">
        <Paper zDepth={2} className={'col-xs-12 middle-xs ' + styles.nav}>
          <nav className={'row middle-xs col-xs-12 ' + styles.nav}>
            <div className="row start-xs between-md middle-xs col-xs-12">
              {
                this.state.showMenu ? <IconButton iconClassName="material-icons" iconStyle={styles.iconMenu} 
                  onTouchTap={this.handleToggle}> menu </IconButton> : null
              }
              <div className={styles.logo}>
                <img src="../../assets/imgs/sw_nav.png" alt="SWPachuca"/>
              </div>
              {
                !this.state.showMenu ? (
                  <div className="row middle-xs">
                  {
                    links.map((link) => 
                    (<FlatButton label={link.title} className={styles.buttonNav} onTouchTap={() => (this.handleScrollTo(link.link)) } key={link.title} />)
                    )
                  }
                  </div>
                ) : null 
              }
            </div>
          </nav>
        </Paper>
        <Drawer
          docked={false}
          open={this.state.open}
          containerClassName={styles.sidenav}
          onRequestChange={(open) => this.setState({open})}>
          <div>
            <div className={styles.header}>
              <img src="../../assets/imgs/sw_techstars.png" alt="Techstars"/>
            </div>
            {
              links.map((link) => 
                ( <MenuItem onTouchTap={()=> this.handleScrollTo(link.link)} key={link.title} style={{color:'white'}}> {link.title} </MenuItem> )
              )
            }
          </div>
        </Drawer>
      </header>
    );
    return Header;
  }

}