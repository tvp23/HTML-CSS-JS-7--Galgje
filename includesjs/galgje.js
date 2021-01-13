var wordlist = ["apple", "car", "house"];


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
  div.textContent = "";
  div.setAttribute('id', lettercounter);
  document.body.appendChild(div);
  lettercounter ++;
});

//your geuss
var inputs = [""];
var input;
var points;
var gameover = false;
var livepoint = 5;
var overflow = 0;
var anwsertrue = 0;
var falseinput = 0;


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
      //wrong anwser check
      if(anwsertrue == 0){
        if(overflow == 0){
          livepoint--;
          overflow++
        }
      }
    }
    //gameover check
    if(livepoint == 0){
      gameover = true;
    }
    //var reset
    overflow = 0;
    anwsertrue = 0;
  }
})