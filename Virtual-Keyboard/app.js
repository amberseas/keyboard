class Keyboard {
  constructor() {
    this.header = null;
    this.main = null;
    this.instructions = null;
    this.selectedLanguage = null;
    this.languageKeys = null;
    this.textArea = null;
    this.keysContainer = null;
    this.keys = [];
    this.oninput = null;
    this.value = '';
    this.capsLock = false;
    this.shift = false;
    this.lang = localStorage.getItem('lang') || 'EN';
    this.init();
  }

  init() {
    this.header = document.createElement('h1');
    this.main = document.createElement('div');
    this.textArea = document.createElement('textarea');
    this.textArea.autofocus = true;
    this.instructions = document.createElement('div');
    this.selectedLanguage = document.createElement('p');
    this.languageKeys = document.createElement('p');
    this.keysContainer = document.createElement('div');

    // Setup main elements
    this.header.textContent = 'Virtual Keyboard (Windows OS)';
    this.header.classList.add('header');
    this.main.classList.add('keyboard');
    this.instructions.classList.add('instructions');
    this.languageKeys.textContent = 'Press Ctrl + Alt to toggle between English and Lithuanian languages.';
    this.selectedLanguage.textContent = `Language: ${this.lang}`;
    this.instructions.appendChild(this.selectedLanguage);
    this.instructions.appendChild(this.languageKeys);
    this.textArea.classList.add('text-area', 'use-keyboard-input');

    this.keysContainer.classList.add('keyboard__keys');
    this.keysContainer.appendChild(this.createKeys());

    this.keys = this.keysContainer.querySelectorAll('.keyboard__key');

    // Add to DOM
    this.main.appendChild(this.instructions);
    this.main.appendChild(this.textArea);
    this.main.appendChild(this.keysContainer);
    document.body.appendChild(this.header);
    document.body.appendChild(this.main);

    // Use keyboard
    const textarea = document.querySelector('.use-keyboard-input');
    textarea.addEventListener('focus', () => {
      this.open(textarea.value, (currentValue) => {
        textarea.value = currentValue;
      });
    });
  }

  createKeys() {
    const fragment = document.createDocumentFragment();
    const keyLayout = [
      '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
      'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete',
      'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter',
      'LeftShift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ArrowUp', 'RightShift',
      'LeftCtrl', 'Meta', 'LeftAlt', ' ', 'RightAlt', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'RightCtrl',
    ];

    const shiftOff = () => {
      if (!this.capsLock) {
        this.shift = false;
        this.toggleShift();
      }
    };

    // Creates HTML for an icon
    const createIconHTML = (iconName) => `<span class="material-symbols-outlined">${iconName}</span>`;

    keyLayout.forEach((key) => {
      const keyElement = document.createElement('button');
      // Line break after these buttons
      const insertLineBreak = ['Backspace', 'DEL', 'Enter', 'RightShift', 'RightCtrl'].indexOf(key) !== -1;

      // Add attributes/classes
      keyElement.setAttribute('type', 'button');
      keyElement.classList.add('keyboard__key');

      // Special keys
      switch (key) {
        case '`': keyElement.classList.add('backqoute'); break;
        case '0': keyElement.classList.add('zero'); break;
        case '-': keyElement.classList.add('minus'); break;
        case '=': keyElement.classList.add('equal'); break;
        case '[': keyElement.classList.add('open-square-br'); break;
        case ']': keyElement.classList.add('close-square-br'); break;
        case '\\': keyElement.classList.add('backslash'); break;
        case ';': keyElement.classList.add('semicolon'); break;
        case '\'': keyElement.classList.add('single-q'); break;
        case ',': keyElement.classList.add('comma'); break;
        case '.': keyElement.classList.add('dot'); break;
        case '/': keyElement.classList.add('fw-slash'); break;
        default:
      }

      switch (key) {
        default:
          keyElement.addEventListener('mousedown', () => {
            keyElement.classList.add('active');
          });
          keyElement.addEventListener('mouseup', () => keyElement.classList.remove('active'));
          keyElement.addEventListener('mouseleave', () => keyElement.classList.remove('active'));
      }

      switch (key) {
        case '1':
          keyElement.classList.add('one');
          keyElement.textContent = this.lang === 'LT' ? 'ą' : '1';
          keyElement.addEventListener('click', () => {
            this.insertByPosition(keyElement.textContent, 1);
          });
          break;
        case '2':
          keyElement.classList.add('two');
          keyElement.textContent = this.lang === 'LT' ? 'č' : '2';
          keyElement.addEventListener('click', () => {
            this.insertByPosition(keyElement.textContent, 1);
          });
          break;
        case '3':
          keyElement.classList.add('three');
          keyElement.textContent = this.lang === 'LT' ? 'ę' : '3';
          keyElement.addEventListener('click', () => {
            this.insertByPosition(keyElement.textContent, 1);
          });
          break;
        case '4':
          keyElement.classList.add('four');
          keyElement.textContent = this.lang === 'LT' ? 'ė' : '4';
          keyElement.addEventListener('click', () => {
            this.insertByPosition(keyElement.textContent, 1);
          });
          break;
        case '5':
          keyElement.classList.add('five');
          keyElement.textContent = this.lang === 'LT' ? 'į' : '5';
          keyElement.addEventListener('click', () => {
            this.insertByPosition(keyElement.textContent, 1);
          });
          break;
        case '6':
          keyElement.classList.add('six');
          keyElement.textContent = this.lang === 'LT' ? 'š' : '6';
          keyElement.addEventListener('click', () => {
            this.insertByPosition(keyElement.textContent, 1);
          });
          break;
        case '7':
          keyElement.classList.add('seven');
          keyElement.textContent = this.lang === 'LT' ? 'ų' : '7';
          keyElement.addEventListener('click', () => {
            this.insertByPosition(keyElement.textContent, 1);
          });
          break;
        case '8':
          keyElement.classList.add('eight');
          keyElement.textContent = this.lang === 'LT' ? 'ū' : '8';
          keyElement.addEventListener('click', () => {
            this.insertByPosition(keyElement.textContent, 1);
          });
          break;
        case '9':
          keyElement.classList.add('nine');
          keyElement.textContent = this.lang === 'LT' ? 'ž' : '9';
          keyElement.addEventListener('click', () => {
            this.insertByPosition(keyElement.textContent, 1);
          });
          break;

        case 'Backspace':
          keyElement.classList.add('keyboard__key--wide', 'keyboard__key--no-left-padd');
          keyElement.innerHTML = createIconHTML('keyboard_backspace');
          keyElement.innerHTML += 'Backspace';

          keyElement.addEventListener('mousedown', () => {
            this.backspace();
          });
          break;

        case 'Tab':
          keyElement.classList.add('keyboard__key--med-large', 'keyboard__key--extra-padd', 'keyboard__key--no-left-padd');
          keyElement.innerHTML = createIconHTML('keyboard_tab');
          keyElement.innerHTML += 'Tab';

          keyElement.addEventListener('mousedown', () => {
            this.insertByPosition('   ', 3);
          });
          break;

        case 'Delete':
          keyElement.classList.add('keyboard__key--med');
          keyElement.innerHTML += 'DEL';

          keyElement.addEventListener('mousedown', () => {
            this.delete();
          });
          break;

        case 'CapsLock':
          keyElement.classList.add('keyboard__key--wide', 'keyboard__key--no-left-padd');
          keyElement.innerHTML = createIconHTML('keyboard_capslock');
          keyElement.innerHTML += 'CapsLock';

          keyElement.addEventListener('click', () => {
            this.toggleCapsLock();
            keyElement.classList.toggle('keyboard__key--activatable');
          });

          window.addEventListener('keydown', (e) => {
            if (e.key === 'CapsLock') {
              keyElement.classList.toggle('keyboard__key--activatable');
            }
          });
          break;

        case 'Enter':
          keyElement.classList.add('keyboard__key--wide');
          keyElement.innerHTML = 'Enter';
          keyElement.innerHTML += createIconHTML('keyboard_return');

          keyElement.addEventListener('mousedown', () => {
            this.insertByPosition('\n', 1);
          });
          break;

        case 'LeftShift':
          keyElement.classList.add('keyboard__key--wide', 'keyboard__key--no-left-padd');
          keyElement.innerHTML = createIconHTML('keyboard_double_arrow_up');
          keyElement.innerHTML += 'Shift';

          keyElement.addEventListener('mousedown', () => {
            if (!this.capsLock) {
              this.shift = true;
              this.toggleShift();
            }
          });

          keyElement.addEventListener('mouseup', shiftOff);
          keyElement.addEventListener('mouseleave', shiftOff);

          window.addEventListener('keydown', (e) => {
            if (e.code === 'ShiftLeft') {
              keyElement.classList.add('active');
            }
          });

          window.addEventListener('keyup', (e) => {
            if (e.code === 'ShiftLeft') {
              keyElement.classList.remove('active');
            }
          });
          break;

        case 'RightShift':
          keyElement.classList.add('keyboard__key--med-large', 'keyboard__key--no-left-padd');
          keyElement.innerHTML = createIconHTML('keyboard_double_arrow_up');
          keyElement.innerHTML += 'Shift';

          keyElement.addEventListener('mousedown', () => {
            this.shift = true;
            this.toggleShift();
          });

          keyElement.addEventListener('mouseup', shiftOff);
          keyElement.addEventListener('mouseleave', shiftOff);

          window.addEventListener('keydown', (e) => {
            if (e.code === 'ShiftRight') keyElement.classList.add('active');
          });
          window.addEventListener('keyup', (e) => {
            if (e.code === 'ShiftRight') keyElement.classList.remove('active');
          });
          break;

        case 'LeftCtrl':
          keyElement.classList.add('keyboard__key--med');
          keyElement.textContent = 'Ctrl';

          window.addEventListener('keydown', (e) => {
            if (e.code === 'ControlLeft') keyElement.classList.add('active');
          });
          window.addEventListener('keyup', (e) => {
            if (e.code === 'ControlLeft') keyElement.classList.remove('active');
          });
          break;

        case 'RightCtrl':
          keyElement.classList.add('keyboard__key');
          keyElement.textContent = 'Ctrl';

          window.addEventListener('keydown', (e) => {
            if (e.code === 'ControlRight') keyElement.classList.add('active');
          });
          window.addEventListener('keyup', (e) => {
            if (e.code === 'ControlRight') keyElement.classList.remove('active');
          });
          break;

        case 'Meta':
          keyElement.classList.add('keyboard__key');
          keyElement.innerHTML = createIconHTML('desktop_windows');
          break;

        case 'LeftAlt':
          keyElement.classList.add('keyboard__key');
          keyElement.textContent = 'Alt';

          window.addEventListener('keydown', (e) => {
            if (e.code === 'AltLeft') keyElement.classList.add('active');
          });
          window.addEventListener('keyup', (e) => {
            if (e.code === 'AltLeft') keyElement.classList.remove('active');
          });
          break;

        case 'RightAlt':
          keyElement.classList.add('keyboard__key');
          keyElement.textContent = 'Alt';

          window.addEventListener('keydown', (e) => {
            if (e.code === 'AltRight') keyElement.classList.add('active');
          });
          window.addEventListener('keyup', (e) => {
            if (e.code === 'AltRight') keyElement.classList.remove('active');
          });
          break;

        case ' ':
          keyElement.classList.add('keyboard__key--extra-wide');

          keyElement.addEventListener('mousedown', () => {
            this.insertByPosition(' ', 1);
          });
          break;

        case 'ArrowUp':
          keyElement.classList.add('keyboard__key');
          keyElement.innerHTML = createIconHTML('keyboard_arrow_up');

          keyElement.addEventListener('mousedown', () => {
            this.insertByPosition('↟', 1);
          });
          break;

        case 'ArrowLeft':
          keyElement.classList.add('keyboard__key');
          keyElement.innerHTML = createIconHTML('keyboard_arrow_left');

          keyElement.addEventListener('mousedown', () => {
            this.insertByPosition('↞', 1);
          });
          break;

        case 'ArrowDown':
          keyElement.classList.add('keyboard__key');
          keyElement.innerHTML = createIconHTML('keyboard_arrow_down');

          keyElement.addEventListener('mousedown', () => {
            this.insertByPosition('↡', 1);
          });
          break;

        case 'ArrowRight':
          keyElement.classList.add('keyboard__key');
          keyElement.innerHTML = createIconHTML('keyboard_arrow_right');

          keyElement.addEventListener('mousedown', () => {
            this.insertByPosition('↠', 1);
          });
          break;

        default:
          keyElement.textContent = key.toLowerCase();

          keyElement.addEventListener('mousedown', () => {
            if (this.capsLock || this.shift) {
              this.insertByPosition(keyElement.textContent.toUpperCase(), 1);
            } else {
              this.insertByPosition(keyElement.textContent.toLowerCase(), 1);
            }
          });
      }

      fragment.appendChild(keyElement);

      if (insertLineBreak) {
        fragment.appendChild(document.createElement('br'));
      }

      window.addEventListener('keydown', (e) => {
        if ((e.key === key || e.key === keyElement.textContent) && e.key !== 'Alt') {
          keyElement.classList.add('active');
        } else if (Keyboard.lang === 'LT') {
          let value;
          switch (key) {
            case 'ą': value = '1'; break;
            case 'č': value = '2'; break;
            case 'ę': value = '3'; break;
            case 'ė': value = '4'; break;
            case 'į': value = '5'; break;
            case 'š': value = '6'; break;
            case 'ų': value = '7'; break;
            case 'ū': value = '8'; break;
            case 'ž': value = '9'; break;
            default:
          }
          if (e.key === value) {
            keyElement.classList.add('active');
          }
        }
      });
      window.addEventListener('keyup', (e) => {
        if ((e.key === key || e.key === keyElement.textContent)) {
          keyElement.classList.remove('active');
        }
      });
    });
    return fragment;
  }

  insertByPosition(key, position) {
    const start = this.textArea.selectionStart;
    if (start === this.value.length) {
      this.value += key;
      this.triggerEvent('oninput');
      this.textArea.focus();
    } else {
      const original = this.value.split('');
      original.splice(start, 0, key);
      this.value = original.join('');
      this.triggerEvent('oninput');
      this.textArea.focus();
      this.textArea.selectionStart = start + position;
      this.textArea.selectionEnd = start + position;
    }
  }

  backspace() {
    const start = this.textArea.selectionStart;
    if (start === 0) {
      this.textArea.focus();
      this.textArea.selectionStart = 0;
    } else if (start === this.value.length) {
      this.value = this.value.slice(0, -1);
      this.triggerEvent('oninput');
      this.textArea.focus();
    } else {
      const original = this.value.split('');
      original.splice(this.textArea.selectionStart - 1, 1);
      this.value = original.join('');
      this.triggerEvent('oninput');
      this.textArea.focus();
      this.textArea.selectionStart = start - 1;
      this.textArea.selectionEnd = start - 1;
    }
  }

  delete() {
    const start = this.textArea.selectionStart;
    if (start !== this.value.length) {
      const original = this.value.split('');
      original.splice(start, 1);
      this.value = original.join('');
      this.triggerEvent('oninput');
      this.textArea.focus();
      this.textArea.selectionStart = start;
      this.textArea.selectionEnd = start;
    }
  }

  triggerEvent(handlerName) {
    if (typeof this[handlerName] === 'function') {
      this[handlerName](this.value);
    }
  }

  toggleCapsLock() {
    this.capsLock = !this.capsLock;

    this.keys.forEach((element) => {
      const key = element;
      if (key.textContent.length === 1) {
        key.textContent = this.capsLock
          ? key.textContent.toUpperCase()
          : key.textContent.toLowerCase();
      }
    });
  }

  toggleShift() {
    this.keys.forEach((element) => {
      const key = element;
      if (key.textContent.length === 1) {
        if (this.lang === 'LT') {
          document.querySelector('.one').textContent = this.shift ? '!' : 'ą';
          document.querySelector('.two').textContent = this.shift ? '@' : 'č';
          document.querySelector('.three').textContent = this.shift ? '#' : 'ę';
          document.querySelector('.four').textContent = this.shift ? '$' : 'ė';
          document.querySelector('.five').textContent = this.shift ? '%' : 'į';
          document.querySelector('.six').textContent = this.shift ? '^' : 'š';
          document.querySelector('.seven').textContent = this.shift ? '&' : 'ų';
          document.querySelector('.eight').textContent = this.shift ? '*' : 'ū';
          document.querySelector('.nine').textContent = this.shift ? '(' : 'ž';
        } else if (this.lang === 'EN') {
          document.querySelector('.one').textContent = this.shift ? '!' : '1';
          document.querySelector('.two').textContent = this.shift ? '@' : '2';
          document.querySelector('.three').textContent = this.shift ? '#' : '3';
          document.querySelector('.four').textContent = this.shift ? '$' : '4';
          document.querySelector('.five').textContent = this.shift ? '%' : '5';
          document.querySelector('.six').textContent = this.shift ? '^' : '6';
          document.querySelector('.seven').textContent = this.shift ? '&' : '7';
          document.querySelector('.eight').textContent = this.shift ? '*' : '8';
          document.querySelector('.nine').textContent = this.shift ? '(' : '9';
        }

        document.querySelector('.backqoute').textContent = this.shift ? '~' : '`';
        document.querySelector('.zero').textContent = this.shift ? ')' : '0';
        document.querySelector('.minus').textContent = this.shift ? '_' : '-';
        document.querySelector('.equal').textContent = this.shift ? '+' : '=';
        document.querySelector('.open-square-br').textContent = this.shift ? '{' : '[';
        document.querySelector('.close-square-br').textContent = this.shift ? '}' : ']';
        document.querySelector('.backslash').textContent = this.shift ? '|' : '\\';
        document.querySelector('.semicolon').textContent = this.shift ? ':' : ';';
        document.querySelector('.single-q').textContent = this.shift ? '"' : '\'';
        document.querySelector('.comma').textContent = this.shift ? '<' : ',';
        document.querySelector('.dot').textContent = this.shift ? '>' : '.';
        document.querySelector('.fw-slash').textContent = this.shift ? '?' : '/';

        key.textContent = this.shift
          ? key.textContent.toUpperCase()
          : key.textContent.toLowerCase();
      }
    });
  }

  toggleLanguage() {
    if (this.lang === 'EN') this.lang = 'LT';
    else this.lang = 'EN';

    this.keys.forEach((element) => {
      const key = element;
      if (key.textContent.length === 1) {
        document.querySelector('.one').textContent = this.lang === 'LT' ? 'ą' : '1';
        document.querySelector('.two').textContent = this.lang === 'LT' ? 'č' : '2';
        document.querySelector('.three').textContent = this.lang === 'LT' ? 'ę' : '3';
        document.querySelector('.four').textContent = this.lang === 'LT' ? 'ė' : '4';
        document.querySelector('.five').textContent = this.lang === 'LT' ? 'į' : '5';
        document.querySelector('.six').textContent = this.lang === 'LT' ? 'š' : '6';
        document.querySelector('.seven').textContent = this.lang === 'LT' ? 'ų' : '7';
        document.querySelector('.eight').textContent = this.lang === 'LT' ? 'ū' : '8';
        document.querySelector('.nine').textContent = this.lang === 'LT' ? 'ž' : '9';
      }
    });
  }

  open(initialValue, oninput) {
    this.value = initialValue;
    this.oninput = oninput;
  }
}

const keyboard = new Keyboard();
const keysPressed = {};

window.addEventListener('keydown', (e) => {
  e.preventDefault();
  keysPressed[e.key] = true;
  if (e.key.length === 1) {
    let value = '';
    if (keyboard.lang === 'LT' && !keyboard.shift) {
      switch (e.key) {
        case '1': value = 'ą'; break;
        case '2': value = 'č'; break;
        case '3': value = 'ę'; break;
        case '4': value = 'ė'; break;
        case '5': value = 'į'; break;
        case '6': value = 'š'; break;
        case '7': value = 'ų'; break;
        case '8': value = 'ū'; break;
        case '9': value = 'ž'; break;
        default: value = e.key;
      }
    } else if (keyboard.shift) {
      switch (e.key) {
        case '`': value = '~'; break;
        case '1': value = '!'; break;
        case '2': value = '@'; break;
        case '3': value = '#'; break;
        case '4': value = '$'; break;
        case '5': value = '%'; break;
        case '6': value = '^'; break;
        case '7': value = '&'; break;
        case '8': value = '*'; break;
        case '9': value = '('; break;
        case '0': value = ')'; break;
        case '-': value = '_'; break;
        case '=': value = '+'; break;
        case '[': value = '{'; break;
        case ']': value = '}'; break;
        case '\\': value = '|'; break;
        case ';': value = ':'; break;
        case '\'': value = '"'; break;
        case ',': value = '<'; break;
        case '.': value = '>'; break;
        case '/': value = '?'; break;
        default: value = e.key;
      }
    } else {
      value = e.key;
    }

    if (keyboard.capsLock || keyboard.shift) {
      keyboard.insertByPosition(value.toUpperCase(), 1);
    } else {
      keyboard.insertByPosition(value.toLowerCase(), 1);
    }
  }

  switch (e.key) {
    case 'Backspace': keyboard.backspace(); break;
    case 'Tab': keyboard.insertByPosition('   ', 3); break;
    case 'Delete': keyboard.delete(); break;
    case 'CapsLock': keyboard.toggleCapsLock(); break;
    case 'Enter': keyboard.insertByPosition('\n', 1); break;
    case 'ArrowUp': keyboard.insertByPosition('↟', 1); break;
    case 'ArrowLeft': keyboard.insertByPosition('↞', 1); break;
    case 'ArrowDown': keyboard.insertByPosition('↡', 1); break;
    case 'ArrowRight': keyboard.insertByPosition('↠', 1); break;
    default:
  }

  if (e.key === 'Shift' && !keyboard.capsLock) {
    keyboard.shift = true;
    keyboard.toggleShift();
  }

  if (keysPressed.Control && keysPressed.Alt) {
    keyboard.toggleLanguage();
    keyboard.selectedLanguage.textContent = `Language: ${keyboard.lang}`;
    localStorage.setItem('lang', keyboard.lang);
  }
});

window.addEventListener('keyup', (e) => {
  delete keysPressed[e.key];

  if (e.key === 'Shift' && !keyboard.capsLock) {
    keyboard.shift = false;
    keyboard.toggleShift();
  }
});
