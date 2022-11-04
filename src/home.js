//  create a module here, that loads in everything needed for the home page

const displayHomePage = (() =>
{
  const content = document.querySelector('#content');
  const changing_content = document.querySelector('#changing-content');

  const nav = document.createElement('nav');

  const restaurant_name = document.createElement('h2');
  restaurant_name.classList.add('restaurant-name');
  restaurant_name.textContent ='Food-On-A-Plate';

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

  const greeting = document.createElement('div');
  greeting.classList.add('greeting');

  const greeting_one = document.createElement('h1');
  greeting_one.textContent = 'Come on down for some delicious cuisine!';

  const greeting_two = document.createElement('h3');
  greeting_two.textContent = 'Tasty and affordable!';

  const order_button = document.createElement('button');
  order_button.textContent = 'Order Now';

  greeting.appendChild(greeting_one);
  greeting.appendChild(greeting_two);
  greeting.appendChild(order_button);


  const restaurant_info = document.createElement('div');
  restaurant_info.classList.add('restaurant-info');

  const address = document.createElement('div');
  address.classList.add('address');

  const address_one = document.createElement('p');
  address_one.textContent = '1024 Oakwood Ave';

  const address_two = document.createElement('p');
  address_two.textContent = 'San Diego, CA 22434';

  address.appendChild(address_one);
  address.appendChild(address_two);

  const opening_time = document.createElement('div');
  opening_time.classList.add('opening-time');

  const opening_time_one = document.createElement('p');
  opening_time_one.textContent = 'Mon-Thurs: 8am-8pm';

  const opening_time_two = document.createElement('p');
  opening_time_two.textContent = 'Fri-Sun: 8am-11pm';

  opening_time.appendChild(opening_time_one);
  opening_time.appendChild(opening_time_two);

  restaurant_info.appendChild(address);
  restaurant_info.appendChild(opening_time);

  main_content.appendChild(greeting);
  main_content.appendChild(restaurant_info);

  // content.appendChild(nav);
  changing_content.appendChild(main_content);

});


export { displayHomePage };
