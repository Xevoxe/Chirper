import React, { Component } from 'react';
import TimelineView from '../Views/TimelineView';


class TimelineContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            timeline: this.props.timeline
        };
    }

    //Occurs when a new chirp has been created
    handleOnChange(chirp){
        this.state.timeline.unshift(chirp);
    }


    componentWillMount(){
         //Format Date  
        this.state.timeline.forEach((chirp)=> chirp.time = new Date(chirp.time));   
    }
        
    render(){
        return <TimelineView timeline = {this.state.timeline}/>;
    }
}

export default TimelineContainer;