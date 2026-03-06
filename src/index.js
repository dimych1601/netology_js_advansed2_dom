import "./css/style.css";
import Game from "./js/app.js";

const game = new Game();
game.bindToDOM(document.querySelector("#game-board"));
game.start();
