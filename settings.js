/*
═════════════════════════════════════════════════════════════════════════════════════════════════════════════════

//███╗░░░███╗██╗█████████╗░██╗░░░░██╗██╗░░░██╗██╗░░░░░███╗░░░███╗██████╗//░ 
//████╗░████║██║╚════███║░░██║░░░░██║██║░██║░░██║░░░░░████╗░████║██╔══██╗// 
//██╔████╔██║██║░░░║███║░░░██║░░░░██║██▇█║░░░░██║░░░░░██╔████╔██║██║░░██║ //
//██║╚██╔╝██║██║░║███║░░░░░██║░░░░██║██║░██║░░██║░░░░░██║╚██╔╝██║██║░░██║ //
//██║░╚═╝░██║██║█████████╗░░███████║░██║░░║██╗██║░░░░░██║░╚═╝░██║██████╔╝ //
//╚═╝░░░░░╚═╝╚═╝═════════╝░░░╚═════╝░╚═╝░░╚══╝╚═╝░░░░░╚═╝░░░░░╚═╝╚═════╝░//

*
   * @project_name : MIZUKI-MD
   * @creator : Charuka Tech
   * @description : MIZUKI-MD ,Javascript WhatsApp Bot Made By Charuka Tech.
   * 
   * Created By Charuka Tech.
   * © 2025-2026 Mizuki-Md.
* 
══════════════════════════════════════════════════════════════════════════════════════════════════════════════════ 
*/



const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}




module.exports = {

// [1]-------------------☟ ADD YOU SESSION ID ☟---------------------------------------------------------------------------------------------
SESSION_ID: process.env.SESSION_ID === undefined ? 'MIZUKI-MD=CF8jTQjS#e28gJ4-BGQRmEpSSnSvCYBXIGlV7qNnBlp8n52Dy-a4' : process.env.SESSION_ID,
OWNER_NUMBER: process.env.OWNER_NUMBER  === undefined ? '94775228949' : process.env.OWNER_NUMBER ,
// [2]-------------------BOT PREFIX (.)-----------------------------------------------------------------------------------------------------
PREFIX: process.env.PREFIX === undefined ? ',' : process.env.PREFIX ,
// [3]-------------------BOT ALIVE MASSAGE--------------------------------------------------------------------------------------------------
ALIVE: process.env.ALIVE === undefined ? "default" : process.env.ALIVE,
// [4]-------------------AUTO READ STATUS true or false-------------------------------------------------------------------------------------
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS === undefined ?"true" : process.env.AUTO_READ_STATUS,
// [5]-------------------MODE CHANGE public or private and inbox, group---------------------------------------------------------------------
MODE: process.env.MODE === undefined ?"public" : process.env.MODE,

// [6]-------------------CHAT_BOT true or false---------------------------------------------------------------------------------------------
CHAT_BOT: process.env.CHAT_BOT === undefined ?"false" : process.env.CHAT_BOT,

//[7]--------------------Enter You Group Jid------------------------------------------------------------------------------------------------
MV_JID: process.env.MV_JID === undefined ?"120363403944584960@g.us" : process.env.MV_JID,
//------------------------------------------------------------------------------------------------------------------------------------------
PORT: process.env.PORT === undefined ? "8000" : process.env.PORT,
SUDO: process.env.SUDO === undefined ? '94775228949,94710167783' : process.env.SUDO,
SESSION_NAME: process.env.SESSION_NAME === undefined ? "auth_info_baileys" : process.env.SESSION_NAME,
CHAT_BOT: process.env.CHAT_BOT === undefined ? 'false' : process.env.CHAT_BOT, 
  NEWS_JID: process.env.NEWS_JID === undefined ? "" : process.env.NEWS_SEND_JID,
AUTO_NEWS_SENDER: process.env.AUTO_NEWS_SENDER === undefined ? "false" : process.env.AUTO_NEWS_SENDER,


//══════════════════════════════════════════════════════════════════════════════════════════════════════════════════════
//👇═════════════👇 කැමති නම් වෙනස් කරන්න══════════

BOT_NUMBER: process.env.BOT_NUMBER || "94775228949",
BOT_NAME: process.env.BOT_NAME || "MIZUKI-MD",
LANG: process.env.LANG || "SI",
REACT: process.env.REACT || "☘",
SONG_JID: process.env.SONG_JID || "120363376466846343@newsletter",
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgresql://postgres:@Asitha2005b@db.waiqbrnuxkjebghzhovz.supabase.co:5432/postgres' : process.env.POSTGRESQL_URL,
MONGODB_URL: process.env.MONGODB_URL || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority",
   


};
