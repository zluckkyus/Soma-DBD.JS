module.exports = ({
  name: "userinfo",
  aliases: ["usrinfo","user","infousr","usuario"],
  code: `
$color[ff0000]
$thumbnail[$userAvatar[$mentioned[1;yes]]]
$author[Perfil de $username[$mentioned[1;yes]];$userAvatar[$mentioned[1;yes]]]
$addField[<:usuario:791128159280955422> Nome de Usuario:; $userTag[$mentioned[1;yes]]]
$addField[<:usuario:791128159280955422> ID:;$mentioned[1;yes]]
$addField[<:usuario:791128159280955422> Data de Criação:;$creationDate[$mentioned[1;yes];time]]
$addField[<a:nubank:796821935736487976> Saldo:; Coins: $getUserVar[coins;$mentioned[1;yes]]
Banco: $getUserVar[banco;$mentioned[1;yes]]]
$addField[⭐ Entrou há:;$memberJoinedDate[$mentioned[1;yes];time]]
$addField[<:role:797550471912357960> Cargos:; $userRoles[$mentioned[1;yes]]]
$addField[<:staff:797551066236715018> Permissões:; $userPerms[$mentioned[1;yes]]]
`
})