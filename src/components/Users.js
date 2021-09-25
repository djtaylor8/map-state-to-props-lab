import React, { Component } from 'react';
import { connect } from 'react-redux';
// import manageUsers from '../reducers/manageUsers'

class Users extends Component {

  render() {
    // debugger;
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map((user, idx) => {
            return (
            <li key={idx}>{user.username}</li>
          )})}
          <div>
          User Count: {this.props.userCount}
          </div>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    userCount: state.users.length
  }
}
// connect this component to Redux
export default connect(mapStateToProps)(Users);
