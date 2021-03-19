var Client = require('castv2-client').Client;
var DefaultMediaReceiver = require('castv2-client').DefaultMediaReceiver;
const googleTTS = require('google-tts-api');

var App = {
    playin: false,
    DeviceIp: "",
    Player: null,
    GoogleHome: function (host, url) {
        var client = new Client();
        client.connect(host, function () {
            client.launch(DefaultMediaReceiver, function (err, player) {
                // client.setVolume({ level: 1 });
                var media = {
                    contentId: url,
                    contentType: 'audio/mp3',
                    streamType: 'BUFFERED'
                };
                App.Player = player;
                App.Player.load(media, { autoplay: true }, function (err, status) {
                    App.Player.on('status', function (status) {
                        if (status.playerState === "IDLE" && App.playin === false) {
                            client.close();
                        }
                    });
                });
            });
        });
        client.on('error', function (err) {
            console.log('Error: %s', err.message);
            client.close();
        });
    },
    run: function (ip, text) {
        App.DeviceIp = ip;
        const url = googleTTS.getAudioUrl(text, {
            lang: 'en-US',
            slow: false,
            host: 'https://translate.google.com',
        });
        App.GoogleHome(App.DeviceIp, text, function (res) {
            console.log(res);
        })
    },
    broadcast: function(text){
        const ips = process.env.GOOGLEHOME_IPS.split(","); //From config, 192.168.68.105,192.168.68.107,192.168.68.124
        for (var s of ips){
            App.run(s, text);
        }
    }
};

module.exports = App;
