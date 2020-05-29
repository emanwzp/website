
// }());    when this is used, it is not being run properly for some reason
'use strict';
    function submitAnswer(key){
        if (key=='yes'){
          if(localStorage.yes){
            localStorage.yes = Number(localStorage.yes) + 1;
          }
          else{
            localStorage.yes = 1;
          }
        }
        if (key=='no'){
          if(localStorage.no){
            localStorage.no = Number(localStorage.no) + 1;
          }
          else{
            localStorage.no = 1;
          }
        }
        /* this makes sure that even if the key as not yet been defined(first time using the poll one of the answers will be empty and not defined) it will not give an error */
        if(isNaN(localStorage.yes)){
          localStorage.yes = 0;
        }
        if(isNaN(localStorage.no)){
          localStorage.no = 0;
        }
        afterResults();
      }

      function afterResults(){
        let totalYes = Number(localStorage.yes);
        let totalNos = Number(localStorage.no);

        document.getElementById("poll").innerHTML = "Thank you for your input, currently " + totalYes + " said yes and " + totalNos + " said no.";
      }
