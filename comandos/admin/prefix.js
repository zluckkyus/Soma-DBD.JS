module.exports = ({
  name: "prefixo",
  code: `
<:Verificado:797908384731889676> Novo prefixo setado com sucesso tente $getServerVar[prefixo]ajuda!
$setServerVar[prefixo;$message]
$argsCheck[1;:x: Está faltando argumento! Tente \`$getServerVar[prefixo]prefixo <prefix>\`]
$onlyPerms[admin;:x: Você não é administrador!]
`
})