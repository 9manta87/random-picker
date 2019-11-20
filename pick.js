const NEW_OPTIONS = localStorage.getItem('options'),
      parsedNewOptions = JSON.parse(NEW_OPTIONS),
      OPTION_NUMBER = Object.keys(parsedNewOptions).length;

function showAnswer(idNumber){
    const targetList = document.getElementById(`${idNumber}`);
    targetList.classList.add('picked');
    $(".ran-input").attr("placeholder", 'Just do it!');
}

function genRandom(event){
//    targetList.classList.remove('picked');
    
    const idNumber = Math.ceil(Math.random() * OPTION_NUMBER);
    showAnswer(idNumber);
}

function handleReset(event){
    const list = document.querySelector(".ran-list");
    while (list.firstChild){
        list.removeChild(list.firstChild);
    };
    localStorage.removeItem('options');
    $(".ran-input").attr("placeholder", 'Type what to do.');
}

function init(){
    const buttons = document.querySelector(".buttons"),
          pickButton = buttons.querySelector(".pick"),
          resetButton = buttons.querySelector(".reset");
    
    pickButton.addEventListener('click', genRandom);
    resetButton.addEventListener('click', handleReset);
}

init();