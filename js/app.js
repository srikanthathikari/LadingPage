/*This is the class for the existing landing container div*/

let landingContainer = document.querySelectorAll('.landing__container');
let newElementsArray = [];
let sections = document.querySelectorAll('section');


for (let i = 0; i < landingContainer.length; i++) {
    let listTag = document.createElement('li');
    let anchorTag = document.createElement('a');

    /*This is the ID for the unordered list and all the 
    li and a tags should come under the above selector */

    let idForUl = document.querySelector('#navbar__list');

    let childAnchor = idForUl.appendChild(listTag);
    childAnchor.appendChild(anchorTag);

    /* For the value out of this for loop we are adding text content to first 
    element child */
    anchorTag.textContent = landingContainer[i].firstElementChild.textContent;
    anchorTag.setAttribute("class", "section" + (i + 1));
    newElementsArray.push(anchorTag);
}

/* With the below for Each loop and the function in it will scroll to the section that has been clicked on the nav bar.
      Also in the nav bar listeners are added to mouseover and mouseout*/
newElementsArray.forEach(function (sec, index) {

    sec.addEventListener("click", function () {
        landingContainer[index].scrollIntoView({ behavior: "smooth" });
    })
    sec.addEventListener("mouseover", function () {
        sec.classList.add('hover')
    })
    sec.addEventListener("mouseout", function () {
        sec.classList.remove('hover')
    })
})


window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }


    })
    newElementsArray.forEach(function (a, index) {
        a.classList.remove('underscore');
        if (a.classList.contains(current)) {
            sections[index].classList.add('your-active-class')
            a.classList.add('underscore');
        }
        else {
            sections[index].classList.remove('your-active-class')
        }
    })
})











