import React from "react";
import Track from "../Track/Track";
import "./TrackList.css";

class TrackList extends React.Component {
    renderMap(){
        if (this.props.tracks){
           
         return  this.props.tracks.map(track => {return <Track track={track}  key={track.id} onAdd={this.props.onAdd}/> });
           
        } 
       }
       
       render() {
       
           return (
               
               <div className="TrackList">
               {this.renderMap()}
               </div>
           
           )
               
       }
}

export default TrackList;



{/*class TrackList extends React.Component {
  render() {
    if (this.props.tracks) {
      var myList = this.props.tracks.map((track) => {
        return <Track track={track} key={track.id} />;
      });
    }

    return <div className="Tracklist">{myList}</div>;
  }
} */}

{/*
class TrackList extends React.Component {
  render() {
    return (
      <div className="Tracklist">
        {this.props.tracks.map(track => {
          return <Track track={track} key={track.id} />;
        })}
      </div>
    );
  }
}
 */}