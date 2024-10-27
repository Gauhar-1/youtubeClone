import axios from "axios";
import { selectorFamily } from "recoil";

export const API_KEY = 'AIzaSyAcmXkTyEyfTuwuKz3YR3yz1zSak6gzOCc';

export const fetchData = selectorFamily({
  key: "fetchData",  // Changed from `item` to `key` as `key` is the correct property name
  get: (category) => async () => {
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`
      );
      return res.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return { error: error.message }; // Return a basic error object
    }
  },
});
