import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Courses extends Component {
    render() {
        return(
           <Grid>
               <Cell col={4}>
                   <p>{this.props.courseProvider}</p>
               </Cell>
               <Cell col={8}>
                   <h4 style={{marginTop: '8px'}}>{this.props.courseName}</h4>
                    <List className="course-list">
                        <ListItem>
                            <ListItemContent style={{fontSize: '15px', color: 'white' }}>
                                <i class="fas fa-laptop-code" aria-hidden="true"></i>
                                {this.props.courseDescription1}
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={{fontSize: '15px', color: 'white'}}>
                                <i class="fas fa-laptop-code" aria-hidden="true"></i>
                                {this.props.courseDescription2}
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={{fontSize: '15px', color: 'white'}}>
                                <i class="fas fa-laptop-code" aria-hidden="true"></i>
                                {this.props.courseDescription3}
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={{fontSize: '15px', color: 'white'}}>
                                <i class="fas fa-laptop-code" aria-hidden="true"></i>
                                {this.props.courseDescription4}
                            </ListItemContent>
                        </ListItem>
                    </List>
               </Cell>
           </Grid>
        )
    }
}

export default Courses;