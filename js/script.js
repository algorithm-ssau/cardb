//дожидаемся полной загрузки страницы
window.onload = function() {
  //получаем идентификатор элемента

  var b = document.getElementById("modal_window");
  var c = document.getElementById("bg_modal_window");
  var x = document.getElementById("close_modal");


  c.onclick = function() {
    $("#modal_window").animate({
      width: 10 + "%",
      height: 10 + "%"
    });
    var millisecondsToWait = 300;
    setTimeout(function() {
      b.style.left = "-150%";
      c.style.left = "-150%";
    }, millisecondsToWait);
    $("body").removeClass("stop-scrolling");
  };

  x.onclick = function() {
    $("#modal_window").animate({
      width: 10 + "%",
      height: 10 + "%"
    });

    var millisecondsToWait = 300;
    setTimeout(function() {
      b.style.left = "-150%";
      c.style.left = "-150%";
    }, millisecondsToWait);
    $("body").removeClass("stop-scrolling");
  };
};