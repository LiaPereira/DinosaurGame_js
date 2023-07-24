var character = document.getElementById("character");
var block = document.getElementById("block");


function jump(){

    if(character.classList != "animate"){
        character.classList.add("animate");
    }
    
    setTimeout(function(){
        character.classList.remove("animate")
    }, 500); 
  
}

var collisionDetection = setInterval(function(){
    var rect_character = character.getBoundingClientRect();
    var rect_block = block.getBoundingClientRect();
    if (rect_character.right > rect_block.left && rect_character.left < rect_block.right && rect_character.bottom > rect_block.top) {
        block.style.animation = "none";
        alert("you lost");
    }
}, 10);
