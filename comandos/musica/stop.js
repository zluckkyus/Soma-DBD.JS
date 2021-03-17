module.exports = ({
    name: "stop",
    aliases: ['parar'],
    code: `
  $stopSong
  <:music:795390104407375903> **|** <@$authorID> Parou o batidão espero que tenha gostado!
  $onlyIf[$voiceID!=;Você não está em um canal de voz]
$suppressErrors[{description: :x: Foi mal, mas no momento não há nada tocando no servidor :P}{color: RED}]
  `
  })