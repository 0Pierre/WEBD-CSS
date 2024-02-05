console.log("script ran successfully");

function validateForm() {
    console.dir(document.forms);
    let InputElement = document.forms["myForm"]["fname"].value;
    console.log(InputElement)
    if (InputElement == "" || InputElement.length>2) {
        alert("Form validation failed");
        return false;
    }
}
