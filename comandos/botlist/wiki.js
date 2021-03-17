module.exports = ({
  name: "wiki",
  code: `
$useChannel[$getServerVar[logsw]]
$title[$message[1]]
$author[Nova wiki de $username;$userAvatar[$authorID]]
$description[$message[2]]
$suppressErrors[**Error** Não tem nenhum canal de wiki setado!]
$channelSendMessage[$channelID;<:analise:779099378081202186> <@$authorID> Sua **wiki** foi enviada com sucesso.]
$argsCheck[>1;Comando utilizado errado por favor utilize deste jeito: **w!wiki <linguagem> <script>**]
$footer[🔼 Bom | 🔽 Ruim]
$addReactions[🔼;🔽]
$deletecommand

`
})