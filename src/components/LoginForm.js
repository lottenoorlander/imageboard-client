import React, { Component } from "react";

class LoginForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={onSubmit}>
          <input
            name="email"
            placeholder="email"
            onChange={this.props.onChange}
            type="email"
          />
          <input
            name="password"
            placeholder="password"
            onChange={this.props.onChange}
            type="password"
          />
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

export default LoginForm;
