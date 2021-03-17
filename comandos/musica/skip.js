module.exports = ({
    name: "skip",
    code: `
   $description[🎵 $skipSong Você pulou **$songInfo[title]**]
   $onlyIf[$voiceID!=;Você Precisa estar em uma call!]
   $suppressErrors[{description: :x: Foi mal, mas no momento não há nada tocando no servidor :P}{color: RED}]
   
   `
   });