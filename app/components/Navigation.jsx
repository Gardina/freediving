import React from 'react';
import {Link, IndexLink} from 'react-router';

const Navigation = (props) => {
	return (
      <div>
        <ul>
					<li>
						<IndexLink to="/">Home</IndexLink>
					</li>
					<li>
						<Link to="/freediving">freediving</Link>
					</li>
					<li>
						<Link to="/courses">Courses</Link>
					</li>
					<li>
						<Link to="/contacts">Contacts</Link>
					</li>
        </ul>
      </div>
	);
};

export default Navigation;
