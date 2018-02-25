// Write a function called characPosit, when provided with a letter, return its position in the alphabet.
// 	Input :: "a"
// 	Ouput :: "Position of alphabet: 1"
	function characPosit(character){
		//your code is here
		var arr = ['a','b','c','d','e','f','g','h',
		'i','j' ,'k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
		for (var i = 0; i < arr.length; i++) {
			if(character ===arr[i])
			{
				return i=i+1;
			}
		}
	}
// Write a function called repeatStr which repeats the given
// string string exactly n times.
// repeatStr("hello",4) ==> 'hellohellohellohello'
	
	function repeatStr (n, s) {
		//your code is here
		var repeats = "";
		for (var i = 0; i < s; i++) {
			repeats +=n;
		}
		return repeats;
	}