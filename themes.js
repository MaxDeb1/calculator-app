/* const input = document.querySelector('#theme1');
const dataTheme = document.querySelector("[data-theme]").dataset;

input.addEventListener('change', function () {
  dataTheme.theme = "theme2";
}); */

const dataTheme = document.querySelector("[data-theme]").dataset;

document.body.addEventListener('change', function (e) {
  let target = e.target;
  switch (target.id) {
      case 'theme1':
          dataTheme.theme = "theme1";
          break;
      case 'theme2':
          dataTheme.theme = "theme2";
          break;
      case 'theme3':
          dataTheme.theme = "theme3";
          break;
  }
});








/* const inputs = document.querySelectorAll("input");

for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('change', function() {
    dataTheme.theme = "theme3";
  })
} */


/* const dataTheme = document.querySelector("[data-theme]").dataset;
console.log(dataTheme) */
/* const firstTheme = document.getElementById("theme1").checked = true;
console.log(firstTheme) */

/* if(document.querySelector("#theme1:checked")) {
    dataTheme.textContent = "theme1";
  }else if(document.querySelector('#theme2'):checked) {
    dataTheme.textContent = "theme2";
  }else if(document.querySelector('#theme3'):checked) {
    dataTheme.textContent = "theme3";
  } */

/*     if(document.getElementById('theme1').checked == true) {
        console.log("theme1 selected")
    }
    else if(document.getElementById('theme2').checked == true) {
        console.log("theme2 selected")  
    }
    else if(document.getElementById('theme3').checked == true) {
        console.log("theme3 selected") 
    } */



/*     radiobtn1 = document.getElementById("theme1");
    radiobtn2 = document.getElementById("theme2");
    radiobtn3 = document.getElementById("theme3");

    if(radiobtn1.addEventListener('change', function(e) {
      dataTheme.textContent = "theme1";
      console.log(radiobtn1.checked, radiobtn1.value);
    }))elseif(
    radiobtn2.addEventListener('change', function(e) {
      dataTheme.textContent = "theme1";
      console.log(radiobtn2.checked, radiobtn2.value);
    })); */

/*     const inputs = document.querySelectorAll("input=[type=radio]");

      for (var i = 0; i < checkbox.length; i++) {
        inputs[i].addEventListener('change', function() {

        })
      }

      inputs.forEach(function(checkbox) {
        input.addEventListener('change', function() {
        
        })
      }) */
