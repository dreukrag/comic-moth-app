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

import {CreateCollectionsList} from './components/Collection'
import NewCollectionItem from './components/NewCollectionItem'
import CollectionItems from './components/CollectionItems'

import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

//CSS
const titleCss = {
    fontFamily:'cursive',
    margin: 'auto'
  }

const content = {
  height:'100vh',
  backgroundColor:'grey',
  paddingTop:'64px',
  paddingBotton:'56px'
}

const bottom = {
  position: 'fixed',
  bottom:'0px',
  left:'0px',
  width:'100%'
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
  constructor(props) {
    super(props);

    this.state = {
        collections:[{id:0, name:'none'}],
        collectionsItems:[{collectionId:0, name:'none'}]
    };
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
          <NewCollectionItem />
          {/*CreateCollectionsList(this.state.collections, this.state.collectionsItems)*/}
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
  componentDidMount = () =>{
    this.setState({
        collections:[
          {id:1, name:'Tex'},
          {id:2, name:'Tex Especial'},
          {id:3, name:'Tex Super Especial'},
        ],
        collectionsItems:[
          {collectionId:1, name:'1ª edição'},
          {collectionId:1, name:'2ª edição'},
          {collectionId:1, name:'3ª edição'},
          {collectionId:2, name:'Uivo do lobo'},
          {collectionId:2, name:'Fantasma do deserto'},
          {collectionId:3, name:'1º especial'},
          {collectionId:3, name:'2º especial'},
          {collectionId:3, name:'3º especial'},
          {collectionId:3, name:'4º especial'},
        ]
      
    })
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
