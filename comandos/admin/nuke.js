module.exports = ({
  name: "nuke",
  code: `
$deleteChannels[$channelID]
$cloneChannel
$onlyPerms[managemessages;managechannels;{color:ff0000}{description:🚫 **| Você precisa ter permissão para \`Gerenciar canais\`, \`Gerenciar mensagens\` para conseguir executar esse comando.**}]
  $onlyBotPerms[managemessages;managechannels;{color:ff0000}{description:🚫 **| Eu preciso ter permissão para \`Gerenciar canais\`, \`Gerenciar mensagens 
\` para conseguir executar esse comando.**}]
$checkContains[$message;$message[1]]
$botTyping
`
})