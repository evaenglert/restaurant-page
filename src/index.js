import {displayHomePage} from './home.js'
import { displayMenuPage } from './menu.js'
import { displayContactPage} from './contact.js'


displayHomePage();
const menu_items = document.querySelectorAll('.menu-item');

const home = menu_items[0];
const menu = menu_items[1];
const contact = menu_items[2];

home.addEventListener('click', () => {
  const changing_content = document.querySelector('#changing-content');
  changing_content.innerHTML = "";
  displayHomePage()
});

menu.addEventListener('click', () => {
  const changing_content = document.querySelector('#changing-content');
  changing_content.innerHTML = "";
  displayMenuPage()
});

contact.addEventListener('click', () => {
  const changing_content = document.querySelector('#changing-content');
  changing_content.innerHTML = "";
  displayContactPage()
});
