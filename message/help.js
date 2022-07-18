const fs = require("fs");

let setting = JSON.parse(fs.readFileSync('./config.json'))

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

exports.allMenu = (ucapanWaktu, pushname, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isOwner, isPremium, sender, prefix) => {
    return`${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'}

*Hitung Mundur HUT RI*
${mundur}

*STATISTICS*
 • Upload : ${upload}
 • Downloads : ${download}

*BOT INFO*
 • Creator : ${ownerName}
 • Bot Name : ${botName}
 • Time : ${jam}
 • Date : ${tanggal}
 • Runtime :
 ${runtime(process.uptime())}

*USER INFO*
 • Name : ${pushname !== undefined ? pushname : '-'}
 • Api    : wa.me/${sender.split('@')[0]}
 • Status : ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Gratisan'}
${readmore}
*MAIN MENU*
 • ${prefix}menu
 • ${prefix}infobot
 • ${prefix}donate
 • ${prefix}owner
 • ${prefix}cekdrive
 • ${prefix}cekbandwidth
 • ${prefix}cekpremium
 • ${prefix}sewabot
 • ${prefix}listpremium
 • ${prefix}listsewa
 • ${prefix}speed
 • ${prefix}runtime
 • ${prefix}listbahasa

*CONVERTER/TOOLS*
 • ${prefix}sticker
 • ${prefix}stickerwm
 • ${prefix}smeme
 • ${prefix}toimg
 • ${prefix}tovideo
 • ${prefix}tomp3
 • ${prefix}ttp
 • ${prefix}attp
 • ${prefix}emojimix
 • ${prefix}nulis
 • ${prefix}spamcall
 • ${prefix}say
 • ${prefix}translate

*STORE MENU*
 • proses
 • done
 • ${prefix}list
 • ${prefix}addlist
 • ${prefix}dellist
 • ${prefix}update
 • ${prefix}jeda
 • ${prefix}tambah
 • ${prefix}kurang
 • ${prefix}kali
 • ${prefix}bagi

*GROUP MENU*
 • ${prefix}afk
 • ${prefix}welcome
 • ${prefix}left
 • ${prefix}setwelcome
 • ${prefix}changewelcome
 • ${prefix}delsetwelcome
 • ${prefix}setleft
 • ${prefix}changeleft
 • ${prefix}delsetleft
 • ${prefix}linkgc
 • ${prefix}setppgc
 • ${prefix}setnamegc
 • ${prefix}setdesc
 • ${prefix}antilink
 • ${prefix}antiwame
 • ${prefix}open
 • ${prefix}close
 • ${prefix}add
 • ${prefix}kick
 • ${prefix}promote
 • ${prefix}demote
 • ${prefix}revoke
 • ${prefix}hidetag
 • ${prefix}checksewa

*BAILEYS*
 • ${prefix}fitnah
 • ${prefix}getquoted
 • ${prefix}fakehidetag
 • ${prefix}react
 • ${prefix}setcmd
 • ${prefix}delcmd

*OWNERS MENU*
 • > evalcode
 • x evalcode-2
 • $ executor
 • ${prefix}exif
 • ${prefix}join
 • ${prefix}left
 • ${prefix}self
 • ${prefix}public
 • ${prefix}setprefix
 • ${prefix}setppbot
 • ${prefix}broadcast
 • ${prefix}bcsewa
 • ${prefix}addpremium
 • ${prefix}delpremium
 • ${prefix}addsewa
 • ${prefix}delsewa`
}

exports.donate = (pushname, ownerNumber) => {
    return`\t\t\t\t*💰「 DONATE 」💰*

Hai ${pushname}👋
Klen bisa dukung Bot Dapp  biar Bot Dapp tetap up to date dengan kasih Jajan:
🏧 085156389121 (OVO/Dana/GoPay)

Berapapun donasi klen akan sangat berarti 👍

Makasih Adick²!

Contact person Owner:
wa.me/${ownerNumber.split("@")[0]} (Owner))`
}
