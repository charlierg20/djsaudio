const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('DJSAudio Bot Online!');
});

client.on('message', message => {
	if (message.author.bot) return;

	function play(audio, vc) {
		if (vc != undefined) {
			vc.join().then(connection =>
				{
          //Joined VC Successfully
					const dispatcher = connection.play(audio);
					dispatcher.on("end", end => {
						message.guild.me.voice.channel.leave();
						});
				}).catch(err => console.log(err));
				isReady = true;
		} else {
			//User isn't in a VC
		}
	}

	if (message.content == "!play") {
		var vc1 = message.member.voice.channel;
		play("audio.mp3", vc1); //Replace audio.mp3 with whatever file you want to play
	}
});

client.login("put token here");
