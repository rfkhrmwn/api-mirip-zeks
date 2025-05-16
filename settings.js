const fs = require('fs')

global.creator = 'rfkhrmwn' 
global.apikey = ["rfkhrmwn", "risma", "rifma312"]

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
	delete require.cache[file]
	require(file)
})
