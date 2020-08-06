// Make sure we wait to attach our handlers until the DOM is fully loaded.
//$(function () {
$(document).ready(function () {
  $(".change-devour").on("click", function (event) {
    event.preventDefault();
    console.log("change-devour listener");
    var id = $(this).data("id");

    // devour state value, is base on data-devour value in index.handlebars
    //devourState returns true/false value, should this burger be devoured
    // return true if user clicked on devour button
    var devourState = $(this).data("devour");

    // devour is a field of each burger record
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

    // on index.handlebars, under create-form, id = addBurger
    // and the value in the user input, can be extracted using .val
    // name here has to match the SQL Table burger field name "name"
    var newBurger = {
      name: $("#addBurger").val().trim()
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
