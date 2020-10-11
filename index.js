$(".title")//.css("color","green")
$("#firstTwenty").click(function(){
     $.ajax({url: "http://localhost:4001/user/momen", method: "POST", success: function(result){
      for(let i=0; i<23; i++){
         let x = result.fib[i-1];
         $("#div"+String(i)).text(x);
     }}});
}); 
$("#indexNumber").click(function(){
   $.ajax({url: "http://localhost:4001/user/momen", method: "POST", success: function(result){
      let index = prompt("Enter the index for the number?");
      $("#index").text(result.fib[index-1])
   }});
}); 