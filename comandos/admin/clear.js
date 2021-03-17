module.exports = ({
  name: "clear",
  aliases: ['limpar'],
  code: `
$channelSendMessage[$channelID;{color:22FF00}{description:<:funcionando_soma:791126557166927913> **|** Foram limpadas \`$message[1]\` mensagens.}]
$clear[$message]
$deleteIn[8s]
$onlyPerms[managemessages;{color:FF0101}{description:<:nao:791442909937139753> **|** Você precisa da permissão \`gerenciar mensagens\` para este comando.}]
$onlyBotPerms[managemessages;{color:FF0101}{description:<:nao:791442909937139753> **|** Você precisa da permissão \`gerenciar mensagens\` para este comando.}]
$suppressErrors[{color:FF0101}{description:<:nao:791442909937139753> **|** Coloque algum número após o comando.**}]
`
})