import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import Courses from './courses';

class Resume extends Component {
    render() {
        return(
            <div>
              <Grid>
                 <Cell col={4}>
                     <div style={{textAlign: 'center' }}>
                         <img
                         src="https://i.ibb.co/pzXwrKT/circle-cropped-1.png"
                         alt="avatar"
                         style={{height: '200px'}}
                         />
                     </div>
                     <h2 style={{paddingTop: '1em'}}>Benson Chong</h2>
                     <h4 style={{color: 'grey'}}>Tax Consultant</h4>
                     <hr style={{borderTop: '3px solid #6f0000', width: '50%'}}></hr>
                     <p>ABC</p>
                     <hr style={{borderTop: '3px solid #6f0000', width: '50%'}}></hr>
                     <h5>Adddress</h5>
                     <p>1 Choi Shing Lane, Kowloon Bay, Kowloon, Hong Kong</p>
                     <h5>Phone Number</h5>
                     <p>(852) 6106 8981</p>
                     <h5>Email Address</h5>
                     <p>bensonchong1689@gmail.com</p>
                     <hr style={{borderTop: '3px solid #6f0000', width: '50%'}}></hr>
                 </Cell>
                 <Cell className="resume-right" col={8}>
                     <h2>Skills</h2> 
                     <Skills 
                     skill="JavaScript"
                     prg={100}
                     />
                     <Skills 
                     skill="React.js"
                     prg={100}
                     />
                     <Skills 
                     skill="Redux"
                     prg={100}
                     />
                     <Skills 
                     skill="React Hooks"
                     prg={100}
                     />
                    <Skills 
                     skill="Node.js"
                     prg={80}
                     />
                    <Skills 
                     skill="React Native"
                     prg={50}
                     />
                     <Skills 
                     skill="PostgreSQL"
                     prg={50}
                     />
                     <Skills 
                     skill="MongoDB"
                     prg={50}
                     />
                     <Skills 
                     skill="Bootstrap"
                     prg={40}
                     />
                     <Skills 
                     skill="Sass"
                     prg={40}
                     />

                     <hr style={{borderTop: '3px solid white'}} />
                     <h2>Courses</h2>
                     
                     <Courses 
                      courseProvider="Devslopes by Mark Wahlbeck"
                      courseName="Beginner Full Stack Web Development: HTML, CSS, React & Node"
                      courseDescription1="Build websites with HTML & CSS"
                      courseDescription2="Work with NoSQL databases like MongoDB"
                      courseDescription3="Build mobile-friendly websites with Bootstrap 4 & CSS"
                      courseDescription4="Build backend servers & APIs with Node and Express"
                     />

                     <Courses 
                      courseProvider="Academind by Maximilian Schwarzmuller"
                      courseName= "React - The Complete Guide (incl Hooks, React Router, Redux)"
                      courseDescription1= "Build user-friendly and reactive web apps"
                      courseDescription2="Provide user experiences through React"
                      courseDescription3="Learn React Hooks & Class-based Components"
                     />

                     <Courses 
                      courseProvider="Academind by Maximilian Schwarzmuller"
                      courseName="React Native - The Practical Guide [2020 Edition]"
                      courseDescription1="Build native mobile apps with JavaScript and React"
                      courseDescription2="Develop cross-platform (iOS and Android) mobile apps without knowing Swift, ObjectiveC or Java/ Android"
                     />

                     <hr style={{borderTop: '3px solid white'}} />

                     <h2>Education</h2>
                     <Education 
                     startDate={2016}
                     endDate={2019}
                     schoolName="Macquarie University"
                     schoolDescription="Bachelor of Commerce - Professional Accounting"
                      />
                     <Education 
                     startDate={2015}
                     endDate={2015}
                     schoolName="Trinity College"
                     schoolDescription="Post Secondary Foundation Studies"
                      />
                     <Education 
                     startDate={2008}
                     endDate={2014}
                     schoolName="Salesian English School"
                     schoolDescription="Secondary Studies"
                      />

                     <hr style={{borderTop: '3px solid white'}} />

                     <h2>Experience</h2>
                     <Experience 
                     startDate="Feb 2019"
                     endDate="Present"
                     jobName="Tax Consultant - PricewaterhouseCoopers Hong Kong"
                     jobDescription1="Performed tax restructuring, tax due diligence on Merge and Acquisition (“M&A”) and Initial Public Offering (“IPO”) projects;"
                     jobDescription2="Assisted in tax consulting projects on foreign enterprises entering Asian Market, including catering, entertainment, manufacturing and energy." 
                      />
                     <Experience 
                     startDate="Dec 2017"
                     endDate="Feb 2018"
                     jobName="Tax Internship - PricewaterhouseCoopers Hong Kong"
                     jobDescription1="Assisted in performing tax filing and provision review;"
                     jobDescription2="Assisted in international tax research."
                      />
                 </Cell>    
              </Grid>            
            </div>


        )
    }
}

export default Resume;
