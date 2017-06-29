var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, browserHistory} = require('react-router');

import Main from 'Main';
import Home from 'Home';
import Freediving from 'Freediving';
import Courses from 'Courses';
import Contacts from 'Contacts';

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute path="home" component={Home}/>
      <Route path="freediving" component={Freediving} />
      <Route path="courses" component={Courses} />
      <Route path="contacts" component={Contacts} />
    </Route>
  </Router>,
  document.getElementById('app')
);
