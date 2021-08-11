
// Create a new list item when clicking on the "Submit" button
function newElement() {
  let li = document.createElement("li");  //create a new list item

  let inputValue = document.getElementById("myInput").value; // access user input task text
  let abc = document.createTextNode(inputValue); //store task's text in "abc"
  li.appendChild(abc); // attach this text to list item node.

  if (inputValue === '') {
    alert("You must write to add ToDO List!");
  } else {
    document.getElementById("myUL").appendChild(li);
     
  }
  document.getElementById("myInput").value = ""; //make input textbox of task blank again

  let button = document.createElement("BUTTON"); //Create a <button> element
  let txt = document.createTextNode("\u00D7"); //store unicode character of cross sign in variable named txt
  button.className = "close";  //give a class name to newly created button above.
  button.appendChild(txt);  // attach this cross sign to newly created button. Close button is ready to use now.
  li.appendChild(button);  //now attach this close button to each LI(list item) via for loop.
 
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
    //listItems = document.getElementsByTagName('li');
    document.getElementById("number").innerHTML = close.length++;  }// document.getElementById("number").innerHTML = listItems.length;
}
// Create a "close" button and attached it to each list item

let myNodelist = document.getElementsByTagName("LI"); 
for (let i = 0; i < myNodelist.length; i++) {
 
  let button = document.createElement("BUTTON"); //Create a <button> element
  let txt = document.createTextNode("\u00D7"); //store cross sign in variable named txt
  button.className = "close"; //give a class name to newly created button above.
  button.appendChild(txt); // attach this cross sign to newly created button. Close button is ready to use now.
  myNodelist[i].appendChild(button); //now attach this close button to each LI(list item) via for loop.
  listItems = document.getElementsByTagName('li');
  //document.getElementById("number").innerHTML = listItems.length;
}

let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
  
    close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
    listItems = document.getElementsByTagName('li');
    document.getElementById("number").innerHTML = listItems.length-(i+1);
    }
 }

