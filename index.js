$(".title").css("color","green")
$("button").click(function(){
     $.ajax({url: "http://localhost:4001/", success: function(result){
       console.log("yes");
      $("#div1").text(result);
    }});
  }); 