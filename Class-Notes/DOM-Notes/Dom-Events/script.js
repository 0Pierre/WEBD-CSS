// - As a User, I want to click on the 'Add' button and add the to do that i
//   typed from the text box onto my todo list

// const addBtn = document.getElementById("submit-btn");
// const addBtn = document.querySelector('button');// using tag name - but this will select all buttons
//grabs the HTML button and stores it into addbtn
const addBtn = document.querySelector('#submit-btn');

//grabs the html input and stores it into inputEle
const inputEle = document.querySelector('#to-do-input');

//grabs the html UL and stores it into unOrderedListEle
const unOrderedListEle = document.querySelector('#to-do-list');

addBtn.addEventListener("click",function(event) {
    event.preventDefault();
    console.dir(inputEle.value);
    //inputELe.value represents the text that the user inputs into the textbox
    const newListItem = document.createElement('LI')
    newListItem.innerText = inputEle.value //represents the string in the textbox by user
    unOrderedListEle.append(newListItem)
});