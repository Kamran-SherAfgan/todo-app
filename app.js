var unorderList = document.getElementById('list');



function toDo(){
   var todo_text = document.getElementById('input-text');
   var list = document.createElement('li');
   var liText = document.createTextNode(todo_text.value)

   list.appendChild(liText)
  
   

   var div = document.createElement('div');
   
   var edit_btn = document.createElement('button');
   var edit_text = document.createTextNode('EDIT');
   
   div.appendChild(edit_btn);


   

   edit_btn.setAttribute('class' , 'btn');
   edit_btn.setAttribute('onclick' , 'edit(this)')

   edit_btn.appendChild(edit_text);
   list.appendChild(edit_btn)

  

   unorderList.appendChild(list);



   var div2 = document.createElement('div');

   var del_btn = document.createElement('button');
   var del_text = document.createTextNode('DELETE');
   
   div2.appendChild(del_btn);

   del_btn.setAttribute('class' , 'btn');
   del_btn.setAttribute('onclick' , 'deleteItem(this)')

   
   del_btn.appendChild(del_text);
   list.appendChild(del_btn)


   unorderList.appendChild(list);

   todo_text.value= "";

  
   }


function deleteItem(e){
e.parentNode.remove();
}

function deleteAll(){
    unorderList.innerHTML = ""
}

function edit(e){
    var val = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("", val);
    e.parentNode.firstChild.nodeValue = editValue;

}

// function changeColor(){
//     var editButton = document.getElementById('add-btn');
//     editButton.this.style.backgroundColor = 'black';
// }



