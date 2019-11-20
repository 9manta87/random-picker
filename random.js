const OPTIONS = 'options',
      RAN_FORM = document.querySelector('.ran-form'),
      RAN_INPUT = document.querySelector('.ran-input'),
      RAN_LIST = document.querySelector('.ran-list');
let OPTION_LIST = [];

function delOptions(event){
    const targetBtn = event.target;
    const targetLi = targetBtn.parentNode;
    RAN_LIST.removeChild(targetLi);

    let cleanOption = OPTION_LIST.filter(function(berry){
        return berry.id !== parseInt(targetLi.id); 
    });
    OPTION_LIST = cleanOption;
    saveOptions();
}

function saveOptions(){
    
    localStorage.setItem(OPTIONS, JSON.stringify(OPTION_LIST));
}

function showOptions(currentValue){
    const li = document.createElement('li'),
          aBtn = document.createElement('a'),
          span = document.createElement('span');
    const newID = OPTION_LIST.length + 1;
    const optionsObj = {
            id: newID,
            text: currentValue
          };
    aBtn.addEventListener('click', delOptions);
    span.innerHTML = currentValue;
    
    li.appendChild(span);
    li.appendChild(aBtn);
    li.id = newID;
    RAN_LIST.appendChild(li);
    
    OPTION_LIST.push(optionsObj);
    saveOptions();
}

function handleOptions(event){
    event.preventDefault();
    const currentValue = RAN_INPUT.value;
    showOptions(currentValue);
    RAN_INPUT.value = "";   
}

function loadOptions(){
    const loadedOptions = localStorage.getItem(OPTIONS);
    
    if(loadedOptions !== null){
        const parsedOptions = JSON.parse(loadedOptions);
        parsedOptions.forEach(function(option){
            showOptions(option.text);
        });
    }    
}

function init(){
    RAN_FORM.addEventListener('submit', handleOptions);
    loadOptions();
}

init();