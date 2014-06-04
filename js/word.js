var myArr = ["link", "equivocal", "cunning", "positivity", "algorithm", "random",
    "ambitious", "career", "mysterious", "spooky"
];
var rightChar={};
var answerWord="later";
$(document).ready(function () {
    $("#submit").click(function(e){
    	e.preventDefault();
    	var character=$("#letter").val();
    	$("#letter").val("");
    	if(answerWord.indexOf(character) !=-1){
    		$("#guess").text("that's right !");
    		rightChar[character]=100;
    	}
    	else {
    		$("#guess").text("that's wrong !");
    	}
    	$("#game").text( getAnswerDisplay() );
    
if( gameOver() ){
	$("#guess").text("you won !");
}
    		
    })
    function gameOver(){
		for(var i=0;i<answerWord.length;i++){
         	if(!rightChar.hasOwnProperty(  answerWord.charAt(i) )){
 return false
         	}
		}

    	return true;
    }
    function getAnswerDisplay(){
         
         var output="";
         
         for(var i=0;i<answerWord.length;i++){
         	if(rightChar.hasOwnProperty(  answerWord.charAt(i) )){
output += answerWord.charAt(i);
         	}else{
output += "_";
         	}

output += " ";

         }


         return output;
    }
})

