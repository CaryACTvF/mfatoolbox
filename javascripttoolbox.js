// Creating a variable;
let VARIABLENAME = VALUE;

// Selecting elements:
let VARIABLENAME = document.querySelector("ELEMENT");
let VARIABLENAME = document.querySelector("#ID");

// Reading or assigning text inside of elements:
ELEMENT.innerHTML;
ELEMENT.innerHTML = VALUE;

// Reading or assigning answers from input elements:
ELEMENT.value;
ELEMENT.value = VALUE;

// Changing the style of an element:
ELEMENT.style.PROPERTY = "VALUE";

// Changing something from a string to a number. For example "+5" to 5
Number(thing_to_make_a_number);

// Repeating a procedure as long as a codition is true:
while (CONDITION) {
	// PROCEDURE
}

// If/Else If/Else Statements
if (CONDITION) {
	// Procedure to run if the condition is true.
}
else if (CONDITION) {
	// Procedure to run if the condition is true.
}
else {
	// Procedure to run no conditions are true.
}

// For Compound Condtional Statements:
// && means "and"
// || means "or"
// ! means "not"

// Running a procedure after an event happens:
ELEMENT.addEventListener("EVENTTYPE", function() {
	// PROCEDURE
})

// Creating your own procedure:
function PROCEDURENAME(variables) {
	// PROCEDURE
}

// This function generates a random integer between min and max:
function generateRandom(min, max) {
	let number = Math.round((max-min)*Math.random())+min;
	return number;
}

// Audio Stuff!
SOUND.currentTime = 0;
SOUND.play();

// Using the MathJax expansion pack:
// Copy and paste the following two script tags right before your JavaScript Code
// to install the expansion packs.
`
<script src='https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML' async></script>

<script type="text/x-mathjax-config">
MathJax.Hub.Config({
  tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]},
  messageStyle: "none"
});
</script>
`
// To rerun the MathJax parsing of the page:
MathJax.Hub.Queue(["Typeset",MathJax.Hub,problemText]);

// HTML for Mobile
`
<meta name="viewport" content="width=device-width, initial-scale=1">
`