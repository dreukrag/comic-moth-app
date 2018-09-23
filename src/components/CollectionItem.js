import React from 'react'
import React from 'react'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';

import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

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
    }
});

export class CollectionItem extends React.Component{
    render = () =>{
        var CollectionItemList = [];
        this.props.Items.forEach(function(Item) {
            CollectionItemList.push(
                <ListItem>
                <ListItemAvatar><Avatar>{Item.Name[0]}</Avatar></ListItemAvatar>                
                <ListItemText primary={Item.Name} />
                </ListItem>
            )
            
        }, this);
        return (
            <MuiThemeProvider theme={SmallTheme}>
            <List  disablePadding>

            </List>
            </MuiThemeProvider>
        )
    }
}
CollectionItem.defaultProps = {
    Items:[{Name:'None'}]
}