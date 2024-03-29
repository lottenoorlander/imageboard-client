import React, { Component } from "react";

class CreateForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <input
            onChange={this.props.onChange}
            name="title"
            value={this.props.values.title}
            placeholder="title"
          />
          <input
            onChange={this.props.onChange}
            name="url"
            value={this.props.values.url}
            placeholder="url"
          />

          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

export default CreateForm;
