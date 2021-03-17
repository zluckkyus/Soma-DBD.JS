module.exports = ({
  name: "setlogs",
  code: `
$setServerVar[logs;$mentionedChannels[1]]
$color[ff0000]
$title[<:yukihira:791068432594501643> Logs BotList]
$description[**<a:correto_soma:791122818611019826> Canal de Logs Setado Com Sucesso!**]
$footer[Soma™ BotList's]
$argsCheck[1;> **<:nao:791442909937139753> Tente, s.setlogs <canal>**]
$onlyPerms[admin;> **<:nao:791442909937139753> Você não é adminstrador, por tanto não pode usar este comando!**]
`
})