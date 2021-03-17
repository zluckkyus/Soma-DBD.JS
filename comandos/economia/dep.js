module.exports = ({
  name: "depositar",
  aliases: ['dep'],
  code: `
$onlyIf[$isNumber[$noMentionMessage]==true;{color: ff0000}{title: <:report:791459643401830440> Deposito}{description: ❪<:mensagem:791136061416800286>❫ Exemplos\n\`s.depositar <valor>\`\n\n❪<:pergunta:791138058652745729>❫ Sinônimos / Aliases\n\`depositar, dep\`}]
$author[Deposito;$authorAvatar]
$color[FF0000]
$description[**(<a:nubank:796821935736487976>)** **|** Você fez um deposito de: \`$noMentionMessage\`]
$thumbnail[$authorAvatar]
$setUserVar[banco;$sum[$getUserVar[banco];$noMentionMessage]]
$setUserVar[coins;$sub[$getUserVar[coins];$noMentionMessage]]
$onlyIf[$getUserVar[coins]>=$noMentionMessage;{color: ff0000}{title: <:report:791459643401830440> Deposito}{description:
**(:x:)** \`Você não possui moedas suficientes!\`\n\n❪<:mensagem:791136061416800286>❫ Exemplos\n\`s.depositar <valor>\`\n\n❪<:pergunta:791138058652745729>❫ Sinônimos / Aliases\n\`depositar, dep\`}]
$argsCheck[>1;:x: Por favor coloque a quantia para sacar!]
$suppressErrors[{color: ff0000}{title: <:report:791459643401830440> Deposito}{description: ❪<:mensagem:791136061416800286>❫ Exemplos\n\`s.depositar <valor>\`\n\n❪<:pergunta:791138058652745729>❫ Sinônimos / Aliases\n\`depositar, dep\`}]
$onlyIf[$replaceText[$noMentionMessage[1];all;$getUserVar[coins;$authorID];1]>=1;**(<a:dinheiro:792843307305926706>)** **|** Você não pode depoistar valor **negativo.**]
`
})