var index = 0;
var isTriangle = false;
var color = ["#e91h63","#00bgcd4","#ffec3b","#129d17","#d936f4","#1f1010","blue"];
var chShape = document.getElementById("change-shape");
var chColor = document.getElementById("change-color");


chShape.addEventListener("click",changeShape);
chColor.addEventListener("click",changeColor);

function changeColor()
{
    document.getElementById("circle").style.backgroundColor=color[index++];
    if(index == 7)
      index = 0;


}
function changeShape()
{
  if(!isTriangle)
  {
    var i = document.getElementsByClassName("inner")[0];
    i.className = "triangle-bottomleft";
    isTriangle = true;
  }
  else
  {
    var i = document.getElementsByClassName("triangle-bottomleft")[0];
    i.className = "inner";
    isTriangle = false;
  }

   
}
