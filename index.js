function shout(string){
  return string.toUpperCase ()
  
}

function whisper(string) {
  return string.toLowerCase ()
  
}

function logShout(string) {
 console.log(string.toUpperCase());
}

logShout('hello')


function logWhisper(string) {
  console.log(string.toLowerCase())
}

logWhisper('HELLO')

function sayHiToGrandma(string) {
<<<<<<< HEAD
  if (string.toUpperCase() === string) {
    return ("YES INDEED!")
  }
  else if (string.toLowerCase() === string) {
    return ("I can't hear you!")
    }
  else { return ("I love you, too.")}
}
=======
  var lowercase = string === "hello!"
  var uppercase = string === "HELLO!"
  var love = 'I love you, Grandma!'
  if (love) {
    return ("I love you, too.") }
  else if (lowercase )  { 
    return ("I can't hear you!") }
  else if (uppercase) {
    return ("YES INDEED!") }

  }


sayHiToGrandma ('hello!')
>>>>>>> a7ad3fd0b995dc99b8055b3c6ec4308263bb9d06
