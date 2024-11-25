document.getElementById('submbttn').addEventListener('click', function(){
var computer=Math.floor(Math.random() * 3);
var player = parseInt(document.getElementById('userInput').value, 10); 
var result="";

if(player===0){
    if(computer===0){
        result="<h4>Draw</h4>";
    }
    else if(computer===1){
        result ="<h4>Computer win it choose 1</h4>";
    }
    else{
        result="<h4>Player win,he choose 2</h4> "
    }
}
else if(player===1){
    if(computer===0){
        result="<h4>Player win,he choose 0</h4>"
    }
    else if(computer===1){
        result="<h4>Draw</h4>";
    }
    else{
        result ="<h4>Computer win, it choose 2</h4>";
    }
}
else if(player===2){
    if(computer===0){
        result="<h4>Computer win., it choose 0</h4>"
    }
    else if(computer===1){
        reuslt="<h4>Player win, he choose 1</h4>"
    }
    else{
        result="<h4>Draw</h4>"
    }
}
else{
    result="<h4>Invalid choice</h4>"
}
document.getElementById('result').innerHTML = result; 
})