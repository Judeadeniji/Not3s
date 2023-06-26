import { navigate } from "brace-js/router";
import "./css-js/player.css";
import StaminaCover from "../../assets/images/stamina.jpg"

const TrackDetails = () => (
  <div className="track-details">
    <div className="album-art" onClick={() => navigate("/music/Tiwa/Savage")}>
      <img src={StaminaCover} className="fa" />
    </div>
    <div className="metadata">
      <p className="track-title">Stamina</p>
      <p className="track-artist">Tiwa Savage</p>
    </div>
  </div>
);

const Controller = () => (
  <div className="controls">
    <div className="share">
      <i className="fa fa-share" />
    </div>
    <div className="play-pause">
      <i className="fa fa-pause" />
    </div>
  </div>
);

const AudioPlayer = () => {
  return (
    <div className="audio-player">
      <input type='range' className="progress">
      </input>
      <div className="inner-container">
        <TrackDetails />
        <Controller />
      </div>
    </div>
  );
};


export default AudioPlayer;
