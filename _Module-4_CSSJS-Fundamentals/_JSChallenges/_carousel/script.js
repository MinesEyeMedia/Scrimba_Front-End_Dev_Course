// Carousel in Vanilla Javascript.

// grab the items with class name 'carousel-item' and store in 'slides'
const slides = document.getElementsByClassName("carousel-item")
// set slidePosition to 0, which will be dynamically updated and used to mark carousel position.
let slidePosition = 0
// dynamically store the number of slides using the 'slides' const queried above.
const totalSlides = slides.length

// here is a slightly different way of tying in event listeners than how I usually do it.
// query the element IDs and tie a click event listener directly to it to trigger the specific func names.
document.getElementById("carousel-button-next").addEventListener("click", moveToNextSlide)
document.getElementById("carousel-button-prev").addEventListener("click", moveToPrevSlide)

// created a function using a 'for of' (forOf) loop to remove the class name 'carousel-item-visible' and to add 'carousel-item-visible to all slides. This is re-added in the 'moveToNextSlide()' function.
function hideAllSlides() {
    // forOf loop - we create the var 'slide' and the forOf loop iterates through the array 'slides' assigning each iteration to the newly created variable 'slide'. (Kind of confusing to explain but I understand it).
    // we use 'SLIDE.classList.remove(x)' because the variable 'slide' replaces the traditional variable 'i' in a standard 'for loop'.
    for (let slide of slides) {
        slide.classList.remove("carousel-item-visible")
        slide.classList.add("carousel-item-hidden")
    }
}

// function to go forward a slide
// we immediately call the hideAllSlides() function to apply desired .class assignment effect seen above.
// an 'if statement' conditional says that if the slide position number is equal to the total number of slides present (which are actually array index numbers) - 1 (so we don't 'over-rev' the index), then set slidePosition back to 0. This essentially says that when the carousel hits the end of the media/photo rotation (based on the dynamic declaration of 'totalSlides'), then reset that number back to 0 and start the cycle again.
// else, increment the slidePosition number.
// outside the conditional statement, we apply the HTML class 'carousel-item-visible' (set to display:block) to the 'slide' governed by the 'slidePosition' variable.
function moveToNextSlide() {
    hideAllSlides()
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0
    } else {
        slidePosition++
    }
    slides[slidePosition].classList.add("carousel-item-visible")
}

// function to go back a slide
// once again we call hideAllSlides() to apply the desired .class assignment to the carousel-items.
// an 'if statement' conditional again checks to see if 'slidePosition' is 0 (meaning we're on the first slide).
// if so, then the variable slidePosition needs to be updated to be that of totalSlides (the HUMAN number of slides in the array), then - 1 to make it the array index counting (eg. 3 becomes 2 [3-1=2]).
// if slidePosition is NOT 0,then we simply decrement the slidePosition until it eventually becomes 0 (with multiple calls of the function).
// and again, outside the conditional, we apply the HTML class 'carousel-item-visible (set to display:block) to allow that current slide to be rendered visible on screen.
function moveToPrevSlide() {
    hideAllSlides()

    if (slidePosition === 0) {
        slidePosition = totalSlides - 1
    } else {
        slidePosition--
    }
    slides[slidePosition].classList.add("carousel-item-visible")
}