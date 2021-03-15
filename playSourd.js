const sound = require('sound-play');

function playSound() {
    sound.play(__dirname + "/Heart Rate Monitor Flatline-SoundBible.com-2063567528.mp3");
}

module.exports = playSound;
