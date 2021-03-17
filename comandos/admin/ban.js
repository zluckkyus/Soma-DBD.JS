module.exports = ({
  name: "ban",
  aliases: ['banir'],
  code: `
$color[ff0000]
$ban[$mentioned[1]]
$title[<:yukihira:791068432594501643> Usuario Punido]
$description[<:usuario:791128159280955422> **|** Usuario:
<@$mentioned[1]>

<:mensagem:791136061416800286> **|** Motivo:
$noMentionMessage
]
$footer[Quem mandou quebrar as Regras?]
$argsCheck[2;> <:erro_soma:791126072111923241> **Parece que você está errando porque não tenta s.ban <usuario> <motivo>**]
$onlyPerms[admin;> **:x: Você não é adminstrador...**]
$suppressErrors[> <:erro_soma:791126072111923241> **Parece que você está errando porque não tenta s.ban <usuario> <motivo>! Ou Verifique se eu tenho permissão!**]
`
})