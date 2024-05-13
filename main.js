"use strict";

const http = document.getElementById("http");
const https = document.getElementById("https");
const input = document.getElementById("input");

function createUrl(protocol) {
  let inputValue = input.value.trim();
  if (!inputValue) {
    input.style.color = "red";
    input.value = "Enter any link!";
  }
  if (!inputValue.startsWith("http://") && !inputValue.startsWith("https://")) {
    inputValue = `${protocol}://${inputValue}`;
  }
  window.location.href = inputValue;
}

function btnEl(link, protocol) {
  link.addEventListener("click", () => {
    console.log("clicked");
    createUrl(protocol);
  });
}
btnEl(http, "http");
btnEl(https, "https");
