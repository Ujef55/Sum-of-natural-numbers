function calculateSum() {
	let sum = 0;
	const numberInput = document.getElementById("number");
	const n = Number.parseInt(numberInput.value);
	for (let i=0; i<n; i++){
	    sum += (i+1);
	}
	const result = document.getElementById("result");
	result.textContent = "Sum of first " + n + " natural number is " + sum;
}