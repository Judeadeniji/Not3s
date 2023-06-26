import { createData } from "brace-js";
import { Http, Core } from "utiliti-js";
const { Store, UrlParser } = Core;
const httpClient = new Http({
  retryAttempt: 3,
  retryDelay: 800,
});

/** @type DataContainer **/
const musicData = createData({
  searchResults: [],
  playlistItems: [],
  playlists: [],
});

const urlParser = new UrlParser('http://localhost:3000/v1');

function musicReducer(state, action) {
  (async () => {

    if (action.type === "SEARCH_VIDEOS") {
      const { searchQuery, max, category } = action.payload;
      const url = urlParser.buildUrl(null, null, "/v1/search", { q: searchQuery, max, category });
      try {
        const response = await httpClient.get(url);
        const searchResults = response.data;
        state.mutate({ searchResults });
      } catch (error) {
        // Handle any error that occurs during the request
      }
    } else if (action.type === "GET_PLAYLIST_ITEMS") {
      const { playlistId, max, category } = action.payload;
      const url = urlParser.buildUrl(null, null, "/v1/playlist-items", { playlistId, max, category });
      try {
        const response = await httpClient.get(url);
        const playlistItems = response.data;
        state.mutate({ playlistItems });
      } catch (error) {
        // Handle any error that occurs during the request
      }
    } else if (action.type === "GET_PLAYLISTS") {
      const { channelId, max, category, chart } = action.payload;
      const url = urlParser.buildUrl(null, null, "/v1/playlists", { channelId, max, category, chart });
      try {
        const response = await httpClient.get(url);
        const playlists = response.data;
        state.mutate({ playlists });
      } catch (error) {
        // Handle any error that occurs during the request
      }
    } else if (action.type === "GET_SUBSCRIPTIONS") {
      const { channelId, max } = action.payload;
      const url = urlParser.buildUrl(null, null, "/v1/subscriptions", { channelId, max });
      try {
        const response = await httpClient.get(url);
        const subscriptions = response.data;
        state.mutate({ subscriptions });
      } catch (error) {
        // Handle any error that occurs during the request
      }
    }
    // Add more if blocks for other API routes as needed
  })();

  return state;
}

export const musicStore = new Store(musicReducer, musicData);
