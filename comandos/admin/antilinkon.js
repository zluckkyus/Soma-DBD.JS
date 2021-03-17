module.exports = ({
 name: "antilink-on",
 code: `
 $setServerVar[link;true]
 $setServerVar[antilink;<:ligado:791877939972931664>]
 $title[Soma™ AntiLinks]
 $description[<:ligado:791877939972931664> AntiLink Ativo, qualquer link enviado será bloqueado!]
 $footer[AntiLink ativo por $username | s.help]
 $addTimestamp
 $color[ff0000]
 $onlyBotPerms[managemessages;Estou sem permissão de **GERÊNCIAR MENSAGENS**]
 $onlyPerms[managechannels;> :x: Você não é um moderador...]
`
})