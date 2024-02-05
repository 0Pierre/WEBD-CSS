const form =$("form");

console.log(form);

const firstName = $("input#first-name");

console.log(firstName);

$("input#submit-btn").click(function (event){
    event.preventDefault();
    // console.log($("form")[0]);
    const mtFormArray = $("form")[0].elements;
    for (let input of mtFormArray){
        console.log(input.value);
    }

});