$(document).ready(function(){
	for(var i = 1; i <= 100; i++){
		if( i % 3 === 0){
			$(document).append('fizz');
		}else if( i % 5 === 0){
			$(document).append('buzz');
		}else if(i % 3 !== 0 || i % 5 !== 0){
			$(document).append(i);
		}else if(i % 5 === 0 && i % 3 === 0){
			$(document).append('fizzbuzz')
		}
	}
});