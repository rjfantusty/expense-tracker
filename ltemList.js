var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItemname = document.getElementById('item').name;
  var newItem = document.getElementById('item').value;
  var expdesc=document.getElementById('desc').name;
  var newdesc = document.getElementById('desc').value;
  var exp = document.getElementById('exp').value;
  var expname = document.getElementById('exp').name;
  var space=' '
  // Create new li element
  var li = document.createElement('li');
  // Add class
  let obj={
   newItemname : newItem,
   expdesc :newdesc,
   expname : exp
  }
  let data=JSON.stringify(obj)
  localStorage.setItem(newItemname,data)
  let con=localStorage.getItem(newItemname)
  console.log(con)

  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));
  li.appendChild(document.createTextNode(space));
  li.appendChild(document.createTextNode(newdesc))
  li.appendChild(document.createTextNode(space));
  li.appendChild(document.createTextNode(exp))



  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-end delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.innerText;
    console.log(itemName)
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}