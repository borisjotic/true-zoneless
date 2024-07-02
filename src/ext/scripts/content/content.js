'use-strict';

const elem = document.querySelector('#input');
if (elem) {
  elem.onkeyup = () => {
    chrome.runtime.sendMessage({
      type: 'demo',
      data: elem.value,
    });
  };
}
