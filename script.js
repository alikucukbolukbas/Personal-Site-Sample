const container = document.getElementById("container");
const sidebar = document.getElementById("sidebar");
const cross = document.getElementById("cross");
const comment = document.getElementById("comment");

container.addEventListener("click", function(){

  container.style.transform = "rotate(90deg)";
  container.style.width = "60px";
  container.style.height = "200px";
  container.style.marginTop = "-60px";
  let myTimeout = setTimeout(first,1500);
  
  function first(){
    
    container.style.width = "0px";
    container.style.visibility = "hidden";
    container.style.marginLeft = "100px";
  }
  let myTimeout2 = setTimeout(second,3000);
  
  function second (){
    comment.style.margin = "20% 25%";
    sidebar.style.height = "100vh";
  }



})


cross.addEventListener("click", function(){
  sidebar.style.height = "0";
  
  let newTimeout = setTimeout(third,1500);
  function third (){
    comment.style.margin = "20% auto";
    container.style.visibility = "visible";
    container.style.width = "100px";
    container.style.height = "50px";
    container.style.transform = "rotate(180deg)";
    container.style.marginTop = "30px";
    container.style.marginLeft = "80px";
  }

})



