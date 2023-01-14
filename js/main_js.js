function show_more() {
    const element = document.getElementById("imgl");
    const btnText = document.getElementById("myBtn");

     if (element.className == "image-gallery") {
        element.className = "image-gallery2";
        btnText.innerHTML = "SHOW ME LESS";
     } else {
        element.className = "image-gallery";
        btnText.innerHTML = "SHOW ME MORE";
     }
  }