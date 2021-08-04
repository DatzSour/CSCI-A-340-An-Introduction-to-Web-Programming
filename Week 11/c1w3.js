   var number = Math.floor(Math.random() * 50) + 1;
   for (var i = 1; i <= 6; i++) {
       var guess = window.prompt('Enter guess #' + i + ' (an integer between 1 and 50)');
       if (guess < number) {
           alert('Too small');
       } else if (guess > number) {
           alert('Too big');
       } else {
           alert('Got it');
           break;
       }
       if (i === 6) {
           alert('You have tried 6 times.');
       }
   }