var dogPosition = 20;
var dogForward = false;
var dogBackword = false;
var dogAction = false;

var manPosition = 20;
var manForward = false;
var manBackword = false;
var manAction = false;

var dog = document.getElementById('dog');
var man = document.getElementById('man');




function moveman(type) {
    if (type === "manForward") {
        manBackword = false
        manPosition += 5;
        man.style.right = manPosition + 'px';
        man.style.width = 200 + 'px'
        if (!manForward) {
            man.src = "images/man-backword.gif"
        }
        manForward = true;
    }
    else if (type === "manBackword") {
        manForward = false
        manPosition -= 5;
        man.style.right = manPosition + 'px';
        man.style.width = 350 + 'px'
        if (!manBackword) {
            man.src = "images/man-forward.gif"      
        }
        manBackword = true

    }
    else if (type === "manAction") {
        man.style.width = 300 + 'px '
        if (!manAction) {
            man.src = "images/man-action.gif"
        }
        manAction = true
    }
    
}




function moveDog(type) {
    if (type === "dogForward") {
        dogBackword = false
        dogPosition += 5;
        dog.style.left = dogPosition + 'px';
        if (!dogForward) {
            dog.src = "images/dog-forward.gif"
        }
        dogForward = true;
    }
    if (type === "dogBackword") {
        dogForward = false
        dogPosition -= 5;
        dog.style.left = dogPosition + 'px';
        if (!dogBackword) {
            dog.src = "images/dog-backword.gif"
        }
        dogBackword = true

    }
    if (type === " ") {
        if (!dogAction) {
            dog.src = "images/dog-action.gif"
        }
        dogAction = true
    }

}



function action(event) {
    if (event.key == "d") {
        moveDog("dogForward")
    } else if (event.key == "a") {
        moveDog("dogBackword")
    } else if (event.key == " ") {
        moveDog(" ")
    }
    else if (event.key === "ArrowLeft") {
        moveman("manForward")
    } else if (event.key === "ArrowRight") {
        moveman("manBackword")
    }
    else if (event.key === "Enter"){
        moveman("manAction")
    }
  

}

window.addEventListener('keydown', action)

function resetaction() {
    dog.src = "images/dog.gif"
    dogForward = false;
    dogBackword = false;
    dogAction = false;
    
    man.src = "images/man.gif"
    manForward = false;
    manBackword = false;
    manAction = false;


}


window.addEventListener('keyup', resetaction)
