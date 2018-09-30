import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';

import AddPhotoAlternate from '@material-ui/icons/AddPhotoAlternate';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const container = {
    display: 'flex',
    flexWrap: 'wrap',
  }
const imageCard = {
    justifyContent:'center',
    alignItems:'center',
    display:'flex',
    height:'100px', 
    width:'100px', 
    borderRadius:'10px',
    border:'4px solid whitesmoke',
    backgroundColor:'whitesmoke',
}
const inputButton = {
    display:'none',
}
  const Theme = createMuiTheme({
    overrides: {
        MuiInputLabel:{
            root:{
                marginLeft:'16px',
                marginRight:'16px'
            }
        },
      MuiInput:{
        root:{
          marginLeft:'16px',
          marginRight:'16px',
        },
        input:{
            value:'',
        }
      }
    }
  });
export default class NewCollectionItem extends React.Component {
    
    constructor(props) {
        super(props);
    
        this.state = {
            cover:'',
            coverUrl:'',
            title:'',
            issue:'',
            publisher:'',
            barcode:'',
            collection:''
        };
    }
    
    render = () => (
        <MuiThemeProvider theme={Theme}>
        
        <FormControl fullWidth={false} style={container}>
            <section style={{display:'inline-flex', justifyContent:'space-around'}}>
                <input style={inputButton} id='cover' onChange={(e) => this.imageHandler(e)} type='file' />
                <label style={null} for='cover'>
                    <CardMedia
                    style={imageCard} src={this.state.coverUrl} image={this.state.coverUrl}
                    > 
                    {this.state.cover ? null : <AddPhotoAlternate />}
                     
                    </CardMedia>
                </label>
                
            </section>
                
            <TextField
                id="title"
                label="Title"
                value={this.state.title}
                onChange={this.handleChange('title')}
                margin="normal"
            />
            <TextField
                id="issue"
                label="Issue"
                value={this.state.issue}
                onChange={this.handleChange('issue')}
                margin="normal"
            />
            <TextField
                id="publisher"
                label="Publisher"
                value={this.state.publisher}
                onChange={this.handleChange('publisher')}
                margin="normal"
            />
            <TextField
                id="barcode"
                label="Barcode"
                value={this.state.barcode}
                onChange={this.handleChange('barcode')}
                margin="normal"
            />
            <TextField
                id="collection"
                label="Collection"
                value={this.state.collection}
                onChange={this.handleChange('collection')}
                margin="normal"
            />
        </FormControl>
        </MuiThemeProvider>
    )

    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
      };

    imageHandler = event => {
        event.preventDefault();
        let reader = new FileReader();
        let image = event.target.files[0];

        reader.onloadend = () => {
            this.setState({
            cover: image,
            coverUrl: reader.result
            });
        }

        reader.readAsDataURL(image)
      }
     
      
    

}