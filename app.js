function promptUser(){
  var hey = prompt('Instructions: please enter an integer');
  hey = parseInt(hey);
  // VALIDATE!
    return hey;
  
};


var usersNumber = promptUser();

function fizzbuzz(hey){
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
};
fizzbuzz(usersNumber); 


