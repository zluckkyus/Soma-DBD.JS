module.exports = ({
    name: "serverinfo",
    code: `
$color[ff0000]
$title[$serverName]
$thumbnail[$serverIcon]
$description[<:S_seta:799756866326102037> Aqui estão as informações da guilda \`$serverName\`

<:S_protecao:799759407851765810> » Informações
**<:coroa:791453816411258900> Posse** » <@$ownerID>
**<:S_id:799780332835831809> ID »** \`$guildID\`
**📆 Data de Criação »** \`$creationDate[$guildID]\`
**<:S_boost:799782282239672410> Boosts »** \`$serverBoostCount\`

<:S_protecao:799759407851765810> » Chats
**<:S_canal:799782753234452510> Canais de Texto »** \`$channelCount[text]\`
**<:S_canal:799782753234452510> Canais de Voz »** \`$channelCount[voice]\`
**<:S_canal:799782753234452510> Categorias »** \`$channelCount[category]\`]
`
})