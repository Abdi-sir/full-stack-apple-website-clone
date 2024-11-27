import React, { useEffect, useState } from "react";
import useFetchYouTubeVideo from "./useFetchYouTubeVideo";
import VideoDisplay from "./VideoDisplay";
import Spinner from "../Spinner/Spinner";
import Empty from "../Empity/Empity";

// const API_KEY = "AIzaSyBinwVURRXIk7bdbCO9TbtSAevh_fEaOl8";
// const CHANNEL_ID = "UCE_M8A5yxnLfW0KghEeajjw";
// const MAX_RESULTS = 6;

const YoutubeVideos = () => {
  const { youTubeVideos, isLoading } = useFetchYouTubeVideo();
  // const [youTubeVideos, setYouTubeVideos] = useState([]);

  // useEffect(() => {
  //   const fetchVideos = async () => {
  //     const response = await fetch(
  //       `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}`
  //     );
  //     const data = await response.json();
  //     setYouTubeVideos(data.items);
  //   };
  //   fetchVideos();
  // }, []);

  return (
    <div className="allVideosWrapper">
      <div className="container">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <div className="col-12">
            <div className="title-wraper bold video-title-wrapper">
              Latest Videos
            </div>
          </div>
          {isLoading ? (
            <Spinner />
          ) : youTubeVideos.length === 0 ? (
            <Empty />
          ) : (
            youTubeVideos?.map((singleVideo, i) => (
              <VideoDisplay key={i} singleVideo={singleVideo} i={i} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default YoutubeVideos;
