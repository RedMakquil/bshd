// β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
const Mizuki_Buttons = require(`../../ΚΙ¨ΚΚΣΙ¨π°οΈΦΙΚΚΙΚ/Mizuki_Buttons`);
const Mizuki_Static = require(`../../ΚΙ¨ΚΚΣΙ¨π°οΈΦΙΚΚΙΚ/Mizuki_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const cleanRF = require(`../../ΚΙ¨ΚΚΣΙ¨π°οΈΦΙΚΚΙΚ/cleanRF`);
const κ°α΄α΄α΄ = require(`../../ΚΙ¨ΚΚΣΙ¨π°οΈΦΙΚΚΙΚ/oShit`);
const _πππ_ = require(`../../ΚΙ¨ΚΚΣΙ¨π°οΈΦΙΚΚΙΚ/_πππ_`);
var α΄α΄Ιͺα΄x = new RegExp(_πππ_.FOXTROT, `g`);
var α΄α΄Ιͺ = /\/\^\[(.*)+\]\/\g/g.exec(α΄α΄Ιͺα΄x)[1];
const fs = require(`fs`);
const vers = require(`../../package.json`);
// β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
module.exports = {
  name: `groupmenu`,
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
      var MediaUrl = `./ΚΙ¨ΚΚΣΙ¨β£οΈΖΦΚΙ/ππππΣπ.png`;
      var MainText = `π£ππ¨π¬π‘π’-ππ¨π¬π‘π’ β’@${κ±α΄Ι΄α΄α΄Κeceived}, ${Timers}


βββββββββββββββββ€ ππ§π€πͺπ₯π¨
βπ°β’ ${α΄α΄Ιͺ}promote: _promote member to admin_
βπ°β’ ${α΄α΄Ιͺ}demote: _demote member from admin_
βπ°β’ ${α΄α΄Ιͺ}spam: _spam messsage in group/private_
βπ°β’ ${α΄α΄Ιͺ}invite: _get group invite link_
βπ°β’ ${α΄α΄Ιͺ}admins: _get all admins of a group_
βπ°β’ ${α΄α΄Ιͺ}disappear: _toggle disappear message in group_
βπ°β’ ${α΄α΄Ιͺ}getdesc: _get group description_
βπ°β’ ${α΄α΄Ιͺ}groupdp: _change group profile picture_
βπ°β’ ${α΄α΄Ιͺ}kick: _Κα΄α΄α΄α΄ α΄ α΄ α΄α΄Κκ±α΄Ι΄ κ°Κα΄α΄ α΄ Ι’Κα΄α΄α΄_
βπ°β’ ${α΄α΄Ιͺ}tagall: _tag everyone in group_
βπ°β’ ${α΄α΄Ιͺ}antilink: _remove any person who sends any links_
βπ°β’ ${α΄α΄Ιͺ}setwelcome: _welcome new members with custom message_
βπ°β’ ${α΄α΄Ιͺ}unmute: _unmute a group chat_
βπ°β’ ${α΄α΄Ιͺ}mute: _mute group chat_
ββββββββγ

βββββββββββββββββ€
βπ ππ«πππ’π±: *${α΄α΄Ιͺ}*
βπ ππ°π§ππ«: _πKrakinzKon_
βπ πππ ππ’π³π?π€π’: _${α΄α΄Ιͺ}request_
ββ£οΈ ππ’πππ§π¬ππ: Apache License Version 2.0
βπ° ππ«π¨π?π©: ${_πππ_.HASH}
βπ πΎπ€π’ππ£π ππ€π€π£! _many many more_
ββββββββγ`;
      return Mizuki_Buttons.MIB(
        ΣΚΗΣΙ¨ΥΌΚ,
        chat,
        ππππΣπ,
        MainText,
        MediaUrl
      ).catch((βΞ±Π²ΡΡΡΟΡ) => κ°α΄α΄α΄.catch(βΞ±Π²ΡΡΡΟΡ, ΣΚΗΣΙ¨ΥΌΚ, ππππΣπ, chat));
      // β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
    } catch (βΞ±Π²ΡΡΡΟΡ) {
      κ°α΄α΄α΄.catch(βΞ±Π²ΡΡΡΟΡ, ΣΚΗΣΙ¨ΥΌΚ, ππππΣπ, chat);
      console.log(βΞ±Π²ΡΡΡΟΡ);
    }
  },
};
// β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
