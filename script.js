
let counter=0;
const counterValue = document.getElementById('counter');
const incrementBtn = document.getElementById('incrementBtn');

 
// To increment the value of counter
incrementBtn.addEventListener('click', () => {
    counter++;
	alert(`${counter}`)
    counterValue.innerHTML = counter;
	
});