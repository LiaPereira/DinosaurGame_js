var character = document.getElementById("character");
var block = document.getElementById("block");

//The charecter can jump:
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

//After the character jumps, it goes down:
var goingDown = setInterval(function(){
    if(character.getBoundingClientRect().top < 150 && isJumping == false){
        var add_top = character.getBoundingClientRect().top + 1;
        character.style.top =add_top.toString() + "px";
    }

 },25)

//The block changes size from big to small every time there's a new iteration in its animation "move"
function onAnimationIteration() {
    var computedStyle = window.getComputedStyle(block);
    var blockHeight = computedStyle.getPropertyValue("height");
    if (blockHeight == "20px"){
        block.style.height = "40px";
        block.style.top = "110px";
    }
    else if (blockHeight == "40px"){
        block.style.height = "20px";
        block.style.top = "130px";
    }   
}
block.addEventListener("animationiteration", onAnimationIteration);

//If the character and the block colide, the block stops moving and the message "you lost" appears
var collisionDetection = setInterval(function(){
    var rect_character = character.getBoundingClientRect();
    var rect_block = block.getBoundingClientRect();
    if (rect_character.right > rect_block.left && rect_character.left < rect_block.right && rect_character.bottom > rect_block.top) {
        block.style.animation = "none";
        alert("you lost");
    }
}, 10);
