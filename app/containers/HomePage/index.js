/*
 *
 * HomePage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectHomePage from './selectors';
import {loadAction } from './actions'
import MainSearch from '../../components/MainSearch'
import Comments from '../../components/Comments'
import {Container} from 'semantic-ui-react'

export class HomePage extends React.PureComponent {
  createComments(data,i){
    return(
      <Comments comment={data} key={'Comment'+i}/>
    )
  }
  render() {
    const dataInitial = this.props.HomePage.comments
    return (
      <div>
        <Helmet
          title="HomePage"
          meta={[
            { name: 'description', content: 'Description of HomePage' },
          ]}
        />
          <MainSearch/>
          <Container>
            {dataInitial.map((comment,i) => { return this.createComments(comment,i)}) }
          </Container>
      </div>
    );
  }
}

HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  HomePage: makeSelectHomePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadAction: (type)=>{
      dispatch(loadAction(type))
    },
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
