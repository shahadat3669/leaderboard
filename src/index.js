import './style.scss';
import './assets/logo.png';
import { addDataToApi, generateLeaderBoard } from './modules/leaderboard.js';
import Score from './modules/Score.js';

const scoreList = document.querySelector('#scoreList');
window.addEventListener('DOMContentLoaded', generateLeaderBoard(scoreList));
