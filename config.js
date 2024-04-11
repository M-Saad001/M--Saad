const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://m-saad001:<password>@saad01.268bdgk.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "";
global.website=process.env.GURL || "" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/9c39650103d292eca4a78.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923418595810" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923418595810";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923418595810";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/9c39650103d292eca4a78.jpg,https://telegra.ph/file/9c39650103d292eca4a78.jpg,https://telegra.ph/file/9c39650103d292eca4a78.jpg,https://telegra.ph/file/9c39650103d292eca4a78.jpg" // 
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923418595810,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923418595810,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_35_04_11_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwibUxYeEJuU1JWZGc2UUQ5VmFNMWFycDhpNkNmZHcwR1l2YUYrOER0K0NtMD1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInZHWGdFMk1NVk9pOURwNnlxeVYxRzRJb0JxNlJhRDgzcHo5NmFtNmF3Ulk9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiZ0M2d0EySmVQcjhpcXFDOTN0Y0lQYk5wVGp5L3pNQ0RFZTJYZ1ovQ0RVdz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInRHVVdHT1FCREVRUE9zaXE3c3Y5UmNaeXU5MW1NNkNnQVNacmErQVp4MEk9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiNEFYVEFwMjZCRUdvQ1duWXBBa1k1QlVDdlN4NFFmRWpXZzFaY3lWaU5HTT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlg0SmNHTkd0UXB4WmxXVnM2cFg4d2pocE1IREFZZ2U2anUvWlI0cSs5QTQ9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJxTDcvMmo2K3VvTmQ3TitjQ3VKQjYrOWUyZWZjSi9RTDFOSkF2YXdzSUdVPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwibkJvYWpkNlNvZkRTZElhcWlMK3k0ak0xQ3dFbERnRmVlSWZsV2p4cjZWQT1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJpK0pwOHprbk1PYkM0NHhVeGcrRjg5cHcxZEtXVnlzb3JXeEdINFhpZkhHS1V4TWlpZVF4YzNzTURYTTByQTkyeUtJb0NrT1p1Z2lsTE5JeU9pdzFCQT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MjE3LFwiYWR2U2VjcmV0S2V5XCI6XCJ0aWx3dk90b0xrMzVCRUVHTkMzUml5d1RhRzhQcWdsdG5jUUFXcWF6NmNBPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W3tcImtleVwiOntcInJlbW90ZUppZFwiOlwiOTIzMjM5NjI2NDI0QHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjlGQzMyOEYwMjAwQjAwREM0NzAzN0FDNEVEMjZENzBEXCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MTI4NjQxNDd9LHtcImtleVwiOntcInJlbW90ZUppZFwiOlwiOTIzMjM5NjI2NDI0QHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjFEMjU1RUYzNDBDNkUxMkNBNDdBNjRCMjM4QzRDOEY3XCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MTI4NjQxNDd9XSxcIm5leHRQcmVLZXlJZFwiOjMxLFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjozMSxcImFjY291bnRTeW5jQ291bnRlclwiOjEsXCJhY2NvdW50U2V0dGluZ3NcIjp7XCJ1bmFyY2hpdmVDaGF0c1wiOmZhbHNlfSxcImRldmljZUlkXCI6XCJ5TXJhQ0VDUFNTYVJQRHYzVThldmdRXCIsXCJwaG9uZUlkXCI6XCJiNmIwNmM3Ny1kNTYyLTQyMDUtODc2Zi1hYmRmOTJkNTE4YjhcIixcImlkZW50aXR5SWRcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImZrMDA1QlMrRm53OVQyV3N0U1FNN0hMS1BBTT1cIn0sXCJyZWdpc3RlcmVkXCI6dHJ1ZSxcImJhY2t1cFRva2VuXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJBa2krOTFmS2xVamUzMHNReEFSQm5yM1ZORUU9XCJ9LFwicmVnaXN0cmF0aW9uXCI6e30sXCJwYWlyaW5nQ29kZVwiOlwiMzgyQ1NKOERcIixcIm1lXCI6e1wiaWRcIjpcIjkyMzIzOTYyNjQyNDoxNEBzLndoYXRzYXBwLm5ldFwiLFwibGlkXCI6XCIxMDQ4ODc4NjYxMTgzNTg6MTRAbGlkXCIsXCJuYW1lXCI6XCLiuJnwk4apwqvhj5rkuYjkuYjhjqDwlJKdwrvqnJvYnPCThqpcIn0sXCJhY2NvdW50XCI6e1wiZGV0YWlsc1wiOlwiQ1BYMjZlSUVFSTczNExBR0dBUWdBQ2dBXCIsXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6XCJYV2wxNEhTcTZmbUNLNlB2RXBjM3Y1Z0I5aW1wZG55UEM5Q2sva1dmbVhZPVwiLFwiYWNjb3VudFNpZ25hdHVyZVwiOlwiUmp1K05nOFBnNzd3V0xSTEJhL0VpRnUrNGt4WG1GekJiSlo2R1JZcGFyTzA4UlU3QlFQcTBjeWR0WUR6TCsxeVRSa2JzbE1QSjBhN2pJbDNzeENRQ1E9PVwiLFwiZGV2aWNlU2lnbmF0dXJlXCI6XCJyaUxYdnBRa3E1cWpwWEFtRkoxVjlXbHNGemxkQXBybTFvVHZPOVpPMXN5WkZBa3orenFVSVpLc2xIbW4vUjJOQmF5TlFaODVkWkhnVy9OWVl5SS9DZz09XCJ9LFwic2lnbmFsSWRlbnRpdGllc1wiOlt7XCJpZGVudGlmaWVyXCI6e1wibmFtZVwiOlwiOTIzMjM5NjI2NDI0OjE0QHMud2hhdHNhcHAubmV0XCIsXCJkZXZpY2VJZFwiOjB9LFwiaWRlbnRpZmllcktleVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQlYxcGRlQjBxdW41Z2l1ajd4S1hONytZQWZZcHFYWjhqd3ZRcFA1Rm41bDJcIn19XSxcInBsYXRmb3JtXCI6XCJhbmRyb2lkXCIsXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjoxNzEyODY0MTQ1LFwibXlBcHBTdGF0ZUtleUlkXCI6XCJBQUFBQUp5VVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUp5VS5qc29uIjogIntcImtleURhdGFcIjpcIkZlTTZSSThrVEVoZFFKVXRQWDczOGxBazBtOTZLTFl0cUhMaEJsQ3E4SFk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTI4MDk5ODI1NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: ⸙𓆩«Ꮪ么么Ꭰ𔒝»ꜛ؜𓆪, 2: ᶬ᭄Ꮪ么么Ꭰメ, 3: SAAD Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©⸙𓆩«Ꮪ么么Ꭰ𔒝»ꜛ؜𓆪"),
 
  author : process.env.PACK_AUTHER|| "SAAD<3",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "SAAD<3",
  ownername:process.env.OWNER_NAME|| "⸙𓆩«Ꮪ么么Ꭰ𔒝»ꜛ؜𓆪",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
