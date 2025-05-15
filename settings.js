const fs = require('fs')

global.creator = 'rfkhrmwn' 
global.apikey = ["rfkhrmwn03", "susi", "anggun"]

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
	delete require.cache[file]
	require(file)
})
