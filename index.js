
var len = document.querySelectorAll(".drum").length;

for (var i = 0; i < len; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var btn = this.innerHTML;
        switch (btn) {
            case "w":
                var y = new Audio("sounds/tom-1.mp3");
                y.play();
                break;

            case "a":
                var z = new Audio("sounds/tom-2.mp3");
                z.play();
                break;

            case "s":
                var e = new Audio("sounds/tom-3.mp3");
                e.play();
                break;

            case "d":
                var x = new Audio("sounds/tom-4.mp3");
                x.play();
                break;

            case "j":
                var k = new Audio("sounds/crash.mp3");
                k.play();
                break;

            case "k":
                var x = new Audio("sounds/kick-bass.mp3");
                x.play();
                break;

            case "l":
                var x = new Audio("sounds/snare.mp3");
                x.play();
                break;


            default:
                console.log("btn");
        }

        addanimation(btn);
    });

    
}


document.addEventListener("keydown",function(ku){
    
    makesound(ku.key);
    //key is a property which tells us which key is pressed.
    addanimation(ku.key);
    
});

function makesound(key)
{
    switch (key) {
        case "w":
            var y = new Audio("sounds/tom-1.mp3");
            y.play();
            break;

        case "a":
            var z = new Audio("sounds/tom-2.mp3");
            z.play();
            break;

        case "s":
            var e = new Audio("sounds/tom-3.mp3");
            e.play();
            break;

        case "d":
            var x = new Audio("sounds/tom-4.mp3");
            x.play();
            break;

        case "j":
            var k = new Audio("sounds/crash.mp3");
            k.play();
            break;

        case "k":
            var x = new Audio("sounds/kick-bass.mp3");
            x.play();
            break;

        case "l":
            var x = new Audio("sounds/snare.mp3");
            x.play();
            break;


        default:
            console.log("btn");
    }
}


function addanimation(currentbutton)
{
    var activebutton = document.querySelector("."+ currentbutton);
    activebutton.classList.add("pressed");
    setTimeout(() => {
        activebutton.classList.remove("pressed");
    }, 100);
}