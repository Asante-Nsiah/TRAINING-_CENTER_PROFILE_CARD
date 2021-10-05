
   const list = document.querySelectorAll('li');
   const img = document.querySelector("img");
   const namePerson = document.getElementById("name");
   const position = document.getElementById("position");
   const speciality = document.getElementById("speciality");

   list.forEach(el => {
       el.addEventListener('click', (event) => {
            img.src = event.target.getAttribute('data-img');
            namePerson.textContent = event.target.getAttribute('data-name');
            speciality.textContent = event.target.getAttribute('data-speciality');
            position.textContent = event.target.getAttribute('data-position');

       })
   })
