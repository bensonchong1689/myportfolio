import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Experience extends Component {
    render() {
        return(
           <Grid>
               <Cell col={4}>
                   <p>{this.props.startDate} - {this.props.endDate}</p>
               </Cell>
               <Cell col={8}>
                   <h4 style={{marginTop: '8px'}}>{this.props.jobName}</h4>
                   <List className="job-list">
                        <ListItem>
                            <ListItemContent style={{fontSize: '15px', color: 'white' }}>
                                <i class="fas fa-laptop" aria-hidden="true"></i>
                                {this.props.jobDescription1}
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={{fontSize: '15px', color: 'white'}}>
                                <i class="fas fa-laptop" aria-hidden="true"></i>
                                {this.props.jobDescription2}
                            </ListItemContent>
                        </ListItem>
                    </List>
               </Cell>
           </Grid>
        )
    }
}

export default Experience;