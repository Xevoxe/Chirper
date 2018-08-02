import React from 'react';
import ChirpView from './ChirpView';

//Handles Render logic for the timeline.
const TimelineView = (props) => {
    return (
             <div className="mt-3">
                <ul className="list-group">
                    {props.timeline.map((chirp,index)=> {
                        return <li className="list-group-item rounded border-primary" key={index}><ChirpView chirp={chirp}></ChirpView></li>
                    })}
                </ul>
            </div>
)}
export default TimelineView;