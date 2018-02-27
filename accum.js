// This time no story, no theory. The examples below show you what do you need, write a function to accomplich that
// Examples:
// accum("abcd");    // "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    // "C-Ww-Aaa-Tttt"

    function accum(input){
        //your code is here
        var arr = input.split('');
        var str='';
        for (var i = 0; i < arr.length; i++) {
        	for (var j = 0; j < i+1; j++) {
        		if(j===0)
        		{
        		str +=arr[i].toUpperCase() ;
        	}else{
        		str +=arr[i].toLowerCase() ;
        	}
        	}
        	if(i ===arr.length-1){
        	str +=''
        	}else{
        	str +='-'
        }
        }
        return str;
    }