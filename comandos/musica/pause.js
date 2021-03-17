module.exports = ({
    name: "pause",
    aliases: ['pausar'],
    code: `
  $pauseSong
  <:music:795390104407375903> **|** Musica Pausada para continuar digite \`s.resume\` para continuar!
  $onlyIf[$voiceID!=;Você não está em um canal de voz]
  
$suppressErrors[{description: :x: Foi mal, mas no momento não há nada tocando no servidor :P}{color: RED}]
`
  })