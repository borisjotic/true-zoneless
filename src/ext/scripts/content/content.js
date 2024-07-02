'use-strict';

const elem = document.querySelector('#input');
elem.onkeyup = () => {
  chrome.runtime.sendMessage({
    type: 'demo',
    data: elem.value,
  });
};
