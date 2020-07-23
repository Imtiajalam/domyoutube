// get things for Element-------------------------------------

// console.log(document.getElementById('task-title'));
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);


// change styling------------------------------------------

// document.getElementById('task-title').style.background='red';
// document.getElementById('task-title').style.color='white';
// document.getElementById('task-title').style.padding='5px';

// change content----------------------------------------------

// const taskTitle = document.getElementById('task-title');

// variable declare = tasktitle 
// taskTitle.textContent='Task list';
// taskTitle.textContent='task list';
// taskTitle.innerText='My List';
// taskTitle.innerHTML = '<span>Task list</span>'

// document.querySelector('selector')-----------------------------------------
// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));


// document.querySelector('li').style.color='red';(single element selector)

// document.querySelector('ul li').style.color='red';

// document.querySelector('li:last-child').style.color='red';
// document.querySelector('li:last-child').textContent='hello';


// document.getElementsByClassName----------------------------------------------

// const items = document.getElementsByClassName('collection-item');
// console.log(items);

// items[0].style.color= 'white';

// const listitem = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listitem);

// document.getElementsByTagName------------------------------------------------------------

// const list = document.getElementsByTagName('li');
// console.log(list);
// items[0].style.color= 'white';





// document.querySelectorAll-----------------------------

// const items = document.querySelectorAll('ul li');
// console.log(items);

// items.forEach(function(item){
//     item.style.color ='orange';
//     item.textContent = 'Hello';
// });



// traversing Dom----------------------


// let val;

// const list = document.querySelector('ul collection');

// val = list.children[3];

// console.log(val);


// create element -----------------------------

// const li = document.createElement('li');
// // add class
// li.className = 'collection-item';
// // add id 
// li.id = 'item';
// // add attibute
// li.setAttribute('title','new-item');

// li.textContent = 'hello';
// console.log(li);

// insert dom ------------------------------

// const li = document.createElement('li');


// li.className = 'collection-item';

// li.textContent = 'hello';

// console.log(li);

// // append li as  a child to ul

// document.querySelector('ul.collecton').appendChild(li);

// // create new link

// const link = document.createElement('a');

// // add class 

// link.className = 'delete-item secondary-content';

// // add icon

// link.innerHTML = '<i class = "fa-remove"></i>';

// // append line into li

// li appendChild(link);


// remove element ----------------------------

// const lis = document.querySelectorAll('li');

// lis[0],remove();





// addEventListener-----------------------

// document.querySelector('.clear-tasks').addEventListener('click',function(e){
//     console.log('clicked');
//     e.preventDefault();
// })



// document.querySelector('.clear-tasks').addEventListener('click',onclick);
//    function onclick(e){


//     let val ;
//     val = e;
//     val = e.target;
//     console.log(val);
//     e.preventDefault();
//    }


