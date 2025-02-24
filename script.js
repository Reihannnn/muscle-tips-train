window.onload = function () {
  const pieces = document.getElementsByTagName("svg");
  let lastSelected = null;
  for (var i = 0; i < pieces.length; i++) {
    let _piece = pieces[i];
    _piece.onclick = function (t) {
      if (t.target.getAttribute("data-position") != null) {
        document.getElementById("data").innerHTML =
        t.target.getAttribute("data-position");
      }
      if (t.target.parentElement.getAttribute("data-position") != null) {
        const data = t.target.parentElement.getAttribute("data-position")
        document.querySelector(`.core-abs-information`).style.display = "none"
        document.querySelector(`.legs-information`).style.display = "none"
        document.querySelector(`.shoulder-information`).style.display = "none"
        document.querySelector(`.arm-information`).style.display = "none"
        document.querySelector(`.head-information`).style.display = "none"
        document.querySelector(`.hand-information`).style.display = "none"
        document.querySelector(`.chest-information`).style.display = "none"
        document.querySelector(`.muscle-train-information`).style.display = "none"
        document.getElementById("data").innerHTML =
        t.target.parentElement.getAttribute("data-position");
        
        
        if(data){

          document.querySelector(`.${data}-information`).style.display = "block"
          
          }
        
        }
        
        if (lastSelected && lastSelected !== t.target) {
          lastSelected.style.fill = " rgb(35, 35, 35)";
        }
        
        // Ubah warna elemen yang diklik menjadi merah
        t.target.style.fill = "red";
        
        // Simpan elemen terakhir yang diklik
        lastSelected = t.target;
      };
    }
  };
  
  
  // kode dari ai : chatGPT
  