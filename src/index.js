import './style.scss';
import './assets/logo.png';
import { addDataToApi, generateLeaderBoard } from './modules/leaderboard.js';
import Score from './modules/Score.js';

const scoreList = document.querySelector('#scoreList');
const addScoreForm = document.querySelector('#addScoreForm');

addScoreForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const newScore = new Score({
    user: data.get('user'),
    score: data.get('score'),
  });
  addDataToApi(newScore);
});

window.addEventListener('DOMContentLoaded', generateLeaderBoard(scoreList));
