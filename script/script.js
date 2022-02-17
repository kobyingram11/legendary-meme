// $ = jQuery's way of naming its stuff.
// $( ... ) = what's inside () is the "object" we are messin with
// .ready() = method of $jQ
// .ready( ... ) = argument/parameter passed to that method
// function(){} in the method is an IIFE = Immediately Invoked F/n Expresson
$(document).ready(function(){ 
  console.log("doc is ready");

  $("#btnGetFacts").click(function (){

    //if (typeof userName !== 'string'){
      //let coolFacts='not string';
       //return coolFacts;
    //}
  
      let userName = $("#userName").val();
      let coolFacts = generateCoolNameFacts(userName);
      

        $("#coolNameFactsOutput").html(coolFacts);
        
      });

});

function generateCoolNameFacts(userName){
  let coolFacts='';


  coolFacts = nameLength(userName);
  coolFacts += "<h2>" + nameStart(userName) + "</h2>";
  coolFacts += "<h2>" + nameEnd(userName) + "</h2>";
  coolFacts += "<h2>" + nameReverse(userName) + "</h2>";

  return coolFacts;
}

function nameLength(name){
  return "Your name is " + name.length + " letters long";
}

function nameStart(name){
  return "The First letter is " + name.charAt(0);
}

function nameEnd(name){
  let lastIndex = name.length - 1
  return "The Last letter of your name is " + name[lastIndex]
}

function nameReverse(name){
  return "I put my thing down, flip it and reverse it: " + name.split("").reverse().join("");
}



//$ = jquery's way of naming stuff
//$(...) = what's inside () is the "object" we are messing with
// .ready() = method of $jQ
// .ready(...) = argument/parameter passed to that method
// function(){} in the method is an IIFE = Immediate Invoked F/n Expression


  // let userGreeting = "You are enough, ";
  
  // $("button").click(function(){
  //   userGreeting = userGreeting + $("#fname").val() + "...just as you are.";
    
  //   $("#greetingOutput").text(userGreeting);
    
    
  //   //console.log($("#fname").val());


    
  // });
});
