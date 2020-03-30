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

var background_image_parallax = function ($object, multiplier) {
  multiplier = typeof multiplier !== "undefined" ? multiplier : 0.5;
  multiplier = 1 - multiplier;
  var $doc = $(document);
  $object.css({ "background-attatchment": "fixed" });
  $(window).scroll(function () {
    var from_top = $doc.scrollTop(),
      bg_css = "0px " + multiplier * from_top + "px";
    $object.css({ "background-position": bg_css });
  });
};
background_image_parallax($(".box2"));
background_image_parallax($(".box3"), 0.25);
