module.exports = ({
    name: "unlock",
    aliases: ['destrancar'],
    code: `
  $color[ff0000]
  $title[<:trancado:797225188072095744> Canal Destrancado]
  $description[<:trancado:797225188072095744>  Canal Destrancado com sucesso! Destrancado por <@$authorID>, para trancar utilize $getServerVar[prefixo]lock!]
  $footer[$serverName]
  $modifyChannelPerms[$channelID;+sendmessages;$guildID]
  $suppressErrors[{color:ff0000}{title:<:report:791459643401830440> **Informações - Lock**}{description:**(**<:emoji_36:791030913357840435>**)** \`s.mute\`
  Tranque um canal.
  
  ❪<:pergunta:791138058652745729>❫ **Como usar?**  \`s.lock\`
  
  ❪<:estrela:791869073084252170>❫ **Permissões**
  ❪<:usuario:791128159280955422>❫ Você precisa ter permissão \`Administrador\`, para conseguir executar esse comando.
  ❪<:configurar:791138745906233404>❫ Eu preciso de permissão \`Administrador\`, para conseguir executar o comando.
  ❪<:pergunta:791138058652745729>❫ **Sinônimos / Aliases**
  \`trancar\`}]
  
  $onlyPerms[admin;:{color:ff0000}{title:<:report:791459643401830440> **Informações - Unlock**}{description:**(**<:emoji_36:791030913357840435>**)** \`s.unlock\`
  Destranque um canal.
  
  ❪<:pergunta:791138058652745729>❫ **Como usar?**  \`s.lock\`
  
  ❪<:estrela:791869073084252170>❫ **Permissões**
  ❪<:usuario:791128159280955422>❫ Você precisa ter permissão \`Administrador\`, para conseguir executar esse comando.
  ❪<:configurar:791138745906233404>❫ Eu preciso de permissão \`Administrador\`, para conseguir executar o comando.
  ❪<:pergunta:791138058652745729>❫ **Sinônimos / Aliases**
  \`destrancar\`}]
  `
  })