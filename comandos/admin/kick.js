module.exports = ({
  name: "kick",
  aliases: ['expulsar'],
  code: `
$color[ff0000]
$kick[$mentioned[1]]
$title[<:yukihira:791068432594501643> Usuario Punido]
$description[<:usuario:791128159280955422> **|** Usuario:
<@$mentioned[1]>

<:mensagem:791136061416800286> **|** Motivo:
$noMentionMessage
]
$footer[Quem mandou quebrar as Regras?]
$argsCheck[2;> <:erro_soma:791126072111923241> **Parece que você está errando porque não tenta s.kick <usuario> <motivo>**]
$onlyPerms[admin;{description:**<:errado:797223270789021696> Parece que você não possui permissões suficientes para executar este comando você necessita da permissão. \`Adminstrador\`**}{color: ff0000}{thumbnail: $serverIcon}]
$suppressErrors[> <:erro_soma:791126072111923241> **Parece que você está errando porque não tenta s.kick <usuario> <motivo>! Ou Verifique se eu tenho permissão!**]`
})