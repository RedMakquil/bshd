// โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
const Mizuki_Buttons = require(`../../สษจสสำษจ๐ฐ๏ธึษสสษส/Mizuki_Buttons`);
const Mizuki_Static = require(`../../สษจสสำษจ๐ฐ๏ธึษสสษส/Mizuki_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const cleanRF = require(`../../สษจสสำษจ๐ฐ๏ธึษสสษส/cleanRF`);
const Carbon = require(`unofficial-carbon-now`);
const ๊ฐแดแดแด = require(`../../สษจสสำษจ๐ฐ๏ธึษสสษส/oShit`);
const _๐๐๐_ = require(`../../สษจสสำษจ๐ฐ๏ธึษสสษส/_๐๐๐_`);
var แดแดษชแดx = new RegExp(_๐๐๐_.FOXTROT, `g`);
const vers = require(`../../package.json`);
var แดแดษช = /\/\^\[(.*)+\]\/\g/g.exec(แดแดษชแดx)[1];
// โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
module.exports = {
  name: `carbon`,
  ๐๐ฎ๐ฎ6สึสษ: `Example Usage,
*${แดแดษช}carbon <text>* 
*${แดแดษช}carbon*  and reply to a text message.
Use the -t flag after  *${แดแดษช}carbon*  to get the list of themes availble.
In order to specify the theme, use  *${แดแดษช}carbon <text> -t <theme>* .`,
  more: `No input provided.
Please use the command  
*${แดแดษช}carbon <text> -t <theme>*  
or reply to a text message with  
*${แดแดษช}carbon*  to carbonize the text.`,
  async handle(ำสวำษจีผส, chat, ๐๐๐๐ำ๐, Needs, ๊ฑษชแดสแดแด, Clock, Ping, Timers) {
    try {
      // โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
      var ๊ฑแดษดแดแดสษชแด = ๐๐๐๐ำ๐.sender;
      var ๊ฑแดษดแดแดสeceived = ๊ฑแดษดแดแดสษชแด.substring(0, ๊ฑแดษดแดแดสษชแด.length - 15);
      const defaultnm = ๐๐๐๐ำ๐.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      console.log(
        `๐็ช๐๐๐ำ๐โข แด?แดสษช๊ฐษชแดแด ๊ฐษชสแด > ` + FinalName.toUpperCase() + `โ๏ธ`
      );
      // โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
      let themes = [
        `3024 night`,
        `a11y dark`,
        `blackboard`,
        `base 16 (dark)`,
        `base 16 (light)`,
        `cobalt`,
        `duotone`,
        `hopscotch`,
        `lucario`,
        `material`,
        `monokai`,
        `night owl`,
        `nord`,
        `oceanic next`,
        `one light`,
        `one dark`,
        `panda`,
        `paraiso`,
        `seti`,
        `shades of purple`,
        `solarized (dark)`,
        `solarized (light)`,
        `synthwave '84`,
        `twilight`,
        `verminal`,
        `vscode`,
        `yeti`,
        `zenburn`,
      ];
      var code = ``;
      if (Needs[0] == null && !๐๐๐๐ำ๐.isReply) {
        var ๐Usage = ๊ฑษชแดสแดแด.get(๐๐๐๐ำ๐.commandName);
        var แดษชแดขแดแดษชแดแดสแด =
          ๐Usage.๐๐ฎ๐ฎ6สึสษ === undefined ? `Null` : ๐Usage.๐๐ฎ๐ฎ6สึสษ;
        const แดสษขแดแดแดษดแด = require(`../../สษจสสำษจ๐ฐ๏ธึษสสษส/ษดแดแดแดแดสษขแดแดแดษดแด`);
        return แดสษขแดแดแดษดแด.ษดแดแดแดแดสษขแดแดแดษดแด(
          ำสวำษจีผส,
          chat,
          ๐๐๐๐ำ๐,
          ๊ฑแดษดแดแดสษชแด,
          ๊ฑแดษดแดแดสeceived,
          ๐๐๐๐ำ๐.commandName,
          แดษชแดขแดแดษชแดแดสแด
        );
        // โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
      } else if (๐๐๐๐ำ๐.isReply && !๐๐๐๐ำ๐.replyMessage) {
        await ำสวำษจีผส
          .sendMessage(
            ๐๐๐๐ำ๐.chatId,
            `\n(c)๐๐ข๐ณ๐ฎ๐ค๐ข๐๐๐จ๐ญ  \n๐แดแดแดแด: _${Clock}_\n\nThe replied message should be text.`,
            MessageType.text,
            { quoted: chat }
          )
          .catch((โฮฑะฒัััฯั) => ๊ฐแดแดแด.catch(โฮฑะฒัััฯั, ำสวำษจีผส, ๐๐๐๐ำ๐, chat));

        return;
      } else if (๐๐๐๐ำ๐.isReply) {
        code = ๐๐๐๐ำ๐.replyMessage;
        themeInput = themes[Math.floor(Math.random() * themes.length)];
        // โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
      } else {
        // โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
        try {
          if (๐๐๐๐ำ๐.sender === ๐๐๐๐ำ๐.owner) return;
          const jsoncool = JSON.parse(
            fs.readFileSync(`./สษจสสำษจ๐ฐ๏ธึษสสษส/Coolist.json`)
          );
          jsoncool.push(๐๐๐๐ำ๐.sender + ๐๐๐๐ำ๐.chatId);
          fs.writeFileSync(
            `./สษจสสำษจ๐ฐ๏ธึษสสษส/Coolist.json`,
            JSON.stringify(jsoncool)
          );
          setTimeout(async (error) => {
            if (error) console.log(error);
            jsoncool.splice(๐๐๐๐ำ๐.sender + ๐๐๐๐ำ๐.chatId);
            fs.writeFileSync(
              `./สษจสสำษจ๐ฐ๏ธึษสสษส/Coolist.json`,
              JSON.stringify(jsoncool)
            );
          }, 6000);
        } catch (โฮฑะฒัััฯั) {
          console.log(โฮฑะฒัััฯั);
        }
        // โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
        try {
          var text = ๐๐๐๐ำ๐.body.replace(
            ๐๐๐๐ำ๐.body[0] + ๐๐๐๐ำ๐.commandName + ` `,
            ``
          );
          if (text[0] === `-` && text[1] === `t`) {
            if (text[2] == null) {
              let counter = 1;
              var message = `\n(c)๐๐ข๐ณ๐ฎ๐ค๐ข๐๐๐จ๐ญ\n๐ฐ๏ธแดษชษดษข: _${Ping.toFixed(
                2
              )}s_\n๐ธ๐๐๐ซ๐ฌ๐ข๐จ๐ง: _${
                vers.vers
              }_\n๐แดแดแดแด: _${Clock}_\n\nAvailable themes: `;
              themes.forEach((theme) => {
                message += `\n${counter}. ${theme}`;
                counter += 1;
              });
              await ำสวำษจีผส
                .sendMessage(
                  ๐๐๐๐ำ๐.chatId,
                  `` + message + ``,
                  MessageType.text,
                  {
                    quoted: chat,
                  }
                )
                .catch((โฮฑะฒัััฯั) =>
                  ๊ฐแดแดแด.catch(โฮฑะฒัััฯั, ำสวำษจีผส, ๐๐๐๐ำ๐, chat)
                );

              return;
            } else {
              await ำสวำษจีผส
                .sendMessage(
                  ๐๐๐๐ำ๐.chatId,
                  `\n(c)๐๐ข๐ณ๐ฎ๐ค๐ข๐๐๐จ๐ญ\n๐ฐ๏ธแดษชษดษข: _${Ping}s_\n๐ธ๐๐๐ซ๐ฌ๐ข๐จ๐ง: _${vers.vers}_\n๐แดแดแดแด: _${Clock}_\n\nNo input provided.
Please use the command  *${แดแดษช}carbon <text>*  or reply to a text message with  *${แดแดษช}carbon*  to carbonize the text.`,
                  MessageType.text,
                  { quoted: chat }
                )
                .catch((โฮฑะฒัััฯั) =>
                  ๊ฐแดแดแด.catch(โฮฑะฒัััฯั, ำสวำษจีผส, ๐๐๐๐ำ๐, chat)
                );

              return;
            }
          }
          // โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
          var body = ๐๐๐๐ำ๐.body.split(`-t`);
          code = body[0].replace(๐๐๐๐ำ๐.body[0] + ๐๐๐๐ำ๐.commandName + ` `, ``);
          themeInput = body[1].substring(1);
          if (!themes.includes(themeInput)) {
            await ำสวำษจีผส
              .sendMessage(
                ๐๐๐๐ำ๐.chatId,
                `\n(c)๐๐ข๐ณ๐ฎ๐ค๐ข๐๐๐จ๐ญ  \n๐แดแดแดแด: _${Clock}_\n\nPlease enter a valid theme.
Do note that theme names are  *case sensitive*${แดแดษช}`,
                MessageType.text,
                { quoted: chat }
              )
              .catch((โฮฑะฒัััฯั) => ๊ฐแดแดแด.catch(โฮฑะฒัััฯั, ำสวำษจีผส, ๐๐๐๐ำ๐, chat));

            return;
          }
        } catch (โฮฑะฒัััฯั) {
          if (โฮฑะฒัััฯั instanceof TypeError) {
            code = ๐๐๐๐ำ๐.body.replace(
              ๐๐๐๐ำ๐.body[0] + ๐๐๐๐ำ๐.commandName + ` `,
              ``
            );
            themeInput = themes[Math.floor(Math.random() * themes.length)];
          }
        }
      }
      // โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
      await ำสวำษจีผส
        .sendMessage(
          ๐๐๐๐ำ๐.chatId,
          `\n(c)๐๐ข๐ณ๐ฎ๐ค๐ข๐๐๐จ๐ญ  \n๐แดแดแดแด: _${Clock}_\n\nConverting your text into a code snippet. Please wait...`,
          MessageType.text,
          { quoted: chat }
        )
        .catch((โฮฑะฒัััฯั) => ๊ฐแดแดแด.catch(โฮฑะฒัััฯั, ำสวำษจีผส, ๐๐๐๐ำ๐, chat));
      const carbon = new Carbon.createCarbon()
        .setCode(code)
        .setPrettify(true)
        .setTheme(themeInput);
      const output = await Carbon.generateCarbon(carbon);
      await ำสวำษจีผส
        .sendMessage(๐๐๐๐ำ๐.chatId, output, MessageType.image, {
          quoted: chat,
          mimetype: Mimetype.png,
          caption: `\n(c)๐๐ข๐ณ๐ฎ๐ค๐ข๐๐๐จ๐ญ  \n๐แดแดแดแด: _${Clock}_\n\n
*<< Here's your carbon image! >>*
Colour Scheme: {}`.format(themeInput),
        })
        .catch((โฮฑะฒัััฯั) => ๊ฐแดแดแด.catch(โฮฑะฒัััฯั, ำสวำษจีผส, ๐๐๐๐ำ๐, chat));
      // โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
    } catch (โฮฑะฒัััฯั) {
      ๊ฐแดแดแด.catch(โฮฑะฒัััฯั, ำสวำษจีผส, ๐๐๐๐ำ๐, chat);
      console.log(โฮฑะฒัััฯั);
    }
  },
};
// โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
