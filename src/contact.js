const displayContactPage = (() => {

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


  const contact_title = document.createElement('h2');
  contact_title.setAttribute('id', 'page-title');
  contact_title.textContent = 'Contact';

  const contact_page_content = document.createElement('div');
  contact_page_content.classList.add('contact-page-content');

  const contact_form = document.createElement('form');
  contact_form.setAttribute('action', 'example.com/path');
  contact_form.setAttribute('method', 'post');

  const message_us = document.createElement('h3');
  message_us.textContent = 'Message Us';

  const full_name_label = document.createElement('label');
  full_name_label.setAttribute('for', 'full_name');
  full_name_label.textContent = 'Full Name';

  const full_name_input = document.createElement('input');
  full_name_input.setAttribute('type', 'text');
  full_name_input.setAttribute('id', 'full_name');

  const email_label = document.createElement('label');
  email_label.setAttribute('for', 'email');
  email_label.textContent = 'Email';

  const email_input = document.createElement('input');
  email_input.setAttribute('type', 'text');
  email_input.setAttribute('id', 'email');

  const message_label = document.createElement('label');
  message_label.setAttribute('for', 'message');
  message_label.textContent = 'Type your message...';

  const message_input = document.createElement('input');
  message_input.setAttribute('type', 'text');
  message_input.setAttribute('id', 'message');

  contact_form.appendChild(message_us);
  contact_form.appendChild(full_name_label);
  contact_form.appendChild(full_name_input);
  contact_form.appendChild(email_label);
  contact_form.appendChild(email_input);
  contact_form.appendChild(message_label);
  contact_form.appendChild(message_input);

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

  contact_page_content.appendChild(contact_form);
  contact_page_content.appendChild(restaurant_info);

  content.appendChild(nav);
  content.appendChild(contact_page_content);



});

export {displayContactPage};
