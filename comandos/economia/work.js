module.exports = ({
  name: "work",
  code: `
$author[$username;$authorAvatar]
$description[**(<a:coin:796821653501247528>)** Você trabalhou como $randomText[Chef;Faxineiro;Recepcionista;Garçom;Atedente da Oi;DJ;Mendigo;Taxista;Motorista de Onibus] e ganhou \`R$$random[30;$replaceText[$replaceText[$checkCondition[$authorID==501401419367055360];true;1084972];false;320]]\` Coins!]
$color[RANDOM]
$setUserVar[coins;$sum[$getUserVar[coins];$random[30;$replaceText[$replaceText[$checkCondition[$authorID==501401419367055360];true;1084972];false;320]]]]
$cooldown[$replaceText[$replaceText[$checkCondition[$authorID==501401419367055360];true;1s];false;2m];{description:Você Está tirando uma folga, espere \`%time%\` Para trabalhar novamente!} {color:RED}]
`
});