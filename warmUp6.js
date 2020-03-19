// Style your code and explain it step by step before jumping to code :D
// Read carefully, focus and test your code :) ... /\ HaPPy HaCkInG /\

// 1-Define a function called myTrueFun that returns true whenever its called.
//normal styling and clear so any coder can understand my code easy || its a function that takes a value as a parameter and what ever the value it will return true anyways. 
function myTruezFun(x){
	if (x = x){
		return true;
	};
};

// 2- Define a function called color in which returns true if type of the input is string and returns false otherwise.
//this function accepts a value as a parameter and return a boolean so if parameter is a string it returns true if not it returns false .

// 3-Write a JavaScript function that accepts a number as a parameter and check if the number is prime or not.
function tesPrime(x){
  if (x === 1){
    return false;
  };
  else if(x === 2){
    return true;
  };
  else{
   for(var y = 2; y < x; y++){
      if(x % y === 0){
        return false;
  };
};
    return true;  
  };
};

// 4-write a function that accepts two numbers as parameters and returns true if the two parameters have the same value , false if not
function same(x,y){
	if (x === y){
		return true;
	};
        return false;  	
};
