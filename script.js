var character = document.getElementById("character");
var block = document.getElementById("block");

var isJumping = false;

function jump(){ 
        isJumping = true;
        var characterTopInicial = character.getBoundingClientRect().top      
        var goingUp = setInterval(function(){    
            if (characterTopInicial - character.getBoundingClientRect().top > 50){
                clearInterval(goingUp);
                isJumping = false;
            }  
            var add_top = character.getBoundingClientRect().top - 5;
            character.style.top = add_top.toString() + "px";           
        }, 20);       
       
}


var goingDown = setInterval(function(){
    if(character.getBoundingClientRect().top < 150 && isJumping == false){
        var add_top = character.getBoundingClientRect().top + 1;
         character.style.top = add_top.toString() + "px";   
    }

 },25)

var collisionDetection = setInterval(function(){
    var rect_character = character.getBoundingClientRect();
    var rect_block = block.getBoundingClientRect();
    if (rect_character.right > rect_block.left && rect_character.left < rect_block.right && rect_character.bottom > rect_block.top) {
        block.style.animation = "none";
        //alert("you lost");
    }
}, 10);
