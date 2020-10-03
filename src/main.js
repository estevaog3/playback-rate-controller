const NODE_ID = "playbackRate-keyboard-indicator";

const state = {
  playbackRate: 1.0,
};

const togglePlaybackRateIndicator = (playbackRate) => {
  const node = document.querySelector(`#${NODE_ID}`);
  node.innerText = playbackRate;
  node.classList.remove(`${NODE_ID}--hidden`);
  setTimeout(() => {
    node.classList.add(`${NODE_ID}--hidden`);
  }, 1200);
};

const setupPlaybackRateIndicator = () => {
  const node = document.createElement("p");
  node.id = NODE_ID;
  node.classList = [`${NODE_ID}--hidden`];
  document.body.appendChild(node);
};

const shortcuts = {
  190: () => {
    state.playbackRate += 0.25;
    document.querySelectorAll("video").forEach((videoElement) => {
      videoElement.playbackRate = state.playbackRate;
    });
    togglePlaybackRateIndicator(state.playbackRate);
  },
  188: () => {
    state.playbackRate -= 0.25;
    document.querySelectorAll("video").forEach((videoElement) => {
      videoElement.playbackRate = state.playbackRate;
    });
    togglePlaybackRateIndicator(state.playbackRate);
  },
};

const handleKeydown = (e) => {
  if (e.shiftKey && shortcuts[e.keyCode]) {
    shortcuts[e.keyCode]();
  }
};

const setupExtension = () => {
  document.addEventListener("keydown", handleKeydown);
  window.onload = () => {
    setupPlaybackRateIndicator();
  };
};

setupExtension();
