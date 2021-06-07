const chalk = require('chalk');
const log = console.log;
console.log(chalk.blue.bgRed.bold("Hello Friend\n"));  // output
var newGin=require("readline-sync");     
var usname=newGin.question("What's your name?\n");//input
console.log("Welcome "+chalk.red.bold(usname)+"! Let's play!\n");  //concatenation
console.log(chalk.black.bold.bgWhite("There will be 5 questions, for which you have to give correct answers\n")); 
var points=0;
var myquestions=[{                         //array of object
         question:chalk.yellow.bold("\nWhat's my dream job?")+chalk.cyan.bold("\na.Esports\nb.Anime artist\nc.Game Development\nAnswer:"),
         answer:"c"
},
{
         question:chalk.yellow.bold("\nWhat's my favourite?")+             chalk.cyan.bold("\na.Kadhai paneer\nb.Butter Masala\nc.Chana Masala\nAnswer:"),
         answer:"a"
},
{
         question:chalk.yellow.bold("\nWhich thing facinates me the most?")+chalk.cyan.bold("\na.gaming\nb.Anime\nc.Music\nAnswer:"),
         answer:"a"
},
{
         question:chalk.yellow.bold("\nWho is my idol?")+chalk.cyan.bold("\na.Dwayne Johnson\nb.Mike Tyson\nc.Game Development\nAnswer:"),
         answer:"b"
},
{
         question:chalk.yellow.bold("\nWhat is one thing i can't stop watching?")+chalk.cyan.bold("\na.Web Series\nb.Anime \nc.Drama\nAnswer:"),
         answer:"b"    
}
]
var highscore=[
{
         name:"Karthik",
         points:"4"

},
{
         name:"Dinesh",
         points:"3"

},
{
         name:"Nil",
         points:"0"

}

]

for(i=0;i<myquestions.length;i++)
{
  var current=myquestions[i];
  check(current.question,current.answer);
  
}
function check(question,answer)
{
  var userans= newGin.question(question);
  if(userans==answer)
  {
    console.log(chalk.green.bold("\nCorrect!, Answer was "+answer));
    points=points+1;
    console.log(chalk.green.bold("\nCurrent Score "+points));
  }else{
    console.log(chalk.red.bold("\nWrong!, Answer was "+answer+"\nCurrent Score "+points));
    
  }
}
console.log(chalk.magenta.bold("\nFinal Score "+points)+"\n"+chalk.bold("\nHigh Scores"));
highscore.map(points => console.log(points));
if(highscore[2].points<points)
{
  console.log(chalk.white.bold.bgBlack("\nContact Me!, You have beaten the highscore "));
}

