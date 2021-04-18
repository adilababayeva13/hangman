
//1.column elements
var hint=document.querySelector("#hint");
var answer=document.querySelector("#answer");
var button=document.querySelector("#button");
var congratulations=document.querySelector("#congratulations");

//2.column elements
var wins=document.querySelector(".wins");
var winCount=0;
var word=document.querySelector(".word");
var remain=document.querySelector(".remain");
var remainCounter=6;
var guessed=document.querySelector(".guessed");
var btn=document.querySelector("#btn");

//3.column elements
var hangman=document.querySelector(".hangman");

//hangman
function hangMan(){
    if(remainCounter ==6){
        hangman.innerHTML="<img src=./assets/images/1.jpeg>";
    }
     else if(remainCounter ==5){
        hangman.innerHTML="<img src=./assets/images/2.jpeg>";
    }
    else if(remainCounter ==4){
        hangman.innerHTML="<img src=./assets/images/3.jpeg>";
    }
   else if(remainCounter ==3){
        hangman.innerHTML="<img src=./assets/images/4.jpeg>";
    }
   else if(remainCounter ==2){
        hangman.innerHTML="<img src=./assets/images/5.jpeg>";
    }
    else if(remainCounter ==1){
        hangman.innerHTML="<img src=./assets/images/6.jpeg>";
    }
    else if(remainCounter ==0){
     
        hangman.innerHTML="<img src=./assets/images/7.jpeg>";
        game();

    }
}

//GAME
function game(){
    remainCounter=7;
    remain.innerHTML=remainCounter;
    hangman.innerHTML="";
    hint.innerHTML="";
    answer.innerHTML="";
    congratulations.innerHTML="";
var guessedLetter=[];
guessed.innerHTML=guessedLetter;

var i=Math.floor(Math.random()*6)+1;


switch(i) {
    case 1:
        button.addEventListener("click",function(){
            hint.innerHTML="Someone who always claims to be Ted's best friend.";
        });
  var ans=["b","a","r","n","e","y"];
  var ques=["_","_","_","_","_","_"];
  word.innerHTML=ques;
  document.onkeypress=function(e){
      var letter=e.key;
       if(ques.indexOf("_") ==-1){
           
          setTimeout(function(){
            game();
          }, 5000);
          winCount++
          wins.innerHTML=winCount;
          answer.innerHTML="<img src=./assets/images/barney.jpg>";
          congratulations.innerHTML="Congratulations, Please wait 5 seconds for the new game ...";
       
    
    }
      else if(ans.indexOf(letter) ==-1){
          if(guessedLetter.indexOf(letter) ==-1){
          guessedLetter.push(letter);
          guessed.innerHTML=guessedLetter;
          remainCounter--;
          remain.innerHTML=remainCounter;
          hangMan();
      }}
    
      else {
       var n=ans.indexOf(letter);
       ques[n]=letter;
       word.innerHTML=ques;
     
  }
}


  
 break;

  case 2:
    button.addEventListener("click",function(){
        hint.innerHTML="Someone who was kindergarten teacher.";
    });
var ans=["l","i","l","y"];
var ques=["_","_","_","_"];
word.innerHTML=ques;
document.onkeypress=function(e){
  var letter=e.key;
   if(ques.indexOf("_") ==-1){
       
      setTimeout(function(){
        game();
      }, 5000);
      winCount++
      wins.innerHTML=winCount;
      answer.innerHTML="<img src=./assets/images/lily.jpg>";
      congratulations.innerHTML="Congratulations, Please wait 5 seconds for the new game ...";
   

}
  else if(ans.indexOf(letter) ==-1){
      if(guessedLetter.indexOf(letter) ==-1){
      guessedLetter.push(letter);
      guessed.innerHTML=guessedLetter;
      remainCounter--;
      remain.innerHTML=remainCounter;
      hangMan();
  }}

  else {
   var n=ans.indexOf(letter);
   ques[n]=letter;
   word.innerHTML=ques;
   if(letter=="l"){
     ques[2]="l";
     word.innerHTML=ques;
   }
 
}
}

   
      break;

    case 3:
        button.addEventListener("click",function(){
            hint.innerHTML="Someone who always competes with machines.";
        });
  var ans=["m","a","r","s","h","a","l","l"];
  var ques=["_","_","_","_","_","_","_","_"];
  word.innerHTML=ques;
  document.onkeypress=function(e){
      var letter=e.key;
       if(ques.indexOf("_") ==-1){
           
          setTimeout(function(){
            game();
          }, 5000);
          winCount++
          wins.innerHTML=winCount;
          answer.innerHTML="<img src=./assets/images/marshall.jpg>";
          congratulations.innerHTML="Congratulations, Please wait 5 seconds for the new game ...";
       
    
    }
      else if(ans.indexOf(letter) ==-1){
          if(guessedLetter.indexOf(letter) ==-1){
          guessedLetter.push(letter);
          guessed.innerHTML=guessedLetter;
          remainCounter--;
          remain.innerHTML=remainCounter;
          hangMan();
      }}
    
      else {
       var n=ans.indexOf(letter);
       ques[n]=letter;
       word.innerHTML=ques;
      
       if(letter=="l"){
        ques[7]="l";
        word.innerHTML=ques;
      }
      if(letter=="a"){
        ques[5]="a";
        word.innerHTML=ques;
      }
     
  }
}

   
        break;
     case 4:
        button.addEventListener("click",function(){
            hint.innerHTML="Someone who defrauded Barney.";
        });
  var ans=["q","u","i","n","n"];
  var ques=["_","_","_","_","_"];
  word.innerHTML=ques;
  document.onkeypress=function(e){
      var letter=e.key;
       if(ques.indexOf("_") ==-1){
           
          setTimeout(function(){
            game();
          }, 5000);
          winCount++
          wins.innerHTML=winCount;
          answer.innerHTML="<img src=./assets/images/Quinn.jpg>";
          congratulations.innerHTML="Congratulations, Please wait 5 seconds for the new game ...";
       
    
    }
      else if(ans.indexOf(letter) ==-1){
          if(guessedLetter.indexOf(letter) ==-1){
          guessedLetter.push(letter);
          guessed.innerHTML=guessedLetter;
          remainCounter--;
          remain.innerHTML=remainCounter;
          hangMan();
      }}
    
      else {
       var n=ans.indexOf(letter);
       ques[n]=letter;
       word.innerHTML=ques;
       if(letter=="n"){
        ques[4]="n";
        word.innerHTML=ques;
      }
     
  }
}

        
        break;
     case 5:
        button.addEventListener("click",function(){
            hint.innerHTML="Someone who was news anchorman by profession";
        });
  var ans=["r","o","b","i","n"];
  var ques=["_","_","_","_","_"];
  word.innerHTML=ques;
  document.onkeypress=function(e){
      var letter=e.key;
       if(ques.indexOf("_") ==-1){
           
          setTimeout(function(){
            game();
          }, 5000);
          winCount++
          wins.innerHTML=winCount;
          answer.innerHTML="<img src=./assets/images/robin.jpg>";
          congratulations.innerHTML="Congratulations, Please wait 5 seconds for the new game ...";
       
    
    }
      else if(ans.indexOf(letter) ==-1){
          if(guessedLetter.indexOf(letter) ==-1){
          guessedLetter.push(letter);
          guessed.innerHTML=guessedLetter;
          remainCounter--;
          remain.innerHTML=remainCounter;
          hangMan();
      }}
    
      else {
       var n=ans.indexOf(letter);
       ques[n]=letter;
       word.innerHTML=ques;
     
  }
}

        break;
    case 6:
        button.addEventListener("click",function(){
            hint.innerHTML="Someone who left ted on her wedding day.";
        });
  var ans=["s","t","e","l","l","a"];
  var ques=["_","_","_","_","_","_"];
  word.innerHTML=ques;
  document.onkeypress=function(e){
      var letter=e.key;
       if(ques.indexOf("_") ==-1){
           
          setTimeout(function(){
            game();
          }, 5000);
          winCount++
          wins.innerHTML=winCount;
          answer.innerHTML="<img src=./assets/images/stella.jpg>";
          congratulations.innerHTML="Congratulations, Please wait 5 seconds for the new game ...";
       
    
    }
      else if(ans.indexOf(letter) ==-1){
          if(guessedLetter.indexOf(letter) ==-1){
          guessedLetter.push(letter);
          guessed.innerHTML=guessedLetter;
          remainCounter--;
          remain.innerHTML=remainCounter;
          hangMan();
      }}
    
      else {
       var n=ans.indexOf(letter);
       ques[n]=letter;
       word.innerHTML=ques;
       if(letter=="l"){
        ques[4]="l";
        word.innerHTML=ques;
      }
     
  }
}

         break;
     case 7:
        button.addEventListener("click",function(){
            hint.innerHTML="Someone who was telling his kids how he met their mother";
        });
  var ans=["t","e","d"];
  var ques=["_","_","_"];
  word.innerHTML=ques;
  document.onkeypress=function(e){
      var letter=e.key;
       if(ques.indexOf("_") ==-1){
           
          setTimeout(function(){
            game();
          }, 5000);
          winCount++
          wins.innerHTML=winCount;
          answer.innerHTML="<img src=./assets/images/ted.jpg>";
          congratulations.innerHTML="Congratulations, Please wait 5 seconds for the new game ...";
       
    
    }
      else if(ans.indexOf(letter) ==-1){
          if(guessedLetter.indexOf(letter) ==-1){
          guessedLetter.push(letter);
          guessed.innerHTML=guessedLetter;
          remainCounter--;
          remain.innerHTML=remainCounter;
          hangMan();
      }}
    
      else {
       var n=ans.indexOf(letter);
       ques[n]=letter;
       word.innerHTML=ques;
     
  }
}

        break;

    default:
      // code block
  } 

}
game();