// by Team Tabrak Lurus
// Mau yang no enc?
// tawar menawar di sini saja
// https://chat.whatsapp.com/Bs2eptyeXtd9icSiYSYbO0
var _0x3824f6 = _0x236f;
(function (_0x817b8f, _0x405a9a) {
  var _0x6fd01c = _0x236f,
    _0x96b303 = _0x817b8f();
  while (!![]) {
    try {
      var _0x4d98b7 =
        -parseInt(_0x6fd01c(0x3f1)) / 0x1 +
        -parseInt(_0x6fd01c(0x2d5)) / 0x2 +
        (-parseInt(_0x6fd01c(0x1dd)) / 0x3) *
          (-parseInt(_0x6fd01c(0x4c7)) / 0x4) +
        (parseInt(_0x6fd01c(0x61d)) / 0x5) *
          (parseInt(_0x6fd01c(0x50d)) / 0x6) +
        (parseInt(_0x6fd01c(0x46c)) / 0x7) *
          (parseInt(_0x6fd01c(0x1b1)) / 0x8) +
        (-parseInt(_0x6fd01c(0x47b)) / 0x9) *
          (-parseInt(_0x6fd01c(0x413)) / 0xa) +
        (parseInt(_0x6fd01c(0x535)) / 0xb) *
          (-parseInt(_0x6fd01c(0x1aa)) / 0xc);
      if (_0x4d98b7 === _0x405a9a) break;
      else _0x96b303["push"](_0x96b303["shift"]());
    } catch (_0x46f595) {
      _0x96b303["push"](_0x96b303["shift"]());
    }
  }
})(_0x1b95, 0xe6250),
  require("../config");
const {
    BufferJSON,
    WA_DEFAULT_EPHEMERAL,
    generateWAMessageFromContent,
    proto,
    generateWAMessageContent,
    generateWAMessage,
    prepareWAMessageMedia,
    areJidsSameUser,
    getContentType,
    downloadContentFromMessage,
  } = require(_0x3824f6(0x51d)),
  baileys = require(_0x3824f6(0x51d)),
  fs = require("fs"),
  fse = require(_0x3824f6(0x457)),
  chalk = require(_0x3824f6(0x26b)),
  axios = require(_0x3824f6(0x616)),
  path = require(_0x3824f6(0x240)),
  ytdl = require(_0x3824f6(0x2b9)),
  yts = require(_0x3824f6(0x2f3)),
  bochil = require(_0x3824f6(0x1c2)),
  translate = require("translate-google"),
  { exec } = require("child_process"),
  util = require(_0x3824f6(0x587)),
  ms = require(_0x3824f6(0x349)),
  xa = require(_0x3824f6(0x4a9)),
  { rimraf } = require("rimraf"),
  ffmpeg = require(_0x3824f6(0x5e0)),
  Jimp = require(_0x3824f6(0x3cb)),
  kotz = require(_0x3824f6(0x387)),
  {
    isLimit,
    limitAdd,
    getLimit,
    giveLimit,
    addBalance,
    kurangBalance,
    getBalance,
    isGame,
    gameAdd,
    givegame,
    cekGLimit,
  } = require("../lib/limit"),
  {
    getBuffer,
    fetchText,
    getRandom,
    getGroupAdmins,
    runtime,
    sleep,
    makeid,
  } = require(_0x3824f6(0x21e)),
  { cmdadd } = require(_0x3824f6(0x563)),
  _prem = require("../lib/premium"),
  func = require("../lib/function.js"),
  { generate } = require(_0x3824f6(0x46e)),
  { recognize } = require(_0x3824f6(0x3d9)),
  { fetchJson } = require("../lib/fetcher.js"),
  { uploadImages } = require(_0x3824f6(0x495)),
  { webp2mp4File } = require(_0x3824f6(0x384)),
  { pinterest } = require(_0x3824f6(0x461)),
  ttl = require("../lib/index1.js"),
  { isTicTacToe, getPosTic } = require("../lib/tictactoe"),
  {
    addPlayGame,
    getJawabanGame,
    isPlayGame,
    cekWaktuGame,
    getGamePosi,
  } = require(_0x3824f6(0x358)),
  tictac = require(_0x3824f6(0x68c)),
  { jadibot } = require(_0x3824f6(0x2a9)),
  Exif = require(_0x3824f6(0x264)),
  exif = new Exif();
let listCmd = JSON["parse"](fs["readFileSync"]("./database/listcmd.json")),
  _cmd = JSON[_0x3824f6(0x62b)](fs[_0x3824f6(0x4a0)](_0x3824f6(0x2b5))),
  _cmdUser = JSON[_0x3824f6(0x62b)](fs[_0x3824f6(0x4a0)](_0x3824f6(0x5a3))),
  pendaftar = JSON[_0x3824f6(0x62b)](fs[_0x3824f6(0x4a0)](_0x3824f6(0x658))),
  premium = JSON["parse"](fs[_0x3824f6(0x4a0)]("./database/premium.json")),
  balance = JSON[_0x3824f6(0x62b)](
    fs[_0x3824f6(0x4a0)]("./database/balance.json")
  ),
  limit = JSON["parse"](fs["readFileSync"](_0x3824f6(0x351))),
  listbot = JSON["parse"](fs[_0x3824f6(0x4a0)](_0x3824f6(0x26d))),
  glimit = JSON[_0x3824f6(0x62b)](fs[_0x3824f6(0x4a0)](_0x3824f6(0x4aa)));
const hitCmd = JSON["parse"](fs[_0x3824f6(0x4a0)](_0x3824f6(0x46b)));
let antilink = JSON[_0x3824f6(0x62b)](fs[_0x3824f6(0x4a0)](_0x3824f6(0x1fa)));
global[_0x3824f6(0x363)] = {};
function _0x236f(_0x3b7d65, _0x69335b) {
  var _0x1b950e = _0x1b95();
  return (
    (_0x236f = function (_0x236fe8, _0x85610d) {
      _0x236fe8 = _0x236fe8 - 0x1a0;
      var _0x241721 = _0x1b950e[_0x236fe8];
      return _0x241721;
    }),
    _0x236f(_0x3b7d65, _0x69335b)
  );
}
let tictactoe = [],
  tebakgambar = [],
  akinator = {};
function _0x1b95() {
  var _0xcae139 = [
    "Tebak\x20Gambar",
    "tovid",
    "sound69",
    "loli",
    "./HostMedia/randompics/boneka.json",
    "Pembeliaan\x20limit\x20sebanyak\x20",
    "string",
    "fluent-ffmpeg",
    "mediafire",
    "days",
    "shinka\x20\x0a│•\x20",
    "sound128\x0a│•\x20",
    "bcuser",
    "Don\x20ga\x20Banh",
    "link\x20invalid",
    "kpop",
    "thumbnail",
    "exec",
    "now",
    "https://youtube.com/playlist?list=RDwjWmfnvIrDw&playnext=1&si=MgY1RAkwmw43y80B",
    "clearsampah",
    "sound42\x0a│•\x20",
    "writeFileSync",
    "Pilih\x20enable\x20atau\x20disable",
    "korean",
    "prefa",
    "yulibocil",
    "sound65\x0a│•\x20",
    "addprem",
    "videos",
    "groupUpdateSubject",
    "6281384447735@s.whatsapp.net",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chitoge.json",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cecan.json",
    "icecold\x0a│•\x20",
    "Example\x20:\x20",
    "\x20*text*",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallml.json",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikey.json",
    "_*Partner\x20Ditemukan!!*_",
    "\x0aBalance\x20:\x20$",
    "sound32\x0a│•\x20",
    "antiwork\x0a│•\x20",
    "image/jpeg",
    "thai\x0a│•\x20",
    "sound155\x0a│•\x20",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/femdom.json",
    "kagura\x20\x0a│•\x20",
    "_*Partner\x20meninggalkan\x20chat...*_",
    "Coba\x20lagi\x20tuan\x20link\x20tidak\x20terdeteksi,\x20atau\x20mungkin\x20link\x20expired",
    "\x20Broadcast🚨*_\x0a\x0a",
    "antilink",
    "sound109",
    "&img=",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gremory.json",
    "sound12",
    ".mp4",
    "sticker/",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hekel.json",
    "hinata\x20\x0a│•\x20",
    "self\x0a│•\x20",
    "axios",
    "\x20minutes,\x20",
    "sound6",
    "\x20untuk\x20bermain\x20TicTacToe\x0a\x0aKirim\x20(Y/N)\x20untuk\x20bermain\x0a\x0aHadiah\x20:\x20",
    "Message",
    "boruto\x20\x0a│•\x20",
    "yotsuba",
    "323500SNUowq",
    "sound88",
    "ulzzangboy",
    "Mega",
    "read",
    "sound6\x0a│•\x20",
    "stopjadibot\x0a│•\x20",
    "\x0a\x0aKamu\x20dapat\x20membeli\x20limit\x20dengan\x20",
    "owner",
    "\x20@tag\x2030d",
    "erza\x20\x0a│•\x20",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/deidara.json",
    "©\x20Team\x20Tabrak\x20Lurus",
    "blackpink2",
    "parse",
    "https://api.lolhuman.xyz/api/facebook?apikey=",
    "bts",
    "wikipedia",
    "waifu",
    "madara\x20\x0a│•\x20",
    "sound151\x0a│•\x20",
    "subject",
    "husbu\x0a│•\x20",
    "sound111\x0a│•\x20",
    "sound138",
    "./HostMedia/randompics/rose.json",
    "join",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikasa.json",
    "kayes",
    "sound126\x0a│•\x20",
    "Don",
    "sound44\x0a│•\x20",
    "itachi",
    "\x0aKEMIRIPAN:\x20",
    "Lanjut",
    "Team\x20Tabrak\x20Lurus",
    "filter",
    "ChatGPT\x20-\x20OpenAI",
    "keluar",
    "replace",
    "sound129\x0a│•\x20",
    "@s.whatsapp.net",
    "sound90",
    "split",
    "mp4",
    "ceklimit",
    "listjadibot",
    "isQuoted",
    "-vcodec",
    "programming",
    "sound104",
    "ttc",
    "broadcast\x0a│•\x20",
    "Text\x20To\x20Image\x20-\x20OpenAI",
    "delttc\x0a│•\x20",
    "sound9",
    "\x20-o\x20./",
    "tebakgambar\x0a│•\x20",
    "Udah\x20nonaktif",
    "./database/user.json",
    "animesearch\x0a╰────────────❍\x0a\x0a╭─✎「\x20*_-OPENAI\x20MENU-_*\x20」\x0a│•\x20",
    "buyglimit\x20untuk\x20membeli\x20game\x20limit",
    "sound119",
    "chinese\x0a│•\x20",
    "1\x20-\x20Tidak\x0a",
    "sound43",
    "itachi\x20\x0a│•\x20",
    "_\x0a│\x20_*Runtime:*_\x20_",
    "downloadContentFromMessage",
    "sound57",
    "&subject=",
    "Anda\x20tidak\x20bisa\x20menghapus\x20sesi\x20tictactoe,\x20karena\x20bukan\x20pemain!",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/waifu.json",
    "sound125\x0a│•\x20",
    "Tidak\x20ada\x20gambar",
    "\x0a\x0aTITLE:\x20",
    "Limit\x20game\x20kamu\x20sudah\x20habis",
    "sound86\x0a│•\x20",
    "gcname\x0a│•\x20",
    "\x20BENS\x20AYE",
    "sound38\x0a│•\x20",
    "mulai",
    "reso",
    "./HostMedia/randompics/wallml.json",
    "akira",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/exo.json",
    "deluxesilver",
    "thumb",
    "https://api.lolhuman.xyz/api/wait?apikey=",
    "sound137",
    "sound62",
    "rose",
    "_*Kamu\x20sedang\x20tidak\x20berada\x20di\x20dalam\x20anonymous\x20chat...*_",
    "minato",
    "2\x20-\x20Saya\x20Tidak\x20Tau\x0a",
    "\x0aEPISODE:\x20",
    "sound47",
    "62831311533003@s.whatsapp.net",
    "boneka\x0a│•\x20",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jiso.json",
    "wallnime\x0a│•\x20",
    "tejina\x20\x0a│•\x20",
    "sound156\x0a│•\x20",
    "https://hercai.onrender.com/v2/hercai?question=",
    "fromMe",
    "map",
    "mfdl",
    "sound121",
    "sound94",
    "sound27",
    "views",
    "../lib/tictac",
    "Tunggu\x20mint...",
    "husbu\x20\x0a│•\x20",
    "Jangan\x20menggunakan\x20-",
    "sound85\x0a│•\x20",
    "whatsapp.com",
    "sound101",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/loli.json",
    "help",
    "4\x20-\x20Mungkin\x20Tidak",
    "_*WHAT\x20ANIME\x20RESULT*_\x0a\x0aTITLE\x20ROMAJI:\x20",
    "Balas\x20hasil\x20pencarian\x20dari\x20",
    "webpmux\x20-set\x20exif\x20./sticker/data.exif\x20./",
    "Done\x20Bwang,\x20jangan\x20lupa\x20share\x20bot\x20Bot",
    "nopref",
    "\x0aLINK\x20DOWNLOAD:\x20",
    "DI\x20:",
    "sound110",
    "futureneon\x0a│•\x20",
    "hinata",
    "Hanya\x20ditemukan\x20",
    "kick\x0a│•\x20",
    "participants",
    "43745292rEZiuh",
    "&session=",
    "error",
    "sound148\x0a│•\x20",
    "undefined",
    "sound17",
    "sound68\x0a│•\x20",
    "4188792DYfINt",
    "*\x20urutan",
    "Only\x20Owner",
    "sound8",
    "advanceglow\x0a│•\x20",
    ".webp",
    "hacker",
    "tiktok\x0a│•\x20",
    "Masih\x20ada\x20game\x20yang\x20belum\x20diselesaikan",
    "sound113",
    "©\x20Tabrak\x20Lurus",
    "greenneon\x0a│•\x20",
    "bokeh",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nezuko.json",
    "selectedId",
    "\x0aVIDEO\x20URL:\x20",
    "title_romaji",
    "@bochilteam/scraper",
    "sound123\x0a│•\x20",
    "\x20./",
    "sound33\x0a│•\x20",
    "black",
    "status",
    "getPremiumPosition",
    "sound18\x0a│•\x20",
    "sound56\x0a│•\x20",
    "./HostMedia/randompics/ppcouple.json",
    "car",
    "sound83",
    "self",
    "sound32",
    "sound160",
    "sound99",
    "chiho",
    "sound15\x0a│•\x20",
    "state",
    "sound53",
    "sound148",
    "sound28",
    "asuna\x20\x0a│•\x20",
    "sound122",
    "sound143",
    "cancelakinator",
    "yellow",
    "2427dkoARz",
    "sound98",
    "pinterest\x0a│•\x20",
    "sound118\x0a│•\x20",
    "extendedTextMessage",
    "don\x20banh",
    "sound107\x0a│•\x20",
    "kakasih",
    "sound97\x0a│•\x20",
    "sound81\x0a│•\x20",
    "jidDecode",
    "getmusic\x0a│•\x20",
    "\x20untuk\x20mengubah\x20foto\x20profil\x20bot",
    "sound23",
    "audio/mp4",
    "_*Kamu\x20masih\x20berada\x20di\x20dalam\x20anonymous\x20chat,\x20menunggu\x20partner...*_",
    "pokemon",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/neko2.json",
    "https://telegra.ph/file/9493062a98291c1ec6608.jpg",
    "*Most\x20Command\x20Global*\x0a",
    "filetype",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/justina.json",
    "video",
    "DARI\x20:",
    "publik",
    "Sukses",
    "Masukan\x20nomor\x20yang\x20connect!!!",
    "enable",
    "sound130\x0a│•\x20",
    "./database/antilink.json",
    "broadcast",
    "futureneon",
    "sound64",
    "sendMessage",
    "Hasil\x20pencarian\x20dari\x20",
    "multi",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinomiya.json",
    "FN:",
    "message",
    "conversation",
    "sound93",
    "imageMessage",
    "sound24",
    "sound95\x0a│•\x20",
    "sound14",
    "sound158",
    "sound59",
    "holographic\x0a│•\x20",
    "sound45",
    "&url=",
    "sound73",
    "sound11\x0a│•\x20",
    "akira\x20\x0a│•\x20",
    "sound135\x0a│•\x20",
    "sound77\x0a│•\x20",
    "shinomiya\x20\x0a│•\x20",
    "./HostMedia/randompics/notnot.json",
    "\x0aJUDUL:\x20",
    "https://bot-BOT",
    "\x0aRESO:\x20",
    "server",
    "sound98\x0a│•\x20",
    "7️⃣",
    "Balance\x20Kamu\x20Tidak\x20Mencukupi\x20Untuk\x20Transfer\x20Sebesar\x20$",
    "antilink\x0a│•\x20",
    "../lib/myfunc",
    "Masukkan\x20Link\x20Group!",
    "groupParticipantsUpdate",
    "luxury",
    "nezuko\x20\x0a│•\x20",
    "kurumi",
    ",\x20dibawah\x20ini\x20adalah\x20menu\x20dari\x20Bot*_\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a╭────✎「\x20_*USER\x20INFO*_\x20」\x0a│\x20_*Name:*_\x20_",
    "profilepic",
    "sound46",
    "akiyama",
    "tourl\x0a│•\x20",
    "sound38",
    "*「\x20GROUP\x20LINK\x20DETECTOR\x20」*\x0a\x0aSepertinya\x20kamu\x20mengirimkan\x20link\x20grup,\x20maaf\x20kamu\x20akan\x20di\x20kick",
    "gamewallpaper",
    "Petunjuk\x20:\x20",
    "box3d\x0a│•\x20",
    "blackpink\x0a│•\x20",
    "sound53\x0a│•\x20",
    "sound37\x0a│•\x20",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kartun.json",
    "sound137\x0a│•\x20",
    "sound113\x0a│•\x20",
    "sound136",
    "shina\x20\x0a│•\x20",
    "elf\x0a│•\x20",
    "malay",
    "4️⃣",
    "kaori",
    "loli2",
    "nama",
    "ytsearch\x20dengan\x20teks\x20",
    "push",
    "sound41\x0a│•\x20",
    "sound63",
    "path",
    "sound16\x0a│•\x20",
    "./database/premium.json",
    "delakinator\x0a╰───────────❍\x0a\x0a╭─✎「\x20_*-EDUCATION\x20MENU-*_\x20」\x0a│•\x20",
    "sound111",
    "nezuko",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/motor.json",
    "neko2",
    "sound82\x0a│•\x20",
    "_*🚨",
    "\x20hours,\x20",
    "ocr",
    "sound71\x0a│•\x20",
    "sender",
    "sound161\x0a╰────────────❍\x0a\x0a*V.1.1\x20||\x20@Whiskeysockets/Baileys*",
    "includes",
    "shizuka",
    "limit",
    "open",
    "sound129",
    "akinator\x0a│•\x20",
    "=>\x20",
    "sound140\x0a│•\x20",
    "sound63\x0a│•\x20",
    "sound158\x0a│•\x20",
    "sound19",
    "quotedMessage",
    "sound107",
    "notnot",
    "sound106",
    "sound9\x0a│•\x20",
    "_*Menunggu\x20Partner...*_",
    "\x5c$&",
    "Nominal\x20harus\x20berupa\x20angka!",
    "neko\x20\x0a│•\x20",
    "\x20ANNOUNCEMENT*_\x0a\x0a",
    "../lib/exif",
    "penantang",
    "\x0aDeskripsi\x20:\x20",
    "sound49",
    "bgBlue",
    "transfer",
    "kanna\x0a│•\x20",
    "chalk",
    "https://telegra.ph/file/21ba4ae05b63409ab8312.jpg",
    "./database/listbot.json",
    "sound51\x0a│•\x20",
    "next\x0a│•\x20",
    "sound43\x0a│•\x20",
    "./HostMedia/tiktokpics/indonesia.json",
    "mobilelegend\x0a╰────────────❍\x0a\x0a╭─✎「\x20*_-ANIME\x20MENU-_*」\x0a│•\x20",
    "doggo\x0a│•\x20",
    "art",
    "Kirim\x20perintah\x20",
    "\x20hour(s)\x20",
    "sound71",
    "cekprem\x0a│•\x20",
    "Keluar",
    "sound11",
    "\x20@628xxx\x202000",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/megumin.json",
    "pubg\x0a│•\x20",
    "sound25\x0a│•\x20",
    "sound23\x0a│•\x20",
    "Link\x20invalid!!",
    "tebakgambar*",
    "480p",
    "user",
    "find",
    "\x0aHadiah\x20:\x20",
    "aesthetic",
    "videoMessage",
    "\x20open\x20/\x20close",
    "sound145\x0a│•\x20",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/lisa.json",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kucing.json",
    "selectedButtonId",
    "sound89\x0a│•\x20",
    "hestia",
    "Nomor\x20ini\x20tidak\x20terdaftar\x20sebagai\x20bot!!",
    "getWidth",
    "content-type",
    "sound132\x0a│•\x20",
    "animesearch",
    "forEach",
    "count",
    "linkgrup",
    "kick",
    "sound17\x0a│•\x20",
    "elaina",
    "sound78",
    "sandsummer",
    "Berhasil\x20berubah\x20ke\x20mode\x20self",
    "endsWith",
    "./HostMedia/randompics/bike.json",
    "\x20second",
    "sound159\x0a│•\x20",
    "*HASIL\x20DITEMUKAN*\x0a\x0aNama\x20:\x20",
    "\x20query\x20--jumlah\x0aContoh\x20:\x0a",
    "https://api.lolhuman.xyz/api/brainly?apikey=",
    "sound70",
    "roboguru",
    "\x20seconds",
    "sound55",
    "natureleaves\x0a│•\x20",
    "../jadibot.js",
    "proto",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pokemon.json",
    "sound49\x0a│•\x20",
    "&apikey=",
    "exif",
    "_\x0a│\x20_*Credit\x20By:*_\x20_Team\x20Tabrak\x20Lurus_\x0a└───────────❍\x0a\x0a╭─✎「\x20_*-MAIN\x20MENU-*_\x20」\x0a│•\x20",
    "text2image\x20\x0a╰────────────❍\x0a\x0a╭─✎「\x20*_-RANDOM\x20MENU-_*\x20」\x0a│•\x20",
    "sound143\x0a│•\x20",
    "\x0a*▢\x20Channel\x20:*\x20",
    "bloodfrosted",
    "\x20link",
    "./database/command.json",
    "megumin\x0a│•\x20",
    "addOutputOptions",
    "roadwarning",
    "ytdl-core",
    "left\x0a│•\x20",
    "scale=\x27min(320,iw)\x27:min\x27(320,ih)\x27:force_original_aspect_ratio=decrease,fps=15,\x20pad=320:320:-1:-1:color=white@0.0,\x20split\x20[a][b];\x20[a]\x20palettegen=reserve_transparent=on:transparency_color=ffffff\x20[p];\x20[b][p]\x20paletteuse",
    "libwebp",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itori.json",
    "[EXEC]",
    "hidetag\x0a╰───────────❍\x0a\x0a╭─✎「\x20_*-OWNER\x20MENU-*_\x20」\x0a│•\x20",
    "ditantang",
    "korean\x0a│•\x20",
    "webp",
    "sound33",
    "unlinkSync",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/minato.json",
    "Tidak\x20bisa\x20kick\x20",
    "timestamp",
    "khusus\x20admin!!",
    "sound151",
    "isAnimated",
    "checkPremiumUser",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/erza.json",
    "sound2\x0a│•\x20",
    "wallnime",
    "sound",
    "sound149\x0a│•\x20",
    "sound134",
    "fireworksparkle\x0a│•\x20",
    "\x0a*▢\x20Duration\x20:*\x20",
    "./HostMedia/tiktokpics/vietnam.json",
    "1408210hfqwjx",
    "sound4\x0a│•\x20",
    "sound122\x0a│•\x20",
    "cloud",
    "sound136\x0a│•\x20",
    "mkdirSync",
    "exports",
    "\x20:\x20",
    "sound139",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chiho.json",
    "onepiece",
    "splice",
    "next",
    "quotesimage\x0a╰────────────❍\x0a\x0a╭─✎「\x20*_-RANDOM\x20MENU-_*\x20」\x0a│•\x20",
    "seconds",
    "Dari\x20Owner\x20aowkoakwoak",
    "random",
    "ppbot.jpeg",
    "tictactoe\x0a│•\x20",
    "gif",
    "match",
    "lolkey",
    "megumin\x20\x0a│•\x20",
    "sound150",
    "sound144",
    "sound73\x0a│•\x20",
    "sound64\x0a│•\x20",
    "sound105\x0a│•\x20",
    "Limit\x20kamu\x20sudah\x20habis\x20silahkan\x20kirim\x20",
    "sound152",
    "yt-search",
    "List\x20Prem\x0aJumlah\x20:\x20",
    "_Sukses\x20menghapus\x20session...",
    "toString",
    "BEGIN:VCARD\x0a",
    "documentMessage",
    "done\x20mint",
    "brainly",
    "sound132",
    "_\x0a│\x20_*Number:*_\x20_",
    "Sukses\x20menyetel\x20ulang\x20tautan\x20grup!\x0aTautan\x20baru:\x20https://chat.whatsapp.com/",
    "title_english",
    ".png",
    "WhyDepin",
    "shota\x0a│•\x20",
    "wallphone",
    "sound86",
    "values",
    "tovideo",
    "./HostMedia/randompics/blackpink.json",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/doraemon.json",
    "Sukses\x20kick\x20member",
    "./HostMedia/tiktokpics/random2.json",
    "Fitur\x20Tidak\x20Dapat\x20Digunakan\x20Untuk\x20Group!",
    "instagram\x0a│•\x20",
    "sound112",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pentol.json",
    "wallpaperml",
    "stringify",
    "fireworksparkle",
    "sound153\x0a│•\x20",
    ".leave",
    "ORG:;\x0a",
    "cogan\x0a│•\x20",
    "./HostMedia/randompics/kayes.json",
    "close",
    "\x0aLINK:\x20",
    "megumin",
    "IDR",
    "openai",
    "exif\x0a│•\x20",
    "Hmmmm",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallnime.json",
    "714468652888821",
    "ocr\x0a╰────────────❍\x0a\x0a╭─✎「\x20*_-DOWNLOAD/SEARCH\x20MENU-_*\x20」\x0a│•\x20",
    "sound141\x0a│•\x20",
    "fileSize",
    "sound69\x0a│•\x20",
    "./HostMedia/randompics/justina.json",
    "cosplay",
    "kagura",
    "END:VCARD",
    "exo",
    "waifu\x20\x0a│•\x20",
    "listjadibot\x0a╰───────────❍\x0a\x0a╭─✎「\x20_*-GAME\x20MENU-*_\x20」\x0a│•\x20",
    "sound27\x0a│•\x20",
    "\x20kepada\x20@",
    "https://youtube.com/watch?v=",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akira.json",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/keneki.json",
    "./trash",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jeni.json",
    ".mp3",
    "@g.us",
    "PERMANENT",
    "Gunakan\x20dengan\x20cara\x20",
    "gcname",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mobil.json",
    "ytdl\x0a│•\x20",
    "deidara\x20\x0a│•\x20",
    "Bug\x20Dep",
    "Ukuran\x20melebihi\x20batas\x20maksimal\x2010\x20MB\x0a\x0a*link\x20download*\x0a",
    "Teks?",
    "Kirim/balas\x20gambar\x20dengan\x20caption\x20",
    "metaldark\x0a│•\x20",
    "Owner\x20Only",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tejina.json",
    "sound112\x0a│•\x20",
    "quoted",
    "sound42",
    "summersand\x0a│•\x20",
    "sound147",
    "randomgirl\x0a│•\x20",
    "sound51",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaori.json",
    "left",
    "parse-ms",
    "then",
    "sound36\x0a│•\x20",
    "description",
    "step",
    "groupUpdateDescription",
    "waifu\x0a│•\x20",
    "horrorblood",
    "./database/limit.json",
    "sound161",
    "*ID\x20:*\x20@",
    "cosplayloli",
    "\x0aSisa\x20Game\x20Limit\x20:\x20",
    "wikipedia\x0a╰───────────❍\x0a\x0a╭─✎「\x20_*-GROUP\x20MENU-*_\x20」\x0a│•\x20",
    "vietnamese\x0a│•\x20",
    "../lib/game",
    "not_announcement",
    "sound90\x0a│•\x20",
    "Masih\x20ada\x20game\x20yg\x20blum\x20selesai",
    "link_dl",
    "disable",
    "caption",
    "delprem*\x20nomor",
    "stiker",
    "mediafire\x0a│•\x20",
    "groupSettingUpdate",
    "hit",
    "other",
    "akinator",
    "./HostMedia/randompics/aesthetic.json",
    "elaina\x20\x0a│•\x20",
    "\x20balance",
    "mentioned",
    "sound144\x0a│•\x20",
    "\x20cecan\x20atau\x20",
    "Kirim\x20gambar/vidio\x20dengan\x20caption\x20",
    "blackpink2\x0a│•\x20",
    "sound142\x0a│•\x20",
    "./HostMedia/tiktokpics/hijab.json",
    "setprefix\x0a│•\x20",
    "PESAN\x20:",
    "./HostMedia/tiktokpics/thailand.json",
    "groupAcceptInvite",
    "[EVAL]",
    "\x0aKANJI:\x20",
    "\x0aGENRE:\x20",
    "./HostMedia/tiktokpics/korea.json",
    "\x20Support\x20me",
    "notnot\x0a│•\x20",
    "cartoon",
    "sound119\x0a│•\x20",
    "bike",
    "nekonime\x20\x0a│•\x20",
    "cosplaysagiri\x20\x0a│•\x20",
    "sound130",
    "cyber",
    "\x0a\x0a_*DOWNLOAD\x20LINK:*_",
    "_*Wait...*_",
    "templateButtonReplyMessage",
    "../lib/convert",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/onepiece.json",
    "creator\x20saya",
    "kotz-api",
    "inori",
    "waUploadToServer",
    "\x20query\x20atau\x20",
    "inspect",
    "ceil",
    "sound59\x0a│•\x20",
    "Masukkan\x20isi\x20pesannya",
    "sound8\x0a│•\x20",
    "toxic",
    "*\x0a*▢\x20Judul\x20:*\x20",
    "Question:\x20",
    "tictactoe*\x20@tag",
    "rose\x0a│•\x20",
    "cat\x0a│•\x20",
    "sound35",
    "gremory\x20\x0a│•\x20",
    "\x0a*▢\x20ID\x20:*\x20",
    "getmusic",
    "sound56",
    "sound76",
    "stickerMessage",
    "&answer=",
    "ago",
    "kirim\x20gambar/reply\x20gambar",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/husbu.json",
    "isuzu\x20\x0a│•\x20",
    "sound14\x0a│•\x20",
    "whatmanga\x0a│•\x20",
    "sound40",
    "Mau\x20yang\x20berapa\x20hari?",
    "pin",
    "sound127\x0a│•\x20",
    "toxic\x0a│•\x20",
    "sound76\x0a│•\x20",
    "exo\x0a│•\x20",
    "setpp",
    "62831311533003",
    "answer",
    "chitoge\x20\x0a│•\x20",
    "sound10\x0a│•\x20",
    "_*WHAT\x20MANGA\x20RESULT*_\x0a\x0aTITLE:\x20",
    "\x20*url*\x0a",
    "buygamelimit",
    "\x20days,\x20",
    "Hanya\x20bisa\x20mengambil\x20hasil\x20dari\x20pesan\x20bot",
    "./HostMedia/randompics/wallhp.json",
    "getPremiumExpired",
    "sound121\x0a│•\x20",
    "itori",
    "urls",
    "sound127",
    "tiktoknowm",
    "sound48",
    "shota\x20\x0a│•\x20",
    "emptyDirSync",
    "available",
    "ulzangboy\x0a│•\x20",
    "length",
    "thunder",
    "hours",
    "indo\x0a│•\x20",
    "USD",
    "slice",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kurumi.json",
    "participant",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/bts.json",
    "sound117",
    "jimp",
    "sound29\x0a│•\x20",
    "pinterest",
    "./HostMedia/randompics/cat.json",
    "kurumi\x20\x0a│•\x20",
    "./database/akinator.json",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kotori.json",
    "sound87\x0a│•\x20",
    "Owner\x20only!!",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/naruto.json",
    "chat",
    "sound1\x0a│•\x20",
    "minutes",
    "0@s.whatsapp.net",
    "../lib/ocr.js",
    "msg",
    "jid",
    "sound12\x0a│•\x20",
    "sound93\x0a│•\x20",
    "sound75",
    "https://",
    "ytsearch\x0a│•\x20",
    "minion\x0a│•\x20",
    "test",
    "sound160\x0a│•\x20",
    "relayMessage",
    "rmdirSync",
    "buttonsResponseMessage",
    "sandsummer\x0a│•\x20",
    "Done\x20mint",
    "log",
    "kpop\x0a│•\x20",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cogan.json",
    "sound157\x0a│•\x20",
    "\x0a*▢\x20URL\x20:*\x20",
    "topbalance",
    "sound74",
    "sound91",
    "94306yMTiCE",
    "indexOf",
    "type",
    "*TEBAK\x20GAMBAR*\x0a\x0a",
    "sound34\x0a│•\x20",
    "Sad\x20amat\x20main\x20ama\x20diri\x20sendiri",
    "8ball\x0a│•\x20",
    "Limit\x20:\x20",
    "sound124\x0a│•\x20",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yotsuba.json",
    "mfire",
    "_\x0a_>\x20Duration\x20:\x20",
    "sound120\x0a│•\x20",
    "onWhatsApp",
    "strawberry\x0a│•\x20",
    "_*ANIME\x20SEARCH\x20RESULT*_\x0a\x0aTITLE:\x20",
    "\x0aSisa\x20Limit\x20:\x20",
    "buyglimit",
    "sound60",
    "start\x0a│•\x20",
    "sound41",
    "&query=",
    "cekpremium",
    "setprefix",
    "\x0aTITLE\x20ENGLISH:\x20",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ayuzawa.json",
    "linkgc",
    "audio/mpeg",
    "expired",
    "kayes\x0a│•\x20",
    "whatanime\x0a│•\x20",
    "instagram.com",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime2.json",
    "https://telegra.ph/file/a98be7c29caae2e13dbc9.jpg",
    "4610flwHlH",
    "limit\x20untuk\x20mengecek\x20limit",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/isuzu.json",
    "hidetag",
    ".stop",
    "audioMessage",
    "sound79",
    "sound84\x0a│•\x20",
    "transfer\x0a│•\x20",
    "awoo\x0a│•\x20",
    "uptime",
    "VERSION:3.0\x0a",
    "sound131",
    "sound40\x0a│•\x20",
    "sound141",
    "jawaban",
    "author",
    "\x20DASHBOARD*\x0a\x0a*HIT*\x0a•\x20GLOBAL\x20:\x20",
    "sound29",
    "Reply\x20hasil\x20dari\x20*",
    "./database/jadibot/",
    "Kirim\x20perintah\x20*",
    "from",
    "Lu\x20owner\x20bego!",
    "AUTO",
    "sound66\x0a│•\x20",
    "hasOwnProperty",
    "white",
    "all",
    "ttt",
    "sound115\x0a│•\x20",
    "sound55\x0a│•\x20",
    "listprem",
    "sound80\x0a│•\x20",
    "Tunggu\x20sebentar...",
    "_Contoh:\x20.text2image\x20anime\x20girl_",
    "_Hasil\x20pencarian\x20",
    "leave",
    "cekbalance",
    "neon\x0a│•\x20",
    "sound92\x0a│•\x20",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gamewallpaper.json",
    "whatanime",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/art.json",
    "sandengraved\x0a│•\x20",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hestia.json",
    "sound116\x0a│•\x20",
    "sound92",
    "Only\x20group\x20chat",
    "shota",
    "bot\x20-\x20MD",
    "groupInviteCode",
    "sound39",
    "Untung\x20bot\x20bukan\x20admin",
    "cogan",
    "https://api.lolhuman.xyz/api/akinator/answer?apikey=",
    "https://api.lolhuman.xyz/api/tiktokmusic?apikey=",
    "Sukses\x20transfer\x20balance\x20sebesar\x20$",
    "youtubedl",
    "mikasa\x20\x0a│•\x20",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/islamic.json",
    "toukachan",
    "sound5",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sagiri.json",
    "Sukses!",
    "_*📢",
    "tiktok",
    "tiktokaudio",
    "fs-extra",
    "generateWAMessageFromContent",
    ".mediafire",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pubg.json",
    "628871746203@s.whatsapp.net",
    "akiyama\x20\x0a│•\x20",
    "green",
    "question",
    "./HostMedia/randompics/doggo.json",
    "ai\x0a│•\x20",
    "../lib/pinterest",
    "Status:\x200",
    "car\x0a│•\x20",
    "bgWhite",
    "randomnime\x20\x0a│•\x20",
    "doraemon\x20\x0a│•\x20",
    "mikasa",
    "signature",
    "buylimit\x20dan\x20",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yulibocil.json",
    "./database/dataCmd.json",
    "21xshFAB",
    "onepiece\x20\x0a│•\x20",
    "../lib/openai.js",
    "inori\x20\x0a│•\x20",
    "CHATTING",
    "sound36",
    "cekprem",
    "text1917\x0a│•\x20",
    "sound78\x0a│•\x20",
    "sound72\x0a│•\x20",
    "https://api.lolhuman.xyz/api/textprome/",
    "\x20day(s)\x20",
    "Only\x20group",
    "Only\x20private\x20chat",
    "pushName",
    "6732WBYWka",
    "Berhasil\x20mengubah\x20prefix\x20ke\x20",
    "sound154",
    "sound37",
    "\x20Benar*\x0a\x0aJawaban\x20:\x20",
    "\x20atau\x20balas\x20gambar/vidio\x20yang\x20sudah\x20dikirim\x0aNote\x20:\x20Maximal\x20vidio\x2010\x20detik!",
    "instagram",
    "*YOUTUBE\x20SEARCH*\x0a\x20*Hasil\x20pencarian\x20dari\x20",
    "\x20minute,\x20",
    "ceklimit\x0a│•\x20",
    "sound139\x0a│•\x20",
    "otakudesu",
    "copyNForward",
    "Balance\x20kamu\x20tidak\x20mencukupi\x20untuk\x20pembelian\x20ini",
    "rize",
    "duration",
    "shinka",
    "sound31",
    "Stop",
    "estetic\x0a│•\x20",
    ",\x20foto\x20segera\x20dikirim",
    "announcement",
    "MIME_JPEG",
    "start",
    "check",
    "bokeh\x0a│•\x20",
    "../lib/uploadimage.js",
    "sound94\x0a│•\x20",
    "sc\x0a│•\x20",
    "Berhasil\x20menghapus\x20sesi\x20tictactoe\x20di\x20grup\x20ini",
    "toimage",
    "yuki\x20\x0a│•\x20",
    "sound159",
    "\x0a=>\x20Balance\x20:\x20$",
    "image",
    "sagiri",
    "sound2",
    "readFileSync",
    "video/mp4",
    "ryujin",
    "WAITING",
    "tebakgambar",
    "\x0aWaktu\x20:\x20",
    "https://api.lolhuman.xyz/api/wiki?apikey=",
    "sound125",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinka.json",
    "xfarr-api",
    "./database/glimit.json",
    "download",
    "sound156",
    "fromObject",
    "sound35\x0a│•\x20",
    "\x20*text*\x0a\x0a_Contoh_\x0a\x0a",
    "Harus\x20berupa\x20angka",
    "sound62\x0a│•\x20",
    "quotedMsg",
    "space",
    "yumeko\x0a│•\x20",
    "\x0a*▢\x20Upload\x20:*\x20",
    "sound133",
    "sound20",
    "Lu\x20siapa\x20bang?",
    "key",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shota.json",
    "\x20<no\x20urutan>",
    "?apikey=haikalgans",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sakura.json",
    "infinity",
    "sticker",
    "sound95",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ana.json",
    "Wet\x20ngabs",
    "remove",
    "&server=",
    "fbdl",
    "addprem*\x20@tag\x20waktu\x0a*",
    "8844cLzynl",
    "ytsearch*\x20dengan\x20perintah\x20*",
    "mode",
    "Anonymous\x20Chat",
    "result",
    "startsWith",
    "jadikan\x20bot\x20admin!",
    "toLowerCase",
    "deluxesilver\x0a│•\x20",
    "sound116",
    "Berhasil\x20berubah\x20ke\x20mode\x20public",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kagura.json",
    "stopjadibot",
    "w:profile:picture",
    "next\x0a_Next,\x20look\x20for\x20the\x20next\x20partner,\x20or\x20skip\x20a\x20partner_",
    "episodes",
    "9️⃣",
    "minato\x20\x0a│•\x20",
    "cosplaysagiri",
    "./HostMedia/tiktokpics/random.json",
    "lisa",
    "facebook\x0a│•\x20",
    "randomnime2\x20\x0a│•\x20",
    "https://api.lolhuman.xyz/api/ocr?apikey=",
    "\x20minute(s)",
    "mp3",
    "doraemon",
    "public",
    "text1917",
    "Contoh:\x20.animesearch\x20golden\x20time",
    "\x20second(s)\x0a\x0a",
    "./trash/",
    "sendPresenceUpdate",
    "jennie",
    "name",
    "indo",
    "sound44",
    "&grade=",
    "contextInfo",
    "randomboy",
    "floor",
    "Gagal\x20kick\x20member\x20dengan\x20alasan:\x20*Dia\x20yang\x20membuat\x20grup\x20ini*",
    "blackpink",
    "kaga",
    "videoId",
    "concat",
    "neko",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yumeko.json",
    "namabot",
    "picture",
    "./HostMedia/randompics/profile.json",
    "sound31\x0a│•\x20",
    "\x20>\x20Number\x20:\x20@",
    "shinobu\x0a│•\x20",
    "text2image",
    "sound85",
    "justina\x0a│•\x20",
    "https://api.lolhuman.xyz/api/akinator/back?apikey=",
    "TEL;type=CELL;type=VOICE;waid=",
    "sound1",
    "gremory",
    "estetic",
    "sound22",
    "sound152\x0a│•\x20",
    "audio",
    "japanese",
    "sound131\x0a│•\x20",
    "Successfully\x20Activate\x20Antilink\x20In\x20This\x20Group",
    "dashboard\x0a╰───────────❍\x0a\x0a╭─✎「\x20_*-JADIBOT\x20NEW-*_\x20」\x0a│•\x20",
    "oWhatsApp",
    "156RoZTdZ",
    "mountain",
    "\x20query",
    "3\x20-\x20Mungkin\x0a",
    "similarity",
    ".next",
    "groupRevokeInvite",
    "sound155",
    "```",
    "cosplayloli\x20\x0a│•\x20",
    "_*Tunggu\x20sebentar...*_",
    "\x0aDURASI:\x20",
    "keneki",
    "buylimit*\x20jumlah\x20limit\x20yang\x20ingin\x20dibeli\x0a\x0aHarga\x201\x20limit\x20=\x20$150\x20balance",
    "kaori\x20\x0a│•\x20",
    "kanna",
    "@whiskeysockets/baileys",
    "extension",
    "_\x0a│\x20_*Author:*_\x20_",
    "couplepicture",
    "kotori",
    "link",
    "art\x0a│•\x20",
    "Masukkan\x20nomer\x20yang\x20valid/terdaftar\x20di\x20WhatsApp",
    "https://chat.whatsapp.com/Bs2eptyeXtd9icSiYSYbO0",
    "\x0aAnswer:\x20",
    "128kbps",
    "url",
    "sound70\x0a│•\x20",
    "Hanya\x20support\x20angka!\x20pilih\x20angka\x201\x20sampai\x2010\x0aContoh\x20:\x20",
    "leave\x0a_To\x20leave\x20the\x20anonymous\x20room_\x0a\x0a_*[NEXT]:*_\x20",
    "isBaileys",
    "sound67\x0a│•\x20",
    "newyearcard\x0a│•\x20",
    "wallpaperphone",
    "minion",
    "Sukses\x20Menutup\x20Group",
    "\x20berhasil\x0a\x0aSisa\x20Balance\x20:\x20$",
    "text",
    "vietnamese",
    "11KgjxMO",
    "Sukses\x20Membuka\x20Group",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mountain.json",
    "addakses\x0a│•\x20",
    "https://api.lolhuman.xyz/api/instagram?apikey=",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/glasses.json",
    "Urutan\x20Hasil\x20*",
    "8️⃣",
    "title_native",
    "ytsearch",
    "sound52",
    "buyglimit*\x20jumlah\x20game\x20limit\x20yang\x20ingin\x20dibeli\x0a\x0aHarga\x201\x20game\x20limit\x20=\x20$150\x20balance\x0aPajak\x20$1\x20/\x20$10",
    "/v/t62.7118-24/30987623_320394093578641_3348511406084858913_n.enc?ccb=11-4&oh=01_AVwRvNEF0na_IL-_iakYz-qMrR9dt1Be_pC3WcYMnKT3UQ&oe=62B1A809",
    "emilia",
    "getvideo",
    "newyearcard",
    "audioonly",
    "catch",
    "balance,\x20untuk\x20mengecek\x20Balance\x20mu!",
    "sort",
    "greenneon",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nekonime.json",
    "play",
    "matchAll",
    "./HostMedia/randompics/cosplay.json",
    "sound66",
    "delprem*\x20@tag\x0a*",
    "bts\x0a│•\x20",
    "_*Kamu\x20tidak\x20sedang\x20berada\x20di\x20anonymous\x20chat..*_",
    "Contoh:\x20.addakses\x2062xxxx",
    "ERROR:\x20kesalahan\x20url",
    "bloodfrosted\x0a│•\x20",
    "gecg\x0a│•\x20",
    "sound157",
    "chiho\x20\x0a│•\x20",
    "./HostMedia/tiktokpics/malaysia.json",
    "jadibot",
    "emilia\x20\x0a│•\x20",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kpop.json",
    "5️⃣",
    "application/pdf",
    "sound68",
    "sound84",
    "sandwriting\x0a│•\x20",
    "sound124",
    "awoo",
    "../lib/totalcmd",
    "thai",
    "sound10",
    "Example:\x20",
    "chts",
    "neon",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/eba.json",
    "naruto\x20\x0a│•\x20",
    "sandwriting",
    "sound54",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/miku.json",
    "getmusik",
    "&signature=",
    "Private\x20Chat",
    "neonlight",
    "sound140",
    "setdesc\x0a│•\x20",
    "\x20})()",
    "size",
    "isuzu",
    "ana",
    "Contoh:\x20.brainly\x20kali\x20kurang\x20tambah",
    "sound7\x0a│•\x20",
    "sandengraved",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kakasih.json",
    "sound75\x0a│•\x20",
    "Only\x20admin",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplayloli.json",
    "expiredCheck",
    "randomnime",
    "sound57\x0a│•\x20",
    "ytsearch*\x20Hanya\x20Sampai\x20*",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yuki.json",
    "bot",
    "application/",
    "sound54\x0a│•\x20",
    "util",
    "sound120",
    "Link\x20invalid",
    "format",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shizuka.json",
    "getHeight",
    "sound138\x0a│•\x20",
    "https://api.lolhuman.xyz/api/random/",
    "sound19\x0a│•\x20",
    "&step=",
    "sound153",
    "_\x0a_>\x20URL\x20Video\x20:\x20",
    "end",
    "prem",
    "sound103\x0a│•\x20",
    "tsunade",
    "quotesimage",
    "audio/mp3",
    "khusus\x20group",
    "keneki\x20\x0a│•\x20",
    "?text=",
    "sound52\x0a│•\x20",
    "Masukkan\x20prefix\x0aOptions\x20:\x0a=>\x20multi\x0a=>\x20nopref",
    "sound21",
    "sound80",
    "tejina",
    "pokemon\x20\x0a│•\x20",
    "anonymous",
    "./database/commandUser.json",
    "\x20balance\x0a\x0aIngin\x20bermain\x20lagi?\x20ketik\x20*",
    "tourl",
    "Tidak\x20bisa\x20bermain\x20dengan\x20bot!",
    "sound26",
    "sound114\x0a│•\x20",
    "\x20day,\x20",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaga.json",
    "sticker\x0a│•\x20",
    "kaga\x20\x0a│•\x20",
    "cosplay\x0a│•\x20",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime.json",
    "getBufferAsync",
    "Unlimited",
    "sound74\x0a│•\x20",
    "elaina\x0a│•\x20",
    "./src/dep.jpg",
    "feed\x0a╰────────────❍\x0a\x0a╭─✎「\x20*_-TEXT\x20PRO\x20ME-_*\x20」\x0a│•\x20",
    "mikey",
    "getvidio",
    "metaldark",
    "sound114",
    "deidara",
    "sleep",
    "remoteJid",
    "husbu",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cyber.json",
    "sound109\x0a│•\x20",
    "sound146",
    "addPremiumUser",
    "topbalance\x0a╰────────────❍\x0a\x0a╭─✎「\x20_*-ANONYMOUS\x20CHAT-*_\x20」\x0a│•\x20",
    "ayuzawa",
    "./HostMedia/randompics/kpop.json",
    "Penggunaan\x20:\x0a*",
    "asuna",
    "\x20cecan\x20--10",
    "cat",
    "resize",
    "10000",
    "rize\x20\x0a│•\x20",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/inori.json",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/satanic.json",
    "justina",
    "wnim.jpg",
    "sound88\x0a│•\x20",
    "sound142",
    "https://chat.whatsapp.com/",
    "title",
    "miku",
    "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/profil.json",
    "./HostMedia/randompics/antiwork.json",
    "sound82",
    "don",
    "keys",
  ];
  _0x1b95 = function () {
    return _0xcae139;
  };
  return _0x1b95();
}
const evalOwn = [
    "" + global["owner"],
    "628871746203",
    "6281384447735",
    _0x3824f6(0x3ac),
  ],
  evalOwns = [
    global[_0x3824f6(0x625)] + _0x3824f6(0x646),
    _0x3824f6(0x67e),
    _0x3824f6(0x45b),
    _0x3824f6(0x5f8),
  ];
var icon = fs[_0x3824f6(0x4a0)](_0x3824f6(0x5b3));
module[_0x3824f6(0x2db)] = async (_0x291436, _0x12e00d, _0x23b2d7) => {
  var _0x3d5088 = _0x3824f6;
  try {
    if (!_0x12e00d) return;
    if (_0x12e00d[_0x3d5088(0x52c)]) return;
    const _0x2c3f82 = JSON[_0x3d5088(0x30f)](_0x12e00d[_0x3d5088(0x203)]),
      _0xdd6e0f = _0x12e00d[_0x3d5088(0x4b9)][_0x3d5088(0x5bb)],
      _0x4a6735 =
        _0x12e00d[_0x3d5088(0x3f3)] === _0x3d5088(0x204) &&
        _0x12e00d[_0x3d5088(0x203)][_0x3d5088(0x204)]
          ? _0x12e00d[_0x3d5088(0x203)][_0x3d5088(0x204)]
          : _0x12e00d[_0x3d5088(0x3f3)] == _0x3d5088(0x206) &&
            _0x12e00d["message"][_0x3d5088(0x206)][_0x3d5088(0x35e)]
          ? _0x12e00d[_0x3d5088(0x203)][_0x3d5088(0x206)][_0x3d5088(0x35e)]
          : _0x12e00d[_0x3d5088(0x3f3)] == _0x3d5088(0x2f8) &&
            _0x12e00d["message"][_0x3d5088(0x2f8)][_0x3d5088(0x35e)]
          ? _0x12e00d[_0x3d5088(0x203)][_0x3d5088(0x2f8)][_0x3d5088(0x35e)]
          : _0x12e00d["type"] == _0x3d5088(0x287) &&
            _0x12e00d[_0x3d5088(0x203)][_0x3d5088(0x287)][_0x3d5088(0x35e)]
          ? _0x12e00d[_0x3d5088(0x203)]["videoMessage"][_0x3d5088(0x35e)]
          : _0x12e00d["type"] == "extendedTextMessage" &&
            _0x12e00d[_0x3d5088(0x203)][_0x3d5088(0x1e1)][_0x3d5088(0x533)]
          ? _0x12e00d["message"][_0x3d5088(0x1e1)][_0x3d5088(0x533)]
          : _0x12e00d[_0x3d5088(0x3f3)] == _0x3d5088(0x3e6) &&
            _0x12e00d[_0x3d5088(0x203)][_0x3d5088(0x3e6)]["selectedButtonId"]
          ? _0x12e00d[_0x3d5088(0x203)][_0x3d5088(0x3e6)][_0x3d5088(0x28c)]
          : _0x12e00d[_0x3d5088(0x3f3)] == _0x3d5088(0x383) &&
            _0x12e00d[_0x3d5088(0x203)][_0x3d5088(0x383)][_0x3d5088(0x1bf)]
          ? _0x12e00d[_0x3d5088(0x203)][_0x3d5088(0x383)]["selectedId"]
          : "";
    if (_0x291436[_0x3d5088(0x200)])
      var _0x4baec1 = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/["test"](
        _0x4a6735
      )
        ? _0x4a6735[_0x3d5088(0x2e9)](
            /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi
          )
        : "#";
    else
      _0x291436[_0x3d5088(0x1a1)]
        ? (_0x4baec1 = "")
        : (_0x4baec1 = _0x291436[_0x3d5088(0x5f2)]);
    const _0x42ae18 = _0x4a6735[_0x3d5088(0x648)]("\x20"),
      _0x36ed63 =
        _0x4a6735[_0x3d5088(0x4ce)]()[_0x3d5088(0x648)]("\x20")[0x0] || "",
      _0x439ed6 = _0x36ed63[_0x3d5088(0x4cc)](_0x4baec1),
      _0x389486 = _0x12e00d[_0x3d5088(0x64c)]
        ? _0x12e00d[_0x3d5088(0x341)]
        : _0x12e00d,
      _0x1fe3c5 = _0x4a6735[_0x3d5088(0x3c6)](
        _0x36ed63[_0x3d5088(0x3c1)] + 0x1,
        _0x4a6735[_0x3d5088(0x3c1)]
      ),
      _0x4c4adf = _0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1],
      _0x480dc7 =
        _0x291436[_0x3d5088(0x283)]["id"][_0x3d5088(0x648)](":")[0x0] +
        _0x3d5088(0x646),
      _0x1710ba = _0x12e00d[_0x3d5088(0x4b9)][_0x3d5088(0x5bb)]["endsWith"](
        _0x3d5088(0x332)
      ),
      _0xaa9e24 = _0x1710ba
        ? _0x12e00d[_0x3d5088(0x4b9)][_0x3d5088(0x3c8)]
          ? _0x12e00d["key"][_0x3d5088(0x3c8)]
          : _0x12e00d[_0x3d5088(0x3c8)]
        : _0x12e00d[_0x3d5088(0x4b9)]["remoteJid"],
      _0xbeeae5 =
        global[_0x3d5088(0x625)] == _0xaa9e24
          ? !![]
          : [global[_0x3d5088(0x625)] + _0x3d5088(0x646)][_0x3d5088(0x24f)](
              _0xaa9e24
            )
          ? !![]
          : ![],
      _0x599587 =
        evalOwn == _0xaa9e24
          ? !![]
          : evalOwns[_0x3d5088(0x24f)](_0xaa9e24)
          ? !![]
          : ![],
      _0x3d0863 = pendaftar[_0x3d5088(0x24f)](_0xaa9e24),
      _0x48ad87 = _0xbeeae5
        ? !![]
        : _prem[_0x3d5088(0x2cb)](_0xaa9e24, premium),
      _0x5bd9ce = _0x1710ba ? await _0x291436["groupMetadata"](_0xdd6e0f) : "",
      _0x22f8d1 = antilink["includes"](_0xdd6e0f) ? !![] : ![],
      _0x35c1d2 = _0x1710ba ? _0x5bd9ce["id"] : "",
      _0x376898 = _0x1710ba ? _0x5bd9ce[_0x3d5088(0x1a9)] : "",
      _0x188e5f = _0x1710ba ? getGroupAdmins(_0x376898) : "",
      _0x45d818 = _0x188e5f[_0x3d5088(0x24f)](_0x480dc7) || ![],
      _0x1be5b6 = _0x188e5f[_0x3d5088(0x24f)](_0xaa9e24);
    async function _0x5d976e() {
      var _0x1f529c = await fetchJson(
        "https://api.lolhuman.xyz/api/akinator/start?apikey=" + lolkey
      );
      return _0x1f529c;
    }
    async function _0x5d96eb(
      _0x439651,
      _0x1ac209,
      _0x4a2a62,
      _0xa94d55,
      _0x54c631,
      _0xf42c3c
    ) {
      var _0x27a25a = _0x3d5088,
        _0x28c534 = await fetchJson(
          _0x27a25a(0x44a) +
            lolkey +
            _0x27a25a(0x4c4) +
            _0x439651 +
            "&frontaddr=" +
            _0x1ac209 +
            "&session=" +
            _0x4a2a62 +
            _0x27a25a(0x56f) +
            _0xa94d55 +
            _0x27a25a(0x590) +
            _0x54c631 +
            "&answer=" +
            _0xf42c3c
        );
      return _0x28c534;
    }
    async function _0x3ab33f(
      _0x243f68,
      _0x3a061b,
      _0x14f27a,
      _0x596134,
      _0x1a2669,
      _0xa79377
    ) {
      var _0x414097 = _0x3d5088,
        _0x33ed8f = await fetchJson(
          _0x414097(0x500) +
            lolkey +
            _0x414097(0x4c4) +
            _0x243f68 +
            "&frontaddr=" +
            _0x3a061b +
            _0x414097(0x1ab) +
            _0x14f27a +
            _0x414097(0x56f) +
            _0x596134 +
            "&step=" +
            _0x1a2669 +
            _0x414097(0x39d) +
            _0xa79377
        );
      return _0x33ed8f;
    }
    if (_0x1710ba && _0x22f8d1 && !_0xbeeae5 && !_0x1be5b6 && _0x45d818) {
      if (_0x4a6735["match"](/(https:\/\/chat.whatsapp.com)/gi)) {
        if (!_0x45d818) return _0x1b3106(_0x3d5088(0x448));
        _0x1b3106(_0x3d5088(0x22a)),
          _0x291436["groupParticipantsUpdate"](
            _0xdd6e0f,
            [_0xaa9e24],
            _0x3d5088(0x4c3)
          );
      }
    }
    async function _0x1bcff0(_0x55645c, _0x2369b9, _0xf6816f) {
      var _0x4aa68e = _0x3d5088,
        _0x301420 = null,
        _0x5dcff8 = null;
      Object[_0x4aa68e(0x5d8)](_0xf6816f)[_0x4aa68e(0x294)]((_0x241655) => {
        var _0x480627 = _0x4aa68e;
        _0xf6816f[_0x241655][_0x480627(0x3db)] === _0x2369b9 &&
          (_0x301420 = _0x241655);
      }),
        _0x301420 === null &&
          (_0xf6816f[_0x4aa68e(0x23d)]({
            jid: _0x2369b9,
            db: [{ nama: _0x55645c, count: 0x0 }],
          }),
          fs[_0x4aa68e(0x5ef)](
            _0x4aa68e(0x5a3),
            JSON[_0x4aa68e(0x30f)](_0xf6816f, null, 0x2)
          ),
          Object[_0x4aa68e(0x5d8)](_0xf6816f)[_0x4aa68e(0x294)]((_0x2a888c) => {
            var _0x3c33ae = _0x4aa68e;
            _0xf6816f[_0x2a888c][_0x3c33ae(0x3db)] === _0x2369b9 &&
              (_0x301420 = _0x2a888c);
          })),
        _0x301420 !== null &&
          (Object[_0x4aa68e(0x5d8)](_0xf6816f[_0x301420]["db"])[
            _0x4aa68e(0x294)
          ]((_0x398e57) => {
            var _0x4b2b99 = _0x4aa68e;
            _0xf6816f[_0x301420]["db"][_0x398e57][_0x4b2b99(0x23b)] ===
              _0x55645c && (_0x5dcff8 = _0x398e57);
          }),
          _0x5dcff8 === null
            ? (_0xf6816f[_0x301420]["db"]["push"]({
                nama: _0x55645c,
                count: 0x1,
              }),
              fs[_0x4aa68e(0x5ef)](
                _0x4aa68e(0x5a3),
                JSON["stringify"](_0xf6816f, null, 0x2)
              ))
            : ((_0xf6816f[_0x301420]["db"][_0x5dcff8][_0x4aa68e(0x295)] += 0x1),
              fs[_0x4aa68e(0x5ef)](
                _0x4aa68e(0x5a3),
                JSON[_0x4aa68e(0x30f)](_0xf6816f, null, 0x2)
              )));
    }
    async function _0xd3b0bf(_0x4dee87, _0x52ff5d) {
      var _0x55e10c = _0x3d5088,
        _0xd60465 = null;
      return (
        Object[_0x55e10c(0x5d8)](_0x52ff5d)["forEach"]((_0x1826f2) => {
          var _0x6acc57 = _0x55e10c;
          _0x52ff5d[_0x1826f2][_0x6acc57(0x3db)] === _0x4dee87 &&
            (_0xd60465 = _0x1826f2);
        }),
        _0xd60465
      );
    }
    async function _0x2c9561(_0x394a40, _0x3a51e9, _0x524a9e) {
      var _0x21f271 = _0x3d5088;
      _0x1bcff0(_0x394a40, _0x3a51e9, _cmdUser);
      var _0x418745 = null;
      Object[_0x21f271(0x5d8)](_0x524a9e)[_0x21f271(0x294)]((_0x9f0185) => {
        _0x524a9e[_0x9f0185]["nama"] === _0x394a40 && (_0x418745 = _0x9f0185);
      }),
        _0x418745 === null
          ? (_0x524a9e[_0x21f271(0x23d)]({ nama: _0x394a40, count: 0x1 }),
            fs[_0x21f271(0x5ef)](
              _0x21f271(0x2b5),
              JSON[_0x21f271(0x30f)](_0x524a9e, null, 0x2)
            ))
          : ((_0x524a9e[_0x418745]["count"] += 0x1),
            fs[_0x21f271(0x5ef)](
              "./database/command.json",
              JSON["stringify"](_0x524a9e, null, 0x2)
            ));
    }
    const _0xdb9f53 =
        _0x12e00d[_0x3d5088(0x3f3)] == "extendedTextMessage" &&
        _0x12e00d[_0x3d5088(0x203)][_0x3d5088(0x1e1)][_0x3d5088(0x4ed)] != null
          ? _0x12e00d[_0x3d5088(0x203)][_0x3d5088(0x1e1)][_0x3d5088(0x4ed)][
              "mentionedJid"
            ]
          : [],
      _0x38d7bd =
        _0x12e00d[_0x3d5088(0x3f3)] == _0x3d5088(0x1e1) &&
        _0x12e00d[_0x3d5088(0x203)]["extendedTextMessage"][_0x3d5088(0x4ed)] !=
          null
          ? _0x12e00d[_0x3d5088(0x203)]["extendedTextMessage"][
              _0x3d5088(0x4ed)
            ]["participant"] || ""
          : "",
      _0x4862df =
        typeof _0xdb9f53 == _0x3d5088(0x5df) ? [_0xdb9f53] : _0xdb9f53;
    _0x4862df != undefined ? _0x4862df[_0x3d5088(0x23d)](_0x38d7bd) : [];
    const _0x5d1bb7 =
        _0x4862df != undefined
          ? _0x4862df[_0x3d5088(0x641)]((_0x189cc2) => _0x189cc2)
          : [],
      _0x16759c = async (_0x271c63) => {
        var _0x550506 = _0x3d5088;
        const _0x5a74c8 = await Jimp[_0x550506(0x621)](_0x271c63),
          _0x5661e2 =
            _0x5a74c8[_0x550506(0x290)]() > _0x5a74c8[_0x550506(0x58c)]()
              ? _0x5a74c8[_0x550506(0x5c8)](0x226, Jimp["AUTO"])
              : _0x5a74c8[_0x550506(0x5c8)](Jimp[_0x550506(0x42b)], 0x28a),
          _0x57a632 = await Jimp[_0x550506(0x621)](
            await _0x5661e2["getBufferAsync"](Jimp["MIME_JPEG"])
          );
        return {
          img: await _0x5661e2[_0x550506(0x5af)](Jimp[_0x550506(0x491)]),
        };
      },
      _0x2a393f = async function (
        _0x104b0b,
        _0x31dfc6,
        _0x1e0db3,
        _0x1b9ecd,
        _0x32c9af
      ) {
        var _0x4d13d5 = _0x3d5088;
        let _0xd76f1f = "",
          _0xc5ca79 = await axios["head"](_0x31dfc6);
        _0xd76f1f = _0xc5ca79["headers"][_0x4d13d5(0x291)];
        if (_0xd76f1f[_0x4d13d5(0x648)]("/")[0x1] === _0x4d13d5(0x2e8))
          return _0x291436[_0x4d13d5(0x1fe)](
            _0x104b0b,
            {
              video: await getBuffer(_0x31dfc6),
              caption: _0x1e0db3,
              gifPlayback: !![],
              mentions: _0x32c9af ? _0x32c9af : [],
              mimetype: _0x4d13d5(0x4a1),
            },
            { quoted: _0x1b9ecd }
          );
        let _0x47db83 = _0xd76f1f[_0x4d13d5(0x648)]("/")[0x0] + "Message";
        if (_0xd76f1f === _0x4d13d5(0x55d))
          return _0x291436[_0x4d13d5(0x1fe)](
            _0x1b9ecd[_0x4d13d5(0x3d5)],
            {
              document: await getBuffer(_0x31dfc6),
              mimetype: _0x4d13d5(0x55d),
              caption: _0x1e0db3,
              mentions: _0x32c9af ? _0x32c9af : [],
            },
            { quoted: _0x1b9ecd }
          );
        if (_0xd76f1f[_0x4d13d5(0x648)]("/")[0x0] === _0x4d13d5(0x49d))
          return _0x291436[_0x4d13d5(0x1fe)](
            _0x1b9ecd[_0x4d13d5(0x3d5)],
            {
              image: await getBuffer(_0x31dfc6),
              caption: _0x1e0db3,
              mentions: _0x32c9af ? _0x32c9af : [],
            },
            { quoted: _0x1b9ecd }
          );
        if (_0xd76f1f["split"]("/")[0x0] === _0x4d13d5(0x1f3))
          return _0x291436[_0x4d13d5(0x1fe)](
            _0x1b9ecd[_0x4d13d5(0x3d5)],
            {
              video: await getBuffer(_0x31dfc6),
              caption: _0x1e0db3,
              mentions: _0x32c9af ? _0x32c9af : [],
              mimetype: _0x4d13d5(0x4a1),
            },
            { quoted: _0x1b9ecd }
          );
        if (_0xd76f1f["split"]("/")[0x0] === _0x4d13d5(0x507))
          return _0x291436[_0x4d13d5(0x1fe)](
            _0x1b9ecd[_0x4d13d5(0x3d5)],
            {
              audio: await getBuffer(_0x31dfc6),
              caption: _0x1e0db3,
              mentions: _0x32c9af ? _0x32c9af : [],
              mimetype: _0x4d13d5(0x40c),
            },
            { quoted: _0x1b9ecd }
          );
      };
    async function _0x5856fd(_0x2f2845, _0x3d7b27) {
      var _0x2f07b6 = _0x3d5088;
      if (_0x2f2845 === "image") {
        var _0x2bf46c = await downloadContentFromMessage(
          _0x12e00d[_0x2f07b6(0x203)]["imageMessage"] ||
            _0x12e00d["message"][_0x2f07b6(0x1e1)]?.["contextInfo"][
              _0x2f07b6(0x25a)
            ][_0x2f07b6(0x206)],
          "image"
        );
        let _0x38257a = Buffer["from"]([]);
        for await (const _0x12de6a of _0x2bf46c) {
          _0x38257a = Buffer[_0x2f07b6(0x4f4)]([_0x38257a, _0x12de6a]);
        }
        return fs["writeFileSync"](_0x3d7b27, _0x38257a), _0x3d7b27;
      } else {
        if (_0x2f2845 === _0x2f07b6(0x1f3)) {
          var _0x2bf46c = await downloadContentFromMessage(
            _0x12e00d["message"][_0x2f07b6(0x287)] ||
              _0x12e00d[_0x2f07b6(0x203)][_0x2f07b6(0x1e1)]?.[_0x2f07b6(0x4ed)][
                _0x2f07b6(0x25a)
              ][_0x2f07b6(0x287)],
            _0x2f07b6(0x1f3)
          );
          let _0x5b0647 = Buffer["from"]([]);
          for await (const _0x51d73f of _0x2bf46c) {
            _0x5b0647 = Buffer[_0x2f07b6(0x4f4)]([_0x5b0647, _0x51d73f]);
          }
          return fs["writeFileSync"](_0x3d7b27, _0x5b0647), _0x3d7b27;
        } else {
          if (_0x2f2845 === "sticker") {
            var _0x2bf46c = await downloadContentFromMessage(
              _0x12e00d[_0x2f07b6(0x203)][_0x2f07b6(0x39c)] ||
                _0x12e00d[_0x2f07b6(0x203)][_0x2f07b6(0x1e1)]?.[
                  _0x2f07b6(0x4ed)
                ][_0x2f07b6(0x25a)][_0x2f07b6(0x39c)],
              _0x2f07b6(0x4bf)
            );
            let _0x53dc59 = Buffer["from"]([]);
            for await (const _0x99fd00 of _0x2bf46c) {
              _0x53dc59 = Buffer[_0x2f07b6(0x4f4)]([_0x53dc59, _0x99fd00]);
            }
            return fs[_0x2f07b6(0x5ef)](_0x3d7b27, _0x53dc59), _0x3d7b27;
          } else {
            if (_0x2f2845 === _0x2f07b6(0x507)) {
              var _0x2bf46c = await downloadContentFromMessage(
                _0x12e00d[_0x2f07b6(0x203)][_0x2f07b6(0x418)] ||
                  _0x12e00d[_0x2f07b6(0x203)][_0x2f07b6(0x1e1)]?.[
                    "contextInfo"
                  ][_0x2f07b6(0x25a)][_0x2f07b6(0x418)],
                "audio"
              );
              let _0x518b76 = Buffer[_0x2f07b6(0x429)]([]);
              for await (const _0x5af308 of _0x2bf46c) {
                _0x518b76 = Buffer[_0x2f07b6(0x4f4)]([_0x518b76, _0x5af308]);
              }
              return fs["writeFileSync"](_0x3d7b27, _0x518b76), _0x3d7b27;
            }
          }
        }
      }
    }
    greply = (_0x2c95f9, _0x1ccd63, _0x16402d) =>
      _0x291436["sendMessage"](
        _0x2c95f9,
        { text: _0x1ccd63 },
        { quoted: _0x16402d }
      );
    const _0x1b3106 = (_0x4a18e6) => {
      var _0xdb47e3 = _0x3d5088;
      _0x291436[_0xdb47e3(0x1fe)](
        _0xdd6e0f,
        { text: _0x4a18e6 },
        { quoted: _0x12e00d }
      );
    };
    decodeJid = (_0x42c8b7) => {
      var _0x4accb3 = _0x3d5088;
      if (!_0x42c8b7) return _0x42c8b7;
      if (/:\d+@/gi[_0x4accb3(0x3e2)](_0x42c8b7)) {
        let _0x236464 = baileys[_0x4accb3(0x1e7)](_0x42c8b7) || {};
        return (
          (_0x236464["user"] &&
            _0x236464[_0x4accb3(0x219)] &&
            _0x236464[_0x4accb3(0x283)] + "@" + _0x236464["server"]) ||
          _0x42c8b7
        );
      } else return _0x42c8b7;
    };
    const _0x32ba2d = (_0x3b429d, _0x5aa4e3) => {
        var _0x11c12a = _0x3d5088;
        _0x291436[_0x11c12a(0x1fe)](
          _0x3b429d,
          {
            text: _0x5aa4e3,
            contextInfo: {
              externalAdReply: {
                title: _0x11c12a(0x4ca),
                body: _0x11c12a(0x629),
                thumbnailUrl:
                  "https://telegra.ph/file/a98be7c29caae2e13dbc9.jpg",
                sourceUrl: "https://chat.whatsapp.com/Bs2eptyeXtd9icSiYSYbO0",
                mediaType: 0x1,
                showAdAttribution: !![],
                renderLargerThumbnail: !![],
              },
            },
          },
          { quoted: _0x12e00d }
        );
      },
      _0x30c930 = (_0x95e7a2, _0x17da86, _0x1e495d, _0x5806b6, _0xac5930) => {
        var _0x16a08e = _0x3d5088;
        let _0x188489 = _0x17da86["replace"](/[^0-9]/g, "");
        const _0x36636e =
          _0x16a08e(0x2f7) +
          _0x16a08e(0x41e) +
          _0x16a08e(0x202) +
          _0x1e495d +
          "\x0a" +
          _0x16a08e(0x313) +
          _0x16a08e(0x501) +
          _0x188489 +
          ":+" +
          _0x188489 +
          "\x0a" +
          _0x16a08e(0x326);
        return _0x291436[_0x16a08e(0x1fe)](
          _0xdd6e0f,
          {
            contacts: {
              displayName: _0x1e495d,
              contacts: [{ vcard: _0x36636e }],
            },
            mentions: _0xac5930 ? _0xac5930 : [],
          },
          { quoted: _0x12e00d }
        );
      },
      _0x244142 = (_0x503b6f, _0x343046) => {
        var _0x2efd67 = _0x3d5088;
        _0x291436[_0x2efd67(0x1fe)](_0x503b6f, { text: _0x343046 });
      },
      _0x4f4d15 = (_0x1b6a4f, _0x49e66a) => {
        _0x291436["sendMessage"](
          _0x1b6a4f,
          { text: _0x49e66a },
          { quoted: _0x12e00d }
        );
      },
      _0x5f1cc8 = (_0x3b0d37) => {
        var _0x12b815 = _0x3d5088;
        return _0x3b0d37[_0x12b815(0x2e9)](
          new RegExp(
            /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/,
            "gi"
          )
        );
      };
    function _0x16c881(_0x17317e) {
      var _0x57af00 = _0x3d5088;
      return JSON[_0x57af00(0x30f)](_0x17317e, null, 0x2);
    }
    function _0x5a45e1(_0x46bb08) {
      var _0x4d165e = _0x3d5088;
      return _0x4d165e(0x515) + _0x46bb08 + _0x4d165e(0x515);
    }
    function _0x1b4c8c(_0x3d6090, _0x251ae3 = null) {
      var _0x479f4d = _0x3d5088;
      return _0x251ae3 !== null
        ? ((_0x3d6090 = Math[_0x479f4d(0x38c)](_0x3d6090)),
          (_0x251ae3 = Math[_0x479f4d(0x4ef)](_0x251ae3)),
          Math[_0x479f4d(0x4ef)](
            Math[_0x479f4d(0x2e5)]() * (_0x251ae3 - _0x3d6090 + 0x1)
          ) + _0x3d6090)
        : Math[_0x479f4d(0x4ef)](Math[_0x479f4d(0x2e5)]() * _0x3d6090) + 0x1;
    }
    const _0x20e074 = (_0x3263d7) => {
      var _0x5db68e = _0x3d5088;
      return _0x3263d7[
        Math["floor"](Math[_0x5db68e(0x2e5)]() * _0x3263d7["length"])
      ];
    };
    function _0x357397(_0x1a7a3e, _0x1fceb2 = [], _0x59d8cb) {
      var _0x400442 = _0x3d5088;
      if (_0x59d8cb == null || _0x59d8cb == undefined || _0x59d8cb == ![]) {
        let _0x582c29 = _0x291436[_0x400442(0x1fe)](_0xdd6e0f, {
          text: _0x1a7a3e,
          mentions: _0x1fceb2,
        });
        return _0x582c29;
      } else {
        let _0x458c45 = _0x291436[_0x400442(0x1fe)](
          _0xdd6e0f,
          { text: _0x1a7a3e, mentions: _0x1fceb2 },
          { quoted: _0x12e00d }
        );
        return _0x458c45;
      }
    }
    function _0x276424(_0x2f5626) {
      var _0x55b274 = _0x3d5088;
      _0x2f5626 = Number(_0x2f5626);
      var _0x362721 = Math[_0x55b274(0x4ef)](_0x2f5626 / (0xe10 * 0x18)),
        _0x18791c = Math[_0x55b274(0x4ef)](
          (_0x2f5626 % (0xe10 * 0x18)) / 0xe10
        ),
        _0x37889e = Math[_0x55b274(0x4ef)]((_0x2f5626 % 0xe10) / 0x3c),
        _0x286cb1 = Math["floor"](_0x2f5626 % 0x3c),
        _0x2c0d01 =
          _0x362721 > 0x0
            ? _0x362721 +
              (_0x362721 == 0x1 ? _0x55b274(0x5a9) : _0x55b274(0x3b3))
            : "",
        _0x27f2c0 =
          _0x18791c > 0x0
            ? _0x18791c +
              (_0x18791c == 0x1 ? "\x20hour,\x20" : _0x55b274(0x24a))
            : "",
        _0x4557e1 =
          _0x37889e > 0x0
            ? _0x37889e +
              (_0x37889e == 0x1 ? _0x55b274(0x483) : _0x55b274(0x617))
            : "",
        _0x425cec =
          _0x286cb1 > 0x0
            ? _0x286cb1 +
              (_0x286cb1 == 0x1 ? _0x55b274(0x29f) : _0x55b274(0x2a6))
            : "";
      return _0x2c0d01 + _0x27f2c0 + _0x4557e1 + _0x425cec;
    }
    let _0x555e18 = {
      key: {
        fromMe: ![],
        participant: _0xdd6e0f,
        remoteJid: "status@broadcast",
        status: 0x2,
      },
      message: {
        imageMessage: {
          mimetype: _0x3d5088(0x604),
          caption: _0x3d5088(0x445),
          jpegThumbnail: fs[_0x3d5088(0x4a0)]("./src/dep.jpg"),
          forwardingScore: 0x244c,
          isForwarded: !![],
        },
      },
    };
    const _0x2217fc = {
      key: { fromMe: ![], participant: _0x3d5088(0x3d8), remoteJid: "" },
      message: {
        stickerMessage: {
          url: "https://mmg.whatsapp.net/d/f/AnffZCEiLJkOPQl73bGK5zD5-slVVHkFgmlLdBHEZf6P.enc",
          mimetype: "image/webp",
          height: 0x40,
          width: 0x40,
          directPath: _0x3d5088(0x541),
          fileLength: 0x5af3107a3fff,
          mediaKeyTimestamp: 0x28b0a,
          isAnimated: ![],
        },
      },
    };
    let _0x29ef8f = {
      key: { fromMe: ![], participant: _0x3d5088(0x3d8), ...{ remoteJid: "" } },
      message: {
        productMessage: {
          product: {
            productImage: {
              mimetype: _0x3d5088(0x604),
              jpegThumbnail: fs[_0x3d5088(0x4a0)](_0x3d5088(0x5b3)),
            },
            title: _0x3d5088(0x1bb),
            description: _0x12e00d[_0x3d5088(0x47a)],
            currencyCode: _0x3d5088(0x3c5),
            priceAmount1000: "0",
            retailerId: _0x3d5088(0x339),
            productImageCount: 0x1,
          },
          businessOwnerJid: _0x3d5088(0x3d8),
        },
      },
    };
    const _0x3a1013 = (_0x59c906, _0x1e2ef8) => {
        var _0x303c95 = _0x3d5088;
        _0x291436[_0x303c95(0x1fe)](
          _0x59c906,
          { text: _0x1e2ef8 },
          { quoted: _0x29ef8f }
        );
      },
      _0x2f3fda = (_0x55a0d3, _0x4d8300) => {
        var _0x2c0048 = _0x3d5088;
        _0x291436[_0x2c0048(0x1fe)](
          _0x55a0d3,
          { text: _0x4d8300 },
          { quoted: _0x2217fc }
        );
      };
    _0x439ed6 &&
      !_0x3d0863 &&
      (pendaftar["push"](_0xaa9e24),
      fs["writeFileSync"](
        _0x3d5088(0x658),
        JSON[_0x3d5088(0x30f)](pendaftar, null, 0x2)
      ));
    _prem[_0x3d5088(0x57f)](_0x291436, premium),
      setInterval(() => {
        var _0x29a7ad = _0x3d5088;
        fs[_0x29a7ad(0x5ef)](
          _0x29a7ad(0x3d0),
          JSON[_0x29a7ad(0x30f)](akinator, null, 0x2)
        );
      }, 0x1e * 0x3e8);
    if (
      !_0x1710ba &&
      akinator[_0x3d5088(0x42d)](_0xaa9e24[_0x3d5088(0x648)]("@")[0x0]) &&
      !_0x439ed6 &&
      ["0", "1", "2", "3", "4"]["includes"](_0x4a6735)
    ) {
      var {
          server: _0x4cc70d,
          frontaddr: _0x4a8f28,
          session: _0x2a20bd,
          signature: _0x4fa68b,
          question: _0xab27eb,
          step: _0x5b1a07,
        } = akinator[_0xaa9e24[_0x3d5088(0x648)]("@")[0x0]],
        _0x2dc1da = (
          await _0x5d96eb(
            _0x4cc70d,
            _0x4a8f28,
            _0x2a20bd,
            _0x4fa68b,
            _0x5b1a07,
            _0x4a6735
          )
        )[_0x3d5088(0x4cb)];
      if (_0x2dc1da["hasOwnProperty"]("name")) {
        var _0x4c65ce = await getBuffer(_0x2dc1da[_0x3d5088(0x49d)]),
          _0x1e9e5f =
            _0x3d5088(0x2a1) +
            _0x2dc1da[_0x3d5088(0x4e9)] +
            _0x3d5088(0x266) +
            _0x2dc1da[_0x3d5088(0x34c)];
        _0x291436[_0x3d5088(0x1fe)](
          _0xdd6e0f,
          { image: _0x4c65ce, caption: _0x1e9e5f },
          { quoted: _0x12e00d }
        )["then"]((_0x1f1708) => {
          var _0x2c6e89 = _0x3d5088;
          delete akinator[_0xaa9e24[_0x2c6e89(0x648)]("@")[0x0]];
        });
        return;
      }
      var _0x1f4b19 = _0x2dc1da[_0x3d5088(0x45e)],
        _0x2dfaf2 = _0x2dc1da[_0x3d5088(0x34d)],
        _0x538cc5 = _0x1f4b19 + "\x0a\x0a";
      (_0x538cc5 += "0\x20-\x20Ya\x0a"),
        (_0x538cc5 += _0x3d5088(0x65d)),
        (_0x538cc5 += "2\x20-\x20Tidak\x20Tahu\x0a"),
        (_0x538cc5 += _0x3d5088(0x510)),
        (_0x538cc5 += _0x3d5088(0x695)),
        _0x291436[_0x3d5088(0x1fe)](
          _0xdd6e0f,
          { text: _0x538cc5 },
          { quoted: _0x12e00d }
        )["then"]((_0x25ce36) => {
          var _0x62877 = _0x3d5088,
            _0x4e22ef = akinator[_0xaa9e24[_0x62877(0x648)]("@")[0x0]];
          (_0x4e22ef[_0x62877(0x45e)] = _0x1f4b19),
            (_0x4e22ef[_0x62877(0x34d)] = _0x2dfaf2),
            (akinator[_0xaa9e24[_0x62877(0x648)]("@")[0x0]] = _0x4e22ef);
        });
    }
    if (isTicTacToe(_0xdd6e0f, tictactoe))
      tictac(
        _0x4a6735,
        _0x4baec1,
        tictactoe,
        _0xdd6e0f,
        _0xaa9e24,
        _0x1b3106,
        _0x357397,
        addBalance,
        balance
      );
    cekWaktuGame(_0x291436, tebakgambar);
    if (isPlayGame(_0xdd6e0f, tebakgambar) && _0x3d0863) {
      if (
        _0x4a6735[_0x3d5088(0x4ce)]() == getJawabanGame(_0xdd6e0f, tebakgambar)
      ) {
        var _0x255a9c = _0x1b4c8c(0x64, 0x96);
        addBalance(_0xaa9e24, _0x255a9c, balance),
          _0x1b3106(
            "*Jawaban\x20" +
              _0x12e00d[_0x3d5088(0x47a)] +
              _0x3d5088(0x47f) +
              getJawabanGame(_0xdd6e0f, tebakgambar) +
              _0x3d5088(0x285) +
              _0x255a9c +
              _0x3d5088(0x5a4) +
              _0x4baec1 +
              _0x3d5088(0x281)
          ),
          tebakgambar[_0x3d5088(0x2e0)](
            getGamePosi(_0xdd6e0f, tebakgambar),
            0x1
          );
      }
    }
    _0x291436[_0x3d5088(0x4e7)](_0x3d5088(0x3bf), _0xdd6e0f),
      _0x291436["sendReceipt"](
        _0xdd6e0f,
        _0xaa9e24,
        [_0x12e00d["key"]["id"]],
        _0x3d5088(0x621)
      );
    if (_0x291436["mode"] === _0x3d5088(0x1ce)) {
      if (!_0xbeeae5) return;
    }
    if (
      _0x4a6735[_0x3d5088(0x4cc)](_0x3d5088(0x255)) &&
      _0xbeeae5 &&
      _0x599587
    ) {
      console[_0x3d5088(0x3e9)](
        chalk[_0x3d5088(0x45d)](_0x3d5088(0x374)),
        chalk[_0x3d5088(0x42e)](_0x3d5088(0x2e4))
      );
      const _0x3610bc = (_0x4e22a8) => {
        var _0x14e114 = _0x3d5088,
          _0x861648 = JSON[_0x14e114(0x30f)](_0x4e22a8, null, 0x2),
          _0x307154 = util["format"](_0x861648);
        return (
          _0x861648 == undefined &&
            (_0x307154 = util[_0x14e114(0x58a)](_0x4e22a8)),
          _0x1b3106(_0x307154)
        );
      };
      try {
        _0x1b3106(
          util[_0x3d5088(0x58a)](
            eval(
              ";(async\x20()\x20=>\x20{\x20" +
                _0x4a6735["slice"](0x2) +
                _0x3d5088(0x574)
            )
          )
        );
      } catch (_0x3ae2ca) {
        _0x1b3106(util["format"](_0x3ae2ca));
      }
    } else {
      if (_0x4a6735[_0x3d5088(0x4cc)]("$\x20") && _0x599587)
        console[_0x3d5088(0x3e9)](
          chalk[_0x3d5088(0x45d)](_0x3d5088(0x2be)),
          chalk[_0x3d5088(0x42e)](_0x3d5088(0x2e4))
        ),
          exec(_0x4a6735["slice"](0x2), (_0x54f93e, _0x401fcd) => {
            if (_0x54f93e) return _0x1b3106("" + _0x54f93e);
            if (_0x401fcd) _0x1b3106("" + _0x401fcd);
          });
      else {
        if (_0x4a6735[_0x3d5088(0x4cc)](">\x20") && _0x599587) {
          console[_0x3d5088(0x3e9)](
            chalk[_0x3d5088(0x45d)](_0x3d5088(0x374)),
            chalk["white"]("Dari\x20Owner\x20aowkaokwoak")
          );
          try {
            let _0x3fde90 = await eval(_0x4a6735[_0x3d5088(0x3c6)](0x2));
            if (typeof _0x3fde90 !== "string")
              _0x3fde90 = require("util")[_0x3d5088(0x38b)](_0x3fde90);
            _0x1b3106("" + _0x3fde90);
          } catch (_0x27ae77) {
            _0x1b3106("" + _0x27ae77);
          }
        }
      }
    }
    const _0x53547d = (_0xc9094e) =>
        _0xc9094e["replace"](/[|\\{}()[\]^$+*?.]/g, _0x3d5088(0x260)),
      _0x418200 = (
        _0x4baec1 instanceof RegExp
          ? [[_0x4baec1["exec"](_0x12e00d[_0x3d5088(0x533)]), _0x4baec1]]
          : Array["isArray"](_0x4baec1)
          ? _0x4baec1[_0x3d5088(0x686)]((_0x2a0b22) => {
              var _0x5cd7bb = _0x3d5088;
              let _0x1ac167 =
                _0x2a0b22 instanceof RegExp
                  ? _0x2a0b22
                  : new RegExp(_0x53547d(_0x2a0b22));
              return [
                _0x1ac167[_0x5cd7bb(0x5ea)](_0x12e00d[_0x5cd7bb(0x533)]),
                _0x1ac167,
              ];
            })
          : typeof _0x4baec1 === "string"
          ? [
              [
                new RegExp(_0x53547d(_0x4baec1))["exec"](
                  _0x12e00d[_0x3d5088(0x533)]
                ),
                new RegExp(_0x53547d(_0x4baec1)),
              ],
            ]
          : [[[], new RegExp()]]
      )[_0x3d5088(0x284)]((_0x2574cc) => _0x2574cc[0x1]);
    if (
      _0x418200 &&
      _0x12e00d[_0x3d5088(0x3d5)][_0x3d5088(0x29d)](_0x3d5088(0x646)) &&
      !_0x439ed6
    ) {
      this[_0x3d5088(0x5a2)] = this["anonymous"] ? this[_0x3d5088(0x5a2)] : {};
      let _0x44ca64 = Object[_0x3d5088(0x304)](this[_0x3d5088(0x5a2)])[
        _0x3d5088(0x284)
      ](
        (_0x5a0390) =>
          [_0x5a0390["a"], _0x5a0390["b"]][_0x3d5088(0x24f)](
            _0x12e00d[_0x3d5088(0x24d)]
          ) && _0x5a0390[_0x3d5088(0x1d4)] === _0x3d5088(0x470)
      );
      if (_0x44ca64) {
        if (
          /^.*(next|leave|start)/[_0x3d5088(0x3e2)](_0x12e00d[_0x3d5088(0x533)])
        )
          return;
        if (
          [
            _0x3d5088(0x512),
            _0x3d5088(0x312),
            _0x3d5088(0x417),
            ".start",
            "Cari\x20Partner",
            _0x3d5088(0x279),
            _0x3d5088(0x63f),
            _0x3d5088(0x48d),
          ][_0x3d5088(0x24f)](_0x12e00d[_0x3d5088(0x533)])
        )
          return;
        let _0x22e518 = [_0x44ca64["a"], _0x44ca64["b"]]["find"](
          (_0x31aea8) => _0x31aea8 !== _0x12e00d[_0x3d5088(0x24d)]
        );
        _0x12e00d[_0x3d5088(0x487)](
          _0x22e518,
          !![],
          _0x12e00d[_0x3d5088(0x341)] && _0x12e00d["quoted"][_0x3d5088(0x685)]
            ? {
                contextInfo: {
                  ..._0x12e00d[_0x3d5088(0x3da)][_0x3d5088(0x4ed)],
                  forwardingScore: 0x1,
                  isForwarded: !![],
                  participant: _0x22e518,
                },
              }
            : {}
        );
      }
      return !0x0;
    }
    const _0x2e189f = _0x12e00d["type"] == _0x3d5088(0x206),
      _0x1080dd = _0x12e00d[_0x3d5088(0x3f3)] == "videoMessage",
      _0x2b49f9 = _0x12e00d["type"] == _0x3d5088(0x39c),
      _0x59a4d3 = _0x12e00d[_0x3d5088(0x3f3)] == _0x3d5088(0x1e1),
      _0x11f65b = _0x59a4d3
        ? _0x2c3f82[_0x3d5088(0x24f)](_0x3d5088(0x206))
          ? !![]
          : ![]
        : ![],
      _0x977176 = _0x59a4d3
        ? _0x2c3f82[_0x3d5088(0x24f)](_0x3d5088(0x418))
          ? !![]
          : ![]
        : ![],
      _0x3f5cf1 = _0x59a4d3
        ? _0x2c3f82[_0x3d5088(0x24f)](_0x3d5088(0x2f8))
          ? !![]
          : ![]
        : ![],
      _0x261864 = _0x59a4d3
        ? _0x2c3f82[_0x3d5088(0x24f)](_0x3d5088(0x287))
          ? !![]
          : ![]
        : ![],
      _0x5aacf9 = _0x59a4d3
        ? _0x2c3f82[_0x3d5088(0x24f)](_0x3d5088(0x39c))
          ? !![]
          : ![]
        : ![];
    _0x12e00d["message"] &&
      !_0x12e00d[_0x3d5088(0x52c)] &&
      console[_0x3d5088(0x3e9)](
        chalk["white"](chalk["bgBlue"](_0x3d5088(0x1f4))),
        chalk["white"](_0x12e00d["pushName"]),
        chalk[_0x3d5088(0x1c6)](chalk[_0x3d5088(0x1dc)](_0xaa9e24)) +
          "\x0a" +
          chalk[_0x3d5088(0x42e)](chalk[_0x3d5088(0x268)](_0x3d5088(0x1a3))),
        chalk[_0x3d5088(0x1c6)](
          chalk[_0x3d5088(0x464)](
            _0x1710ba ? _0x5bd9ce[_0x3d5088(0x632)] : _0x3d5088(0x570),
            _0x12e00d[_0x3d5088(0x429)]
          )
        ) +
          "\x0a" +
          chalk["white"](chalk[_0x3d5088(0x268)](_0x3d5088(0x371))),
        chalk[_0x3d5088(0x1c6)](
          chalk[_0x3d5088(0x464)](
            _0x12e00d["body"] || _0x12e00d[_0x3d5088(0x3f3)]
          )
        )
      );
    switch (_0x36ed63) {
      case _0x4baec1 + "dashboard":
      case _0x4baec1 + "dash":
        _0x2c9561(_0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1], _0xaa9e24, _cmd);
        var _0x227b23 = await _0xd3b0bf(_0xaa9e24, _cmdUser);
        _cmdUser[_0x227b23]["db"][_0x3d5088(0x548)]((_0xb9723a, _0x285de0) =>
          _0xb9723a["count"] < _0x285de0[_0x3d5088(0x295)] ? 0x1 : -0x1
        ),
          _cmd[_0x3d5088(0x548)]((_0x4ab5bc, _0x305890) =>
            _0x4ab5bc[_0x3d5088(0x295)] < _0x305890[_0x3d5088(0x295)]
              ? 0x1
              : -0x1
          );
        var _0x227b23 = await _0xd3b0bf(_0xaa9e24, _cmdUser),
          _0x14faa7 = _cmd["length"];
        if (_0x14faa7 > 0xa) _0x14faa7 = 0xa;
        var _0x23cef7 = _cmdUser[_0x227b23]["db"][_0x3d5088(0x3c1)];
        if (_0x23cef7 > 0x5) _0x23cef7 = 0x5;
        var _0x4c649b = 0x0;
        for (let _0x57f120 of _cmdUser[_0x227b23]["db"]) {
          _0x4c649b = _0x4c649b + _0x57f120["count"];
        }
        var _0x261e35 = 0x0;
        for (let _0x28c93d of _cmd) {
          _0x261e35 = _0x261e35 + _0x28c93d["count"];
        }
        var _0x5117c6 =
          "*" +
          global[_0x3d5088(0x4f7)] +
          _0x3d5088(0x424) +
          _0x261e35 +
          "\x0a•\x20USER\x20:\x20" +
          _0x4c649b +
          "\x0a\x0a";
        _0x5117c6 += _0x3d5088(0x1f0);
        for (let _0x5991f7 = 0x0; _0x5991f7 < _0x14faa7; _0x5991f7++) {
          _0x5117c6 +=
            "•\x20" +
            _cmd[_0x5991f7][_0x3d5088(0x23b)] +
            _0x3d5088(0x2dc) +
            _cmd[_0x5991f7]["count"] +
            "\x0a";
        }
        _0x1b3106(_0x5117c6);
        break;
      case _0x4baec1 + "menu":
      case _0x4baec1 + "allmenu":
      case _0x4baec1 + _0x3d5088(0x694):
        _0x2c9561(_0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1], _0xaa9e24, _cmd);
        let _0x4c3854 =
          "\x0a_*👋Hello\x20" +
          _0x12e00d["pushName"] +
          _0x3d5088(0x224) +
          _0x12e00d[_0x3d5088(0x47a)] +
          _0x3d5088(0x2fc) +
          _0xaa9e24[_0x3d5088(0x648)]("@")[0x0] +
          "_\x0a├────✎「\x20_*BOT\x20INFO*_\x20」\x0a│\x20_*Bot\x20Name:*_\x20_" +
          global[_0x3d5088(0x4f7)] +
          _0x3d5088(0x51f) +
          global[_0x3d5088(0x423)] +
          "_\x0a│\x20_*Registration:*_\x20_" +
          pendaftar[_0x3d5088(0x3c1)] +
          _0x3d5088(0x660) +
          _0x276424(process[_0x3d5088(0x41d)]()) +
          _0x3d5088(0x2af) +
          _0x4baec1 +
          "owner\x0a│•\x20" +
          _0x4baec1 +
          _0x3d5088(0x497) +
          _0x4baec1 +
          _0x3d5088(0x50b) +
          _0x4baec1 +
          "jadibot\x0a│•\x20" +
          _0x4baec1 +
          _0x3d5088(0x623) +
          _0x4baec1 +
          _0x3d5088(0x329) +
          _0x4baec1 +
          _0x3d5088(0x2e7) +
          _0x4baec1 +
          _0x3d5088(0x653) +
          _0x4baec1 +
          _0x3d5088(0x656) +
          _0x4baec1 +
          _0x3d5088(0x254) +
          _0x4baec1 +
          _0x3d5088(0x243) +
          _0x4baec1 +
          "roboguru\x0a│•\x20" +
          _0x4baec1 +
          "brainly\x0a│•\x20" +
          _0x4baec1 +
          _0x3d5088(0x356) +
          _0x4baec1 +
          _0x3d5088(0x21d) +
          _0x4baec1 +
          _0x3d5088(0x1a8) +
          _0x4baec1 +
          "linkgc\x0a│•\x20" +
          _0x4baec1 +
          _0x3d5088(0x573) +
          _0x4baec1 +
          "group\x0a│•\x20" +
          _0x4baec1 +
          "revoke\x0a│•\x20" +
          _0x4baec1 +
          "join\x0a│•\x20" +
          _0x4baec1 +
          _0x3d5088(0x2ba) +
          _0x4baec1 +
          _0x3d5088(0x66b) +
          _0x4baec1 +
          _0x3d5088(0x2bf) +
          _0x4baec1 +
          _0x3d5088(0x651) +
          _0x4baec1 +
          "addprem\x0a│•\x20" +
          _0x4baec1 +
          "delprem\x0a│•\x20" +
          _0x4baec1 +
          _0x3d5088(0x538) +
          _0x4baec1 +
          _0x3d5088(0x31b) +
          _0x4baec1 +
          "setpp\x0a│•\x20" +
          _0x4baec1 +
          _0x3d5088(0x370) +
          _0x4baec1 +
          _0x3d5088(0x615) +
          _0x4baec1 +
          "public\x0a│•\x20>\x20(Eval)\x0a│•\x20$\x20(Exec)\x0a╰───────────❍\x0a\x0a╭─✎「\x20_*-USER\x20MENU-*_\x20」\x0a│•\x20" +
          _0x4baec1 +
          _0x3d5088(0x484) +
          _0x4baec1 +
          _0x3d5088(0x278) +
          _0x4baec1 +
          _0x3d5088(0x41b) +
          _0x4baec1 +
          "buylimit\x0a│•\x20" +
          _0x4baec1 +
          "buyglimit\x0a│•\x20" +
          _0x4baec1 +
          _0x3d5088(0x5c1) +
          _0x4baec1 +
          "anonymous\x0a│•\x20" +
          _0x4baec1 +
          _0x3d5088(0x404) +
          _0x4baec1 +
          _0x3d5088(0x26f) +
          _0x4baec1 +
          "leave\x0a╰────────────❍\x0a\x0a╭─✎「\x20*_-TOOLS\x20MENU-_*\x20」\x0a│•\x20" +
          _0x4baec1 +
          _0x3d5088(0x228) +
          _0x4baec1 +
          _0x3d5088(0x5ab) +
          _0x4baec1 +
          _0x3d5088(0x31f) +
          _0x4baec1 +
          _0x3d5088(0x3e0) +
          _0x4baec1 +
          "getvideo\x0a│•\x20" +
          _0x4baec1 +
          _0x3d5088(0x1e8) +
          _0x4baec1 +
          _0x3d5088(0x337) +
          _0x4baec1 +
          _0x3d5088(0x1df) +
          _0x4baec1 +
          _0x3d5088(0x30b) +
          _0x4baec1 +
          _0x3d5088(0x4dc) +
          _0x4baec1 +
          _0x3d5088(0x1b8) +
          _0x4baec1 +
          "tiktokaudio\x0a│•\x20" +
          _0x4baec1 +
          _0x3d5088(0x361) +
          _0x4baec1 +
          _0x3d5088(0x40f) +
          _0x4baec1 +
          _0x3d5088(0x3a3) +
          _0x4baec1 +
          _0x3d5088(0x659) +
          _0x4baec1 +
          _0x3d5088(0x460) +
          _0x4baec1 +
          _0x3d5088(0x2b0) +
          _0x4baec1 +
          _0x3d5088(0x523) +
          _0x4baec1 +
          _0x3d5088(0x41c) +
          _0x4baec1 +
          _0x3d5088(0x550) +
          _0x4baec1 +
          _0x3d5088(0x314) +
          _0x4baec1 +
          _0x3d5088(0x5b2) +
          _0x4baec1 +
          _0x3d5088(0x3aa) +
          _0x4baec1 +
          _0x3d5088(0x236) +
          _0x4baec1 +
          _0x3d5088(0x48e) +
          _0x4baec1 +
          _0x3d5088(0x26a) +
          _0x4baec1 +
          "loli\x0a│•\x20" +
          _0x4baec1 +
          "neko2\x0a│•\x20" +
          _0x4baec1 +
          _0x3d5088(0x34f) +
          _0x4baec1 +
          _0x3d5088(0x301) +
          _0x4baec1 +
          _0x3d5088(0x633) +
          _0x4baec1 +
          "sagiri\x0a│•\x20" +
          _0x4baec1 +
          _0x3d5088(0x4fc) +
          _0x4baec1 +
          _0x3d5088(0x2b6) +
          _0x4baec1 +
          _0x3d5088(0x681) +
          _0x4baec1 +
          _0x3d5088(0x2e2) +
          _0x4baec1 +
          "hijab\x0a│•\x20" +
          _0x4baec1 +
          _0x3d5088(0x3c4) +
          _0x4baec1 +
          "japanese\x0a│•\x20" +
          _0x4baec1 +
          _0x3d5088(0x2c1) +
          _0x4baec1 +
          "malay\x0a│•\x20" +
          _0x4baec1 +
          _0x3d5088(0x345) +
          _0x4baec1 +
          "randomboy\x0a│•\x20" +
          _0x4baec1 +
          _0x3d5088(0x605) +
          _0x4baec1 +
          _0x3d5088(0x357) +
          _0x4baec1 +
          "aesthetic\x0a│•\x20" +
          _0x4baec1 +
          _0x3d5088(0x65c) +
          _0x4baec1 +
          _0x3d5088(0x27d) +
          _0x4baec1 +
          _0x3d5088(0x603) +
          _0x4baec1 +
          _0x3d5088(0x36d) +
          _0x4baec1 +
          _0x3d5088(0x5ad) +
          _0x4baec1 +
          _0x3d5088(0x395) +
          _0x4baec1 +
          _0x3d5088(0x273) +
          _0x4baec1 +
          _0x3d5088(0x4ff) +
          _0x4baec1 +
          _0x3d5088(0x40e) +
          _0x4baec1 +
          "bike\x0a│•\x20" +
          _0x4baec1 +
          _0x3d5088(0x67f) +
          _0x4baec1 +
          _0x3d5088(0x3ea) +
          _0x4baec1 +
          _0x3d5088(0x379) +
          _0x4baec1 +
          _0x3d5088(0x463) +
          _0x4baec1 +
          _0x3d5088(0x394) +
          _0x4baec1 +
          "ryujin\x0a│•\x20" +
          _0x4baec1 +
          _0x3d5088(0x3c0) +
          _0x4baec1 +
          "ulzanggirl\x0a│•\x20" +
          _0x4baec1 +
          _0x3d5088(0x272) +
          _0x4baec1 +
          _0x3d5088(0x211) +
          _0x4baec1 +
          _0x3d5088(0x45c) +
          _0x4baec1 +
          "ana\x20\x0a│•\x20" +
          _0x4baec1 +
          _0x3d5088(0x1d8) +
          _0x4baec1 +
          "ayuzawa\x20\x0a│•\x20" +
          _0x4baec1 +
          _0x3d5088(0x61b) +
          _0x4baec1 +
          _0x3d5088(0x557) +
          _0x4baec1 +
          _0x3d5088(0x3ae) +
          _0x4baec1 +
          _0x3d5088(0x516) +
          _0x4baec1 +
          _0x3d5088(0x37e) +
          _0x4baec1 +
          _0x3d5088(0x338) +
          _0x4baec1 +
          _0x3d5088(0x466) +
          _0x4baec1 +
          _0x3d5088(0x367) +
          _0x4baec1 +
          _0x3d5088(0x55a) +
          _0x4baec1 +
          _0x3d5088(0x627) +
          _0x4baec1 +
          _0x3d5088(0x397) +
          _0x4baec1 +
          "hestia\x20\x0a│•\x20" +
          _0x4baec1 +
          _0x3d5088(0x614) +
          _0x4baec1 +
          _0x3d5088(0x68e) +
          _0x4baec1 +
          _0x3d5088(0x46f) +
          _0x4baec1 +
          _0x3d5088(0x3a1) +
          _0x4baec1 +
          _0x3d5088(0x65f) +
          _0x4baec1 +
          "itori\x20\x0a│•\x20" +
          _0x4baec1 +
          _0x3d5088(0x5ac) +
          _0x4baec1 +
          _0x3d5088(0x608) +
          _0x4baec1 +
          "kakasih\x20\x0a│•\x20" +
          _0x4baec1 +
          _0x3d5088(0x51b) +
          _0x4baec1 +
          _0x3d5088(0x59a) +
          _0x4baec1 +
          "kotori\x20\x0a│•\x20" +
          _0x4baec1 +
          _0x3d5088(0x3cf) +
          _0x4baec1 +
          "loli\x20\x0a│•\x20" +
          _0x4baec1 +
          _0x3d5088(0x630) +
          _0x4baec1 +
          _0x3d5088(0x2eb) +
          _0x4baec1 +
          _0x3d5088(0x44e) +
          _0x4baec1 +
          "mikey\x20\x0a│•\x20" +
          _0x4baec1 +
          "miku\x20\x0a│•\x20" +
          _0x4baec1 +
          _0x3d5088(0x4d8) +
          _0x4baec1 +
          _0x3d5088(0x56a) +
          _0x4baec1 +
          _0x3d5088(0x262) +
          _0x4baec1 +
          "neko2\x20\x0a│•\x20" +
          _0x4baec1 +
          _0x3d5088(0x37d) +
          _0x4baec1 +
          _0x3d5088(0x222) +
          _0x4baec1 +
          _0x3d5088(0x46d) +
          _0x4baec1 +
          _0x3d5088(0x5a1) +
          _0x4baec1 +
          _0x3d5088(0x465) +
          _0x4baec1 +
          _0x3d5088(0x4dd) +
          _0x4baec1 +
          _0x3d5088(0x5ca) +
          _0x4baec1 +
          "sagiri\x20\x0a│•\x20" +
          _0x4baec1 +
          "sakura\x20\x0a│•\x20" +
          _0x4baec1 +
          "sasuke\x20\x0a│•\x20" +
          _0x4baec1 +
          _0x3d5088(0x235) +
          _0x4baec1 +
          _0x3d5088(0x5e3) +
          _0x4baec1 +
          _0x3d5088(0x214) +
          _0x4baec1 +
          "shizuka\x20\x0a│•\x20" +
          _0x4baec1 +
          _0x3d5088(0x3bd) +
          _0x4baec1 +
          _0x3d5088(0x682) +
          _0x4baec1 +
          "toukachan\x20\x0a│•\x20" +
          _0x4baec1 +
          "tsunade\x20\x0a│•\x20" +
          _0x4baec1 +
          _0x3d5088(0x328) +
          _0x4baec1 +
          "animewall\x20\x0a│•\x20" +
          _0x4baec1 +
          "yotsuba\x20\x0a│•\x20" +
          _0x4baec1 +
          _0x3d5088(0x49a) +
          _0x4baec1 +
          "yulibocil\x20\x0a│•\x20" +
          _0x4baec1 +
          _0x3d5088(0x4b4) +
          _0x4baec1 +
          _0x3d5088(0x3f7) +
          _0x4baec1 +
          "tickle\x0a│•\x20" +
          _0x4baec1 +
          _0x3d5088(0x555) +
          _0x4baec1 +
          _0x3d5088(0x5b4) +
          _0x4baec1 +
          _0x3d5088(0x22e) +
          _0x4baec1 +
          _0x3d5088(0x43a) +
          _0x4baec1 +
          _0x3d5088(0x1bc) +
          _0x4baec1 +
          _0x3d5088(0x1b5) +
          _0x4baec1 +
          _0x3d5088(0x1a5) +
          _0x4baec1 +
          _0x3d5088(0x560) +
          _0x4baec1 +
          _0x3d5088(0x3e7) +
          _0x4baec1 +
          _0x3d5088(0x43f) +
          _0x4baec1 +
          _0x3d5088(0x33d) +
          _0x4baec1 +
          "neonlight\x0a│•\x20" +
          _0x4baec1 +
          _0x3d5088(0x20c) +
          _0x4baec1 +
          _0x3d5088(0x473) +
          _0x4baec1 +
          _0x3d5088(0x3e1) +
          _0x4baec1 +
          _0x3d5088(0x4cf) +
          _0x4baec1 +
          _0x3d5088(0x52e) +
          _0x4baec1 +
          _0x3d5088(0x554) +
          _0x4baec1 +
          "halloween\x0a│•\x20" +
          _0x4baec1 +
          "jokerlogo\x0a│•\x20" +
          _0x4baec1 +
          _0x3d5088(0x2d2) +
          _0x4baec1 +
          _0x3d5088(0x2a8) +
          _0x4baec1 +
          _0x3d5088(0x494) +
          _0x4baec1 +
          _0x3d5088(0x3a8) +
          _0x4baec1 +
          _0x3d5088(0x3ff) +
          _0x4baec1 +
          _0x3d5088(0x22d) +
          _0x4baec1 +
          "roadwarning\x0a│•\x20" +
          _0x4baec1 +
          "breakwall\x0a│•\x20" +
          _0x4baec1 +
          _0x3d5088(0x5fb) +
          _0x4baec1 +
          "luxury\x0a│•\x20" +
          _0x4baec1 +
          "cloud\x0a│•\x20" +
          _0x4baec1 +
          _0x3d5088(0x343) +
          _0x4baec1 +
          "horrorblood\x0a│•\x20" +
          _0x4baec1 +
          "thunder\x0a╰────────────❍\x0a\x20\x20\x0a╭─✎「\x20*_-SOUND\x20MENU-_*\x20」\x0a│•\x20" +
          _0x4baec1 +
          _0x3d5088(0x3d6) +
          _0x4baec1 +
          _0x3d5088(0x2cd) +
          _0x4baec1 +
          "sound3\x0a│•\x20" +
          _0x4baec1 +
          _0x3d5088(0x2d6) +
          _0x4baec1 +
          "sound5\x0a│•\x20" +
          _0x4baec1 +
          _0x3d5088(0x622) +
          _0x4baec1 +
          _0x3d5088(0x579) +
          _0x4baec1 +
          _0x3d5088(0x38f) +
          _0x4baec1 +
          _0x3d5088(0x25e) +
          _0x4baec1 +
          _0x3d5088(0x3af) +
          _0x4baec1 +
          _0x3d5088(0x210) +
          _0x4baec1 +
          _0x3d5088(0x3dc) +
          _0x4baec1 +
          "sound13\x0a│•\x20" +
          _0x4baec1 +
          _0x3d5088(0x3a2) +
          _0x4baec1 +
          _0x3d5088(0x1d3) +
          _0x4baec1 +
          _0x3d5088(0x241) +
          _0x4baec1 +
          _0x3d5088(0x298) +
          _0x4baec1 +
          _0x3d5088(0x1c9) +
          _0x4baec1 +
          _0x3d5088(0x58f) +
          _0x4baec1 +
          "sound20\x0a│•\x20" +
          _0x4baec1 +
          "sound21\x0a│•\x20" +
          _0x4baec1 +
          "sound22\x0a│•\x20" +
          _0x4baec1 +
          _0x3d5088(0x27f) +
          _0x4baec1 +
          "sound24\x0a│•\x20" +
          _0x4baec1 +
          _0x3d5088(0x27e) +
          _0x4baec1 +
          "sound26\x0a│•\x20" +
          _0x4baec1 +
          _0x3d5088(0x32a) +
          _0x4baec1 +
          "sound28\x0a│•\x20" +
          _0x4baec1 +
          _0x3d5088(0x3cc) +
          _0x4baec1 +
          "sound30\x0a│•\x20" +
          _0x4baec1 +
          _0x3d5088(0x4fa) +
          _0x4baec1 +
          _0x3d5088(0x602) +
          _0x4baec1 +
          _0x3d5088(0x1c5) +
          _0x4baec1 +
          _0x3d5088(0x3f5) +
          _0x4baec1 +
          _0x3d5088(0x4ae) +
          _0x4baec1 +
          _0x3d5088(0x34b) +
          _0x4baec1 +
          _0x3d5088(0x230) +
          _0x4baec1 +
          _0x3d5088(0x66d) +
          _0x4baec1 +
          "sound39\x0a│•\x20" +
          _0x4baec1 +
          _0x3d5088(0x420) +
          _0x4baec1 +
          _0x3d5088(0x23e) +
          _0x4baec1 +
          _0x3d5088(0x5ee) +
          _0x4baec1 +
          _0x3d5088(0x270) +
          _0x4baec1 +
          _0x3d5088(0x63c) +
          _0x4baec1 +
          "sound45\x0a│•\x20" +
          _0x4baec1 +
          "sound46\x0a│•\x20" +
          _0x4baec1 +
          "sound47\x0a│•\x20" +
          _0x4baec1 +
          "sound48\x0a│•\x20" +
          _0x4baec1 +
          _0x3d5088(0x2ac) +
          _0x4baec1 +
          "sound50\x0a│•\x20" +
          _0x4baec1 +
          _0x3d5088(0x26e) +
          _0x4baec1 +
          _0x3d5088(0x59c) +
          _0x4baec1 +
          _0x3d5088(0x22f) +
          _0x4baec1 +
          _0x3d5088(0x586) +
          _0x4baec1 +
          _0x3d5088(0x432) +
          _0x4baec1 +
          _0x3d5088(0x1ca) +
          _0x4baec1 +
          _0x3d5088(0x581) +
          _0x4baec1 +
          "sound58\x0a│•\x20" +
          _0x4baec1 +
          _0x3d5088(0x38d) +
          _0x4baec1 +
          "sound60\x0a│•\x20" +
          _0x4baec1 +
          "sound61\x0a│•\x20" +
          _0x4baec1 +
          _0x3d5088(0x4b1) +
          _0x4baec1 +
          _0x3d5088(0x257) +
          _0x4baec1 +
          _0x3d5088(0x2ef) +
          _0x4baec1 +
          _0x3d5088(0x5f4) +
          _0x4baec1 +
          _0x3d5088(0x42c) +
          _0x4baec1 +
          _0x3d5088(0x52d) +
          _0x4baec1 +
          _0x3d5088(0x1b0) +
          _0x4baec1 +
          _0x3d5088(0x322) +
          _0x4baec1 +
          _0x3d5088(0x529) +
          _0x4baec1 +
          _0x3d5088(0x24c) +
          _0x4baec1 +
          _0x3d5088(0x475) +
          _0x4baec1 +
          _0x3d5088(0x2ee) +
          _0x4baec1 +
          _0x3d5088(0x5b1) +
          _0x4baec1 +
          _0x3d5088(0x57c) +
          _0x4baec1 +
          _0x3d5088(0x3a9) +
          _0x4baec1 +
          _0x3d5088(0x213) +
          _0x4baec1 +
          _0x3d5088(0x474) +
          _0x4baec1 +
          "sound79\x0a│•\x20" +
          _0x4baec1 +
          _0x3d5088(0x434) +
          _0x4baec1 +
          _0x3d5088(0x1e6) +
          _0x4baec1 +
          _0x3d5088(0x248) +
          _0x4baec1 +
          "sound83\x0a│•\x20" +
          _0x4baec1 +
          _0x3d5088(0x41a) +
          _0x4baec1 +
          _0x3d5088(0x690) +
          _0x4baec1 +
          _0x3d5088(0x66a) +
          _0x4baec1 +
          _0x3d5088(0x3d2) +
          _0x4baec1 +
          _0x3d5088(0x5cf) +
          _0x4baec1 +
          _0x3d5088(0x28d) +
          _0x4baec1 +
          _0x3d5088(0x35a) +
          _0x4baec1 +
          "sound91\x0a│•\x20" +
          _0x4baec1 +
          _0x3d5088(0x43b) +
          _0x4baec1 +
          _0x3d5088(0x3dd) +
          _0x4baec1 +
          _0x3d5088(0x496) +
          _0x4baec1 +
          _0x3d5088(0x208) +
          _0x4baec1 +
          "sound96\x0a│•\x20" +
          _0x4baec1 +
          _0x3d5088(0x1e5) +
          _0x4baec1 +
          _0x3d5088(0x21a) +
          _0x4baec1 +
          "sound99\x0a│•\x20" +
          _0x4baec1 +
          "sound100\x0a│•\x20" +
          _0x4baec1 +
          "sound101\x0a│•\x20" +
          _0x4baec1 +
          "sound102\x0a│•\x20" +
          _0x4baec1 +
          _0x3d5088(0x595) +
          _0x4baec1 +
          "sound104\x0a│•\x20" +
          _0x4baec1 +
          _0x3d5088(0x2f0) +
          _0x4baec1 +
          "sound106\x0a│•\x20" +
          _0x4baec1 +
          _0x3d5088(0x1e3) +
          _0x4baec1 +
          "sound108\x0a│•\x20" +
          _0x4baec1 +
          _0x3d5088(0x5be) +
          _0x4baec1 +
          "sound110\x0a│•\x20" +
          _0x4baec1 +
          _0x3d5088(0x634) +
          _0x4baec1 +
          _0x3d5088(0x340) +
          _0x4baec1 +
          _0x3d5088(0x233) +
          _0x4baec1 +
          _0x3d5088(0x5a8) +
          _0x4baec1 +
          _0x3d5088(0x431) +
          _0x4baec1 +
          _0x3d5088(0x441) +
          _0x4baec1 +
          "sound117\x0a│•\x20" +
          _0x4baec1 +
          _0x3d5088(0x1e0) +
          _0x4baec1 +
          _0x3d5088(0x37b) +
          _0x4baec1 +
          _0x3d5088(0x3fd) +
          _0x4baec1 +
          _0x3d5088(0x3b7) +
          _0x4baec1 +
          _0x3d5088(0x2d7) +
          _0x4baec1 +
          _0x3d5088(0x1c3) +
          _0x4baec1 +
          _0x3d5088(0x3f9) +
          _0x4baec1 +
          _0x3d5088(0x666) +
          _0x4baec1 +
          _0x3d5088(0x63a) +
          _0x4baec1 +
          _0x3d5088(0x3a7) +
          _0x4baec1 +
          _0x3d5088(0x5e4) +
          _0x4baec1 +
          _0x3d5088(0x645) +
          _0x4baec1 +
          _0x3d5088(0x1f9) +
          _0x4baec1 +
          _0x3d5088(0x509) +
          _0x4baec1 +
          _0x3d5088(0x292) +
          _0x4baec1 +
          "sound133\x0a│•\x20" +
          _0x4baec1 +
          "sound134\x0a│•\x20" +
          _0x4baec1 +
          _0x3d5088(0x212) +
          _0x4baec1 +
          _0x3d5088(0x2d9) +
          _0x4baec1 +
          _0x3d5088(0x232) +
          _0x4baec1 +
          _0x3d5088(0x58d) +
          _0x4baec1 +
          _0x3d5088(0x485) +
          _0x4baec1 +
          _0x3d5088(0x256) +
          _0x4baec1 +
          _0x3d5088(0x320) +
          _0x4baec1 +
          _0x3d5088(0x36e) +
          _0x4baec1 +
          _0x3d5088(0x2b1) +
          _0x4baec1 +
          _0x3d5088(0x36a) +
          _0x4baec1 +
          _0x3d5088(0x289) +
          _0x4baec1 +
          "sound146\x0a│•\x20" +
          _0x4baec1 +
          "sound147\x0a│•\x20" +
          _0x4baec1 +
          _0x3d5088(0x1ad) +
          _0x4baec1 +
          _0x3d5088(0x2d0) +
          _0x4baec1 +
          "sound150\x0a│•\x20" +
          _0x4baec1 +
          _0x3d5088(0x631) +
          _0x4baec1 +
          _0x3d5088(0x506) +
          _0x4baec1 +
          _0x3d5088(0x311) +
          _0x4baec1 +
          "sound154\x0a│•\x20" +
          _0x4baec1 +
          _0x3d5088(0x606) +
          _0x4baec1 +
          _0x3d5088(0x683) +
          _0x4baec1 +
          _0x3d5088(0x3ec) +
          _0x4baec1 +
          _0x3d5088(0x258) +
          _0x4baec1 +
          _0x3d5088(0x2a0) +
          _0x4baec1 +
          _0x3d5088(0x3e3) +
          _0x4baec1 +
          _0x3d5088(0x24e);
        _0x291436[_0x3d5088(0x1fe)](_0xdd6e0f, {
          text: _0x4c3854,
          contextInfo: {
            externalAdReply: {
              title: "HAI\x20AKU\x20" + global[_0x3d5088(0x4f7)],
              body: "gunakan\x20bot\x20dengan\x20bijak\x20✓",
              thumbnail: global[_0x3d5088(0x674)],
              sourceUrl: "https://tabraklurus.co.id",
              mediaType: 0x1,
              showAdAttribution: ![],
              renderLargerThumbnail: !![],
            },
          },
        });
        break;
      case _0x4baec1 + "sc": {
        _0x2c9561(_0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1], _0xaa9e24, _cmd),
          _0x1b3106(
            "_*This\x20bot\x20use\x20base:*_\x0ahttps://github.com/WhyDepin/baileys-bot-whatsapp"
          );
        break;
      }
      case _0x4baec1 + "owner":
        {
          _0x2c9561(_0x36ed63, _0xaa9e24, _cmd),
            _0x30c930(
              _0xdd6e0f,
              global[_0x3d5088(0x625)] + "@s.whatsapp.net",
              _0x3d5088(0x640),
              _0x12e00d
            );
        }
        break;
      case _0x4baec1 + "z":
      case _0x4baec1 + _0x3d5088(0x416):
        {
          _0x2c9561(_0x36ed63, _0xaa9e24, _cmd);
          if (!_0xbeeae5 && !_0x48ad87) {
            if (!_0x1fe3c5) return _0x1b3106(_0x3d5088(0x33b));
          }
          _0x291436[_0x3d5088(0x1fe)](_0xdd6e0f, {
            text: _0x1fe3c5 ? _0x1fe3c5 : "",
            mentions: _0x376898[_0x3d5088(0x686)](
              (_0x1d0ec8) => _0x1d0ec8["id"]
            ),
          });
        }
        break;
      case _0x4baec1 + _0x3d5088(0x297):
        _0x2c9561(_0x36ed63, _0xaa9e24, _cmd);
        if (!_0x1710ba) return _0x1b3106("khusus\x20group");
        if (!_0x1be5b6 && !_0xbeeae5) return _0x1b3106(_0x3d5088(0x2c8));
        if (!_0x45d818) return _0x1b3106(_0x3d5088(0x4cd));
        if (!_0x12e00d[_0x3d5088(0x341)][_0x3d5088(0x24d)])
          return _0x1b3106(
            "Tag\x20atau\x20balas\x20pesan\x20orang\x20yang\x20ingin\x20di\x20keluarkan!"
          );
        if (
          _0x12e00d[_0x3d5088(0x341)][_0x3d5088(0x24d)] ==
            global[_0x3d5088(0x625)] ||
          _0x12e00d[_0x3d5088(0x341)]["sender"] == _0x480dc7
        )
          return _0x1b3106(
            _0x3d5088(0x2c6) +
              (_0x12e00d[_0x3d5088(0x341)][_0x3d5088(0x24d)] ==
              global[_0x3d5088(0x625)]
                ? _0x3d5088(0x386)
                : _0x3d5088(0x584)) +
              "!"
          );
        var _0x1bb554 = await _0x291436[_0x3d5088(0x220)](
          _0xdd6e0f,
          [_0x12e00d[_0x3d5088(0x341)][_0x3d5088(0x24d)]],
          _0x3d5088(0x4c3)
        );
        for (let _0x3ab6f3 of _0x1bb554) {
          _0x3ab6f3[_0x3d5088(0x1c7)] === "406"
            ? _0x1b3106(_0x3d5088(0x4f0))
            : _0x1b3106(_0x3d5088(0x308));
        }
        break;
      case _0x4baec1 + _0x3d5088(0x296):
      case _0x4baec1 + _0x3d5088(0x40b):
        _0x2c9561(_0x36ed63, _0xaa9e24, _cmd);
        if (!_0x1710ba) return _0x1b3106(_0x3d5088(0x478));
        if (!_0x45d818) return _0x1b3106("Only\x20bot\x20admin!!");
        var _0x5e1e63 = await _0x291436[_0x3d5088(0x446)](_0xdd6e0f)[
          _0x3d5088(0x546)
        ](() => _0x1b3106(_0x3d5088(0x553)));
        (_0x5e1e63 = _0x3d5088(0x5d1) + _0x5e1e63), _0x1b3106(_0x5e1e63);
        break;
      case _0x4baec1 + "group":
      case _0x4baec1 + "gc":
        {
          if (!_0x1710ba) return _0x1b3106("Only\x20group");
          if (!_0x1be5b6 && !_0xbeeae5) return _0x1b3106(_0x3d5088(0x57d));
          if (!_0x45d818) return _0x1b3106("Only\x20bot\x20admin!!");
          if (_0x42ae18[0x0] === _0x3d5088(0x316) || _0x42ae18[0x0] === "c")
            await _0x291436[_0x3d5088(0x362)](
              _0x12e00d[_0x3d5088(0x3d5)],
              _0x3d5088(0x490)
            )
              [_0x3d5088(0x34a)]((_0x2d424b) => _0x1b3106(_0x3d5088(0x531)))
              ["catch"]((_0x2e0255) => _0x1b3106(String(_0x2e0255)));
          else {
            if (_0x42ae18[0x0] === _0x3d5088(0x252) || _0x42ae18[0x0] === "o")
              await _0x291436[_0x3d5088(0x362)](
                _0x12e00d["chat"],
                _0x3d5088(0x359)
              )
                [_0x3d5088(0x34a)]((_0x266364) => _0x1b3106(_0x3d5088(0x536)))
                [_0x3d5088(0x546)]((_0x52fdd5) => _0x1b3106(String(_0x52fdd5)));
            else _0x1b3106(_0x3d5088(0x566) + _0x36ed63 + _0x3d5088(0x288));
          }
        }
        break;
      case _0x4baec1 + "revoke":
        _0x2c9561(_0x36ed63, _0xaa9e24, _cmd);
        if (!_0x1710ba) return _0x1b3106(_0x3d5088(0x478));
        if (!_0x1be5b6 && !_0xbeeae5) return _0x1b3106(_0x3d5088(0x57d));
        if (!_0x45d818) return _0x1b3106("Only\x20bot\x20admin!!");
        await _0x291436[_0x3d5088(0x513)](_0xdd6e0f)
          ["then"]((_0x3f00ee) => {
            var _0x435e68 = _0x3d5088;
            _0x1b3106(_0x435e68(0x2fd) + _0x3f00ee);
          })
          ["catch"](() => _0x1b3106(_0x3d5088(0x553)));
        break;
      case _0x4baec1 + _0x3d5088(0x348):
        {
          if (!_0xbeeae5 && !_0x48ad87) return;
          _0x291436["groupLeave"](_0x42ae18[0x0] ? _0x42ae18[0x0] : _0xdd6e0f),
            _0x1b3106("Babayo...");
        }
        break;
      case _0x4baec1 + _0x3d5088(0x637):
        {
          _0x2c9561(_0x36ed63, _0xaa9e24, _cmd);
          if (!_0xbeeae5 && !_0x48ad87) return _0x1b3106(_0x3d5088(0x4b8));
          if (!_0x1fe3c5) return _0x1b3106(_0x3d5088(0x21f));
          if (
            !_0x5f1cc8(_0x42ae18[0x0]) &&
            !_0x42ae18[0x0][_0x3d5088(0x24f)](_0x3d5088(0x691))
          )
            return _0x1b3106(_0x3d5088(0x60a));
          let _0x5e663a = _0x42ae18[0x0]["split"](_0x3d5088(0x5d1))[0x1];
          await _0x291436[_0x3d5088(0x373)](_0x5e663a)
            [_0x3d5088(0x34a)]((_0x534778) => _0x1b3106(_0x16c881(_0x534778)))
            [_0x3d5088(0x546)]((_0x50b4a5) => _0x1b3106(_0x16c881(_0x50b4a5)));
        }
        break;
      case _0x4baec1 + "setgrupname":
      case _0x4baec1 + _0x3d5088(0x335):
        _0x2c9561(_0x36ed63, _0xaa9e24, _cmd);
        if (!_0x1710ba) return _0x1b3106(_0x3d5088(0x599));
        if (!_0x1be5b6 && !_0xbeeae5) return _0x1b3106("khusus\x20admin!!");
        if (!_0x45d818) return _0x1b3106("jadikan\x20bot\x20admin!");
        if (!_0x1fe3c5)
          return _0x1b3106(
            "Gunakan\x20dengan\x20cara\x20" +
              comand +
              _0x3d5088(0x4af) +
              comand +
              _0x3d5088(0x378)
          );
        await _0x291436[_0x3d5088(0x5f7)](_0xdd6e0f, _0x1fe3c5)
          ["then"]((_0x8ac5f7) => {
            var _0x11aaf3 = _0x3d5088;
            _0x1b3106(_0x11aaf3(0x5d7));
          })
          [_0x3d5088(0x546)](() =>
            _0x1b3106("ERROR:\x20Kesalahan\x20berfikir:v")
          );
        break;
      case _0x4baec1 + "setdesc":
        _0x2c9561(_0x36ed63, _0xaa9e24, _cmd);
        if (!_0x1710ba) return _0x1b3106(_0x3d5088(0x599));
        if (!_0x1be5b6 && !_0xbeeae5) return _0x1b3106(_0x3d5088(0x2c8));
        if (!_0x45d818) return _0x1b3106(_0x3d5088(0x4cd));
        if (!_0x1fe3c5)
          return _0x1b3106(
            "Gunakan\x20dengan\x20cara\x20" +
              comand +
              _0x3d5088(0x4af) +
              comand +
              "\x20New\x20Description"
          );
        await _0x291436[_0x3d5088(0x34e)](_0xdd6e0f, _0x1fe3c5)
          [_0x3d5088(0x34a)]((_0x1923d0) => {
            var _0x5d8680 = _0x3d5088;
            _0x1b3106(_0x5d8680(0x63b));
          })
          [_0x3d5088(0x546)](() =>
            _0x1b3106("ERROR:\x20Kesalahan\x20berfikir:v")
          );
        break;
      case _0x4baec1 + _0x3d5088(0x60c):
        if (!_0x1710ba) return _0x1b3106(_0x3d5088(0x443));
        if (!_0x1be5b6 && !_0xbeeae5)
          return _0x1b3106("Only\x20group\x20admin");
        if (!_0x45d818) return _0x1b3106("Bot\x20not\x20admin!!");
        if (_0x42ae18[_0x3d5088(0x3c1)] === 0x1)
          return _0x1b3106(_0x3d5088(0x5f0));
        if (_0x42ae18[0x1]["toLowerCase"]() === _0x3d5088(0x1f8)) {
          _0x2c9561(_0x3d5088(0x60c), _0xaa9e24, _cmd);
          if (_0x22f8d1) return _0x1b3106("Udah\x20aktif");
          antilink["push"](_0xdd6e0f),
            fs[_0x3d5088(0x5ef)](
              _0x3d5088(0x1fa),
              JSON[_0x3d5088(0x30f)](antilink, null, 0x2)
            ),
            _0x1b3106(_0x3d5088(0x50a));
        } else {
          if (_0x42ae18[0x1][_0x3d5088(0x4ce)]() === _0x3d5088(0x35d)) {
            _0x2c9561(_0x3d5088(0x60c), _0xaa9e24, _cmd);
            if (!_0x22f8d1) return _0x1b3106(_0x3d5088(0x657));
            (_0xb048e0 = antilink[_0x3d5088(0x3f2)](_0xdd6e0f)),
              antilink[_0x3d5088(0x2e0)](_0xb048e0, 0x1),
              fs[_0x3d5088(0x5ef)](
                _0x3d5088(0x1fa),
                JSON[_0x3d5088(0x30f)](antilink, null, 0x2)
              ),
              _0x1b3106(
                "Successfully\x20Disabling\x20Antilink\x20In\x20This\x20Group"
              );
          } else _0x1b3106("Pilih\x20enable\x20atau\x20disable");
        }
        break;
      case _0x4baec1 + "hijab":
        _0x1b3106(_0x3d5088(0x4c2));
        var _0x1e6fa1 = JSON[_0x3d5088(0x62b)](
            fs["readFileSync"](_0x3d5088(0x36f))
          ),
          _0x38fbdf = _0x20e074(_0x1e6fa1);
        _0x291436[_0x3d5088(0x1fe)](
          _0x12e00d[_0x3d5088(0x3d5)],
          {
            caption: _0x3d5088(0x1e2),
            image: { url: _0x38fbdf[_0x3d5088(0x528)] },
          },
          { quoted: _0x12e00d }
        );
        break;
      case _0x4baec1 + _0x3d5088(0x4ea):
        _0x1b3106(_0x3d5088(0x4c2));
        var _0x1e6fa1 = JSON[_0x3d5088(0x62b)](
            fs["readFileSync"](_0x3d5088(0x271))
          ),
          _0x38fbdf = _0x20e074(_0x1e6fa1);
        _0x291436[_0x3d5088(0x1fe)](
          _0x12e00d[_0x3d5088(0x3d5)],
          { caption: _0x3d5088(0x1e2), image: { url: _0x38fbdf["url"] } },
          { quoted: _0x12e00d }
        );
        break;
      case _0x4baec1 + "japanese":
        _0x1b3106(_0x3d5088(0x4c2));
        var _0x1e6fa1 = JSON[_0x3d5088(0x62b)](
            fs["readFileSync"]("./HostMedia/tiktokpics/japan.json")
          ),
          _0x38fbdf = _0x20e074(_0x1e6fa1);
        _0x291436["sendMessage"](
          _0x12e00d["chat"],
          {
            caption: _0x3d5088(0x1e2),
            image: { url: _0x38fbdf[_0x3d5088(0x528)] },
          },
          { quoted: _0x12e00d }
        );
        break;
      case _0x4baec1 + _0x3d5088(0x5f1):
        _0x1b3106("Wet\x20ngabs");
        var _0x1e6fa1 = JSON[_0x3d5088(0x62b)](
            fs[_0x3d5088(0x4a0)](_0x3d5088(0x377))
          ),
          _0x38fbdf = _0x20e074(_0x1e6fa1);
        _0x291436[_0x3d5088(0x1fe)](
          _0x12e00d[_0x3d5088(0x3d5)],
          {
            caption: _0x3d5088(0x1e2),
            image: { url: _0x38fbdf[_0x3d5088(0x528)] },
          },
          { quoted: _0x12e00d }
        );
        break;
      case _0x4baec1 + _0x3d5088(0x237):
        _0x1b3106(_0x3d5088(0x4c2));
        var _0x1e6fa1 = JSON[_0x3d5088(0x62b)](
            fs[_0x3d5088(0x4a0)](_0x3d5088(0x558))
          ),
          _0x38fbdf = _0x20e074(_0x1e6fa1);
        _0x291436[_0x3d5088(0x1fe)](
          _0x12e00d[_0x3d5088(0x3d5)],
          { caption: _0x3d5088(0x1e2), image: { url: _0x38fbdf["url"] } },
          { quoted: _0x12e00d }
        );
        break;
      case _0x4baec1 + "randomgirl":
        _0x1b3106("Wet\x20ngabs");
        var _0x1e6fa1 = JSON[_0x3d5088(0x62b)](
            fs[_0x3d5088(0x4a0)](_0x3d5088(0x4da))
          ),
          _0x38fbdf = _0x20e074(_0x1e6fa1);
        _0x291436[_0x3d5088(0x1fe)](
          _0x12e00d[_0x3d5088(0x3d5)],
          { caption: "don\x20banh", image: { url: _0x38fbdf["url"] } },
          { quoted: _0x12e00d }
        );
        break;
      case _0x4baec1 + _0x3d5088(0x4ee):
        _0x1b3106(_0x3d5088(0x4c2));
        var _0x1e6fa1 = JSON[_0x3d5088(0x62b)](
            fs["readFileSync"](_0x3d5088(0x309))
          ),
          _0x38fbdf = _0x20e074(_0x1e6fa1);
        _0x291436["sendMessage"](
          _0x12e00d["chat"],
          {
            caption: _0x3d5088(0x1e2),
            image: { url: _0x38fbdf[_0x3d5088(0x528)] },
          },
          { quoted: _0x12e00d }
        );
        break;
      case _0x4baec1 + _0x3d5088(0x564):
        _0x1b3106(_0x3d5088(0x4c2));
        var _0x1e6fa1 = JSON[_0x3d5088(0x62b)](
            fs[_0x3d5088(0x4a0)](_0x3d5088(0x372))
          ),
          _0x38fbdf = _0x20e074(_0x1e6fa1);
        _0x291436[_0x3d5088(0x1fe)](
          _0x12e00d["chat"],
          {
            caption: "don\x20banh",
            image: { url: _0x38fbdf[_0x3d5088(0x528)] },
          },
          { quoted: _0x12e00d }
        );
        break;
      case _0x4baec1 + _0x3d5088(0x534):
        _0x1b3106(_0x3d5088(0x4c2));
        var _0x1e6fa1 = JSON[_0x3d5088(0x62b)](
            fs[_0x3d5088(0x4a0)](_0x3d5088(0x2d4))
          ),
          _0x38fbdf = _0x20e074(_0x1e6fa1);
        _0x291436[_0x3d5088(0x1fe)](
          _0x12e00d["chat"],
          { caption: _0x3d5088(0x1e2), image: { url: _0x38fbdf["url"] } },
          { quoted: _0x12e00d }
        );
        break;
      case _0x4baec1 + _0x3d5088(0x286):
        _0x1b3106(_0x3d5088(0x4c2));
        var _0x1e6fa1 = JSON["parse"](fs[_0x3d5088(0x4a0)](_0x3d5088(0x366))),
          _0x38fbdf = _0x20e074(_0x1e6fa1);
        _0x291436[_0x3d5088(0x1fe)](
          _0x12e00d["chat"],
          {
            caption: _0x3d5088(0x1e2),
            image: { url: _0x38fbdf[_0x3d5088(0x528)] },
          },
          { quoted: _0x12e00d }
        );
        break;
      case _0x4baec1 + "antiwork":
        _0x1b3106("Wet\x20ngabs");
        var _0x1e6fa1 = JSON[_0x3d5088(0x62b)](
            fs["readFileSync"](_0x3d5088(0x5d5))
          ),
          _0x38fbdf = _0x20e074(_0x1e6fa1);
        _0x291436["sendMessage"](
          _0x12e00d["chat"],
          {
            caption: _0x3d5088(0x1e2),
            image: { url: _0x38fbdf[_0x3d5088(0x528)] },
          },
          { quoted: _0x12e00d }
        );
        break;
      case _0x4baec1 + _0x3d5088(0x62a):
        _0x1b3106(_0x3d5088(0x4c2));
        var _0x1e6fa1 = JSON["parse"](fs[_0x3d5088(0x4a0)](_0x3d5088(0x306))),
          _0x38fbdf = _0x20e074(_0x1e6fa1);
        _0x291436[_0x3d5088(0x1fe)](
          _0x12e00d["chat"],
          { caption: _0x3d5088(0x1e2), image: { url: _0x38fbdf["url"] } },
          { quoted: _0x12e00d }
        );
        break;
      case _0x4baec1 + _0x3d5088(0x37c):
        _0x1b3106("Wet\x20ngabs");
        var _0x1e6fa1 = JSON["parse"](fs[_0x3d5088(0x4a0)](_0x3d5088(0x29e))),
          _0x38fbdf = _0x20e074(_0x1e6fa1);
        _0x291436["sendMessage"](
          _0x12e00d["chat"],
          {
            caption: _0x3d5088(0x1e2),
            image: { url: _0x38fbdf[_0x3d5088(0x528)] },
          },
          { quoted: _0x12e00d }
        );
        break;
      case _0x4baec1 + "boneka":
        _0x1b3106(_0x3d5088(0x4c2));
        var _0x1e6fa1 = JSON[_0x3d5088(0x62b)](
            fs[_0x3d5088(0x4a0)](_0x3d5088(0x5dd))
          ),
          _0x38fbdf = _0x20e074(_0x1e6fa1);
        _0x291436[_0x3d5088(0x1fe)](
          _0x12e00d[_0x3d5088(0x3d5)],
          { caption: _0x3d5088(0x1e2), image: { url: _0x38fbdf["url"] } },
          { quoted: _0x12e00d }
        );
        break;
      case _0x4baec1 + "cosplay":
        _0x1b3106("Wet\x20ngabs");
        var _0x1e6fa1 = JSON[_0x3d5088(0x62b)](
            fs[_0x3d5088(0x4a0)](_0x3d5088(0x54d))
          ),
          _0x38fbdf = _0x20e074(_0x1e6fa1);
        _0x291436[_0x3d5088(0x1fe)](
          _0x12e00d["chat"],
          { caption: _0x3d5088(0x1e2), image: { url: _0x38fbdf["url"] } },
          { quoted: _0x12e00d }
        );
        break;
      case _0x4baec1 + _0x3d5088(0x5c7):
        _0x1b3106("Wet\x20ngabs");
        var _0x1e6fa1 = JSON[_0x3d5088(0x62b)](
            fs[_0x3d5088(0x4a0)](_0x3d5088(0x3ce))
          ),
          _0x38fbdf = _0x20e074(_0x1e6fa1);
        _0x291436[_0x3d5088(0x1fe)](
          _0x12e00d[_0x3d5088(0x3d5)],
          {
            caption: _0x3d5088(0x1e2),
            image: { url: _0x38fbdf[_0x3d5088(0x528)] },
          },
          { quoted: _0x12e00d }
        );
        break;
      case _0x4baec1 + "doggo":
        _0x1b3106(_0x3d5088(0x4c2));
        var _0x1e6fa1 = JSON["parse"](fs[_0x3d5088(0x4a0)](_0x3d5088(0x45f))),
          _0x38fbdf = _0x20e074(_0x1e6fa1);
        _0x291436[_0x3d5088(0x1fe)](
          _0x12e00d[_0x3d5088(0x3d5)],
          { caption: _0x3d5088(0x1e2), image: { url: _0x38fbdf["url"] } },
          { quoted: _0x12e00d }
        );
        break;
      case _0x4baec1 + _0x3d5088(0x5cd):
        _0x1b3106("Wet\x20ngabs");
        var _0x1e6fa1 = JSON[_0x3d5088(0x62b)](
            fs["readFileSync"](_0x3d5088(0x323))
          ),
          _0x38fbdf = _0x20e074(_0x1e6fa1);
        _0x291436[_0x3d5088(0x1fe)](
          _0x12e00d[_0x3d5088(0x3d5)],
          { caption: "don\x20banh", image: { url: _0x38fbdf["url"] } },
          { quoted: _0x12e00d }
        );
        break;
      case _0x4baec1 + _0x3d5088(0x639):
        _0x1b3106("Wet\x20ngabs");
        var _0x1e6fa1 = JSON[_0x3d5088(0x62b)](
            fs[_0x3d5088(0x4a0)](_0x3d5088(0x315))
          ),
          _0x38fbdf = _0x20e074(_0x1e6fa1);
        _0x291436[_0x3d5088(0x1fe)](
          _0x12e00d["chat"],
          {
            caption: _0x3d5088(0x1e2),
            image: { url: _0x38fbdf[_0x3d5088(0x528)] },
          },
          { quoted: _0x12e00d }
        );
        break;
      case _0x4baec1 + _0x3d5088(0x5e8):
        _0x1b3106(_0x3d5088(0x4c2));
        var _0x1e6fa1 = JSON[_0x3d5088(0x62b)](
            fs[_0x3d5088(0x4a0)](_0x3d5088(0x5c3))
          ),
          _0x38fbdf = _0x20e074(_0x1e6fa1);
        _0x291436["sendMessage"](
          _0x12e00d["chat"],
          {
            caption: _0x3d5088(0x1e2),
            image: { url: _0x38fbdf[_0x3d5088(0x528)] },
          },
          { quoted: _0x12e00d }
        );
        break;
      case _0x4baec1 + _0x3d5088(0x25c):
        _0x1b3106(_0x3d5088(0x4c2));
        var _0x1e6fa1 = JSON[_0x3d5088(0x62b)](
            fs[_0x3d5088(0x4a0)](_0x3d5088(0x215))
          ),
          _0x38fbdf = _0x20e074(_0x1e6fa1);
        _0x291436[_0x3d5088(0x1fe)](
          _0x12e00d[_0x3d5088(0x3d5)],
          {
            caption: _0x3d5088(0x1e2),
            image: { url: _0x38fbdf[_0x3d5088(0x528)] },
          },
          { quoted: _0x12e00d }
        );
        break;
      case _0x4baec1 + _0x3d5088(0x1cc):
        _0x1b3106(_0x3d5088(0x4c2));
        var _0x1e6fa1 = JSON["parse"](
            fs[_0x3d5088(0x4a0)]("./HostMedia/randompics/car.json")
          ),
          _0x38fbdf = _0x20e074(_0x1e6fa1);
        _0x291436[_0x3d5088(0x1fe)](
          _0x12e00d["chat"],
          {
            caption: _0x3d5088(0x1e2),
            image: { url: _0x38fbdf[_0x3d5088(0x528)] },
          },
          { quoted: _0x12e00d }
        );
        break;
      case _0x4baec1 + "couplepic":
      case _0x4baec1 + _0x3d5088(0x520):
        _0x1b3106(_0x3d5088(0x4c2));
        var _0x1e6fa1 = JSON["parse"](fs[_0x3d5088(0x4a0)](_0x3d5088(0x1cb))),
          _0x38fbdf = _0x20e074(_0x1e6fa1);
        _0x291436[_0x3d5088(0x1fe)](
          _0x12e00d[_0x3d5088(0x3d5)],
          {
            caption: _0x3d5088(0x1e2),
            image: { url: _0x38fbdf[_0x3d5088(0x528)] },
          },
          { quoted: _0x12e00d }
        );
        break;
      case _0x4baec1 + _0x3d5088(0x225):
      case _0x4baec1 + "profilepicture":
        _0x1b3106(_0x3d5088(0x4c2));
        var _0x1e6fa1 = JSON["parse"](fs[_0x3d5088(0x4a0)](_0x3d5088(0x4f9))),
          _0x38fbdf = _0x20e074(_0x1e6fa1);
        _0x291436[_0x3d5088(0x1fe)](
          _0x12e00d["chat"],
          {
            caption: _0x3d5088(0x1e2),
            image: { url: _0x38fbdf[_0x3d5088(0x528)] },
          },
          { quoted: _0x12e00d }
        );
        break;
      case _0x4baec1 + "pubg":
        _0x1b3106("Wet\x20ngabs");
        var _0x1e6fa1 = JSON["parse"](
            fs["readFileSync"]("./HostMedia/randompics/pubg.json")
          ),
          _0x38fbdf = _0x20e074(_0x1e6fa1);
        _0x291436["sendMessage"](
          _0x12e00d["chat"],
          { caption: "don\x20banh", image: { url: _0x38fbdf["url"] } },
          { quoted: _0x12e00d }
        );
        break;
      case _0x4baec1 + _0x3d5088(0x678):
        _0x1b3106(_0x3d5088(0x4c2));
        var _0x1e6fa1 = JSON[_0x3d5088(0x62b)](
            fs[_0x3d5088(0x4a0)](_0x3d5088(0x636))
          ),
          _0x38fbdf = _0x20e074(_0x1e6fa1);
        _0x291436[_0x3d5088(0x1fe)](
          _0x12e00d["chat"],
          {
            caption: "don\x20banh",
            image: { url: _0x38fbdf[_0x3d5088(0x528)] },
          },
          { quoted: _0x12e00d }
        );
        break;
      case _0x4baec1 + _0x3d5088(0x4a2):
        _0x1b3106("Wet\x20ngabs");
        var _0x1e6fa1 = JSON[_0x3d5088(0x62b)](
            fs[_0x3d5088(0x4a0)]("./HostMedia/randompics/ryujin.json")
          ),
          _0x38fbdf = _0x20e074(_0x1e6fa1);
        _0x291436["sendMessage"](
          _0x12e00d[_0x3d5088(0x3d5)],
          {
            caption: _0x3d5088(0x1e2),
            image: { url: _0x38fbdf[_0x3d5088(0x528)] },
          },
          { quoted: _0x12e00d }
        );
        break;
      case _0x4baec1 + _0x3d5088(0x61f):
        _0x1b3106(_0x3d5088(0x4c2));
        var _0x1e6fa1 = JSON[_0x3d5088(0x62b)](
            fs[_0x3d5088(0x4a0)]("./HostMedia/randompics/ulzzangboy.json")
          ),
          _0x38fbdf = _0x20e074(_0x1e6fa1);
        _0x291436[_0x3d5088(0x1fe)](
          _0x12e00d[_0x3d5088(0x3d5)],
          { caption: _0x3d5088(0x1e2), image: { url: _0x38fbdf["url"] } },
          { quoted: _0x12e00d }
        );
        break;
      case _0x4baec1 + "ulzzanggirl":
        _0x1b3106("Wet\x20ngabs");
        var _0x1e6fa1 = JSON[_0x3d5088(0x62b)](
            fs[_0x3d5088(0x4a0)]("./HostMedia/randompics/ulzzanggirl.json")
          ),
          _0x38fbdf = _0x20e074(_0x1e6fa1);
        _0x291436[_0x3d5088(0x1fe)](
          _0x12e00d[_0x3d5088(0x3d5)],
          {
            caption: _0x3d5088(0x1e2),
            image: { url: _0x38fbdf[_0x3d5088(0x528)] },
          },
          { quoted: _0x12e00d }
        );
        break;
      case _0x4baec1 + "wallml":
      case _0x4baec1 + _0x3d5088(0x30e):
      case _0x4baec1 + "mobilelegend":
        _0x1b3106(_0x3d5088(0x4c2));
        var _0x1e6fa1 = JSON["parse"](fs[_0x3d5088(0x4a0)](_0x3d5088(0x670))),
          _0x38fbdf = _0x20e074(_0x1e6fa1);
        _0x291436["sendMessage"](
          _0x12e00d[_0x3d5088(0x3d5)],
          {
            caption: _0x3d5088(0x1e2),
            image: { url: _0x38fbdf[_0x3d5088(0x528)] },
          },
          { quoted: _0x12e00d }
        );
        break;
      case _0x4baec1 + _0x3d5088(0x52f):
      case _0x4baec1 + _0x3d5088(0x302):
        _0x1b3106(_0x3d5088(0x4c2));
        var _0x1e6fa1 = JSON[_0x3d5088(0x62b)](
            fs[_0x3d5088(0x4a0)](_0x3d5088(0x3b5))
          ),
          _0x38fbdf = _0x20e074(_0x1e6fa1);
        _0x291436[_0x3d5088(0x1fe)](
          _0x12e00d[_0x3d5088(0x3d5)],
          {
            caption: _0x3d5088(0x1e2),
            image: { url: _0x38fbdf[_0x3d5088(0x528)] },
          },
          { quoted: _0x12e00d }
        );
        break;
      case _0x4baec1 + _0x3d5088(0x4f1):
      case _0x4baec1 + _0x3d5088(0x568):
      case _0x4baec1 + _0x3d5088(0x549):
      case _0x4baec1 + "advanceglow":
      case _0x4baec1 + _0x3d5088(0x1fc):
      case _0x4baec1 + _0x3d5088(0x56b):
      case _0x4baec1 + _0x3d5088(0x29b):
      case _0x4baec1 + _0x3d5088(0x57a):
      case _0x4baec1 + _0x3d5088(0x5b7):
      case _0x4baec1 + _0x3d5088(0x571):
      case _0x4baec1 + "holographic":
      case _0x4baec1 + _0x3d5088(0x4e3):
      case _0x4baec1 + _0x3d5088(0x530):
      case _0x4baec1 + _0x3d5088(0x673):
      case _0x4baec1 + _0x3d5088(0x544):
      case _0x4baec1 + _0x3d5088(0x2b3):
      case _0x4baec1 + "halloween":
      case _0x4baec1 + "jokerlogo":
      case _0x4baec1 + _0x3d5088(0x310):
      case _0x4baec1 + "natureleaves":
      case _0x4baec1 + _0x3d5088(0x1bd):
      case _0x4baec1 + _0x3d5088(0x390):
      case _0x4baec1 + "strawberry":
      case _0x4baec1 + "box3d":
      case _0x4baec1 + _0x3d5088(0x2b8):
      case _0x4baec1 + "breakwall":
      case _0x4baec1 + "icecold":
      case _0x4baec1 + _0x3d5088(0x221):
      case _0x4baec1 + _0x3d5088(0x2d8):
      case _0x4baec1 + "summersand":
      case _0x4baec1 + _0x3d5088(0x350):
      case _0x4baec1 + _0x3d5088(0x3c2):
        _0x2c9561(_0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1], _0xaa9e24, _cmd);
        if (isLimit(_0xaa9e24, _0x48ad87, _0xbeeae5, limitCount, limit))
          return _0x1b3106(_0x3d5088(0x2f1) + _0x4baec1 + _0x3d5088(0x414));
        if (!_0x1fe3c5)
          return _0x1b3106(
            _0x3d5088(0x334) + (_0x4baec1 + _0x36ed63) + _0x3d5088(0x5fd)
          );
        if (_0x42ae18[_0x3d5088(0x3c1)] == 0x0)
          return _0x1b3106("Example:\x20" + _0x36ed63 + _0x3d5088(0x66c));
        _0x291436[_0x3d5088(0x1fe)](_0xdd6e0f, {
          image: {
            url:
              _0x3d5088(0x476) +
              _0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1] +
              _0x3d5088(0x59b) +
              _0x1fe3c5 +
              _0x3d5088(0x2ad) +
              global["lolkey"],
          },
        }),
          limitAdd(_0xaa9e24, limit);
        break;
      case _0x4baec1 + _0x3d5088(0x1ce):
        {
          if (!_0xbeeae5) return _0x1b3106(_0x3d5088(0x3d3));
          _0x2c9561(_0x3d5088(0x1ce), _0xaa9e24, _cmd),
            (_0x291436[_0x3d5088(0x4c9)] = "self"),
            _0x1b3106(_0x3d5088(0x29c));
        }
        break;
      case _0x4baec1 + _0x3d5088(0x1f5):
      case _0x4baec1 + _0x3d5088(0x4e2):
        {
          if (!_0xbeeae5) return _0x1b3106("Owner\x20only!!");
          _0x2c9561(_0x3d5088(0x4e2), _0xaa9e24, _cmd),
            (_0x291436[_0x3d5088(0x4c9)] = "public"),
            _0x1b3106(_0x3d5088(0x4d1));
        }
        break;
      case _0x4baec1 + _0x3d5088(0x408):
        if (!_0xbeeae5) return _0x1b3106(_0x3d5088(0x3d3));
        if (_0x42ae18["length"] < 0x2) return _0x1b3106(_0x3d5088(0x59d));
        if (_0x1fe3c5 === "multi")
          _0x2c9561(_0x3d5088(0x408), _0xaa9e24, _cmd),
            (_0x291436[_0x3d5088(0x200)] = !![]),
            _0x1b3106(_0x3d5088(0x47c) + _0x1fe3c5);
        else
          _0x1fe3c5 === _0x3d5088(0x1a1)
            ? (_0x2c9561(_0x3d5088(0x408), _0xaa9e24, _cmd),
              (_0x291436["multi"] = ![]),
              (_0x291436["nopref"] = !![]),
              _0x1b3106(_0x3d5088(0x47c) + _0x1fe3c5))
            : (_0x2c9561(_0x3d5088(0x408), _0xaa9e24, _cmd),
              (_0x291436[_0x3d5088(0x200)] = ![]),
              (_0x291436[_0x3d5088(0x1a1)] = ![]),
              (_0x291436[_0x3d5088(0x5f2)] = "" + _0x1fe3c5),
              _0x1b3106(_0x3d5088(0x47c) + _0x1fe3c5));
        break;
      case _0x4baec1 + _0x3d5088(0x3ab):
        {
          _0x2c9561(_0x36ed63["split"](_0x4baec1)[0x1], _0xaa9e24, _cmd);
          if (!_0xbeeae5) return _0x1b3106("owner");
          if (_0x2e189f || _0x11f65b) {
            var _0x17c789 = await _0x5856fd("image", _0x3d5088(0x2e6));
            const { img: _0x8a7b7a } = await _0x16759c(_0x17c789);
            await _0x291436["query"]({
              tag: "iq",
              attrs: { to: _0x480dc7, type: "set", xmlns: _0x3d5088(0x4d4) },
              content: [
                {
                  tag: _0x3d5088(0x4f8),
                  attrs: { type: "image" },
                  content: _0x8a7b7a,
                },
              ],
            }),
              fs[_0x3d5088(0x2c4)](_0x17c789),
              _0x1b3106("Sukses");
          } else _0x1b3106(_0x3d5088(0x33c) + _0x36ed63 + _0x3d5088(0x1e9));
        }
        break;
      case _0x4baec1 + "addakses":
        if (!_0x1fe3c5) return _0x1b3106(_0x3d5088(0x552));
        if (!_0xbeeae5) return _0x1b3106(_0x3d5088(0x1b3));
        evalOwn[_0x3d5088(0x23d)](_0x1fe3c5),
          evalOwns[_0x3d5088(0x23d)](_0x1fe3c5 + _0x3d5088(0x646)),
          _0x1b3106(_0x3d5088(0x2f9));
        break;
      case _0x4baec1 + _0x3d5088(0x5f5):
        _0x2c9561(_0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1], _0xaa9e24, _cmd);
        if (!_0xbeeae5) return _0x1b3106(_0x3d5088(0x1b3));
        if (_0x42ae18[_0x3d5088(0x3c1)] < 0x2)
          return _0x1b3106(
            "Penggunaan\x20:\x0a*" +
              _0x4baec1 +
              _0x3d5088(0x4c6) +
              _0x4baec1 +
              "addprem*\x20nomor\x20waktu\x0a\x0aContoh\x20:\x20" +
              _0x36ed63 +
              _0x3d5088(0x626)
          );
        if (!_0x42ae18[0x2]) return _0x1b3106(_0x3d5088(0x3a5));
        if (_0x12e00d["mentioned"][_0x3d5088(0x3c1)] !== 0x0)
          _prem[_0x3d5088(0x5c0)](
            _0x12e00d["mentioned"][0x0],
            _0x42ae18[0x2],
            premium
          ),
            _0x1b3106(_0x3d5088(0x1f6));
        else {
          var _0x1ac475 = await _0x291436[_0x3d5088(0x3fe)](
            _0x42ae18[0x1] + "@s.whatsapp.net"
          );
          if (_0x1ac475[_0x3d5088(0x3c1)] == 0x0)
            return _0x1b3106(_0x3d5088(0x524));
          _prem[_0x3d5088(0x5c0)](
            _0x42ae18[0x1] + _0x3d5088(0x646),
            _0x42ae18[0x2],
            premium
          ),
            _0x1b3106(_0x3d5088(0x1f6));
        }
        break;
      case _0x4baec1 + "delprem":
        if (!_0xbeeae5) return _0x1b3106(_0x3d5088(0x1b3));
        if (_0x42ae18[_0x3d5088(0x3c1)] < 0x2)
          return _0x1b3106(
            _0x3d5088(0x5c4) +
              _0x4baec1 +
              _0x3d5088(0x54f) +
              _0x4baec1 +
              _0x3d5088(0x35f)
          );
        if (_0x12e00d[_0x3d5088(0x369)]["length"] !== 0x0)
          premium[_0x3d5088(0x2e0)](
            _prem[_0x3d5088(0x1c8)](_0x12e00d[_0x3d5088(0x369)][0x0], premium),
            0x1
          ),
            fs[_0x3d5088(0x5ef)](
              "./database/premium.json",
              JSON[_0x3d5088(0x30f)](premium)
            ),
            _0x1b3106(_0x3d5088(0x453));
        else {
          var _0x3c75db = await _0x291436[_0x3d5088(0x50c)](
            _0x42ae18[0x1] + _0x3d5088(0x646)
          );
          if (_0x3c75db[_0x3d5088(0x3c1)] == 0x0)
            return _0x1b3106(_0x3d5088(0x524));
          premium[_0x3d5088(0x2e0)](
            _prem[_0x3d5088(0x1c8)](_0x42ae18[0x1] + _0x3d5088(0x646), premium),
            0x1
          ),
            fs[_0x3d5088(0x5ef)](
              _0x3d5088(0x242),
              JSON[_0x3d5088(0x30f)](premium)
            ),
            _0x1b3106(_0x3d5088(0x453));
        }
        break;
      case _0x4baec1 + "art":
      case _0x4baec1 + _0x3d5088(0x562):
      case _0x4baec1 + _0x3d5088(0x62d):
      case _0x4baec1 + _0x3d5088(0x449):
      case _0x4baec1 + "elaina":
      case _0x4baec1 + _0x3d5088(0x327):
      case _0x4baec1 + "elf":
      case _0x4baec1 + _0x3d5088(0x504):
      case _0x4baec1 + _0x3d5088(0x51c):
      case _0x4baec1 + _0x3d5088(0x5dc):
      case _0x4baec1 + _0x3d5088(0x247):
      case _0x4baec1 + _0x3d5088(0x62f):
      case _0x4baec1 + _0x3d5088(0x444):
      case _0x4baec1 + _0x3d5088(0x5bc):
      case _0x4baec1 + "sagiri":
      case _0x4baec1 + "shinobu":
      case _0x4baec1 + "megumin":
      case _0x4baec1 + _0x3d5088(0x2ce):
      case _0x4baec1 + _0x3d5088(0x597):
        _0x2c9561(_0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1], _0xaa9e24, _cmd);
        if (isLimit(_0xaa9e24, _0x48ad87, _0xbeeae5, limitCount, limit))
          return _0x1b3106(_0x3d5088(0x2f1) + _0x4baec1 + _0x3d5088(0x414));
        let _0x41668e = _0x36ed63["split"](_0x4baec1);
        _0x291436["sendMessage"](_0xdd6e0f, {
          image: { url: _0x3d5088(0x58e) + _0x41668e[0x1] + _0x3d5088(0x4bc) },
        }),
          limitAdd(_0xaa9e24, limit);
        break;
      case _0x4baec1 + _0x3d5088(0x3cd):
      case _0x4baec1 + _0x3d5088(0x3a6):
        _0x2c9561(_0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1], _0xaa9e24, _cmd);
        if (isLimit(_0xaa9e24, _0x48ad87, _0xbeeae5, limitCount, limit))
          return _0x1b3106(_0x3d5088(0x2f1) + _0x4baec1 + _0x3d5088(0x414));
        if (_0x42ae18["length"] < 0x2)
          return _0x1b3106(
            _0x3d5088(0x275) +
              _0x36ed63 +
              _0x3d5088(0x38a) +
              _0x36ed63 +
              _0x3d5088(0x2a2) +
              _0x36ed63 +
              _0x3d5088(0x36b) +
              _0x36ed63 +
              _0x3d5088(0x5c6)
          );
        _0x1b3106(_0x3d5088(0x517));
        var _0x23cef7;
        if (_0x1fe3c5["includes"]("--"))
          _0x23cef7 = _0x1fe3c5[_0x3d5088(0x648)]("--")[0x1];
        pinterest(_0x1fe3c5[_0x3d5088(0x644)]("--" + _0x23cef7, ""))[
          _0x3d5088(0x34a)
        ](async (_0x1a889b) => {
          var _0x3e0e8d = _0x3d5088;
          if (_0x1fe3c5[_0x3e0e8d(0x24f)]("--")) {
            _0x1a889b[_0x3e0e8d(0x4cb)][_0x3e0e8d(0x3c1)] < _0x23cef7 &&
              ((_0x23cef7 = _0x1a889b["result"]["length"]),
              _0x1b3106(
                _0x3e0e8d(0x1a7) +
                  _0x1a889b[_0x3e0e8d(0x4cb)][_0x3e0e8d(0x3c1)] +
                  _0x3e0e8d(0x48f)
              ));
            for (let _0x4f845c = 0x0; _0x4f845c < _0x23cef7; _0x4f845c++) {
              _0x291436[_0x3e0e8d(0x1fe)](_0xdd6e0f, {
                image: { url: _0x1a889b[_0x3e0e8d(0x4cb)][_0x4f845c] },
                caption: _0x3e0e8d(0x437) + _0x1fe3c5 + "_",
              });
            }
            limitAdd(_0xaa9e24, limit);
          } else
            _0x291436[_0x3e0e8d(0x1fe)](
              _0xdd6e0f,
              {
                caption: _0x3e0e8d(0x1ff) + _0x1fe3c5,
                image: { url: _0x20e074(_0x1a889b[_0x3e0e8d(0x4cb)]) },
              },
              { quoted: _0x12e00d }
            ),
              limitAdd(_0xaa9e24, limit);
        });
        break;
      case _0x4baec1 + "bc":
      case _0x4baec1 + _0x3d5088(0x1fb):
        if (!_0xbeeae5) return _0x1b3106(_0x3d5088(0x33e));
        if (_0x42ae18[_0x3d5088(0x3c1)] < 0x2)
          return _0x1b3106(_0x3d5088(0x38e));
        var _0x1bb554 = await _0x23b2d7["chats"][_0x3d5088(0x42f)]();
        for (let _0x4aedda of _0x1bb554) {
          _0x291436["sendMessage"](_0x4aedda["id"], {
            text:
              _0x3d5088(0x249) +
              global["namabot"] +
              _0x3d5088(0x60b) +
              _0x1fe3c5,
            contextInfo: {
              externalAdReply: {
                title: _0x3d5088(0x300),
                body: _0x3d5088(0x629),
                showAdAttribution: !![],
              },
            },
          }),
            await func[_0x3d5088(0x5ba)](0x3e8);
        }
        break;
      case _0x4baec1 + _0x3d5088(0x5e5):
      case _0x4baec1 + "broadcastuser":
        if (!_0xbeeae5) return _0x1b3106(_0x3d5088(0x33e));
        if (_0x42ae18["length"] < 0x2) return _0x1b3106(_0x3d5088(0x38e));
        for (let _0x4a4ecd of pendaftar) {
          _0x291436[_0x3d5088(0x1fe)](_0x4a4ecd, {
            text:
              _0x3d5088(0x454) +
              global[_0x3d5088(0x4f7)] +
              _0x3d5088(0x263) +
              _0x1fe3c5,
            contextInfo: {
              externalAdReply: {
                title: "WhyDepin",
                body: _0x3d5088(0x629),
                showAdAttribution: !![],
              },
            },
          }),
            await func[_0x3d5088(0x5ba)](0x2710);
        }
        break;
      case _0x4baec1 + _0x3d5088(0x472):
      case _0x4baec1 + _0x3d5088(0x407):
        _0x2c9561(_0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1], _0xaa9e24, _cmd);
        if (!_0x48ad87)
          return _0x1b3106(
            "Kamu\x20bukan\x20user\x20premium,\x20kirim\x20perintah\x20*" +
              _0x4baec1 +
              "daftarprem*\x20untuk\x20membeli\x20premium"
          );
        if (_0xbeeae5) return _0x1b3106(_0x3d5088(0x42a));
        if (_prem[_0x3d5088(0x3b6)](_0xaa9e24, premium) == _0x3d5088(0x333))
          return _0x1b3106(_0x3d5088(0x333));
        let _0x29727c = ms(
            _prem[_0x3d5088(0x3b6)](_0xaa9e24, premium) - Date["now"]()
          ),
          _0x4e1384 =
            "*Expire\x20:*\x20" +
            _0x29727c[_0x3d5088(0x5e2)] +
            _0x3d5088(0x477) +
            _0x29727c[_0x3d5088(0x3c3)] +
            _0x3d5088(0x276) +
            _0x29727c[_0x3d5088(0x3d7)] +
            _0x3d5088(0x4df);
        _0x1b3106(_0x4e1384);
        break;
      case _0x4baec1 + _0x3d5088(0x433):
        _0x2c9561(_0x36ed63["split"](_0x4baec1)[0x1], _0xaa9e24, _cmd);
        let _0x49c96d =
            _0x3d5088(0x2f4) + premium[_0x3d5088(0x3c1)] + "\x0a\x0a",
          _0x28b8ea = [];
        for (let _0x26beca of premium) {
          _0x28b8ea["push"](_0x26beca["id"]),
            (_0x49c96d +=
              _0x3d5088(0x353) +
              _0x26beca["id"][_0x3d5088(0x648)]("@")[0x0] +
              "\x0a");
          if (_0x26beca[_0x3d5088(0x40d)] === _0x3d5088(0x333)) {
            let _0xc6a2d8 = _0x3d5088(0x333);
            _0x49c96d += "*Expire\x20:*\x20PERMANENT\x0a\x0a";
          } else {
            let _0x3ae4eb = ms(
              _0x26beca[_0x3d5088(0x40d)] - Date[_0x3d5088(0x5eb)]()
            );
            _0x49c96d +=
              "*Expire\x20:*\x20" +
              _0x3ae4eb[_0x3d5088(0x5e2)] +
              "\x20day(s)\x20" +
              _0x3ae4eb[_0x3d5088(0x3c3)] +
              _0x3d5088(0x276) +
              _0x3ae4eb[_0x3d5088(0x3d7)] +
              "\x20minute(s)\x20" +
              _0x3ae4eb[_0x3d5088(0x2e3)] +
              _0x3d5088(0x4e5);
          }
        }
        _0x357397(_0x49c96d, _0x28b8ea, !![]);
        break;
      case _0x4baec1 + _0x3d5088(0x3ee):
        {
          _0x2c9561(
            _0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1],
            _0xaa9e24,
            _cmd
          ),
            balance["sort"]((_0xcb607c, _0x20b59a) =>
              _0xcb607c["balance"] < _0x20b59a["balance"] ? 0x1 : -0x1
            );
          let _0x16f235 = "*──\x20「\x20TOP\x20BALANCE\x20」\x20──*\x0a\x0a",
            _0x3c9c2f = [];
          var _0x261e35 = 0xa;
          if (balance[_0x3d5088(0x3c1)] < 0xa) _0x261e35 = balance["length"];
          for (let _0x5c0f09 = 0x0; _0x5c0f09 < _0x261e35; _0x5c0f09++) {
            (_0x16f235 +=
              _0x5c0f09 +
              0x1 +
              ".\x20@" +
              balance[_0x5c0f09]["id"]["split"]("@")[0x0] +
              _0x3d5088(0x49c) +
              balance[_0x5c0f09]["balance"] +
              "\x0a\x0a"),
              _0x3c9c2f[_0x3d5088(0x23d)](balance[_0x5c0f09]["id"]);
          }
          _0x357397(_0x16f235, _0x3c9c2f, !![]);
        }
        break;
      case _0x4baec1 + _0x3d5088(0x3b2):
      case _0x4baec1 + _0x3d5088(0x402):
        {
          _0x2c9561(
            _0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1],
            _0xaa9e24,
            _cmd
          );
          if (_0x42ae18["length"] < 0x2)
            return _0x1b3106(_0x3d5088(0x428) + _0x4baec1 + _0x3d5088(0x540));
          if (_0x42ae18[0x1][_0x3d5088(0x24f)]("-"))
            return _0x1b3106(_0x3d5088(0x68f));
          if (isNaN(_0x42ae18[0x1])) return _0x1b3106(_0x3d5088(0x4b0));
          if (_0x42ae18[0x1][_0x3d5088(0x4ce)]() === "infinity")
            return _0x1b3106("Yahaha\x20saya\x20ndak\x20bisa\x20di\x20tipu");
          let _0x31adfb = Number(parseInt(_0x42ae18[0x1]) * 0x96);
          if (getBalance(_0xaa9e24, balance) < _0x31adfb)
            return _0x1b3106(_0x3d5088(0x488));
          kurangBalance(_0xaa9e24, _0x31adfb, balance),
            givegame(_0xaa9e24, parseInt(_0x42ae18[0x1]), glimit),
            _0x1b3106(
              _0x5a45e1(
                "Pembeliaan\x20game\x20limit\x20sebanyak\x20" +
                  _0x42ae18[0x1] +
                  _0x3d5088(0x532) +
                  getBalance(_0xaa9e24, balance) +
                  _0x3d5088(0x355) +
                  cekGLimit(_0xaa9e24, gcount, glimit) +
                  "/" +
                  gcount
              )
            );
        }
        break;
      case _0x4baec1 + "buylimit":
        {
          _0x2c9561(
            _0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1],
            _0xaa9e24,
            _cmd
          );
          if (_0x42ae18[_0x3d5088(0x3c1)] < 0x2)
            return _0x1b3106(_0x3d5088(0x428) + _0x4baec1 + _0x3d5088(0x51a));
          if (_0x42ae18[0x1][_0x3d5088(0x24f)]("-"))
            return _0x1b3106(_0x3d5088(0x68f));
          if (isNaN(_0x42ae18[0x1])) return _0x1b3106(_0x3d5088(0x4b0));
          if (_0x42ae18[0x1][_0x3d5088(0x4ce)]() === _0x3d5088(0x4be))
            return _0x1b3106("Yahaha\x20saya\x20ndak\x20bisa\x20di\x20tipu");
          let _0x4fdf90 = Number(parseInt(_0x42ae18[0x1]) * 0x96);
          if (getBalance(_0xaa9e24, balance) < _0x4fdf90)
            return _0x1b3106(_0x3d5088(0x488));
          kurangBalance(_0xaa9e24, _0x4fdf90, balance),
            giveLimit(_0xaa9e24, parseInt(_0x42ae18[0x1]), limit),
            _0x1b3106(
              _0x5a45e1(
                _0x3d5088(0x5de) +
                  _0x42ae18[0x1] +
                  "\x20berhasil\x0a\x0aSisa\x20Balance\x20:\x20$" +
                  getBalance(_0xaa9e24, balance) +
                  _0x3d5088(0x401) +
                  getLimit(_0xaa9e24, limitCount, limit) +
                  "/" +
                  limitCount
              )
            );
        }
        break;
      case _0x4baec1 + _0x3d5088(0x269):
      case _0x4baec1 + "tf":
        {
          _0x2c9561(
            _0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1],
            _0xaa9e24,
            _cmd
          );
          if (_0x42ae18[_0x3d5088(0x3c1)] < 0x2)
            return _0x1b3106(
              _0x3d5088(0x428) +
                _0x36ed63 +
                "*\x20@tag\x20nominal\x0aContoh\x20:\x20" +
                _0x36ed63 +
                _0x3d5088(0x27b)
            );
          if (_0x12e00d[_0x3d5088(0x369)][_0x3d5088(0x3c1)] == 0x0)
            return _0x1b3106(
              "Tag\x20orang\x20yang\x20ingin\x20di\x20transfer\x20balance"
            );
          if (!_0x42ae18[0x2]) return _0x1b3106("Masukkan\x20nominal\x20nya!");
          if (isNaN(_0x42ae18[0x2])) return _0x1b3106(_0x3d5088(0x261));
          if (_0x42ae18[0x2]["toLowerCase"]() === _0x3d5088(0x4be))
            return _0x1b3106("Yahaha\x20saya\x20ndak\x20bisa\x20di\x20tipu");
          if (_0x42ae18[0x2][_0x3d5088(0x24f)]("-"))
            return _0x1b3106("Jangan\x20menggunakan\x20-");
          var _0xb048e0 = getBalance(_0xaa9e24, balance);
          if (_0xb048e0 < _0x42ae18[0x2] || _0xb048e0 == _0x3d5088(0x1ae))
            return _0x1b3106(
              _0x3d5088(0x21c) +
                _0x42ae18[0x2] +
                ",\x20Kumpulkan\x20Terlebih\x20Dahulu\x0aKetik\x20" +
                _0x4baec1 +
                _0x3d5088(0x547)
            );
          kurangBalance(_0xaa9e24, parseInt(_0x42ae18[0x2]), balance),
            addBalance(
              _0x12e00d[_0x3d5088(0x369)][0x0],
              parseInt(_0x42ae18[0x2]),
              balance
            ),
            _0x1b3106(
              _0x3d5088(0x44c) +
                _0x42ae18[0x2] +
                _0x3d5088(0x32b) +
                _0x12e00d[_0x3d5088(0x369)][0x0][_0x3d5088(0x648)]("@")[0x0]
            );
        }
        break;
      case _0x4baec1 + _0x3d5088(0x251):
      case _0x4baec1 + "balance":
      case _0x4baec1 + _0x3d5088(0x64a):
      case _0x4baec1 + _0x3d5088(0x439):
        _0x2c9561(_0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1], _0xaa9e24, _cmd);
        if (_0x12e00d[_0x3d5088(0x369)][_0x3d5088(0x3c1)] !== 0x0) {
          var _0x490350 = ownerNumber[_0x3d5088(0x24f)](
              _0x12e00d[_0x3d5088(0x369)][0x0]
            ),
            _0x46c729 = _0x490350
              ? !![]
              : _prem[_0x3d5088(0x2cb)](
                  _0x12e00d[_0x3d5088(0x369)][0x0],
                  premium
                ),
            _0xb01cbb = _0x46c729 ? gcounti[_0x3d5088(0x594)] : gcounti["user"],
            _0x5dd0f2 =
              "" +
              getLimit(_0x12e00d[_0x3d5088(0x369)][0x0], limitCount, limit);
          _0x1b3106(
            _0x3d5088(0x3f8) +
              (_prem[_0x3d5088(0x2cb)](_0x12e00d["mentioned"][0x0], premium)
                ? _0x3d5088(0x5b0)
                : _0x5dd0f2) +
              "/" +
              limitCount +
              "\x0aLimit\x20Game\x20:\x20" +
              cekGLimit(_0x12e00d["mentioned"][0x0], gcount, glimit) +
              "/" +
              _0xb01cbb +
              _0x3d5088(0x601) +
              getBalance(_0x12e00d[_0x3d5088(0x369)][0x0], balance) +
              "\x0a\x0aKamu\x20dapat\x20membeli\x20limit\x20dengan\x20" +
              _0x4baec1 +
              _0x3d5088(0x469) +
              _0x4baec1 +
              _0x3d5088(0x65a)
          );
        } else {
          var _0x4968f5 =
            getLimit(_0xaa9e24, limitCount, limit) + "/" + limitCount;
          _0x1b3106(
            _0x3d5088(0x3f8) +
              (_0x48ad87 ? _0x3d5088(0x5b0) : _0x4968f5) +
              "\x0aLimit\x20Game\x20:\x20" +
              cekGLimit(_0xaa9e24, gcount, glimit) +
              "/" +
              gcount +
              "\x0aBalance\x20:\x20$" +
              getBalance(_0xaa9e24, balance) +
              _0x3d5088(0x624) +
              _0x4baec1 +
              _0x3d5088(0x469) +
              _0x4baec1 +
              _0x3d5088(0x65a)
          );
        }
        break;
      case _0x4baec1 + _0x3d5088(0x5a2):
        {
          _0x2c9561(
            _0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1],
            _0xaa9e24,
            _cmd
          );
          if (_0x1710ba) return _0x1b3106(_0x3d5088(0x30a));
          (this[_0x3d5088(0x5a2)] = this[_0x3d5088(0x5a2)]
            ? this[_0x3d5088(0x5a2)]
            : {}),
            (txtt =
              "_*[Welcome\x20To\x20Anonymous\x20Chat]*_\x0a\x0a_*[START]:*_\x20" +
              _0x4baec1 +
              "start\x0a_Looking\x20for\x20a\x20partner\x20to\x20connect\x20between\x20room\x20one\x20and\x20room\x20two_\x0a\x0a_*[LEAVE]:*_\x20" +
              _0x4baec1 +
              _0x3d5088(0x52b) +
              _0x4baec1 +
              _0x3d5088(0x4d5)),
            _0x291436[_0x3d5088(0x1fe)](
              _0xdd6e0f,
              {
                text: txtt,
                contextInfo: {
                  externalAdReply: {
                    title: _0x3d5088(0x4ca),
                    body: _0x3d5088(0x629),
                    thumbnailUrl: _0x3d5088(0x412),
                    sourceUrl: _0x3d5088(0x525),
                    mediaType: 0x1,
                    showAdAttribution: !![],
                    renderLargerThumbnail: !![],
                  },
                },
              },
              { quoted: _0x12e00d }
            );
        }
        break;
      case _0x4baec1 + _0x3d5088(0x643):
      case _0x4baec1 + "leave": {
        if (_0x1710ba) return _0x1b3106(_0x3d5088(0x30a));
        this[_0x3d5088(0x5a2)] = this[_0x3d5088(0x5a2)]
          ? this[_0x3d5088(0x5a2)]
          : {};
        let _0x223595 = Object[_0x3d5088(0x304)](this[_0x3d5088(0x5a2)])[
          _0x3d5088(0x284)
        ]((_0x21e5f9) => _0x21e5f9[_0x3d5088(0x493)](_0xaa9e24));
        if (!_0x223595) {
          await _0x32ba2d(_0x12e00d["chat"], _0x3d5088(0x551));
          throw ![];
        }
        _0x1b3106("_Ok_");
        let _0xd05d8f = _0x223595[_0x3d5088(0x364)](_0xaa9e24);
        if (_0xd05d8f)
          await _0x244142(_0xd05d8f, "_*Partner\x20meninggalkan\x20chat..*_");
        delete this[_0x3d5088(0x5a2)][_0x223595["id"]];
        if (_0x36ed63 === _0x3d5088(0x438)) break;
      }
      case _0x4baec1 + _0x3d5088(0x66e):
      case _0x4baec1 + _0x3d5088(0x492): {
        if (isLimit(_0xaa9e24, _0x48ad87, _0xbeeae5, limitCount, limit))
          return _0x1b3106(_0x3d5088(0x2f1) + _0x4baec1 + _0x3d5088(0x414));
        if (_0x1710ba) return _0x1b3106(_0x3d5088(0x30a));
        this["anonymous"] = this[_0x3d5088(0x5a2)]
          ? this[_0x3d5088(0x5a2)]
          : {};
        if (
          Object[_0x3d5088(0x304)](this[_0x3d5088(0x5a2)])[_0x3d5088(0x284)](
            (_0x7aacc4) => _0x7aacc4["check"](_0xaa9e24)
          )
        ) {
          await _0x32ba2d(_0x12e00d[_0x3d5088(0x3d5)], _0x3d5088(0x1ec));
          throw ![];
        }
        let _0x74e34c = Object["values"](this[_0x3d5088(0x5a2)])["find"](
          (_0x485d4e) =>
            _0x485d4e[_0x3d5088(0x1d4)] === "WAITING" &&
            !_0x485d4e["check"](_0xaa9e24)
        );
        if (_0x74e34c)
          await _0x32ba2d(_0x74e34c["a"], _0x3d5088(0x600)),
            (_0x74e34c["b"] = _0xaa9e24),
            (_0x74e34c[_0x3d5088(0x1d4)] = "CHATTING"),
            await _0x32ba2d(_0x74e34c["b"], "_*Partner\x20Ditemukan!!*_");
        else {
          let _0x2d1ddf = +new Date();
          (this[_0x3d5088(0x5a2)][_0x2d1ddf] = {
            id: _0x2d1ddf,
            a: _0xaa9e24,
            b: "",
            state: _0x3d5088(0x4a3),
            check: function (_0x2625cf = "") {
              var _0x30c7b9 = _0x3d5088;
              return [this["a"], this["b"]][_0x30c7b9(0x24f)](_0x2625cf);
            },
            other: function (_0x36c9fd = "") {
              return _0x36c9fd === this["a"]
                ? this["b"]
                : _0x36c9fd === this["b"]
                ? this["a"]
                : "";
            },
          }),
            await _0x32ba2d(_0x12e00d[_0x3d5088(0x3d5)], _0x3d5088(0x25f));
        }
        limitAdd(_0xaa9e24, limit);
        break;
      }
      case _0x4baec1 + _0x3d5088(0x2e1):
      case _0x4baec1 + "lanjut": {
        if (isLimit(_0xaa9e24, _0x48ad87, _0xbeeae5, limitCount, limit))
          return _0x1b3106(_0x3d5088(0x2f1) + _0x4baec1 + _0x3d5088(0x414));
        if (_0x1710ba)
          return _0x1b3106(
            "Fitur\x20Tidak\x20Dapat\x20Digunakan\x20Untuk\x20Group!"
          );
        this[_0x3d5088(0x5a2)] = this["anonymous"]
          ? this[_0x3d5088(0x5a2)]
          : {};
        let _0x2c3a8d = Object[_0x3d5088(0x304)](this["anonymous"])[
          _0x3d5088(0x284)
        ]((_0x32b7ea) => _0x32b7ea[_0x3d5088(0x493)](_0xaa9e24));
        if (!_0x2c3a8d) {
          await _0x32ba2d(_0x12e00d[_0x3d5088(0x3d5)], _0x3d5088(0x679));
          throw ![];
        }
        let _0x411c32 = _0x2c3a8d["other"](_0xaa9e24);
        if (_0x411c32) await _0x32ba2d(_0x411c32, _0x3d5088(0x609));
        delete this["anonymous"][_0x2c3a8d["id"]];
        let _0x239d10 = Object[_0x3d5088(0x304)](this[_0x3d5088(0x5a2)])[
          _0x3d5088(0x284)
        ](
          (_0x502e7e) =>
            _0x502e7e["state"] === _0x3d5088(0x4a3) &&
            !_0x502e7e[_0x3d5088(0x493)](_0xaa9e24)
        );
        if (_0x239d10)
          await _0x32ba2d(_0x239d10["a"], "_*Partner\x20Ditemukan!!*_"),
            (_0x239d10["b"] = _0xaa9e24),
            (_0x239d10[_0x3d5088(0x1d4)] = _0x3d5088(0x470)),
            await _0x32ba2d(_0x239d10["b"], _0x3d5088(0x600));
        else {
          let _0x1dcd4f = +new Date();
          (this[_0x3d5088(0x5a2)][_0x1dcd4f] = {
            id: _0x1dcd4f,
            a: _0xaa9e24,
            b: "",
            state: _0x3d5088(0x4a3),
            check: function (_0xafecc = "") {
              var _0x4c4fda = _0x3d5088;
              return [this["a"], this["b"]][_0x4c4fda(0x24f)](_0xafecc);
            },
            other: function (_0x34bfa9 = "") {
              return _0x34bfa9 === this["a"]
                ? this["b"]
                : _0x34bfa9 === this["b"]
                ? this["a"]
                : "";
            },
          }),
            await _0x32ba2d(_0xaa9e24, _0x3d5088(0x25f));
        }
        limitAdd(_0xaa9e24, limit);
        break;
      }
      case _0x4baec1 + _0x3d5088(0x4fd):
      case _0x4baec1 + "texttoimage":
        {
          _0x2c9561(
            _0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1],
            _0xaa9e24,
            _cmd
          );
          if (isLimit(_0xaa9e24, _0x48ad87, _0xbeeae5, limitCount, limit))
            return _0x1b3106(_0x3d5088(0x2f1) + _0x4baec1 + _0x3d5088(0x414));
          if (!_0x1fe3c5) return _0x1b3106(_0x3d5088(0x436));
          const _0x1b0d5f = await fetchJson(
            "https://hercai.onrender.com/v2/text2image?prompt=" + _0x1fe3c5
          );
          _0x291436[_0x3d5088(0x1fe)](_0xdd6e0f, {
            image: { url: "" + _0x1b0d5f[_0x3d5088(0x528)] },
            caption: _0x3d5088(0x5e6),
            contextInfo: {
              externalAdReply: {
                title: _0x3d5088(0x652),
                body: _0x3d5088(0x652),
                thumbnailUrl: _0x3d5088(0x1ef),
                sourceUrl: _0x3d5088(0x525),
                mediaType: 0x1,
                showAdAttribution: !![],
                renderLargerThumbnail: ![],
              },
            },
          }),
            limitAdd(_0xaa9e24, limit);
        }
        break;
      case _0x4baec1 + "ai":
      case _0x4baec1 + _0x3d5088(0x31a):
        {
          _0x2c9561(
            _0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1],
            _0xaa9e24,
            _cmd
          );
          if (isLimit(_0xaa9e24, _0x48ad87, _0xbeeae5, limitCount, limit))
            return _0x1b3106(_0x3d5088(0x2f1) + _0x4baec1 + _0x3d5088(0x414));
          if (!_0x1fe3c5)
            return _0x1b3106("_Contoh:\x20.ai\x20cara\x20membuat\x20anak_");
          const _0x1fe976 = await fetchJson(_0x3d5088(0x684) + _0x1fe3c5);
          _0x291436[_0x3d5088(0x1fe)](
            _0xdd6e0f,
            {
              text: _0x1fe976["reply"],
              contextInfo: {
                externalAdReply: {
                  title: global[_0x3d5088(0x4f7)],
                  body: _0x3d5088(0x642),
                  thumbnailUrl:
                    "https://telegra.ph/file/9493062a98291c1ec6608.jpg",
                  sourceUrl: _0x3d5088(0x5ec),
                  mediaType: 0x1,
                  showAdAttribution: !![],
                  renderLargerThumbnail: !![],
                },
              },
            },
            { quoted: _0x12e00d }
          ),
            limitAdd(_0xaa9e24, limit);
        }
        break;
      case _0x4baec1 + _0x3d5088(0x4bf):
      case _0x4baec1 + _0x3d5088(0x360):
      case _0x4baec1 + "s":
        _0x2c9561(_0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1], _0xaa9e24, _cmd);
        if (isLimit(_0xaa9e24, _0x48ad87, _0xbeeae5, limitCount, limit))
          return _0x1b3106(_0x3d5088(0x2f1) + _0x4baec1 + _0x3d5088(0x414));
        if (_0x2e189f || _0x11f65b) {
          var _0x366bb3 = await baileys[_0x3d5088(0x661)](
              _0x12e00d["message"][_0x3d5088(0x206)] ||
                _0x12e00d[_0x3d5088(0x203)]["extendedTextMessage"]?.[
                  _0x3d5088(0x4ed)
                ][_0x3d5088(0x25a)][_0x3d5088(0x206)],
              _0x3d5088(0x49d)
            ),
            _0x1807a2 = Buffer[_0x3d5088(0x429)]([]);
          for await (const _0x5848c7 of _0x366bb3) {
            _0x1807a2 = Buffer[_0x3d5088(0x4f4)]([_0x1807a2, _0x5848c7]);
          }
          var _0x4de015 = _0x3d5088(0x612) + getRandom(".jpg"),
            _0xc0328e = "sticker/" + getRandom(_0x3d5088(0x1b6));
          fs[_0x3d5088(0x5ef)]("./" + _0x4de015, _0x1807a2),
            ffmpeg("./" + _0x4de015)
              ["on"](_0x3d5088(0x1ac), console[_0x3d5088(0x1ac)])
              ["on"](_0x3d5088(0x593), () => {
                var _0x3ad20e = _0x3d5088;
                exec(
                  _0x3ad20e(0x698) + _0xc0328e + _0x3ad20e(0x655) + _0xc0328e,
                  async (_0x4a9dd4) => {
                    var _0x12a549 = _0x3ad20e;
                    _0x291436[_0x12a549(0x1fe)](
                      _0xdd6e0f,
                      { sticker: fs["readFileSync"]("./" + _0xc0328e) },
                      { quoted: _0x12e00d }
                    ),
                      limitAdd(_0xaa9e24, limit),
                      fs["unlinkSync"]("./" + _0x4de015),
                      fs[_0x12a549(0x2c4)]("./" + _0xc0328e);
                  }
                );
              })
              [_0x3d5088(0x2b7)]([
                _0x3d5088(0x64d),
                _0x3d5088(0x2bc),
                "-vf",
                "scale=\x27min(320,iw)\x27:min\x27(320,ih)\x27:force_original_aspect_ratio=decrease,fps=15,\x20pad=320:320:-1:-1:color=white@0.0,\x20split\x20[a][b];\x20[a]\x20palettegen=reserve_transparent=on:transparency_color=ffffff\x20[p];\x20[b][p]\x20paletteuse",
              ])
              ["toFormat"]("webp")
              ["save"]("" + _0xc0328e);
        } else {
          if (_0x1080dd || _0x261864) {
            var _0x366bb3 = await baileys["downloadContentFromMessage"](
                _0x12e00d[_0x3d5088(0x203)][_0x3d5088(0x206)] ||
                  _0x12e00d[_0x3d5088(0x203)][_0x3d5088(0x1e1)]?.[
                    _0x3d5088(0x4ed)
                  ][_0x3d5088(0x25a)]["videoMessage"],
                "video"
              ),
              _0x1807a2 = Buffer[_0x3d5088(0x429)]([]);
            for await (const _0x3a94b1 of _0x366bb3) {
              _0x1807a2 = Buffer["concat"]([_0x1807a2, _0x3a94b1]);
            }
            var _0x4de015 = _0x3d5088(0x612) + getRandom(_0x3d5088(0x611)),
              _0xc0328e = _0x3d5088(0x612) + getRandom(_0x3d5088(0x1b6));
            fs["writeFileSync"]("./" + _0x4de015, _0x1807a2),
              ffmpeg("./" + _0x4de015)
                ["on"]("error", console[_0x3d5088(0x1ac)])
                ["on"]("end", () => {
                  var _0x17ae2d = _0x3d5088;
                  exec(
                    _0x17ae2d(0x698) + _0xc0328e + _0x17ae2d(0x655) + _0xc0328e,
                    async (_0x84457d) => {
                      var _0x4305ef = _0x17ae2d;
                      _0x291436[_0x4305ef(0x1fe)](
                        _0xdd6e0f,
                        { sticker: fs[_0x4305ef(0x4a0)]("./" + _0xc0328e) },
                        { quoted: _0x12e00d }
                      ),
                        limitAdd(_0xaa9e24, limit),
                        fs[_0x4305ef(0x2c4)]("./" + _0x4de015),
                        fs[_0x4305ef(0x2c4)]("./" + _0xc0328e);
                    }
                  );
                })
                [_0x3d5088(0x2b7)]([
                  _0x3d5088(0x64d),
                  _0x3d5088(0x2bc),
                  "-vf",
                  _0x3d5088(0x2bb),
                ])
                ["toFormat"](_0x3d5088(0x2c2))
                ["save"]("" + _0xc0328e);
          } else _0x1b3106(_0x3d5088(0x36c) + _0x36ed63 + _0x3d5088(0x480));
        }
        break;
      case _0x4baec1 + "toimg":
      case _0x4baec1 + _0x3d5088(0x499):
      case _0x4baec1 + _0x3d5088(0x5da):
      case _0x4baec1 + _0x3d5088(0x305):
        if (isLimit(_0xaa9e24, _0x48ad87, _0xbeeae5, limitCount, limit))
          return _0x1b3106(_0x3d5088(0x2f1) + _0x4baec1 + _0x3d5088(0x414));
        if (!_0x5aacf9) return _0x1b3106("Reply\x20stikernya!");
        var _0x366bb3 = await baileys[_0x3d5088(0x661)](
            _0x12e00d[_0x3d5088(0x203)][_0x3d5088(0x1e1)]?.[_0x3d5088(0x4ed)][
              _0x3d5088(0x25a)
            ]["stickerMessage"],
            "sticker"
          ),
          _0x1807a2 = Buffer["from"]([]);
        for await (const _0x10b023 of _0x366bb3) {
          _0x1807a2 = Buffer[_0x3d5088(0x4f4)]([_0x1807a2, _0x10b023]);
        }
        var _0x4de015 = "sticker/" + getRandom(".webp"),
          _0xc0328e = _0x3d5088(0x612) + getRandom(_0x3d5088(0x2ff));
        fs["writeFileSync"]("./" + _0x4de015, _0x1807a2);
        _0x5aacf9 &&
        _0x12e00d[_0x3d5088(0x203)][_0x3d5088(0x1e1)]["contextInfo"][
          _0x3d5088(0x25a)
        ][_0x3d5088(0x39c)][_0x3d5088(0x2ca)] !== !![]
          ? exec(
              "ffmpeg\x20-i\x20./" + _0x4de015 + _0x3d5088(0x1c4) + _0xc0328e,
              (_0x199668) => {
                var _0x3e2d8d = _0x3d5088;
                fs[_0x3e2d8d(0x2c4)]("./" + _0x4de015);
                if (_0x199668) return _0x1b3106(_0x3e2d8d(0x462));
                _0x291436["sendMessage"](
                  _0xdd6e0f,
                  { image: { url: "./" + _0xc0328e } },
                  { quoted: _0x12e00d }
                ),
                  limitAdd(_0xaa9e24, limit),
                  fs["unlinkSync"]("./" + _0xc0328e);
              }
            )
          : (_0x1b3106(_0x3d5088(0x517)),
            webp2mp4File("./" + _0x4de015)[_0x3d5088(0x34a)]((_0xa03c06) => {
              var _0x441d34 = _0x3d5088;
              fs[_0x441d34(0x2c4)]("./" + _0x4de015),
                _0x291436[_0x441d34(0x1fe)](
                  _0xdd6e0f,
                  { video: { url: _0xa03c06[_0x441d34(0x4cb)] } },
                  { quoted: _0x12e00d }
                ),
                limitAdd(_0xaa9e24, limit);
            }));
        break;
      case _0x4baec1 + _0x3d5088(0x2ae):
        if (!_0xbeeae5) return _0x1b3106(_0x3d5088(0x33e));
        var _0x929c15 = _0x1fe3c5[_0x3d5088(0x648)]("|")[0x0]
            ? _0x1fe3c5["split"]("|")[0x0]
            : _0x1fe3c5,
          _0x28decb = _0x1fe3c5["split"]("|")[0x1]
            ? _0x1fe3c5[_0x3d5088(0x648)]("|")[0x1]
            : "";
        exif["create"](_0x929c15, _0x28decb),
          _0x1b3106("Sukses\x20membuat\x20exif");
        break;
      case _0x4baec1 + _0x3d5088(0x5a5):
        {
          _0x2c9561(
            _0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1],
            _0xaa9e24,
            _cmd
          );
          if (isLimit(_0xaa9e24, _0x48ad87, _0xbeeae5, limitCount, limit))
            return _0x1b3106(
              "Limit\x20kamu\x20sudah\x20habis\x20silahkan\x20kirim\x20" +
                _0x4baec1 +
                _0x3d5088(0x414)
            );
          if (_0x2e189f || _0x11f65b) {
            let _0x23f167 = await _0x5856fd(_0x3d5088(0x49d), "tourl.jpg"),
              _0xfa0124 = await uploadImages(fs[_0x3d5088(0x4a0)](_0x23f167));
            _0x1b3106(_0xfa0124), fs[_0x3d5088(0x2c4)](_0x23f167);
          } else
            _0x1080dd || _0x261864
              ? ((dwn = await _0x5856fd(_0x3d5088(0x1f3), "tourl.mp4")),
                (up = await uploadImages(fs[_0x3d5088(0x4a0)](dwn))),
                _0x1b3106(up),
                fs[_0x3d5088(0x2c4)](dwn))
              : _0x1b3106("kirim\x20media/reply\x20media");
          limitAdd(_0xaa9e24, limit);
        }
        break;
      case _0x4baec1 + _0x3d5088(0x24b):
        if (isLimit(_0xaa9e24, _0x48ad87, _0xbeeae5, limitCount, limit))
          return _0x1b3106(
            _0x3d5088(0x2f1) + _0x4baec1 + "limit\x20untuk\x20mengecek\x20limit"
          );
        _0x2c9561(_0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1], _0xaa9e24, _cmd);
        if (_0x2e189f || _0x11f65b) {
          dwn = await _0x5856fd(_0x3d5088(0x49d), "ocr.jpg");
          let _0x279369 = await uploadImages(fs["readFileSync"](dwn));
          (up = await fetchJson(
            _0x3d5088(0x4de) + global[_0x3d5088(0x2ea)] + "&img=" + _0x279369
          )),
            _0x1b3106(up[_0x3d5088(0x4cb)]),
            fs[_0x3d5088(0x2c4)](dwn);
        } else _0x1b3106(_0x3d5088(0x667));
        limitAdd(_0xaa9e24, limit);
        break;
      case _0x4baec1 + _0x3d5088(0x5e1):
      case _0x4baec1 + _0x3d5088(0x3fb):
      case _0x4baec1 + _0x3d5088(0x687):
        if (isLimit(_0xaa9e24, _0x48ad87, _0xbeeae5, limitCount, limit))
          return _0x1b3106(
            _0x3d5088(0x2f1) +
              _0x4baec1 +
              "\x20limit\x20untuk\x20mengecek\x20limit"
          );
        if (_0x42ae18[_0x3d5088(0x3c1)] < 0x2)
          return _0x1b3106(
            "Gunakan\x20dengan\x20cara\x20" + _0x36ed63 + _0x3d5088(0x3b1)
          );
        if (!_0x5f1cc8(_0x42ae18[0x1])) return _0x1b3106(_0x3d5088(0x589));
        if (!_0x42ae18[0x1][_0x3d5088(0x24f)]("mediafire.com"))
          return _0x1b3106(_0x3d5088(0x589));
        _0x1b3106(_0x3d5088(0x435)),
          _0x2c9561(_0x3d5088(0x459), _0xaa9e24, _cmd),
          (_0x1bb554 = await fetchJson(
            "https://api.lolhuman.xyz/api/mediafire?apikey=" +
              global[_0x3d5088(0x2ea)] +
              _0x3d5088(0x20e) +
              _0x42ae18[0x1]
          ));
        var _0x17c789 = await getBuffer(
          _0x1bb554[_0x3d5088(0x4cb)][_0x3d5088(0x522)]
        );
        if (
          _0x1bb554["result"][_0x3d5088(0x1f1)][_0x3d5088(0x24f)](
            _0x3d5088(0x649)
          )
        )
          _0x291436["sendMessage"](
            _0xdd6e0f,
            {
              document: _0x17c789,
              fileName: _0x1bb554[_0x3d5088(0x4cb)]["filename"],
              mimetype: _0x3d5088(0x4a1),
            },
            { quoted: _0x12e00d }
          );
        else
          _0x1bb554[_0x3d5088(0x4cb)][_0x3d5088(0x1f1)][_0x3d5088(0x24f)](
            _0x3d5088(0x4e0)
          )
            ? _0x291436[_0x3d5088(0x1fe)](
                _0xdd6e0f,
                {
                  document: _0x17c789,
                  fileName: _0x1bb554[_0x3d5088(0x4cb)]["filename"],
                  mimetype: _0x3d5088(0x598),
                },
                { quoted: _0x12e00d }
              )
            : _0x291436[_0x3d5088(0x1fe)](
                _0xdd6e0f,
                {
                  document: _0x17c789,
                  fileName: _0x1bb554[_0x3d5088(0x4cb)]["filename"],
                  mimetype:
                    _0x3d5088(0x585) +
                    _0x1bb554[_0x3d5088(0x4cb)][_0x3d5088(0x1f1)],
                },
                { quoted: _0x12e00d }
              );
        break;
      case _0x4baec1 + _0x3d5088(0x671):
      case _0x4baec1 + _0x3d5088(0x227):
      case _0x4baec1 + _0x3d5088(0x577):
      case _0x4baec1 + _0x3d5088(0x274):
      case _0x4baec1 + _0x3d5088(0x5c5):
      case _0x4baec1 + _0x3d5088(0x5c2):
      case _0x4baec1 + "boruto":
      case _0x4baec1 + "bts":
      case _0x4baec1 + _0x3d5088(0x1d2):
      case _0x4baec1 + "chitoge":
      case _0x4baec1 + _0x3d5088(0x324):
      case _0x4baec1 + _0x3d5088(0x354):
      case _0x4baec1 + _0x3d5088(0x4d9):
      case _0x4baec1 + _0x3d5088(0x380):
      case _0x4baec1 + _0x3d5088(0x5b9):
      case _0x4baec1 + _0x3d5088(0x4e1):
      case _0x4baec1 + _0x3d5088(0x299):
      case _0x4baec1 + _0x3d5088(0x542):
      case _0x4baec1 + "erza":
      case _0x4baec1 + _0x3d5088(0x327):
      case _0x4baec1 + _0x3d5088(0x22b):
      case _0x4baec1 + _0x3d5088(0x503):
      case _0x4baec1 + _0x3d5088(0x1b7):
      case _0x4baec1 + _0x3d5088(0x28e):
      case _0x4baec1 + _0x3d5088(0x1a6):
      case _0x4baec1 + "husbu":
      case _0x4baec1 + _0x3d5088(0x388):
      case _0x4baec1 + "islamic":
      case _0x4baec1 + _0x3d5088(0x576):
      case _0x4baec1 + _0x3d5088(0x63d):
      case _0x4baec1 + _0x3d5088(0x3b8):
      case _0x4baec1 + _0x3d5088(0x4e8):
      case _0x4baec1 + "jiso":
      case _0x4baec1 + "justina":
      case _0x4baec1 + _0x3d5088(0x4f2):
      case _0x4baec1 + _0x3d5088(0x325):
      case _0x4baec1 + _0x3d5088(0x1e4):
      case _0x4baec1 + _0x3d5088(0x239):
      case _0x4baec1 + _0x3d5088(0x37a):
      case _0x4baec1 + "shortquote":
      case _0x4baec1 + _0x3d5088(0x519):
      case _0x4baec1 + _0x3d5088(0x521):
      case _0x4baec1 + _0x3d5088(0x223):
      case _0x4baec1 + _0x3d5088(0x4db):
      case _0x4baec1 + _0x3d5088(0x23a):
      case _0x4baec1 + "madara":
      case _0x4baec1 + _0x3d5088(0x318):
      case _0x4baec1 + _0x3d5088(0x467):
      case _0x4baec1 + _0x3d5088(0x5b5):
      case _0x4baec1 + _0x3d5088(0x5d3):
      case _0x4baec1 + _0x3d5088(0x67a):
      case _0x4baec1 + _0x3d5088(0x50e):
      case _0x4baec1 + "naruto":
      case _0x4baec1 + _0x3d5088(0x4f5):
      case _0x4baec1 + _0x3d5088(0x247):
      case _0x4baec1 + "nekonime":
      case _0x4baec1 + _0x3d5088(0x245):
      case _0x4baec1 + _0x3d5088(0x2df):
      case _0x4baec1 + "pentol":
      case _0x4baec1 + _0x3d5088(0x1ed):
      case _0x4baec1 + _0x3d5088(0x64e):
      case _0x4baec1 + _0x3d5088(0x580):
      case _0x4baec1 + "randomnime2":
      case _0x4baec1 + _0x3d5088(0x489):
      case _0x4baec1 + "rose":
      case _0x4baec1 + _0x3d5088(0x49e):
      case _0x4baec1 + "sakura":
      case _0x4baec1 + "sasuke":
      case _0x4baec1 + "satanic":
      case _0x4baec1 + "shina":
      case _0x4baec1 + _0x3d5088(0x48b):
      case _0x4baec1 + "shinomiya":
      case _0x4baec1 + _0x3d5088(0x250):
      case _0x4baec1 + _0x3d5088(0x444):
      case _0x4baec1 + _0x3d5088(0x4b3):
      case _0x4baec1 + "technology":
      case _0x4baec1 + _0x3d5088(0x5a0):
      case _0x4baec1 + _0x3d5088(0x450):
      case _0x4baec1 + _0x3d5088(0x596):
      case _0x4baec1 + "waifu":
      case _0x4baec1 + _0x3d5088(0x61c):
      case _0x4baec1 + "yuki":
      case _0x4baec1 + _0x3d5088(0x5f3):
      case _0x4baec1 + "yumeko":
        {
          _0x1b3106(_0x3d5088(0x31c)), _0x2c9561("anime", _0xaa9e24, _cmd);
          let _0xccb0f9;
          if (/akira/["test"](_0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1]))
            _0xccb0f9 = await fetchJson(_0x3d5088(0x32d));
          if (
            /akiyama/[_0x3d5088(0x3e2)](
              _0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1]
            )
          )
            _0xccb0f9 = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akiyama.json"
            );
          if (/ana/["test"](_0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1]))
            _0xccb0f9 = await fetchJson(_0x3d5088(0x4c1));
          if (
            /art/[_0x3d5088(0x3e2)](_0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1])
          )
            _0xccb0f9 = await fetchJson(_0x3d5088(0x43e));
          if (/asuna/["test"](_0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1]))
            _0xccb0f9 = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/asuna.json"
            );
          if (/ayuzawa/["test"](_0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1]))
            _0xccb0f9 = await fetchJson(_0x3d5088(0x40a));
          if (
            /boneka/[_0x3d5088(0x3e2)](
              _0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1]
            )
          )
            _0xccb0f9 = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boneka.json"
            );
          if (/boruto/[_0x3d5088(0x3e2)](_0x36ed63["split"](_0x4baec1)[0x1]))
            _0xccb0f9 = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boruto.json"
            );
          if (/bts/["test"](_0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1]))
            _0xccb0f9 = await fetchJson(_0x3d5088(0x3c9));
          if (
            /cecan/[_0x3d5088(0x3e2)](
              _0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1]
            )
          )
            _0xccb0f9 = await fetchJson(_0x3d5088(0x5fa));
          if (/chiho/["test"](_0x36ed63["split"](_0x4baec1)[0x1]))
            _0xccb0f9 = await fetchJson(_0x3d5088(0x2de));
          if (
            /chitoge/[_0x3d5088(0x3e2)](
              _0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1]
            )
          )
            _0xccb0f9 = await fetchJson(_0x3d5088(0x5f9));
          if (/cogan/["test"](_0x36ed63["split"](_0x4baec1)[0x1]))
            _0xccb0f9 = await fetchJson(_0x3d5088(0x3eb));
          if (
            /cosplay/[_0x3d5088(0x3e2)](
              _0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1]
            )
          )
            _0xccb0f9 = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplay.json"
            );
          if (
            /cosplayloli/["test"](_0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1])
          )
            _0xccb0f9 = await fetchJson(_0x3d5088(0x57e));
          if (
            /cosplaysagiri/[_0x3d5088(0x3e2)](
              _0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1]
            )
          )
            _0xccb0f9 = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplaysagiri.json"
            );
          if (
            /cyber/[_0x3d5088(0x3e2)](
              _0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1]
            )
          )
            _0xccb0f9 = await fetchJson(_0x3d5088(0x5bd));
          if (
            /deidara/[_0x3d5088(0x3e2)](
              _0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1]
            )
          )
            _0xccb0f9 = await fetchJson(_0x3d5088(0x628));
          if (
            /doraemon/[_0x3d5088(0x3e2)](
              _0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1]
            )
          )
            _0xccb0f9 = await fetchJson(_0x3d5088(0x307));
          if (
            /eba/[_0x3d5088(0x3e2)](_0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1])
          )
            _0xccb0f9 = await fetchJson(_0x3d5088(0x569));
          if (
            /elaina/[_0x3d5088(0x3e2)](
              _0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1]
            )
          )
            _0xccb0f9 = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/elaina.json"
            );
          if (/emilia/[_0x3d5088(0x3e2)](_0x36ed63["split"](_0x4baec1)[0x1]))
            _0xccb0f9 = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/emilia.json"
            );
          if (/erza/["test"](_0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1]))
            _0xccb0f9 = await fetchJson(_0x3d5088(0x2cc));
          if (/exo/[_0x3d5088(0x3e2)](_0x36ed63["split"](_0x4baec1)[0x1]))
            _0xccb0f9 = await fetchJson(_0x3d5088(0x672));
          if (
            /femdom/[_0x3d5088(0x3e2)](
              _0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1]
            )
          )
            _0xccb0f9 = await fetchJson(_0x3d5088(0x607));
          if (/freefire/[_0x3d5088(0x3e2)](_0x36ed63["split"](_0x4baec1)[0x1]))
            _0xccb0f9 = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/freefire.json"
            );
          if (
            /gamewallpaper/[_0x3d5088(0x3e2)](
              _0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1]
            )
          )
            _0xccb0f9 = await fetchJson(_0x3d5088(0x43c));
          if (/glasses/[_0x3d5088(0x3e2)](_0x36ed63["split"](_0x4baec1)[0x1]))
            _0xccb0f9 = await fetchJson(_0x3d5088(0x53a));
          if (
            /gremory/[_0x3d5088(0x3e2)](
              _0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1]
            )
          )
            _0xccb0f9 = await fetchJson(_0x3d5088(0x60f));
          if (
            /hacker/[_0x3d5088(0x3e2)](
              _0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1]
            )
          )
            _0xccb0f9 = await fetchJson(_0x3d5088(0x613));
          if (
            /hestia/[_0x3d5088(0x3e2)](
              _0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1]
            )
          )
            _0xccb0f9 = await fetchJson(_0x3d5088(0x440));
          if (
            /husbu/[_0x3d5088(0x3e2)](
              _0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1]
            )
          )
            _0xccb0f9 = await fetchJson(_0x3d5088(0x3a0));
          if (/inori/["test"](_0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1]))
            _0xccb0f9 = await fetchJson(_0x3d5088(0x5cb));
          if (
            /islamic/[_0x3d5088(0x3e2)](
              _0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1]
            )
          )
            _0xccb0f9 = await fetchJson(_0x3d5088(0x44f));
          if (
            /isuzu/[_0x3d5088(0x3e2)](
              _0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1]
            )
          )
            _0xccb0f9 = await fetchJson(_0x3d5088(0x415));
          if (
            /itachi/[_0x3d5088(0x3e2)](
              _0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1]
            )
          )
            _0xccb0f9 = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itachi.json"
            );
          if (
            /itori/[_0x3d5088(0x3e2)](
              _0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1]
            )
          )
            _0xccb0f9 = await fetchJson(_0x3d5088(0x2bd));
          if (/jennie/[_0x3d5088(0x3e2)](_0x36ed63["split"](_0x4baec1)[0x1]))
            _0xccb0f9 = await fetchJson(_0x3d5088(0x330));
          if (
            /jiso/[_0x3d5088(0x3e2)](
              _0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1]
            )
          )
            _0xccb0f9 = await fetchJson(_0x3d5088(0x680));
          if (/justina/["test"](_0x36ed63["split"](_0x4baec1)[0x1]))
            _0xccb0f9 = await fetchJson(_0x3d5088(0x1f2));
          if (
            /kaga/[_0x3d5088(0x3e2)](
              _0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1]
            )
          )
            _0xccb0f9 = await fetchJson(_0x3d5088(0x5aa));
          if (
            /kagura/[_0x3d5088(0x3e2)](
              _0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1]
            )
          )
            _0xccb0f9 = await fetchJson(_0x3d5088(0x4d2));
          if (/kakasih/[_0x3d5088(0x3e2)](_0x36ed63["split"](_0x4baec1)[0x1]))
            _0xccb0f9 = await fetchJson(_0x3d5088(0x57b));
          if (
            /kaori/[_0x3d5088(0x3e2)](
              _0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1]
            )
          )
            _0xccb0f9 = await fetchJson(_0x3d5088(0x347));
          if (/cartoon/[_0x3d5088(0x3e2)](_0x36ed63["split"](_0x4baec1)[0x1]))
            _0xccb0f9 = await fetchJson(_0x3d5088(0x231));
          if (
            /shortquote/[_0x3d5088(0x3e2)](_0x36ed63["split"](_0x4baec1)[0x1])
          )
            _0xccb0f9 = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/katakata.json"
            );
          if (/keneki/["test"](_0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1]))
            _0xccb0f9 = await fetchJson(_0x3d5088(0x32e));
          if (
            /kotori/[_0x3d5088(0x3e2)](
              _0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1]
            )
          )
            _0xccb0f9 = await fetchJson(_0x3d5088(0x3d1));
          if (
            /kpop/[_0x3d5088(0x3e2)](
              _0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1]
            )
          )
            _0xccb0f9 = await fetchJson(_0x3d5088(0x55b));
          if (
            /kucing/[_0x3d5088(0x3e2)](
              _0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1]
            )
          )
            _0xccb0f9 = await fetchJson(_0x3d5088(0x28b));
          if (
            /kurumi/[_0x3d5088(0x3e2)](
              _0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1]
            )
          )
            _0xccb0f9 = await fetchJson(_0x3d5088(0x3c7));
          if (
            /lisa/[_0x3d5088(0x3e2)](
              _0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1]
            )
          )
            _0xccb0f9 = await fetchJson(_0x3d5088(0x28a));
          if (
            /loli/[_0x3d5088(0x3e2)](
              _0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1]
            )
          )
            _0xccb0f9 = await fetchJson(_0x3d5088(0x693));
          if (/madara/[_0x3d5088(0x3e2)](_0x36ed63["split"](_0x4baec1)[0x1]))
            _0xccb0f9 = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/madara.json"
            );
          if (
            /megumin/[_0x3d5088(0x3e2)](
              _0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1]
            )
          )
            _0xccb0f9 = await fetchJson(_0x3d5088(0x27c));
          if (/mikasa/[_0x3d5088(0x3e2)](_0x36ed63["split"](_0x4baec1)[0x1]))
            _0xccb0f9 = await fetchJson(_0x3d5088(0x638));
          if (
            /mikey/[_0x3d5088(0x3e2)](
              _0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1]
            )
          )
            _0xccb0f9 = await fetchJson(_0x3d5088(0x5ff));
          if (/miku/[_0x3d5088(0x3e2)](_0x36ed63["split"](_0x4baec1)[0x1]))
            _0xccb0f9 = await fetchJson(_0x3d5088(0x56d));
          if (
            /minato/[_0x3d5088(0x3e2)](
              _0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1]
            )
          )
            _0xccb0f9 = await fetchJson(_0x3d5088(0x2c5));
          if (/mobile/[_0x3d5088(0x3e2)](_0x36ed63["split"](_0x4baec1)[0x1]))
            _0xccb0f9 = await fetchJson(_0x3d5088(0x336));
          if (/motor/["test"](_0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1]))
            _0xccb0f9 = await fetchJson(_0x3d5088(0x246));
          if (
            /mountain/[_0x3d5088(0x3e2)](
              _0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1]
            )
          )
            _0xccb0f9 = await fetchJson(_0x3d5088(0x537));
          if (/naruto/["test"](_0x36ed63["split"](_0x4baec1)[0x1]))
            _0xccb0f9 = await fetchJson(_0x3d5088(0x3d4));
          if (/neko/[_0x3d5088(0x3e2)](_0x36ed63["split"](_0x4baec1)[0x1]))
            _0xccb0f9 = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/neko.json"
            );
          if (/neko2/[_0x3d5088(0x3e2)](_0x36ed63["split"](_0x4baec1)[0x1]))
            _0xccb0f9 = await fetchJson(_0x3d5088(0x1ee));
          if (/nekonime/["test"](_0x36ed63["split"](_0x4baec1)[0x1]))
            _0xccb0f9 = await fetchJson(_0x3d5088(0x54a));
          if (
            /nezuko/[_0x3d5088(0x3e2)](
              _0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1]
            )
          )
            _0xccb0f9 = await fetchJson(_0x3d5088(0x1be));
          if (
            /onepiece/[_0x3d5088(0x3e2)](
              _0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1]
            )
          )
            _0xccb0f9 = await fetchJson(_0x3d5088(0x385));
          if (/pentol/["test"](_0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1]))
            _0xccb0f9 = await fetchJson(_0x3d5088(0x30d));
          if (
            /pokemon/[_0x3d5088(0x3e2)](
              _0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1]
            )
          )
            _0xccb0f9 = await fetchJson(_0x3d5088(0x2ab));
          if (/profil/["test"](_0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1]))
            _0xccb0f9 = await fetchJson(_0x3d5088(0x5d4));
          if (
            /progamming/[_0x3d5088(0x3e2)](
              _0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1]
            )
          )
            _0xccb0f9 = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/programming.json"
            );
          if (
            /pubg/[_0x3d5088(0x3e2)](
              _0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1]
            )
          )
            _0xccb0f9 = await fetchJson(_0x3d5088(0x45a));
          if (
            /randblackpink/[_0x3d5088(0x3e2)](
              _0x36ed63["split"](_0x4baec1)[0x1]
            )
          )
            _0xccb0f9 = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randblackpink.json"
            );
          if (/randomnime/["test"](_0x36ed63["split"](_0x4baec1)[0x1]))
            _0xccb0f9 = await fetchJson(_0x3d5088(0x5ae));
          if (
            /randomnime2/[_0x3d5088(0x3e2)](_0x36ed63["split"](_0x4baec1)[0x1])
          )
            _0xccb0f9 = await fetchJson(_0x3d5088(0x411));
          if (
            /rize/[_0x3d5088(0x3e2)](
              _0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1]
            )
          )
            _0xccb0f9 = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rize.json"
            );
          if (/rose/["test"](_0x36ed63["split"](_0x4baec1)[0x1]))
            _0xccb0f9 = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rose.json"
            );
          if (
            /ryujin/[_0x3d5088(0x3e2)](
              _0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1]
            )
          )
            _0xccb0f9 = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ryujin.json"
            );
          if (/sagiri/["test"](_0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1]))
            _0xccb0f9 = await fetchJson(_0x3d5088(0x452));
          if (
            /sakura/[_0x3d5088(0x3e2)](
              _0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1]
            )
          )
            _0xccb0f9 = await fetchJson(_0x3d5088(0x4bd));
          if (/sasuke/[_0x3d5088(0x3e2)](_0x36ed63["split"](_0x4baec1)[0x1]))
            _0xccb0f9 = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sasuke.json"
            );
          if (
            /satanic/[_0x3d5088(0x3e2)](
              _0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1]
            )
          )
            _0xccb0f9 = await fetchJson(_0x3d5088(0x5cc));
          if (
            /shina/[_0x3d5088(0x3e2)](
              _0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1]
            )
          )
            _0xccb0f9 = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shina.json"
            );
          if (
            /shinka/[_0x3d5088(0x3e2)](
              _0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1]
            )
          )
            _0xccb0f9 = await fetchJson(_0x3d5088(0x4a8));
          if (/shinomiya/["test"](_0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1]))
            _0xccb0f9 = await fetchJson(_0x3d5088(0x201));
          if (
            /shizuka/[_0x3d5088(0x3e2)](
              _0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1]
            )
          )
            _0xccb0f9 = await fetchJson(_0x3d5088(0x58b));
          if (
            /shota/[_0x3d5088(0x3e2)](
              _0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1]
            )
          )
            _0xccb0f9 = await fetchJson(_0x3d5088(0x4ba));
          if (/space/["test"](_0x36ed63["split"](_0x4baec1)[0x1]))
            _0xccb0f9 = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tatasurya.json"
            );
          if (
            /technology/[_0x3d5088(0x3e2)](
              _0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1]
            )
          )
            _0xccb0f9 = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/technology.json"
            );
          if (
            /tejina/[_0x3d5088(0x3e2)](
              _0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1]
            )
          )
            _0xccb0f9 = await fetchJson(_0x3d5088(0x33f));
          if (
            /toukachan/[_0x3d5088(0x3e2)](
              _0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1]
            )
          )
            _0xccb0f9 = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/toukachan.json"
            );
          if (
            /tsunade/[_0x3d5088(0x3e2)](
              _0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1]
            )
          )
            _0xccb0f9 = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tsunade.json"
            );
          if (/waifu/["test"](_0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1]))
            _0xccb0f9 = await fetchJson(_0x3d5088(0x665));
          if (
            /wallhp/[_0x3d5088(0x3e2)](
              _0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1]
            )
          )
            _0xccb0f9 = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallhp.json"
            );
          if (
            /wallml/[_0x3d5088(0x3e2)](
              _0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1]
            )
          )
            _0xccb0f9 = await fetchJson(_0x3d5088(0x5fe));
          if (
            /wallmlnime/[_0x3d5088(0x3e2)](
              _0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1]
            )
          )
            _0xccb0f9 = await fetchJson(_0x3d5088(0x31d));
          if (/yotsuba/[_0x3d5088(0x3e2)](_0x36ed63["split"](_0x4baec1)[0x1]))
            _0xccb0f9 = await fetchJson(_0x3d5088(0x3fa));
          if (/yuki/["test"](_0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1]))
            _0xccb0f9 = await fetchJson(_0x3d5088(0x583));
          if (/yulibocil/["test"](_0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1]))
            _0xccb0f9 = await fetchJson(_0x3d5088(0x46a));
          if (
            /yumeko/[_0x3d5088(0x3e2)](
              _0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1]
            )
          )
            _0xccb0f9 = await fetchJson(_0x3d5088(0x4f6));
          let _0x353c7b =
            _0xccb0f9[
              Math[_0x3d5088(0x4ef)](
                Math[_0x3d5088(0x2e5)]() * _0xccb0f9["length"]
              )
            ];
          _0x291436[_0x3d5088(0x1fe)](
            _0x12e00d[_0x3d5088(0x3d5)],
            { image: { url: _0x353c7b }, caption: _0x3d5088(0x1a0) },
            { quoted: _0x12e00d }
          );
        }
        break;
      case _0x4baec1 + _0x3d5088(0x502):
      case _0x4baec1 + _0x3d5088(0x49f):
      case _0x4baec1 + "sound3":
      case _0x4baec1 + "sound4":
      case _0x4baec1 + _0x3d5088(0x451):
      case _0x4baec1 + _0x3d5088(0x618):
      case _0x4baec1 + "sound7":
      case _0x4baec1 + _0x3d5088(0x1b4):
      case _0x4baec1 + _0x3d5088(0x654):
      case _0x4baec1 + _0x3d5088(0x565):
      case _0x4baec1 + _0x3d5088(0x27a):
      case _0x4baec1 + _0x3d5088(0x610):
      case _0x4baec1 + "sound13":
      case _0x4baec1 + _0x3d5088(0x209):
      case _0x4baec1 + "sound15":
      case _0x4baec1 + "sound16":
      case _0x4baec1 + _0x3d5088(0x1af):
      case _0x4baec1 + "sound18":
      case _0x4baec1 + _0x3d5088(0x259):
      case _0x4baec1 + _0x3d5088(0x4b7):
      case _0x4baec1 + _0x3d5088(0x59e):
      case _0x4baec1 + _0x3d5088(0x505):
      case _0x4baec1 + _0x3d5088(0x1ea):
      case _0x4baec1 + _0x3d5088(0x207):
      case _0x4baec1 + "sound25":
      case _0x4baec1 + _0x3d5088(0x5a7):
      case _0x4baec1 + _0x3d5088(0x68a):
      case _0x4baec1 + _0x3d5088(0x1d7):
      case _0x4baec1 + _0x3d5088(0x425):
      case _0x4baec1 + "sound30":
      case _0x4baec1 + _0x3d5088(0x48c):
      case _0x4baec1 + _0x3d5088(0x1cf):
      case _0x4baec1 + _0x3d5088(0x2c3):
      case _0x4baec1 + "sound34":
      case _0x4baec1 + _0x3d5088(0x396):
      case _0x4baec1 + _0x3d5088(0x471):
      case _0x4baec1 + _0x3d5088(0x47e):
      case _0x4baec1 + _0x3d5088(0x229):
      case _0x4baec1 + _0x3d5088(0x447):
      case _0x4baec1 + _0x3d5088(0x3a4):
      case _0x4baec1 + _0x3d5088(0x405):
      case _0x4baec1 + _0x3d5088(0x342):
      case _0x4baec1 + _0x3d5088(0x65e):
      case _0x4baec1 + _0x3d5088(0x4eb):
      case _0x4baec1 + _0x3d5088(0x20d):
      case _0x4baec1 + _0x3d5088(0x226):
      case _0x4baec1 + _0x3d5088(0x67d):
      case _0x4baec1 + _0x3d5088(0x3bc):
      case _0x4baec1 + _0x3d5088(0x267):
      case _0x4baec1 + "sound50":
      case _0x4baec1 + _0x3d5088(0x346):
      case _0x4baec1 + _0x3d5088(0x53f):
      case _0x4baec1 + _0x3d5088(0x1d5):
      case _0x4baec1 + _0x3d5088(0x56c):
      case _0x4baec1 + _0x3d5088(0x2a7):
      case _0x4baec1 + _0x3d5088(0x39a):
      case _0x4baec1 + _0x3d5088(0x662):
      case _0x4baec1 + "sound58":
      case _0x4baec1 + _0x3d5088(0x20b):
      case _0x4baec1 + _0x3d5088(0x403):
      case _0x4baec1 + "sound61":
      case _0x4baec1 + _0x3d5088(0x677):
      case _0x4baec1 + _0x3d5088(0x23f):
      case _0x4baec1 + _0x3d5088(0x1fd):
      case _0x4baec1 + "sound65":
      case _0x4baec1 + _0x3d5088(0x54e):
      case _0x4baec1 + "sound67":
      case _0x4baec1 + _0x3d5088(0x55e):
      case _0x4baec1 + _0x3d5088(0x5db):
      case _0x4baec1 + _0x3d5088(0x2a4):
      case _0x4baec1 + _0x3d5088(0x277):
      case _0x4baec1 + "sound72":
      case _0x4baec1 + _0x3d5088(0x20f):
      case _0x4baec1 + _0x3d5088(0x3ef):
      case _0x4baec1 + _0x3d5088(0x3de):
      case _0x4baec1 + _0x3d5088(0x39b):
      case _0x4baec1 + "sound77":
      case _0x4baec1 + _0x3d5088(0x29a):
      case _0x4baec1 + _0x3d5088(0x419):
      case _0x4baec1 + _0x3d5088(0x59f):
      case _0x4baec1 + "sound81":
      case _0x4baec1 + _0x3d5088(0x5d6):
      case _0x4baec1 + _0x3d5088(0x1cd):
      case _0x4baec1 + _0x3d5088(0x55f):
      case _0x4baec1 + _0x3d5088(0x4fe):
      case _0x4baec1 + _0x3d5088(0x303):
      case _0x4baec1 + "sound87":
      case _0x4baec1 + _0x3d5088(0x61e):
      case _0x4baec1 + "sound89":
      case _0x4baec1 + _0x3d5088(0x647):
      case _0x4baec1 + _0x3d5088(0x3f0):
      case _0x4baec1 + _0x3d5088(0x442):
      case _0x4baec1 + _0x3d5088(0x205):
      case _0x4baec1 + _0x3d5088(0x689):
      case _0x4baec1 + _0x3d5088(0x4c0):
      case _0x4baec1 + "sound96":
      case _0x4baec1 + "sound97":
      case _0x4baec1 + _0x3d5088(0x1de):
      case _0x4baec1 + _0x3d5088(0x1d1):
      case _0x4baec1 + "sound100":
      case _0x4baec1 + _0x3d5088(0x692):
      case _0x4baec1 + "sound102":
      case _0x4baec1 + "sound103":
      case _0x4baec1 + _0x3d5088(0x64f):
      case _0x4baec1 + "sound105":
      case _0x4baec1 + _0x3d5088(0x25d):
      case _0x4baec1 + _0x3d5088(0x25b):
      case _0x4baec1 + "sound108":
      case _0x4baec1 + _0x3d5088(0x60d):
      case _0x4baec1 + _0x3d5088(0x1a4):
      case _0x4baec1 + _0x3d5088(0x244):
      case _0x4baec1 + _0x3d5088(0x30c):
      case _0x4baec1 + _0x3d5088(0x1ba):
      case _0x4baec1 + _0x3d5088(0x5b8):
      case _0x4baec1 + "sound115":
      case _0x4baec1 + _0x3d5088(0x4d0):
      case _0x4baec1 + _0x3d5088(0x3ca):
      case _0x4baec1 + "sound118":
      case _0x4baec1 + _0x3d5088(0x65b):
      case _0x4baec1 + _0x3d5088(0x588):
      case _0x4baec1 + _0x3d5088(0x688):
      case _0x4baec1 + _0x3d5088(0x1d9):
      case _0x4baec1 + "sound123":
      case _0x4baec1 + _0x3d5088(0x561):
      case _0x4baec1 + _0x3d5088(0x4a7):
      case _0x4baec1 + "sound126":
      case _0x4baec1 + _0x3d5088(0x3ba):
      case _0x4baec1 + "sound128":
      case _0x4baec1 + _0x3d5088(0x253):
      case _0x4baec1 + _0x3d5088(0x37f):
      case _0x4baec1 + _0x3d5088(0x41f):
      case _0x4baec1 + _0x3d5088(0x2fb):
      case _0x4baec1 + _0x3d5088(0x4b6):
      case _0x4baec1 + _0x3d5088(0x2d1):
      case _0x4baec1 + "sound135":
      case _0x4baec1 + _0x3d5088(0x234):
      case _0x4baec1 + _0x3d5088(0x676):
      case _0x4baec1 + _0x3d5088(0x635):
      case _0x4baec1 + _0x3d5088(0x2dd):
      case _0x4baec1 + _0x3d5088(0x572):
      case _0x4baec1 + _0x3d5088(0x421):
      case _0x4baec1 + _0x3d5088(0x5d0):
      case _0x4baec1 + _0x3d5088(0x1da):
      case _0x4baec1 + _0x3d5088(0x2ed):
      case _0x4baec1 + "sound145":
      case _0x4baec1 + _0x3d5088(0x5bf):
      case _0x4baec1 + _0x3d5088(0x344):
      case _0x4baec1 + _0x3d5088(0x1d6):
      case _0x4baec1 + "sound149":
      case _0x4baec1 + _0x3d5088(0x2ec):
      case _0x4baec1 + _0x3d5088(0x2c9):
      case _0x4baec1 + _0x3d5088(0x2f2):
      case _0x4baec1 + _0x3d5088(0x591):
      case _0x4baec1 + _0x3d5088(0x47d):
      case _0x4baec1 + _0x3d5088(0x514):
      case _0x4baec1 + _0x3d5088(0x4ac):
      case _0x4baec1 + _0x3d5088(0x556):
      case _0x4baec1 + _0x3d5088(0x20a):
      case _0x4baec1 + _0x3d5088(0x49b):
      case _0x4baec1 + _0x3d5088(0x1d0):
      case _0x4baec1 + _0x3d5088(0x352):
        let _0x2b98be = await getBuffer(
          "https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/" +
            _0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1] +
            _0x3d5088(0x331)
        );
        _0x2c9561(_0x3d5088(0x2cf), _0xaa9e24, _cmd),
          await _0x291436[_0x3d5088(0x1fe)](_0xdd6e0f, {
            audio: _0x2b98be,
            mimetype: "audio/mp4",
            ptt: !![],
            contextInfo: {
              externalAdReply: {
                showAdAttribution: ![],
                mediaType: 0x1,
                mediaUrl: _0x3d5088(0x217),
                title: "" + _0x36ed63,
                sourceUrl: _0x3d5088(0x3df) + global[_0x3d5088(0x4f7)],
                thumbnail: thumb,
              },
            },
          });
        break;
      case _0x4baec1 + "z":
      case _0x4baec1 + _0x3d5088(0x416):
        {
          if (!isCreator && !_0xbeeae5 && !_0x48ad87) {
            if (!text) return _0x1b3106(_0x3d5088(0x33b));
          }
          _0x291436[_0x3d5088(0x1fe)](_0x12e00d[_0x3d5088(0x3d5)], {
            text: text ? text : "",
            mentions: participants["map"]((_0x3acf7c) => _0x3acf7c["id"]),
          });
        }
        break;
      case _0x4baec1 + _0x3d5088(0x3bb):
      case _0x4baec1 + "ttdl":
      case _0x4baec1 + _0x3d5088(0x455):
        _0x2c9561(_0x36ed63["split"](_0x4baec1)[0x1], _0xaa9e24, _cmd);
        if (isLimit(_0xaa9e24, _0x48ad87, _0xbeeae5, limitCount, limit))
          return _0x1b3106(
            "Limit\x20kamu\x20sudah\x20habis\x20silahkan\x20kirim\x20" +
              _0x4baec1 +
              "limit\x20untuk\x20mengecek\x20limit"
          );
        if (_0x42ae18[_0x3d5088(0x3c1)] < 0x2)
          return _0x1b3106(_0x3d5088(0x275) + _0x36ed63 + _0x3d5088(0x2b4));
        if (!_0x5f1cc8(_0x42ae18[0x1])) return _0x1b3106(_0x3d5088(0x589));
        if (!_0x42ae18[0x1][_0x3d5088(0x24f)](_0x3d5088(0x455)))
          return _0x1b3106(_0x3d5088(0x5e7));
        _0x1b3106(_0x3d5088(0x517)),
          (_0x1bb554 = await fetchJson(
            "https://api.lolhuman.xyz/api/tiktok?apikey=" +
              global["lolkey"] +
              _0x3d5088(0x20e) +
              _0x42ae18[0x1]
          )),
          _0x291436[_0x3d5088(0x1fe)](
            _0xdd6e0f,
            {
              video: { url: _0x1bb554[_0x3d5088(0x4cb)][_0x3d5088(0x522)] },
              caption: _0x1bb554[_0x3d5088(0x4cb)]["title"],
            },
            { quoted: _0x12e00d }
          ),
          limitAdd(_0xaa9e24, limit);
        break;
      case _0x4baec1 + _0x3d5088(0x456):
        if (isLimit(_0xaa9e24, _0x48ad87, _0xbeeae5, limitCount, limit))
          return _0x1b3106(
            "Limit\x20kamu\x20sudah\x20habis\x20silahkan\x20kirim\x20" +
              _0x4baec1 +
              _0x3d5088(0x414)
          );
        if (_0x42ae18["length"] < 0x2)
          return _0x1b3106(_0x3d5088(0x275) + _0x36ed63 + "\x20link");
        if (!_0x5f1cc8(_0x42ae18[0x1])) return _0x1b3106(_0x3d5088(0x589));
        if (!_0x42ae18[0x1][_0x3d5088(0x24f)]("tiktok"))
          return _0x1b3106(_0x3d5088(0x589));
        _0x1b3106(_0x3d5088(0x517)),
          (_0x1bb554 = await fetchJson(
            _0x3d5088(0x44b) +
              global[_0x3d5088(0x2ea)] +
              _0x3d5088(0x20e) +
              _0x42ae18[0x1]
          )),
          _0x291436[_0x3d5088(0x1fe)](
            _0xdd6e0f,
            { audio: { url: _0x1bb554["result"] }, mimetype: _0x3d5088(0x1eb) },
            { quoted: _0x12e00d }
          ),
          limitAdd(_0xaa9e24, limit);
        break;
      case _0x4baec1 + "igdl":
      case _0x4baec1 + _0x3d5088(0x481):
      case _0x4baec1 + "ig":
        _0x2c9561(_0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1], _0xaa9e24, _cmd);
        if (isLimit(_0xaa9e24, _0x48ad87, _0xbeeae5, limitCount, limit))
          return _0x1b3106(_0x3d5088(0x2f1) + _0x4baec1 + _0x3d5088(0x414));
        if (_0x42ae18[_0x3d5088(0x3c1)] < 0x2)
          return _0x1b3106(_0x3d5088(0x275) + _0x36ed63 + _0x3d5088(0x2b4));
        if (!_0x5f1cc8(_0x42ae18[0x1])) return _0x1b3106(_0x3d5088(0x5e7));
        if (!_0x42ae18[0x1][_0x3d5088(0x24f)](_0x3d5088(0x410)))
          return _0x1b3106(_0x3d5088(0x589));
        _0x1b3106("Tunggu\x20sebentar..."),
          (_0x1bb554 = await fetchJson(
            _0x3d5088(0x539) + global["lolkey"] + "&url=" + _0x42ae18[0x1]
          )),
          _0x1b3106(_0x5117c6);
        for (let _0x4a5797 of _0x1bb554["result"][0x0]) {
          if (_0x4a5797[_0x3d5088(0x51e)] === "mp4")
            _0x291436["sendMessage"](_0xdd6e0f, {
              video: { url: _0x4a5797["url"] },
            });
          else
            _0x4a5797[_0x3d5088(0x51e)] === "jpg" &&
              _0x291436[_0x3d5088(0x1fe)](_0xdd6e0f, {
                image: { url: _0x4a5797[_0x3d5088(0x528)] },
              });
        }
        limitAdd(_0xaa9e24, limit);
        break;
      case _0x4baec1 + "facebook":
      case _0x4baec1 + _0x3d5088(0x4c5):
        _0x2c9561(_0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1], _0xaa9e24, _cmd);
        if (isLimit(_0xaa9e24, _0x48ad87, _0xbeeae5, limitCount, limit))
          return _0x1b3106(_0x3d5088(0x2f1) + _0x4baec1 + _0x3d5088(0x414));
        if (_0x42ae18[_0x3d5088(0x3c1)] < 0x2)
          return _0x1b3106(_0x3d5088(0x275) + _0x36ed63 + _0x3d5088(0x2b4));
        if (!_0x5f1cc8(_0x42ae18[0x1])) return _0x1b3106(_0x3d5088(0x5e7));
        if (!_0x42ae18[0x1][_0x3d5088(0x24f)]("facebook.com"))
          return _0x1b3106(_0x3d5088(0x280));
        _0x1b3106(_0x3d5088(0x435)),
          (_0x1bb554 = await fetchJson(
            _0x3d5088(0x62c) +
              global[_0x3d5088(0x2ea)] +
              _0x3d5088(0x20e) +
              _0x42ae18[0x1]
          )),
          _0x291436[_0x3d5088(0x1fe)](
            _0xdd6e0f,
            {
              video: { url: _0x1bb554["result"][0x0] },
              caption: _0x1bb554["title"],
            },
            { quoted: _0x12e00d }
          ),
          limitAdd(_0xaa9e24, limit);
        break;
      case _0x4baec1 + "ytplay":
      case _0x4baec1 + _0x3d5088(0x54b):
      case _0x4baec1 + "ytdl":
        {
          _0x2c9561(
            _0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1],
            _0xaa9e24,
            _cmd
          );
          if (isLimit(_0xaa9e24, _0x48ad87, _0xbeeae5, limitCount, limit))
            return _0x1b3106(_0x3d5088(0x2f1) + _0x4baec1 + _0x3d5088(0x414));
          if (!_0x1fe3c5)
            return _0x1b3106(
              _0x3d5088(0x5fc) + (_0x4baec1 + _0x36ed63) + "\x20Lagu\x20sad"
            );
          let _0x525080 = await yts("" + _0x1fe3c5),
            _0x15d72f =
              "*Team\x20Tabrak\x20Lurus*\x0a\x0a_>\x20Title\x20:\x20" +
              _0x525080[_0x3d5088(0x42f)][0x1][_0x3d5088(0x5d2)] +
              "_\x0a_>\x20Views\x20:\x20" +
              _0x525080[_0x3d5088(0x42f)][0x1][_0x3d5088(0x68b)] +
              _0x3d5088(0x3fc) +
              _0x525080[_0x3d5088(0x42f)][0x1][_0x3d5088(0x2c7)] +
              "_\x20_>Upload\x20:\x20" +
              _0x525080[_0x3d5088(0x42f)][0x1][_0x3d5088(0x39e)] +
              _0x3d5088(0x592) +
              _0x525080["videos"][0x1][_0x3d5088(0x528)] +
              "_",
            _0x3e2c1a = await getBuffer(
              _0x525080["all"][0x1][_0x3d5088(0x49d)]
            );
          _0x291436["sendMessage"](
            _0xdd6e0f,
            { image: _0x3e2c1a, caption: _0x15d72f },
            { quoted: _0x12e00d }
          );
          let _0x5d3cb7 = _0x525080[_0x3d5088(0x5f6)][0x1][_0x3d5088(0x528)];
          const _0x671070 = require(_0x3d5088(0x2b9));
          let _0x1a72d2 =
              _0x3d5088(0x4e6) +
              _0x525080["all"][0x1][_0x3d5088(0x5d2)] +
              _0x3d5088(0x331),
            _0xf4e2e7 = _0x671070(_0x5d3cb7, { filter: _0x3d5088(0x545) })
              ["pipe"](fs["createWriteStream"](_0x1a72d2))
              ["on"]("finish", async () => {
                var _0x59c58f = _0x3d5088;
                _0x291436[_0x59c58f(0x1fe)](
                  _0xdd6e0f,
                  {
                    audio: fs[_0x59c58f(0x4a0)](_0x1a72d2),
                    mimetype: "audio/mpeg",
                    ptt: !![],
                  },
                  { quoted: _0x12e00d }
                );
              });
          limitAdd(_0xaa9e24, limit);
        }
        break;
      case _0x4baec1 + _0x3d5088(0x5ed):
        if (!_0xbeeae5) return _0x1b3106("Only\x20owner");
        _0x1b3106(_0x3d5088(0x68d)),
          fse[_0x3d5088(0x3be)](_0x3d5088(0x32f)),
          fse["rmdirSync"]("./trash"),
          fse[_0x3d5088(0x2da)](_0x3d5088(0x32f)),
          _0x1b3106(_0x3d5088(0x3e8));
        break;
      case _0x4baec1 + "yts":
      case _0x4baec1 + _0x3d5088(0x53e):
        _0x2c9561(_0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1], _0xaa9e24, _cmd);
        if (isLimit(_0xaa9e24, _0x48ad87, _0xbeeae5, limitCount, limit))
          return _0x1b3106(
            _0x3d5088(0x2f1) + _0x4baec1 + "limit\x20untuk\x20mengecek\x20limit"
          );
        if (_0x42ae18[_0x3d5088(0x3c1)] < 0x2)
          return _0x1b3106(
            "Kirim\x20perintah\x20" + _0x36ed63 + _0x3d5088(0x50f)
          );
        yts(_0x1fe3c5)
          [_0x3d5088(0x34a)]((_0x13f9c3) => {
            var _0x2bb19b = _0x3d5088;
            let _0x2f0d93 = _0x13f9c3[_0x2bb19b(0x5f6)];
            var _0x3e0754 = 0xf;
            if (_0x2f0d93[_0x2bb19b(0x3c1)] < _0x3e0754)
              _0x3e0754 = _0x2f0d93[_0x2bb19b(0x3c1)];
            var _0x24fe20 = 0x0;
            let _0x1ec239 = _0x2bb19b(0x482) + _0x1fe3c5 + "*\x0a";
            for (let _0x2d577b = 0x0; _0x2d577b < _0x3e0754; _0x2d577b++) {
              (_0x24fe20 += 0x1),
                (_0x1ec239 +=
                  "\x0a─────────────────\x0a\x0a*No\x20Urutan\x20:\x20" +
                  _0x24fe20[_0x2bb19b(0x2f6)]() +
                  _0x2bb19b(0x391) +
                  _0x2f0d93[_0x2d577b][_0x2bb19b(0x5d2)] +
                  _0x2bb19b(0x398) +
                  _0x2f0d93[_0x2d577b][_0x2bb19b(0x4f3)] +
                  _0x2bb19b(0x2b2) +
                  _0x2f0d93[_0x2d577b][_0x2bb19b(0x423)]["name"] +
                  _0x2bb19b(0x4b5) +
                  _0x2f0d93[_0x2d577b][_0x2bb19b(0x39e)] +
                  "\x0a*▢\x20Ditonton\x20:*\x20" +
                  _0x2f0d93[_0x2d577b][_0x2bb19b(0x68b)] +
                  _0x2bb19b(0x2d3) +
                  _0x2f0d93[_0x2d577b][_0x2bb19b(0x2c7)] +
                  _0x2bb19b(0x3ed) +
                  _0x2f0d93[_0x2d577b][_0x2bb19b(0x528)] +
                  "\x0a");
            }
            _0x291436[_0x2bb19b(0x1fe)](
              _0xdd6e0f,
              {
                image: { url: _0x2f0d93[0x0][_0x2bb19b(0x49d)] },
                caption: _0x1ec239,
              },
              { quoted: _0x12e00d }
            ),
              _0x1b3106(
                "Waiting...\x0a\x0auntuk\x20mengambil\x20hasil\x20yang\x20di\x20temukan.\x0a\x0a.getvideo\x20<noUrutan>\x0a.getmusic\x20<noUrutan>"
              ),
              limitAdd(_0xaa9e24, limit);
          })
          [_0x3d5088(0x546)](() => _0x1b3106("Status:\x200"));
        break;
      case _0x4baec1 + _0x3d5088(0x56e):
      case _0x4baec1 + _0x3d5088(0x399):
        {
          if (isLimit(_0xaa9e24, _0x48ad87, _0xbeeae5, limitCount, limit))
            return _0x1b3106(_0x3d5088(0x2f1) + _0x4baec1 + _0x3d5088(0x414));
          if (!_0x11f65b)
            return _0x1b3106(
              _0x3d5088(0x697) +
                _0x4baec1 +
                _0x3d5088(0x23c) +
                _0x36ed63 +
                _0x3d5088(0x4bb)
            );
          if (!_0x12e00d[_0x3d5088(0x341)][_0x3d5088(0x685)])
            return _0x1b3106(_0x3d5088(0x3b4));
          if (_0x42ae18[_0x3d5088(0x3c1)] < 0x2)
            return _0x1b3106(
              _0x3d5088(0x697) +
                _0x4baec1 +
                _0x3d5088(0x23c) +
                _0x36ed63 +
                _0x3d5088(0x4bb)
            );
          var _0x476ae4 = await _0x12e00d["quotedMsg"][_0x3d5088(0x567)],
            _0x590a63 =
              /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/gi,
            _0x3f93e6 = [..._0x476ae4[_0x3d5088(0x54c)](_0x590a63)][
              _0x3d5088(0x686)
            ]((_0x4f340a) => _0x4f340a[0x1]);
          if (_0x3f93e6[_0x3d5088(0x3c1)] == 0x0)
            return _0x1b3106(
              "Reply\x20hasil\x20dari\x20*" +
                _0x4baec1 +
                "ytsearch*\x20dengan\x20perintah\x20*" +
                _0x36ed63 +
                _0x3d5088(0x1b2)
            );
          if (isNaN(_0x42ae18[0x1]))
            return _0x1b3106(_0x3d5088(0x52a) + _0x36ed63 + "\x202");
          if (_0x42ae18[0x1] > _0x3f93e6[_0x3d5088(0x3c1)])
            return _0x1b3106(
              "Urutan\x20Hasil\x20*" +
                _0x4baec1 +
                _0x3d5088(0x582) +
                _0x3f93e6["length"] +
                "*"
            );
          _0x1b3106("_*Wait...*_");
          let _0x4a510c = await bochil[_0x3d5088(0x44d)](
              _0x3d5088(0x32c) + _0x3f93e6[_0x42ae18[0x1] - 0x1]
            ),
            _0x1b3284 = await _0x4a510c[_0x3d5088(0x507)][_0x3d5088(0x527)][
              "download"
            ]();
          if (
            _0x4a510c[_0x3d5088(0x507)][_0x3d5088(0x527)][_0x3d5088(0x321)] >
            0xc350
          )
            return _0x1b3106(
              "Ukuran\x20melebihi\x20batas\x20maksimal\x2010\x20MB\x0a\x0a*link\x20download*\x0a" +
                _0x1b3284
            );
          _0x291436[_0x3d5088(0x1fe)](
            _0xdd6e0f,
            {
              audio: { url: _0x1b3284 },
              mimetype: _0x3d5088(0x1eb),
              filename: "" + _0x4a510c[_0x3d5088(0x5d2)],
              contextInfo: {
                externalAdReply: {
                  showAdAttribution: ![],
                  mediaType: 0x1,
                  title: "" + _0x4a510c[_0x3d5088(0x5d2)],
                  sourceUrl: "" + _0x1fe3c5,
                  thumbnailUrl: _0x4a510c[_0x3d5088(0x5e9)],
                  renderLargerThumbnail: !![],
                },
              },
            },
            { quoted: _0x12e00d }
          ),
            limitAdd(_0xaa9e24, limit);
        }
        break;
      case _0x4baec1 + _0x3d5088(0x543):
      case _0x4baec1 + _0x3d5088(0x5b6):
        {
          if (isLimit(_0xaa9e24, _0x48ad87, _0xbeeae5, limitCount, limit))
            return _0x1b3106(_0x3d5088(0x2f1) + _0x4baec1 + _0x3d5088(0x414));
          if (!_0x11f65b)
            return _0x1b3106(
              _0x3d5088(0x697) +
                _0x4baec1 +
                _0x3d5088(0x23c) +
                _0x36ed63 +
                _0x3d5088(0x4bb)
            );
          if (!_0x12e00d["quoted"][_0x3d5088(0x685)])
            return _0x1b3106(_0x3d5088(0x3b4));
          if (_0x42ae18[_0x3d5088(0x3c1)] < 0x2)
            return _0x1b3106(
              _0x3d5088(0x697) +
                _0x4baec1 +
                _0x3d5088(0x23c) +
                _0x36ed63 +
                _0x3d5088(0x4bb)
            );
          var _0x476ae4 = await _0x12e00d[_0x3d5088(0x4b2)][_0x3d5088(0x567)],
            _0x590a63 =
              /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/gi,
            _0x3f93e6 = [..._0x476ae4[_0x3d5088(0x54c)](_0x590a63)]["map"](
              (_0x4bb20b) => _0x4bb20b[0x1]
            );
          if (_0x3f93e6[_0x3d5088(0x3c1)] == 0x0)
            return _0x1b3106(
              _0x3d5088(0x426) +
                _0x4baec1 +
                _0x3d5088(0x4c8) +
                _0x36ed63 +
                _0x3d5088(0x1b2)
            );
          if (isNaN(_0x42ae18[0x1]))
            return _0x1b3106(_0x3d5088(0x52a) + _0x36ed63 + "\x202");
          if (_0x42ae18[0x1] > _0x3f93e6[_0x3d5088(0x3c1)])
            return _0x1b3106(
              _0x3d5088(0x53b) +
                _0x4baec1 +
                _0x3d5088(0x582) +
                _0x3f93e6[_0x3d5088(0x3c1)] +
                "*"
            );
          _0x1b3106(_0x3d5088(0x382));
          let _0xbff87b = await bochil[_0x3d5088(0x44d)](
              _0x3d5088(0x32c) + _0x3f93e6[_0x42ae18[0x1] - 0x1]
            ),
            _0x589f3a = await _0xbff87b[_0x3d5088(0x1f3)][_0x3d5088(0x282)][
              _0x3d5088(0x4ab)
            ]();
          if (
            _0xbff87b[_0x3d5088(0x1f3)][_0x3d5088(0x282)]["fileSize"] > 0xc350
          )
            return _0x1b3106(_0x3d5088(0x33a) + _0x589f3a);
          _0x291436[_0x3d5088(0x1fe)](
            _0xdd6e0f,
            {
              video: { url: _0x589f3a, caption: _0x3d5088(0x629) },
              contextInfo: {
                externalAdReply: {
                  showAdAttribution: ![],
                  mediaType: 0x1,
                  title: "" + _0xbff87b[_0x3d5088(0x5d2)],
                  sourceUrl: "" + _0x1fe3c5,
                  thumbnailUrl: _0xbff87b["thumbnail"],
                  renderLargerThumbnail: ![],
                },
              },
            },
            { quoted: _0x12e00d }
          ),
            limitAdd(_0xaa9e24, limit);
        }
        break;
      case _0x4baec1 + _0x3d5088(0x559):
        _0x2c9561(_0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1], _0xaa9e24, _cmd);
        if (isLimit(_0xaa9e24, _0x48ad87, _0xbeeae5, limitCount, limit))
          return _0x1b3106(_0x3d5088(0x2f1) + _0x4baec1 + _0x3d5088(0x414));
        if (_0x1710ba) return _0x1b3106(_0x3d5088(0x30a));
        var _0x3b5758 = await baileys["prepareWAMessageMedia"](
            { image: { url: _0x3d5088(0x26c) } },
            { upload: _0x291436[_0x3d5088(0x389)] }
          ),
          _0x288824 = await baileys[_0x3d5088(0x458)](
            _0xdd6e0f,
            baileys[_0x3d5088(0x2aa)][_0x3d5088(0x61a)][_0x3d5088(0x4ad)]({
              productMessage: {
                product: {
                  productImage: _0x3b5758[_0x3d5088(0x206)],
                  productId: _0x3d5088(0x31e),
                  title: "Welcome\x20To\x20Bot\x20Clone",
                  description: "-h\x20To\x20helping\x20command",
                  currencyCode: _0x3d5088(0x319),
                  priceAmount1000: _0x3d5088(0x5c9),
                  productImageCount: 0x2,
                },
                businessOwnerJid: "0@s.whatsapp.net",
              },
            }),
            _0x12e00d[_0x3d5088(0x341)] && _0x12e00d[_0x3d5088(0x341)]["fromMe"]
              ? {
                  contextInfo: {
                    ..._0x12e00d[_0x3d5088(0x3da)]["contextInfo"],
                    title: _0x3d5088(0x640),
                    body: tuxt,
                  },
                }
              : {}
          );
        await _0x291436[_0x3d5088(0x3e4)](_0xdd6e0f, _0x288824["message"], {
          messageId: _0x288824[_0x3d5088(0x4b9)]["id"],
        }),
          jadibot(_0x291436, _0x12e00d),
          limitAdd(_0xaa9e24, limit);
        break;
      case _0x4baec1 + _0x3d5088(0x4d3):
        if (_0x1710ba) return _0x1b3106(_0x3d5088(0x30a));
        if (!_0x1fe3c5) return _0x1b3106(_0x3d5088(0x1f7));
        dir = path["join"](__dirname, _0x3d5088(0x427) + _0x1fe3c5);
        let _0x2e7f59 = await fs["existsSync"](dir);
        console[_0x3d5088(0x3e9)](_0x2e7f59);
        if (_0x2e7f59)
          fse["emptyDirSync"](dir),
            fse[_0x3d5088(0x3e5)](dir),
            await _0x291436[_0x3d5088(0x1fe)](
              _0xdd6e0f,
              { text: _0x3d5088(0x2f5) },
              { quoted: _0x12e00d }
            );
        else return _0x1b3106(_0x3d5088(0x28f));
        break;
      case _0x4baec1 + _0x3d5088(0x64b):
        try {
          let _0xe59548 = [
            ...new Set([
              ...global["conns"]
                [_0x3d5088(0x641)]((_0x5a9bf9) => _0x5a9bf9[_0x3d5088(0x283)])
                ["map"]((_0x2d9cf3) => _0x2d9cf3[_0x3d5088(0x283)]),
            ]),
          ];
          te = "*List\x20Bot\x20Clone*\x0a\x0a";
          for (let _0x27da24 of _0xe59548) {
            (y = await decodeJid(_0x27da24["id"])),
              (te += _0x3d5088(0x4fb) + y[_0x3d5088(0x648)]("@")[0x0] + "\x0a"),
              (te +=
                "\x20>\x20Name\x20:\x20" +
                _0x27da24[_0x3d5088(0x4e9)] +
                "\x0a\x0a");
          }
          _0x291436["sendMessage"](
            _0xdd6e0f,
            { text: te, mentions: [y] },
            { quoted: _0x12e00d }
          );
        } catch (_0x4b6df3) {
          console[_0x3d5088(0x3e9)](_0x4b6df3),
            _0x1b3106("Belum\x20Ada\x20User\x20Yang\x20Jadibot");
        }
        break;
      case _0x4baec1 + _0x3d5088(0x365):
        _0x2c9561(_0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1], _0xaa9e24, _cmd);
        if (isGame(_0xaa9e24, _0xbeeae5, gcount, glimit))
          return _0x1b3106(_0x3d5088(0x669));
        if (_0x1710ba) return _0x1b3106(_0x3d5088(0x479));
        if (akinator[_0x3d5088(0x42d)](_0xaa9e24[_0x3d5088(0x648)]("@")[0x0]))
          return _0x1b3106("Selesain\x20yg\x20sebelumnya\x20dulu\x20atuh");
        var _0x1ba3bd = await _0x5d976e();
        if (_0x1ba3bd["status"] == 0xc8) {
          var {
            server: _0x4cc70d,
            frontaddr: _0x4a8f28,
            session: _0x2a20bd,
            signature: _0x4fa68b,
            question: _0xab27eb,
            step: _0x5b1a07,
          } = _0x1ba3bd["result"];
          const _0x24612a = {};
          (_0x24612a[_0x3d5088(0x219)] = _0x4cc70d),
            (_0x24612a["frontaddr"] = _0x4a8f28),
            (_0x24612a["session"] = _0x2a20bd),
            (_0x24612a[_0x3d5088(0x468)] = _0x4fa68b),
            (_0x24612a[_0x3d5088(0x45e)] = _0xab27eb),
            (_0x24612a[_0x3d5088(0x34d)] = _0x5b1a07);
          var _0x4622e1 = _0xab27eb + "\x0a\x0a";
          (_0x4622e1 += "0\x20-\x20Ya\x0a"),
            (_0x4622e1 += _0x3d5088(0x65d)),
            (_0x4622e1 += _0x3d5088(0x67b)),
            (_0x4622e1 += _0x3d5088(0x510)),
            (_0x4622e1 += _0x3d5088(0x695)),
            _0x291436[_0x3d5088(0x1fe)](
              _0xdd6e0f,
              { text: _0x4622e1 },
              { quoted: _0x12e00d }
            )[_0x3d5088(0x34a)](() => {
              var _0xf31936 = _0x3d5088;
              akinator[_0xaa9e24[_0xf31936(0x648)]("@")[0x0]] = _0x24612a;
            }),
            gameAdd(_0xaa9e24, glimit);
        } else _0x1b3106("ERROR:\x20Hubungi\x20owner");
        break;
      case _0x4baec1 + _0x3d5088(0x1db):
      case _0x4baec1 + "delakinator":
        if (_0x1710ba) return _0x1b3106("Only\x20private\x20chat");
        if (!akinator["hasOwnProperty"](_0xaa9e24[_0x3d5088(0x648)]("@")[0x0]))
          return _0x1b3106(
            "Anda\x20tidak\x20memiliki\x20akinator\x20sebelumnya"
          );
        delete akinator[_0xaa9e24[_0x3d5088(0x648)]("@")[0x0]],
          _0x1b3106(_0x3d5088(0x1f6));
        break;
      case _0x4baec1 + "tictactoe":
      case _0x4baec1 + _0x3d5088(0x430):
      case _0x4baec1 + _0x3d5088(0x650):
        _0x2c9561(_0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1], _0xaa9e24, _cmd);
        if (!_0x1710ba) return _0x1b3106(_0x3d5088(0x443));
        if (isGame(_0xaa9e24, _0xbeeae5, gcount, glimit))
          return _0x1b3106(_0x3d5088(0x669));
        if (isTicTacToe(_0xdd6e0f, tictactoe))
          return _0x1b3106(_0x3d5088(0x35b));
        if (_0x42ae18[_0x3d5088(0x3c1)] < 0x2)
          return _0x1b3106(
            "Kirim\x20perintah\x20*" + _0x4baec1 + _0x3d5088(0x393)
          );
        if (_0xdb9f53[_0x3d5088(0x3c1)] !== 0x1) {
          if (_0xdb9f53[0x0] === _0x480dc7) return _0x1b3106(_0x3d5088(0x5a6));
          if (_0xdb9f53[0x0] === _0xaa9e24) return _0x1b3106(_0x3d5088(0x3f6));
          var _0x388dbc = _0x1b4c8c(0x64, 0x96);
          _0x357397(
            _0x5a45e1(
              "@" +
                _0xaa9e24["split"]("@")[0x0] +
                "\x20menantang\x20@" +
                _0xdb9f53[0x0][_0x3d5088(0x648)]("@")[0x0] +
                _0x3d5088(0x619) +
                _0x388dbc +
                _0x3d5088(0x368)
            ),
            [_0xaa9e24, _0xdb9f53[0x0]],
            ![]
          ),
            tictactoe[_0x3d5088(0x23d)]({
              id: _0xdd6e0f,
              status: null,
              hadiah: _0x388dbc,
              penantang: _0xaa9e24,
              ditantang: _0xdb9f53[0x0],
              TicTacToe: [
                "1️⃣",
                "2️⃣",
                "3️⃣",
                _0x3d5088(0x238),
                _0x3d5088(0x55c),
                "6️⃣",
                _0x3d5088(0x21b),
                _0x3d5088(0x53c),
                _0x3d5088(0x4d7),
              ],
            }),
            gameAdd(_0xaa9e24, limit);
        } else
          _0x1b3106("Kirim\x20perintah\x20*" + _0x4baec1 + _0x3d5088(0x393));
        break;
      case _0x4baec1 + "delttt":
      case _0x4baec1 + "delttc":
        if (!_0x1710ba) return _0x1b3106(_0x3d5088(0x443));
        if (isGame(_0xaa9e24, _0xbeeae5, gcount, glimit))
          return _0x1b3106(_0x3d5088(0x669));
        if (!isTicTacToe(_0xdd6e0f, tictactoe))
          return _0x1b3106(
            "Tidak\x20ada\x20sesi\x20game\x20tictactoe\x20di\x20grup\x20ini"
          );
        var _0x227b23 = getPosTic(_0xdd6e0f, tictactoe);
        if (tictactoe[_0x227b23][_0x3d5088(0x265)][_0x3d5088(0x24f)](_0xaa9e24))
          tictactoe[_0x3d5088(0x2e0)](_0x227b23, 0x1),
            _0x1b3106(_0x3d5088(0x498));
        else {
          if (tictactoe[_0x227b23][_0x3d5088(0x2c0)]["includes"](_0xaa9e24))
            tictactoe[_0x3d5088(0x2e0)](_0x227b23, 0x1),
              _0x1b3106(_0x3d5088(0x498));
          else {
            if (_0x1be5b6)
              tictactoe[_0x3d5088(0x2e0)](_0x227b23, 0x1),
                _0x1b3106(_0x3d5088(0x498));
            else
              _0xbeeae5
                ? (tictactoe["splice"](_0x227b23, 0x1),
                  _0x1b3106(_0x3d5088(0x498)))
                : _0x1b3106(_0x3d5088(0x664));
          }
        }
        break;
      case _0x4baec1 + _0x3d5088(0x4a4):
        _0x2c9561(_0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1], _0xaa9e24, _cmd);
        if (isGame(_0xaa9e24, _0xbeeae5, gcount, glimit))
          return _0x1b3106(_0x3d5088(0x669));
        if (isPlayGame(_0xdd6e0f, tebakgambar))
          return greply(
            _0xdd6e0f,
            _0x3d5088(0x1b9),
            tebakgambar[getGamePosi(_0xdd6e0f, tebakgambar)]["m"]
          );
        require(_0x3d5088(0x387))
          [_0x3d5088(0x4a4)]()
          [_0x3d5088(0x34a)]((_0x398864) => {
            var _0x261e95 = _0x3d5088;
            (_0x398864 = _0x398864[0x0]),
              (_0x398864[_0x261e95(0x422)] = _0x398864[_0x261e95(0x422)]
                [_0x261e95(0x648)]("Jawaban\x20")
                [_0x261e95(0x637)](""));
            var _0x4fcd11 =
              _0x261e95(0x3f4) +
              _0x5a45e1(
                _0x261e95(0x22c) +
                  _0x398864[_0x261e95(0x422)][_0x261e95(0x644)](
                    /[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi,
                    "_"
                  ) +
                  _0x261e95(0x4a5) +
                  gamewaktu +
                  "s"
              );
            _0x291436[_0x261e95(0x1fe)](
              _0xdd6e0f,
              {
                image: { url: _0x398864[_0x261e95(0x49d)] },
                caption: _0x4fcd11,
              },
              { quoted: _0x12e00d }
            )[_0x261e95(0x34a)]((_0x42c6b0) => {
              var _0x166574 = _0x261e95,
                _0x5d5694 = _0x398864[_0x166574(0x422)][_0x166574(0x4ce)]();
              addPlayGame(
                _0xdd6e0f,
                _0x166574(0x5d9),
                _0x5d5694,
                gamewaktu,
                _0x42c6b0,
                tebakgambar
              ),
                gameAdd(_0xaa9e24, glimit);
            });
          });
        break;
      case _0x4baec1 + _0x3d5088(0x2a5):
        _0x2c9561(_0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1], _0xaa9e24, _cmd);
        if (!_0x1fe3c5)
          return _0x1b3106(
            "Contoh:\x20.roboguru\x20boedi\x20oetomo|sma|sejarah"
          );
        (aw = _0x1fe3c5[_0x3d5088(0x648)]("|")[0x0]),
          (kel = _0x1fe3c5[_0x3d5088(0x648)]("|")[0x1]),
          (sub = _0x1fe3c5[_0x3d5088(0x648)]("|")[0x2]);
        let _0x4dd726 = await fetchJson(
          "https://api.lolhuman.xyz/api/roboguru?apikey=" +
            global[_0x3d5088(0x2ea)] +
            _0x3d5088(0x406) +
            aw +
            _0x3d5088(0x4ec) +
            kel +
            _0x3d5088(0x663) +
            sub
        );
        _0x1b3106(
          _0x3d5088(0x392) +
            _0x4dd726[_0x3d5088(0x4cb)][0x0][_0x3d5088(0x45e)] +
            _0x3d5088(0x526) +
            _0x4dd726[_0x3d5088(0x4cb)][0x0][_0x3d5088(0x3ad)]
        );
        break;
      case _0x4baec1 + _0x3d5088(0x2fa):
        _0x2c9561(_0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1], _0xaa9e24, _cmd);
        if (!_0x1fe3c5) return _0x1b3106(_0x3d5088(0x578));
        let _0x2aa44a = await fetchJson(
          _0x3d5088(0x2a3) + global["lolkey"] + _0x3d5088(0x406) + _0x1fe3c5
        );
        _0x1b3106(_0x2aa44a[_0x3d5088(0x4cb)][0x0]["answer"]);
        break;
      case _0x4baec1 + "wiki":
      case _0x4baec1 + _0x3d5088(0x62e):
        _0x2c9561(_0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1], _0xaa9e24, _cmd);
        if (!_0x1fe3c5)
          return _0x1b3106("Contoh:\x20.wikipedia\x20nasi\x20goreng");
        let _0x13cd5d = await fetchJson(
          _0x3d5088(0x4a6) + global[_0x3d5088(0x2ea)] + "&query=" + _0x1fe3c5
        );
        _0x1b3106(_0x13cd5d[_0x3d5088(0x4cb)]);
        break;
      case _0x4baec1 + _0x3d5088(0x43d):
      case _0x4baec1 + "wnime":
        _0x2c9561(_0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1], _0xaa9e24, _cmd);
        if (isLimit(_0xaa9e24, _0x48ad87, _0xbeeae5, limitCount, limit))
          return _0x1b3106(
            _0x3d5088(0x2f1) + _0x4baec1 + "limit\x20untuk\x20mengecek\x20limit"
          );
        if (_0x2e189f || _0x11f65b) {
          (dwn = await _0x5856fd(_0x3d5088(0x49d), "wnim.jpg")),
            (up = await uploadImages(fs["readFileSync"](dwn))),
            (res = await fetchJson(
              _0x3d5088(0x675) +
                global[_0x3d5088(0x2ea)] +
                _0x3d5088(0x60e) +
                up
            ));
          let _0x3160e8 =
            _0x3d5088(0x696) +
            res[_0x3d5088(0x4cb)][_0x3d5088(0x1c1)] +
            "\x0aTITLE\x20NATIVE:\x20" +
            res[_0x3d5088(0x4cb)][_0x3d5088(0x53d)] +
            _0x3d5088(0x409) +
            res[_0x3d5088(0x4cb)][_0x3d5088(0x2fe)] +
            _0x3d5088(0x67c) +
            res[_0x3d5088(0x4cb)]["episode"] +
            "\x0aAT:\x20" +
            res[_0x3d5088(0x4cb)]["at"] +
            _0x3d5088(0x1c0) +
            res[_0x3d5088(0x4cb)][_0x3d5088(0x1f3)];
          _0x291436["sendMessage"](
            _0xdd6e0f,
            { text: _0x3160e8 },
            { quoted: _0x12e00d }
          ),
            fs[_0x3d5088(0x2c4)](dwn);
        } else _0x1b3106(_0x3d5088(0x39f));
        limitAdd(_0xaa9e24, limit);
        break;
      case _0x4baec1 + "whatmanga":
        _0x2c9561(_0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1], _0xaa9e24, _cmd);
        if (isLimit(_0xaa9e24, _0x48ad87, _0xbeeae5, limitCount, limit))
          return _0x1b3106(_0x3d5088(0x2f1) + _0x4baec1 + _0x3d5088(0x414));
        _0x2e189f || _0x11f65b
          ? ((dwn = await _0x5856fd(_0x3d5088(0x49d), _0x3d5088(0x5ce))),
            (up = await uploadImages(fs[_0x3d5088(0x4a0)](dwn))),
            (res = await fetchJson(
              _0x3d5088(0x675) +
                global[_0x3d5088(0x2ea)] +
                _0x3d5088(0x60e) +
                up
            )),
            (txet =
              _0x3d5088(0x3b0) +
              res[_0x3d5088(0x4cb)][0x0][_0x3d5088(0x5d2)] +
              "\x0aPART:\x20" +
              res[_0x3d5088(0x4cb)][0x0]["part"] +
              _0x3d5088(0x63e) +
              res[_0x3d5088(0x4cb)][0x0][_0x3d5088(0x511)] +
              _0x3d5088(0x317) +
              res[_0x3d5088(0x4cb)][0x0][_0x3d5088(0x3b9)][0x0]),
            _0x291436[_0x3d5088(0x1fe)](
              _0xdd6e0f,
              { text: txet },
              { quoted: _0x12e00d }
            ),
            fs["unlinkSync"](dwn))
          : _0x1b3106(_0x3d5088(0x39f));
        limitAdd(_0xaa9e24, limit);
        break;
      case _0x4baec1 + _0x3d5088(0x293):
      case _0x4baec1 + _0x3d5088(0x486):
        _0x2c9561(_0x36ed63[_0x3d5088(0x648)](_0x4baec1)[0x1], _0xaa9e24, _cmd);
        if (!_0x1fe3c5) return _0x1b3106(_0x3d5088(0x4e4));
        (res = await fetchJson(
          "https://api.lolhuman.xyz/api/otakudesusearch?apikey=" +
            global[_0x3d5088(0x2ea)] +
            _0x3d5088(0x406) +
            _0x1fe3c5
        )),
          (down = res["result"]["link_dl"]);
        let _0x1ddc49 =
          _0x3d5088(0x400) +
          res[_0x3d5088(0x4cb)]["title"] +
          _0x3d5088(0x375) +
          res["result"][_0x3d5088(0x508)] +
          _0x3d5088(0x216) +
          res["result"]["judul"] +
          "\x0aTYPE:\x20" +
          res[_0x3d5088(0x4cb)]["type"] +
          _0x3d5088(0x67c) +
          res[_0x3d5088(0x4cb)][_0x3d5088(0x4d6)] +
          _0x3d5088(0x376) +
          res[_0x3d5088(0x4cb)]["genres"] +
          _0x3d5088(0x518) +
          res[_0x3d5088(0x4cb)][_0x3d5088(0x48a)] +
          _0x3d5088(0x381);
        var _0x23cef7 = 0xf;
        if (down["length"] < _0x23cef7) _0x23cef7 = down["length"];
        var _0x2cbf49 = 0x0;
        for (let _0x20a6a9 = 0x0; _0x20a6a9 < _0x23cef7; _0x20a6a9++) {
          (_0x2cbf49 += 0x1),
            (_0x1ddc49 +=
              _0x3d5088(0x668) +
              down[_0x20a6a9][_0x3d5088(0x5d2)] +
              _0x3d5088(0x218) +
              down[_0x20a6a9]["link_dl"][0x0][_0x3d5088(0x66f)] +
              "\x0aSIZE:\x20" +
              down[_0x20a6a9][_0x3d5088(0x35c)][0x0][_0x3d5088(0x575)] +
              _0x3d5088(0x1a2) +
              down[_0x20a6a9]["link_dl"][0x0][_0x3d5088(0x35c)][
                _0x3d5088(0x620)
              ] +
              "\x0a");
        }
        _0x1b3106(_0x1ddc49);
        break;
      case _0x4baec1 + "-h":
        let _0x2ac1b9 =
          "_*Helping\x20Command*_\x0a\x0a_*•\x20TOOLS\x20•*_\x0a_1.\x20sticker_\x0aUsage:\x0a_Kirim/reply\x20media\x20image/video/gif\x20&\x20command\x20#sticker_\x0a\x0a_2.\x20tourl_\x0aUsage:\x0a_Kirim/reply\x20media\x20image/video/gif\x20&\x20command\x20#tourl_\x0a\x0a\x0a_*•\x20DOWNLOADER\x20•*_\x0a_1.\x20Instagram\x20download_\x0aUsage:\x0a_Kirim\x20perintah\x20#igdl\x20link\x20media\x20Instagram_\x0a\x0a_2.\x20Facebook\x20download_\x0aUsage:\x0a_Kirim\x20perintah\x20#fbdl\x20link\x20media\x20Facebook_\x0a\x0a_3.\x20Tiktok\x20download_\x0aUsage:\x0a_Kirim\x20perintah\x20#tiktok\x20link\x20media\x20Tiktok_\x0a\x0a_4.\x20YouTube\x20search_\x0aUsage:\x0a_Kirim\x20perintah\x20#yts\x20dj\x20breakbeat_\x0a_Untuk\x20mengambil\x20hasil\x20nya,\x20reply\x20hasil\x20search,\x20dan\x20commamd:_\x0a#getvideo/#getmusic\x20nomor\x20urutan_\x0a\x0a_5.\x20Pinterest_\x0aUsage:\x0a_Kirim\x20perintah\x20#pinterest\x20cecan\x20Or\x20#pinterest\x20cecan\x20--10_\x0a\x0a\x0a_*•\x20Buy/Transfer\x20•*_\x0a_1.\x20Buy\x20limit_\x0aUsage:\x0a_Kirim\x20perintah\x20#buylimit\x20jumlah\x20yang\x20ingin\x20di\x20beli_\x0a\x0a_2.\x20Transfer_\x0aUsage:\x0a_Kirim\x20perintah\x20#transfer\x20@tag\x20jumlah\x20yang\x20ingin\x20di\x20transfer_\x0a";
        _0x1b3106(_0x2ac1b9);
        break;
    }
  } catch (_0x28fe9a) {
    console[_0x3d5088(0x3e9)](util[_0x3d5088(0x58a)](_0x28fe9a));
  }
};
