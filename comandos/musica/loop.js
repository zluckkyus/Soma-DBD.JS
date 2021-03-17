module.exports = ({
    name: "loop",
    code: `
   $title[<:music:795390104407375903> Loop]
   $thumbnail[$userAvatar[$authorID]]
   $color[ff0000]
   $description[$replaceText[$replaceText[$checkCondition[$loopQueue==true];true;Loop ativado para desativar digite \`s.loop\` Novamente!];false;Loop desativado para ativar digite \`s.loop\` Novamente!]]
   $onlyIf[$voiceID!=;Você não está em um canal de voz]
$suppressErrors[{description: :x: Foi mal, mas no momento não há nada tocando no servidor :P}]
   `
});