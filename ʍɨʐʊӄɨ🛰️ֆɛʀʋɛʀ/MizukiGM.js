try {
  // β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
  const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
  const { MizukiTenorMaker } = require(`./MizukiTenorMaker`);
  const _πππ_ = require(`./_πππ_`);
  const βΞΉΡΞ·Ρ = require(`./oShit`);
  const ffmpeg = require(`fluent-ffmpeg`);
  const cleanRF = require(`./cleanRF`);
  require(`python-format-js`);
  const κ°α΄α΄α΄ = require(`./oShit`);
  const vers = require(`../package.json`);
  var α΄α΄Ιͺα΄x = new RegExp(_πππ_.FOXTROT, `g`);
  var α΄α΄Ιͺ = /\/\^\[(.*)+\]\/\g/g.exec(α΄α΄Ιͺα΄x)[1];
  const Downloader = require(`nodejs-file-downloader`);
  const anime = require(`anime-actions`);
  const fs = require(`fs`);
  const speed = require(`performance-now`);
  let Timestamp = speed();
  const Pong = speed() - Timestamp;
  const Ping = Pong.toFixed(4);
  const date = require(`date-and-time`);
  const now = new Date();
  date.format(now, `ddd, MMM DD YYYY`);
  const pattern = date.compile(`ddd, MMM DD YYYY`);
  const Clock = date.format(now, pattern);
  // β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
  exports.MizukiGM = async (ΣΚΗΣΙ¨ΥΌΚ, chat, ππππΣπ) => {
    var MizukiGMid = chat.key.id;
    var κ±α΄Ι΄α΄α΄ΚΙͺα΄ = ππππΣπ.sender;
    var κ±α΄Ι΄α΄α΄Κeceived = κ±α΄Ι΄α΄α΄ΚΙͺα΄.substring(0, κ±α΄Ι΄α΄α΄ΚΙͺα΄.length - 15);
    const defaultnm = ππππΣπ.commandName;
    const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
    if (ππππΣπ.isReply) {
      var κ±α΄Ι΄α΄α΄ΚΙͺα΄ = ππππΣπ.sender;
      var κ±α΄Ι΄α΄α΄Κeceived = κ±α΄Ι΄α΄α΄ΚΙͺα΄.substring(0, κ±α΄Ι΄α΄α΄ΚΙͺα΄.length - 15);
      var Receiver = chat.message.extendedTextMessage.contextInfo.participant;
      var personreceived = Receiver.substring(0, Receiver.length - 15);
      var MizukiGMid = chat.message.extendedTextMessage.contextInfo.stanzaId;
    }
    const link = MizukiTenorMaker(FinalName.toLowerCase());
    // β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
    if (ππππΣπ.isReply) {
      const downloader = await new Downloader({
        url: link,
        directory: `./ΚΙ¨ΚΚΣΙ¨ποΈΘΆΙΚΦ`,
        fileName: `${FinalName}_${MizukiGMid}.gif`,
        cloneFiles: false,
      });
      try {
        await downloader.download();
        await ffmpeg(`./ΚΙ¨ΚΚΣΙ¨ποΈΘΆΙΚΦ/${FinalName}_${MizukiGMid}.gif`)
          .outputOptions([
            `-pix_fmt yuv420p`,
            `-c:v libx264`,
            `-movflags +faststart`,
            `-filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2'`,
          ])
          .save(`./ΚΙ¨ΚΚΣΙ¨ποΈΘΆΙΚΦ/${FinalName}_${MizukiGMid}.mp4`)
          .on(`end`, async () => {
            console.log(`Finished`);
            await ΣΚΗΣΙ¨ΥΌΚ
              .sendMessage(
                ππππΣπ.chatId,
                fs.readFileSync(
                  `./ΚΙ¨ΚΚΣΙ¨ποΈΘΆΙΚΦ/${FinalName}_${MizukiGMid}.mp4`
                ),
                MessageType.video,
                {
                  contextInfo: { mentionedJid: [κ±α΄Ι΄α΄α΄ΚΙͺα΄, Receiver] },
                  quoted: chat,
                  mimetype: `video/gif`,
                  caption: `*πηͺπππΣπ Ι?ΦΘΆ* 

ββββββπ₯­ππ¨π©π’π: _*${FinalName}*_
β
βπͺ ππ«π¨π¦: @${κ±α΄Ι΄α΄α΄Κeceived}
βπ ππ¨: @${personreceived}
ββββββββγ `,
                }
              )
              .then(
                cleanRF.cleanRF(
                  `./ΚΙ¨ΚΚΣΙ¨ποΈΘΆΙΚΦ/${FinalName}_${MizukiGMid}.gif`,
                  `./ΚΙ¨ΚΚΣΙ¨ποΈΘΆΙΚΦ/${FinalName}_${MizukiGMid}.mp4`
                )
              );
          })
          .on(`βΞ±Π²ΡΡΡΟΡ`, async (βΞ±Π²ΡΡΡΟΡ) => {
            console.log(βΞ±Π²ΡΡΡΟΡ);
          });
      } catch (βΞ±Π²ΡΡΡΟΡ) {
        console.log(βΞ±Π²ΡΡΡΟΡ);
      }
    }
    // β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
    if (!ππππΣπ.isReply) {
      const downloader = await new Downloader({
        url: link,
        directory: `./ΚΙ¨ΚΚΣΙ¨ποΈΘΆΙΚΦ`,
        fileName: `${FinalName}_${MizukiGMid}.gif`,
        cloneFiles: false,
      });
      try {
        await downloader.download();
        ffmpeg(`./ΚΙ¨ΚΚΣΙ¨ποΈΘΆΙΚΦ/${FinalName}_${MizukiGMid}.gif`)
          .outputOptions([
            `-pix_fmt yuv420p`,
            `-c:v libx264`,
            `-movflags +faststart`,
            `-filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2'`,
          ])
          .save(`./ΚΙ¨ΚΚΣΙ¨ποΈΘΆΙΚΦ/${FinalName}_${MizukiGMid}.mp4`)
          .on(`end`, async () => {
            console.log(`Finished`);
            await ΣΚΗΣΙ¨ΥΌΚ
              .sendMessage(
                ππππΣπ.chatId,
                fs.readFileSync(
                  `./ΚΙ¨ΚΚΣΙ¨ποΈΘΆΙΚΦ/${FinalName}_${MizukiGMid}.mp4`
                ),
                MessageType.video,
                {
                  contextInfo: { mentionedJid: [κ±α΄Ι΄α΄α΄ΚΙͺα΄] },
                  quoted: chat,
                  mimetype: `video/gif`,
                  caption: `*πηͺπππΣπ Ι?ΦΘΆ* 

ββββββπ₯­ππ¨π©π’π: _*${FinalName}*_
β
βπ―ππ‘ππ¦π¬ππ₯π―π: @${κ±α΄Ι΄α΄α΄Κeceived}
ββββββββγ`,
                }
              )
              .then(
                cleanRF.cleanRF(
                  `./ΚΙ¨ΚΚΣΙ¨ποΈΘΆΙΚΦ/${FinalName}_${MizukiGMid}.gif`,
                  `./ΚΙ¨ΚΚΣΙ¨ποΈΘΆΙΚΦ/${FinalName}_${MizukiGMid}.mp4`
                )
              )
              .catch((βΞ±Π²ΡΡΡΟΡ) => κ°α΄α΄α΄.catch(βΞ±Π²ΡΡΡΟΡ, ΣΚΗΣΙ¨ΥΌΚ, ππππΣπ, chat));
          })
          .on(`error`, async (βΞ±Π²ΡΡΡΟΡ) => {
            console.log(βΞ±Π²ΡΡΡΟΡ);
          });
      } catch (βΞ±Π²ΡΡΡΟΡ) {
        console.log(βΞ±Π²ΡΡΡΟΡ);
      }
    }
  };
  // β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
} catch (βΞ±Π²ΡΡΡΟΡ) {
  console.log(βΞ±Π²ΡΡΡΟΡ);
}
