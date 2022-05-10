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






//var header=document.querySelector('main-header');
//header.getElementsByClassName.borderBottom='solid 4px #ccc';

//var input=document.querySelector('input');
//input.value='hello World';
//var submit =document.querySelector('input[type="submit"]');
//submit.value="send";

//var item=document.querySelector('.list-group-item');
//item.getElementsByClassName.color='red';




//var item=document.querySelector('.title');
//item.getElementsByClassName.color='green';


var li=document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent="hello 2";
li[1].style.fontWeight='bold';
li[1].style.backgroundColor='yellow';

for(var i=0;i<li.length;i++){
    li[i].style.backgroundc='red';
}




