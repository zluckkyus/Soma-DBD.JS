module.exports = ({
   name: "trump",
 code: `
$onlyIf[$message!=;> **:x: Escreva Alguma Coisa!**]
$title[Trump]
$color[$random[111111;999999]]
$image[https://api.no-api-key.com/api/v2/trump?message=$replaceText[$message; ;+;-1]]
$botTyping
`
});