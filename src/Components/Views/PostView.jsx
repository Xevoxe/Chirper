import React, { Component } from 'react';

class PostView extends Component {
    constructor(props){
        super(props);
        this.state = {
            btn_state: 'off',
            cursor: {cursor: "not-allowed"}
        }

        this.state.reset = this.state;
        
        this.handleHover = this.handleHover.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onPost = this.onPost.bind(this);
    }

    componentDidMount(){
        if(this.props.nameBox === "" || this.props.messageBox === ""){
            this.setState(this.state.reset);
        }
        else
        this.setState({
            cursor: {cursor: "pointer"}, 
            btn_state: 'on'
        });
    }

    handleHover(){
        //Check to see if the input fields are empty
        if(this.props.nameBox === "" || this.props.messageBox === ""){
            this.setState(this.state.reset);
        }
        else
        this.setState({
            cursor: {cursor: "pointer"}, 
            btn_state: 'on'
        });

    }

    //Executed when a new chirp is submitted.
    onPost(){
        // Only post if the button is active
        if(this.state.btn_state === 'on')
        {
           this.props.onPost();
           //Turn the button off
           this.setState(this.state.reset);
        }
    }

    
    onChange(e){
        this.props.onChange(e);
    }

    render(){
        return (
            <div>
            <div className="input-group">
                <textarea className="form-control border-primary" placeholder="What's going on?" value={this.props.messageBox} onChange={this.onChange}></textarea>
            </div>
            <div className="input-group">
                <input type="text" className="form-control border-primary" placeholder="Your name" value={this.props.nameBox} onChange={this.onChange}></input>
                <div className="input-group-append">
                    <button 
                        style = {this.state.cursor}
                        className="btn btn-primary" 
                        type="button" onClick={this.onPost} 
                        onMouseEnter={this.handleHover}
                        onMouseOverCapture = {this.handleHover}
                    >Chirp</button>
                </div>
            </div>
            </div>
        )
            
        
    }
}

export default PostView;