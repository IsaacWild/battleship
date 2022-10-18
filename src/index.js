import './style.css';
import icon from '../icons/ship.svg';

const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
document.body.appendChild(wrapper);

// title
const txtTitle = document.createElement('p');
txtTitle.textContent = 'BattleShip';
txtTitle.classList.add('txtTitle');

// content
const contentWrapper = document.createElement('div');
const shipIcon = new Image();
const inputName = document.createElement('input');
const btnName = document.createElement('button');
inputName.placeholder = 'Enter your name';
inputName.classList.add('inputName');
shipIcon.classList.add('shipIcon');
btnName.classList.add('btnName')
contentWrapper.classList.add('contentWrapper');
btnName.textContent = 'Start Game';
shipIcon.src = icon;
contentWrapper.append(shipIcon, inputName, btnName);

// footer
const txtFooter = document.createElement('p');
txtFooter.textContent = 'A game made by Isaac';
txtFooter.classList.add('txtFooter');

wrapper.append(txtTitle, contentWrapper, txtFooter);
