const BASE_URl = "https://api.tvmaze.com";

const apiGet = async (queryString) => {
  
    const response = await fetch(`${BASE_URl}${queryString}`);
    const body = await response.json();
    return body;
};

export const searchForShows = (query) => apiGet(`/search/shows?q=${query}`);
export const searchForPeople = (query) => apiGet(`/search/people?q=${query}`);

export const getShowById = showID => apiGet(`/shows/${showID}?embed[]=seasons&embed[]=cast`);

export const getShowsByIds = async showIds => {
    const promises = showIds.map(showId => apiGet(`/shows/${showId}`));

   return Promise.all(promises);
}