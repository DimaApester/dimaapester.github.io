function getParameterByName(name) {
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}

function loadApesterSDK() {
  const scriptModule = document.createElement('script');
  scriptModule.type = 'module';
  scriptModule.src = 'https://sdk.apester.com/web-sdk.core.min.js';
  document.body.appendChild(scriptModule);

  const scriptLegacy = document.createElement('script');
  scriptLegacy.setAttribute('nomodule', '');
  scriptLegacy.src = 'https://sdk.apester.com/web-sdk.core.legacy.min.js';
  document.body.appendChild(scriptLegacy);
}

window.addEventListener('load', () => {
  const width = getParameterByName('width');

  if (width) {
    document.getElementById('wrapper').style.width = width + 'px';
    document.getElementById('wrapperWidth').value = width;
  }

  loadApesterSDK();
});

document.getElementById('resizeButton').addEventListener('click', function () {
  const wrapperWidth = document.getElementById('wrapperWidth').value;
  window.location.href = window.location.pathname + '?width=' + wrapperWidth;
});
