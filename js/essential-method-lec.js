"use strict";

$(document).ready(function() {

    //Name input goes through random sorting here. No need to change this code.
    $('#sort-wizard').click(function(e){
        let house = Math.floor(Math.random() * 4);
        let newWizard = $('#new-wizard');
        let newMember = $('<li></li>').text(newWizard.val());
        switch(house){
            case 0:
                $('#gryffindor').append(newMember);
                break;
            case 1:
                $('#slytherin').append(newMember);
                break;
            case 2:
                $('#ravenclaw').append(newMember);
                break;
            default:
                $('#hufflepuff').append(newMember);
                break;
        }
        newWizard.val('');
    });

    /**********************************************
     * 			Attributes and CSS
     *********************************************/

    /************
     *   HTML
     *************/
    //
    // var gryffindor = $('#gryffindor').html();
    // console.log(gryffindor);




    // TODO TOGETHER: store the html of #main-heading in a variable named mainHeading


    // var mainheading= $('#main-heading').html();
    // console.log(mainheading);
    //
    // $("#main-heading").click(function(){
    //     $(this).html("hogwarts")
    // })

    // TODO: uncomment the line below

    // alert(mainheading);

    // TODO TOGETHER: using the css method, grab the current width of the sorting hat img. Console log your results
    console.log($("img").css("width"));
    /************
     *   CSS
     ************/

    // TODO TOGETHER:  Using an event listener and css method, increase the font-size of 'Sorting Hat' when clicked.
    //    How can font size be changed using .html()?

    $("#main-heading").click(function(){
        $(this).css("font-size", "100px");
    })

    // TODO: Using a css method, change the banner background-color to black
    //  Hint: make sure you use the right selector

    $(".banner").css("background-color", "black");
    /**********************
     *  Class Manipulation
     **********************/

    // TODO TOGETHER: When the 'Houses' button is clicked, add the class 'house' to anything with a class of 'house-name'
//
// $('#highlight-houses').click(function (){
//     $(".house-name").addClass("house");
// })
//

    // TODO TOGETHER: Comment out the code above. Add the class of 'house' to all the 'house-names'
    // $('#highlight-houses').click(function (){
    //     $(".house-name").toggleClass('house');
    // })
    // TODO: Write the event listener to remove the class instead

    // TODO TOGETHER: Refactor your addClass and removeClass methods to toggle the 'house' class instead

    // This provides the 'Lock In' functionality. Selected my button -> add an event listener
    $('#lock-g').click(function(e){
        //select heading to toggle background-color assigned in CSS
        $('#gryffindor-house').toggleClass('gryffindor');
        //conditional that changes the message in button depending on class property
        if($('#gryffindor-house').hasClass('gryffindor')){
            $(this).text('Unlock');
            // $('#gryffindor').css('background-color','red');
        }else {
            $(this).text('Lock In');
            // $('#gryffindor').css('background-color','');
        }
    });

    $('#lock-s').click(function(e) {
        $('#slytherin-house').toggleClass('slytherin');
        if($('#slytherin-house').hasClass('slytherin')){
            $(this).text('Unlock');
        }else {
            $(this).text('Lock In');
        }
    });
    //TODO TOGETHER: complete the Lock In functionality for Slytherin
    //TODO: Add the Lock In functionality for Ravenclaw and Hufflepuff

    $('#lock-b').click(function(e) {
        $('#raven-house').toggleClass('ravenclaw');
        if($('#raven-house').hasClass('ravenclaw')){
            $(this).text('Unlock');
        }else {
            $(this).text('Lock In');
        }
    });

    $('#lock-r').click(function(e) {
        $('#huffle-house').toggleClass('hufflepuff');
        if($('#huffle-house').hasClass('hufflepuff')){
            $(this).text('Unlock');
        }else {
            $(this).text('Lock In');
        }
    });


    /**********************************************
     * 			       Traversing
     *********************************************/

    //TODO TOGETHER: Using the each method, highlight every other list item in the Ravenclaw house
    //TODO TOGETHER: Change the font color of the first list element in Hufflepuff
    //TODO TOGETHER: Change the font color of the last list element in Slytherin

    //TODO TOGETHER: When the 'Witches' button is clicked, highlight all names that have been assigned the class of 'witches'
    $('#highlight-witches').click(function(e){
        $('li').each(function(){
            if($(this).hasClass('witches')){
                $(this).toggleClass(('witch'))
            }
        });
    });

    $('#highlight-wizards').click(function(e){
        $('li').each(function(){
            if($(this).hasClass('wizards')){
                $(this).toggleClass(('wizard'));
                $(this).next().css('color', 'orange');
            }
        });
    });

    //BONUS: .prev() method

    // $('ul').click(function(e){
    //     $(this).prev().addClass('gryffindor');
    // });

});