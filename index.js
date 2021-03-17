const dbd = require('dbd.js');
const dbdExpress = require("dbd.express")



const bot = new dbd.Bot({
    sharding: true,
    shardAmount: 1,
    prefix: "$getServerVar[prefixo]",
    mobile: true
})

const Dashboard = new dbdExpress(bot)
Dashboard.API({
  port: process.env.PORT, //Put any port you want
  useSecureProtocol:true,
  authorizationKey: "Bearer-root@1234",
 headers:{
  'Authorization': 'Bearer-root@1234',
  'Content-Type': "application/json"
}
})

Dashboard.createUI()


bot.onMessage()

bot.musicStartCommand({ 
    channel: "$channelID",
    code: `$color[#ff0000]
    $description[<:music:795390104407375903> **|** Tocando agora: \`$songInfo[title]\`]`
});

bot.musicEndCommand({
  channel: "$channelID",
  code: `
$color[#ff0000]
$description[<:music:795390104407375903> **|** Como a fila de musicas acabou, estou saindo do canal de voz!]
`
})

bot.status({
  text: "🏅 | Me Adicione em seu Servidor!",
  type: "WATCHING",
  time: 10
})

bot.status({
  text: "➕️ | Shards $shardID",
  type: "WATCHING",
  time: 10
})

bot.status({
  text: "👀 | Estou em $serverCount Servers!",
  type: "WATCHING",
  time: 10
})

bot.status({
  text: "👀 | Tente s.news Para as novidades do bot!",
  type: "WATCHING",
  time: 10
})

bot.status({
  text: "🏓 | Ping $pingms",
  type: "WATCHING",
  time: 10
})

bot.status({
  text: "🍅 | Shokugeki!",
  type: "WATCHING",
  time: 10
})

bot.status({
  text: "📜 | Vigiando $allChannelsCount Canais!"
})

bot.command({
  name: "help",
  aliases: ['ajuda','cmd','cmds','commands'],
  code: `
$reactionCollector[$splitText[1];$authorID;2m;799765007654191144,799765042257985566,799765081490849852,799765126890389524,799766815310872608,798979442340921415;admin,info,fun,musica,economia,voltar;yes]
$textSplit[$sendMessage[{color: ff0000}{title: <:yukihira:791068432594501643> - Painel de Ajuda}{description:
  <:S_seta:799756866326102037> **Olá eu sou bot <@790785456773136384> espero que goste das minhas funções aqui estão alguns comandos! Sempre estou tendo atualizações mas caso tenha algum problema PorFavor Reporte! Agradeço por me usar!!**

  **(<:S_link:799758685923573790>)** **Links:
  <:S_seta:799756866326102037> Site: [Site\\](https://somaweb0.webnode.com)
  <:S_seta:799756866326102037> Servidor: [Servidor de Suporte\\](https://discord.gg/hgDjvWjJmc) **
  
  <:SetaEsquerda:797908671355027507> <:S_um:799765007654191144> » **Comandos de Moderação**
  <:SetaEsquerda:797908671355027507> <:S_dois:799765042257985566> » **Comandos de Utilidades**
  <:SetaEsquerda:797908671355027507> <:S_tres:799765081490849852> » **Comandos de Diversão**
  <:SetaEsquerda:797908671355027507> <:S_quatro:799765126890389524> » **Comandos de Música**
  <:SetaEsquerda:797908671355027507> <:S_cinco:799766815310872608> » **Comandos de Economia**
  <:SetaEsquerda:797908671355027507> <:voltarkkk:798979442340921415> » **Voltar**

}{image: https://cdn.discordapp.com/attachments/781564439744348170/790978956840665098/1608654416209-1.jpg}{footer:🍍 Me Adicione em Seu Servidor! | Executado por $username!};yes]; ]
`
})

bot.awaitedCommand({
  name: "voltar",
  code: `
$editMessage[$message[1];{color: ff0000}{title: <:yukihira:791068432594501643> - Painel de Ajuda}{description:
  <:S_seta:799756866326102037> **Olá eu sou bot <@790785456773136384> espero que goste das minhas funções aqui estão alguns comandos! Sempre estou tendo atualizações mas caso tenha algum problema PorFavor Reporte! Agradeço por me usar!!**

  **(<:S_link:799758685923573790>)** **Links:
  <:S_seta:799756866326102037> Site: [Site\\](https://somaweb0.webnode.com)
  <:S_seta:799756866326102037> Servidor: [Servidor de Suporte\\](https://discord.gg/hgDjvWjJmc) **
  
  <:SetaEsquerda:797908671355027507> <:S_um:799765007654191144> » **Comandos de Moderação**
  <:SetaEsquerda:797908671355027507> <:S_dois:799765042257985566> » **Comandos de Utilidades**
  <:SetaEsquerda:797908671355027507> <:S_tres:799765081490849852> » **Comandos de Diversão**
  <:SetaEsquerda:797908671355027507> <:S_quatro:799765126890389524> » **Comandos de Música**
  <:SetaEsquerda:797908671355027507> <:S_cinco:799766815310872608> » **Comandos de Economia**
  <:SetaEsquerda:797908671355027507> <:host:798308397308051476> » **Painel do Servidor**
  <:SetaEsquerda:797908671355027507> <:voltarkkk:798979442340921415> » **Voltar**

}{image: https://cdn.discordapp.com/attachments/781564439744348170/790978956840665098/1608654416209-1.jpg}{footer:🍍 Me Adicione em Seu Servidor! | Executado por $username!}]
`
})

bot.awaitedCommand({
  name: "admin",
  code: ` $editMessage[$message[1];{title:<:yukihira:791068432594501643> - Comandos de Moderação}{description:> <:setasoma:791068587044634664> \`kick\`, \`ban\`, \`antilink-off\`, \`antilink-on\`, \`prefixo\`, \`clear\`, \`addemoji\`, \`nuke\`, \`setEntrada\`, \`setSaida\`, \`lock\`, \`unlock\`, \`unban\`}{color:ff0000}{image: https://cdn.discordapp.com/attachments/781564439744348170/790978956840665098/1608654416209-1.jpg}{footer:🍍 Me Adicione em Seu Servidor!}] `})

bot.awaitedCommand({
  name: "info",
  code: ` $editMessage[$message[1];{title:<:yukihira:791068432594501643> - Comandos de Utilidades}{description:> <:setasoma:791068587044634664> \`botinfo\`, \`bug\`, \`invite\`, \`avatar\`, \`novidades\`, \`userinfo\`, \`serverinfo\`, \`ping\`}{color:ff0000}{image: https://cdn.discordapp.com/attachments/781564439744348170/790978956840665098/1608654416209-1.jpg}{footer:🍍 Me Adicione em Seu Servidor!}] `})

  bot.awaitedCommand({
    name: "fun",
    code: ` $editMessage[$message[1];{title:<:yukihira:791068432594501643> - Comandos de Diversão}{description:> <:setasoma:791068587044634664> \`trump\`, \`stonks\`, \`notstonks\`}{color:ff0000}{image: https://cdn.discordapp.com/attachments/781564439744348170/790978956840665098/1608654416209-1.jpg}{footer:🍍 Me Adicione em Seu Servidor!}] `})

    bot.awaitedCommand({
      name: "musica",
      code: ` $editMessage[$message[1];{title:<:yukihira:791068432594501643> - Comandos de Musica}{description:> <:setasoma:791068587044634664> \`play\`, \`queue\`, \`skip\`, \`loop\`, \`stop\`, \`pause\`, \`resume\`}{color:ff0000}{image: https://cdn.discordapp.com/attachments/781564439744348170/790978956840665098/1608654416209-1.jpg}{footer:🍍 Me Adicione em Seu Servidor!}] `})

      bot.awaitedCommand({
        name: "economia",
        code: ` $editMessage[$message[1];{title:<:yukihira:791068432594501643> - Comandos de Economia}{description:> <:setasoma:791068587044634664> \`work\`, \`bal\`, \`depositar\`, \`sacar\`}{color:ff0000}{image: https://cdn.discordapp.com/attachments/781564439744348170/790978956840665098/1608654416209-1.jpg}{footer:🍍 Me Adicione em Seu Servidor!}] `})
    

 bot.awaitedCommand({
  name: "painel",
  code: ` $editMessage[$message[1];{title:<:yukihira:791068432594501643> - Painel do Servidor}{description:<:setasoma:791068587044634664> **(<:Verificado:797908384731889676>)** Antilink - $getServerVar[antilink]}{color:ff0000}{image: https://cdn.discordapp.com/attachments/781564439744348170/790978956840665098/1608654416209-1.jpg}{footer:🍍 Me Adicione em Seu Servidor!}] `})

bot.command({
  nonPrefixed: true,
  name: "<@!790785456773136384>",
  code: `
$color[ff0000]
$title[<:yukihira:791068432594501643> Ajuda Soma™]
$description[<:usuario:791128159280955422> - **Olá <@$authorID> Eu sou Soma, um bot de moderação e entretenimento para seu servidor! estou aqui para lhe ajudar!\n\n<:peepo_pog:798924721969692692> Meu Website:\n[WebSite\\](https://somaweb0.webnode.com/)\n\n<a:panda_vesgo2:798926074268483624> Comandos:\n[Comandos\\](https://somaweb0.webnode.com/comandos)\n\n<:votogg:806992363587240028> Vote em Mim\n[Top.gg\\](https://top.gg/bot/790785456773136384)**]
$footer[Executado por $username]`
})

bot.command({
  nonPrefixed: true,
  name: "<@790785456773136384>",
  code: `
$color[ff0000]
$title[<:yukihira:791068432594501643> Ajuda Soma™]
$description[<:usuario:791128159280955422> - **Olá <@$authorID> Eu sou Soma, um bot de moderação e entretenimento para seu servidor! estou aqui para lhe ajudar!\n\n<:peepo_pog:798924721969692692> Meu Website:\n[WebSite\\](https://somaweb0.webnode.com/)\n\n<a:panda_vesgo2:798926074268483624> Comandos:\n[Comandos\\](https://somaweb0.webnode.com/comandos)\n\n<:votogg:806992363587240028> Vote em Mim\n[Top.gg\\](https://top.gg/bot/790785456773136384)\n\n🏠 Prefixo: $getServerVar[prefixo]help**]
$footer[Executado por $username]`
});

bot.command({
 name: "$alwaysExecute",
 nonPrefixed: true,
 code: `
 $deletecommand
 $onlyIfMessageContains[$message;https;//;]
 $onlyIf[$getServerVar[link]==true;]
 $color[ff0000]
 $title[<:nao:791442909937139753> Sistema Anti-Link]
 $description[<:report:791459643401830440> <@$authorID> Você não pode enviar links!]
 `
})

bot.command({
 name: "$alwaysExecute",
 nonPrefixed: true,
 code: `
 $deletecommand
 $onlyIfMessageContains[$message;discord;.gg;]
 $onlyIf[$getServerVar[link]==true;]
 $color[ff0000]
 $title[<:nao:791442909937139753> Sistema Anti-Link]
 $description[<:report:791459643401830440> <@$authorID> Você não pode enviar links!]
 `
})

// ENTRADA E SAIDA
bot.onJoined();
bot.joinCommand({
 channel:
"$replaceText[$replaceText[$checkCondition[$getServerVar[joinchannel]==];true;$randomChannelID];false;$getServerVar[joinchannel]]",

 code: `$replaceText[$replaceText[$replaceText[$getServerVar[joinmessage];{user.mention};<@$authorID>;-1];{guild.name};$serverName;-1];{user.username};$username[$authorID];-1]
$onlyIf[$getServerVar[joinchannel]!=;]
$onlyIf[$getServerVar[joinchannel]==$channelID;]`
 })

bot.onLeave();
bot.leaveCommand({
 channel: "$replaceText[$replaceText[$checkCondition[$getServerVar[leavechannel]==];true;$randomChannelID];false;$getServerVar[leavechannel]]",

 code:  `$replaceText[$replaceText[$replaceText[$getServerVar[leavemessage];{user.mention};<@$authorID>];{guild.name};$serverName];{user.username};$username[$authorID]]

$onlyIf[$getServerVar[leavemessage]!=;]
$onlyIf[$getServerVar[leavechannel]!=;]

$onlyIf[$getServerVar[leavechannel]==$channelID;]`
});

// CALLBACK
bot.onGuildJoin()
bot.botJoinCommand({
  channel: "800084954092011550",
  code: `
$title[Estou em Mais um Servidor!]
$thumbnail[$serverIcon]
$description[<:S_seta:799756866326102037> Aqui estão as informações da guilda \`$serverName\`

<:S_protecao:799759407851765810> » Informações
**<:coroa:791453816411258900> Posse** » <@$ownerID>
**<:S_id:799780332835831809> ID »** \`$guildID\`
**🎄 Invite > $getServerInvite[$guildID]
**📆 Data de Criação »** \`$creationDate[$guildID]\`
**<:S_boost:799782282239672410> Boosts »** \`$serverBoostCount\`

<:S_protecao:799759407851765810> » Chats
**<:S_canal:799782753234452510> Canais de Texto »** \`$channelCount[text]\`
**<:S_canal:799782753234452510> Canais de Voz »** \`$channelCount[voice]\`
**<:S_canal:799782753234452510> Categorias »** \`$channelCount[category]\`]
`
})

bot.onGuildLeave()
bot.botLeaveCommand({
  channel: "800084954092011550",
  code: `
$title[Estou em Menos um Servidor!]
$thumbnail[$serverIcon]
$description[<:S_seta:799756866326102037> Aqui estão as informações da guilda \`$serverName\`

<:S_protecao:799759407851765810> » Informações
**<:coroa:791453816411258900> Posse** » <@$ownerID>
**<:S_id:799780332835831809> ID »** \`$guildID\`
** 🎄 Invite > $getServerInvite[$guildID]**
**📆 Data de Criação »** \`$creationDate[$guildID]\`
**<:S_boost:799782282239672410> Boosts »** \`$serverBoostCount\`

<:S_protecao:799759407851765810> » Chats
**<:S_canal:799782753234452510> Canais de Texto »** \`$channelCount[text]\`
**<:S_canal:799782753234452510> Canais de Voz »** \`$channelCount[voice]\`
**<:S_canal:799782753234452510> Categorias »** \`$channelCount[category]\`
]
`
})

bot.command({
  name: "dashboard",
  code: `
Conta criada acesse o dashboard
$djsEval[(async () => {
client.Express.addAccounts({
username: "srluckkyz",
Password: "kevintg"
})
})
]
$onlyForIDs[777205185582727188;> **:x: Você não e o meu dono! **]
`
})

const fs = require('fs')

const folders = fs.readdirSync("./comandos/")

for (const files of folders) {
const folder = fs.readdirSync(`./comandos/${files}/`).filter(file => file.endsWith(".js"))

for (const commands of folder) {
const command = require(`./comandos/${files}/${commands}`) 
bot.command({
name: command.name,
code: command.code,
aliases: command.aliases,
nonPrefixed: command.nonPrefixed
})
} 
}

bot.variables({
  badges: "» ",
  logs: "",
  prefixo: "s.",
  banco: "0",
  afks: "no",
  afk: "Nenhum",
  logsw: "",
 leavechannel: "",
 joinchannel: "",
 leavemessage: "{user.username} Isso é um adeus?! Foi bom ter você como membro! espero que volte...",
 joinmessage: "Ola! {user.mention}, Seja bem-vindo ao nosso servidor \`{guild.name}\` espero que goste!",
  black: "",
  badge: "",
  muted: "",
  link: "no",
  antilink: "<:deslgiado:791877997392429056>",
  coins: "0",
  pene: "🎉"
});