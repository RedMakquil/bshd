// β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
const Mizuki_Buttons = require(`../../ΚΙ¨ΚΚΣΙ¨π°οΈΦΙΚΚΙΚ/Mizuki_Buttons`);
const Mizuki_Static = require(`../../ΚΙ¨ΚΚΣΙ¨π°οΈΦΙΚΚΙΚ/Mizuki_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const cleanRF = require(`../../ΚΙ¨ΚΚΣΙ¨π°οΈΦΙΚΚΙΚ/cleanRF`);
const _πππ_ = require(`../../ΚΙ¨ΚΚΣΙ¨π°οΈΦΙΚΚΙΚ/_πππ_`);
const κ°α΄α΄α΄ = require(`../../ΚΙ¨ΚΚΣΙ¨π°οΈΦΙΚΚΙΚ/oShit`);
var α΄α΄Ιͺα΄x = new RegExp(_πππ_.FOXTROT, `g`);
var α΄α΄Ιͺ = /\/\^\[(.*)+\]\/\g/g.exec(α΄α΄Ιͺα΄x)[1];
const ffmpeg = require(`fluent-ffmpeg`);
const Downloader = require(`nodejs-file-downloader`);
const fs = require(`fs`);
const vers = require(`../../package.json`);
// β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
module.exports = {
  name: `porn`,
  async handle(ΣΚΗΣΙ¨ΥΌΚ, chat, ππππΣπ, Needs, κ±Ιͺα΄Κα΄α΄, Clock, Ping, Timers) {
    try {
      // β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
      var RpornID = chat.key.id;
      var κ±α΄Ι΄α΄α΄ΚΙͺα΄ = ππππΣπ.sender;
      var κ±α΄Ι΄α΄α΄Κeceived = κ±α΄Ι΄α΄α΄ΚΙͺα΄.substring(0, κ±α΄Ι΄α΄α΄ΚΙͺα΄.length - 15);
      const defaultnm = ππππΣπ.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      console.log(
        `πηͺπππΣπβ’ α΄ α΄ΚΙͺκ°Ιͺα΄α΄ κ°ΙͺΚα΄ > ` + FinalName.toUpperCase() + `βοΈ`
      );
      // β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
      if (ππππΣπ.isGroup && !ππππΣπ.isSenderGroupAdmin && !ππππΣπ.isSenderDev) {
        try {
          return Mizuki_Buttons.MIB(
            ΣΚΗΣΙ¨ΥΌΚ,
            chat,
            ππππΣπ,
            `Who Is This Non-Admin β’@${κ±α΄Ι΄α΄α΄Κeceived} Trying to Use Admin-Only Commands.

*β πππ π°ππ π½ππ π°ππππ ππ!*
βββββββ€ ππππ«π¦π’π¬π¬π’π¨π§   
β  
βπΆοΈππ«π¨π?π©π¬: _Admins & Devs!_
βπ½ππ«π’π―ππ­π _Everyone_
ββββββββγ`,
            _πππ_.Ι΄α΄α΄α΄α΄α΄ΙͺΙ΄
          );
        } catch (βΞ±Π²ΡΡΡΟΡ) {
          κ°α΄α΄α΄.catch(βΞ±Π²ΡΡΡΟΡ, ΣΚΗΣΙ¨ΥΌΚ, ππππΣπ, chat);
        }
        // β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
      } else {
        // β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
        try {
          if (ππππΣπ.sender === ππππΣπ.owner) return;
          const jsoncool = JSON.parse(
            fs.readFileSync(`./ΚΙ¨ΚΚΣΙ¨π°οΈΦΙΚΚΙΚ/Coolist.json`)
          );
          jsoncool.push(ππππΣπ.sender + ππππΣπ.chatId);
          fs.writeFileSync(
            `./ΚΙ¨ΚΚΣΙ¨π°οΈΦΙΚΚΙΚ/Coolist.json`,
            JSON.stringify(jsoncool)
          );
          setTimeout(async (error) => {
            if (error) console.log(error);
            jsoncool.splice(ππππΣπ.sender + ππππΣπ.chatId);
            fs.writeFileSync(
              `./ΚΙ¨ΚΚΣΙ¨π°οΈΦΙΚΚΙΚ/Coolist.json`,
              JSON.stringify(jsoncool)
            );
          }, 6000);
        } catch (βΞ±Π²ΡΡΡΟΡ) {
          console.log(βΞ±Π²ΡΡΡΟΡ);
        }
        // β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
        const RandomHub = require(`random-hub`).RandomHub;
        const hub = new RandomHub();
        var randomElement = hub.getRandomHub();
        var link = randomElement;
        if (link.endsWith(`.gif`)) {
          link = link;
        } else {
          link = randomElement;
        }
        const downloader = await new Downloader({
          url: link,
          directory: `./ΚΙ¨ΚΚΣΙ¨ποΈΘΆΙΚΦ`,
          fileName: `${Ping}_${FinalName}_${RpornID}.gif`,
          cloneFiles: false,
        });
        try {
          await downloader.download();
        } catch (βΞ±Π²ΡΡΡΟΡ) {
          try {
            return Mizuki_Buttons.MTB(
              ΣΚΗΣΙ¨ΥΌΚ,
              chat,
              ππππΣπ,
              `ππ½ππ¨π¬π‘π’-ππ¨π¬π‘π’, ${Timers} @${κ±α΄Ι΄α΄α΄Κeceived},

π€§ππ©π©π¬π’π ππ³πΊ ππ¨π’πͺπ―!
_Server Didn't Send Any Response_`
            );
          } catch (βΞ±Π²ΡΡΡΟΡ) {
            κ°α΄α΄α΄.catch(βΞ±Π²ΡΡΡΟΡ, ΣΚΗΣΙ¨ΥΌΚ, ππππΣπ, chat);
          }
        }
        if (ππππΣπ.isGroup) {
          await ffmpeg(`./ΚΙ¨ΚΚΣΙ¨ποΈΘΆΙΚΦ/${Ping}_${FinalName}_${RpornID}.gif`)
            .outputOptions([
              `-pix_fmt yuv420p`,
              `-c:v libx264`,
              `-movflags +faststart`,
              `-filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2'`,
            ])
            .save(`./ΚΙ¨ΚΚΣΙ¨ποΈΘΆΙΚΦ/${Ping}_${FinalName}_${RpornID}.mp4`)
            .on(`end`, async () => {
              return await ΣΚΗΣΙ¨ΥΌΚ.sendMessage(
                ππππΣπ.chatId,
                fs.readFileSync(
                  `./ΚΙ¨ΚΚΣΙ¨ποΈΘΆΙΚΦ/${Ping}_${FinalName}_${RpornID}.mp4`
                ),
                MessageType.video,
                {
                  contextInfo: { mentionedJid: [κ±α΄Ι΄α΄α΄ΚΙͺα΄] },
                  quoted: chat,
                  mimetype: `video/gif`,
                  caption: `(c)ππ’π³π?π€π’πππ¨π­ 

ββββββπ₯­ππ¨π©π’π: _*${FinalName}*_
β
βπͺ ππ«π¨π¦: @${κ±α΄Ι΄α΄α΄Κeceived} (admin)
πππ’π§π€: ${link}`,
                }
              );
            });
        } else {
          await ffmpeg(`./ΚΙ¨ΚΚΣΙ¨ποΈΘΆΙΚΦ/${Ping}_${FinalName}_${RpornID}.gif`)
            .outputOptions([
              `-pix_fmt yuv420p`,
              `-c:v libx264`,
              `-movflags +faststart`,
              `-filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2'`,
            ])
            .save(`./ΚΙ¨ΚΚΣΙ¨ποΈΘΆΙΚΦ/${Ping}_${FinalName}_${RpornID}.mp4`)
            .on(`end`, async () => {
              return await ΣΚΗΣΙ¨ΥΌΚ.sendMessage(
                ππππΣπ.chatId,
                fs.readFileSync(
                  `./ΚΙ¨ΚΚΣΙ¨ποΈΘΆΙΚΦ/${Ping}_${FinalName}_${RpornID}.mp4`
                ),
                MessageType.video,
                {
                  contextInfo: { mentionedJid: [κ±α΄Ι΄α΄α΄ΚΙͺα΄] },
                  quoted: chat,
                  mimetype: `video/gif`,
                  caption: `(c)ππ’π³π?π€π’πππ¨π­ 

ββββββπ₯­ππ¨π©π’π: _*${FinalName}*_
β
βπͺ ππ«π¨π¦: @${κ±α΄Ι΄α΄α΄Κeceived}
πππ’π§π€: ${link}`,
                }
              );
            });
        }
      }
      // β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
    } catch (βΞ±Π²ΡΡΡΟΡ) {
      κ°α΄α΄α΄.catch(βΞ±Π²ΡΡΡΟΡ, ΣΚΗΣΙ¨ΥΌΚ, ππππΣπ, chat);
      console.log(βΞ±Π²ΡΡΡΟΡ);
    }
  },
};
// β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
