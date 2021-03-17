module.exports = ({
    name: "setSaida",
    aliases: ["setChannelBye", "setChannelLeave"],
     code: `$setServerVar[leavechannel;$mentionedChannels[1]]
   $channelSendMessage[$channelID;{color:ff0000}{description:<:Verificado:797908384731889676> **| Você setou logs de saida no canal:** <#$mentionedChannels[1]>}]
   $onlyPerms[manageserver;{color:ff0000}{description:<:errado:797223270789021696> **| Você precisa ter permissão para \`Gerenciar servidor\` para conseguir executar esse comando.**}]
   $onlyIf[$message!=;{title:<:config:791453239723687997> **Moderação - Canal Saida**}{color:ff0000}{description:❪<:config:791453239723687997>❫ \`$getServerVar[prefixo]setCanalSaida\`
   Canal de logs para membros que sairam do servidor.
   
   ❪<:pergunta:791138058652745729>❫ **Como usar?**  \`$getServerVar[prefixo]setCanalSaida <canal>\`
   ❪<:report:791459643401830440>❫ **Exemplos**
   \`$getServerVar[prefixo]setCanalSaida\` <#$channelID>
   ❪<:estrela:791869073084252170>❫ **Permissões**
   ❪<:usuario:791128159280955422>❫ Você precisa ter permissão para \`Gerenciar servidor\` para conseguir executar esse comando.
   ❪<:configurar:791138745906233404>❫ Eu não preciso de nenhuma permissão para conseguir executar esse comando.
   ❪<:pergunta:791138058652745729>❫ **Sinônimos**
   \`setChannelBye\`, \`setChannelLeave\`}]
   $argsCheck[1;{title:<:config:791453239723687997> **Moderação - Canal Saida**}{color:ff0000}{description:❪<:config:791453239723687997>❫ \`$getServerVar[prefixo]setCanalSaida\`
   Canal de logs para membros que sairam do servidor.
   
   ❪<:pergunta:791138058652745729>❫ **Como usar?**  \`$getServerVar[prefixo]setCanalSaida <canal>\`
   ❪<:report:791459643401830440>❫ **Exemplos**
   \`$getServerVar[prefixo]setCanalSaida\` <#$channelID>
   ❪<:estrela:791869073084252170>❫ **Permissões**
   ❪<:usuario:791128159280955422>❫ Você precisa ter permissão para \`Gerenciar servidor\` para conseguir executar esse comando.
   ❪<:configurar:791138745906233404>❫ Eu não preciso de nenhuma permissão para conseguir executar esse comando.
   ❪<:pergunta:791138058652745729>❫ **Sinônimos**
   \`setChannelBye\`, \`setChannelLeave\`}]
`
})   