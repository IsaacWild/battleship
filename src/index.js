import './style.css';

const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
document.body.appendChild(wrapper);

// title
const txtTitle = document.createElement('p');
txtTitle.textContent = 'BattleShip';
txtTitle.classList.add('txtTitle');

// content
const txtContent = document.createElement('div');
txtContent.textContent = 'game goes here!';
txtContent.classList.add('txtContent');

// footer
const txtFooter = document.createElement('p');
txtFooter.textContent = 'A game made by Isaac';
txtFooter.classList.add('txtFooter');

wrapper.append(txtTitle, txtContent, txtFooter);
