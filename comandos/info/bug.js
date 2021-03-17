module.exports = ({
  name: "bug",
  aliases: ['report'],
  code: `
$useChannel[799363239426785332]
$color[ff0000]
$title[<:yukihira:791068432594501643> Report Soma™]
$description[**<:usuario:791128159280955422> - Nome do Autor: $username

<:report:791459643401830440> Bug:** $message

<:certo:797223331048587324> Servidor: [Servidor\\]($getServerInvite[$guildID])]
$footer[Obrigado por Reportar!]
$channelSendMessage[$channelID;> **<a:correto_soma:791122818611019826> Report Enviado com Sucesso! Vá para meu servidor de suporte e verifique e espere a resposta da staff!**]
$argsCheck[>1;<:errado:797223270789021696> Está faltando um argumento. Tente \`s.bug <texto>\`]
`
})