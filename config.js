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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_12_07_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTAsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTk4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjM1LFxuICAgICAgICA1NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTk5LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDczLFxuICAgICAgICAyMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAzNSxcbiAgICAgICAgMSxcbiAgICAgICAgMTkxLFxuICAgICAgICA4NixcbiAgICAgICAgMjE3LFxuICAgICAgICAyMSxcbiAgICAgICAgODcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgNzksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAzNixcbiAgICAgICAgMTI1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDgzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDQxLFxuICAgICAgICAyOSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTA0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjIyLFxuICAgICAgICAzNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjUyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDU3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjMxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDcyLFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTM4LFxuICAgICAgICA4MixcbiAgICAgICAgMTA2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIsXG4gICAgICAgIDE1LFxuICAgICAgICA1MixcbiAgICAgICAgNjIsXG4gICAgICAgIDY1LFxuICAgICAgICAyNDksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0LFxuICAgICAgICA5OSxcbiAgICAgICAgNDksXG4gICAgICAgIDMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDM3LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTgyLFxuICAgICAgICAxLFxuICAgICAgICA2MyxcbiAgICAgICAgMjIzLFxuICAgICAgICA3NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTksXG4gICAgICAgIDI0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjUzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTUwLFxuICAgICAgICA4NyxcbiAgICAgICAgMTkzLFxuICAgICAgICA3MixcbiAgICAgICAgOTgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI1LFxuICAgICAgICAzMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA2OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNSxcbiAgICAgICAgODQsXG4gICAgICAgIDgzLFxuICAgICAgICA5MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE1LFxuICAgICAgICAyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwNixcbiAgICAgICAgODAsXG4gICAgICAgIDY2LFxuICAgICAgICA0NixcbiAgICAgICAgNTAsXG4gICAgICAgIDY0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI2LFxuICAgICAgICA2NixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTE4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTg4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTE0LFxuICAgICAgICA5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTk4LFxuICAgICAgICA2NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMixcbiAgICAgICAgNTYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ2SG52ODNKejF3S0Jzb3FUSHVVNitDNUNqcGJNOVRWdkdHaklCSFdrTVB3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJfSVBIRDlCNVNhdVpTWFlKNi13aGVBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjFjNjI2NjQwLWIxMzgtNGM2ZS04MjlmLTYxOTAzMDM1ZGI0ZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzgsXG4gICAgICA5NSxcbiAgICAgIDYzLFxuICAgICAgMTkyLFxuICAgICAgMTI4LFxuICAgICAgMTY5LFxuICAgICAgMjU0LFxuICAgICAgMTcsXG4gICAgICAyNTAsXG4gICAgICAxMDMsXG4gICAgICA4NyxcbiAgICAgIDIxMCxcbiAgICAgIDE1NyxcbiAgICAgIDIxMCxcbiAgICAgIDksXG4gICAgICAxMjYsXG4gICAgICA0MSxcbiAgICAgIDk1LFxuICAgICAgMjI0LFxuICAgICAgMjE4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzQsXG4gICAgICAyMTgsXG4gICAgICA1LFxuICAgICAgMjA4LFxuICAgICAgMTAwLFxuICAgICAgOTAsXG4gICAgICA1MSxcbiAgICAgIDE3OSxcbiAgICAgIDI1MixcbiAgICAgIDE3LFxuICAgICAgMTU0LFxuICAgICAgNTYsXG4gICAgICAzMyxcbiAgICAgIDEyNCxcbiAgICAgIDEyOSxcbiAgICAgIDI0OSxcbiAgICAgIDEzNyxcbiAgICAgIDE1MyxcbiAgICAgIDkxLFxuICAgICAgMjUzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTjcra01rRUVQdTMyclFHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ5Sms0OUdkeVhXSTU5WHdaYmhiV0RneXhMU0ZnWG9FL3piTklkVzlhYjJ3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkNVK2xUaXVMaWJsNjlCbjh0bDJEZndhQXk0a2l0V28zZEdnQTRQSzdCZ2JlaUdpZENWL3RtaTNUUlkvQjZUdHhjR0NUS1MvQVdRZ1ltWlN3Q293ckR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm5KMHpmTEQ3S3ZSd3lqK2d2RWZsK2hCSUlNUW9QUjVUZG0weGRrbGlwK0lkUnc0Q3ZqZzF1QWY2RHErTjNLazgxdUU3dlhxaWFGNDlJLzdNN042V0JRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjEyNjQ0NzAwNTEwOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE0MDgyODAxODI3MDM0ODo0QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjEyNjQ0NzAwNTEwOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTA4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjExNDYzNjksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNYnRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1idC5qc29uIjogIntcImtleURhdGFcIjpcIm85ZjZUdFBheC94b2g0QUZKL2srUWdrM0ZSSGc4aHNydWpyQzVQdTFZVTQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTIyNzExMjI4NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxMDU3NDkxMzI1XCJ9Igp9"  // PUT your SESSION_ID 


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
