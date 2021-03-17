module.exports = ({
  name: "avatar",
  code: `
$color[RANDOM]
$title[:frame_photo: Avatar de $username[$mentioned[1;yes]]]
$description[Clique [aqui\\]($userAvatar[$mentioned[1;yes]]) Para baixar o avatar]
$image[$userAvatar[$mentioned[1;yes]]]
`
})