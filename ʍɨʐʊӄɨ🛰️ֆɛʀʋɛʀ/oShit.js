try {
  // β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
  const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
  const _πππ_ = require(`./_πππ_`);
  var α΄α΄Ιͺα΄x = new RegExp(_πππ_.FOXTROT, `g`);
  var α΄α΄Ιͺ = /\/\^\[(.*)+\]\/\g/g.exec(α΄α΄Ιͺα΄x)[1];
  require(`python-format-js`);
  const fs = require(`fs`);
  const cleanRF = require(`./cleanRF`);
  const vers = require(`../package.json`);
  const speed = require(`performance-now`);
  let Timestamp = speed();
  const Pong = speed() - Timestamp;
  const Ping = Pong.toFixed(4);
  const date = require(`date-and-time`);
  const now = new Date();
  date.format(now, `ddd, MMM DD YYYY`);
  const pattern = date.compile(`ddd, MMM DD YYYY`);
  const Clock = date.format(now, pattern);
  const time2 = moment().tz(`Asia/Kolkata`).format(`HH:mm:ss`);
  if (time2 < `24:59:00`) {
    var Timers = `ππ’π π‘π­π΄`;
  }
  if (time2 < `19:00:00`) {
    var Timers = `ππ―ππ§π’π§π π`;
  }
  if (time2 < `18:00:00`) {
    var Timers = `πππ­ππ«π§π¨π¨π§π`;
  }
  if (time2 < `15:00:00`) {
    var Timers = `πππ­ππ«π§π¨π¨π§βοΈ`;
  }
  if (time2 < `11:00:00`) {
    var Timers = `ππ¨π«π§π’π§π π`;
  }
  if (time2 < `05:00:00`) {
    var Timers = `ππ’π π‘π­π€`;
  }
  // β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
  exports.catch = async (βΞ±Π²ΡΡΡΟΡ, ΣΚΗΣΙ¨ΥΌΚ, ππππΣπ, chat) => {
    var κ±α΄Ι΄α΄α΄ΚΙͺα΄ = ππππΣπ.sender;
    var κ±α΄Ι΄α΄α΄Κeceived = κ±α΄Ι΄α΄α΄ΚΙͺα΄.substring(0, κ±α΄Ι΄α΄α΄ΚΙͺα΄.length - 15);
    const defaultnm = ππππΣπ.commandName;
    const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
    // β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
    await ΣΚΗΣΙ¨ΥΌΚ
      .sendMessage(
        ππππΣπ.chatId,
        {
          contentText: `ππ½ππ¨π¬π‘π’-ππ¨π¬π‘π’, ${Timers} @${κ±α΄Ι΄α΄α΄Κeceived},
              
β ππ¦ ππ’π― ππ―π΅π° ππ°π?π¦ ππ³π³π°π³ β
β€ ππ¨π¦π¦ππ§π: _${α΄α΄Ιͺ}${FinalName}_!`,
          footerText: `\n(c)ππ’π³π?π€π’πππ¨π­ \nπα΄α΄α΄α΄: _${Clock}_`,
          buttons: [
            {
              buttonId: `${α΄α΄Ιͺ}help`,
              buttonText: { displayText: `${α΄α΄Ιͺ}help` },
              type: 1,
            },
          ],
          headerType: 1,
        },
        MessageType.buttonsMessage,
        {
          quoted: chat,
          contextInfo: { mentionedJid: [κ±α΄Ι΄α΄α΄ΚΙͺα΄] },
        }
      )
      .then(console.log(βΞ±Π²ΡΡΡΟΡ));
    // β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
    return await ΣΚΗΣΙ¨ΥΌΚ
      .sendMessage(
        ππππΣπ.Myself,
        {
          contentText: `β‘Try Command: _${α΄α΄Ιͺ}${FinalName}_ Again Later!`,
          footerText: `\n(c)ππ’π³π?π€π’πππ¨π­  \nπα΄α΄α΄α΄: _${Clock}_


Error: ${βΞ±Π²ΡΡΡΟΡ}`,
          buttons: [
            {
              buttonId: `${α΄α΄Ιͺ}bugreport`,
              buttonText: { displayText: `${α΄α΄Ιͺ}bugreport` },
              type: 1,
            },
          ],
          headerType: 1,
        },
        MessageType.buttonsMessage,
        {
          quoted: chat,
        }
      )
      .then(console.log(βΞ±Π²ΡΡΡΟΡ));
  };
  // β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
} catch (βΞ±Π²ΡΡΡΟΡ) {
  console.log(βΞ±Π²ΡΡΡΟΡ);
}
