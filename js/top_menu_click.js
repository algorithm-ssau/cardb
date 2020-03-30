window.onload = function () {
  var button1 = document.getElementById("button1");
  var img1 = document.getElementById("img1");

  var check = 1;
  button1.onmouseover = function () {
    if (check == 1) {
      $("#img1").toggleClass("zoom");
    }
    check = 2;
  };
  button1.onmouseout = function () {
    if (check == 2) {
      $("#img1").toggleClass("zoomout");
    }
    check = 1;
  };
};