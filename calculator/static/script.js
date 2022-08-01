firstNum = ""
secondNum = ""
pendingOperation = ""
pendingOperation2 = ""
displayStr = ""

// Taking input from the calculator
function calcInput(inValue) {
	debugger;
	// If there are an pending Operation will use slot number 2 instead of 1
	if (pendingOperation != "") {
		secondNum += inValue;
		displayStr = firstNum + pendingOperation + secondNum;
	} else {  // Else still using slot number 1
		firstNum += inValue;
		displayStr = firstNum;
	}
	document.getElementById('input-number').value = displayStr;
}

function calcOperation(inValue) {
	// debugger;	
	// displayStr += inValue;

	// Calculate Operation using the Operation Key (Using Slot 2's Operation)
	// TODO: Debug this!!!
	if (pendingOperation != '') {
		pendingOperation2 = inValue  // Save the current just typed operator

		calcResult(); // Calculate the result & clear slot 2 switch to slot 1
		pendingOperation = pendingOperation2;
		pendingOperation2 = "";

		displayStr += pendingOperation;
	} // Initialize the first operation
	else {pendingOperation = inValue; pendingOperation2 = ''; displayStr += pendingOperation}
	document.getElementById('input-number').value = displayStr;
}

function calcResult() {
	console.log("Result!");
	
	switch (pendingOperation) {
		case '+': firstNum = String(Number(firstNum)+Number(secondNum)); break;
		case '-': firstNum = String(Number(firstNum)-Number(secondNum)); break;
		case '/': firstNum = String(Math.round(Number(firstNum)/Number(secondNum))); break;
		case '*': firstNum = String(Number(firstNum)*Number(secondNum)); break;
	}
	secondNum = "";
	displayStr = firstNum; // Set result to firstNum
	document.getElementById('input-number').value = displayStr;
}

function calcClear() {
	firstNum = ""
	displayStr = ""
	secondNum = ""
	pendingOperation = ""
	console.log("Clear!");
	document.getElementById('input-number').value = firstNum;
}