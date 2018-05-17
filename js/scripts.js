score = parseInt(01);
$(document).ready(function() {
  function yourFunction() {
    setInterval(exeFunction, 200);
  }

  function exeFunction() {
    $("#tab").click(function(){
      $("#tab").hide();
      $("#tab1").show();
    });

    var imagesArray = ["img/lion.jpg", "img/homecat.jpg", "img/cheetah.jpg", "img/blackpanther.jpg"];
    $("#tab1").find('img[src$="img/blackpanther.jpg"]').click(function() {
      $("#tab1").hide();
      $("#qn1a").show();


    });
    var num = Math.floor(Math.random() * 4);
    document.canvas.src = imagesArray[num];
    imagesArray.splice(num, 1);


    var num1 = Math.floor(Math.random() * 3);
    document.canvas1.src = imagesArray[num1];
    imagesArray.splice(num1, 1);

    var num2 = Math.floor(Math.random() * 2);
    document.canvas2.src = imagesArray[num2];
    imagesArray.splice(num2, 1);

    document.canvas3.src = imagesArray[0];

    imagesArray.splice(0, 1);

  }
  yourFunction()

  $(".two").click(function() {
    $("#qn1a").hide();
    $('#displayed').show();
    $('#score').show()
    score = parseInt(0 + 1);
    $("#score").text(score);

    number = Math.floor(Math.random() * 4) + 1;
    $("#win").append("image " + number)
    var imagesArray = ["img/image 1", "img/image 2", "img/image 3", "img/image 4"];
    $("#tab3").show();

    $("#tab3").addClass("image");
    var num3 = Math.floor(Math.random() * 4);
    document.canvas4.src = imagesArray[num3];
    var src = [num3]
    imagesArray.splice(num3, 1);


    var num4 = Math.floor(Math.random() * 3);
    document.canvas5.src = imagesArray[num4];

    imagesArray.splice(num4, 1);

    var num5 = Math.floor(Math.random() * 2);
    document.canvas6.src = imagesArray[num5];

    imagesArray.splice(num5, 1);

    document.canvas7.src = imagesArray[0];

    imagesArray.splice(0, 1);




    $('#tab3').find('img[src$="image ' + number + '"]').click(function() {

      $("#tab3").hide();
      $("#tab2").show();
      score = parseInt(score + 1);
      $("#score").text(score);


    });



  });
  $("#tab2 form").submit(function(event) {
    event.preventDefault();
    var ansInput = $("input#answer").val();
    if (ansInput == "yes") {
      var modal = document.getElementById('myModal');
      modal.style.display = "block";
      score = parseInt(score + 1);
      $("#score").text(score);
    } else if (ansInput == "Yes") {
      var modal = document.getElementById('myModal');
      modal.style.display = "block";
      score = parseInt(score + 1);
      $("#score").text(score);
    } else if ($("#answer").val() == '') {
      var modal = document.getElementById('myModal3');
      modal.style.display = "block";
      score = parseInt(score - 1);
      $("#score").text(score);
    } else {
      var modal = document.getElementById('myModal4');
      modal.style.display = "block";
      score = parseInt(score - 1);
      $("#score").text(score);
    }
    $("input#answer").val(' ');
    $(".q3").click(function(event) {
      modal.style.display = "none";
      $("#tab2").hide();
      $("#tab4").show();
    })
  })
  $("#hint").click(function(event) {
    $(".black").show();
  })
  $("#drunk").click(function(event) {
    $("#tab5").hide();
    $("#last").show();
    $("#inlast").show();
    score = parseInt(score + 1);
    if (score == 1) {
      $(".links").hide();
      var elem = document.getElementById("myBar");
      var width = 1;
      var id = setInterval(frame, 10);

      function frame() {
        if (width >= 20) {
          clearInterval(id);
        } else {
          width++;
          elem.style.width = width + '%';
          elem.innerHTML = width * 1 + '%';
        }
      }
    } else if (score == 2) {
      $(".links").hide();
      var elem = document.getElementById("myBar");
      var width = 1;
      var id = setInterval(frame, 10);

      function frame() {
        if (width >= 40) {
          clearInterval(id);
        } else {
          width++;
          elem.style.width = width + '%';
          elem.innerHTML = width * 1 + '%';
        }
      }
    } else if (score == 3) {
      var elem = document.getElementById("myBar");
      var width = 1;
      var id = setInterval(frame, 10);

      function frame() {
        if (width >= 60) {
          clearInterval(id);
        } else {
          width++;
          elem.style.width = width + '%';
          elem.innerHTML = width * 1 + '%';
        }
      }
    } else if (score == 4) {
      var elem = document.getElementById("myBar");
      var width = 1;
      var id = setInterval(frame, 10);

      function frame() {
        if (width >= 60) {
          clearInterval(id);
        } else {
          width++;
          elem.style.width = width + '%';
          elem.innerHTML = width * 1 + '%';
        }
      }
    } else if (score == 5) {
      var elem = document.getElementById("myBar");
      var width = 1;
      var id = setInterval(frame, 10);

      function frame() {
        if (width >= 100) {
          clearInterval(id);
        } else {
          width++;
          elem.style.width = width + '%';
          elem.innerHTML = width * 1 + '%';
        }
      }
    }


    $("#score").text(score);

  })
  $("#tab4 form").submit(function() {
    event.preventDefault();
    var yourAnswer = parseInt($("input#answer1").val());
    var correct = parseInt("5")
    var modal = document.getElementById('myModal5');
    modal.style.display = "block"
    if (yourAnswer == correct) {
      $("#output").text("You are correct")
      score = parseInt(score + 1);
      $("#score").text(score);
    } else {
      $("#output").text("nooo dummy")
      score = parseInt(score - 1);
      $("#score").text(score);
    }
    $("#dip5").click(function(event) {
      $("#tab4").hide();
      $("#tab5").show();
      modal.style.display = "none"
    })
    $("#foot").click(function(event) {
      $("#last").show();
      $("#inlast").show();
      score = parseInt(score - 1);
      if (score == 1) {
        $(".links").hide();
        var elem = document.getElementById("myBar");
        var width = 1;
        var id = setInterval(frame, 10);

        function frame() {
          if (width >= 20) {
            clearInterval(id);
          } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width * 1 + '%';
          }
        }
      } else if (score == 2) {
        $(".links").hide();
        var elem = document.getElementById("myBar");
        var width = 1;
        var id = setInterval(frame, 10);

        function frame() {
          if (width >= 40) {
            clearInterval(id);
          } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width * 1 + '%';
          }
        }
      } else if (score == 3) {
        var elem = document.getElementById("myBar");
        var width = 1;
        var id = setInterval(frame, 10);

        function frame() {
          if (width >= 60) {
            clearInterval(id);
          } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width * 1 + '%';
          }
        }
      } else if (score == 4) {
        var elem = document.getElementById("myBar");
        var width = 1;
        var id = setInterval(frame, 10);

        function frame() {
          if (width >= 60) {
            clearInterval(id);
          } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width * 1 + '%';
          }
        }
      } else if (score == 5) {
        var elem = document.getElementById("myBar");
        var width = 1;
        var id = setInterval(frame, 10);

        function frame() {
          if (width >= 100) {
            clearInterval(id);
          } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width * 1 + '%';
          }
        }
      }

      $("#score").text(score);
      $("#tab5").hide();

    })
  });




})
