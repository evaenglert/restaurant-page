import {displayHomePage} from './home.js'
import { displayMenuPage } from './menu.js'
import { displayContactPage} from './contact.js'


displayHomePage();
const menu_items = document.querySelectorAll('.menu-item');

const home = menu_items[0];
const menu = menu_items[1];
const contact = menu_items[2];

home.addEventListener('click', () => {
  const content = document.querySelector('#content');
  content.innerHTML = "";
  displayHomePage()
});

menu.addEventListener('click', () => {
  const content = document.querySelector('#content');
  content.innerHTML = "";
  displayMenuPage()
});

contact.addEventListener('click', () => {
  const content = document.querySelector('#content');
  content.innerHTML = "";
  displayContactPage()
});
