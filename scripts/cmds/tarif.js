module.exports = {
 config: {
	 name: "tarif",
	 version: "1.0",
	 author: "AceGun",
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "𝗡𝗢 𝗣𝗥𝗘𝗙𝗜𝗫",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "tarif") {
 return message.reply({
 body: " 「 🥰❥︎----ღ᭄_ᴛʜɪs ʙᴏᴛ ..\n❥︎----ღ᭄_ᴍᴀᴋᴇ ʙʏ ❞࿐.🌴🤎🙂.\n❥ ᴍᴏʜᴀᴍᴍᴀᴅ ʙᴀʏᴊɪᴅ ᴏᴋʜ ʙʏᴇ\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\n𝐌𝐎𝐇𝐀𝐌𝐌𝐀𝐃 𝐁𝐀𝐘𝐉𝐈𝐃」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/8a6M5Ii.gif")
 });
 }
 }
}
