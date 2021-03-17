module.exports = ({
  name: "unban",
  aliases: ['desbanir'],
  code: `
$color[ff0000]
$unban[$message[1]]
$title[<:yukihira:791068432594501643> Removendo Ban]
$description[<:usuario:791128159280955422> **|** Usuario:
<@$message[1]>

<:mensagem:791136061416800286> **|** Motivo:
$noMentionMessage
]
$footer[Espero que não quebre as regras]
$argsCheck[2;> <:erro_soma:791126072111923241> **Parece que você está errando porque não tenta s.unban <id> <motivo>**]
$onlyPerms[admin;> **:x: Você não é adminstrador...**]
$suppressErrors[> <:erro_soma:791126072111923241> **Parece que você está errando porque não tenta s.unban <id> <motivo>! Ou Verifique se eu tenho permissão!**]
`
})