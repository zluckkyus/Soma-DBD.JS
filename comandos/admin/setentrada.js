module.exports = ({
    name: "setEntrada",
    aliases: ["setChannelJoin", "setChannelWelcome"],
     code: `$setServerVar[joinchannel;$mentionedChannels[1]]
   $channelSendMessage[$channelID;{color:ff0000}{description:<:Verificado:797908384731889676> **| Você setou logs de entrada no canal:** <#$mentionedChannels[1]>}]
   $onlyPerms[manageserver;{color:ff0000}{description:<:errado:797223270789021696> **| Você precisa ter permissão para \`Gerenciar servidor\` para conseguir executar esse comando.**}]
   $onlyIf[$message!=;{title:<:config:791453239723687997> **Moderação - Canal Entrada**}{color:ff0000}{description:❪<:emoji_36:791030913357840435>❫ \`$getServerVar[prefixo]setCanalEntrada\`
   Canal de logs para membros que entra no servidor.
   
   ❪<:pergunta:791138058652745729>❫ **Como usar?**  \`$getServerVar[prefixo]setCanalEntrada <canal>\`
   ❪<:report:791459643401830440>❫ **Exemplos**
   \`$getServerVar[prefixo]setCanalEntrada\` <#$channelID>
   ❪<:estrela:791869073084252170>❫ **Permissões**
   ❪<:usuario:791128159280955422>❫ Você precisa ter permissão para \`Gerenciar servidor\` para conseguir executar esse comando.
   ❪<:configurar:791138745906233404>❫ Eu não preciso de nenhuma permissão para conseguir executar esse comando.
   ❪<:pergunta:791138058652745729>❫ **Sinônimos**
   \`setChannelJoin\`, \`setChannelWelcome\`}]
   $argsCheck[1;{title:<:config:791453239723687997> **Moderação - Canal Entrada**}{color:ff0000}{description:❪<:config:791453239723687997>❫ \`$getServerVar[prefixo]setCanalEntrada\`
   Canal de logs para membros que entra no servidor.
   
   ❪<:pergunta:791138058652745729>❫ **Como usar?**  \`$getServerVar[prefixo]setCanalEntrada <canal>\`
   ❪<:report:791459643401830440>❫ **Exemplos**
   \`$getServerVar[prefixo]setCanalEntrada\` <#$channelID>
   ❪<:estrela:791869073084252170>❫ **Permissões**
   ❪<:usuario:791128159280955422>❫ Você precisa ter permissão para \`Gerenciar servidor\` para conseguir executar esse comando.
   ❪<:configurar:791138745906233404>❫ Eu não preciso de nenhuma permissão para conseguir executar esse comando.
   ❪<:pergunta:791138058652745729>❫ **Sinônimos**
   \`setChannelJoin\`, \`setChannelWelcome\`}]
`
})   