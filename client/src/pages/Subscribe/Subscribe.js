import React from "react";
import TextField from "material-ui/TextField";
import Button from 'material-ui/Button';

class Subscribe extends React.Component {
    
    onSubmit = (e) => {
          // check if email is missing, return undefined    // if email exists, call subscribeToNewsletter() API method  
        };
        render() {    return (     <form onSubmit={this.onSubmit}>  <p>We will email you when a new tutorial is released:</p>  <TextField    type="email"    label="Your email"    style={styleTextField}    required />  <p/>  <Button variant="raised" color="primary" type="submit">  Subscribe  </Button></form>
            );  }
    
        }
    

export default Subscribe;