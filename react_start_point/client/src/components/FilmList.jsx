var React = require ("react");
var Film = require ("./film");

var FilmList = React.createClass({
  render: function(){
    var filmNodes = this.props.data.map(function(film){
      return (
        <Film key = {film.id} >

        <p><img src = "../resources/icon.png"/>
        {film.title}</p>
        <a href = {film.link}>Showtimes</a>

        </Film>
        );
    });

    return(
      <div className = "film-list">
      <h5>UK Opening This Week</h5>
      {filmNodes}
      </div>
      );
    
  },
});

module.exports = FilmList;