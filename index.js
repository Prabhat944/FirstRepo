//Examine the document object//

//console.dir(document);
//console.log(document.domain);
//console.log(document.url);
//console.log(document.title);
//document.title=123;
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[10]);
//document.all[10].textContent= 'hello';
//console.log(document.forms[0]);
//console.log(document.links);
//console.log(document.links);
//console.log(document.images);


//GetElementById//

//console.log(document.getElementById('header-title'));
//var headerTitle=document.getElementById('header-title');
//console.log(headerTitle);
//headerTitle.textContent='hello';
//headerTitle.innerContent='hello';
//headerTitle.innerText='GoodBYE';




//GetElementByClassName//

//var items=document.getElementsByClassName('list-group-item');
//console.log(items);
//console.log(items[1]);
//items[1].textContent='Hello';
//items[1].style.backgroundColor='yellow';
//items[1].style.fontWeight='bold';

//Give error
//items.style.backgrounsColor='#f4f4f4';

//for(var i=0;i<items.length;i++){
//    items[i].style.backgroundColor='#f4f4f4';
//}

//var makeGreen = document.getElementsByClassName('list-group-item');
//makeGreen[2].style.backgroundColor='green';


//for(var i=0;i<makeGreen.length;i++){
//    makeGreen[i].style.fontWeight='bold';
//}

//getElementByTagName//
//var li=document.getElementsByTagName('li');
//console.log(li);
//console.log(li[1]);
//li[1].textContent="hello 2";
//li[1].style.fontWeight='bold';
//li[1].style.backgroundColor='yellow';

//for(var i=0;i<li.length;i++){
//    li[i].style.backgroundc='red';
//}




    //QuerySelector//
 //   var header=document.querySelector('#main-header');
 //   header.style.borderBottom='solid 4px #ccc';

 //   var input = document.querySelector('input');
 //   input.value='Hello World';

 //   var submit=document.querySelector('input[type="submit"]');
 //   submit.value='send';

 //   var item=document.querySelector('.list-group-item');
 //   item.style.color='red';


 //   var lastItem=document.querySelector('.list-group-item:last-child');
 //   lastItem.style.color='blue';


 //   var secondItem=document.querySelector('.list-group-item:nth-child(2)');
 //   secondItem.style.backgroundColor='green';

 //   var thirdItem=document.querySelector('.list-group-item:nth-child(3)');
  //  thirdItem.style.display='none';


//QuerySelectorAll//
//var titles=document.querySelectorAll('.title');

//console.log(titles);
//titles[0].textContent='Hello';

//var odd=document.querySelectorAll('li:nth-child(odd)');
//var even=document.querySelectorAll('li:nth-child(even)');

//for(var i=0;i<odd.length;i++){
//    odd[i].style.backgroundcolor='#f4f4f4';
//    even[i].style.backgroundcolor = '#ccc';
//}

//Traversing the dom//
// var itemList = document.querySelector('#items');
// //parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundcolor='#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);


// //parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundcolor='#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// //childNodes
// console.log(itemList.childNodes);

// //children
// console.log(itemList.children);

// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundcolor='yellow';

// //FirstChild
// console.log(itemList.firstChild);

// //firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent='Hello';

// //LastChild
// console.log(itemList.lastrChild);

// //LastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent='Hello';

// //nextSibling
// console.log(itemList.nextSibling);

// //nextelemntsibling
// console.log(itemList.nextElementSibling);

// //PreviousSibling
// console.log(itemList.previousSibling);

// //previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color='green';

// //createElement

// //create a div
// var newDiv = document.createElement('div');

// //add class
// newDiv.className='hello';

// //add id
// newDiv.id='hello1';

// //add attr
// newDiv.setAttribute('title','hello Div');

// //create text node
// var newDivText = document.createTextNode('hello world');

//add text to div
// newDiv.appendChild(newDivText);

// var container=document.querySelector('header.container');
// var h1 = document.querySelector('header h1');

// //container.appendChild(newDiv);
// newDiv.style.fontSize='30px';
//container.insertBefore(newDiv,h1);

//console.log(newDiv);

// var addText = document.createTextNode('HEllo');
// var list = document.querySelector('.list-group');
// var parent = document.querySelector('div.card-body');

// parent.insertBefore(addText,list);
// console.log(parent);




