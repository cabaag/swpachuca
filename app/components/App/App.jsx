import React from 'react';
import { APP_TITLE } from '../../constants/AppConstants';
import mui from 'material-ui';
import { MuiThemeProvider } from 'material-ui';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import '../../favicon.png';

import stylesheet from './_App.scss';
import Header from '../Header/Header';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';

const muiTheme = getMuiTheme({
  palette: {
    textColor: '#2a3842',
    primary1Color: '#5F00ED'
  },
  flatButton: {
    textColor: '#ffffff'
  }
});

export default class App extends React.Component {

  constructor() {
    super();
    this.windowHeight = $(window).height() - 70;
    this.state = {
      headerVisible:  false
    }
    this.handleScroll = this.handleScroll.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
  }

  handleScroll(event) {
    let scrollTop = event.srcElement.body.scrollTop;
    let widthWindow = window.innerWidth;
    this.setState({
      headerVisible: scrollTop <= this.windowHeight ? true : false
    });
  }

  handleResize() {
    this.windowHeight = $(window).height() - 62;
  }

  render() {
    let app = (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          { 
            !this.state.headerVisible ? <Header/> : null
          }
          <Body />
          <Footer />
        </div>
      </MuiThemeProvider>
    );

    return app;
  }
}
