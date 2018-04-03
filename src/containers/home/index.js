import React from 'react';
// import { push } from 'react-router-redux';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import SearchBar from '../searchBar';

const Home = props => (
  <div style={{ paddingLeft: '16px' }}>
    <h1>Home</h1>
    <SearchBar />
  </div>
);

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(
//     {
//       changePage: () => push('/about-us')
//     },
//     dispatch
//   );

export default connect()(Home);
