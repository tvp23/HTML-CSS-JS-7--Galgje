
var wordlist =  ["apple", "car", "house", "button", "trail", "plantation", "sack", "sincere", "gorgeous", "watch", "reject", "matter", "mind", "auspicious", "account"]

//wordlistlength
var wordlistlength = wordlist.length;


//randomword
var randomword = Math.floor((Math.random() * wordlistlength) + 0);


//wordlist char split
var wordsplited = wordlist[randomword].split("");


//wordbox
var lettercounter = 0

wordsplited.forEach(element => {
  var div = document.createElement('div');
  div.textContent = "_";
  div.setAttribute('id', lettercounter);
  div.setAttribute('class', 'Word');
  document.getElementById('galgjeword').appendChild(div);
  lettercounter ++;
});

//game var
var inputs = [""];
var input;
var points;
var gameover = false;
var damagepoint = 0;
var overflow = 0;
var anwsertrue = 0;
var falseinput = 0;
var correctanwser = 0;
var gamewon = false;
var gamelost = false;

//event listener
window.addEventListener('keydown', function(e){
  input = e.key;

  //false input check
  for(x = 0; x<inputs.length; x++){
    if(input==inputs[x]){
      falseinput++;
    }
  }
  if(falseinput==0){
    //adds input to inputedlist
    inputs.push(input)

    //the game
    if(gameover == false){
      for(i = 0; i < wordsplited.length; i++){
        if(input == wordsplited[i]){
          document.getElementById(i).innerHTML = input;
          anwsertrue++;
        }
      }
      //life and anwser points
      if(anwsertrue == 0){
        if(overflow == 0){
          damagepoint++;
          overflow++;
        }
      }
      //pointcounter
      correctanwser += anwsertrue
    }
    //gamecomple check
    if(gamewon == false){
      if(correctanwser == wordsplited.length){
        //creates a div showing winning message
        var div = document.createElement('div');
        div.textContent = "You finished the game!!!";
        div.setAttribute('id', 'gamewon');
        document.getElementById('gameover').appendChild(div);
  
        gamewon = true;
        gameover = true;
      }
    }

    //gameover check
    if(gamelost == false){
      if(damagepoint == 11){
        var div = document.createElement('div');
        div.textContent = "You lost the game";
        div.setAttribute('id', 'gamelost');
        document.getElementById('gameover').appendChild(div);
        gamelost = true;
        gameover = true;
      }
    }

  }
  //var reset
  overflow = 0;
  anwsertrue = 0;
  falseinput = 0;
  document.getElementById('imglifepoints').src = 'img/galgje/state'+damagepoint+'.png';
})
