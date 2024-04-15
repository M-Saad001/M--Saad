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
global.github=process.env.GITHUB|| "https://github.com/M-Saad001";
global.gurl  =process.env.GURL  || "";
global.website=process.env.GURL || "" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/37eb4b3bfd06279104182.jpg" ; // SET LOGO FOR IMAGE 



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
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/37eb4b3bfd06279104182.jpg,https://telegra.ph/file/37eb4b3bfd06279104182.jpg,https://telegra.ph/file/37eb4b3bfd06279104182.jpg,https://telegra.ph/file/37eb4b3bfd06279104182.jpg" // 
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_58_04_15_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiNFBRT1YxV3paZkx0aFc1ZDFtcjNGdU9SOCszRmgzRXorWDd3REsxUEFrST1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlJwMXZJTzZxRWF5K3QwdlBpd3czaW9wZWQyNG0wVmRrWGZjU0kxdUMvU3M9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwib0pvamNkZnBBNzEzQ2tIOUI4amFHZ2VEMzhabmRUVU5rTFRScy9JQUVsUT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIm9LY29IMk1zQVhBbjQ3OEp5TzVrU0xwcG9Sb3ZncFoyL3BoVDk0d1ViQms9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiY09jeFgxQTFSSE52dWVDN2ZFaUxHSDNlUnRGZ1pKYkNHR2hXeWVsREcxWT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlg5S1FQait0YnIzNHFJMGhVaFJuWjBSaDlrbTFFalFZd095TTRkci92V1k9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJrQlp4a04yazIxekc2S3d0VVZ4eGtIT2VodU1EaENPNEs0R0kwaG54RG1RPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiNkRKekw1KytMaURwVFRVRWorWnZQblF1b3kybUd2YzdNQWszNytQcERXdz1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJOOE16RmQ3MnoxSno5clZEbjhGblZxZFViNURyNHJ1R0ZHVmtSWk00K0tTL1FNcERCRFJ0ZTU4UUt6SlowQlNMSGFiVkI2RU85OEI2TmFheHNlN01CQT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MjUsXCJhZHZTZWNyZXRLZXlcIjpcIjhTVFZGNUdqS2dBeStyWUIxR3BCVjZHUzhDWkxBLzAxV3JtNmJhVFU0NzA9XCIsXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjpbe1wia2V5XCI6e1wicmVtb3RlSmlkXCI6XCI5MjMyMzk2MjY0MjRAcy53aGF0c2FwcC5uZXRcIixcImZyb21NZVwiOnRydWUsXCJpZFwiOlwiMEVGN0UwNjMxMDVGREE4OUM3MkMwRTZBMDZGNkZEQjdcIn0sXCJtZXNzYWdlVGltZXN0YW1wXCI6MTcxMzE5MzA3OH0se1wia2V5XCI6e1wicmVtb3RlSmlkXCI6XCI5MjMyMzk2MjY0MjRAcy53aGF0c2FwcC5uZXRcIixcImZyb21NZVwiOnRydWUsXCJpZFwiOlwiQUE1MDg5NzZCNEEwQzQ0RENGRjUxMzREOEUzMUE3NUNcIn0sXCJtZXNzYWdlVGltZXN0YW1wXCI6MTcxMzE5MzA3OX1dLFwibmV4dFByZUtleUlkXCI6MzEsXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOjMxLFwiYWNjb3VudFN5bmNDb3VudGVyXCI6MSxcImFjY291bnRTZXR0aW5nc1wiOntcInVuYXJjaGl2ZUNoYXRzXCI6ZmFsc2V9LFwiZGV2aWNlSWRcIjpcImd2aGNYc1E1UkppOEJYdjhvTXhPZlFcIixcInBob25lSWRcIjpcIjJhMjZhNTRkLTA1MTMtNDVkNi05YjI4LWIzMmJlNzNmOTY4OVwiLFwiaWRlbnRpdHlJZFwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiakZUMUw4S0hHOUQzd0UvRTBiKy9oTlhqdUpFPVwifSxcInJlZ2lzdGVyZWRcIjp0cnVlLFwiYmFja3VwVG9rZW5cIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInVvVWJDWDQzbkVRamxTWnhmeFp4bG9pa2tVYz1cIn0sXCJyZWdpc3RyYXRpb25cIjp7fSxcInBhaXJpbmdDb2RlXCI6XCJZOUs1R0hBOVwiLFwibWVcIjp7XCJpZFwiOlwiOTIzMjM5NjI2NDI0OjIyQHMud2hhdHNhcHAubmV0XCIsXCJsaWRcIjpcIjEwNDg4Nzg2NjExODM1ODoyMkBsaWRcIixcIm5hbWVcIjpcIuK4mfCThqnCq+GPmuS5iOS5iOGOoPCUkp3Cu+qcm9ic8JOGqlwifSxcImFjY291bnRcIjp7XCJkZXRhaWxzXCI6XCJDUG4yNmVJRUVQQ0E5YkFHR0FFZ0FDZ0FcIixcImFjY291bnRTaWduYXR1cmVLZXlcIjpcIlhXbDE0SFNxNmZtQ0s2UHZFcGMzdjVnQjlpbXBkbnlQQzlDay9rV2ZtWFk9XCIsXCJhY2NvdW50U2lnbmF0dXJlXCI6XCJxMWMvRGpzNzdTR0syWW4zM3BBM3B0UDI1UFhnMndYcGVXU1ZHM3h5TU5QOU5QRzNQZkYxLzBSTzNnem1sczMxWDdCY3UvSldYREVEVE9CNnY2ejNCQT09XCIsXCJkZXZpY2VTaWduYXR1cmVcIjpcIkhjaEMvSmU1N3ViTDI1WkpGY1A4ZXZ1dUl1OVlnaEM3OWcray9jeDVvUVhRM3EwUytianlXbXFRbHVtejU4V3lIR0RuSTRmdWtQR3I4N1lVYlVicUR3PT1cIn0sXCJzaWduYWxJZGVudGl0aWVzXCI6W3tcImlkZW50aWZpZXJcIjp7XCJuYW1lXCI6XCI5MjMyMzk2MjY0MjQ6MjJAcy53aGF0c2FwcC5uZXRcIixcImRldmljZUlkXCI6MH0sXCJpZGVudGlmaWVyS2V5XCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJCVjFwZGVCMHF1bjVnaXVqN3hLWE43K1lBZllwcVhaOGp3dlFwUDVGbjVsMlwifX1dLFwicGxhdGZvcm1cIjpcImFuZHJvaWRcIixcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOjE3MTMxOTMwNzYsXCJteUFwcFN0YXRlS2V5SWRcIjpcIkFBQUFBRXYxXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRXYxLmpzb24iOiAie1wia2V5RGF0YVwiOlwiWVVBVUNUOVlOVmluK1JXSjdmWHkyaEF1RU9hMFdVMG1BZFVoOVZjM3cxWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjgwOTk4MjY1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTMxOTMwNzY3NThcIn0iCn0=" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: 𓆩Ꮪ么么Ꭰ𔒝؜𓆪, 2: Ꮪ么么Ꭰ, 3: SAAD Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©𓆩Ꮪ么么Ꭰ𔒝؜𓆪"),
 
  author : process.env.PACK_AUTHER|| "SAAD<3",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "SAAD<3",
  ownername:process.env.OWNER_NAME|| "𓆩Ꮪ么么Ꭰ𔒝𓆪",


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
  LANG: ( process.env.THEME ||  "SAAD"  ).toUpperCase(),



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
