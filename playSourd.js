const sound = require('sound-play');

function playSound() {
    return sound.play(__dirname + "/alarm_sound.mp3");
}

module.exports = playSound;
