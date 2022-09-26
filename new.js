//startfunction

function start(){

    //document getelement start button

    document.getElementById("startButton").disabled = true;
    alert("you have pushed start");

    //document getelement stop button

    document.getElementById("stopButton").disabled = false;
    
    }
    function stop(){
        document.getElementById("startButton").disabled = false;
        document.getElementById("stopButton").disabled = true;
        alert("you have pushed the stop button")
        
    }
   
 
