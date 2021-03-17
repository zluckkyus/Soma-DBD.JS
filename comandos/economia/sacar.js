module.exports = ({
  name: "sacar",
  aliases: ['with','withdraw'],
  code: `
$author[Saque;$authorAvatar]
$color[FF0000]
$description[**(<a:nubank:796821935736487976>)** **|** Você fez um Saque de: \`$noMentionMessage\`]
$thumbnail[$authorAvatar]
$onlyIf[$isNumber[$noMentionMessage]==true;{color: ff0000}{title: <:report:791459643401830440> Saque}{description: ❪<:mensagem:791136061416800286>❫ Exemplos\n\`s.sacar <valor>\`\n\n❪<:pergunta:791138058652745729>❫ Sinônimos / Aliases\n\`sacar, with, withdraw\`}]
$setUserVar[banco;$sub[$getUserVar[banco];$noMentionMessage]]
$setUserVar[coins;$sum[$getUserVar[coins];$noMentionMessage]]
$onlyIf[$getUserVar[banco]>=$noMentionMessage;{color: ff0000}{title: <:report:791459643401830440> Saque}{description:
**(:x:)** \`Você não possui moedas suficientes!\`\n\n❪<:mensagem:791136061416800286>❫ Exemplos\n\`s.sacar <valor>\`\n\n❪<:pergunta:791138058652745729>❫ Sinônimos / Aliases\n\`sacar, with, withdraw\`}]
$argsCheck[>1;:x: Por favor coloque a quantia para sacar!]
$suppressErrors[{color: ff0000}{title: <:report:791459643401830440> Sacamento}{description: ❪<:mensagem:791136061416800286>❫ Exemplos\n\`s.sacar <valor>\`\n\n❪<:pergunta:791138058652745729>❫ Sinônimos / Aliases\n\`sacar, with, withdraw\`}]
$onlyIf[$replaceText[$noMentionMessage[1];all;$getUserVar[coins;$authorID];1]>=1;**(<a:dinheiro:792843307305926706>)** **|** Você não pode sacar valor **negativo.**]
`
})