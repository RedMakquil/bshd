// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
const Mizuki_Buttons = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/Mizuki_Buttons`);
const Mizuki_Static = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/Mizuki_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const BanList = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/BanList`);
const ꜰᴜᴄᴋ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/oShit`);
const motor = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/motor`);
const _𝔏𝔞𝔟_ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/_𝔏𝔞𝔟_`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
module.exports = {
  name: `ban`,
  𝓜𝓮𝓮6ʍօʀɛ: `These are the configurations -
🍁If you send the command in a group *without replying* to anyone, the bot will be *disabled for that group.*
🍁If you send the command in a group and *reply to someone*, they will not be able to use the bot in that *specific group.*
🍁If you send the command in *personal chat* of a person, they will be blacklisted from using the bot in *any group.*`,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping, Timers) {
    try {
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      const defaultnm = 𝓜𝖎𝖟𝖚ӄ𝖎.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      console.log(
        `🍁爪𝖎𝖟𝖚ӄ𝖎™ ᴠᴇʀɪꜰɪᴇᴅ ꜰɪʟᴇ > ` + FinalName.toUpperCase() + `✔️`
      );
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      if (!𝓜𝖎𝖟𝖚ӄ𝖎.fromMe) {
        return Mizuki_Buttons.MIB(
          ӄʀǟӄɨռʐ,
          chat,
          𝓜𝖎𝖟𝖚ӄ𝖎,
          `Who Is This Dumbo •@${ꜱᴇɴᴅᴇʀeceived} Trying to Use Owner-Only Commands.


┌────◆➤ 🔒𝐏𝐞𝐫𝐦𝐢𝐬𝐬𝐢𝐨𝐧   
│  
│*❌ 𝚈𝚘𝚞 𝙰𝚛𝚎 𝙽𝚘𝚝 𝙰𝚕𝚕𝚘𝚠𝚎𝚍!*
└───────〇`,
          _𝔏𝔞𝔟_.ɴᴏᴛᴀᴅᴍɪɴ
        );
        // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      }
      if (𝓜𝖎𝖟𝖚ӄ𝖎.isPm && 𝓜𝖎𝖟𝖚ӄ𝖎.fromMe) {
        let PersonToBanlist = 𝓜𝖎𝖟𝖚ӄ𝖎.chatId;
        BanList.addBanlistUser(PersonToBanlist, ``);
        var User = PersonToBanlist.substring(0, PersonToBanlist.indexOf(`@`));
        return Mizuki_Static.MGS(
          ӄʀǟӄɨռʐ,
          chat,
          𝓜𝖎𝖟𝖚ӄ𝖎,
          `🐣𝐌𝐨𝐬𝐡𝐢-𝐌𝐨𝐬𝐡𝐢 •@${ꜱᴇɴᴅᴇʀeceived} (Owner)

┌────◇🥭𝐓𝐨𝐩𝐢𝐜: _*${FinalName}*_
│
│🛑𝐁𝐚𝐧𝐧𝐞𝐝: ${User}
│🛡️ꜱᴜᴅᴏ ʙᴀɴ ᴀᴄᴄᴇᴘᴛᴇᴅ
└───────〇`,
          `./ʍɨʐʊӄɨ☣️ƈօʀɛ/𝓜𝖎𝖟𝖚ӄ𝖎™.mp4`
        );
        // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      } else {
        if (Needs.length > 0) {
          let PersonToBanlist = await motor.nomentioncontact(
            Needs,
            ӄʀǟӄɨռʐ,
            𝓜𝖎𝖟𝖚ӄ𝖎
          );
          if (PersonToBanlist === undefined) return;
          PersonToBanlist += `@s.whatsapp.net`;
          if (𝓜𝖎𝖟𝖚ӄ𝖎.owner === PersonToBanlist) {
            return;
          }
          BanList.addBanlistUser(PersonToBanlist, 𝓜𝖎𝖟𝖚ӄ𝖎.chatId);
          return Mizuki_Static.MGS(
            ӄʀǟӄɨռʐ,
            chat,
            𝓜𝖎𝖟𝖚ӄ𝖎,
            `🐣𝐌𝐨𝐬𝐡𝐢-𝐌𝐨𝐬𝐡𝐢 •@${ꜱᴇɴᴅᴇʀeceived} (Owner)

┌────◇🥭𝐓𝐨𝐩𝐢𝐜: _*${FinalName}*_
│
│🛑𝐆𝐫𝐨𝐮𝐩 𝐁𝐚𝐧𝐧𝐞𝐝: ${𝓜𝖎𝖟𝖚ӄ𝖎.groupName}
│🛡️ꜱᴜᴅᴏ ʙᴀɴ ᴀᴄᴄᴇᴘᴛᴇᴅ
└───────〇`,
            `./ʍɨʐʊӄɨ☣️ƈօʀɛ/𝓜𝖎𝖟𝖚ӄ𝖎™.mp4`
          );
          // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
        } else if (𝓜𝖎𝖟𝖚ӄ𝖎.isReply) {
          let PersonToBanlist = 𝓜𝖎𝖟𝖚ӄ𝖎.replyParticipant;
          BanList.addBanlistUser(PersonToBanlist, 𝓜𝖎𝖟𝖚ӄ𝖎.chatId);
          if (𝓜𝖎𝖟𝖚ӄ𝖎.owner === PersonToBanlist) {
            return;
          }
          // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
          var User = PersonToBanlist.substring(0, PersonToBanlist.indexOf(`@`));
          BanList.addBanlistUser(PersonToBanlist, 𝓜𝖎𝖟𝖚ӄ𝖎.chatId);
          return Mizuki_Static.MGS(
            ӄʀǟӄɨռʐ,
            chat,
            𝓜𝖎𝖟𝖚ӄ𝖎,
            `🐣𝐌𝐨𝐬𝐡𝐢-𝐌𝐨𝐬𝐡𝐢 •@${ꜱᴇɴᴅᴇʀeceived} (Owner)

┌────◇🥭𝐓𝐨𝐩𝐢𝐜: _*${FinalName}*_
│
│🛑𝐁𝐚𝐧𝐧𝐞𝐝: ${User}
│🛡️ꜱᴜᴅᴏ ʙᴀɴ ᴀᴄᴄᴇᴘᴛᴇᴅ
└───────〇`,
            `./ʍɨʐʊӄɨ☣️ƈօʀɛ/𝓜𝖎𝖟𝖚ӄ𝖎™.mp4`
          );
          // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
        } else {
          BanList.addBanlistUser(``, 𝓜𝖎𝖟𝖚ӄ𝖎.chatId);
          return Mizuki_Static.MGS(
            ӄʀǟӄɨռʐ,
            chat,
            𝓜𝖎𝖟𝖚ӄ𝖎,
            `🐣𝐌𝐨𝐬𝐡𝐢-𝐌𝐨𝐬𝐡𝐢 •@${ꜱᴇɴᴅᴇʀeceived} (Owner)

┌────◇🥭𝐓𝐨𝐩𝐢𝐜: _*${FinalName}*_
│
│🛑𝐆𝐫𝐨𝐮𝐩 𝐁𝐚𝐧𝐧𝐞𝐝: ${𝓜𝖎𝖟𝖚ӄ𝖎.groupName}
│🛡️ꜱᴜᴅᴏ ʙᴀɴ ᴀᴄᴄᴇᴘᴛᴇᴅ
└───────〇`,
            `./ʍɨʐʊӄɨ☣️ƈօʀɛ/𝓜𝖎𝖟𝖚ӄ𝖎™.mp4`
          );
        }
      }
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
    } catch (ℓαвєяяσя) {
      ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);
      console.log(ℓαвєяяσя);
    }
  },
};
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
