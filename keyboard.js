const header = document.createElement('h3');
document.body.append(header);
header.textContent = "Клавиатура для Windows , смена раскладки Shift + Ctrl слева";
const text = document.createElement('textarea');
text.setAttribute('autofocus', '');
text.classList.add('keyboard__window');
document.body.append(text);

const simpleEng = [
    '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\',
    'Capslock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter',
    'ShiftLeft', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ShiftRight',
    'Ctrl', 'Win', 'Alt', 'Space', ' Alt', 'Ctrl', '←', '↑', '↓', '→',
  ];

const capsEng = [
  '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
  'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\',
  'Capslock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'Enter',
  'ShiftLeft', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'ShiftRight',
  'Ctrl', 'Win', 'Alt', 'Space', ' Alt', 'Ctrl', '←', '↑', '↓', '→',
];

const simpleRu = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\',
'Capslock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
'ShiftLeft', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'ShiftRight',
'Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl','←', '↑', '↓', '→',
]; 

const capsRu = ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace',
'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\',
'Capslock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
'ShiftLeft', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.',  'ShiftRight',
'Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl','←', '↑', '↓', '→',];

const CODE = ["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace", "Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash", "CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter", "ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ShiftRight", "ControlLeft", "MetaLeft", "AltLeft", "Space", "AltRight", "ControlRight", "ArrowLeft", "ArrowUp", "ArrowDown", "ArrowRight"];
const BACKSPACE = 'Backspace';
const CAPSLOCK = 'Capslock';
const ENTER = 'Enter';
const SHIFTL = 'ShiftLeft';
const SHIFTR = 'ShiftRight';
const TAB = 'Tab';
const SPACE = 'Space';
const ALT = 'Alt';
const WIN = 'Win';
const CTRL = 'Ctrl';
const keyboard = document.createElement('div');
const keyboardKeys = document.createElement('div');
keyboard.classList.add('keyboard');
keyboardKeys.classList.add('keyboard__keys');
document.body.appendChild(keyboard);
keyboard.appendChild(keyboardKeys);

//ru
const keyboardKeysRu = document.createElement('div');
keyboardKeysRu.classList.add('keyboard__keys');
keyboardKeysRu.classList.add('invisible');
keyboard.appendChild(keyboardKeysRu);

//init keyboard
 function init(keyLayout, keyContainer) {
  keyLayout.forEach( key => {
  const insertLineBreak = ['Backspace', '\\', 'Enter', "ShiftRight"].includes(key) == true;
  const keyElement = document.createElement('button');
  keyElement.classList.add('keyboard__key');
  switch (key) {
    case BACKSPACE:
      keyElement.classList.add('keyboard__key__wider');
      keyElement.textContent = key;
      break;
    
    case CAPSLOCK:
      keyElement.classList.add('keyboard__key__wider');
      keyElement.textContent = key;
      break;
    
    case ENTER:
      keyElement.classList.add('enter');
      keyElement.textContent = key;
      break;
      
    case SHIFTL:
      keyElement.classList.add('shift');
      keyElement.textContent = key;
      break;

    case SHIFTR:
      keyElement.classList.add('shift');
      keyElement.textContent = key;
      break;

    case TAB:
      keyElement.classList.add('keyboard__key__wider');
      keyElement.textContent = key;
      break;

    case SPACE:
      keyElement.classList.add('keyboard__key__extra-wide');
      keyElement.textContent = key;
      break;

     default:
      keyElement.textContent = key;
      break;
   }
  keyContainer.append(keyElement);
  if (insertLineBreak) {
    keyContainer.appendChild(document.createElement('br'));
  } 
 })
};

init(simpleEng, keyboardKeys);
init (simpleRu, keyboardKeysRu);

function addCode (keyContainer) {
  let buttons = keyContainer.querySelectorAll('button');
  for (let i = 0; i< buttons.length;) {
    for (let j = 0; j < CODE.length;) {
      buttons[i].setAttribute('code', CODE[j]);
      i++;
      j++;
    };
  };
}
addCode(keyboardKeys);
addCode(keyboardKeysRu);

// caps on off
let capsFlag = false;
document.addEventListener( 'keyup', event => {
  if(event.code === "CapsLock"){
    capsFlag = !capsFlag;
    if (capsFlag) {
        keyboardKeys.innerHTML = '';
        keyboardKeysRu.innerHTML = '';
        init(capsEng, keyboardKeys);
        init (capsRu, keyboardKeysRu);
        addCode(keyboardKeys);
        addCode(keyboardKeysRu);
    } else {
        keyboardKeys.innerHTML = '';
        keyboardKeysRu.innerHTML = '';
        init(simpleEng, keyboardKeys);
        init( simpleRu, keyboardKeysRu);
        addCode(keyboardKeys);
        addCode(keyboardKeysRu);
    }
  }
})

// change language and highlight
const allButtons = keyboard.querySelectorAll('button');
document.addEventListener( 'keydown', event => {
  if (event.shiftKey && event.code === 'ControlLeft') {
    keyboardKeysRu.classList.toggle('invisible');
    keyboardKeys.classList.toggle('invisible');
  };
  
  allButtons.forEach(button => {
    button.classList.remove('highlight');
    if (button.getAttribute('code') === event.code) {
      button.classList.add('highlight');
    }
  })
})

// input
keyboard.addEventListener('click', event => {
  if (event.target.tagName == 'BUTTON') {
    allButtons.forEach(button => {
      button.classList.remove('highlight');
      event.target.classList.add('highlight');
    });
    let inputText = event.target.innerText;
  switch(inputText) {
    case TAB:
      inputText = '    ';
      break;

    case SPACE:
      inputText = ' ';
      break;

    case ENTER:
      inputText = '\n';
      break;

    case CAPSLOCK:
      inputText = '';
      break;
    
    case SHIFTR:
      inputText = '';
      break;
    
    case SHIFTL:
      inputText = '';
      break;

    case ALT:
      inputText = '';
      break;

    case CTRL:
      inputText = '';
      break;

    case WIN:
      inputText = '';
      break;
    
    case BACKSPACE:
      inputText = '';
      text.value.slice(0, -1);
      break;

    default:
      inputText = event.target.innerText;
      break;
  }
  
  text.oninput = function() {    
     text.value += inputText;
  }
  return text.value += inputText;
}
  })