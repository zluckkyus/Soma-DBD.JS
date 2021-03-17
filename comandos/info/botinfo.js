module.exports = ({
  name: "botinfo",
  aliases: ['bot','info'],
  code: `
$color[ff0000]
$title[<:yukihira:791068432594501643> Informações Soma™]
$description[Olá <@$authorID> Eu sou Soma, aqui estão algumas coisas sobre mim.

**(<:S_link:799758685923573790>)** **Links:**
<:S_seta:799756866326102037> Site: [Abrir Site\\](https://somaweb0.webnode.com)
<:S_seta:799756866326102037> Servidor: [Servidor de Suporte\\](https://discord.gg/hgDjvWjJmc)

<:S_protecao:799759407851765810> Informações

> **<:coroa:791453816411258900> Criador** » \`@$rluckkyz#9991\`
> **<:javascript:799775980222152794> Linguagem** » \`JavaScript / DBD.js\`
> **<a:slakk:791722600916975626> Host** » [Repl.it\\](https://repl.it/)
> **📅 Criação** » \`22/12/2020\`
> **<a:ping:791722728285012008> Ping** » \`$pingms\`

<:S_protecao:799759407851765810> Status

> **<:doneaa:791720450178809866> Servidores** » \`$serverCount\`
> **<:memoria_ram:791719555113549855> Ram** » \`$truncate[$ram]mb\`
> **<:configurar:791138745906233404> Comandos** » \`$commandsCount\`
> **<:uptime:791722240117833758> Uptime** » \`$uptime\`
> **<a:computador:791719754561224704> Cpu** » \`$truncate[$replaceText[$cpu;%;]]%\`
> **📦 Pacotes** » \`NODE.js / DBD.js\`
> **<:users:791722410507501619> Membros** » \`$allMembersCount\`]
`
})