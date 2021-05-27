/* SEARCH BAR - SEARCHING FOR NEW PAGE (SEARCH1) */

function openPage () {
  var x = document.getElementById("search2").value;


  if (x === "categories" || x === "CATEGORIES" || x === "cat" || x === "CAT" || x ==="study path" || x ==="STUDY PATH" || x === "studypath" || x === "STUDYPATH" || x === "study" || x === "STUDY") {
    window.open("./cat.html");
  }

  if (x === "careers" || x === "CAREERS" || x === "car" || x === "CAR" || x === "career" || x === "CAREER"){
    window.open("./career.html")
  }

  if (x === "interaction design" || x === "interaction" || x === "UX" || x === "INTERACTION DESIGN" || x === "INTERACTION" || x === "ux" || x === "Ux" || x === "info") {
    window.open("./info.html")
  }

  if (x === "UX researcher" || x === "researcher" || x === "research" || x === "design research" || x === "user researcher") {
    window.open("./career-info.html")
  }
}

/* SEARCH BAR - SEARCHING FOR NEW PAGE (SEARCH2) */

function openPage2 () {
  var y = document.getElementById("search3").value;


  if (y === "categories" || y === "CATEGORIES" || y === "cat" || y === "CAT" || y ==="study path" || y ==="STUDY PATH" || y === "studypath" || y === "STUDYPATH" || y === "study" || y === "STUDY") {
    window.open("./cat.html");
  }

  if (y === "careers" || y === "CAREERS" || y === "car" || y === "CAR" || y === "career" || y === "CAREER"){
    window.open("./career.html")
  }

  if (y === "interaction design" || y === "interaction" || y === "UX" || y === "INTERACTION DESIGN" || y === "INTERACTION" || y === "ux" || y === "Ux" || y === "info") {
    window.open("./info.html")
  }

  if (x === "UX researcher" || x === "researcher" || x === "research" || x === "design research" || x === "user researcher") {
    window.open("./career-info.html")
  }
}
