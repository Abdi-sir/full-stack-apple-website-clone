import { useEffect, useState } from "react";

const API_KEY = "AIzaSyBinwVURRXIk7bdbCO9TbtSAevh_fEaOl8";
const CHANNEL_ID = "UCE_M8A5yxnLfW0KghEeajjw";
const MAX_RESULTS = 6;

function useFetchYouTubeVideo() {
  const [isLoading, setIsLoading] = useState(true);
  const [youTubeVideos, setYouTubeVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch videos");
        }

        const data = await response.json();
        setYouTubeVideos(data.items);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVideos();
  }, []);

  return { youTubeVideos, isLoading };
}

export default useFetchYouTubeVideo;
