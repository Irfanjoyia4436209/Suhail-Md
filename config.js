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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923207603012";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  ""SUHAIL_06_31_08_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA0MixcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDg1LFxuICAgICAgICAxODYsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDUwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA0MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMzMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMixcbiAgICAgICAgNzMsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzYsXG4gICAgICAgIDk2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDM0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzksXG4gICAgICAgIDEzNixcbiAgICAgICAgOSxcbiAgICAgICAgMTksXG4gICAgICAgIDE1MixcbiAgICAgICAgNDYsXG4gICAgICAgIDc3LFxuICAgICAgICA1NixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMixcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTU2LFxuICAgICAgICA4MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjU0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMixcbiAgICAgICAgMTgsXG4gICAgICAgIDYwLFxuICAgICAgICA2OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDksXG4gICAgICAgIDUzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDgzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTA1LFxuICAgICAgICAxODcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDMwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDQzLFxuICAgICAgICA4OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDMyLFxuICAgICAgICAyNSxcbiAgICAgICAgODUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTU4LFxuICAgICAgICA4MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxOTksXG4gICAgICAgIDI3LFxuICAgICAgICAxODYsXG4gICAgICAgIDMwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjExLFxuICAgICAgICA5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTEzLFxuICAgICAgICA4MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgODgsXG4gICAgICAgIDg2LFxuICAgICAgICAxODQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTM4LFxuICAgICAgICA1NixcbiAgICAgICAgMzcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjA4LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MixcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4NixcbiAgICAgICAgOTYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDM4LFxuICAgICAgICA2MixcbiAgICAgICAgMTYzLFxuICAgICAgICAxODAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDUwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA3MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNixcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDksXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTkxLFxuICAgICAgICA1NSxcbiAgICAgICAgNzksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyMixcbiAgICAgICAgNDgsXG4gICAgICAgIDYyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjA0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4LFxuICAgICAgICA4MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDM5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTg5LFxuICAgICAgICAyNixcbiAgICAgICAgNTEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMixcbiAgICAgICAgMTc1LFxuICAgICAgICA1MixcbiAgICAgICAgNDEsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTc4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA5MixcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIrVDBhY0hTRXVIVTcxdlVvWFZ5SlJHMFF3RkloWjRHVFRjSDA2ekF1Z2JRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzIwNzYwMzAxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRUREQzc0MDkyREU2RDAwQjAxOUM5OTEzOUExMjg3NzBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyOTI1ODY0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjdsQVBJN2tsU0d1YlR3bWh1cFdaOHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDFkNGU3MjktMzU5Zi00OWE2LTg3OTctNzMwMWQyNGZiY2NiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ5LFxuICAgICAgMTU2LFxuICAgICAgMTM2LFxuICAgICAgMjAsXG4gICAgICA3MCxcbiAgICAgIDI0OCxcbiAgICAgIDE2NSxcbiAgICAgIDE4MixcbiAgICAgIDExOCxcbiAgICAgIDE4MCxcbiAgICAgIDE4MCxcbiAgICAgIDIzMCxcbiAgICAgIDMyLFxuICAgICAgMTU2LFxuICAgICAgNCxcbiAgICAgIDI1MyxcbiAgICAgIDE2OCxcbiAgICAgIDk3LFxuICAgICAgMTUxLFxuICAgICAgMTc2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNyxcbiAgICAgIDIxLFxuICAgICAgMjQyLFxuICAgICAgMTIxLFxuICAgICAgMTcyLFxuICAgICAgMTAzLFxuICAgICAgMjQ4LFxuICAgICAgMjgsXG4gICAgICAyMzYsXG4gICAgICA3MyxcbiAgICAgIDU3LFxuICAgICAgMTg0LFxuICAgICAgMTIzLFxuICAgICAgODUsXG4gICAgICAzLFxuICAgICAgMjE4LFxuICAgICAgMTEzLFxuICAgICAgMTMyLFxuICAgICAgMTQ5LFxuICAgICAgNjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMUxCSzhXSzlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzIwNzYwMzAxMjo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNzQxNDM5NzA4NjExOTM6NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJNk4rTVlDRUp5R3g3VUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm5kZHpzU1FLK3lrdU9vKy9YUFJwZTRKc0JBUW5naDUxdUhmSjJyU0pYWG89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwieHVNeUlWY1FBVmhxenVFaUJ6dCtuLzVmOWprRTRtaW9oZVpSZ014L3dIeVVPUTh4QWp5RmF4a2RYTTR2T1hzMnRmMzFTSjh5VENQVG5WNmxsdWxVQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwia09mTk5YY1A4bXVCeUU5QmwwbG1nNXRoay85NmptQ1RULzh6azUzYkZtZHlCOXNCTVNhYmFzQXU2djI0c1cwTTl3bk9sZHcxMmVSVmpuUnRXaS95RFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjA3NjAzMDEyOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjkyNTg1OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlraFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSWtoLmpzb24iOiAie1wia2V5RGF0YVwiOlwiQzB3ZmZOQU0xRWFqaXNHWmdaYkJWT253WXFwWXdoUkRxZ0g1WXAzcnQxMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2ODU2MzkzMDgsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDNdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ==  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
