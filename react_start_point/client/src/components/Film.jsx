var React = require("react");

var Film = React.createClass({
  render: function(){
    return(
      <div className = "film">
        {this.props.children}
      </div>
      );
  }

});

module.exports = Film;