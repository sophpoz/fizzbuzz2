	document.write('<ul>')
	for(var i = 1; i <= 100; i++){
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