const numberOfSongButton = document.querySelectorAll(".song_box").length;
const eachSong = document.querySelectorAll(".song_box")

let engSong = new Audio("music/Wellerman.mp3");
let chinaSong = new Audio("music/chinese_song.mp3");
let jpSong= new Audio("music/Kataomoi.mp3");
let thaiSong = new Audio("music/hne_han.mp3");
let violin = new Audio("music/Simply Three - Rain.mp3");
let engSong2 = new Audio("music/Imagine.mp3");

for (let i = 0; i < numberOfSongButton; i++) {
    document.querySelectorAll(".song_box")[i].addEventListener("click", function(){
        let buttonInnerHTML = this.innerHTML.toLocaleLowerCase();
        musicBox(buttonInnerHTML);
        buttonMove(buttonInnerHTML);
    });
}

document.addEventListener("keydown", (e)=>{
    musicBox(e.key)
    buttonMove(e.key)
})

function musicBox(button) {
        engSong.pause()
        chinaSong.pause()
        jpSong.pause()
        thaiSong.pause()
        violin.pause()
        engSong2.pause()
    switch(button){
        case "a":
            engSong.play()
        break;

        case "s":
            chinaSong.play()
        break;

        case "d":
            jpSong.play()
        break;

        case "f":
            thaiSong.play()
        break;

        case "g":
            violin.play()
        break;

        case "h":
            engSong2.play()
        break;

        default : console.log()
    }
}

function buttonMove(pressButton) {
    let activeButton = document.querySelector("." + pressButton);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    },1000)    
}


