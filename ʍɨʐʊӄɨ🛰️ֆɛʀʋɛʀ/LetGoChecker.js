// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
try {
  const LetGoChecker = async (𝓜𝖎𝖟𝖚ӄ𝖎, ӄʀǟӄɨռʐ, CheckBans) => {
    if (
      !𝓜𝖎𝖟𝖚ӄ𝖎.fromMe &&
      !𝓜𝖎𝖟𝖚ӄ𝖎.isSenderDev &&
      !𝓜𝖎𝖟𝖚ӄ𝖎.isSenderGroupAdmin &&
      CheckBans
    ) {
      return false;
    } else {
      return true;
    }
  };
  module.exports = LetGoChecker;
} catch (ℓαвєяяσя) {
  console.log(ℓαвєяяσя);
}
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
