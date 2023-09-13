const input = document.querySelector("input"),
guess = document.querySelector(".guess"),
checkButton = document.querySelector("button"),
remainChances = document.querySelector(".chances");

input.focus();

let randomNum = Math.floor(Math.random() * 100);

chance = 10;


checkButton.addEventListener("click", () => {
  chance--;
  let inputValue = input.value;
  if (inputValue == randomNum) {
    [guess.textContent, input.disabled] = ["Parabéns!", true];
    [checkButton.textContent, guess.computedStyleMap.color] = ["Repetir", "#333"];
}else if(inputValue > randomNum && inputValue < 100){

    
    [guess.textContent, remainChances.textContent] = ["Seu palpite é alto", chance];
    guess.computedStyleMap.color = "#333";
  }else if(inputValue < randomNum && inputValue > 0){
    [guess.textContent, remainChances.textContent] = ["Seu palpite é baixo", chance];
    guess.computedStyleMap.color = "#333";
  }else {
    [guess.textContent, remainChances.textContent] = ["Seu número é inválido", chance];
    guess.style.color = "#de0611";
  }

  if(chance == 0) {
    [checkButton.textContent, input.disabled, inputValue] = ["Repetir", true, ""];
    [guess.textContent, guess.style.color] = ["Perdes-te o jogo:(", "#de0611"];

  }
  if (chance < 0) {
    window.location.reload();
  }
  
});