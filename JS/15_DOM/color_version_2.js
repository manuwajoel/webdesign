const circles = document.querySelectorAll('div');
const h1 = document.querySelector("h1")
console.log(circles);
console.log(h1)

// Wrong: Dont add an eventlistener to a collection of elements
// circles.addEventListener('click', changeBackgroundColor);

circles.forEach(function (element)  {
    element.addEventListener('click', () => {
        document.body.style.backgroundColor = element.style.backgroundColor;
        h1.style.color = "#fff";
    })
});

// ARROW FUNCTION APPROACH
// circles.forEach( (element) => {
//     element.addEventListener('click', () => {
//         document.body.style.backgroundColor = element.style.backgroundColor;
//     })
// });
