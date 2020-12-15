import React, { Component } from 'react';
import { Cell, Grid } from 'react-mdl';

class Cover extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
              <Grid className="cover-grid">
                  <Cell col={12}>
                  <img 
                  src="https://i.ibb.co/qRnpvy4/circle-cropped-2.png"
                  alt="cover"
                  className="cover-img"
                  />
                  <div className="cover-title">
                      <h1>Tax Consultant @ PwC HK</h1>
                      <p>
                       <div className="skill-list">
                        <h1>
                          <i className="fab fa-html5" aria-hidden="true" />  
                          <i className="fab fa-css3-alt" aria-hidden="true" />  
                          <i className="fab fa-js-square" aria-hidden="true" />  
                          <i className="fab fa-react" aria-hidden="true" />   
                          <i className="fab fa-node" aria-hidden="true" />   
                          <i className="fab fa-bootstrap" aria-hidden="true" /> 
                          <i className="fab fa-sass" aria-hidden="true" />
                        </h1>
                       </div>
                      </p>
                      <div className="contact-icon">

                          {/* LinkedIn */}
                          <a href="https://www.linkedin.com/in/bensonchong1689/" rel="noopener noreferrer" target="_blank">
                              <i className="fab fa-linkedin" aria-hidden="true" />
                          </a>

                          {/* GitHub */}
                          <a href="https://github.com/bensonchong1689" rel="noopener noreferrer" target="_blank">
                              <i className="fab fa-github-square" aria-hidden="true" />
                          </a>

                          {/* Freecodecamp */}
                          <a href="https://www.linkedin.com/in/bensonchong1689/" rel="noopener noreferrer" target="_blank">
                              <i className="fab fa-free-code-camp" aria-hidden="true" />
                          </a>
                      </div>    
                  </div>

                  </Cell>
              </Grid>

            </div>
        )
    }
}



export default Cover;
