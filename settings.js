

const fs = require('fs');
const chalk = require('chalk');

//owmner v card
global.ytname = "YT: HANSTECH0" //ur yt chanel name
global.socialm = "GitHub: HAROLDMTH" //ur github or insta name
global.location = "EARTH, AFRICA, CAMEROON " //ur location

//new
global.botname = '© 𝙷𝙰𝙽𝚂-𝚇𝙼𝙳' //ur bot name
global.ownernumber = ['237696900613'] //ur owner number, dont add more than one
global.ownername = '© 𝙷𝙰𝙽𝚂 𝚃𝙴𝙲𝙷' //ur owner name
global.websitex = "https://www.youtube.com/@hanstech0"
global.wagc = "https://whatsapp.com/channel/0029VaZDIdxDTkKB4JSWUk1O"
global.themeemoji = '➩'
global.wm = "𝙷𝙰𝙽𝚂 𝚃𝙴𝙲𝙶"
global.botscript = 'https://github.com/GlobalTechInfo/GLOBAL-MD' //script link
global.packname = "Sticker By"
global.author = "𝙷𝚊𝚗𝚜𝚃𝚎𝚌𝚑\n\n+237696900612"
global.creator = "237696900612@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["237696900612"] // Premium User

//channel id
global.xchannel = {
	jid: '120363319098372999@newsletter'
	}

//bot sett
global.typemenu = 'v12' // menu type 'v1' => 'v12'
global.typereply = 'v4' // reply type 'v1' => 'v4'
global.autoblocknumber = '91' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code

global.listv = ['•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆']
global.tempatDB = 'database.json'

global.limit = {
	free: 100,
	premium: 999,
	vip: 'VIP'
}

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	error: 'Error!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
	done: 'Done'
}

global.bot = {
	limit: 0,
	uang: 0
}

global.game = {
	suit: {},
	menfes: {},
	tictactoe: {},
	kuismath: {},
	tebakbom: {},
}

//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
