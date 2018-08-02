import React from 'react';

const ChirpView = (props) => {
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: "numeric", minute: "numeric"};
    return(
        <div className="card border-0">
                <div className="card-body">
                    <h5 className="card-title">{props.chirp.chirper}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{props.chirp.time.toLocaleDateString("en-US", options)}</h6>    
                    <p className="card-text">{props.chirp.message}</p>
                </div>
            </div>
    )
}
export default ChirpView;

