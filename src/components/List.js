import React, { Component } from "react";
import CreateFormContainer from "./CreateFormContainer";
import LoginFormContainer from "./LoginForm";

class List extends Component {
  render() {
    return (
      <div>
        {}
        <LoginFormContainer />
        <CreateFormContainer />
        {this.props.images
          ? this.props.images.map(image => (
              <div>
                <h3>{image.title}</h3>
                <img src={image.url} />
              </div>
            ))
          : "Loading..."}
      </div>
    );
  }
}

export default List;
