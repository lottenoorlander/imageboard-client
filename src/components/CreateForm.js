import React, { Component } from "react";

class CreateForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <input
            onChange={this.props.onChange}
            name="title"
            // value={this.state.title}
            placeholder="title"
          />
          <input
            onChange={this.props.onChange}
            name="url"
            // value={this.state.url}
            placeholder="url"
          />

          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

export default CreateForm;
