const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,919959026648";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "919959026648";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_39_05_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDM3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDExNixcbiAgICAgICAgMjEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDg0LFxuICAgICAgICAxNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTUxLFxuICAgICAgICA1NCxcbiAgICAgICAgMjI0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTU4LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDUsXG4gICAgICAgIDkzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDc3LFxuICAgICAgICA5NixcbiAgICAgICAgOTgsXG4gICAgICAgIDc3LFxuICAgICAgICA1NixcbiAgICAgICAgMjMsXG4gICAgICAgIDQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTA4LFxuICAgICAgICA4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDYxLFxuICAgICAgICA2NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTUwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTQxLFxuICAgICAgICA1OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjksXG4gICAgICAgIDM0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDg2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDczLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDg1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNixcbiAgICAgICAgNzYsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDgsXG4gICAgICAgIDE0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDExNixcbiAgICAgICAgNjUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4LFxuICAgICAgICAxOTksXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTksXG4gICAgICAgIDg5LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDkxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0NixcbiAgICAgICAgNjksXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzksXG4gICAgICAgIDgwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDg3LFxuICAgICAgICAxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDExMixcbiAgICAgICAgMjUwLFxuICAgICAgICAxODEsXG4gICAgICAgIDg4LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjE4LFxuICAgICAgICA4MixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjUxLFxuICAgICAgICAyOCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTU4LFxuICAgICAgICA1MixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTI3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTgxLFxuICAgICAgICA1MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA3OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA1OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDQxLFxuICAgICAgICA0MSxcbiAgICAgICAgODksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjMzLFxuICAgICAgICA0MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTE5LFxuICAgICAgICA2MixcbiAgICAgICAgMTkyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTE3LFxuICAgICAgICA0MyxcbiAgICAgICAgMSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQzLFxuICAgICAgICA0NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDM0LFxuICAgICAgICA2MixcbiAgICAgICAgMjMsXG4gICAgICAgIDEwMixcbiAgICAgICAgNjUsXG4gICAgICAgIDQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDc2LFxuICBcImFkdlNlY3JldEtleVwiOiBcImpERGZHRVYzNGFJTXdaNXgxdWUyMjBvaWpSR2ttZ0JOSkZaYjIyN0c5eVU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlJzX2pjVWhlUUFhUkJKbWYyVEVDbndcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDJiOTdkNzEtMDMxOC00NDRjLWJjNDQtN2Q1M2VhZTFhYjlkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQyLFxuICAgICAgMjA5LFxuICAgICAgMTg2LFxuICAgICAgNDMsXG4gICAgICAxNjIsXG4gICAgICAyOCxcbiAgICAgIDE3OCxcbiAgICAgIDksXG4gICAgICAyMzAsXG4gICAgICA0MixcbiAgICAgIDEsXG4gICAgICA5MCxcbiAgICAgIDExMCxcbiAgICAgIDM1LFxuICAgICAgMjIxLFxuICAgICAgNzksXG4gICAgICAyMjMsXG4gICAgICA3MCxcbiAgICAgIDE5NSxcbiAgICAgIDk3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMyxcbiAgICAgIDE5NixcbiAgICAgIDEyNixcbiAgICAgIDM5LFxuICAgICAgNDYsXG4gICAgICAyNDEsXG4gICAgICA1NyxcbiAgICAgIDExMCxcbiAgICAgIDI2LFxuICAgICAgMTk0LFxuICAgICAgMCxcbiAgICAgIDEzNCxcbiAgICAgIDExMyxcbiAgICAgIDM2LFxuICAgICAgODAsXG4gICAgICAxMSxcbiAgICAgIDIzOCxcbiAgICAgIDEzLFxuICAgICAgMjI0LFxuICAgICAgNDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRUVZREFKTTdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxOTk1OTAyNjY0ODo4M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNDExMzMwMTkyNTg5NTM6ODNAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi8J+RgOKcqFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xXNXc3QURFS3lXNmJFR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNzNIRmQ2VXRkaTEraVVkVGZrb2Zkc0VzbEV4Q3BsYWtCejJrbGNUQjRITT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJvSVNGSGhud0ZSRHhKeXlnbWhzVzZaQURZeFdPV2hpQW1rZUszZzh0Q2pvK2thdXZIZE1TMUxWTGRTamppbzBvQndpM2pLcFoyZkxoUk5LWmZsQnJDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJrZDhBOWNuVWxGTmkrTzF2WFJKSXBBRSttWDlLa3pad0cxL2M0aVZtTWkxRFNjWkZvcWdMMGduRUpLVG43cVJHbWFHSmE0cUZHK3IrMG14UnF4MUFpdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTk5NTkwMjY2NDg6ODNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNTA5NjM2NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUhvZ1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSG9nLmpzb24iOiAie1wia2V5RGF0YVwiOlwiR1A5L0RNSHNqdzhBS1pmLzE1YXJYV0grZFJySmpDR2F3MHEwTWJwUG9YZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5MDcwNzQ3NDAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTUwMTY3Njg4OTRcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
