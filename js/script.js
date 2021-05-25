const toggleBtn1 = document.querySelector("#toggleBtn1");
const divList1 = document.querySelectorAll(".science");

toggleBtn1.addEventListener('click', () => {
  for(var i = 0; i < divList1.length; i++) {
      if(divList1[i].style.visibility === 'hidden') {
        toggleBtn1.value = "HIDE ENGINEERING";
        divList1[i].style.visibility = 'visible';
    } else {
        toggleBtn1.value = "SHOW ENGINEERING";
        divList1[i].style.visibility = 'hidden';
    }
  }
})

const toggleBtn2 = document.querySelector("#toggleBtn2");
const divList2 = document.querySelectorAll(".architecture");

toggleBtn2.addEventListener('click', () => {
    for(var i = 0; i < divList2.length; i++) {
        if(divList2[i].style.visibility === 'hidden') {
            toggleBtn2.value = "HIDE ARCHITECTURE"
            divList2[i].style.visibility = 'visible';
        } else {
            toggleBtn2.value = "SHOW ARCHITECTURE"
            divList2[i].style.visibility = 'hidden';
        }
    }

})

const toggleBtn3 = document.querySelector("#toggleBtn3");
const divList3 = document.querySelectorAll(".design");

toggleBtn3.addEventListener('click', () => {
    for(var i = 0; i < divList3.length; i++) {
        if(divList3[i].style.visibility === 'hidden') {
            toggleBtn3.value = "HIDE DESIGN"
            divList3[i].style.visibility = 'visible';
        } else {
            toggleBtn3.value = "SHOW DESIGN"
            divList3[i].style.visibility = 'hidden';

        }
    }

})

function search_filter() {
  let input = document.getElementById('query').value
  input = input.toLowerCase();
  let x = document.getElementsByClassName('design');
  let y = document.getElementsByClassName('architecture');
  let z = document.getElementsByClassName('science');

  for (let i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.visibility="hidden";
    }
    else {
      x[i].style.visbility = "visible";
    }
  }

  for (let i = 0; i < y.length; i++) {
    if (!y[i].innerHTML.toLowerCase().includes(input)) {
      y[i].style.visibility="hidden";
    }
    else {
      y[i].style.visibility = "visible";
    }
  }

  for (let i = 0; i < z.length; i++) {
    if (!z[i].innerHTML.toLowerCase().includes(input)) {
      z[i].style.visibility="hidden";
    }
    else {
      z[i].style.visibility = "visible";
    }
  }
}

