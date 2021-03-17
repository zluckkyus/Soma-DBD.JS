module.exports = ({
  name: "addbot",
  code: `
$deletecommand
$channelSendMessage[$channelID;> **<a:correto_soma:791122818611019826> Bot Enviado com Sucesso!**]
$useChannel[$getServerVar[logs]]
$color[ff0000]
$title[<:yukihira:791068432594501643> Addbot BotList]
$description[**<:bot:791068700333178890> - ID DO BOT:
$message[1]

<:pergunta:791138058652745729> - PREFIXO DO BOT:
$message[2]**]
$addField[<:adicionar:791447051002445844> Adicionar Bot:;[Clique aqui\\](https://discord.com/oauth2/authorize?client_id=$message[1]&scope=bot&permissions=0)]
$footer[Soma™ BotList's]
$onlyIf[$isNumber[$message[1]]!=false;> **<:nao:791442909937139753> Você não colocou o id... Tente** s.addbot <id> <prefixo>]
$suppressErrors[> **<:nao:791442909937139753> Não há nenhum canal setado de logs, peça a algum adminstrador para setar usando.** s.setlogs <#canal>]
$argsCheck[2;> **<:nao:791442909937139753> Tente, s.addbot <id> <prefixo>**]
`
})