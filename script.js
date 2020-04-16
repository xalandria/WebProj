/** Add any JavaScript you need to this file. */
/*
Name: Scott Maciver
Student ID: 102205184
*/
var storeItems = [
  {
    price: 29.99,
    category: 'memory',
    imgURL: 'images/green-and-black-computer-ram-stick.jpg',
    name: '1gb ddr3',
    description: 'its memory'
  },
  {
    price: 29.99,
    category: 'memory',
    imgURL: 'images/green-and-black-computer-ram-stick.jpg',
    name: '2gb ddr3',
    description: 'its memory'
  },
  {
    price: 29.99,
    category: 'memory',
    imgURL: 'images/green-and-black-computer-ram-stick.jpg',
    name: '4gb ddr3',
    description: 'its memory'
  },
  {
    price: 29.99,
    category: 'memory',
    imgURL: 'images/green-and-black-computer-ram-stick.jpg',
    name: '8gb ddr4',
    description: 'its fast memory'
  },
  {
    price: 29.99,
    category: 'memory',
    imgURL: 'images/green-and-black-computer-ram-stick.jpg',
    name: '2x8gb ddr4',
    description: 'its fast memory'
  },
  {
    price: 29.99,
    category: 'peripheral',
    imgURL: 'images/headset.jpg',
    name: 'headset',
    description: 'used headset'
  },
  {
    price: 29.99,
    category: 'peripheral',
    imgURL: 'images/soundbar.jpg',
    name: 'soundbar',
    description: 'used soundbar'
  },
  {
    price: 29.99,
    category: 'peripheral',
    imgURL: 'images/monitor.jpg',
    name: 'monitor',
    description: 'used monitor'
  },
  {
    price: 29.99,
    category: 'peripheral',
    imgURL: 'images/keyboard.jpg',
    name: 'keyboard',
    description: 'used keyboard'
  },
  {
    price: 29.99,
    category: 'peripheral',
    imgURL: 'images/mouse.jpg',
    name: 'mouse',
    description: 'used mouse'
  }
];

function loadStore(cat = 'all') {
  for (let i in storeItems) {
    let card = document.createElement('div');
    card.className = 'card';
    let text = document.createElement('div');
    let img = document.createElement('img');
    img.className = 'cardPic';
    let nam = document.createElement('h4');
    let desc = document.createElement('p');
    let cost = document.createElement('p');
    if (cat === storeItems[i].category) {
      img.src = storeItems[i].imgURL;
      nam.innerHTML = storeItems[i].name;
      desc.innerHTML = storeItems[i].description;
      cost.innerHTML = storeItems[i].price;
      card.appendChild(img);
      text.appendChild(nam);
      text.appendChild(desc);
      text.appendChild(cost);
      card.appendChild(text);
      document.getElementById('sales').appendChild(card);
    } else if (cat === storeItems[i].category) {
      img.src = storeItems[i].imgURL;
      nam.innerHTML = storeItems[i].name;
      desc.innerHTML = storeItems[i].description;
      cost.innerHTML = storeItems[i].price;
      card.appendChild(img);
      text.appendChild(nam);
      text.appendChild(desc);
      text.appendChild(cost);
      card.appendChild(text);
      document.getElementById('sales').appendChild(card);
    } else if (cat === 'all') {
      img.src = storeItems[i].imgURL;
      nam.innerHTML = storeItems[i].name;
      desc.innerHTML = storeItems[i].description;
      cost.innerHTML = storeItems[i].price;
      card.appendChild(img);
      text.appendChild(nam);
      text.appendChild(desc);
      text.appendChild(cost);
      card.appendChild(text);
      document.getElementById('sales').appendChild(card);
    }
  }
}

function menuHandlers() {
  var head = document.createElement('h2');
  document.getElementById('home').addEventListener('click', function() {
    while (document.getElementById('sales').firstChild) {
      document.getElementById('sales').lastChild.remove();
    }
    head.innerHTML = 'VIEWING ALL ITEMS';
    document.getElementById('sales').appendChild(head);
    loadStore();
  });
  document.getElementById('memory').addEventListener('click', function() {
    while (document.getElementById('sales').firstChild) {
      document.getElementById('sales').lastChild.remove();
    }
    head.innerHTML = 'VIEWING MEMORY';
    document.getElementById('sales').appendChild(head);
    loadStore('memory');
  });
  document.getElementById('peripheral').addEventListener('click', function() {
    while (document.getElementById('sales').firstChild) {
      document.getElementById('sales').lastChild.remove();
    }
    head.innerHTML = 'VIEWING PERIPHERALS';
    document.getElementById('sales').appendChild(head);
    loadStore('peripheral');
  });
}

loadStore();
window.onload = menuHandlers;
