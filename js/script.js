$(function () {
  const nav = $("nav");
  const ul = $("ul");
  const li = $("li");
  const a = $("a");
  const border = $(".bordered");

  a.mouseenter(function (event) {
    $(this).addClass("bordered");
  });
  a.mouseleave(function (event) {
    $(this).removeClass("bordered");
  });
});

$(function () {
  const button = $(".button");
  const div = $(".div");

  div.mouseenter(function () {
    div.css("background-color", "green");
  });
  div.mouseleave(function () {
    div.css("background-color", "yellow");
  });
  div.mousedown(function () {
    div.css("background-color", "black");
  });
  div.mouseup(function () {
    div.css("background-color", "aqua");
  });

  button.click(function () {
    div.css("background-color", "red");
  });
});

$(function () {
  const input = $("input");
  const btn = $(".btn");

  input.keydown(function () {
    console.log("pressed");
  });
  input.keyup(function () {
    console.log("unpressed");
  });
});
