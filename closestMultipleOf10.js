 // Given a number return the closest number to it that is divisible by 10.
 // Example :
	// 22 ===> 20
	// 25 ===> 30
	// 37 ===> 40
 function closestMultipleOf10(num) {
 	//your code is here
 	if(num/10 > num%10){
 		if(num%10 !==0){
 			return closestMultipleOf10(num-1);
 		}else{
 			return num;
 		}

 	}else{
 		if(num%10 !==0){
 			return closestMultipleOf10(num+1);
 	}else{
 		return num
 	}
 	}
 	

 }