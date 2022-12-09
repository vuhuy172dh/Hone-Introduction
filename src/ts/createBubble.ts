import { clearOldBubble } from './clearOldBubble';

const bubbleList = document.getElementById('background-bubbles');

function createBubble() {
  if (!bubbleList) return;

  // clear old bubble
  clearOldBubble();

  const bubbleNum = Math.floor(window.innerWidth / 38);

  for (let i = 0; i < bubbleNum; i++) {
    const iRandom = Math.floor(Math.random() * bubbleNum);
    const bubble = `
      <span style="--i: ${iRandom}"></span> 
    `;

    bubbleList.insertAdjacentHTML('beforeend', bubble);
  }

  window.onresize = createBubble;
}

export { createBubble };
