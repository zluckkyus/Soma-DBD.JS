module.exports = ({
  name: "painel",
  code: `
$color[RANDOM]
$author[Paniel - $serverName;$serverIcon]
$description[🍜 **Aqui no painel da guilda você pode ver as configurações ativas, caso queira ativar a configuração é só procurar o comando e executar!**

<:adicionar:791447051002445844> AntiLink
**\`-\`** $getServerVar[antilink]

]
$footer[Comando Executado por $username;$authorAvatar]
$onlyPerms[admin;{color: RED}{description: ⚠️ Vocè não é \`ADMIN\` Então não pode executar este comando.}]
`
})