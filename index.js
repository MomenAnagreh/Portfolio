// $(".title")//.css("color","green")
// $("#age").click(function(){
//      $.ajax({url: "http://localhost:4001/user/momen", method: "POST", data: {name: "momen anagreh", db: "users"}, success: function(result){
//       $("#div1").text(result.age);
//      }});
//   }); 
$(".title")//.css("color","green")
$("#age").click(function(){
     $.ajax({url: "http://localhost:4001/user/momen", method: "POST", success: function(result){
      $("#div1").text(result);
     }});
  }); 