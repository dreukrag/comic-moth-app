import React from 'react'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';

import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

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

export default class Collection extends React.Component{

    constructor(props) {
        super(props);
    
        this.state = {
            open:false
        };
      }

    handleClick = () => {
        this.setState(state => ({ open: !state.open }));
    };

    render = () => (
        <List>
            <ListItem button onClick={this.handleClick}>
                <ListItemAvatar><SquareAvatar>A</SquareAvatar></ListItemAvatar> 
                <BoldListItemText inset primary={this.props.CollectioName} />
                {this.state.open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Divider/>
            <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                {this.props.children}            
            </Collapse>
        </List>
    )
}

Collection.defaultProps = {
    CollectioName:'None'
}
