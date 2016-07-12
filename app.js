
$(document).ready(function(){
	function intro(){
	var hey = prompt('Instructions: please submit an integer below', '2');
document.write('<ul>')
	for(var i = 1; i <= hey; i++){
	  if (i % 5 === 0 && i % 3 === 0){
			document.write('<li> fizzbuzz </li>' )
		} else if ( i % 3 === 0) {
			document.write('<li> fizz </li>');
		} else if( i % 5 === 0){
			document.write('<li> buzz </li>');
		} else {
			document.write('<li>' + i + '</li>');
		}
	}
	document.write('</ul>')
}
intro();
});
	// document.write('<ul>')
	// for(var i = 1; i <= 100; i++){
	//   if (i % 5 === 0 && i % 3 === 0){
	// 		document.write('<li> fizzbuzz </li>' )
	// 	} else if ( i % 3 === 0) {
	// 		document.write('<li> fizz </li>');
	// 	} else if( i % 5 === 0){
	// 		document.write('<li> buzz </li>');
	// 	} else {
	// 		document.write('<li>' + i + '</li>');
	// 	}
	// }
	// document.write('</ul>')

	