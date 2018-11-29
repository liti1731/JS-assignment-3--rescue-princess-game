var currentRoom="central room";
var eastWindow="window";
var northRoom="poisoned apple and long hair";
var westRoom="princess";
var description=true;
var question=" Now, you have to make a choice. \n1.East window \n2.North door \n3.West door";

var takeHair=false;
var takePrincess=false;


function centralRoom(){
	var theWitch=Math.round(Math.random()*2);
    if (description==true) {
	    var wakeUp="When you wake up, you just find you are in the center of a tower. There is no entrance or stairs in this 100-meter tall tower. You are so confused why you are there, but the only thing is important now is escaping from there. In front of you, there are two doors and also a big window in the eastern corner.";
        question=wakeUp+question;
    }else{
    	question=" Now, you are in the central room again and have to make a choice. \n1.East window \n2.North door \n3.West door";
    }

    var choice=prompt(question);  
	    if (choice==1) {
	    	if (theWitch==1) {
                return witch();
            }else{

		    	var bigWindow=confirm("From the window, you see how high the tower is. Would you want to get down from the window?");
		        if (bigWindow==true) {
		        	  if (takeHair==true && takePrincess==true) {
		                   return win();
		        	  }else if (takeHair==true && takePrincess==false){
	                       return alone();
	                  }else{
		                   return flyFromWindow();
		              }
		        
		        }else{
		        	  description=false;
		              goBack();
		        }   
	    
            }
	    }else if(choice==2){
	    	if (theWitch==2) {
                return witch();
            }else{
			    	var appleHair=prompt("The room is empty and you see there is a red apple and a long hair on the table, which one would you take?1. the red apple 2. the long hair");
			        

			        if (appleHair==1) {
			              return dieApple();
			        }else if(appleHair==2){
			        	  alert("You successfully took the long hair.");
			        	  takeHair=true;
			        	  description=false;
			        	  goBack();
			        }
	   
            }


	    }else if (choice==3) {
	    	if (theWitch==3) {
                return witch();
            }else{
			        var princess=confirm("To your surprise, when you open the door, you see a beautiful princess crying in the room. Would you take her with you?");
			        if (princess==true) {
			              alert("The princess is with you now.");
			              takePrincess=true;
			        	  description=false;
			        	  goBack();
			        }else{
			        	  description=false;
			        	  goBack();
			        }
            }
	    }

    
}

function goBack(){
	centralRoom();
}
function flyFromWindow() {
	document.write("Sorry, you know how high the tower is, you die as a pie.");
}
function dieApple() {
	document.write("Sorry, You feel so hungry, so you eat that apple. After one minute, you turn to totally green. That is your last thought.");
}
function witch() {
	document.write("Aaa! The old witch is already, you are forced to get marry with her. ");
}
function win() {
	document.write("Yeahhh! You use the long hair and successfully get down from the tower with the princess. Since that, you and the princess have the happiness forever.");
}
function alone() {
	document.write("You successfully eascape from the tower, but you will be alone forever. ");
}
