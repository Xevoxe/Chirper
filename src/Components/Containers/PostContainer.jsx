import React, { Component } from 'react';
import PostView from '../Views/PostView';

class PostContainer extends Component{
    constructor(props){
        super(props);

        this.state = {
            message: "",        //Message of a new chirp post
            name: "",           //Name of a new chirp post
            cursor: {}          //Holds the Cursor style
        }

        //Reset state
        this.state.reset = this.state;

        //bind callback functions
        this.handlePost = this.handlePost.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handlePost(){
        let time = new Date();
        let chirp = {
            chirper: this.state.name,
            message: this.state.message,
            time: new Date(time)
        }

         //Reset State
         this.setState(this.state.reset);

         this.props.handlePost(chirp);
        
    }

    handleChange(e){
        //Determine input element
        if(e.target.type === "textarea"){
            this.setState({
                message: e.target.value
            });
        }
        else{
            this.setState({
                name: e.target.value
            });
        }
    }


    render() {
        return <PostView 
            onChange={this.handleChange} 
            onPost={this.handlePost}
            messageBox = {this.state.message}
            nameBox = {this.state.name}
            ></PostView>
    }


}

export default PostContainer