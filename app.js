const animals = document.querySelectorAll(".animal");
for(let i=0; i<animals.length; i++){
    animals[i].addEventListener("click",function() {
        let animal = this.innerHTML
        let lowerAnimal = animal.toLowerCase();
        makeSound(lowerAnimal);
        addStyle(lowerAnimal);
    })
}

function addStyle(name) {
    let activeEle = document.querySelector("."+name);
    activeEle.classList.add("active");
    setTimeout(function(){
        activeEle.classList.remove("active");
    },200)
}

function makeSound(name) {
    switch(name) {
        case "chicken":
            let sound1 = new Audio("sounds/Chicken.mp3");
            sound1.play();
            break;

        case "cow":
            let sound2 = new Audio("sounds/Cow.mp3");
            sound2.play();
            break;

        case "sheep":
            let sound3 = new Audio("sounds/Sheep.mp3");
            sound3.play();
            break;    

        

    }
}