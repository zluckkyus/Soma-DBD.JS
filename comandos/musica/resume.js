module.exports = ({
    name:"resume",
    aliases: ['continuar'],
    code:`
  $resumeSong
  <:music:795390104407375903> **|** Continuando a Fila: \`$songInfo[title]\`
  $onlyIf[$voiceID!=;Você não está em um canal de voz]
$suppressErrors[{description: :x: Foi mal, mas no momento não há nada tocando no servidor :P}{color: RED}]
  `
  })