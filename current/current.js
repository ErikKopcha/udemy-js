let inputUah = document.getElementById('uah'),
  inputUsd = document.getElementById('usd');

  inputUah.addEventListener('input', () => {
  return new Promise(function (resolve, reject) {
    let request = new XMLHttpRequest();

    request.open('GET', 'current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('readystatechange', function () {

      if (request.readyState === 4 && request.status == 200) {
        resolve();
        let data = JSON.parse(request.response);
        inputUsd.value = (inputUah.value / data.usd).toFixed(2);
      } else {
        inputUsd.value = "Что-то пошло не так!";
      }
    });
  });
});