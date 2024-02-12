// JQuery Code Here
// Warp out code in the ready method
$(document).ready(function() {
    console.log("dom is ready");

    //animate form appearance
    $("#registration-form").hide().fadeIn(3000);

    //handle the form submission
    $("#signup-form").submit(function(event){
        event.preventDefault();

        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let date = $("#date").val();
        let isValid = true;
        console.log(name, email, date);

        //form validation
        if (name ==""){
            alert("please enter a name!");
            isValid = false;
        }
        if (email ==""){
            alert("please enter a email!");
            isValid = false;
        }
        if (date ==""){
            alert("please select a date!");
            isValid = false;
        }

        if (isValid == true){
            $("#confirmation-message").slideUp(function(){
                $(this).html(`
                    <p>Thank you,<strg> ${name}</strong>!</p>
                    <p>Your registration for the show on <strong>${date}</strong> is confirmed!</p>
                    <p>Your confirmation email has been sent to: <strong>${email}</strong>!</p>
                `).slideDown();
            })
            $("#signup-form").find("input[type=text], input[type=email], select").val("");
        }
    });

    //handling the form reset submission
    $("#signup-form input[type=reset]").click(function(event){
        event.preventDefault();

            $("#confirmation-message").slideDown(400, function() {
                $(this).html(`
                    <p>Form has been <strong>Reset</strong> to its default state!</p>
                `).slideUp(4000);
                $("#signup-form").find("input[type=text], input[type=email], select").val("");
            });
    });

    //form feild animations
    $("#input, select").focus(function(){
        $(this).animate(
            {
                borderColor: "#68b3c8",
            }, 500
        )
    }).blur(function(){
        $(this).animate(
            {
                borderColor: "#ddd",
            }, 500
        )
    })

    //Submit button animation
    $("#signup-form input[type=submit]").hover(
        function(){
            $(this).animate(
                {
                    backgroundColor: "#333333",
                }, 200
            );
        },
        function(){
            $(this).animate(
                {
                    backgroundColor: "#5c5c5c",
                }, 200
            );
        }
    );
        //Reset button animation
        $("#signup-form input[type=reset]").hover(
            function(){
                $(this).animate(
                    {
                        backgroundColor: "#333333",
                    }, 200
                );
            },
            function(){
                $(this).animate(
                    {
                        backgroundColor: "#5c5c5c",
                    }, 200
                );
            }
        );
});

// ICE 4 TODO:
// 1. Add a "Reset" button that clears all the inputs and the confirmation message when clicked
// 2. Implement a "fade out" for the confirmation message after a certain period once the registration is confirmed