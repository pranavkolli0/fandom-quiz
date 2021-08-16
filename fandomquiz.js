
var readlinesync=require('readline-sync')
var score=0
function play(question,answer){
  var userAnswer=readlinesync.question(question)
  if(userAnswer.toLowerCase()==answer.toLowerCase()){
    console.log("You are right!!!")
    score+=1
  }
  else{
    console.log("You are wrong :( ")
    score-=1
  }
}

questions=[{question:"Star-Lord is half Human and half what? ",answer:"Celestial"},{question:"When was the first time we saw Spider-Man (Not including Iron Man 2) ?",answer:"Captain America: Civil War"},{question:"The name of the A.I inside Spider-Man's suit in Spider-Man Homecoming is? ",answer:"Karen"},{question:"What did Loki steal from Odin's Vault right before Asgard was destroyed? ",answer:"The Tesseract (Space Stone)"},{question:"What was Doctor Strange's job before he became a sorcerer? ",answer:"A Doctor"},{question:"Pietro was killed by who? ",answer:"Ultron"},{question:"What is the first mcu film released? ",answer:"Iron Man"},{question:"The Infinity Stone in vision is? ",answer:"The Mind Stone"},{question:"Where is stark tower? ",answer:"New York"}]

var userName=readlinesync.question("Hey! What is your name??")
console.log("Hi "+userName+"! Let's play Avengers fandom quiz....")
console.log("Please use the below options to choose the right answer for a question")
console.log("Celestial "+"\n"+"Captain America: Civil War"+"\n"+"Karen"+"\n"+"The Tesseract (Space Stone)"+"\n"+"New York"+"\n"+"The Mind Stone"+"\n"+"Iron Man"+"\n"+"Ultron"+"\n"+"A Doctor")
for(i=0;i<questions.length;i++){
  play(questions[i].question,questions[i].answer)
}
console.log("Your final score: "+score)