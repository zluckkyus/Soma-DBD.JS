module.exports = ({
    name: "play",
    aliases: ['p'],
    code: `
$color[ff0000]
$image[$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;thumbnail]]
$title[📻 **__Musica Adicionada a Fila__**]
$description[**Tocando Agora** [$songInfo[title]\\]($songInfo[url])]
<:check:812322345951297576> **Adicionando** | $playSong[$message;10s;no;**> :x: Você entrou uma musica errada tente** \`s.play lalala\`]

$onlyIf[$voiceID!=;{color:RED}{description:Você não está em um canal de voz, entre e tente novamente!.}]
$onlyIf[$message!=;{color:RED}{description:Entre um link ou nome da musica! \`s.play lalala\`}]
`
})