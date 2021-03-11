import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getRepos from '../../actions/repos';
import { setCurrentPage } from '../../actions/actions';
import createPages from '../../tools/pagesCreator';
import './RepoContainer.css';
import RepoPage from './RepoPage/RepoPage';

const RepoContainer = () => {

  const dispatch = useDispatch();
  const repos = useSelector(state => state.repos.items);
  const isFetching = useSelector(state => state.repos.isFetching);
  const currentPage = useSelector(state => state.repos.currentPage);
  const totalCount = useSelector(state => state.repos.totalCount);
  const perPage = useSelector(state => state.repos.perPage);
  const isFetchError = useSelector(state => state.repos.isFetchError);
  const [searchValue, setSearchValue] = useState('');
  const pagesCount = Math.ceil(totalCount / perPage);
  const pages = [];
  createPages(pages, pagesCount, currentPage)

  useEffect(() => {
    dispatch(getRepos(searchValue, currentPage, perPage))
  }, [currentPage, dispatch, perPage, searchValue])

  const searchHandler = () => {
    dispatch(setCurrentPage(1))
    dispatch(getRepos(searchValue, currentPage, perPage))
  }

  return (
    <div>
      {isFetchError &&
        <div class="alert alert-danger" role="alert">
          An error has occured! Please update the page
        </div>
      }

      <div className="search">
        <input value={searchValue} onChange={(event) => { setSearchValue(event.target.value) }} type="text" placeholder='Type repo name' className="search-input" />
        <button onClick={() => searchHandler()} className="search-btn">Search</button>
      </div>
      {
        isFetching === false ?
          repos.map(repo =>
            <RepoPage repo={repo} />)
          : <div className='fetching'>

          </div>
      }
      <div className="pages">
        {pages.map((page, index) => <span
          key={index}
          className={currentPage === page ? 'current-page' : 'page'}
          onClick={() => dispatch(setCurrentPage(page))}>
          {page}
        </span>)}
      </div>
    </div>
  )
}

export default RepoContainer