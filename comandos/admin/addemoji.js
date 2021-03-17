module.exports = ({
  name: "addemoji",
  aliases: ['ademoji'],
  code: `
$color[ff0000]
$title[<:config:791453239723687997> AddEmoji | Sucesso!]
$image[$message[1]]
$description[<:estrela:791869073084252170> **|** Emoji: $message[1]]
$addEmoji[$message[1];$message[2];no]
$deletecommand
$suppressErrors[{title:Erro}{color: ff0000}{description: 🚫 **Houve um erro ao adicionar o emoji neste servidor, verifique se há espaço! ou verifique a ortografia.**}]
$argsCheck[2;{color:ff0000}{title:<:report:791459643401830440> **Informações - Addemoji**}{description:**(**🏓**)** \`s.addemoji\`
Adicione um emoji ao servidor.

❪<:pergunta:791138058652745729>❫ **Como usar?**  \`s.addemoji <link> <nome>\`
❪<:mensagem:791136061416800286>❫ **Exemplos**
\`s.addemoji\` \`link\` \`nome\`
❪<:estrela:791869073084252170>❫ **Permissões**
❪<:usuario:791128159280955422>❫ Você precisa ter permissão para \`Gerênciar Emojis\`, para conseguir executar esse comando.
❪<:configurar:791138745906233404>❫ Eu preciso de permissão para \`Gerênciar Emojis\`, para conseguir executar o comando.
❪<:pergunta:791138058652745729>❫ **Sinônimos**
\`ademoji\`}]
$onlyPerms[admin;{title: <:nao:791442909937139753> Error}{description: <:report:791459643401830440> <@$authorID> Você não tem permissão para usar este comando!}{color: ff0000}]
`
})