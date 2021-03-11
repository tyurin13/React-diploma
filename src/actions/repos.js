import axios from 'axios';
import { setFetchError, setIsFetching, setRepos } from './actions';

const getRepos = (searchQuery = 'stars:%3E1', currentPage, perPage) => {

  return async (dispatch) => {

    try {
      if (searchQuery === '') {searchQuery = 'stars:%3E1'}
      dispatch(setIsFetching(true))
  
      const response = await axios.get(`https://api.github.com/search/repositories?q=${searchQuery}&sort=stars&per_page=${perPage}&page=${currentPage}`)
      dispatch(setRepos(response.data))
    } catch (error) {
      dispatch(setFetchError(true));
      dispatch(setIsFetching(false));
      setTimeout(() => {
        dispatch(setFetchError(false))
      }, 3000)
    }

  }
}

export const getCurrentRepo = async (username, repoName, setRepo) => {

  const response = await axios.get(`https://api.github.com/repos/${username}/${repoName}`);
  setRepo(response.data)
}

export const getContributors = async (username, repoName, setContributor) => {

  const response = await axios.get(`https://api.github.com/repos/${username}/${repoName}/contributors?page=1&per_page=10`);
  setContributor(response.data)
}

export default getRepos