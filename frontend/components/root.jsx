import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import { Guide } from './sidebar/guide';
import BarDetailContainer from './sidebar/bar_detail_container';
import CommentFormContainer from './sidebar/comments/comment_form_container';

const Root = ({ store }) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path='/' component={ App } >
          <IndexRoute component={ Guide } />
          <Route path='login' component={ SessionFormContainer }
                 onEnter={_redirectIfLoggedIn} />
          <Route path='signup' component={ SessionFormContainer }
                 onEnter={_redirectIfLoggedIn} />
          <Route path='demo' component={ SessionFormContainer }
                 onEnter={_redirectIfLoggedIn} />
          <Route path='bars/:barId' component={ BarDetailContainer }
                 onEnter={_ensureLoggedIn} >
            <Route path="comment" component={CommentFormContainer}
                 onEnter={_ensureLoggedIn} />
          </Route>
        </Route>
      </Router>
    </Provider>
  );
};
export default Root;
