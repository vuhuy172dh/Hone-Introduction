const bubbleList = document.getElementById('background-bubbles');

function clearOldBubble() {
  if (!bubbleList) return;

  // clear old bubble
  bubbleList.innerHTML = '';
}

export { clearOldBubble };
