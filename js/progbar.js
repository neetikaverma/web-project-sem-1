/*--------------------------------------------------
Progress Bar
----------------------------------------------------*/

var bars = document.querySelectorAll('.meter span');
console.clear();

setInterval(function () {
  bars.forEach(function (bar) {
    var getWidth = parseFloat(bar.dataset.progress);

    for (var i = 0; i < getWidth; i++) {
      bar.style.width = i + '%';
    }
  });
}, 500);