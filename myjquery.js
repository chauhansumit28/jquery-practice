// jQuery ready function

$(document).ready(function () {
  // Display alert when the document is ready
  alert("jQuery is working!");

  // Change text of an element
  $("#changeText").text("This text has been changed using jQuery.");

  // Add a class to an element
  $("#addColor").addClass("red");

  // Modify attribute of an element
  $("#changeLink").attr("href", "https://releases.jquery.com/");

  // Click event handler
  $("#clickButton").click(function () {
    $("#clickMessage").text("Button clicked!");
  });

  // Hover event handler
  $("#hoverElement").hover(
    function () {
      $(this).text("Mouse over me!");
    },
    function () {
      $(this).text("Hover over me!");
    }
  );

  // Toggle event handler
  $("#toggleButton").click(function () {
    $("#toggleContent").toggle();
  });

  // Animate function
  $("#btnAnimate").click(function () {
    $("#box").show().animate(
      {
        width: "400px",
        height: "400px",
        opacity: 0.5,
        fontSize: "24px",
      },
      1000
    );
  });

  // Fade in function
  $("#btnFadeIn").click(function () {
    $("#box").fadeIn(1000);
  });

  // Fade out function
  $("#btnFadeOut").click(function () {
    $("#box").fadeOut(1000);
  });

  // Slide down function
  $("#btnSlideDown").click(function () {
    $("#box").slideDown(1000);
  });

  // Slide up function
  $("#btnSlideUp").click(function () {
    $("#box").slideUp(1000);
  });

  // form validation

  $("#submitForm").click(function () {
    // Reset error messages
    $(".error-message").hide();

    // Validate form fields
    var isValid = true;
    if ($("#name").val() === "") {
      $("#nameError").show();
      isValid = false;
    }
    if ($("#email").val() === "") {
      $("#emailError").show();
      isValid = false;
    }
    if ($("#password").val() === "") {
      $("#passwordError").show();
      isValid = false;
    }

    // Prevent form submission if not valid
    if (!isValid) {
      return false;
    }
  });

  // Toggle and Accordion:
  // Toggle functionality
  $(".toggle-btn").click(function () {
    $(this).next(".toggle-section-content").slideToggle();
  });

  // Accordion functionality
  $(".accordion-section h3").click(function () {
    $(this)
      .toggleClass("active")
      .next(".accordion-section-content")
      .slideToggle()
      .parent()
      .siblings()
      .children("h3")
      .removeClass("active")
      .next(".accordion-section-content")
      .slideUp();
  });

  //  Plugin Usage:

  // Initialize Slick carousel
  $(".slider").slick({
    autoplay: true, // Autoplay slides
    autoplaySpeed: 2000, // Autoplay speed in milliseconds
    arrows: true, // Show navigation arrows
    dots: true, // Show navigation dots
  });
});
