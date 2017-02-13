var React = require("react");

var Film = React.createClass({
  render: function(){
    return(
      <div className = "film">
        <p> {this.props.title} </p>
        <p> {this.props.children} </p>
      </div>
      );
  }

});

module.exports = Film;