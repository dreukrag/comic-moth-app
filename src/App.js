import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from "styled-components";

import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';

import Collapse from '@material-ui/core/Collapse';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import Icon from '@material-ui/core/Icon';
import AddCircle from '@material-ui/icons/AddCircle';
import MoveToInbox from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Share from '@material-ui/icons/Share';
import Search from '@material-ui/icons/Search';

import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

//CSS
const titleCss = {
    fontFamily:'cursive',
    margin: 'auto'
  }
const header = {
  height:'15vh',
  padding:'2px',
  backgroundColor:'black'
}

const content = {
  marginTop:'54px',
  height:'100vh',
  backgroundColor:'grey',
  paddingBotton:'56px'
}

const bottom = {
  position: 'fixed',
  bottom:'0px',
  left:'0px',
  width:'100%'
}

const testCss = {
  cssClass:{
    backgroundColor:'red',
    color:'blue'
  }
}


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

const BoldListItemText = withStyles({
  primary:{
    fontWeight:425
  }
})(ListItemText);
const SquareAvatar = withStyles({
  root:{
    borderRadius:'25%'
  }
})(Avatar);

const SmallTheme = createMuiTheme({
  overrides: {
    MuiList:{
      root:{
        paddingLeft:'6px'
      }
    },
    MuiListItem: {
      root: {
        height:'32px',
        paddingTop:'6px',
        paddingBottom:'6px'
      },
    },
    MuiTypography:{
      subheading:{
        fontSize:'0.95rem'
      }
    },
    MuiAvatar:{
      root:{
        height:'28px',
        width:'28px',
        borderRadius:'25%'
      }
    }
  },
});

class App extends Component {
  state = {
    open:false
  }
  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };
  render() {
    return (
      <div className="App">
        <AppBar >
          <Toolbar >
            <Typography style={titleCss} variant="title" color="inherit" noWrap> The Collector's Moth</Typography>
          </Toolbar>
        </AppBar>
        
        {/* content */}
        <div style = {content}>
        {/* Coleções */}
          <List style={{display:'inherit'}} className={ObjectToCss(testCss)}>

            <List>
              <ListItem button onClick={this.handleClick}>
                <ListItemAvatar><SquareAvatar>A</SquareAvatar></ListItemAvatar> 
                <BoldListItemText inset primary="Tex Sei lá o quê" />
                {this.state.open ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Divider/>
              <Collapse in={this.state.open} timeout="auto" unmountOnExit>
              <MuiThemeProvider theme={SmallTheme}>
                <List  disablePadding>
                  <ListItem>
                    <ListItemAvatar><Avatar>1</Avatar></ListItemAvatar>                
                    <ListItemText primary="1ª Edição" />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar><Avatar>2</Avatar></ListItemAvatar>                
                    <ListItemText primary="2ª Edição" />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar><Avatar>3</Avatar></ListItemAvatar>                
                    <ListItemText primary="3ª Edição" />
                  </ListItem>
                </List>
              </MuiThemeProvider>                
              </Collapse> 
            </List>
            <List subheader={<ListSubheader>B <Divider/></ListSubheader>}>
              <ListItem>
                <ListItemAvatar><Avatar>B</Avatar></ListItemAvatar>                
                <ListItemText primary="Ba" />
              </ListItem>
              <ListItem>
                <ListItemAvatar><Avatar>B</Avatar></ListItemAvatar>                
                <ListItemText primary="Ba" />
              </ListItem>
            </List>
          </List>
        </div>
        {/* Buttons */}
        <BottomNavigation style={bottom}>
          <BottomNavigationAction label="Novo" value="new" icon={<AddCircle color='white' />} />
          <BottomNavigationAction label="Pesquisar" value="search" icon={<Search color='white' />} />
          <BottomNavigationAction label="Compartilhar" value="share" icon={<Share color='white' />} />
        </BottomNavigation>
      </div>
    );
  }
}

const ObjectToCss = (cssobj) => {
  let cssString = '';
  for (const selector in cssobj) {
      cssString='.' + cssString + selector + ' :{';
      for (const property in cssobj[selector]){
          cssString += property +':' + cssobj[selector][property] +';';
      }
      cssString += '}';
  }
  return cssString
      .replace(/([a-z\d])([A-Z])/g, '$1' + '-' + '$2')
      .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + '-' + '$2')
      .toLowerCase();
}

export default App;
