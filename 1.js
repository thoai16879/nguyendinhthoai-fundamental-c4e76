 // bài 1

// const product = {
//     name: 'Xiaomi rice cooker',
//     price: 1700,
//     brand: 'Xiaomi'
//     color: 'white'
// };
// for (let key in product) {
//     console.log(`${key} : ${product[key]}`);
// }


// bài 4
// let dictionary = {
//     debug : 'tìm lỗi',
//     done : 'đã làm xong',
//     triplekill : 'giết 3 mạng',
//     quadrakill : 'giết 4 mạng',
//     pentakill :  ' giết 5 mạng',
// }

// let userInput  = prompt('enter the keyword');
// if(userInput == 'debug'){
//     console.log('debug');
// }
// else if(userInput== 'done'){
//     console.log('done');
// }
// else if (userInput == 'triplekill'){
//     console.log('triplekill');
// }
// else if (userInput == 'quadrakill'){
//     console.log('quadrakill');
// }
// else if (userInput =='pentakill'){
//     console.log('pentakill')
// }
// if (dictionary.hasOwnProperty(userInput)){
//     alert(dictionary[userInput]);
// }
// else {
//     alert("Not FOUND")
// }
// if (dictionary[userInput] != "" ){
//     alert(dictionary[userInput]);
// }
// else {
//     alert("not found");
// }

// if (dictionary.hasOwnProperty(userInput)){
//     alert(dictionary.[userInput])
// }else {
//     let input = prompt('nhập định nghĩa mới');
//     dictionary[userInput]=input;
// }
// console.log(dictionary[userInput]);



// bài 5
//1.

let products = [
    {
        name: 'Xiaomi portablecharger 20000mah',
        price: 438,
        color: 'white',
        brand: 'xiaomi',
        catetory: 'charger'
    },
    {
        name: 'iphone6',
        price: 200,
        color: 'white',
        brand: 'apple',
        catetory: 'phone'
    },
    {
        name: 'samsung',
        price: 100,
        color: 'pink',
        brand: 'samsung',
        catetory: 'phone'
    },
    {
        name: 'asus a556u',
        price: 500,
        color: 'silver',
        brand: 'asus',
        catetory: 'laptop'
    },

];
// for (let key in product) {
//     console.log(`${product[key].name}: ${product[key].price}`);
// }
// for (let product of products) {
//     console.log('---------------------');
//     console.log(`Name: ${product.name}`);
//     console.log(`Name: ${product.price}`);
// }



// 5.2
for (let i =0; i<products.length; i++){
    console.log(`${i+1}.${products[i].name}`);
    console.log(`${products[i].price}`);

}
let userInput = Number(prompt("Enter product position:"));
for (let key in products[userInput - 1]) {
  console.log(`${key.replace(key[0], key[0].toUpperCase())}: ${products[userInput - 1][key]}`);
}
// 5.3
let userInput = prompt("Enter your category:");
for (let i = 0; i < products.length; i++) {
  if (userInput === products[i].category) {
    console.log("-----------------------");
    console.log(`Name: ${products[i].name}`);
    console.log(`Price: ${products[i].price}`);
  }
}

// 5.4
for (let i = 0; i < products.length; i++) {
  console.log(`#${i + 1}. ${products[i].name}`);
  console.log(`    Price: ${products[i].price}`);
  console.log(`    Providers: ${products[i].providers}`);
}
// 5.5
let userInput = prompt("Enter provider:");
for (let product of products) {
  if (product.providers.indexOf(userInput) !== -1) {
    console.log("-----------------------");
    for (let key in product) {
      console.log(`${key.replace(key[0], key[0].toUpperCase())}: ${product[key]}`);
    }
  }
}// 6 /////////////////////////////////////////////////////////////////////////
function print(arr) {
    console.log('Hi there, this is your learning tasks to front-end developer career');

    for (let i = 0; i < arr.length; i++) {
      console.log(`${i + 1}. ${arr[i].task}`);
      console.log(`   Complete: ${arr[i].complete}`);
    }
  }

  let tasks = [
    {
      task: "HTML",
      complete: false,
    },
    {
      task: "CSS",
      complete: false,
    },
    {
      task: "Basis of JavaScript",
      complete: false,
    },
    {
      task: "Node Package Manager (npm)",
      complete: false,
    },
    {
      task: "Git",
      complete: false,
    },
  ];

  // 6.1
  print(tasks);
  // 6.2
  let userInput = prompt('Enter your command (New, Delete, Update, Complete');
  if (userInput === 'new') {
    let newTask = prompt('Enter new task');
    tasks.push({
      task: newTask,
      complete: false,
    });
    print(tasks);
  }

  // 6.3
  if (userInput === 'update') {
    let position = prompt('Enter position');
    let newTitle = prompt('Enter new title');
    tasks[position - 1].task = newTitle;
    print(tasks);
  }

  // 6.4
  if (userInput === 'complete') {
    let position = prompt('Enter position');
    tasks[position - 1].complete = true;
    print(tasks);
  }

  // 6.5
  if (userInput === 'delete') {
    let position = prompt('Enter position');
    tasks.splice(position - 1, 1);
    print(tasks);
  }

  // 6.6
  for (let i = 0; i < tasks.length; i++) {
    console.log(`${i + 1}. [ ] ${tasks[i].task}`);
  }

  if (userInput === 'delete') {
    let position = prompt('Enter position');
    for (let i = 0; i < tasks.length; i++) {
      if (i === position - 1) {
        console.log(`${i + 1}. [x] ${tasks[i].task}`);
      } else {
        console.log(`${i + 1}. [ ] ${tasks[i].task}`);
      }
    }

  }