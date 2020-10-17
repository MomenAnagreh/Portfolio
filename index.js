$(".title")//.css("color","green")
$("#firstTwenty").click(function(){
     $.ajax({url: "http://localhost:4001/user/momen", method: "POST", success: function(result){
      $('#body').html();
      for(let i=0; i<result.fib.length; i++){
         var dv = '<div id="div'+i+'"></div>';
         $('#body').append(dv);
         
         $("#div"+String(i)).text(result.fib[i]);
     }}});
}); 
$("#indexNumber").click(function(){
   $.ajax({url: "http://localhost:4001/user/momen", method: "POST", success: function(result){
      let index = prompt("Enter the index for the number?");
      $("#index").text(result.fib[index-1])
   }});
}); 