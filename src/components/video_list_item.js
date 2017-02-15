import React from 'react';

const VideoListItem = (props) => {
  return (
    <li>Video {props.video.snippet.title}</li>
  );
};

export default VideoListItem;