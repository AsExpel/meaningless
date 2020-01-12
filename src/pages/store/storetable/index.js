import { Component } from 'react';
import { connect } from 'dva';
import Users from './components/Users';

class storeAndstoretable extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'storeandstoretable/fetch',
      payload: {
        page: 1,
      },
    });
  }

  render() {
    return (
      <div>
        <Users />
      </div>
    );
  }
}

export default connect()(storeAndstoretable);
