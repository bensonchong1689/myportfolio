import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return(
          <div className="contact">
              <Grid className="contact-grid">
                  <Cell col={6}>
                      <h2>My Contact</h2>
                      <div className="contact-list">
                      <List>
                          <ListItem>
                              <ListItemContent style={{ fontSize:'20px', fontFamily: 'Anton', color: 'white' }}>
                                <i className="fab fa-whatsapp" aria-hidden="true" />    
                                  (852) 6106 8981
                              </ListItemContent>
                          </ListItem>
                          <ListItem>
                             <ListItemContent style={{ fontSize:'20px', fontFamily: 'Anton', color: 'white' }}>
                               <i className="far fa-envelope" aria-hidden="true" />    
                                  bensonchong1689@gmail.com
                             </ListItemContent>
                          </ListItem>
                          <ListItem>
                             <ListItemContent style={{ fontSize:'18px', fontFamily: 'Anton', color: 'white' }}>
                                <i className="fab fa-linkedin-in" aria-hidden="true" />    
                                  linkedin.com/in/bensonchong1689
                             </ListItemContent>
                          </ListItem>
                          <ListItem>
                             <ListItemContent style={{ fontSize:'18px', fontFamily: 'Anton', color: 'white' }}>
                                <i className="fab fa-github" aria-hidden="true" />    
                                  github.com/bensonchong1689
                             </ListItemContent>
                          </ListItem>
                      </List>
                      </div>
                  </Cell>
                  <Cell col={6}>
                      <h2>Benson Chong</h2>
                      <img src="https://i.ibb.co/18W9Y8b/circle-cropped.png" 
                      style={{height: '250px'}}
                      />                      
                  </Cell>
              </Grid>
          </div>  
        )
    }
}

export default Contact;
