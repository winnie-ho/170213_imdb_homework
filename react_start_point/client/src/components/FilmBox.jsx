var React = require ("react");
var FilmList = require("./FilmList");

var films = [
  {id: 1, title: "Sausage Party", link: "something"},
  {id: 2, title: "Cafe Society", link: "something"},
  {id: 3, title: "Morgan", link: "something"},
  {id: 4, title: "The 9th Life of Louis Drax", link: "something"},
  {id: 5, title: "Naam Hai Akira", link: "something"},
  {id: 6, title: "Equity", link: "something"},
  {id: 7, title: "Things to Come", link: "something"}
];


var FilmBox = React.createClass({
  getInitialState: function(){
    return {data: films};
  },

  render: function(){
    return (
        <div className = "film-box">       
        <FilmList data = {this.state.data}/>
        <a href = "something">See more opening this week >></a>
        <hr/>
        <button>Get Showtimes</button>
        </div>
      );
  }
});

module.exports = FilmBox;