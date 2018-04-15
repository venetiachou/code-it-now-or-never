var btn = document.getElementById('btn');
var input = document.getElementById('input');
var randomNumber = Math.ceil(Math.random()*100);
var tries = 0;

console.log(randomNumber);

function resetGame(){
  tries = 0;
  randomNumber = Math.ceil(Math.random() *100);
  console.log(randomNumber)
}


function onClick(){
  var value = Number(input.value);
  
  if (isNaN(value)) {
    return alert('please enter numbers');
  }


  if (value == randomNumber) {
    alert('yep! you are right');
  }

  else {
    alert('nope! it is not the correct answer.')
  }

  tries++; // tries = tries + 1 they are the same
  if (tries == 3) {
    alert('you guess too many times. the correct answer is ' + randomNumber );
  }
};

btn.addEventListener('click', onClick);


