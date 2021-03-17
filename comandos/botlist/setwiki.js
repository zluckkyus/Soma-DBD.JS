module.exports = ({
  name: "setwiki",
  code: `
$setServerVar[logsw;$mentionedChannels[1]]
$color[ff0000]
$title[<:yukihira:791068432594501643> Wiki BotList]
$description[**<a:correto_soma:791122818611019826> Canal de Wiki Setado Com Sucesso!**]
$footer[Soma™ BotList's]
$argsCheck[1;> **<:nao:791442909937139753> Tente, s.setwiki <canal>**]
$onlyPerms[admin;> **<:nao:791442909937139753> Você não é adminstrador, por tanto não pode usar este comando!**]
`
})