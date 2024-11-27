import React from 'react'

function VideoDisplay({singleVideo,i}) {
    let vidId = singleVideo.id.videoId;
    let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
    return (
      <div key={i} className="col-sm-12 col-md-4">
        <div className="singleVideoWrapper">
          <div className="videoThumbnail">
            <a href={vidLink} target="_blank" rel="noopener noreferrer">
              <img src={singleVideo.snippet.thumbnails.high.url} alt={singleVideo.snippet.title} />
            </a>
          </div>
          <div className="videoInfoWrapper">
            <div className="videoTitle">
              <a href={vidLink} target="_blank" rel="noopener noreferrer">
                {singleVideo.snippet.title}
              </a>
            </div>
            <div className="videoDesc">
              {singleVideo.snippet.description}
            </div>
          </div>
        </div>
      </div>
    );
  }

export default VideoDisplay;