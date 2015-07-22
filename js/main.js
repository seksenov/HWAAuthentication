 
"use strict"
 document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("navigate").addEventListener("click", openRequestedPopup);
  });

var windowObjectReference;

function openRequestedPopup() {
  windowObjectReference = window.open(
    "http://www.cnn.com/",
    "DescriptiveWindowName",
    "resizable,scrollbars,status"
  );
} 