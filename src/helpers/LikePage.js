import React from "react";
import "../styles/Likes.css";

export default class LikePage extends React.Component {
    constructor() {
      super();
      this.state = {
        liked: false
      };
      this.handleClick = this.handleClick.bind(this);
    } 
    
    handleClick() {
      this.setState({
        liked: !this.state.liked
      });
    }
    
    render() {
      const text = this.state.liked ? '1' : '0';
      const label = this.state.liked ? 'Unlike' : 'Like'
      return (
         <>
            <div className="like">
            <button 
            className="likeBtn"
            onClick={this.handleClick}> ❤ </button>
            <span> {text} {label} </span>
            </div>
        </>
    );
   }
}