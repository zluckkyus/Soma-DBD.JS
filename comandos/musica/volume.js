module.exports = ({
    name: "volume",
    aliases: ['vol'],
    code: `
  $volume[$message]
  $isNumber[$message]
  <:music:795390104407375903> **|** Volume agora está em \`$message\`%!
  $onlyIf[$voiceID!=;Você não está em um canal de voz]
$suppressErrors[{description: :x: Foi mal, mas no momento não há nada tocando no servidor :P}{color: RED}]
  `
  })