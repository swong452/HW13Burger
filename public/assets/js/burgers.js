// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".change-devour").on("click", function (event) {
    console.log("change-devour listener");
    var id = $(this).data("id");
    var devourBurger = $(this).data("devourBurger");

    var eatThisBurger = {
      burger: devourBurger
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
