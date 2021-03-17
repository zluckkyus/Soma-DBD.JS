module.exports = ({
 name: "antilink-off",
 code: `
 $setServerVar[link;no]
 $title[Soma™ AntiLinks]
 $setServerVar[antilink;<:deslgiado:791877997392429056>]
 $description[<:deslgiado:791877997392429056> AntiLink Desativado, qualquer link enviado não será bloqueado!]
 $footer[AntiLink desativado por $username | s.help]
 $addTimestamp
 $color[ff0000]
 $onlyBotPerms[managemessages;Estou sem permissão de **GERÊNCIAR MENSAGENS**]
 $onlyPerms[managechannels;> :x: Você não é um moderador...]
 `
})