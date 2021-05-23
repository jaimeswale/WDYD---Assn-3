const toggleBtn1 = document.querySelector("#toggleBtn1");
const divList1 = document.querySelector("#science");

toggleBtn1.addEventListener('click', () => {
    if(divList1.style.display === 'none') {
        toggleBtn1.value = "HIDE SCIENCE";
        divList1.style.display = 'inline-block';
    } else {
        toggleBtn1.value = "SHOW SCIENCE";
        divList1.style.display = 'none';
    }
})

const toggleBtn2 = document.querySelector("#toggleBtn2");
const divList2 = document.querySelectorAll(".architecture");

toggleBtn2.addEventListener('click', () => {
    for(var i = 0; i < divList2.length; i++) {
        if(divList2[i].style.display === 'none') {
            toggleBtn2.value = "HIDE ARCHITECTURE"
            divList2[i].style.display = 'inline-block';
        } else {
            toggleBtn2.value = "SHOW ARCHITECTURE"
            divList2[i].style.display = 'none';
        }
    }

})

const toggleBtn3 = document.querySelector("#toggleBtn3");
const divList3 = document.querySelectorAll(".design");

toggleBtn3.addEventListener('click', () => {
    for(var i = 0; i < divList3.length; i++) {
        if(divList3[i].style.display === 'none') {
            toggleBtn3.value = "HIDE DESIGN"
            divList3[i].style.display = 'inline-block';
        } else {
            toggleBtn3.value = "SHOW DESIGN"
            divList3[i].style.display = 'none';

        }
    }

})

toggleBtn3.addEventListener("click", function(){
    let elem = document.getElementsByClassName("box-grid");
    elem.style.gridTemplateAreas = 
        '"aside1 heading heading heading aside2" "aside1 section1 section1 section1 aside2" "aside1 section3 section3 section3 aside2" "aside1 section4 section4 section4 aside2" "aside1 section5 section5 section5 aside2"';
        
        
        
        
        

})

