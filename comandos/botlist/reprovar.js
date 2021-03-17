module.exports = ({
  name: "reprovar",
  code: `
$channelSendMessage[$channelID;> **<a:correto_soma:791122818611019826> Bot Reprovado com Sucesso!**]
$useChannel[$getServerVar[logs]]
$color[ff0000]
$title[<:yukihira:791068432594501643> Bot Aprovado]
$description[**<:bot:791068700333178890> - BOT:
$message[1]

<:pergunta:791138058652745729> - MOTIVO:
$message[2]**]
$footer[Soma™ BotList's]
$argsCheck[1;> **<:nao:791442909937139753> Tente, s.reprovar <bot> <motivo>**]
$argsCheck[2;> **<:nao:791442909937139753> Tente, s.reprovar <bot> <motivo>**]
$onlyPerms[admin;> **<:nao:791442909937139753> Você não é adminstrador, por tanto não pode usar este comando!**]
`
})