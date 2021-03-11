import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import UserCardContainer from '../components/Card/UserCardContainer/UserCardContainer';
import AppError from '../components/AppError';
import RepoContainer from '../components/main/RepoContainer';

import '../index.css';


const Routes = () => {

  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route exact path='/' component={RepoContainer} />
          <Route exact path='/card/:username/:reponame' component={UserCardContainer} />
          <Route exact path='/error' component={AppError} />
          <Redirect to='/' />
        </Switch>

      </div>
    </BrowserRouter>
  )
}

export default Routes