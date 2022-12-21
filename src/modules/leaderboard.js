import { getData } from './api.js';

const generateLeaderBoard = async (scoreList) => {
  scoreList.innerHTML = '';
  const response = await getData();
  let generateHtml = '';
  if (response.result.length > 0) {
    response.result.forEach((scoreItem) => {
      generateHtml += `<li class="recent-score-item">${scoreItem.user}: ${scoreItem.score}</li>`;
    });
    scoreList.innerHTML = generateHtml;
  } else {
    generateHtml += '<li class="recent-score-item">Sorry, No score found!</li>';
    scoreList.innerHTML = generateHtml;
  }
};

export { generateLeaderBoard };
