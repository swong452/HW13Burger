// Make sure we wait to attach our handlers until the DOM is fully loaded.
//$(function () {
$(document).ready(function () {
  $(".change-devour").on("click", function (event) {
    event.preventDefault();
    console.log("change-devour listener");
    var id = $(this).data("id");
    //devourState returns true/false value, should this burger be devoured
    // return true if user clicked on devour button
    var devourState = $(this).data("devour");

    var eatThisBurger = {
      devour: devourState
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: eatThisBurger
    }).then(
      function () {
        console.log("Eat This burger", eatThisBurger);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  // new Burger listener
  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#ca").val().trim()
      // JQuery syntax. for name = sleepy
      // Radio button of name = sleepy, test to see which button is checked. 
      //sleepy: $("[name=sleepy]:checked").val().trim()
    };

    console.log("Asset/burger submit , before ajax POST", newBurger);
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created new Burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});


// Devoured burger
