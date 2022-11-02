// for displaying the menu that is available

const displayMenu = (() =>
{

  const content = document.querySelector('#content');

  const nav = document.createElement('nav');

  const restaurant_name = document.createElement('h2');
  restaurant_name.classList.add('restaurant-name');
  restaurant_name.textContent = 'Food-On-A-Plate';

  const menu_items = document.createElement('ul');
  menu_items.classList.add('menu-items');

  const menu_item_home = document.createElement('li');
  menu_item_home.textContent = 'Home';
  menu_item_home.classList.add('menu-item');

  const menu_item_menu = document.createElement('li');
  menu_item_menu.textContent = 'Menu';
  menu_item_menu.classList.add('menu-item');

  const menu_item_contact = document.createElement('li');
  menu_item_contact.textContent = 'Contact us';
  menu_item_contact.classList.add('menu-item');

  menu_items.appendChild(menu_item_home);
  menu_items.appendChild(menu_item_menu);
  menu_items.appendChild(menu_item_contact);

  nav.appendChild(restaurant_name);
  nav.appendChild(menu_items);

  const main_content = document.createElement('div');
  main_content.setAttribute('id', 'main-content');


  const food_menu = document.createElement('h2');
  food_menu.setAttribute('id', 'food-menu');
  food_menu.textContent = 'Menu';

  const menu_food_items = document.createElement('div');
  menu_food_items.classList.add('menu-food-items');

  // function for creating new food item element
  function createFoodItem(food_name_text, food_price_text, food_description_text) {
    const food_item = document.createElement('div');
    food_item.classList.add('food-item');

    const food_info = document.createElement('span');
    food_info.classList.add('food-info');

    const food_name = document.createElement('p')
    food_name.classList.add('food-name');
    food_name.textContent = food_name_text;

    const food_price = document.createElement('p');
    food_price.classList.add('food-price');
    food_price.textContent = food_price_text;

    const food_dectription = document.createElement('span');
    food_dectription.textContent = food_description_text;

    food_info.appendChild(food_name);
    food_info.appendChild(food_price);

    food_item.appendChild(food_info);
    food_item.appendChild(food_dectription);

    menu_food_items.appendChild(food_item);

  }

  createFoodItem('Hamburger', '$2.49', 'Buns, patty, tomato, onions, lettuce, and our secret family recipe.');

  main_content.appendChild(food_menu);
  main_content.appendChild(menu_food_items);

  content.appendChild(nav);
  content.appendChild(main_content);



})()


export {displayMenu}
