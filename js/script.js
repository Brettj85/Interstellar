'use strict';

$(document).ready(function () {
  //Set up global variables
  let gamescollection;
  let i = 0;
  let g = 0;
  createGames(24);
  function createGames(gamesNum) { //Function for creating games list
    gamescollection = new GamesCollection(gamesNum);//Number of games boxes to be created
    gamescollection.render(); //Renders gamescollection object
    return gamescollection;//Return gamescollection object
  }

  function GamesCollection(games) {
    this.games = games;
    this.boxes = [];
    this.render = function () {
      var boxes = "";//Initialize spaces empty
      for (i = 1; i <= games; i++) {//For each game
          g++;
          boxes = boxes.concat('<div class="game game-' + g + '"><div class="image">[Image]</div><div class="title">[Game Title]</div><div class="description">[Game Description]</div></div>');//Create new game element, with placeholders
      }
      $('.games-container').empty();//Empty grid
      $('.games-container').append(boxes);//Add newly created games to grid
    }
  }

  //Details for game 1
  $(".game-1 .title").text("Generic Game #1");
  $(".game-1 .description").text("This is a test description -  blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah");

  //Details for game 2
  $(".game-2 .title").text("Generic Game #2");
  $(".game-2 .description").text("This is a long description -  blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah v blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah  blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah  blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah  blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah");
});