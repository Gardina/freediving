import React from 'react';

import Header from 'Header';
import Gallery from 'Gallery';
import Footer from 'Footer';

const Main = (props) => {
	return (
      <div>
				<Header/>
				<Gallery/>
        <div className="row">
					<div className="column small-centered medium-6 large-4">
						{props.children}
					</div>
        </div>
				<Footer />
      </div>
	);
};

export default Main;
