// β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
const Mizuki_Buttons = require(`../../ΚΙ¨ΚΚΣΙ¨π°οΈΦΙΚΚΙΚ/Mizuki_Buttons`);
const Mizuki_Static = require(`../../ΚΙ¨ΚΚΣΙ¨π°οΈΦΙΚΚΙΚ/Mizuki_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const κ°α΄α΄α΄ = require(`../../ΚΙ¨ΚΚΣΙ¨π°οΈΦΙΚΚΙΚ/oShit`);
const _πππ_ = require(`../../ΚΙ¨ΚΚΣΙ¨π°οΈΦΙΚΚΙΚ/_πππ_`);
var α΄α΄Ιͺα΄x = new RegExp(_πππ_.FOXTROT, `g`);
var α΄α΄Ιͺ = /\/\^\[(.*)+\]\/\g/g.exec(α΄α΄Ιͺα΄x)[1];
const speed = require(`performance-now`);
const { performance } = require(`perf_hooks`);
const vers = require(`../../package.json`);
const os = require(`os`);
const { formatp, runtime } = require(`../../ΚΙ¨ΚΚΣΙ¨π°οΈΦΙΚΚΙΚ/mizu`);
// β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
module.exports = {
  name: `symlink`,
  async handle(ΣΚΗΣΙ¨ΥΌΚ, chat, ππππΣπ, Needs, κ±Ιͺα΄Κα΄α΄, Clock, Ping, Timers) {
    try {
      // β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
      var κ±α΄Ι΄α΄α΄ΚΙͺα΄ = ππππΣπ.sender;
      var κ±α΄Ι΄α΄α΄Κeceived = κ±α΄Ι΄α΄α΄ΚΙͺα΄.substring(0, κ±α΄Ι΄α΄α΄ΚΙͺα΄.length - 15);
      const defaultnm = ππππΣπ.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      console.log(
        `πηͺπππΣπβ’ α΄ α΄ΚΙͺκ°Ιͺα΄α΄ κ°ΙͺΚα΄ > ` + FinalName.toUpperCase() + `βοΈ`
      );
      // β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
      if (!ππππΣπ.fromMe) {
        try {
          return Mizuki_Buttons.MIB(
            ΣΚΗΣΙ¨ΥΌΚ,
            chat,
            ππππΣπ,
            `Who Is This Dumbo β’@${κ±α΄Ι΄α΄α΄Κeceived} Trying to Use Owner-Only Commands.


βββββββ€ ππππ«π¦π’π¬π¬π’π¨π§   
β  
β*β πππ π°ππ π½ππ π°ππππ ππ!*
ββββββββγ`,
            _πππ_.Ι΄α΄α΄α΄α΄α΄ΙͺΙ΄
          );
        } catch (βΞ±Π²ΡΡΡΟΡ) {
          κ°α΄α΄α΄.catch(βΞ±Π²ΡΡΡΟΡ, ΣΚΗΣΙ¨ΥΌΚ, ππππΣπ, chat);
        }
        // β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
      } else {
        // β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
        const used = process.memoryUsage();
        const cpus = os.cpus().map((cpu) => {
          cpu.total = Object.keys(cpu.times).reduce(
            (last, type) => last + cpu.times[type],
            0
          );
          return cpu;
        });
        const cpu = cpus.reduce(
          (last, cpu, _, { length }) => {
            last.total += cpu.total;
            last.speed += cpu.speed / length;
            last.times.user += cpu.times.user;
            last.times.nice += cpu.times.nice;
            last.times.sys += cpu.times.sys;
            last.times.idle += cpu.times.idle;
            last.times.irq += cpu.times.irq;
            return last;
          },
          {
            speed: 0,
            total: 0,
            times: {
              user: 0,
              nice: 0,
              sys: 0,
              idle: 0,
              irq: 0,
            },
          }
        );
        // β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
        let timestamp = speed();
        let latensi = speed() - timestamp;
        neww = performance.now();
        oldd = performance.now();
        await ΣΚΗΣΙ¨ΥΌΚ.sendMessage(
          ππππΣπ.chatId,
          {
            url: `./ΚΙ¨ΚΚΣΙ¨β£οΈΖΦΚΙ/ππππΣπβ’.mp4`,
          },
          MessageType.video,
          {
            mimetype: `video/gif`,
            contextInfo: { mentionedJid: [κ±α΄Ι΄α΄α΄ΚΙͺα΄] },
            caption: `π£ππ¨π¬π‘π’-ππ¨π¬π‘π’ β’@${κ±α΄Ι΄α΄α΄Κeceived} (owner/dev), ${Timers} 

βββββββ€ *πStarting Mizuki Server Sym-Link...*
β
βγ·οΈπ‘α΄Κα΄κ°Ιͺx: ${α΄α΄Ιͺ}
βγ·οΈβοΈα΄Ι΄Ι’ΙͺΙ΄α΄: ${vers.vers}
βγ·οΈπ»α΄Κα΄α΄κ°α΄Κα΄: ${os.platform()}
βγ·οΈπ°οΈΚα΄α΄α΄Ι΄α΄Κ: ${latensi.toFixed(4)}(s)
βγ·οΈβα΄α΄α΄Ιͺα΄α΄: ${runtime(process.uptime())}
βγ·οΈπ?Κα΄α΄: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
ββββββββγ

β¬‘=====π ηͺπππΣπβ’ π =====β¬‘
*β isSenderDev:* ${ππππΣπ.isSenderDev}
*β isCmd:* ${ππππΣπ.isCmd}
*β commandName:* ${ππππΣπ.commandName}
*β groupName:* ${ππππΣπ.groupName}
*β mimeType:* ${ππππΣπ.mimeType}
*β type:* ${ππππΣπ.type}
*β chatId:* ${ππππΣπ.chatId}
*β fromMe:* ${ππππΣπ.fromMe}
*β owner:* ${ππππΣπ.owner}
*β sender:* ${ππππΣπ.sender}
*β isReply:* ${ππππΣπ.isReply}
*β replyMessageId:* ${ππππΣπ.replyMessageId}
*β replyParticipant:* ${ππππΣπ.replyParticipant}
*β replyMessage:* ${ππππΣπ.replyMessage}
*β isGroup:* ${ππππΣπ.isGroup}
*β isPm:* ${ππππΣπ.isPm}
*β isImage:* ${ππππΣπ.isImage}
*β isReplyImage:* ${ππππΣπ.isReplyImage}
*β imageCaption:* ${ππππΣπ.imageCaption}
*β isBotGroupAdmin:* ${ππππΣπ.isBotGroupAdmin}
*β isGIF:* ${ππππΣπ.isGIF}
*β isReplyGIF:* ${ππππΣπ.isReplyGIF}
*β isSticker:* ${ππππΣπ.isSticker}
*β isReplySticker:* ${ππππΣπ.isReplySticker}
*β isReplyAnimatedSticker:* ${ππππΣπ.isReplyAnimatedSticker}
*β isVideo:* ${ππππΣπ.isVideo}
*β isReplyVideo:* ${ππππΣπ.isReplyVideo}
*β isAudio:* ${ππππΣπ.isAudio}
*β isReplyAudio:* ${ππππΣπ.isReplyAudio}
*β isSenderGroupAdmin:* ${ππππΣπ.isSenderGroupAdmin}
*β groupAdmins:* ${ππππΣπ.groupAdmins}
*β groupId:* ${ππππΣπ.groupId}
*β isAntilink:* ${ππππΣπ.isAntilink}
*β alias:* ${ππππΣπ.alias}
β¬‘=====π ηͺπππΣπβ’ π =====β¬‘`,
          }
        );
      }
      // β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
    } catch (βΞ±Π²ΡΡΡΟΡ) {
      κ°α΄α΄α΄.catch(βΞ±Π²ΡΡΡΟΡ, ΣΚΗΣΙ¨ΥΌΚ, ππππΣπ, chat);
      console.log(βΞ±Π²ΡΡΡΟΡ);
    }
  },
};
// β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
