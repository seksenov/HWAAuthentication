 "use strict"

 document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("navigate").addEventListener("click", openRequestedPopup);
  });

var windowObjectReference;

function openRequestedPopup() {
  windowObjectReference = window.open(
    "http://www.domainname.ext/path/ImageFile.png",
    "DescriptiveWindowName",
    "resizable,scrollbars,status"
  );
} 