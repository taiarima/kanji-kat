"use strict";

const kanjiList = [
  {
    kanji: "一",
    kana: "イチ    イツ    ひと-    ひと.つ",
    english: "one ",
  },
  {
    kanji: "右",
    kana: "ウ    ユウ    みぎ",
    english: "right ",
  },
  {
    kanji: "雨",
    kana: "ウ    あめ    あま-    -さめ",
    english: "rain ",
  },
  {
    kanji: "円",
    kana: "エン    まる.い    まる    まど    まど.か    まろ.やか",
    english: "circle, yen, round ",
  },
  {
    kanji: "王",
    kana: "オウ    -ノウ",
    english: "king, rule, magnate ",
  },
  {
    kanji: "音",
    kana: "オン    イン    -ノン    おと    ね",
    english: "sound, noise ",
  },
  {
    kanji: "下",
    kana: "カ    ゲ    した    しも    もと    さ.げる    さ.がる    くだ.る    くだ.り    くだ.す    -くだ.す    くだ.さる    お.ろす    お.りる",
    english: "below, down, descend, give, low, inferior ",
  },
  {
    kanji: "火",
    kana: "カ    ひ    -び    ほ-",
    english: "fire ",
  },
  {
    kanji: "花",
    kana: "カ    ケ    はな",
    english: "flower ",
  },
  {
    kanji: "貝",
    kana: "バイ    かい",
    english: "shellfish ",
  },
  {
    kanji: "学",
    kana: "ガク    まな.ぶ",
    english: "study, learning, science ",
  },
  {
    kanji: "気",
    kana: "キ    ケ    いき",
    english: "spirit, mind ",
  },
  {
    kanji: "休",
    kana: "キュウ    やす.む    やす.まる    やす.める",
    english: "rest, day off, retire, sleep ",
  },
  {
    kanji: "玉",
    kana: "ギョク    たま    たま-    -だま",
    english: "jewel, ball ",
  },
  {
    kanji: "金",
    kana: "キン    コン    ゴン    かね    かな-    -がね",
    english: "gold ",
  },
  {
    kanji: "九",
    kana: "キュウ    ク    ここの    ここの.つ",
    english: "nine ",
  },
  {
    kanji: "空",
    kana: "クウ    そら    あ.く    あ.き    あ.ける    から    す.く    す.かす    むな.しい",
    english: "empty, sky, void, vacant, vacuum ",
  },
  {
    kanji: "月",
    kana: "ゲツ    ガツ    つき",
    english: "month, moon ",
  },
  {
    kanji: "犬",
    kana: "ケン    いぬ    いぬ-",
    english: "dog ",
  },
  {
    kanji: "見",
    kana: "ケン    み.る    み.える    み.せる",
    english: "see, hopes, chances, idea, opinion, look at, visible ",
  },
  {
    kanji: "五",
    kana: "ゴ    いつ    いつ.つ",
    english: "five ",
  },
  {
    kanji: "口",
    kana: "コウ    ク    くち",
    english: "mouth ",
  },
  {
    kanji: "校",
    kana: "コウ    キョウ",
    english: "exam, school, printing, proof, correction ",
  },
  {
    kanji: "左",
    kana: "サ    シャ    ひだり",
    english: "left ",
  },
  {
    kanji: "三",
    kana: "サン    ゾウ    み    み.つ    みっ.つ",
    english: "three ",
  },
  {
    kanji: "山",
    kana: "サン    セン    やま",
    english: "mountain ",
  },
  {
    kanji: "四",
    kana: "シ    よ    よ.つ    よっ.つ    よん",
    english: "four ",
  },
  {
    kanji: "子",
    kana: "シ    ス    ツ    こ    -こ    ね",
    english: "child, sign of the rat, 11PM-1AM, first sign of Chinese zodiac ",
  },
  {
    kanji: "糸",
    kana: "シ    いと",
    english: "thread ",
  },
  {
    kanji: "字",
    kana: "ジ    あざ    あざな    -な",
    english: "character, letter, word, section of village ",
  },
  {
    kanji: "耳",
    kana: "ジ    みみ",
    english: "ear ",
  },
  {
    kanji: "七",
    kana: "シチ    なな    なな.つ    なの",
    english: "seven ",
  },
  {
    kanji: "車",
    kana: "シャ    くるま",
    english: "car ",
  },
  {
    kanji: "手",
    kana: "シュ    ズ    て    て-    -て    た-",
    english: "hand ",
  },
  {
    kanji: "十",
    kana: "ジュウ    ジッ    ジュッ    とお    と",
    english: "ten ",
  },
  {
    kanji: "出",
    kana: "シュツ    スイ    で.る    -で    だ.す    -だ.す    い.でる    い.だす",
    english: "exit, leave ",
  },
  {
    kanji: "女",
    kana: "ジョ    ニョ    ニョウ    おんな    め",
    english: "woman, female ",
  },
  {
    kanji: "小",
    kana: "ショウ    ちい.さい    こ-    お-    さ-",
    english: "little, small ",
  },
  {
    kanji: "上",
    kana: "ジョウ    ショウ    シャン    うえ    -うえ    うわ-    かみ    あ.げる    -あ.げる    あ.がる    -あ.がる    あ.がり    -あ.がり    のぼ.る    のぼ.り    のぼ.せる    のぼ.す    よ.す",
    english: "above, up ",
  },
  {
    kanji: "森",
    kana: "シン    もり",
    english: "forest, woods ",
  },
  {
    kanji: "人",
    kana: "ジン    ニン    ひと    -り    -と",
    english: "person ",
  },
  {
    kanji: "水",
    kana: "スイ    みず    みず-",
    english: "water ",
  },
  {
    kanji: "正",
    kana: "セイ    ショウ    ただ.しい    ただ.す    まさ    まさ.に",
    english: "correct, justice, righteous, 10**40 ",
  },
  {
    kanji: "生",
    kana: "セイ    ショウ    い.きる    い.かす    い.ける    う.まれる    う.まれ    うまれ    う.む    お.う    は.える    は.やす    き    なま    なま-    な.る    な.す    む.す    -う",
    english: "life, genuine, birth ",
  },
  {
    kanji: "青",
    kana: "セイ    ショウ    あお    あお-    あお.い",
    english: "blue, green ",
  },
  {
    kanji: "石",
    kana: "セキ    シャク    コク    いし",
    english: "stone ",
  },
  {
    kanji: "赤",
    kana: "セキ    シャク    あか    あか-    あか.い    あか.らむ    あか.らめる",
    english: "red ",
  },
  {
    kanji: "先",
    kana: "セン    さき    ま.ず",
    english: "before, ahead, previous, future, precedence ",
  },
  {
    kanji: "千",
    kana: "セン    ち",
    english: "thousand ",
  },
  {
    kanji: "川",
    kana: "セン    かわ",
    english: "stream, river ",
  },
  {
    kanji: "早",
    kana: "ソウ    サッ    はや.い    はや    はや-    はや.まる    はや.める    さ-",
    english: "early, fast ",
  },
  {
    kanji: "草",
    kana: "ソウ    くさ    くさ-    -ぐさ",
    english: "grass, weeds, herbs, pasture, write, draft ",
  },
  {
    kanji: "足",
    kana: "ソク    あし    た.りる    た.る    た.す",
    english: "leg, foot, be sufficient, counter for pairs of footwear ",
  },
  {
    kanji: "村",
    kana: "ソン    むら",
    english: "town, village ",
  },
  {
    kanji: "大",
    kana: "ダイ    タイ    おお-    おお.きい    -おお.いに",
    english: "large, big ",
  },
  {
    kanji: "男",
    kana: "ダン    ナン    おとこ    お",
    english: "male ",
  },
  {
    kanji: "竹",
    kana: "チク    たけ",
    english: "bamboo ",
  },
  {
    kanji: "中",
    kana: "チュウ    なか    うち    あた.る",
    english: "in, inside, middle, mean, center ",
  },
  {
    kanji: "虫",
    kana: "チュウ    キ    むし",
    english: "insect, bug, temper ",
  },
  {
    kanji: "町",
    kana: "チョウ    まち",
    english: "village, town, block, street ",
  },
  {
    kanji: "天",
    kana: "テン    あまつ    あめ    あま-",
    english: "heavens, sky, imperial ",
  },
  {
    kanji: "田",
    kana: "デン    た",
    english: "rice field, rice paddy ",
  },
  {
    kanji: "土",
    kana: "ド    ト    つち",
    english: "soil, earth, ground, Turkey ",
  },
  {
    kanji: "二",
    kana: "ニ    ジ    ふた    ふた.つ    ふたた.び",
    english: "two ",
  },
  {
    kanji: "日",
    kana: "ニチ    ジツ    ひ    -び    -か",
    english: "day, sun, Japan ",
  },
  {
    kanji: "入",
    kana: "ニュウ    ジュ    い.る    -い.る    -い.り    い.れる    -い.れ    はい.る",
    english: "enter, insert ",
  },
  {
    kanji: "年",
    kana: "ネン    とし",
    english: "year ",
  },
  {
    kanji: "白",
    kana: "ハク    ビャク    しろ    しら-    しろ.い",
    english: "white ",
  },
  {
    kanji: "八",
    kana: "ハチ    や    や.つ    やっ.つ    よう",
    english: "eight ",
  },
  {
    kanji: "百",
    kana: "ヒャク    ビャク    もも",
    english: "hundred ",
  },
  {
    kanji: "文",
    kana: "ブン    モン    ふみ    あや",
    english: "sentence, literature, style, art, decoration, figures, plan ",
  },
  {
    kanji: "本",
    kana: "ホン    もと",
    english: "book, present, main, true, real, counter for long things ",
  },
  {
    kanji: "名",
    kana: "メイ    ミョウ    な    -な",
    english: "name, noted, distinguished, reputation ",
  },
  {
    kanji: "木",
    kana: "ボク    モク    き    こ-",
    english: "tree, wood ",
  },
  {
    kanji: "目",
    kana: "モク    ボク    め    -め    ま-",
    english: "eye, class, look, insight, experience, care, favor ",
  },
  {
    kanji: "夕",
    kana: "セキ    ゆう",
    english: "evening ",
  },
  {
    kanji: "立",
    kana: "リツ    リュウ    リットル    た.つ    -た.つ    た.ち-    た.てる    -た.てる    た.て-    たて-    -た.て    -だ.て    -だ.てる",
    english: "stand up ",
  },
  {
    kanji: "力",
    kana: "リョク    リキ    リイ    ちから",
    english: "power, strong, strain, bear up, exert ",
  },
  {
    kanji: "林",
    kana: "リン    はやし",
    english: "grove, forest ",
  },
  {
    kanji: "六",
    kana: "ロク    リク    む    む.つ    むっ.つ    むい",
    english: "six ",
  },
  {
    kanji: "引",
    kana: "イン    ひ.く    ひ.き    ひ.き-    -び.き    ひ.ける",
    english: "pull, tug, jerk, admit, install, quote, refer to ",
  },
  {
    kanji: "羽",
    kana: "ウ    は    わ    はね",
    english: "feathers, counter for birds, rabbits ",
  },
  {
    kanji: "雲",
    kana: "ウン    くも    -ぐも",
    english: "cloud ",
  },
  {
    kanji: "園",
    kana: "エン    その",
    english: "park, garden, yard, farm ",
  },
  {
    kanji: "遠",
    kana: "エン    オン    とお.い",
    english: "distant, far ",
  },
  {
    kanji: "黄",
    kana: "コウ    オウ    き    こ-",
    english: "yellow ",
  },
  {
    kanji: "何",
    kana: "カ    なに    なん    なに-    なん-",
    english: "what ",
  },
  {
    kanji: "夏",
    kana: "カ    ガ    ゲ    なつ",
    english: "summer ",
  },
  {
    kanji: "家",
    kana: "カ    ケ    いえ    や    うち",
    english: "house, home ",
  },
  {
    kanji: "科",
    kana: "カ",
    english: "department, course, section ",
  },
  {
    kanji: "歌",
    kana: "カ    うた    うた.う",
    english: "song, sing ",
  },
  {
    kanji: "画",
    kana: "ガ    カク    エ    カイ    えが.く    かく.する    かぎ.る    はかりごと    はか.る",
    english: "brush-stroke, picture ",
  },
  {
    kanji: "会",
    kana: "カイ    エ    あ.う    あ.わせる    あつ.まる",
    english: "meeting, meet, party, association, interview, join ",
  },
  {
    kanji: "回",
    kana: "カイ    エ    まわ.る    -まわ.る    -まわ.り    まわ.す    -まわ.す    まわ.し-    -まわ.し    もとお.る    か.える",
    english: "-times, round, game, revolve, counter for occurrences ",
  },
  {
    kanji: "海",
    kana: "カイ    うみ",
    english: "sea, ocean ",
  },
  {
    kanji: "絵",
    kana: "カイ    エ",
    english: "picture, drawing, painting, sketch ",
  },
  {
    kanji: "外",
    kana: "ガイ    ゲ    そと    ほか    はず.す    はず.れる    と-",
    english: "outside ",
  },
  {
    kanji: "角",
    kana: "カク    かど    つの",
    english: "angle, corner, square, horn, antlers ",
  },
  {
    kanji: "楽",
    kana: "ガク    ラク    ゴウ    たの.しい    たの.しむ    この.む",
    english: "music, comfort, ease ",
  },
  {
    kanji: "活",
    kana: "カツ    い.きる    い.かす    い.ける",
    english: "lively, resuscitation, being helped, living ",
  },
  {
    kanji: "間",
    kana: "カン    ケン    あいだ    ま    あい",
    english: "interval, space ",
  },
  {
    kanji: "丸",
    kana: "ガン    まる    まる.める    まる.い",
    english:
  "round, full, month, perfection, -ship, pills, make round, roll up, curl up, seduce, explain away ",
  },
  {
    kanji: "岩",
    kana: "ガン    いわ",
    english: "boulder, rock, cliff ",
  },
  {
    kanji: "顔",
    kana: "ガン    かお",
    english: "face, expression ",
  },
  {
    kanji: "帰",
    kana: "キ    かえ.る    かえ.す    おく.る    とつ.ぐ",
    english: "homecoming, arrive at, lead to, result in ",
  },
  {
    kanji: "汽",
    kana: "キ",
    english: "vapor, steam ",
  },
  {
    kanji: "記",
    kana: "キ    しる.す",
    english: "scribe, account, narrative ",
  },
  {
    kanji: "弓",
    kana: "キュウ    ゆみ",
    english: "bow, bow (archery, violin) ",
  },
  {
    kanji: "牛",
    kana: "ギュウ    うし",
    english: "cow ",
  },
  {
    kanji: "魚",
    kana: "ギョ    うお    さかな    -ざかな",
    english: "fish ",
  },
  {
    kanji: "京",
    kana: "キョウ    ケイ    キン    みやこ",
    english: "capital, 10**16 ",
  },
  {
    kanji: "強",
    kana: "キョウ    ゴウ    つよ.い    つよ.まる    つよ.める    し.いる    こわ.い",
    english: "strong ",
  },
  {
    kanji: "教",
    kana: "キョウ    おし.える    おそ.わる",
    english: "teach, faith, doctrine ",
  },
  {
    kanji: "近",
    kana: "キン    コン    ちか.い",
    english: "near, early, akin, tantamount ",
  },
  {
    kanji: "兄",
    kana: "ケイ    キョウ    あに",
    english: "elder brother, big brother ",
  },
  {
    kanji: "形",
    kana: "ケイ    ギョウ    かた    -がた    かたち    なり",
    english: "shape, form, style ",
  },
  {
    kanji: "計",
    kana: "ケイ    はか.る    はか.らう",
    english: "plot, plan, scheme, measure ",
  },
  {
    kanji: "元",
    kana: "ゲン    ガン    もと",
    english: "beginning, former time, origin ",
  },
  {
    kanji: "原",
    kana: "ゲン    はら",
    english:
  "meadow, original, primitive, field, plain, prairie, tundra, wilderness ",
  },
  {
    kanji: "言",
    kana: "ゲン    ゴン    い.う    こと",
    english: "say ",
  },
  {
    kanji: "古",
    kana: "コ    ふる.い    ふる-    -ふる.す",
    english: "old ",
  },
  {
    kanji: "戸",
    kana: "コ    と",
    english: "door ",
  },
  {
    kanji: "午",
    kana: "ゴ    うま",
    english:
  "noon, sign of the horse, 11AM-1PM, seventh sign of Chinese zodiac ",
  },
  {
    kanji: "後",
    kana: "ゴ    コウ    のち    うし.ろ    うしろ    あと    おく.れる",
    english: "behind, back, later ",
  },
  {
    kanji: "語",
    kana: "ゴ    かた.る    かた.らう",
    english: "word, speech, language ",
  },
  {
    kanji: "交",
    kana: "コウ    まじ.わる    まじ.える    ま.じる    まじ.る    ま.ざる    ま.ぜる    -か.う    か.わす    かわ.す    こもごも",
    english: "mingle, mixing, association, coming & going ",
  },
  {
    kanji: "光",
    kana: "コウ    ひか.る    ひかり",
    english: "ray, light ",
  },
  {
    kanji: "公",
    kana: "コウ    ク    おおやけ",
    english: "public, prince, official, governmental ",
  },
  {
    kanji: "工",
    kana: "コウ    ク    グ",
    english: "craft, construction ",
  },
  {
    kanji: "広",
    kana: "コウ    ひろ.い    ひろ.まる    ひろ.める    ひろ.がる    ひろ.げる",
    english: "wide, broad, spacious ",
  },
  {
    kanji: "考",
    kana: "コウ    かんが.える    かんが.え",
    english: "consider, think over ",
  },
  {
    kanji: "行",
    kana: "コウ    ギョウ    アン    い.く    ゆ.く    -ゆ.き    -ゆき    -い.き    -いき    おこな.う    おこ.なう",
    english: "going, journey ",
  },
  {
    kanji: "高",
    kana: "コウ    たか.い    たか    -だか    たか.まる    たか.める",
    english: "tall, high, expensive ",
  },
  {
    kanji: "合",
    kana: "ゴウ    ガッ    カッ    あ.う    -あ.う    あ.い    あい-    -あ.い    -あい    あ.わす    あ.わせる    -あ.わせる",
    english: "fit, suit, join, 0.1 ",
  },
  {
    kanji: "国",
    kana: "コク    くに",
    english: "country ",
  },
  {
    kanji: "黒",
    kana: "コク    くろ    くろ.ずむ    くろ.い",
    english: "black ",
  },
  {
    kanji: "今",
    kana: "コン    キン    いま",
    english: "now ",
  },
  {
    kanji: "才",
    kana: "サイ",
    english: "genius, years old, cubic shaku ",
  },
  {
    kanji: "細",
    kana: "サイ    ほそ.い    ほそ.る    こま.か    こま.かい",
    english: "dainty, get thin, taper, slender, narrow ",
  },
  {
    kanji: "作",
    kana: "サク    サ    つく.る    つく.り    -づく.り",
    english: "make, production, prepare, build ",
  },
  {
    kanji: "算",
    kana: "サン    そろ",
    english: "calculate, divining, number, abacus, probability ",
  },
  {
    kanji: "姉",
    kana: "シ    あね    はは",
    english: "elder sister ",
  },
  {
    kanji: "市",
    kana: "シ    いち",
    english: "market, city, town ",
  },
  {
    kanji: "思",
    kana: "シ    おも.う    おもえら.く    おぼ.す",
    english: "think ",
  },
  {
    kanji: "止",
    kana: "シ    と.まる    -ど.まり    と.める    -と.める    -ど.め    とど.める    とど.め    とど.まる    や.める    や.む    -や.む    よ.す    -さ.す    -さ.し",
    english: "stop, halt ",
  },
  {
    kanji: "紙",
    kana: "シ    かみ",
    english: "paper ",
  },
  {
    kanji: "寺",
    kana: "ジ    てら",
    english: "Buddhist temple ",
  },
  {
    kanji: "時",
    kana: "ジ    とき    -どき",
    english: "time, hour ",
  },
  {
    kanji: "自",
    kana: "ジ    シ    みずか.ら    おの.ずから    おの.ずと",
    english: "oneself ",
  },
  {
    kanji: "室",
    kana: "シツ    むろ",
    english: "room, apartment, chamber, greenhouse, cellar ",
  },
  {
    kanji: "社",
    kana: "シャ    やしろ",
    english: "company, firm, office, association, shrine ",
  },
  {
    kanji: "弱",
    kana: "ジャク    よわ.い    よわ.る    よわ.まる    よわ.める",
    english: "weak, frail ",
  },
  {
    kanji: "首",
    kana: "シュ    くび",
    english: "neck ",
  },
  {
    kanji: "秋",
    kana: "シュウ    あき    とき",
    english: "autumn ",
  },
  {
    kanji: "週",
    kana: "シュウ",
    english: "week ",
  },
  {
    kanji: "春",
    kana: "シュン    はる",
    english: "springtime, spring (season) ",
  },
  {
    kanji: "書",
    kana: "ショ    か.く    -が.き    -がき",
    english: "write ",
  },
  {
    kanji: "少",
    kana: "ショウ    すく.ない    すこ.し",
    english: "few, little ",
  },
  {
    kanji: "場",
    kana: "ジョウ    チョウ    ば",
    english: "location, place ",
  },
  {
    kanji: "色",
    kana: "ショク    シキ    いろ",
    english: "color ",
  },
  {
    kanji: "食",
    kana: "ショク    ジキ    く.う    く.らう    た.べる    は.む",
    english: "eat, food ",
  },
  {
    kanji: "心",
    kana: "シン    こころ    -ごころ    りっしんべん",
    english: "heart, mind, spirit ",
  },
  {
    kanji: "新",
    kana: "シン    あたら.しい    あら.た    あら-    にい-",
    english: "new ",
  },
  {
    kanji: "親",
    kana: "シン    おや    おや-    した.しい    した.しむ",
    english: "parent, intimacy, relative, familiarity, dealer (cards) ",
  },
  {
    kanji: "図",
    kana: "ズ    ト    え    はか.る",
    english: "map, drawing, plan, unexpected, accidentally ",
  },
  {
    kanji: "数",
    kana: "スウ    ス    サク    ソク    シュ    かず    かぞ.える    しばしば    せ.める    わずらわ.しい",
    english: "number, strength, fate, law, figures ",
  },
  {
    kanji: "星",
    kana: "セイ    ショウ    ほし    -ぼし",
    english: "star, spot, dot, mark ",
  },
  {
    kanji: "晴",
    kana: "セイ    は.れる    は.れ    は.れ-    -ば.れ    は.らす",
    english: "clear up ",
  },
  {
    kanji: "声",
    kana: "セイ    ショウ    こえ    こわ-",
    english: "voice ",
  },
  {
    kanji: "西",
    kana: "セイ    サイ    ス    にし",
    english: "west, Spain ",
  },
  {
    kanji: "切",
    kana: "セツ    サイ    き.る    -き.る    き.り    -き.り    -ぎ.り    き.れる    -き.れる    き.れ    -き.れ    -ぎ.れ",
    english: "cut, cutoff, be sharp ",
  },
  {
    kanji: "雪",
    kana: "セツ    ゆき",
    english: "snow ",
  },
  {
    kanji: "線",
    kana: "セン    すじ",
    english: "line, track ",
  },
  {
    kanji: "船",
    kana: "セン    ふね    ふな-",
    english: "ship, boat ",
  },
  {
    kanji: "前",
    kana: "ゼン    まえ    -まえ",
    english: "in front, before ",
  },
  {
    kanji: "組",
    kana: "ソ    く.む    くみ    -ぐみ",
    english:
  "association, braid, plait, construct, assemble, unite, cooperate, grapple ",
  },
  {
    kanji: "走",
    kana: "ソウ    はし.る",
    english: "run ",
  },
  {
    kanji: "多",
    kana: "タ    おお.い    まさ.に    まさ.る",
    english: "many, frequent, much ",
  },
  {
    kanji: "太",
    kana: "タイ    タ    ふと.い    ふと.る",
    english: "plump, thick, big around ",
  },
  {
    kanji: "体",
    kana: "タイ    テイ    からだ    かたち",
    english: "body, substance, object, reality, counter for images ",
  },
  {
    kanji: "台",
    kana: "ダイ    タイ    うてな    われ    つかさ",
    english: "pedestal, a stand, counter for machines and vehicles ",
  },
  {
    kanji: "谷",
    kana: "コク    たに    きわ.まる",
    english: "valley ",
  },
  {
    kanji: "知",
    kana: "チ    し.る    し.らせる",
    english: "know, wisdom ",
  },
  {
    kanji: "地",
    kana: "チ    ジ",
    english: "ground, earth ",
  },
  {
    kanji: "池",
    kana: "チ    いけ",
    english: "pond, cistern, pool, reservoir ",
  },
  {
    kanji: "茶",
    kana: "チャ    サ",
    english: "tea ",
  },
  {
    kanji: "昼",
    kana: "チュウ    ひる",
    english: "daytime, noon ",
  },
  {
    kanji: "朝",
    kana: "チョウ    あさ",
    english: "morning, dynasty, regime, epoch, period, (North) Korea ",
  },
  {
    kanji: "長",
    kana: "チョウ    なが.い    おさ",
    english: "long, leader ",
  },
  {
    kanji: "鳥",
    kana: "チョウ    とり",
    english: "bird, chicken ",
  },
  {
    kanji: "直",
    kana: "チョク    ジキ    ジカ    ただ.ちに    なお.す    -なお.す    なお.る    なお.き    す.ぐ",
    english: "straightaway, honesty, frankness, fix, repair ",
  },
  {
    kanji: "通",
    kana: "ツウ    ツ    とお.る    とお.り    -とお.り    -どお.り    とお.す    とお.し    -どお.し    かよ.う",
    english: "traffic, pass through, avenue, commute, counter for letters ",
  },
  {
    kanji: "弟",
    kana: "テイ    ダイ    デ    おとうと",
    english: "younger brother, faithful service to elders ",
  },
  {
    kanji: "店",
    kana: "テン    みせ    たな",
    english: "store, shop ",
  },
  {
    kanji: "点",
    kana: "テン    つ.ける    つ.く    た.てる    さ.す    とぼ.す    とも.す    ぼち",
    english: "spot, point, mark, speck, decimal point ",
  },
  {
    kanji: "電",
    kana: "デン",
    english: "electricity ",
  },
  {
    kanji: "冬",
    kana: "トウ    ふゆ",
    english: "winter ",
  },
  {
    kanji: "刀",
    kana: "トウ    かたな    そり",
    english: "sword, saber, knife ",
  },
  {
    kanji: "東",
    kana: "トウ    ひがし",
    english: "east ",
  },
  {
    kanji: "当",
    kana: "トウ    あ.たる    あ.たり    あ.てる    あ.て    まさ.に    まさ.にべし",
    english: "hit, right, appropriate, himself ",
  },
  {
    kanji: "答",
    kana: "トウ    こた.える    こた.え",
    english: "solution, answer ",
  },
  {
    kanji: "頭",
    kana: "トウ    ズ    ト    あたま    かしら    -がしら    かぶり",
    english: "head, counter for large animals ",
  },
  {
    kanji: "同",
    kana: "ドウ    おな.じ",
    english: "same, agree, equal ",
  },
  {
    kanji: "道",
    kana: "ドウ    トウ    みち",
    english: "road-way, street, district, journey, course, moral, teachings ",
  },
  {
    kanji: "読",
    kana: "ドク    トク    トウ    よ.む    -よ.み",
    english: "read ",
  },
  {
    kanji: "内",
    kana: "ナイ    ダイ    うち",
    english: "inside, within, between, among, house, home ",
  },
  {
    kanji: "南",
    kana: "ナン    ナ    みなみ",
    english: "south ",
  },
  {
    kanji: "肉",
    kana: "ニク",
    english: "meat ",
  },
  {
    kanji: "馬",
    kana: "バ    うま    うま-    ま",
    english: "horse ",
  },
  {
    kanji: "買",
    kana: "バイ    か.う",
    english: "buy ",
  },
  {
    kanji: "売",
    kana: "バイ    う.る    う.れる",
    english: "sell ",
  },
  {
    kanji: "麦",
    kana: "バク    むぎ",
    english: "barley, wheat ",
  },
  {
    kanji: "半",
    kana: "ハン    なか.ば",
    english: "half, middle, odd number, semi-, part- ",
  },
  {
    kanji: "番",
    kana: "バン    つが.い",
    english: "turn, number in a series ",
  },
  {
    kanji: "父",
    kana: "フ    ちち",
    english: "father ",
  },
  {
    kanji: "風",
    kana: "フウ    フ    かぜ    かざ-    -かぜ",
    english: "wind, air, style, manner ",
  },
  {
    kanji: "分",
    kana: "ブン    フン    ブ    わ.ける    わ.け    わ.かれる    わ.かる    わ.かつ",
    english:
  "part, minute of time, segment, share, degree, one's lot, duty, understand, know, rate, 1%, chances, shaku/100 ",
  },
  {
    kanji: "聞",
    kana: "ブン    モン    き.く    き.こえる",
    english: "hear, ask, listen ",
  },
  {
    kanji: "米",
    kana: "ベイ    マイ    メエトル    こめ    よね",
    english: "rice, USA, metre ",
  },
  {
    kanji: "歩",
    kana: "ホ    ブ    フ    ある.く    あゆ.む",
    english: "walk, counter for steps ",
  },
  {
    kanji: "母",
    kana: "ボ    はは    も",
    english: "mama, mother ",
  },
  {
    kanji: "方",
    kana: "ホウ    かた    -かた    -がた",
    english: "direction, person, alternative ",
  },
  {
    kanji: "北",
    kana: "ホク    きた",
    english: "north ",
  },
  {
    kanji: "妹",
    kana: "マイ    いもうと",
    english: "younger sister ",
  },
  {
    kanji: "毎",
    kana: "マイ    ごと    -ごと.に",
    english: "every ",
  },
  {
    kanji: "万",
    kana: "マン    バン    よろず",
    english: "ten thousand ",
  },
  {
    kanji: "明",
    kana: "メイ    ミョウ    ミン    あ.かり    あか.るい    あか.るむ    あか.らむ    あき.らか    あ.ける    -あ.け    あ.く    あ.くる    あ.かす",
    english: "bright, light ",
  },
  {
    kanji: "鳴",
    kana: "メイ    な.く    な.る    な.らす",
    english: "chirp, cry, bark, sound, ring, echo, honk ",
  },
  {
    kanji: "毛",
    kana: "モウ    け",
    english: "fur, hair, feather, down ",
  },
  {
    kanji: "門",
    kana: "モン    かど    と",
    english: "gates ",
  },
  {
    kanji: "夜",
    kana: "ヤ    よ    よる",
    english: "night, evening ",
  },
  {
    kanji: "野",
    kana: "ヤ    ショ    の    の-",
    english: "plains, field, rustic, civilian life ",
  },
  {
    kanji: "矢",
    kana: "シ    や",
    english: "dart, arrow ",
  },
  {
    kanji: "友",
    kana: "ユウ    とも",
    english: "friend ",
  },
  {
    kanji: "曜",
    kana: "ヨウ",
    english: "weekday ",
  },
  {
    kanji: "用",
    kana: "ヨウ    もち.いる",
    english: "utilize, business, service, use, employ ",
  },
  {
    kanji: "来",
    kana: "ライ    タイ    く.る    きた.る    きた.す    き.たす    き.たる    き    こ",
    english: "come, due, next, cause, become ",
  },
  {
    kanji: "理",
    kana: "リ    ことわり",
    english: "logic, arrangement, reason, justice, truth ",
  },
  {
    kanji: "里",
    kana: "リ    さと",
    english: "ri, village, parent's home, league ",
  },
  {
    kanji: "話",
    kana: "ワ    はな.す    はなし",
    english: "tale, talk ",
  },
  {
    kanji: "悪",
    kana: "アク    オ    わる.い    わる-    あ.し    にく.い    -にく.い    ああ    いずくに    いずくんぞ    にく.む",
    english: "bad, vice, rascal, false, evil, wrong ",
  },
  {
    kanji: "安",
    kana: "アン    やす.い    やす.まる    やす    やす.らか",
    english: "relax, cheap, low, quiet, rested, contented, peaceful ",
  },
  {
    kanji: "暗",
    kana: "アン    くら.い",
    english: "darkness, disappear, shade, informal, grow dark, be blinded ",
  },
  {
    kanji: "委",
    kana: "イ    ゆだ.ねる",
    english: "committee, entrust to, leave to, devote, discard ",
  },
  {
    kanji: "意",
    kana: "イ",
    english: "idea, mind, heart, taste, thought, desire, care, liking ",
  },
  {
    kanji: "医",
    kana: "イ    い.やす    い.する    くすし",
    english: "doctor, medicine ",
  },
  {
    kanji: "育",
    kana: "イク    そだ.つ    そだ.ち    そだ.てる    はぐく.む",
    english: "bring up, grow up, raise, rear ",
  },
  {
    kanji: "員",
    kana: "イン",
    english: "employee, member, number, the one in charge ",
  },
  {
    kanji: "飲",
    kana: "イン    オン    の.む    -の.み",
    english: "drink, smoke, take ",
  },
  {
    kanji: "院",
    kana: "イン",
    english: "Inst., institution, temple, mansion, school ",
  },
  {
    kanji: "運",
    kana: "ウン    はこ.ぶ",
    english: "carry, luck, destiny, fate, lot, transport, progress, advance ",
  },
  {
    kanji: "泳",
    kana: "エイ    およ.ぐ",
    english: "swim ",
  },
  {
    kanji: "駅",
    kana: "エキ",
    english: "station ",
  },
  {
    kanji: "央",
    kana: "オウ",
    english: "center, middle ",
  },
  {
    kanji: "横",
    kana: "オウ    よこ",
    english: "sideways, side, horizontal, width, woof ",
  },
  {
    kanji: "屋",
    kana: "オク    や",
    english: "roof, house, shop, dealer, seller ",
  },
  {
    kanji: "温",
    kana: "オン    あたた.か    あたた.かい    あたた.まる    あたた.める    ぬく",
    english: "warm ",
  },
  {
    kanji: "化",
    kana: "カ    ケ    ば.ける    ば.かす    ふ.ける    け.する",
    english: "change, take the form of, influence, enchant, delude, -ization ",
  },
  {
    kanji: "荷",
    kana: "カ    に",
    english:
  "baggage, shoulder-pole load, bear (a burden), shoulder (a gun), load, cargo, freight ",
  },
  {
    kanji: "界",
    kana: "カイ",
    english: "world ",
  },
  {
    kanji: "開",
    kana: "カイ    ひら.く    ひら.き    -びら.き    ひら.ける    あ.く    あ.ける",
    english: "open, unfold, unseal ",
  },
  {
    kanji: "階",
    kana: "カイ    きざはし",
    english: "storey, stair, counter for storeys of a building ",
  },
  {
    kanji: "寒",
    kana: "カン    さむ.い",
    english: "cold ",
  },
  {
    kanji: "感",
    kana: "カン",
    english: "emotion, feeling, sensation ",
  },
  {
    kanji: "漢",
    kana: "カン",
    english: "Sino-, China ",
  },
  {
    kanji: "館",
    kana: "カン    やかた    たて",
    english: "building, mansion, large building, palace ",
  },
  {
    kanji: "岸",
    kana: "ガン    きし",
    english: "beach ",
  },
  {
    kanji: "期",
    kana: "キ    ゴ",
    english: "period, time, date, term ",
  },
  {
    kanji: "起",
    kana: "キ    お.きる    お.こる    お.こす    おこ.す    た.つ",
    english: "rouse, wake up, get up ",
  },
  {
    kanji: "客",
    kana: "キャク    カク",
    english: "guest, visitor, customer, client ",
  },
  {
    kanji: "宮",
    kana: "キュウ    グウ    ク    クウ    みや",
    english: "shinto shrine, constellations, palace, princess ",
  },
  {
    kanji: "急",
    kana: "キュウ    いそ.ぐ    いそ.ぎ",
    english: "hurry, emergency, sudden, steep ",
  },
  {
    kanji: "球",
    kana: "キュウ    たま",
    english: "ball, sphere ",
  },
  {
    kanji: "究",
    kana: "キュウ    ク    きわ.める",
    english: "research, study ",
  },
  {
    kanji: "級",
    kana: "キュウ",
    english: "class, rank, grade ",
  },
  {
    kanji: "去",
    kana: "キョ    コ    さ.る    -さ.る",
    english: "gone, past, quit, leave, elapse, eliminate, divorce ",
  },
  {
    kanji: "橋",
    kana: "キョウ    はし",
    english: "bridge ",
  },
  {
    kanji: "業",
    kana: "ギョウ    ゴウ    わざ",
    english: "business, vocation, arts, performance ",
  },
  {
    kanji: "局",
    kana: "キョク    つぼね",
    english:
  "bureau, board, office, affair, conclusion, court lady, lady-in-waiting, her apartment ",
  },
  {
    kanji: "曲",
    kana: "キョク    ま.がる    ま.げる",
    english:
  "bend, music, melody, composition, pleasure, injustice, fault, curve, crooked, perverse, lean ",
  },
  {
    kanji: "銀",
    kana: "ギン    しろがね",
    english: "silver ",
  },
  {
    kanji: "区",
    kana: "ク    オウ    コウ",
    english: "ward, district ",
  },
  {
    kanji: "苦",
    kana: "ク    くる.しい    -ぐる.しい    くる.しむ    くる.しめる    にが.い    にが.る",
    english: "suffering, trial, worry, hardship, feel bitter, scowl ",
  },
  {
    kanji: "具",
    kana: "グ    そな.える    つぶさ.に",
    english:
  "tool, utensil, means, possess, ingredients, counter for armor, suits, sets of furniture ",
  },
  {
    kanji: "君",
    kana: "クン    きみ    -ぎみ",
    english: "old boy, name-suffix ",
  },
  {
    kanji: "係",
    kana: "ケイ    かか.る    かかり    -がかり    かか.わる",
    english: "person in charge, connection, duty, concern oneself ",
  },
  {
    kanji: "軽",
    kana: "ケイ    かる.い    かろ.やか    かろ.んじる",
    english: "lightly, trifling, unimportant ",
  },
  {
    kanji: "決",
    kana: "ケツ    き.める    -ぎ.め    き.まる    さ.く",
    english: "decide, fix, agree upon, appoint ",
  },
  {
    kanji: "血",
    kana: "ケツ    ち",
    english: "blood ",
  },
  {
    kanji: "研",
    kana: "ケン    と.ぐ",
    english: "polish, study of, sharpen ",
  },
  {
    kanji: "県",
    kana: "ケン    か.ける",
    english: "prefecture ",
  },
  {
    kanji: "庫",
    kana: "コ    ク    くら",
    english: "warehouse, storehouse ",
  },
  {
    kanji: "湖",
    kana: "コ    みずうみ",
    english: "lake ",
  },
  {
    kanji: "向",
    kana: "コウ    む.く    む.い    -む.き    む.ける    -む.け    む.かう    む.かい    む.こう    む.こう-    むこ    むか.い",
    english: "yonder, facing, beyond, confront, defy, tend toward, approach ",
  },
  {
    kanji: "幸",
    kana: "コウ    さいわ.い    さち    しあわ.せ",
    english: "happiness, blessing, fortune ",
  },
  {
    kanji: "港",
    kana: "コウ    みなと",
    english: "harbor ",
  },
  {
    kanji: "号",
    kana: "ゴウ    さけ.ぶ    よびな",
    english: "nickname, number, item, title, pseudonym, name, call ",
  },
  {
    kanji: "根",
    kana: "コン    ね    -ね",
    english: "root, radical, head (pimple) ",
  },
  {
    kanji: "祭",
    kana: "サイ    まつ.る    まつ.り    まつり",
    english: "ritual, offer prayers, celebrate, deify, enshrine, worship ",
  },
  {
    kanji: "坂",
    kana: "ハン    さか",
    english: "slope, incline, hill ",
  },
  {
    kanji: "皿",
    kana: "ベイ    さら",
    english: "dish, a helping, plate ",
  },
  {
    kanji: "仕",
    kana: "シ    ジ    つか.える",
    english: "attend, doing, official, serve ",
  },
  {
    kanji: "使",
    kana: "シ    つか.う    つか.い    -つか.い    -づか.い",
    english: "use ",
  },
  {
    kanji: "始",
    kana: "シ    はじ.める    -はじ.める    はじ.まる",
    english: "commence, begin ",
  },
  {
    kanji: "指",
    kana: "シ    ゆび    さ.す    -さ.し",
    english:
  "finger, point to, indicate, put into, play (chess), measure (ruler) ",
  },
  {
    kanji: "死",
    kana: "シ    し.ぬ    し.に-",
    english: "death, die ",
  },
  {
    kanji: "詩",
    kana: "シ",
    english: "poem, poetry ",
  },
  {
    kanji: "歯",
    kana: "シ    よわい    は    よわ.い    よわい.する",
    english: "tooth, cog ",
  },
  {
    kanji: "事",
    kana: "ジ    ズ    こと    つか.う    つか.える",
    english: "matter, thing, fact, business, reason, possibly ",
  },
  {
    kanji: "持",
    kana: "ジ    も.つ    -も.ち    も.てる",
    english: "hold, have ",
  },
  {
    kanji: "次",
    kana: "ジ    シ    つ.ぐ    つぎ",
    english: "next, order, sequence ",
  },
  {
    kanji: "式",
    kana: "シキ",
    english:
  "style, ceremony, rite, function, method, system, form, expression ",
  },
  {
    kanji: "実",
    kana: "ジツ    シツ    み    みの.る    まこと    まことに    みの    みち.る",
    english: "reality, truth ",
  },
  {
    kanji: "写",
    kana: "シャ    ジャ    うつ.す    うつ.る    うつ-    うつ.し",
    english: "copy, be photographed, describe ",
  },
  {
    kanji: "者",
    kana: "シャ    もの",
    english: "someone, person ",
  },
  {
    kanji: "主",
    kana: "シュ    ス    シュウ    ぬし    おも    あるじ",
    english: "lord, chief, master, main thing, principal ",
  },
  {
    kanji: "取",
    kana: "シュ    と.る    と.り    と.り-    とり    -ど.り",
    english: "take, fetch, take up ",
  },
  {
    kanji: "守",
    kana: "シュ    ス    まも.る    まも.り    もり    -もり    かみ",
    english: "guard, protect, defend, obey ",
  },
  {
    kanji: "酒",
    kana: "シュ    さけ    さか-",
    english: "sake, alcohol ",
  },
  {
    kanji: "受",
    kana: "ジュ    う.ける    -う.け    う.かる",
    english: "accept, undergo, answer (phone), take, get, catch, receive ",
  },
  {
    kanji: "州",
    kana: "シュウ    ス    す",
    english: "state, province ",
  },
  {
    kanji: "拾",
    kana: "シュウ    ジュウ    ひろ.う",
    english: "pick up, gather, find, go on foot, ten ",
  },
  {
    kanji: "終",
    kana: "シュウ    お.わる    -お.わる    おわ.る    お.える    つい    つい.に",
    english: "end, finish ",
  },
  {
    kanji: "習",
    kana: "シュウ    ジュ    なら.う    なら.い",
    english: "learn ",
  },
  {
    kanji: "集",
    kana: "シュウ    あつ.まる    あつ.める    つど.う",
    english: "gather, meet, congregate, swarm, flock ",
  },
  {
    kanji: "住",
    kana: "ジュウ    ヂュウ    チュウ    す.む    す.まう    -ず.まい",
    english: "dwell, reside, live, inhabit ",
  },
  {
    kanji: "重",
    kana: "ジュウ    チョウ    え    おも.い    おも.り    おも.なう    かさ.ねる    かさ.なる    おも",
    english: "heavy, heap up, pile up, nest of boxes, -fold ",
  },
  {
    kanji: "宿",
    kana: "シュク    やど    やど.る    やど.す",
    english:
  "inn, lodging, relay station, dwell, lodge, be pregnant, home, dwelling ",
  },
  {
    kanji: "所",
    kana: "ショ    ところ    -ところ    どころ    とこ",
    english: "place ",
  },
  {
    kanji: "暑",
    kana: "ショ    あつ.い",
    english: "sultry, hot, summer heat ",
  },
  {
    kanji: "助",
    kana: "ジョ    たす.ける    たす.かる    す.ける    すけ",
    english: "help, rescue, assist ",
  },
  {
    kanji: "勝",
    kana: "ショウ    か.つ    -が.ち    まさ.る    すぐ.れる    かつ",
    english: "victory, win, prevail, excel ",
  },
  {
    kanji: "商",
    kana: "ショウ    あきな.う",
    english: "make a deal, selling, dealing in, merchant ",
  },
  {
    kanji: "昭",
    kana: "ショウ",
    english: "shining, bright ",
  },
  {
    kanji: "消",
    kana: "ショウ    き.える    け.す",
    english: "extinguish, blow out, turn off, neutralize, cancel ",
  },
  {
    kanji: "章",
    kana: "ショウ",
    english: "badge, chapter, composition, poem, design ",
  },
  {
    kanji: "乗",
    kana: "ジョウ    ショウ    の.る    -の.り    の.せる",
    english:
  "ride, power, multiplication, record, counter for vehicles, board, mount, join ",
  },
  {
    kanji: "植",
    kana: "ショク    う.える    う.わる",
    english: "plant ",
  },
  {
    kanji: "深",
    kana: "シン    ふか.い    -ぶか.い    ふか.まる    ふか.める    み-",
    english: "deep, heighten, intensify, strengthen ",
  },
  {
    kanji: "申",
    kana: "シン    もう.す    もう.し-    さる",
    english:
  "have the honor to, sign of the monkey, 3-5PM, ninth sign of Chinese zodiac ",
  },
  {
    kanji: "真",
    kana: "シン    ま    ま-    まこと",
    english: "true, reality, Buddhist sect ",
  },
  {
    kanji: "神",
    kana: "シン    ジン    かみ    かん-    こう-",
    english: "gods, mind, soul ",
  },
  {
    kanji: "身",
    kana: "シン    み",
    english: "somebody, person, one's station in life ",
  },
  {
    kanji: "進",
    kana: "シン    すす.む    すす.める",
    english: "advance, proceed, progress, promote ",
  },
  {
    kanji: "世",
    kana: "セイ    セ    ソウ    よ    さんじゅう",
    english: "generation, world, society, public ",
  },
  {
    kanji: "整",
    kana: "セイ    ととの.える    ととの.う",
    english: "organize, arranging, tune, tone, meter, key (music) ",
  },
  {
    kanji: "昔",
    kana: "セキ    シャク    むかし",
    english: "once upon a time, antiquity, old times ",
  },
  {
    kanji: "全",
    kana: "ゼン    まった.く    すべ.て",
    english: "whole, entire, all, complete, fulfill ",
  },
  {
    kanji: "想",
    kana: "ソウ    ソ    おも.う",
    english: "concept, think, idea, thought ",
  },
  {
    kanji: "相",
    kana: "ソウ    ショウ    あい-",
    english:
  "inter-, mutual, together, each other, minister of state, councillor, aspect, phase, physiognomy ",
  },
  {
    kanji: "送",
    kana: "ソウ    おく.る",
    english: "escort, send ",
  },
  {
    kanji: "息",
    kana: "ソク    いき",
    english: "breath, respiration, son, interest (on money) ",
  },
  {
    kanji: "速",
    kana: "ソク    はや.い    はや-    はや.める    すみ.やか",
    english: "quick, fast ",
  },
  {
    kanji: "族",
    kana: "ゾク",
    english: "tribe, family ",
  },
  {
    kanji: "他",
    kana: "タ    ほか",
    english: "other, another, the others ",
  },
  {
    kanji: "打",
    kana: "ダ    ダアス    う.つ    う.ち-    ぶ.つ",
    english: "strike, hit, knock, pound, dozen ",
  },
  {
    kanji: "対",
    kana: "タイ    ツイ    あいて    こた.える    そろ.い    つれあ.い    なら.ぶ    むか.う",
    english: "vis-a-vis, opposite, even, equal, versus, anti-, compare ",
  },
  {
    kanji: "待",
    kana: "タイ    ま.つ    -ま.ち",
    english: "wait, depend on ",
  },
  {
    kanji: "代",
    kana: "ダイ    タイ    か.わる    かわ.る    かわ.り    -がわ.り    か.える    よ    しろ",
    english:
  "substitute, change, convert, replace, period, age, generation, charge, rate, fee ",
  },
  {
    kanji: "第",
    kana: "ダイ    テイ",
    english: "No., residence ",
  },
  {
    kanji: "題",
    kana: "ダイ",
    english: "topic, subject ",
  },
  {
    kanji: "炭",
    kana: "タン    すみ",
    english: "charcoal, coal ",
  },
  {
    kanji: "短",
    kana: "タン    みじか.い",
    english: "short, brevity, fault, defect, weak point ",
  },
  {
    kanji: "談",
    kana: "ダン",
    english: "discuss, talk ",
  },
  {
    kanji: "着",
    kana: "チャク    ジャク    き.る    -ぎ    き.せる    -き.せ    つ.く    つ.ける",
    english: "don, arrive, wear, counter for suits of clothing ",
  },
  {
    kanji: "柱",
    kana: "チュウ    はしら",
    english: "pillar, post, cylinder, support ",
  },
  {
    kanji: "注",
    kana: "チュウ    そそ.ぐ    さ.す    つ.ぐ",
    english:
  "pour, irrigate, shed (tears), flow into, concentrate on, notes, comment, annotate ",
  },
  {
    kanji: "丁",
    kana: "チョウ    テイ    チン    トウ    チ    ひのと",
    english:
  "street, ward, town, counter for guns, tools, leaves or cakes of something, even number, 4th calendar sign ",
  },
  {
    kanji: "帳",
    kana: "チョウ    とばり",
    english: "notebook, account book, album ",
  },
  {
    kanji: "調",
    kana: "チョウ    しら.べる    しら.べ    ととの.う    ととの.える",
    english:
  "tune, tone, meter, key (music), writing style, prepare, exorcise, investigate ",
  },
  {
    kanji: "追",
    kana: "ツイ    お.う",
    english: "chase, drive away, follow, pursue, meanwhile ",
  },
  {
    kanji: "定",
    kana: "テイ    ジョウ    さだ.める    さだ.まる    さだ.か",
    english: "determine, fix, establish, decide ",
  },
  {
    kanji: "庭",
    kana: "テイ    にわ",
    english: "courtyard, garden, yard ",
  },
  {
    kanji: "笛",
    kana: "テキ    ふえ",
    english: "flute, clarinet, pipe, whistle, bagpipe, piccolo ",
  },
  {
    kanji: "鉄",
    kana: "テツ    くろがね",
    english: "iron ",
  },
  {
    kanji: "転",
    kana: "テン    ころ.がる    ころ.げる    ころ.がす    ころ.ぶ    まろ.ぶ    うたた    うつ.る",
    english: "revolve, turn around, change ",
  },
  {
    kanji: "登",
    kana: "トウ    ト    ドウ    ショウ    チョウ    のぼ.る    あ.がる",
    english: "ascend, climb up ",
  },
  {
    kanji: "都",
    kana: "ト    ツ    みやこ",
    english: "metropolis, capital ",
  },
  {
    kanji: "度",
    kana: "ド    ト    タク    たび    -た.い",
    english: "degrees, occurrence, time, counter for occurrences ",
  },
  {
    kanji: "島",
    kana: "トウ    しま",
    english: "island ",
  },
  {
    kanji: "投",
    kana: "トウ    な.げる    -な.げ",
    english:
  "throw, discard, abandon, launch into, join, invest in, hurl, give up, sell at a loss ",
  },
  {
    kanji: "湯",
    kana: "トウ    ゆ",
    english: "hot water, bath, hot spring ",
  },
  {
    kanji: "等",
    kana: "トウ    ひと.しい    など    -ら",
    english: "etc., and so forth, class (first), quality, equal, similar ",
  },
  {
    kanji: "豆",
    kana: "トウ    ズ    まめ    まめ-",
    english: "beans, pea, midget ",
  },
  {
    kanji: "動",
    kana: "ドウ    うご.く    うご.かす",
    english: "move, motion, change, confusion, shift, shake ",
  },
  {
    kanji: "童",
    kana: "ドウ    わらべ",
    english: "juvenile, child ",
  },
  {
    kanji: "農",
    kana: "ノウ",
    english: "agriculture, farmers ",
  },
  {
    kanji: "波",
    kana: "ハ    なみ",
    english: "waves, billows, Poland ",
  },
  {
    kanji: "配",
    kana: "ハイ    くば.る",
    english: "distribute, spouse, exile, rationing ",
  },
  {
    kanji: "倍",
    kana: "バイ",
    english: "double, twice, times, fold ",
  },
  {
    kanji: "箱",
    kana: "ソウ    はこ",
    english: "box, chest, case, bin, railway car ",
  },
  {
    kanji: "畑",
    kana: "はた    はたけ    -ばたけ",
    english: "farm, field, garden, one's specialty, (kokuji) ",
  },
  {
    kanji: "発",
    kana: "ハツ    ホツ    た.つ    あば.く    おこ.る    つか.わす    はな.つ",
    english: "discharge, departure, publish, emit, start from, disclose ",
  },
  {
    kanji: "反",
    kana: "ハン    ホン    タン    ホ    そ.る    そ.らす    かえ.す    かえ.る    -かえ.る",
    english: "anti- ",
  },
  {
    kanji: "板",
    kana: "ハン    バン    いた",
    english: "plank, board, plate, stage ",
  },
  {
    kanji: "悲",
    kana: "ヒ    かな.しい    かな.しむ",
    english: "jail cell, grieve, sad, deplore, regret ",
  },
  {
    kanji: "皮",
    kana: "ヒ    かわ    けがわ",
    english: "pelt, skin, hide, leather ",
  },
  {
    kanji: "美",
    kana: "ビ    ミ    うつく.しい",
    english: "beauty, beautiful ",
  },
  {
    kanji: "鼻",
    kana: "ビ    はな",
    english: "nose, snout ",
  },
  {
    kanji: "筆",
    kana: "ヒツ    ふで",
    english: "writing brush, writing, painting brush, handwriting ",
  },
  {
    kanji: "氷",
    kana: "ヒョウ    こおり    ひ    こお.る",
    english: "icicle, ice, hail, freeze, congeal ",
  },
  {
    kanji: "表",
    kana: "ヒョウ    おもて    -おもて    あらわ.す    あらわ.れる    あら.わす",
    english: "surface, table, chart, diagram ",
  },
  {
    kanji: "病",
    kana: "ビョウ    ヘイ    や.む    -や.み    やまい",
    english: "ill, sick ",
  },
  {
    kanji: "秒",
    kana: "ビョウ",
    english: "second (1/60 minute) ",
  },
  {
    kanji: "品",
    kana: "ヒン    ホン    しな",
    english: "goods, refinement, dignity, article, counter for meal courses ",
  },
  {
    kanji: "負",
    kana: "フ    ま.ける    ま.かす    お.う",
    english: "defeat, negative, -, minus, bear, owe, assume a responsibility ",
  },
  {
    kanji: "部",
    kana: "ブ    -べ",
    english:
  "section, bureau, dept, class, copy, part, portion, counter for copies of a newspaper or magazine ",
  },
  {
    kanji: "服",
    kana: "フク",
    english: "clothing, admit, obey, discharge ",
  },
  {
    kanji: "福",
    kana: "フク",
    english: "blessing, fortune, luck, wealth ",
  },
  {
    kanji: "物",
    kana: "ブツ    モツ    もの    もの-",
    english: "thing, object, matter ",
  },
  {
    kanji: "平",
    kana: "ヘイ    ビョウ    ヒョウ    たい.ら    -だいら    ひら    ひら-",
    english: "even, flat, peace ",
  },
  {
    kanji: "返",
    kana: "ヘン    かえ.す    -かえ.す    かえ.る    -かえ.る",
    english: "return, answer, fade, repay ",
  },
  {
    kanji: "勉",
    kana: "ベン    つと.める",
    english: "exertion ",
  },
  {
    kanji: "放",
    kana: "ホウ    はな.す    -っぱな.し    はな.つ    はな.れる    ほう.る",
    english: "set free, release, fire, shoot, emit, banish, liberate ",
  },
  {
    kanji: "味",
    kana: "ミ    あじ    あじ.わう",
    english: "flavor, taste ",
  },
  {
    kanji: "命",
    kana: "メイ    ミョウ    いのち",
    english: "fate, command, decree, destiny, life, appoint ",
  },
  {
    kanji: "面",
    kana: "メン    ベン    おも    おもて    つら",
    english: "mask, face, features, surface ",
  },
  {
    kanji: "問",
    kana: "モン    と.う    と.い    とん",
    english: "question, ask, problem ",
  },
  {
    kanji: "役",
    kana: "ヤク    エキ",
    english: "duty, war, campaign, drafted labor, office, service, role ",
  },
  {
    kanji: "薬",
    kana: "ヤク    くすり",
    english: "medicine, chemical, enamel, gunpowder, benefit ",
  },
  {
    kanji: "油",
    kana: "ユ    ユウ    あぶら",
    english: "oil, fat ",
  },
  {
    kanji: "有",
    kana: "ユウ    ウ    あ.る",
    english: "possess, have, exist, happen, occur, approx ",
  },
  {
    kanji: "由",
    kana: "ユ    ユウ    ユイ    よし    よ.る",
    english: "wherefore, a reason ",
  },
  {
    kanji: "遊",
    kana: "ユウ    ユ    あそ.ぶ    あそ.ばす",
    english: "play ",
  },
  {
    kanji: "予",
    kana: "ヨ    シャ    あらかじ.め",
    english: "beforehand, previous, myself, I ",
  },
  {
    kanji: "様",
    kana: "ヨウ    ショウ    さま    さん",
    english: "Esq., way, manner, situation, polite suffix ",
  },
  {
    kanji: "洋",
    kana: "ヨウ",
    english: "ocean, western style ",
  },
  {
    kanji: "羊",
    kana: "ヨウ    ひつじ",
    english: "sheep ",
  },
  {
    kanji: "葉",
    kana: "ヨウ    は",
    english:
  "leaf, plane, lobe, needle, blade, spear, counter for flat things, fragment, piece ",
  },
  {
    kanji: "陽",
    kana: "ヨウ    ひ",
    english: "sunshine, yang principle, positive, male, heaven, daytime ",
  },
  {
    kanji: "落",
    kana: "ラク    お.ちる    お.ち    お.とす",
    english: "fall, drop, come down ",
  },
  {
    kanji: "流",
    kana: "リュウ    ル    なが.れる    なが.れ    なが.す    -なが.す",
    english: "current, a sink, flow, forfeit ",
  },
  {
    kanji: "旅",
    kana: "リョ    たび",
    english: "trip, travel ",
  },
  {
    kanji: "両",
    kana: "リョウ    てる    ふたつ",
    english: "both, old Japanese coin, counter for vehicles, two ",
  },
  {
    kanji: "緑",
    kana: "リョク    ロク    みどり",
    english: "green ",
  },
  {
    kanji: "礼",
    kana: "レイ    ライ",
    english: "salute, bow, ceremony, thanks, remuneration ",
  },
  {
    kanji: "列",
    kana: "レツ    レ",
    english: "file, row, rank, tier, column ",
  },
  {
    kanji: "練",
    kana: "レン    ね.る    ね.り",
    english: "practice, gloss, train, drill, polish, refine ",
  },
  {
    kanji: "路",
    kana: "ロ    ル    -じ    みち",
    english: "path, route, road, distance ",
  },
  {
    kanji: "和",
    kana: "ワ    オ    カ    やわ.らぐ    やわ.らげる    なご.む    なご.やか",
    english: "harmony, Japanese style, peace, soften, Japan ",
  },
  {
    kanji: "愛",
    kana: "アイ    いと.しい",
    english: "love, affection, favourite ",
  },
  {
    kanji: "案",
    kana: "アン    つくえ",
    english:
  "plan, suggestion, draft, ponder, fear, proposition, idea, expectation, bill, worry ",
  },
  {
    kanji: "以",
    kana: "イ    もっ.て",
    english: "by means of, because, in view of, compared with ",
  },
  {
    kanji: "位",
    kana: "イ    くらい    ぐらい",
    english: "rank, grade, throne, crown, about, some ",
  },
  {
    kanji: "囲",
    kana: "イ    かこ.む    かこ.う    かこ.い",
    english:
  "surround, besiege, store, paling, enclosure, encircle, preserve, keep ",
  },
  {
    kanji: "胃",
    kana: "イ",
    english: "stomach, paunch, crop, craw ",
  },
  {
    kanji: "衣",
    kana: "イ    エ    ころも    きぬ    -ぎ",
    english: "garment, clothes, dressing ",
  },
  {
    kanji: "印",
    kana: "イン    しるし    -じるし    しる.す",
    english:
  "stamp, seal, mark, imprint, symbol, emblem, trademark, evidence, souvenir, India ",
  },
  {
    kanji: "栄",
    kana: "エイ    ヨウ    さか.える    は.え    -ば.え    は.える    え",
    english: "flourish, prosperity, honor, glory, splendor ",
  },
  {
    kanji: "英",
    kana: "エイ    はなぶさ",
    english: "England, english ",
  },
  {
    kanji: "塩",
    kana: "エン    しお",
    english: "salt ",
  },
  {
    kanji: "億",
    kana: "オク",
    english: "hundred million, 10**8 ",
  },
  {
    kanji: "加",
    kana: "カ    くわ.える    くわ.わる",
    english: "add, addition, increase, join, include, Canada ",
  },
  {
    kanji: "果",
    kana: "カ    は.たす    はた.す    -は.たす    は.てる    -は.てる    は.て",
    english:
  "fruit, reward, carry out, achieve, complete, end, finish, succeed ",
  },
  {
    kanji: "課",
    kana: "カ",
    english:
  "chapter, lesson, section, department, division, counter for chapters (of a book) ",
  },
  {
    kanji: "貨",
    kana: "カ",
    english: "freight, goods, property ",
  },
  {
    kanji: "芽",
    kana: "ガ    め",
    english: "bud, sprout, spear, germ ",
  },
  {
    kanji: "改",
    kana: "カイ    あらた.める    あらた.まる",
    english:
  "reformation, change, modify, mend, renew, examine, inspect, search ",
  },
  {
    kanji: "械",
    kana: "カイ    かせ",
    english: "contraption, fetter, machine, instrument ",
  },
  {
    kanji: "害",
    kana: "ガイ",
    english: "harm, injury ",
  },
  {
    kanji: "街",
    kana: "ガイ    カイ    まち",
    english: "boulevard, street, town ",
  },
  {
    kanji: "各",
    kana: "カク    おのおの",
    english: "each, every, either ",
  },
  {
    kanji: "覚",
    kana: "カク    おぼ.える    さ.ます    さ.める    さと.る",
    english: "memorize, learn, remember, awake, sober up ",
  },
  {
    kanji: "完",
    kana: "カン",
    english: "perfect, completion, end ",
  },
  {
    kanji: "官",
    kana: "カン",
    english: "bureaucrat, the government ",
  },
  {
    kanji: "管",
    kana: "カン    くだ",
    english: "pipe, tube, wind instrument, drunken talk ",
  },
  {
    kanji: "観",
    kana: "カン    み.る    しめ.す",
    english: "outlook, look, appearance, condition, view ",
  },
  {
    kanji: "関",
    kana: "カン    せき    -ぜき    かか.わる    からくり    かんぬき",
    english: "connection, barrier, gateway, involve, concerning ",
  },
  {
    kanji: "願",
    kana: "ガン    ねが.う    -ねがい",
    english: "petition, request, vow, wish, hope ",
  },
  {
    kanji: "喜",
    kana: "キ    よろこ.ぶ    よろこ.ばす",
    english: "rejoice, take pleasure in ",
  },
  {
    kanji: "器",
    kana: "キ    うつわ",
    english:
  "utensil, vessel, receptacle, implement, instrument, ability, container, tool, set ",
  },
  {
    kanji: "希",
    kana: "キ    ケ    まれ",
    english:
  "hope, beg, request, pray, beseech, Greece, dilute (acid), rare, few, phenomenal ",
  },
  {
    kanji: "旗",
    kana: "キ    はた",
    english: "national flag, banner, standard ",
  },
  {
    kanji: "機",
    kana: "キ    はた",
    english: "mechanism, opportunity, occasion, machine, airplane ",
  },
  {
    kanji: "季",
    kana: "キ",
    english: "seasons ",
  },
  {
    kanji: "紀",
    kana: "キ",
    english: "chronicle, account, narrative, history, annals, geologic period ",
  },
  {
    kanji: "議",
    kana: "ギ",
    english: "deliberation, consultation, debate, consideration ",
  },
  {
    kanji: "救",
    kana: "キュウ    すく.う",
    english: "salvation, save, help, rescue, reclaim ",
  },
  {
    kanji: "求",
    kana: "キュウ    グ    もと.める",
    english: "request, want, wish for, require, demand ",
  },
  {
    kanji: "泣",
    kana: "キュウ    な.く",
    english: "cry, weep, moan ",
  },
  {
    kanji: "給",
    kana: "キュウ    たま.う    たも.う    -たま.え",
    english: "salary, wage, gift, allow, grant, bestow on ",
  },
  {
    kanji: "挙",
    kana: "キョ    あ.げる    あ.がる    こぞ.る",
    english: "raise, plan, project, behavior, actions ",
  },
  {
    kanji: "漁",
    kana: "ギョ    リョウ    あさ.る",
    english: "fishing, fishery ",
  },
  {
    kanji: "競",
    kana: "キョウ    ケイ    きそ.う    せ.る",
    english:
  "emulate, compete with, bid, sell at auction, bout, contest, race ",
  },
  {
    kanji: "共",
    kana: "キョウ    とも    とも.に    -ども",
    english: "together, both, neither, all, and, alike, with ",
  },
  {
    kanji: "協",
    kana: "キョウ",
    english: "co-, cooperation ",
  },
  {
    kanji: "鏡",
    kana: "キョウ    ケイ    かがみ",
    english: "mirror, speculum, barrel-head, round rice-cake offering ",
  },
  {
    kanji: "極",
    kana: "キョク    ゴク    きわ.める    きわ.まる    きわ.まり    きわ.み    き.める    -ぎ.め    き.まる",
    english:
  "poles, settlement, conclusion, end, highest rank, electric poles, very, extremely, most, highly, 10**48 ",
  },
  {
    kanji: "訓",
    kana: "クン    キン    おし.える    よ.む    くん.ずる",
    english: "instruction, Japanese character reading, explanation, read ",
  },
  {
    kanji: "軍",
    kana: "グン",
    english: "army, force, troops, war, battle ",
  },
  {
    kanji: "郡",
    kana: "グン    こうり",
    english: "county, district ",
  },
  {
    kanji: "型",
    kana: "ケイ    かた    -がた",
    english: "mould, type, model ",
  },
  {
    kanji: "径",
    kana: "ケイ    みち    こみち    さしわたし    ただちに",
    english: "diameter, path, method ",
  },
  {
    kanji: "景",
    kana: "ケイ",
    english: "scenery, view ",
  },
  {
    kanji: "芸",
    kana: "ゲイ    ウン    う.える    のり    わざ",
    english: "technique, art, craft, performance, acting, trick, stunt ",
  },
  {
    kanji: "欠",
    kana: "ケツ    ケン    か.ける    か.く    あくび",
    english: "lack, gap, fail ",
  },
  {
    kanji: "結",
    kana: "ケツ    ケチ    むす.ぶ    ゆ.う    ゆ.わえる",
    english: "tie, bind, contract, join, organize, do up hair, fasten ",
  },
  {
    kanji: "健",
    kana: "ケン    すこ.やか",
    english: "healthy, health, strength, persistence ",
  },
  {
    kanji: "建",
    kana: "ケン    コン    た.てる    た.て    -だ.て    た.つ",
    english: "build ",
  },
  {
    kanji: "験",
    kana: "ケン    ゲン    あかし    しるし    ため.す    ためし",
    english: "verification, effect, testing ",
  },
  {
    kanji: "固",
    kana: "コ    かた.める    かた.まる    かた.まり    かた.い",
    english: "harden, set, clot, curdle ",
  },
  {
    kanji: "候",
    kana: "コウ    そうろう",
    english: "climate, season, weather ",
  },
  {
    kanji: "功",
    kana: "コウ    ク    いさお",
    english: "achievement, merits, success, honor, credit ",
  },
  {
    kanji: "好",
    kana: "コウ    この.む    す.く    よ.い    い.い",
    english: "fond, pleasing, like something ",
  },
  {
    kanji: "康",
    kana: "コウ",
    english: "ease, peace ",
  },
  {
    kanji: "航",
    kana: "コウ",
    english: "navigate, sail, cruise, fly ",
  },
  {
    kanji: "告",
    kana: "コク    つ.げる",
    english: "revelation, tell, inform, announce ",
  },
  {
    kanji: "差",
    kana: "サ    さ.す    さ.し",
    english:
  "distinction, difference, variation, discrepancy, margin, balance ",
  },
  {
    kanji: "最",
    kana: "サイ    シュ    もっと.も    つま",
    english: "utmost, most, extreme ",
  },
  {
    kanji: "菜",
    kana: "サイ    な",
    english: "vegetable, side dish, greens ",
  },
  {
    kanji: "材",
    kana: "ザイ",
    english: "lumber, log, timber, wood, talent ",
  },
  {
    kanji: "昨",
    kana: "サク",
    english: "yesterday, previous ",
  },
  {
    kanji: "刷",
    kana: "サツ    す.る    -ず.り    -ずり    は.く",
    english: "printing, print ",
  },
  {
    kanji: "察",
    kana: "サツ",
    english: "guess, presume, surmise, judge, understand ",
  },
  {
    kanji: "札",
    kana: "サツ    ふだ",
    english: "tag, paper money, counter for bonds, placard, bid ",
  },
  {
    kanji: "殺",
    kana: "サツ    サイ    セツ    ころ.す    -ごろ.し    そ.ぐ",
    english:
  "kill, murder, butcher, slice off, split, diminish, reduce, spoil ",
  },
  {
    kanji: "参",
    kana: "サン    シン    まい.る    まい-    まじわる    みつ",
    english:
  "nonplussed, three, going, coming, visiting, visit, be defeated, die, be madly in love ",
  },
  {
    kanji: "散",
    kana: "サン    ち.る    ち.らす    -ち.らす    ち.らかす    ち.らかる    ばら",
    english: "scatter, disperse, spend, squander ",
  },
  {
    kanji: "産",
    kana: "サン    う.む    う.まれる    うぶ-    む.す",
    english: "products, bear, give birth, yield, childbirth, native, property ",
  },
  {
    kanji: "残",
    kana: "ザン    サン    のこ.る    のこ.す    そこな.う    のこ.り",
    english: "remainder, leftover, balance ",
  },
  {
    kanji: "司",
    kana: "シ    つかさど.る",
    english: "director, official, govt office, rule, administer ",
  },
  {
    kanji: "史",
    kana: "シ",
    english: "history, chronicle ",
  },
  {
    kanji: "士",
    kana: "シ",
    english: "gentleman, samurai ",
  },
  {
    kanji: "氏",
    kana: "シ    うじ    -うじ",
    english: "family name, surname, clan ",
  },
  {
    kanji: "試",
    kana: "シ    こころ.みる    ため.す",
    english: "test, try, attempt, experiment, ordeal ",
  },
  {
    kanji: "児",
    kana: "ジ    ニ    ゲイ    こ    -こ    -っこ",
    english: "newborn babe, child, young of animals ",
  },
  {
    kanji: "治",
    kana: "ジ    チ    おさ.める    おさ.まる    なお.る    なお.す",
    english:
  "reign, be at peace, calm down, subdue, quell, govt, cure, heal, rule, conserve ",
  },
  {
    kanji: "辞",
    kana: "ジ    や.める    いな.む",
    english: "resign, word, term, expression ",
  },
  {
    kanji: "失",
    kana: "シツ    うしな.う    う.せる",
    english: "lose, error, fault, disadvantage, loss ",
  },
  {
    kanji: "借",
    kana: "シャク    か.りる",
    english: "borrow, rent ",
  },
  {
    kanji: "種",
    kana: "シュ    たね    -ぐさ",
    english: "species, kind, class, variety, seed ",
  },
  {
    kanji: "周",
    kana: "シュウ    まわ.り",
    english: "circumference, circuit, lap ",
  },
  {
    kanji: "祝",
    kana: "シュク    シュウ    いわ.う",
    english: "celebrate, congratulate ",
  },
  {
    kanji: "順",
    kana: "ジュン",
    english: "obey, order, turn, right, docility, occasion ",
  },
  {
    kanji: "初",
    kana: "ショ    はじ.め    はじ.めて    はつ    はつ-    うい-    -そ.める    -ぞ.め",
    english: "first time, beginning ",
  },
  {
    kanji: "唱",
    kana: "ショウ    とな.える",
    english: "chant, recite, call upon, yell ",
  },
  {
    kanji: "松",
    kana: "ショウ    まつ",
    english: "pine tree ",
  },
  {
    kanji: "焼",
    kana: "ショウ    や.く    や.き    や.き-    -や.き    や.ける",
    english: "bake, burning ",
  },
  {
    kanji: "照",
    kana: "ショウ    て.る    て.らす    て.れる",
    english: "illuminate, shine, compare, bashful ",
  },
  {
    kanji: "省",
    kana: "セイ    ショウ    かえり.みる    はぶ.く",
    english: "focus, government ministry, conserve ",
  },
  {
    kanji: "笑",
    kana: "ショウ    わら.う    え.む",
    english: "laugh ",
  },
  {
    kanji: "象",
    kana: "ショウ    ゾウ    かたど.る",
    english:
  "elephant, pattern after, imitate, image, shape, sign (of the times) ",
  },
  {
    kanji: "賞",
    kana: "ショウ    ほ.める",
    english: "prize, reward, praise ",
  },
  {
    kanji: "信",
    kana: "シン",
    english: "faith, truth, fidelity, trust ",
  },
  {
    kanji: "臣",
    kana: "シン    ジン",
    english: "retainer, subject ",
  },
  {
    kanji: "成",
    kana: "セイ    ジョウ    な.る    な.す    -な.す",
    english: "turn into, become, get, grow, elapse, reach ",
  },
  {
    kanji: "清",
    kana: "セイ    ショウ    シン    きよ.い    きよ.まる    きよ.める",
    english: "pure, purify, cleanse, exorcise, Manchu dynasty ",
  },
  {
    kanji: "静",
    kana: "セイ    ジョウ    しず-    しず.か    しず.まる    しず.める",
    english: "quiet ",
  },
  {
    kanji: "席",
    kana: "セキ    むしろ",
    english: "seat, mat, occasion, place ",
  },
  {
    kanji: "積",
    kana: "セキ    つ.む    -づ.み    つ.もる    つ.もり",
    english:
  "volume, product (x*y), acreage, contents, pile up, stack, load, amass ",
  },
  {
    kanji: "折",
    kana: "セツ    お.る    おり    お.り    -お.り    お.れる",
    english: "fold, break, fracture, bend, yield, submit ",
  },
  {
    kanji: "節",
    kana: "セツ    セチ    ふし    -ぶし    のっと",
    english:
  "node, season, period, occasion, verse, clause, stanza, honor, joint, knuckle, knob, knot, tune, melody ",
  },
  {
    kanji: "説",
    kana: "セツ    ゼイ    と.く",
    english: "rumor, opinion, theory ",
  },
  {
    kanji: "戦",
    kana: "セン    いくさ    たたか.う    おのの.く    そよぐ    わなな.く",
    english: "war, battle, match ",
  },
  {
    kanji: "浅",
    kana: "セン    あさ.い",
    english: "shallow, superficial, frivolous, wretched, shameful ",
  },
  {
    kanji: "選",
    kana: "セン    えら.ぶ",
    english: "elect, select, choose, prefer ",
  },
  {
    kanji: "然",
    kana: "ゼン    ネン    しか    しか.り    しか.し    さ",
    english: "sort of thing, so, if so, in that case, well ",
  },
  {
    kanji: "倉",
    kana: "ソウ    くら",
    english: "godown, warehouse, storehouse, cellar, treasury ",
  },
  {
    kanji: "巣",
    kana: "ソウ    す    す.くう",
    english: "nest, rookery, hive, cobweb, den ",
  },
  {
    kanji: "争",
    kana: "ソウ    あらそ.う    いか.でか",
    english: "contend, dispute, argue ",
  },
  {
    kanji: "側",
    kana: "ソク    かわ    がわ    そば",
    english: "side, lean, oppose, regret ",
  },
  {
    kanji: "束",
    kana: "ソク    たば    たば.ねる    つか    つか.ねる",
    english: "bundle, sheaf, ream, tie in bundles, govern, manage, control ",
  },
  {
    kanji: "続",
    kana: "ゾク    ショク    コウ    キョウ    つづ.く    つづ.ける    つぐ.ない",
    english: "continue, series, sequel ",
  },
  {
    kanji: "卒",
    kana: "ソツ    シュツ    そっ.する    お.える    お.わる    ついに    にわか",
    english: "graduate, soldier, private, die ",
  },
  {
    kanji: "孫",
    kana: "ソン    まご",
    english: "grandchild, descendants ",
  },
  {
    kanji: "帯",
    kana: "タイ    お.びる    おび",
    english: "sash, belt, obi, zone, region ",
  },
  {
    kanji: "隊",
    kana: "タイ",
    english: "regiment, party, company, squad ",
  },
  {
    kanji: "達",
    kana: "タツ    ダ    -たち",
    english: "accomplished, reach, arrive, attain ",
  },
  {
    kanji: "単",
    kana: "タン    ひとえ",
    english: "simple, one, single, merely ",
  },
  {
    kanji: "置",
    kana: "チ    お.く    -お.き",
    english: "placement, put, set, deposit, leave behind, keep, employ, pawn ",
  },
  {
    kanji: "仲",
    kana: "チュウ    なか",
    english: "go-between, relationship ",
  },
  {
    kanji: "貯",
    kana: "チョ    た.める    たくわ.える",
    english: "savings, store, lay in, keep, wear mustache ",
  },
  {
    kanji: "兆",
    kana: "チョウ    きざ.す    きざ.し",
    english: "portent, 10**12, trillion, sign, omen, symptoms ",
  },
  {
    kanji: "腸",
    kana: "チョウ    はらわた",
    english: "intestines, guts, bowels, viscera ",
  },
  {
    kanji: "低",
    kana: "テイ    ひく.い    ひく.める    ひく.まる",
    english: "lower, short, humble ",
  },
  {
    kanji: "停",
    kana: "テイ    と.める    と.まる",
    english: "halt, stopping ",
  },
  {
    kanji: "底",
    kana: "テイ    そこ",
    english: "bottom, sole, depth, bottom price, base, kind, sort ",
  },
  {
    kanji: "的",
    kana: "テキ    まと",
    english: "bull's eye, mark, target, object, adjective ending ",
  },
  {
    kanji: "典",
    kana: "テン    デン",
    english: "code, ceremony, law, rule ",
  },
  {
    kanji: "伝",
    kana: "デン    テン    つた.わる    つた.える    つた.う    つだ.う    -づた.い    つて",
    english:
  "transmit, go along, walk along, follow, report, communicate, legend, tradition ",
  },
  {
    kanji: "徒",
    kana: "ト    いたずら    あだ",
    english:
  "junior, emptiness, vanity, futility, uselessness, ephemeral thing, gang, set, party, people ",
  },
  {
    kanji: "努",
    kana: "ド    つと.める",
    english: "toil, diligent, as much as possible ",
  },
  {
    kanji: "灯",
    kana: "トウ    ひ    ほ-    ともしび    とも.す    あかり",
    english: "lamp, a light, light, counter for lights ",
  },
  {
    kanji: "働",
    kana: "ドウ    リュク    リキ    ロク    リョク    はたら.く",
    english: "work, (kokuji) ",
  },
  {
    kanji: "堂",
    kana: "ドウ",
    english: "public chamber, hall ",
  },
  {
    kanji: "得",
    kana: "トク    え.る    う.る",
    english:
  "gain, get, find, earn, acquire, can, may, able to, profit, advantage, benefit ",
  },
  {
    kanji: "特",
    kana: "トク",
    english: "special ",
  },
  {
    kanji: "毒",
    kana: "ドク",
    english: "poison, virus, venom, germ, harm, injury, spite ",
  },
  {
    kanji: "熱",
    kana: "ネツ    あつ.い",
    english: "heat, temperature, fever, mania, passion ",
  },
  {
    kanji: "念",
    kana: "ネン",
    english: "wish, sense, idea, thought, feeling, desire, attention ",
  },
  {
    kanji: "敗",
    kana: "ハイ    やぶ.れる",
    english: "failure, defeat, reversal ",
  },
  {
    kanji: "梅",
    kana: "バイ    うめ",
    english: "plum ",
  },
  {
    kanji: "博",
    kana: "ハク    バク",
    english: "Dr., command, esteem, win acclaim, Ph.D., exposition, fair ",
  },
  {
    kanji: "飯",
    kana: "ハン    めし",
    english: "meal, boiled rice ",
  },
  {
    kanji: "費",
    kana: "ヒ    つい.やす    つい.える",
    english: "expense, cost, spend, consume, waste ",
  },
  {
    kanji: "飛",
    kana: "ヒ    と.ぶ    と.ばす    -と.ばす",
    english: "fly, skip (pages), scatter ",
  },
  {
    kanji: "必",
    kana: "ヒツ    かなら.ず",
    english: "invariably, certain, inevitable ",
  },
  {
    kanji: "標",
    kana: "ヒョウ    しるべ    しるし",
    english:
  "signpost, seal, mark, stamp, imprint, symbol, emblem, trademark, evidence, souvenir, target ",
  },
  {
    kanji: "票",
    kana: "ヒョウ",
    english: "ballot, label, ticket, sign ",
  },
  {
    kanji: "不",
    kana: "フ    ブ",
    english: "negative, non-, bad, ugly, clumsy ",
  },
  {
    kanji: "付",
    kana: "フ    つ.ける    -つ.ける    -づ.ける    つ.け    つ.け-    -つ.け    -づ.け    -づけ    つ.く    -づ.く    つ.き    -つ.き    -つき    -づ.き    -づき",
    english: "adhere, attach, refer to, append ",
  },
  {
    kanji: "夫",
    kana: "フ    フウ    ブ    おっと    そ.れ",
    english: "husband, man ",
  },
  {
    kanji: "府",
    kana: "フ",
    english:
  "borough, urban prefecture, govt office, representative body, storehouse ",
  },
  {
    kanji: "副",
    kana: "フク",
    english: "vice-, duplicate, copy ",
  },
  {
    kanji: "粉",
    kana: "フン    デシメートル    こ    こな",
    english: "flour, powder, dust ",
  },
  {
    kanji: "兵",
    kana: "ヘイ    ヒョウ    つわもの",
    english: "soldier, private, troops, army, warfare, strategy, tactics ",
  },
  {
    kanji: "別",
    kana: "ベツ    わか.れる    わ.ける",
    english: "separate, branch off, diverge, fork, another, extra, specially ",
  },
  {
    kanji: "変",
    kana: "ヘン    か.わる    か.わり    か.える",
    english: "unusual, change, strange ",
  },
  {
    kanji: "辺",
    kana: "ヘン    あた.り    ほと.り    -べ",
    english: "environs, boundary, border, vicinity ",
  },
  {
    kanji: "便",
    kana: "ベン    ビン    たよ.り",
    english: "convenience ",
  },
  {
    kanji: "包",
    kana: "ホウ    つつ.む    くる.む",
    english: "wrap, pack up, cover, conceal ",
  },
  {
    kanji: "法",
    kana: "ホウ    ハッ    ホッ    フラン    のり",
    english: "method, law, rule, principle, model, system ",
  },
  {
    kanji: "望",
    kana: "ボウ    モウ    のぞ.む    もち",
    english: "ambition, full moon, hope, desire, aspire to, expect ",
  },
  {
    kanji: "牧",
    kana: "ボク    まき",
    english: "breed, care for, shepherd, feed, pasture ",
  },
  {
    kanji: "末",
    kana: "マツ    バツ    すえ",
    english: "end, close, tip, powder, posterity ",
  },
  {
    kanji: "満",
    kana: "マン    バン    み.ちる    み.つ    み.たす",
    english: "full, enough, pride, satisfy ",
  },
  {
    kanji: "未",
    kana: "ミ    ビ    いま.だ    ま.だ    ひつじ",
    english:
  "un-, not yet, hitherto, still, even now, sign of the ram, 1-3PM, eighth sign of Chinese zodiac ",
  },
  {
    kanji: "脈",
    kana: "ミャク    すじ",
    english: "vein, pulse, hope ",
  },
  {
    kanji: "民",
    kana: "ミン    たみ",
    english: "people, nation, subjects ",
  },
  {
    kanji: "無",
    kana: "ム    ブ    な.い",
    english: "nothingness, none, ain't, nothing, nil, not ",
  },
  {
    kanji: "約",
    kana: "ヤク",
    english: "promise, approximately, shrink ",
  },
  {
    kanji: "勇",
    kana: "ユウ    いさ.む",
    english: "courage, cheer up, be in high spirits, bravery, heroism ",
  },
  {
    kanji: "要",
    kana: "ヨウ    い.る",
    english: "need, main point, essence, pivot, key to ",
  },
  {
    kanji: "養",
    kana: "ヨウ    リョウ    やしな.う",
    english: "foster, bring up, rear, develop, nurture ",
  },
  {
    kanji: "浴",
    kana: "ヨク    あ.びる    あ.びせる",
    english: "bathe, be favored with, bask in ",
  },
  {
    kanji: "利",
    kana: "リ    き.く",
    english: "profit, advantage, benefit ",
  },
  {
    kanji: "陸",
    kana: "リク    ロク    おか",
    english: "land, six ",
  },
  {
    kanji: "料",
    kana: "リョウ",
    english: "fee, materials ",
  },
  {
    kanji: "良",
    kana: "リョウ    よ.い    -よ.い    い.い    -い.い",
    english: "good, pleasing, skilled ",
  },
  {
    kanji: "量",
    kana: "リョウ    はか.る",
    english: "quantity, measure, weight, amount, consider, estimate, surmise ",
  },
  {
    kanji: "輪",
    kana: "リン    わ",
    english: "wheel, ring, circle, link, loop, counter for wheels and flowers ",
  },
  {
    kanji: "類",
    kana: "ルイ    たぐ.い",
    english: "sort, kind, variety, class, genus ",
  },
  {
    kanji: "令",
    kana: "レイ",
    english: "orders, ancient laws, command, decree ",
  },
  {
    kanji: "例",
    kana: "レイ    たと.える",
    english: "example, custom, usage, precedent ",
  },
  {
    kanji: "冷",
    kana: "レイ    つめ.たい    ひ.える    ひ.や    ひ.ややか    ひ.やす    ひ.やかす    さ.める    さ.ます",
    english: "cool, cold (beer, person), chill ",
  },
  {
    kanji: "歴",
    kana: "レキ    レッキ",
    english: "curriculum, continuation, passage of time ",
  },
  {
    kanji: "連",
    kana: "レン    つら.なる    つら.ねる    つ.れる    -づ.れ",
    english: "take along, lead, join, connect, party, gang, clique ",
  },
  {
    kanji: "労",
    kana: "ロウ    ろう.する    いたわ.る    いた.ずき    ねぎら    つか.れる    ねぎら.う",
    english: "labor, thank for, reward for, toil, trouble ",
  },
  {
    kanji: "老",
    kana: "ロウ    お.いる    ふ.ける",
    english: "old man, old age, grow old ",
  },
  {
    kanji: "録",
    kana: "ロク",
    english: "record ",
  },
  {
    kanji: "圧",
    kana: "アツ    エン    オウ    お.す    へ.す    おさ.える    お.さえる",
    english: "pressure, push, overwhelm, oppress, dominate ",
  },
  {
    kanji: "易",
    kana: "エキ    イ    やさ.しい    やす.い",
    english: "easy, ready to, simple, fortune-telling, divination ",
  },
  {
    kanji: "移",
    kana: "イ    うつ.る    うつ.す",
    english: "shift, move, change, drift, catch (cold, fire), pass into ",
  },
  {
    kanji: "因",
    kana: "イン    よ.る    ちな.む",
    english: "cause, factor, be associated with, depend on, be limited to ",
  },
  {
    kanji: "営",
    kana: "エイ    いとな.む    いとな.み",
    english: "occupation, camp, perform, build, conduct (business) ",
  },
  {
    kanji: "永",
    kana: "エイ    なが.い",
    english: "eternity, long, lengthy ",
  },
  {
    kanji: "衛",
    kana: "エイ    エ",
    english: "defense, protection ",
  },
  {
    kanji: "液",
    kana: "エキ",
    english: "fluid, liquid, juice, sap, secretion ",
  },
  {
    kanji: "益",
    kana: "エキ    ヤク    ま.す",
    english: "benefit, gain, profit, advantage ",
  },
  {
    kanji: "演",
    kana: "エン",
    english: "performance, act, play, render, stage ",
  },
  {
    kanji: "往",
    kana: "オウ    い.く    いにしえ    さき.に    ゆ.く",
    english: "journey, chase away, let go, going, travel ",
  },
  {
    kanji: "応",
    kana: "オウ    ヨウ    -ノウ    あた.る    まさに    こた.える",
    english: "apply, answer, yes, OK, reply, accept ",
  },
  {
    kanji: "恩",
    kana: "オン",
    english: "grace, kindness, goodness, favor, mercy, blessing, benefit ",
  },
  {
    kanji: "仮",
    kana: "カ    ケ    かり    かり-",
    english: "sham, temporary, interim, assumed (name), informal ",
  },
  {
    kanji: "価",
    kana: "カ    ケ    あたい",
    english: "value, price ",
  },
  {
    kanji: "可",
    kana: "カ    コク    -べ.き    -べ.し",
    english: "can, passable, mustn't, should not, do not ",
  },
  {
    kanji: "河",
    kana: "カ    かわ",
    english: "river ",
  },
  {
    kanji: "過",
    kana: "カ    す.ぎる    -す.ぎる    -す.ぎ    す.ごす    あやま.つ    あやま.ち",
    english: "overdo, exceed, go beyond, error ",
  },
  {
    kanji: "賀",
    kana: "ガ",
    english: "congratulations, joy ",
  },
  {
    kanji: "解",
    kana: "カイ    ゲ    と.く    と.かす    と.ける    ほど.く    ほど.ける    わか.る    さと.る",
    english:
  "unravel, notes, key, explanation, understanding, untie, undo, solve, answer, cancel, absolve, explain, minute ",
  },
  {
    kanji: "快",
    kana: "カイ    こころよ.い",
    english: "cheerful, pleasant, agreeable, comfortable ",
  },
  {
    kanji: "格",
    kana: "カク    コウ    キャク    ゴウ",
    english: "status, rank, capacity, character, case (law, grammar) ",
  },
  {
    kanji: "確",
    kana: "カク    コウ    たし.か    たし.かめる",
    english: "assurance, firm, tight, hard, solid, confirm, clear, evident ",
  },
  {
    kanji: "額",
    kana: "ガク    ひたい",
    english: "forehead, tablet, plaque, framed picture, sum, amount, volume ",
  },
  {
    kanji: "刊",
    kana: "カン",
    english: "publish, carve, engrave ",
  },
  {
    kanji: "幹",
    kana: "カン    みき",
    english: "tree trunk ",
  },
  {
    kanji: "慣",
    kana: "カン    な.れる    な.らす",
    english: "accustomed, get used to, become experienced ",
  },
  {
    kanji: "眼",
    kana: "ガン    ゲン    まなこ    め",
    english: "eyeball ",
  },
  {
    kanji: "基",
    kana: "キ    もと    もとい",
    english: "fundamentals, radical (chem), counter for machines, foundation ",
  },
  {
    kanji: "寄",
    kana: "キ    よ.る    -よ.り    よ.せる",
    english: "draw near, stop in, bring near, gather, collect, send, forward ",
  },
  {
    kanji: "規",
    kana: "キ",
    english: "standard, measure ",
  },
  {
    kanji: "技",
    kana: "ギ    わざ",
    english: "skill, art, craft, ability, feat, performance, vocation, arts ",
  },
  {
    kanji: "義",
    kana: "ギ",
    english: "righteousness, justice, morality, honor, loyalty, meaning ",
  },
  {
    kanji: "逆",
    kana: "ギャク    ゲキ    さか    さか.さ    さか.らう",
    english: "inverted, reverse, opposite, wicked ",
  },
  {
    kanji: "久",
    kana: "キュウ    ク    ひさ.しい",
    english: "long time, old story ",
  },
  {
    kanji: "旧",
    kana: "キュウ    ふる.い    もと",
    english: "old times, old things, old friend, former, ex- ",
  },
  {
    kanji: "居",
    kana: "キョ    コ    い.る    -い    お.る",
    english: "reside, to be, exist, live with ",
  },
  {
    kanji: "許",
    kana: "キョ    ゆる.す    もと",
    english: "permit, approve ",
  },
  {
    kanji: "境",
    kana: "キョウ    ケイ    さかい",
    english: "boundary, border, region ",
  },
  {
    kanji: "興",
    kana: "コウ    キョウ    おこ.る    おこ.す",
    english: "entertain, revive, retrieve, interest, pleasure ",
  },
  {
    kanji: "均",
    kana: "キン    なら.す",
    english: "level, average ",
  },
  {
    kanji: "禁",
    kana: "キン",
    english: "prohibition, ban, forbid ",
  },
  {
    kanji: "句",
    kana: "ク",
    english: "phrase, clause, sentence, passage, paragraph, counter for haiku ",
  },
  {
    kanji: "群",
    kana: "グン    む.れる    む.れ    むら    むら.がる",
    english: "flock, group, crowd, herd, swarm, cluster ",
  },
  {
    kanji: "経",
    kana: "ケイ    キョウ    へ.る    た.つ    たていと    はか.る    のり",
    english: "sutra, longitude, pass thru, expire, warp ",
  },
  {
    kanji: "潔",
    kana: "ケツ    いさぎよ.い",
    english: "undefiled, pure, clean, righteous, gallant ",
  },
  {
    kanji: "件",
    kana: "ケン    くだん",
    english: "affair, case, matter, item ",
  },
  {
    kanji: "券",
    kana: "ケン",
    english: "ticket ",
  },
  {
    kanji: "検",
    kana: "ケン    しら.べる",
    english: "examination, investigate ",
  },
  {
    kanji: "険",
    kana: "ケン    けわ.しい",
    english:
  "precipitous, inaccessible place, impregnable position, steep place, sharp eyes ",
  },
  {
    kanji: "減",
    kana: "ゲン    へ.る    へ.らす",
    english: "dwindle, decrease, reduce, decline, curtail, get hungry ",
  },
  {
    kanji: "現",
    kana: "ゲン    あらわ.れる    あらわ.す",
    english: "present, existing, actual ",
  },
  {
    kanji: "限",
    kana: "ゲン    かぎ.る    かぎ.り    -かぎ.り",
    english: "limit, restrict, to best of ability ",
  },
  {
    kanji: "個",
    kana: "コ    カ",
    english: "individual, counter for articles and military units ",
  },
  {
    kanji: "故",
    kana: "コ    ゆえ",
    english:
  "happenstance, especially, intentionally, reason, cause, circumstances, the late, therefore, consequently ",
  },
  {
    kanji: "護",
    kana: "ゴ    まも.る",
    english: "safeguard, protect ",
  },
  {
    kanji: "効",
    kana: "コウ    き.く    ききめ    なら.う",
    english: "merit, efficacy, efficiency, benefit ",
  },
  {
    kanji: "厚",
    kana: "コウ    あつ.い    あか",
    english: "thick, heavy, rich, kind, cordial, brazen, shameless ",
  },
  {
    kanji: "構",
    kana: "コウ    かま.える    かま.う",
    english: "posture, build, pretend ",
  },
  {
    kanji: "耕",
    kana: "コウ    たがや.す",
    english: "till, plow, cultivate ",
  },
  {
    kanji: "講",
    kana: "コウ",
    english: "lecture, club, association ",
  },
  {
    kanji: "鉱",
    kana: "コウ    あらがね",
    english: "mineral, ore ",
  },
  {
    kanji: "混",
    kana: "コン    ま.じる    -ま.じり    ま.ざる    ま.ぜる    こ.む",
    english: "mix, blend, confuse ",
  },
  {
    kanji: "査",
    kana: "サ",
    english: "investigate ",
  },
  {
    kanji: "再",
    kana: "サイ    サ    ふたた.び",
    english: "again, twice, second time ",
  },
  {
    kanji: "妻",
    kana: "サイ    つま",
    english: "wife, spouse ",
  },
  {
    kanji: "採",
    kana: "サイ    と.る",
    english: "pick, take, fetch, take up ",
  },
  {
    kanji: "災",
    kana: "サイ    わざわ.い",
    english: "disaster, calamity, woe, curse, evil ",
  },
  {
    kanji: "際",
    kana: "サイ    きわ    -ぎわ",
    english:
  "occasion, side, edge, verge, dangerous, adventurous, indecent, time, when ",
  },
  {
    kanji: "在",
    kana: "ザイ    あ.る",
    english: "exist, outskirts, suburbs, located in ",
  },
  {
    kanji: "罪",
    kana: "ザイ    つみ",
    english: "guilt, sin, crime, fault, blame, offense ",
  },
  {
    kanji: "財",
    kana: "ザイ    サイ    ゾク",
    english: "property, money, wealth, assets ",
  },
  {
    kanji: "桜",
    kana: "オウ    ヨウ    さくら",
    english: "cherry ",
  },
  {
    kanji: "雑",
    kana: "ザツ    ゾウ    まじ.える    まじ.る",
    english: "miscellaneous ",
  },
  {
    kanji: "賛",
    kana: "サン    たす.ける    たた.える",
    english:
  "approve, praise, title or inscription on picture, assist, agree with ",
  },
  {
    kanji: "酸",
    kana: "サン    す.い",
    english: "acid, bitterness, sour, tart ",
  },
  {
    kanji: "師",
    kana: "シ",
    english: "expert, teacher, master, army, war ",
  },
  {
    kanji: "志",
    kana: "シ    シリング    こころざ.す    こころざし",
    english: "intention, plan, resolve, aspire, motive, hopes, shilling ",
  },
  {
    kanji: "支",
    kana: "シ    ささ.える    つか.える    か.う    しんよう    じゅうまた",
    english: "branch, support, sustain ",
  },
  {
    kanji: "枝",
    kana: "シ    えだ",
    english: "bough, branch, twig, limb ",
  },
  {
    kanji: "資",
    kana: "シ",
    english:
  "assets, resources, capital, funds, data, be conducive to, contribute to ",
  },
  {
    kanji: "飼",
    kana: "シ    か.う",
    english: "domesticate, raise, keep, feed ",
  },
  {
    kanji: "似",
    kana: "ジ    に.る    ひ.る",
    english: "becoming, resemble, counterfeit, imitate, suitable ",
  },
  {
    kanji: "示",
    kana: "ジ    シ    しめ.す",
    english: "show, indicate, point out, express, display ",
  },
  {
    kanji: "識",
    kana: "シキ",
    english: "discriminating, know, write ",
  },
  {
    kanji: "質",
    kana: "シツ    シチ    チ    たち    ただ.す    もと    わりふ",
    english: "substance, quality, matter, temperament ",
  },
  {
    kanji: "舎",
    kana: "シャ    セキ    やど.る",
    english: "cottage, inn, hut, house, mansion ",
  },
  {
    kanji: "謝",
    kana: "シャ    あやま.る",
    english: "apologize, thank, refuse ",
  },
  {
    kanji: "授",
    kana: "ジュ    さず.ける    さず.かる",
    english: "impart, instruct, grant, confer ",
  },
  {
    kanji: "修",
    kana: "シュウ    シュ    おさ.める    おさ.まる",
    english: "discipline, conduct oneself well, study, master ",
  },
  {
    kanji: "術",
    kana: "ジュツ    すべ",
    english: "art, technique, skill, means, trick, resources, magic ",
  },
  {
    kanji: "述",
    kana: "ジュツ    の.べる",
    english: "mention, state, speak, relate ",
  },
  {
    kanji: "準",
    kana: "ジュン    じゅん.じる    じゅん.ずる    なぞら.える    のり    ひと.しい    みずもり",
    english: "semi-, correspond to, proportionate to, conform, imitate ",
  },
  {
    kanji: "序",
    kana: "ジョ    つい.で    ついで",
    english:
  "preface, beginning, order, precedence, occasion, chance, incidentally ",
  },
  {
    kanji: "承",
    kana: "ショウ    うけたまわ.る    う.ける",
    english: "acquiesce, hear, listen to, be informed, receive ",
  },
  {
    kanji: "招",
    kana: "ショウ    まね.く",
    english: "beckon, invite, summon, engage ",
  },
  {
    kanji: "証",
    kana: "ショウ    あかし",
    english: "evidence, proof, certificate ",
  },
  {
    kanji: "常",
    kana: "ジョウ    つね    とこ-",
    english: "usual, ordinary, normal, regular ",
  },
  {
    kanji: "情",
    kana: "ジョウ    セイ    なさ.け",
    english: "feelings, emotion, passion, sympathy, circumstances, facts ",
  },
  {
    kanji: "条",
    kana: "ジョウ    チョウ    デキ    えだ    すじ",
    english: "article, clause, item, stripe, streak ",
  },
  {
    kanji: "状",
    kana: "ジョウ",
    english: "status quo, conditions, circumstances, form, appearance ",
  },
  {
    kanji: "織",
    kana: "ショク    シキ    お.る    お.り    おり    -おり    -お.り",
    english: "weave, fabric ",
  },
  {
    kanji: "職",
    kana: "ショク    ソク",
    english: "post, employment, work ",
  },
  {
    kanji: "制",
    kana: "セイ",
    english: "system, law, rule ",
  },
  {
    kanji: "勢",
    kana: "セイ    ゼイ    いきお.い    はずみ",
    english: "forces, energy, military strength ",
  },
  {
    kanji: "性",
    kana: "セイ    ショウ    さが",
    english: "sex, gender, nature ",
  },
  {
    kanji: "政",
    kana: "セイ    ショウ    まつりごと    まん",
    english: "politics, government ",
  },
  {
    kanji: "精",
    kana: "セイ    ショウ    シヤウ",
    english:
  "refined, ghost, fairy, energy, vitality, semen, excellence, purity, skill ",
  },
  {
    kanji: "製",
    kana: "セイ",
    english: "made in..., manufacture ",
  },
  {
    kanji: "税",
    kana: "ゼイ",
    english: "tax, duty ",
  },
  {
    kanji: "績",
    kana: "セキ",
    english: "exploits, unreeling cocoons ",
  },
  {
    kanji: "責",
    kana: "セキ    せ.める",
    english: "blame, condemn, censure ",
  },
  {
    kanji: "接",
    kana: "セツ    ショウ    つ.ぐ",
    english: "touch, contact, adjoin, piece together ",
  },
  {
    kanji: "設",
    kana: "セツ    もう.ける",
    english: "establishment, provision, prepare ",
  },
  {
    kanji: "絶",
    kana: "ゼツ    た.える    た.やす    た.つ",
    english:
  "discontinue, beyond, sever, cut off, abstain, interrupt, suppress ",
  },
  {
    kanji: "舌",
    kana: "ゼツ    した",
    english: "tongue, reed, clapper ",
  },
  {
    kanji: "銭",
    kana: "セン    ゼン    ぜに    すき",
    english: "coin, .01 yen, money ",
  },
  {
    kanji: "祖",
    kana: "ソ",
    english: "ancestor, pioneer, founder ",
  },
  {
    kanji: "素",
    kana: "ソ    ス    もと",
    english: "elementary, principle, naked, uncovered ",
  },
  {
    kanji: "総",
    kana: "ソウ    す.べて    すべ.て    ふさ",
    english: "general, whole, all, full, total ",
  },
  {
    kanji: "像",
    kana: "ゾウ",
    english: "statue, picture, image, figure, portrait ",
  },
  {
    kanji: "増",
    kana: "ゾウ    ま.す    ま.し    ふ.える    ふ.やす",
    english: "increase, add, augment, gain, promote ",
  },
  {
    kanji: "造",
    kana: "ゾウ    つく.る    つく.り    -づく.り",
    english: "create, make, structure, physique ",
  },
  {
    kanji: "則",
    kana: "ソク    のっと.る",
    english: "rule, follow, based on, model after ",
  },
  {
    kanji: "測",
    kana: "ソク    はか.る",
    english: "fathom, plan, scheme, measure ",
  },
  {
    kanji: "属",
    kana: "ゾク    ショク    さかん    つく    やから",
    english: "belong, genus, subordinate official, affiliated ",
  },
  {
    kanji: "損",
    kana: "ソン    そこ.なう    そこな.う    -そこ.なう    そこ.ねる    -そこ.ねる",
    english: "damage, loss, disadvantage, hurt, injure ",
  },
  {
    kanji: "態",
    kana: "タイ    わざ.と",
    english: "attitude, condition, figure, appearance, voice (of verbs) ",
  },
  {
    kanji: "貸",
    kana: "タイ    か.す    か.し-    かし-",
    english: "lend ",
  },
  {
    kanji: "退",
    kana: "タイ    しりぞ.く    しりぞ.ける    ひ.く    の.く    の.ける    ど.く",
    english: "retreat, withdraw, retire, resign, repel, expel, reject ",
  },
  {
    kanji: "団",
    kana: "ダン    トン    かたまり    まる.い",
    english: "group, association ",
  },
  {
    kanji: "断",
    kana: "ダン    た.つ    ことわ.る    さだ.める",
    english:
  "severance, decline, refuse, apologize, warn, dismiss, prohibit, decision, judgement, cutting ",
  },
  {
    kanji: "築",
    kana: "チク    きず.く",
    english: "fabricate, build, construct ",
  },
  {
    kanji: "張",
    kana: "チョウ    は.る    -は.り    -ば.り",
    english:
  "lengthen, counter for bows & stringed instruments, stretch, spread, put up (tent) ",
  },
  {
    kanji: "提",
    kana: "テイ    チョウ    ダイ    さ.げる",
    english: "propose, take along, carry in hand ",
  },
  {
    kanji: "程",
    kana: "テイ    ほど    -ほど",
    english: "extent, degree, law, formula, distance, limits, amount ",
  },
  {
    kanji: "敵",
    kana: "テキ    かたき    かな.う",
    english: "enemy, foe, opponent ",
  },
  {
    kanji: "適",
    kana: "テキ    かな.う",
    english: "suitable, occasional, rare, qualified, capable ",
  },
  {
    kanji: "統",
    kana: "トウ    す.べる    ほび.る",
    english: "overall, relationship, ruling, governing ",
  },
  {
    kanji: "導",
    kana: "ドウ    みちび.く",
    english: "guidance, leading, conduct, usher ",
  },
  {
    kanji: "銅",
    kana: "ドウ    あかがね",
    english: "copper ",
  },
  {
    kanji: "徳",
    kana: "トク",
    english: "benevolence, virtue, goodness, commanding respect ",
  },
  {
    kanji: "独",
    kana: "ドク    トク    ひと.り",
    english: "single, alone, spontaneously, Germany ",
  },
  {
    kanji: "任",
    kana: "ニン    まか.せる    まか.す",
    english: "responsibility, duty, term, entrust to, appoint ",
  },
  {
    kanji: "燃",
    kana: "ネン    も.える    も.やす    も.す",
    english: "burn, blaze, glow ",
  },
  {
    kanji: "能",
    kana: "ノウ    よ.く",
    english: "ability, talent, skill, capacity ",
  },
  {
    kanji: "破",
    kana: "ハ    やぶ.る    やぶ.れる",
    english: "rend, rip, tear, break, destroy, defeat, frustrate ",
  },
  {
    kanji: "判",
    kana: "ハン    バン    わか.る",
    english: "judgement, signature, stamp, seal ",
  },
  {
    kanji: "版",
    kana: "ハン",
    english: "printing block, printing plate, edition, impression, label ",
  },
  {
    kanji: "犯",
    kana: "ハン    ボン    おか.す",
    english: "crime, sin, offense ",
  },
  {
    kanji: "比",
    kana: "ヒ    くら.べる",
    english: "compare, race, ratio, Philipines ",
  },
  {
    kanji: "肥",
    kana: "ヒ    こ.える    こえ    こ.やす    こ.やし    ふと.る",
    english: "fertilizer, get fat, fertile, manure, pamper ",
  },
  {
    kanji: "非",
    kana: "ヒ    あら.ず",
    english: "un-, mistake, negative, injustice, non- ",
  },
  {
    kanji: "備",
    kana: "ビ    そな.える    そな.わる    つぶさ.に",
    english: "equip, provision, preparation ",
  },
  {
    kanji: "俵",
    kana: "ヒョウ    たわら",
    english: "bag, bale, sack, counter for bags ",
  },
  {
    kanji: "評",
    kana: "ヒョウ",
    english: "evaluate, criticism, comment ",
  },
  {
    kanji: "貧",
    kana: "ヒン    ビン    まず.しい",
    english: "poverty, poor ",
  },
  {
    kanji: "婦",
    kana: "フ",
    english: "lady, woman, wife, bride ",
  },
  {
    kanji: "富",
    kana: "フ    フウ    と.む    とみ",
    english: "wealth, enrich, abundant ",
  },
  {
    kanji: "布",
    kana: "フ    ぬの",
    english: "linen, cloth ",
  },
  {
    kanji: "武",
    kana: "ブ    ム    たけ.し",
    english: "warrior, military, chivalry, arms ",
  },
  {
    kanji: "復",
    kana: "フク    また",
    english: "restore, return to, revert, resume ",
  },
  {
    kanji: "複",
    kana: "フク",
    english: "duplicate, double, compound, multiple ",
  },
  {
    kanji: "仏",
    kana: "ブツ    フツ    ほとけ",
    english: "Buddha, the dead, France ",
  },
  {
    kanji: "編",
    kana: "ヘン    あ.む    -あ.み",
    english:
  "compilation, knit, plait, braid, twist, editing, completed poem, part of a book ",
  },
  {
    kanji: "弁",
    kana: "ベン    ヘン    わきま.える    わ.ける    はなびら    あらそ.う",
    english:
  "valve, petal, braid, speech, dialect, discrimination, dispose of, distinguish ",
  },
  {
    kanji: "保",
    kana: "ホ    ホウ    たも.つ",
    english: "protect, guarantee, keep, preserve, sustain, support ",
  },
  {
    kanji: "墓",
    kana: "ボ    はか",
    english: "grave, tomb ",
  },
  {
    kanji: "報",
    kana: "ホウ    むく.いる",
    english: "report, news, reward, retribution ",
  },
  {
    kanji: "豊",
    kana: "ホウ    ブ    ゆた.か    とよ",
    english: "bountiful, excellent, rich ",
  },
  {
    kanji: "暴",
    kana: "ボウ    バク    あば.く    あば.れる",
    english: "outburst, rave, fret, force, violence, cruelty, outrage ",
  },
  {
    kanji: "貿",
    kana: "ボウ",
    english: "trade, exchange ",
  },
  {
    kanji: "防",
    kana: "ボウ    ふせ.ぐ",
    english: "ward off, defend, protect, resist ",
  },
  {
    kanji: "務",
    kana: "ム    つと.める",
    english: "task, duties ",
  },
  {
    kanji: "夢",
    kana: "ム    ボウ    ゆめ    ゆめ.みる    くら.い",
    english: "dream, vision, illusion ",
  },
  {
    kanji: "迷",
    kana: "メイ    まよ.う",
    english: "astray, be perplexed, in doubt, lost, err, illusion ",
  },
  {
    kanji: "綿",
    kana: "メン    わた",
    english: "cotton ",
  },
  {
    kanji: "輸",
    kana: "ユ    シュ",
    english: "transport, send, be inferior ",
  },
  {
    kanji: "余",
    kana: "ヨ    あま.る    あま.り    あま.す",
    english: "too much, myself, surplus, other, remainder ",
  },
  {
    kanji: "預",
    kana: "ヨ    あず.ける    あず.かる",
    english: "deposit, custody, leave with, entrust to ",
  },
  {
    kanji: "容",
    kana: "ヨウ    い.れる",
    english: "contain, form, looks ",
  },
  {
    kanji: "率",
    kana: "ソツ    リツ    シュツ    ひき.いる",
    english: "ratio, rate, proportion, %, coefficient, factor ",
  },
  {
    kanji: "略",
    kana: "リャク    ほぼ    おか.す    おさ.める    はかりごと    はか.る    はぶ.く    りゃく.す    りゃく.する",
    english: "abbreviation, omission, outline, shorten, capture, plunder ",
  },
  {
    kanji: "留",
    kana: "リュウ    ル    と.める    と.まる    とど.める    とど.まる    るうぶる",
    english: "detain, fasten, halt, stop ",
  },
  {
    kanji: "領",
    kana: "リョウ",
    english: "jurisdiction, dominion, territory, fief, reign ",
  },
  {
    kanji: "異",
    kana: "イ    こと    こと.なる    け",
    english: "uncommon, queerness, strangeness, wonderful, curious, unusual ",
  },
  {
    kanji: "遺",
    kana: "イ    ユイ",
    english: "bequeath, leave behind, reserve ",
  },
  {
    kanji: "域",
    kana: "イキ",
    english: "range, region, limits, stage, level ",
  },
  {
    kanji: "宇",
    kana: "ウ",
    english: "eaves, roof, house, heaven ",
  },
  {
    kanji: "映",
    kana: "エイ    うつ.る    うつ.す    は.える    -ば.え",
    english: "reflect, reflection, projection ",
  },
  {
    kanji: "延",
    kana: "エン    の.びる    の.べる    の.べ    の.ばす",
    english: "prolong, stretching ",
  },
  {
    kanji: "沿",
    kana: "エン    そ.う    -ぞ.い",
    english: "run alongside, follow along, run along, lie along ",
  },
  {
    kanji: "我",
    kana: "ガ    われ    わ    わ.が-    わが-",
    english: "ego, I, selfish, our, oneself ",
  },
  {
    kanji: "灰",
    kana: "カイ    はい",
    english: "ashes, puckery juice, cremate ",
  },
  {
    kanji: "拡",
    kana: "カク    コウ    ひろ.がる    ひろ.げる    ひろ.める",
    english: "broaden, extend, expand, enlarge ",
  },
  {
    kanji: "閣",
    kana: "カク",
    english: "tower, tall building, palace ",
  },
  {
    kanji: "革",
    kana: "カク    かわ",
    english: "leather, become serious, skin, hide, pelt ",
  },
  {
    kanji: "割",
    kana: "カツ    わ.る    わり    わ.り    わ.れる    さ.く",
    english: "proportion, comparatively, divide, cut, separate, split ",
  },
  {
    kanji: "株",
    kana: "シュ    かぶ",
    english: "stocks, stump, shares, stock, counter for small plants ",
  },
  {
    kanji: "巻",
    kana: "カン    ケン    ま.く    まき    ま.き",
    english:
  "scroll, volume, book, part, roll up, wind up, tie, coil, counter for texts (or book scrolls) ",
  },
  {
    kanji: "干",
    kana: "カン    ほ.す    ほ.し-    -ぼ.し    ひ.る",
    english: "dry, parch ",
  },
  {
    kanji: "看",
    kana: "カン    み.る",
    english: "watch over, see ",
  },
  {
    kanji: "簡",
    kana: "カン",
    english: "simplicity, brevity ",
  },
  {
    kanji: "危",
    kana: "キ    あぶ.ない    あや.うい    あや.ぶむ",
    english: "dangerous, fear, uneasy ",
  },
  {
    kanji: "揮",
    kana: "キ    ふる.う",
    english: "brandish, wave, wag, swing, shake ",
  },
  {
    kanji: "机",
    kana: "キ    つくえ",
    english: "desk, table ",
  },
  {
    kanji: "貴",
    kana: "キ    たっと.い    とうと.い    たっと.ぶ    とうと.ぶ",
    english: "precious, value, prize, esteem, honor ",
  },
  {
    kanji: "疑",
    kana: "ギ    うたが.う",
    english: "doubt, distrust, be suspicious, question ",
  },
  {
    kanji: "吸",
    kana: "キュウ    す.う",
    english: "suck, imbibe, inhale, sip ",
  },
  {
    kanji: "供",
    kana: "キョウ    ク    クウ    グ    そな.える    とも    -ども",
    english: "submit, offer, present, serve (meal), accompany ",
  },
  {
    kanji: "胸",
    kana: "キョウ    むね    むな-",
    english: "bosom, breast, chest, heart, feelings ",
  },
  {
    kanji: "郷",
    kana: "キョウ    ゴウ    さと",
    english: "home town, village, native place, district ",
  },
  {
    kanji: "勤",
    kana: "キン    ゴン    つと.める    -づと.め    つと.まる    いそ.しむ",
    english: "diligence, become employed, serve ",
  },
  {
    kanji: "筋",
    kana: "キン    すじ",
    english: "muscle, sinew, tendon, fiber, plot, plan, descent ",
  },
  {
    kanji: "敬",
    kana: "ケイ    キョウ    うやま.う",
    english: "awe, respect, honor, revere ",
  },
  {
    kanji: "系",
    kana: "ケイ",
    english: "lineage, system ",
  },
  {
    kanji: "警",
    kana: "ケイ    いまし.める",
    english: "admonish, commandment ",
  },
  {
    kanji: "劇",
    kana: "ゲキ",
    english: "drama, play ",
  },
  {
    kanji: "激",
    kana: "ゲキ    はげ.しい",
    english: "violent, get excited, enraged, chafe, incite ",
  },
  {
    kanji: "穴",
    kana: "ケツ    あな",
    english: "hole, aperture, slit, cave, den ",
  },
  {
    kanji: "憲",
    kana: "ケン",
    english: "constitution, law ",
  },
  {
    kanji: "権",
    kana: "ケン    ゴン    おもり    かり    はか.る",
    english: "authority, power, rights ",
  },
  {
    kanji: "絹",
    kana: "ケン    きぬ",
    english: "silk ",
  },
  {
    kanji: "厳",
    kana: "ゲン    ゴン    おごそ.か    きび.しい    いか.めしい    いつくし",
    english: "stern, strictness, severity, rigidity ",
  },
  {
    kanji: "源",
    kana: "ゲン    みなもと",
    english: "source, origin ",
  },
  {
    kanji: "呼",
    kana: "コ    よ.ぶ",
    english: "call, call out to, invite ",
  },
  {
    kanji: "己",
    kana: "コ    キ    おのれ    つちのと",
    english: "self, snake, serpent ",
  },
  {
    kanji: "誤",
    kana: "ゴ    あやま.る    -あやま.る",
    english: "mistake, err, do wrong, mislead ",
  },
  {
    kanji: "后",
    kana: "コウ    ゴ    きさき",
    english: "empress, queen, after, behind, back, later ",
  },
  {
    kanji: "孝",
    kana: "コウ    キョウ",
    english: "filial piety, child's respect ",
  },
  {
    kanji: "皇",
    kana: "コウ    オウ",
    english: "emperor ",
  },
  {
    kanji: "紅",
    kana: "コウ    ク    べに    くれない    あか.い",
    english: "crimson, deep red ",
  },
  {
    kanji: "鋼",
    kana: "コウ    はがね",
    english: "steel ",
  },
  {
    kanji: "降",
    kana: "コウ    ゴ    お.りる    お.ろす    ふ.る    ふ.り    くだ.る    くだ.す",
    english: "descend, precipitate, fall, surrender ",
  },
  {
    kanji: "刻",
    kana: "コク    きざ.む    きざ.み",
    english: "engrave, cut fine, chop, hash, mince, time, carving ",
  },
  {
    kanji: "穀",
    kana: "コク",
    english: "cereals, grain ",
  },
  {
    kanji: "骨",
    kana: "コツ    ほね",
    english: "skeleton, bone, remains, frame ",
  },
  {
    kanji: "困",
    kana: "コン    こま.る",
    english: "quandary, become distressed, annoyed ",
  },
  {
    kanji: "砂",
    kana: "サ    シャ    すな",
    english: "sand ",
  },
  {
    kanji: "座",
    kana: "ザ    すわ.る",
    english: "squat, seat, cushion, gathering, sit ",
  },
  {
    kanji: "済",
    kana: "サイ    セイ    す.む    -ず.み    -ずみ    す.まない    す.ます    -す.ます    すく.う    な.す    わたし    わた.る",
    english: "finish, come to an end, excusable, need not ",
  },
  {
    kanji: "裁",
    kana: "サイ    た.つ    さば.く",
    english: "tailor, judge, decision, cut out (pattern) ",
  },
  {
    kanji: "策",
    kana: "サク",
    english: "scheme, plan, policy, step, means ",
  },
  {
    kanji: "冊",
    kana: "サツ    サク    ふみ",
    english: "tome, counter for books, volume ",
  },
  {
    kanji: "蚕",
    kana: "サン    テン    かいこ    こ",
    english: "silkworm ",
  },
  {
    kanji: "姿",
    kana: "シ    すがた",
    english: "figure, form, shape ",
  },
  {
    kanji: "私",
    kana: "シ    わたくし    わたし",
    english: "private, I, me ",
  },
  {
    kanji: "至",
    kana: "シ    いた.る",
    english: "climax, arrive, proceed, reach, attain, result in ",
  },
  {
    kanji: "視",
    kana: "シ    み.る",
    english: "inspection, regard as, see, look at ",
  },
  {
    kanji: "詞",
    kana: "シ",
    english: "part of speech, words, poetry ",
  },
  {
    kanji: "誌",
    kana: "シ",
    english: "document, records ",
  },
  {
    kanji: "磁",
    kana: "ジ",
    english: "magnet, porcelain ",
  },
  {
    kanji: "射",
    kana: "シャ    い.る    さ.す",
    english: "shoot, shine into, onto, archery ",
  },
  {
    kanji: "捨",
    kana: "シャ    す.てる",
    english: "discard, throw away, abandon, resign, reject, sacrifice ",
  },
  {
    kanji: "尺",
    kana: "シャク",
    english: "shaku, Japanese foot, measure, scale, rule ",
  },
  {
    kanji: "若",
    kana: "ジャク    ニャク    ニャ    わか.い    わか-    も.しくわ    も.し    も.しくは",
    english: "young, if, perhaps, possibly, low number, immature ",
  },
  {
    kanji: "樹",
    kana: "ジュ    き",
    english: "timber trees, wood ",
  },
  {
    kanji: "収",
    kana: "シュウ    おさ.める    おさ.まる",
    english: "income, obtain, reap, pay, supply, store ",
  },
  {
    kanji: "宗",
    kana: "シュウ    ソウ    むね",
    english: "religion, sect, denomination, main point, origin, essence ",
  },
  {
    kanji: "就",
    kana: "シュウ    ジュ    つ.く    つ.ける",
    english: "concerning, settle, take position, depart, study, per ",
  },
  {
    kanji: "衆",
    kana: "シュウ    シュ    おお.い",
    english: "masses, great numbers, multitude, populace ",
  },
  {
    kanji: "従",
    kana: "ジュウ    ショウ    ジュ    したが.う    したが.える    より",
    english:
  "accompany, obey, submit to, comply, follow, secondary, incidental, subordinate ",
  },
  {
    kanji: "縦",
    kana: "ジュウ    たて",
    english: "vertical, length, height, self-indulgent, wayward ",
  },
  {
    kanji: "縮",
    kana: "シュク    ちぢ.む    ちぢ.まる    ちぢ.める    ちぢ.れる    ちぢ.らす",
    english: "shrink, contract, shrivel, wrinkle, reduce ",
  },
  {
    kanji: "熟",
    kana: "ジュク    う.れる",
    english: "mellow, ripen, mature, acquire skill ",
  },
  {
    kanji: "純",
    kana: "ジュン",
    english: "genuine, purity, innocence, net (profit) ",
  },
  {
    kanji: "処",
    kana: "ショ    ところ    -こ    お.る",
    english:
  "dispose, manage, deal with, sentence, condemn, act, behave, place ",
  },
  {
    kanji: "署",
    kana: "ショ",
    english: "signature, govt office, police station ",
  },
  {
    kanji: "諸",
    kana: "ショ    もろ",
    english: "various, many, several, together ",
  },
  {
    kanji: "除",
    kana: "ジョ    ジ    のぞ.く    -よ.け",
    english: "exclude, division (x/3), remove, abolish, cancel, except ",
  },
  {
    kanji: "傷",
    kana: "ショウ    きず    いた.む    いた.める",
    english:
  "wound, hurt, injure, impair, pain, injury, cut, gash, scar, weak point ",
  },
  {
    kanji: "将",
    kana: "ショウ    ソウ    まさ.に    はた    まさ    ひきい.る    もって",
    english:
  "leader, commander, general, admiral, or, and again, soon, from now on, just about ",
  },
  {
    kanji: "障",
    kana: "ショウ    さわ.る",
    english: "hinder, hurt, harm ",
  },
  {
    kanji: "城",
    kana: "ジョウ    しろ",
    english: "castle ",
  },
  {
    kanji: "蒸",
    kana: "ジョウ    セイ    む.す    む.れる    む.らす",
    english: "steam, heat, sultry, foment, get musty ",
  },
  {
    kanji: "針",
    kana: "シン    はり",
    english: "needle, pin, staple, stinger ",
  },
  {
    kanji: "仁",
    kana: "ジン    ニ    ニン",
    english: "humanity, virtue, benevolence, charity, man, kernel ",
  },
  {
    kanji: "垂",
    kana: "スイ    た.れる    た.らす    た.れ    -た.れ    なんなんと.す",
    english: "droop, suspend, hang, slouch ",
  },
  {
    kanji: "推",
    kana: "スイ    お.す",
    english: "conjecture, infer, guess, suppose, support ",
  },
  {
    kanji: "寸",
    kana: "スン",
    english: "measurement, foot/10 ",
  },
  {
    kanji: "盛",
    kana: "セイ    ジョウ    も.る    さか.る    さか.ん",
    english: "boom, prosper, copulate ",
  },
  {
    kanji: "聖",
    kana: "セイ    ショウ    ひじり",
    english: "holy, saint, sage, master, priest ",
  },
  {
    kanji: "誠",
    kana: "セイ    まこと",
    english: "sincerity, admonish, warn, prohibit, truth, fidelity ",
  },
  {
    kanji: "宣",
    kana: "セン    のたむ.う    のたま.わく",
    english: "proclaim, say, announce ",
  },
  {
    kanji: "専",
    kana: "セン    もっぱ.ら",
    english: "specialty, exclusive, mainly, solely ",
  },
  {
    kanji: "泉",
    kana: "セン    いずみ",
    english: "spring, fountain ",
  },
  {
    kanji: "洗",
    kana: "セン    あら.う",
    english: "wash, inquire into, probe ",
  },
  {
    kanji: "染",
    kana: "セン    そ.める    -ぞ.め    -ぞめ    そ.まる    し.みる    -じ.みる    し.み    -し.める",
    english: "dye, color, paint, stain, print ",
  },
  {
    kanji: "善",
    kana: "ゼン    よ.い    い.い    よ.く    よし.とする",
    english: "virtuous, good, goodness ",
  },
  {
    kanji: "創",
    kana: "ソウ    ショウ    つく.る    はじ.める    きず    けず.しける",
    english: "genesis, wound, injury, hurt, start, originate ",
  },
  {
    kanji: "奏",
    kana: "ソウ    かな.でる",
    english: "play music, speak to a ruler, complete ",
  },
  {
    kanji: "層",
    kana: "ソウ",
    english: "stratum, social class, layer, story, floor ",
  },
  {
    kanji: "操",
    kana: "ソウ    サン    みさお    あやつ.る",
    english:
  "maneuver, manipulate, operate, steer, chastity, virginity, fidelity ",
  },
  {
    kanji: "窓",
    kana: "ソウ    ス    まど    てんまど    けむだし",
    english: "window, pane ",
  },
  {
    kanji: "装",
    kana: "ソウ    ショウ    よそお.う    よそお.い",
    english: "attire, dress, pretend, disguise, profess ",
  },
  {
    kanji: "臓",
    kana: "ゾウ    はらわた",
    english: "entrails, viscera, bowels ",
  },
  {
    kanji: "蔵",
    kana: "ゾウ    ソウ    くら    おさ.める    かく.れる",
    english: "storehouse, hide, own, have, possess ",
  },
  {
    kanji: "存",
    kana: "ソン    ゾン",
    english: "suppose, be aware of, believe, feel ",
  },
  {
    kanji: "尊",
    kana: "ソン    たっと.い    とうと.い    たっと.ぶ    とうと.ぶ",
    english: "revered, valuable, precious, noble, exalted ",
  },
  {
    kanji: "宅",
    kana: "タク",
    english: "home, house, residence, our house, my husband ",
  },
  {
    kanji: "担",
    kana: "タン    かつ.ぐ    にな.う",
    english: "shouldering, carry, raise, bear ",
  },
  {
    kanji: "探",
    kana: "タン    さぐ.る    さが.す",
    english: "grope, search, look for ",
  },
  {
    kanji: "誕",
    kana: "タン",
    english: "nativity, be born, declension, lie, be arbitrary ",
  },
  {
    kanji: "暖",
    kana: "ダン    ノン    あたた.か    あたた.かい    あたた.まる    あたた.める",
    english: "warmth ",
  },
  {
    kanji: "段",
    kana: "ダン    タン",
    english: "grade, steps, stairs ",
  },
  {
    kanji: "値",
    kana: "チ    ね    あたい",
    english: "price, cost, value ",
  },
  {
    kanji: "宙",
    kana: "チュウ",
    english: "mid-air, air, space, sky, memorization, interval of time ",
  },
  {
    kanji: "忠",
    kana: "チュウ",
    english: "loyalty, fidelity, faithfulness ",
  },
  {
    kanji: "著",
    kana: "チョ    チャク    あらわ.す    いちじる.しい",
    english:
  "renowned, publish, write, remarkable, phenomenal, put on, don, wear, arrival, finish (race), counter for suits of clothing, literary work ",
  },
  {
    kanji: "庁",
    kana: "チョウ    テイ    やくしょ",
    english: "government office ",
  },
  {
    kanji: "潮",
    kana: "チョウ    しお    うしお",
    english: "tide, salt water, opportunity ",
  },
  {
    kanji: "頂",
    kana: "チョウ    いただ.く    いただき",
    english: "place on the head, receive, top of head, top, summit, peak ",
  },
  {
    kanji: "賃",
    kana: "チン",
    english: "fare, fee, hire, rent, wages, charge ",
  },
  {
    kanji: "痛",
    kana: "ツウ    いた.い    いた.む    いた.ましい    いた.める",
    english: "pain, hurt, damage, bruise ",
  },
  {
    kanji: "展",
    kana: "テン",
    english: "unfold, expand ",
  },
  {
    kanji: "党",
    kana: "トウ    なかま    むら",
    english: "party, faction, clique ",
  },
  {
    kanji: "糖",
    kana: "トウ",
    english: "sugar ",
  },
  {
    kanji: "討",
    kana: "トウ    う.つ",
    english: "chastise, attack, defeat, destroy, conquer ",
  },
  {
    kanji: "届",
    kana: "カイ    とど.ける    -とど.け    とど.く",
    english: "deliver, reach, arrive, report, notify, forward ",
  },
  {
    kanji: "難",
    kana: "ナン    かた.い    -がた.い    むずか.しい    むづか.しい    むつか.しい    -にく.い",
    english: "difficult, impossible, trouble, accident, defect ",
  },
  {
    kanji: "乳",
    kana: "ニュウ    ちち    ち",
    english: "milk, breasts ",
  },
  {
    kanji: "認",
    kana: "ニン    みと.める    したた.める",
    english: "acknowledge, witness, discern, recognize, appreciate, believe ",
  },
  {
    kanji: "納",
    kana: "ノウ    ナッ    ナ    ナン    トウ    おさ.める    -おさ.める    おさ.まる",
    english: "settlement, obtain, reap, pay, supply, store ",
  },
  {
    kanji: "脳",
    kana: "ノウ    ドウ    のうずる",
    english: "brain, memory ",
  },
  {
    kanji: "派",
    kana: "ハ",
    english: "faction, group, party, clique, sect, school ",
  },
  {
    kanji: "俳",
    kana: "ハイ",
    english: "haiku, actor ",
  },
  {
    kanji: "拝",
    kana: "ハイ    おが.む    おろが.む",
    english: "worship, adore, pray to ",
  },
  {
    kanji: "背",
    kana: "ハイ    せ    せい    そむ.く    そむ.ける",
    english: "stature, height, back, behind, disobey, defy, go back on, rebel ",
  },
  {
    kanji: "肺",
    kana: "ハイ",
    english: "lungs ",
  },
  {
    kanji: "班",
    kana: "ハン",
    english: "squad, corps, unit, group ",
  },
  {
    kanji: "晩",
    kana: "バン",
    english: "nightfall, night ",
  },
  {
    kanji: "否",
    kana: "ヒ    いな    いや",
    english: "negate, no, noes, refuse, decline, deny ",
  },
  {
    kanji: "批",
    kana: "ヒ",
    english: "criticism, strike ",
  },
  {
    kanji: "秘",
    kana: "ヒ    ひ.める    ひそ.か    かく.す",
    english: "secret, conceal ",
  },
  {
    kanji: "腹",
    kana: "フク    はら",
    english: "abdomen, belly, stomach ",
  },
  {
    kanji: "奮",
    kana: "フン    ふる.う",
    english: "stirred up, be invigorated, flourish ",
  },
  {
    kanji: "並",
    kana: "ヘイ    ホウ    な.み    なら.べる    なら.ぶ    なら.びに",
    english: "row, and, besides, as well as, line up, rank with, rival, equal ",
  },
  {
    kanji: "閉",
    kana: "ヘイ    と.じる    と.ざす    し.める    し.まる    た.てる",
    english: "closed, shut ",
  },
  {
    kanji: "陛",
    kana: "ヘイ",
    english: "highness, steps (of throne) ",
  },
  {
    kanji: "片",
    kana: "ヘン    かた-    かた",
    english: "one-sided, leaf, sheet ",
  },
  {
    kanji: "補",
    kana: "ホ    おぎな.う",
    english:
  "supplement, supply, make good, offset, compensate, assistant, learner ",
  },
  {
    kanji: "暮",
    kana: "ボ    く.れる    く.らす",
    english: "livelihood, make a living, spend time ",
  },
  {
    kanji: "宝",
    kana: "ホウ    たから",
    english: "treasure, wealth, valuables ",
  },
  {
    kanji: "訪",
    kana: "ホウ    おとず.れる    たず.ねる    と.う",
    english: "call on, visit, look up, offer sympathy ",
  },
  {
    kanji: "亡",
    kana: "ボウ    モウ    な.い    な.き-    ほろ.びる    ほろ.ぶ    ほろ.ぼす",
    english: "deceased, the late, dying, perish ",
  },
  {
    kanji: "忘",
    kana: "ボウ    わす.れる",
    english: "forget ",
  },
  {
    kanji: "棒",
    kana: "ボウ",
    english: "rod, stick, cane, pole, club, line ",
  },
  {
    kanji: "枚",
    kana: "マイ    バイ",
    english: "sheet of..., counter for flat thin objects or sheets ",
  },
  {
    kanji: "幕",
    kana: "マク    バク",
    english: "curtain, bunting, act of play ",
  },
  {
    kanji: "密",
    kana: "ミツ    ひそ.か",
    english: "secrecy, density (pop), minuteness, carefulness ",
  },
  {
    kanji: "盟",
    kana: "メイ",
    english: "alliance, oath ",
  },
  {
    kanji: "模",
    kana: "モ    ボ",
    english: "imitation, copy, mock ",
  },
  {
    kanji: "訳",
    kana: "ヤク    わけ",
    english: "translate, reason, circumstance, case ",
  },
  {
    kanji: "優",
    kana: "ユウ    ウ    やさ.しい    すぐ.れる    まさ.る",
    english: "tenderness, excel, surpass, actor, superiority, gentleness ",
  },
  {
    kanji: "郵",
    kana: "ユウ",
    english: "mail, stagecoach stop ",
  },
  {
    kanji: "幼",
    kana: "ヨウ    おさな.い",
    english: "infancy, childhood ",
  },
  {
    kanji: "欲",
    kana: "ヨク    ほっ.する    ほ.しい",
    english: "longing, covetousness, greed, passion, desire, craving ",
  },
  {
    kanji: "翌",
    kana: "ヨク",
    english: "the following, next ",
  },
  {
    kanji: "乱",
    kana: "ラン    ロン    みだ.れる    みだ.る    みだ.す    みだ    おさ.める    わた.る",
    english: "riot, war, disorder, disturb ",
  },
  {
    kanji: "卵",
    kana: "ラン    たまご",
    english: "egg, ovum, spawn, roe ",
  },
  {
    kanji: "覧",
    kana: "ラン    み.る",
    english: "perusal, see ",
  },
  {
    kanji: "裏",
    kana: "リ    うら",
    english:
  "back, amidst, in, reverse, inside, palm, sole, rear, lining, wrong side ",
  },
  {
    kanji: "律",
    kana: "リツ    リチ    レツ",
    english: "rhythm, law, regulation, gauge, control ",
  },
  {
    kanji: "臨",
    kana: "リン    のぞ.む",
    english: "look to, face, meet, confront, attend, call on ",
  },
  {
    kanji: "朗",
    kana: "ロウ    ほが.らか    あき.らか",
    english: "melodious, clear, bright, serene, cheerful ",
  },
  {
    kanji: "論",
    kana: "ロン",
    english: "argument, discourse ",
  },
  {
    kanji: "握",
    kana: "アク    にぎ.る",
    english: "grip, hold, mould sushi, bribe ",
  },
  {
    kanji: "扱",
    kana: "ショウ    あつか.る    あつか.い    あつか.う",
    english: "handle, entertain, thresh, strip ",
  },
  {
    kanji: "依",
    kana: "イ    エ    よ.る",
    english: "reliant, depend on, consequently, therefore, due to ",
  },
  {
    kanji: "偉",
    kana: "イ    えら.い",
    english: "admirable, greatness, remarkable, conceited, famous, excellent ",
  },
  {
    kanji: "威",
    kana: "イ    おど.す    おど.し    おど.かす",
    english: "intimidate, dignity, majesty, menace, threaten ",
  },
  {
    kanji: "為",
    kana: "イ    ため    な.る    な.す    す.る    たり    つく.る    なり",
    english:
  "do, change, make, benefit, welfare, be of use, reach to, try, practice, cost, serve as, good, advantage, as a result of ",
  },
  {
    kanji: "維",
    kana: "イ",
    english: "fiber, tie, rope ",
  },
  {
    kanji: "緯",
    kana: "イ    よこいと    ぬき",
    english: "horizontal, woof, left & right, latitude ",
  },
  {
    kanji: "違",
    kana: "イ    ちが.う    ちが.い    ちが.える    -ちが.える    たが.う    たが.える",
    english: "difference, differ ",
  },
  {
    kanji: "井",
    kana: "セイ    ショウ    い",
    english: "well, well crib, town, community ",
  },
  {
    kanji: "壱",
    kana: "イチ    イツ    ひとつ",
    english: "I, one ",
  },
  {
    kanji: "稲",
    kana: "トウ    テ    いね    いな-",
    english: "rice plant ",
  },
  {
    kanji: "芋",
    kana: "ウ    いも",
    english: "potato ",
  },
  {
    kanji: "陰",
    kana: "イン    かげ    かげ.る",
    english: "shade, yin, negative, sex organs, secret, shadow ",
  },
  {
    kanji: "隠",
    kana: "イン    オン    かく.す    かく.し    かく.れる    かか.す    よ.る",
    english: "conceal, hide, cover ",
  },
  {
    kanji: "影",
    kana: "エイ    かげ",
    english: "shadow, silhouette, phantom ",
  },
  {
    kanji: "鋭",
    kana: "エイ    するど.い",
    english: "pointed, sharpness, edge, weapon, sharp, violent ",
  },
  {
    kanji: "越",
    kana: "エツ    オツ    こ.す    -こ.す    -ご.し    こ.える    -ご.え",
    english: "surpass, cross over, move to, exceed, Vietnam ",
  },
  {
    kanji: "援",
    kana: "エン",
    english: "abet, help, save ",
  },
  {
    kanji: "煙",
    kana: "エン    けむ.る    けむり    けむ.い",
    english: "smoke ",
  },
  {
    kanji: "縁",
    kana: "エン    -ネン    ふち    ふちど.る    ゆかり    よすが    へり    えにし",
    english: "affinity, relation, connection, edge, border, verge, brink ",
  },
  {
    kanji: "鉛",
    kana: "エン    なまり",
    english: "lead ",
  },
  {
    kanji: "汚",
    kana: "オ    けが.す    けが.れる    けが.らわしい    よご.す    よご.れる    きたな.い",
    english: "dirty, pollute, disgrace, rape, defile ",
  },
  {
    kanji: "奥",
    kana: "オウ    オク    おく.まる    くま",
    english: "heart, interior ",
  },
  {
    kanji: "押",
    kana: "オウ    お.す    お.し-    お.っ-    お.さえる    おさ.える",
    english:
  "push, stop, check, subdue, attach, seize, weight, shove, press, seal, do in spite of ",
  },
  {
    kanji: "沖",
    kana: "チュウ    おき    おきつ    ちゅう.する    わく",
    english: "open sea, offing, rise high into sky ",
  },
  {
    kanji: "憶",
    kana: "オク",
    english: "recollection, think, remember ",
  },
  {
    kanji: "暇",
    kana: "カ    ひま    いとま",
    english: "spare time, rest, leisure, time, leave of absence ",
  },
  {
    kanji: "箇",
    kana: "カ    コ",
    english: "counters for things ",
  },
  {
    kanji: "菓",
    kana: "カ",
    english: "candy, cakes, fruit ",
  },
  {
    kanji: "雅",
    kana: "ガ    みや.び",
    english: "gracious, elegant, graceful, refined ",
  },
  {
    kanji: "介",
    kana: "カイ",
    english: "jammed in, shellfish, mediate, concern oneself with ",
  },
  {
    kanji: "壊",
    kana: "カイ    エ    こわ.す    こわ.れる    やぶ.る",
    english: "demolition, break, destroy ",
  },
  {
    kanji: "戒",
    kana: "カイ    いまし.める",
    english: "commandment ",
  },
  {
    kanji: "皆",
    kana: "カイ    みな    みんな",
    english: "all, everything ",
  },
  {
    kanji: "獲",
    kana: "カク    え.る",
    english: "seize, get, find, earn, acquire, can, may, able to ",
  },
  {
    kanji: "較",
    kana: "カク    コウ    くら.べる",
    english: "contrast, compare ",
  },
  {
    kanji: "刈",
    kana: "ガイ    カイ    か.る",
    english: "reap, cut, clip, trim, prune ",
  },
  {
    kanji: "乾",
    kana: "カン    ケン    かわ.く    かわ.かす    ほ.す    ひ.る    いぬい",
    english: "drought, dry, dessicate, drink up, heaven, emperor ",
  },
  {
    kanji: "勧",
    kana: "カン    ケン    すす.める",
    english: "persuade, recommend, advise, encourage, offer ",
  },
  {
    kanji: "歓",
    kana: "カン    よろこ.ぶ",
    english: "delight, joy ",
  },
  {
    kanji: "汗",
    kana: "カン    あせ",
    english: "sweat, perspire ",
  },
  {
    kanji: "環",
    kana: "カン    わ",
    english: "ring, circle, link, wheel ",
  },
  {
    kanji: "甘",
    kana: "カン    あま.い    あま.える    あま.やかす    うま.い",
    english: "sweet, coax, pamper, be content, sugary ",
  },
  {
    kanji: "監",
    kana: "カン",
    english: "oversee, official, govt office, rule, administer ",
  },
  {
    kanji: "鑑",
    kana: "カン    かんが.みる    かがみ",
    english: "specimen, take warning from, learn from ",
  },
  {
    kanji: "含",
    kana: "ガン    ふく.む    ふく.める",
    english: "include, bear in mind, understand, cherish ",
  },
  {
    kanji: "奇",
    kana: "キ    く.しき    あや.しい    くし    めずら.しい",
    english: "strange, strangeness, curiousity ",
  },
  {
    kanji: "幾",
    kana: "キ    いく-    いく.つ    いく.ら",
    english: "how many, how much, how far, how long ",
  },
  {
    kanji: "祈",
    kana: "キ    いの.る",
    english: "pray, wish ",
  },
  {
    kanji: "輝",
    kana: "キ    かがや.く",
    english: "radiance, shine, sparkle, gleam, twinkle ",
  },
  {
    kanji: "鬼",
    kana: "キ    おに    おに-",
    english: "ghost, devil ",
  },
  {
    kanji: "儀",
    kana: "ギ",
    english: "ceremony, rule, affair, case, a matter ",
  },
  {
    kanji: "戯",
    kana: "ギ    ゲ    たわむ.れる    ざ.れる    じゃ.れる",
    english: "frolic, play, sport ",
  },
  {
    kanji: "詰",
    kana: "キツ    キチ    つ.める    つ.め    -づ.め    つ.まる    つ.む",
    english: "packed, close, pressed, reprove, rebuke, blame ",
  },
  {
    kanji: "却",
    kana: "キャク    かえ.って    しりぞ.く    しりぞ.ける",
    english: "instead, on the contrary, rather ",
  },
  {
    kanji: "脚",
    kana: "キャク    キャ    カク    あし",
    english: "skids, leg, undercarriage ",
  },
  {
    kanji: "丘",
    kana: "キュウ    おか",
    english: "hill, knoll ",
  },
  {
    kanji: "及",
    kana: "キュウ    およ.ぶ    およ.び    および    およ.ぼす",
    english: "reach out, exert, exercise, cause ",
  },
  {
    kanji: "朽",
    kana: "キュウ    く.ちる",
    english: "decay, rot, remain in seclusion ",
  },
  {
    kanji: "巨",
    kana: "キョ",
    english: "gigantic, big, large, great ",
  },
  {
    kanji: "拠",
    kana: "キョ    コ    よ.る",
    english: "foothold, based on, follow, therefore ",
  },
  {
    kanji: "距",
    kana: "キョ    へだ.たる",
    english: "long-distance ",
  },
  {
    kanji: "凶",
    kana: "キョウ",
    english: "villain, evil, bad luck, disaster ",
  },
  {
    kanji: "叫",
    kana: "キョウ    さけ.ぶ",
    english: "shout, exclaim, yell ",
  },
  {
    kanji: "恐",
    kana: "キョウ    おそ.れる    おそ.る    おそ.ろしい    こわ.い    こわ.がる",
    english: "fear, dread, awe ",
  },
  {
    kanji: "況",
    kana: "キョウ    まし.て    いわ.んや    おもむき",
    english: "condition, situation ",
  },
  {
    kanji: "狂",
    kana: "キョウ    くる.う    くる.おしい    くるお.しい",
    english: "lunatic, insane, crazy, confuse ",
  },
  {
    kanji: "狭",
    kana: "キョウ    コウ    せま.い    せば.める    せば.まる    さ",
    english: "cramped, narrow, contract, tight ",
  },
  {
    kanji: "響",
    kana: "キョウ    ひび.く",
    english: "echo, also N5116, sound, resound, ring, vibrate ",
  },
  {
    kanji: "驚",
    kana: "キョウ    おどろ.く    おどろ.かす",
    english: "wonder, be surprised, frightened, amazed ",
  },
  {
    kanji: "仰",
    kana: "ギョウ    コウ    あお.ぐ    おお.せ    お.っしゃる    おっしゃ.る",
    english: "face-up, look up, depend, seek, respect, rever, drink, take ",
  },
  {
    kanji: "駆",
    kana: "ク    か.ける    か.る",
    english: "drive, run, gallop, advance, inspire, impel ",
  },
  {
    kanji: "屈",
    kana: "クツ    かが.む    かが.める",
    english: "yield, bend, flinch, submit ",
  },
  {
    kanji: "掘",
    kana: "クツ    ほ.る",
    english: "dig, delve, excavate ",
  },
  {
    kanji: "繰",
    kana: "ソウ    く.る",
    english: "winding, reel, spin, turn (pages), look up, refer to ",
  },
  {
    kanji: "傾",
    kana: "ケイ    かたむ.く    かたむ.ける    かたぶ.く    かた.げる    かし.げる",
    english: "lean, incline, tilt, trend, wane, sink, ruin, bias ",
  },
  {
    kanji: "恵",
    kana: "ケイ    エ    めぐ.む    めぐ.み",
    english: "favor, blessing, grace, kindness ",
  },
  {
    kanji: "継",
    kana: "ケイ    つ.ぐ    まま-",
    english: "inherit, succeed, patch, graft (tree) ",
  },
  {
    kanji: "迎",
    kana: "ゲイ    むか.える",
    english: "welcome, meet, greet ",
  },
  {
    kanji: "撃",
    kana: "ゲキ    う.つ",
    english: "beat, attack, defeat, conquer ",
  },
  {
    kanji: "兼",
    kana: "ケン    か.ねる    -か.ねる",
    english: "concurrently, and ",
  },
  {
    kanji: "剣",
    kana: "ケン    つるぎ",
    english: "sabre, sword, blade, clock hand ",
  },
  {
    kanji: "圏",
    kana: "ケン    かこ.い",
    english: "sphere, circle, radius, range ",
  },
  {
    kanji: "堅",
    kana: "ケン    かた.い    -がた.い",
    english: "strict, hard, solid, tough, tight, reliable ",
  },
  {
    kanji: "肩",
    kana: "ケン    かた",
    english: "shoulder ",
  },
  {
    kanji: "軒",
    kana: "ケン    のき",
    english: "flats, counter for houses, eaves ",
  },
  {
    kanji: "遣",
    kana: "ケン    つか.う    -つか.い    -づか.い    つか.わす    や.る",
    english: "despatch, send, give, donate, do, undertake ",
  },
  {
    kanji: "玄",
    kana: "ゲン",
    english: "mysterious, occultness ",
  },
  {
    kanji: "枯",
    kana: "コ    か.れる    か.らす",
    english: "wither, die, dry up, be seasoned ",
  },
  {
    kanji: "誇",
    kana: "コ    ほこ.る",
    english: "boast, be proud, pride, triumphantly ",
  },
  {
    kanji: "鼓",
    kana: "コ    つづみ",
    english: "drum, beat, rouse, muster ",
  },
  {
    kanji: "互",
    kana: "ゴ    たが.い    かたみ.に",
    english: "mutually, reciprocally, together ",
  },
  {
    kanji: "御",
    kana: "ギョ    ゴ    おん-    お-    み-",
    english: "honorable, manipulate, govern ",
  },
  {
    kanji: "恒",
    kana: "コウ    つね    つねに",
    english: "constancy, always ",
  },
  {
    kanji: "抗",
    kana: "コウ",
    english: "confront, resist, defy, oppose ",
  },
  {
    kanji: "攻",
    kana: "コウ    せ.める",
    english: "aggression, attack ",
  },
  {
    kanji: "更",
    kana: "コウ    さら    さら.に    ふ.ける    ふ.かす",
    english: "grow late, night watch, sit up late, of course ",
  },
  {
    kanji: "稿",
    kana: "コウ    わら    したがき",
    english: "draft, copy, manuscript, straw ",
  },
  {
    kanji: "荒",
    kana: "コウ    あら.い    あら-    あ.れる    あ.らす    -あ.らし    すさ.む",
    english: "laid waste, rough, rude, wild ",
  },
  {
    kanji: "項",
    kana: "コウ    うなじ",
    english: "paragraph, nape of neck, clause, item, term (expression) ",
  },
  {
    kanji: "香",
    kana: "コウ    キョウ    か    かお.り    かお.る",
    english: "incense, smell, perfume ",
  },
  {
    kanji: "豪",
    kana: "ゴウ    えら.い",
    english: "overpowering, great, powerful, excelling, Australia ",
  },
  {
    kanji: "腰",
    kana: "ヨウ    こし",
    english: "loins, hips, waist, low wainscoting ",
  },
  {
    kanji: "込",
    kana: "-こ.む    こ.む    こ.み    -こ.み    こ.める",
    english: "crowded, mixture, in bulk, included, (kokuji) ",
  },
  {
    kanji: "婚",
    kana: "コン",
    english: "marriage ",
  },
  {
    kanji: "鎖",
    kana: "サ    くさり    とざ.す",
    english: "chain, irons, connection ",
  },
  {
    kanji: "彩",
    kana: "サイ    いろど.る",
    english: "coloring, paint, makeup ",
  },
  {
    kanji: "歳",
    kana: "サイ    セイ    とし    とせ    よわい",
    english: "year-end, age, occasion, opportunity ",
  },
  {
    kanji: "載",
    kana: "サイ    の.せる    の.る",
    english: "ride, board, get on, place, spread, 10**44 ",
  },
  {
    kanji: "剤",
    kana: "ザイ    スイ    セイ    かる    けず.る",
    english: "dose, medicine, drug ",
  },
  {
    kanji: "咲",
    kana: "ショウ    さ.く    -ざき",
    english: "blossom, bloom ",
  },
  {
    kanji: "惨",
    kana: "サン    ザン    みじ.め    いた.む    むご.い",
    english: "wretched, disaster, cruelty, harsh ",
  },
  {
    kanji: "伺",
    kana: "シ    うかが.う",
    english: "pay respects, visit, ask, inquire, question, implore ",
  },
  {
    kanji: "刺",
    kana: "シ    さ.す    さ.さる    さ.し    さし    とげ",
    english: "thorn, pierce, stab, prick, sting, calling card ",
  },
  {
    kanji: "旨",
    kana: "シ    むね    うま.い",
    english:
  "delicious, relish, show a liking for, purport, will, clever, expert ",
  },
  {
    kanji: "紫",
    kana: "シ    むらさき",
    english: "purple, violet ",
  },
  {
    kanji: "脂",
    kana: "シ    あぶら",
    english: "fat, grease, tallow, lard, rosin, gum, tar ",
  },
  {
    kanji: "雌",
    kana: "シ    め-    めす    めん",
    english: "feminine, female ",
  },
  {
    kanji: "執",
    kana: "シツ    シュウ    と.る",
    english: "tenacious, take hold, grasp, take to heart ",
  },
  {
    kanji: "芝",
    kana: "シ    しば",
    english: "turf, lawn ",
  },
  {
    kanji: "斜",
    kana: "シャ    なな.め    はす",
    english: "diagonal, slanting, oblique ",
  },
  {
    kanji: "煮",
    kana: "シャ    に.る    -に    に.える    に.やす",
    english: "boil, cook ",
  },
  {
    kanji: "釈",
    kana: "シャク    セキ    とく    す.てる    ゆる.す",
    english: "explanation ",
  },
  {
    kanji: "寂",
    kana: "ジャク    セキ    さび    さび.しい    さび.れる    さみ.しい",
    english: "loneliness, quietly, mellow, mature, death of a priest ",
  },
  {
    kanji: "朱",
    kana: "シュ    あけ",
    english: "vermilion, cinnabar, scarlet, red, bloody ",
  },
  {
    kanji: "狩",
    kana: "シュ    か.る    か.り    -が.り",
    english: "hunt, raid, gather ",
  },
  {
    kanji: "趣",
    kana: "シュ    おもむき    おもむ.く",
    english: "gist, proceed to, tend, become ",
  },
  {
    kanji: "需",
    kana: "ジュ",
    english: "demand, request, need ",
  },
  {
    kanji: "秀",
    kana: "シュウ    ひい.でる",
    english: "excel, excellence, beauty, surpass ",
  },
  {
    kanji: "舟",
    kana: "シュウ    ふね    ふな-    -ぶね",
    english: "boat, ship ",
  },
  {
    kanji: "襲",
    kana: "シュウ    おそ.う    かさ.ね",
    english: "attack, advance on, succeed to, pile, heap ",
  },
  {
    kanji: "柔",
    kana: "ジュウ    ニュウ    やわ.らか    やわ.らかい    やわ    やわ.ら",
    english: "tender, weakness, gentleness, softness ",
  },
  {
    kanji: "獣",
    kana: "ジュウ    けもの    けだもの",
    english: "animal, beast ",
  },
  {
    kanji: "瞬",
    kana: "シュン    またた.く",
    english: "wink, blink, twinkle ",
  },
  {
    kanji: "旬",
    kana: "ジュン    シュン",
    english: "decameron, 10day period, season (for specific products ",
  },
  {
    kanji: "盾",
    kana: "ジュン    たて",
    english: "shield, escutcheon, pretext ",
  },
  {
    kanji: "巡",
    kana: "ジュン    めぐ.る    めぐ.り",
    english: "patrol, go around, circumference ",
  },
  {
    kanji: "召",
    kana: "ショウ    め.す",
    english:
  "seduce, call, send for, wear, put on, ride in, buy, eat, drink, catch (cold) ",
  },
  {
    kanji: "床",
    kana: "ショウ    とこ    ゆか",
    english: "bed, floor, padding, tatami ",
  },
  {
    kanji: "沼",
    kana: "ショウ    ぬま",
    english: "marsh, lake, bog, swamp, pond ",
  },
  {
    kanji: "称",
    kana: "ショウ    たた.える    とな.える    あ.げる    かな.う    はか.り    はか.る    ほめ.る",
    english: "appellation, praise, admire, name, title, fame ",
  },
  {
    kanji: "紹",
    kana: "ショウ",
    english: "introduce, inherit, help ",
  },
  {
    kanji: "詳",
    kana: "ショウ    くわ.しい    つまび.らか",
    english: "detailed, full, minute, accurate, well-informed ",
  },
  {
    kanji: "丈",
    kana: "ジョウ    たけ    だけ",
    english:
  "length, 10feet, measure, Mr., Ms., height, stature, all (one has), only, that's all, merely ",
  },
  {
    kanji: "畳",
    kana: "ジョウ    チョウ    たた.む    たたみ    かさ.なる",
    english:
  "tatami mat, counter for tatami mats, fold, shut up, do away with ",
  },
  {
    kanji: "飾",
    kana: "ショク    かざ.る    かざ.り",
    english: "decorate, ornament, adorn, embellish ",
  },
  {
    kanji: "殖",
    kana: "ショク    ふ.える    ふ.やす",
    english: "augment, increase, multiply, raise ",
  },
  {
    kanji: "触",
    kana: "ショク    ふ.れる    さわ.る    さわ",
    english: "contact, touch, feel, hit, proclaim, announce, conflict ",
  },
  {
    kanji: "侵",
    kana: "シン    おか.す",
    english: "encroach, invade, raid, trespass, violate ",
  },
  {
    kanji: "寝",
    kana: "シン    ね.る    ね.かす    い.ぬ    みたまや    や.める",
    english: "lie down, sleep, rest, bed, remain unsold ",
  },
  {
    kanji: "慎",
    kana: "シン    つつし.む    つつし    つつし.み",
    english: "humility, be careful, discrete, prudent ",
  },
  {
    kanji: "振",
    kana: "シン    ふ.る    ぶ.る    ふ.り    -ぶ.り    ふ.るう",
    english: "shake, wave, wag, swing ",
  },
  {
    kanji: "浸",
    kana: "シン    ひた.す    ひた.る",
    english: "immersed, soak, dip, steep, moisten, wet, dunk ",
  },
  {
    kanji: "薪",
    kana: "シン    たきぎ    まき",
    english: "fuel, firewood, kindling ",
  },
  {
    kanji: "震",
    kana: "シン    ふる.う    ふる.える",
    english: "quake, shake, tremble, quiver, shiver ",
  },
  {
    kanji: "尋",
    kana: "ジン    たず.ねる    ひろ",
    english: "inquire, fathom, look for ",
  },
  {
    kanji: "尽",
    kana: "ジン    サン    つ.くす    -つ.くす    -づ.くし    -つ.く    -づ.く    -ず.く    つ.きる    つ.かす    さかづき    ことごと.く    つか    つき",
    english: "exhaust, use up, run out of, befriend, serve ",
  },
  {
    kanji: "陣",
    kana: "ジン",
    english: "camp, battle array, ranks, position ",
  },
  {
    kanji: "吹",
    kana: "スイ    ふ.く",
    english: "blow, breathe, puff, emit, smoke ",
  },
  {
    kanji: "澄",
    kana: "チョウ    す.む    す.ます    -す.ます",
    english: "lucidity, be clear, clear, clarify, settle, strain, look grave ",
  },
  {
    kanji: "是",
    kana: "ゼ    シ    これ",
    english: "just so, this, right, justice ",
  },
  {
    kanji: "姓",
    kana: "セイ    ショウ",
    english: "surname ",
  },
  {
    kanji: "征",
    kana: "セイ",
    english: "subjugate, attack the rebellious, collect taxes ",
  },
  {
    kanji: "跡",
    kana: "セキ    あと",
    english: "tracks, mark, print, impression ",
  },
  {
    kanji: "占",
    kana: "セン    し.める    うらな.う",
    english:
  "fortune-telling, divining, forecasting, occupy, hold, have, get, take ",
  },
  {
    kanji: "扇",
    kana: "セン    おうぎ",
    english: "fan, folding fan ",
  },
  {
    kanji: "鮮",
    kana: "セン    あざ.やか",
    english: "fresh, vivid, clear, brilliant, Korea ",
  },
  {
    kanji: "訴",
    kana: "ソ    うった.える",
    english: "accusation, sue, complain of pain, appeal to ",
  },
  {
    kanji: "僧",
    kana: "ソウ",
    english: "Buddhist priest, monk ",
  },
  {
    kanji: "燥",
    kana: "ソウ    はしゃ.ぐ",
    english: "parch, dry up ",
  },
  {
    kanji: "騒",
    kana: "ソウ    さわ.ぐ    うれい    さわ.がしい",
    english: "boisterous, make noise, clamor, disturb, excite ",
  },
  {
    kanji: "贈",
    kana: "ゾウ    ソウ    おく.る",
    english:
  "presents, send, give to, award to, confer on, presenting something ",
  },
  {
    kanji: "即",
    kana: "ソク    つ.く    つ.ける    すなわ.ち",
    english: "instant, namely, as is, conform, agree, adapt ",
  },
  {
    kanji: "俗",
    kana: "ゾク",
    english: "vulgar, customs, manners, worldliness, mundane things ",
  },
  {
    kanji: "耐",
    kana: "タイ    た.える",
    english: "-proof, enduring ",
  },
  {
    kanji: "替",
    kana: "タイ    か.える    か.え-    か.わる",
    english: "exchange, spare, substitute, per- ",
  },
  {
    kanji: "拓",
    kana: "タク    ひら.く",
    english: "clear (the land), open, break up (land) ",
  },
  {
    kanji: "沢",
    kana: "タク    さわ    うるお.い    うるお.す    つや",
    english: "swamp ",
  },
  {
    kanji: "濁",
    kana: "ダク    ジョク    にご.る    にご.す",
    english: "voiced, uncleanness, wrong, nigori, impurity ",
  },
  {
    kanji: "脱",
    kana: "ダツ    ぬ.ぐ    ぬ.げる",
    english:
  "undress, removing, escape from, get rid of, be left out, take off ",
  },
  {
    kanji: "丹",
    kana: "タン    に",
    english: "rust-colored, red, read lead, pills ",
  },
  {
    kanji: "嘆",
    kana: "タン    なげ.く    なげ.かわしい",
    english: "sigh, lament, moan, grieve ",
  },
  {
    kanji: "淡",
    kana: "タン    あわ.い",
    english: "thin, faint, pale, fleeting ",
  },
  {
    kanji: "端",
    kana: "タン    はし    は    はた    -ばた    はな",
    english: "edge, origin, end, point, border, verge, cape ",
  },
  {
    kanji: "弾",
    kana: "ダン    タン    ひ.く    -ひ.き    はず.む    たま    はじ.く    はじ.ける    ただ.す    はじ.きゆみ",
    english: "bullet, twang, flip, snap ",
  },
  {
    kanji: "恥",
    kana: "チ    は.じる    はじ    は.じらう    は.ずかしい",
    english: "shame, dishonor ",
  },
  {
    kanji: "致",
    kana: "チ    いた.す",
    english: "doth, do, send, forward, cause, exert, incur, engage ",
  },
  {
    kanji: "遅",
    kana: "チ    おく.れる    おく.らす    おそ.い",
    english: "slow, late, back, later ",
  },
  {
    kanji: "蓄",
    kana: "チク    たくわ.える",
    english: "amass, keeping a concubine, phonograph ",
  },
  {
    kanji: "徴",
    kana: "チョウ    チ    しるし",
    english:
  "indications, sign, omen, symptom, collect, seek, refer to, question ",
  },
  {
    kanji: "跳",
    kana: "チョウ    は.ねる    と.ぶ    -と.び",
    english: "hop, leap up, spring, jerk, prance, buck, splash, sputter, snap ",
  },
  {
    kanji: "沈",
    kana: "チン    ジン    しず.む    しず.める",
    english: "sink, be submerged, subside, be depressed, aloes ",
  },
  {
    kanji: "珍",
    kana: "チン    めずら.しい    たから",
    english: "rare, curious, strange ",
  },
  {
    kanji: "堤",
    kana: "テイ    つつみ",
    english: "dike, bank, embankment ",
  },
  {
    kanji: "抵",
    kana: "テイ",
    english: "resist, reach, touch ",
  },
  {
    kanji: "摘",
    kana: "テキ    つ.む",
    english: "pinch, pick, pluck, trim, clip, summarize ",
  },
  {
    kanji: "滴",
    kana: "テキ    しずく    したた.る",
    english: "drip, drop ",
  },
  {
    kanji: "添",
    kana: "テン    そ.える    そ.う    も.える    も.う",
    english:
  "annexed, accompany, marry, suit, meet, satisfy, attach, append, garnish, imitate ",
  },
  {
    kanji: "殿",
    kana: "デン    テン    との    -どの",
    english: "Mr., hall, mansion, palace, temple, lord ",
  },
  {
    kanji: "吐",
    kana: "ト    は.く    つ.く",
    english: "spit, vomit, belch, confess, tell (lies) ",
  },
  {
    kanji: "渡",
    kana: "ト    わた.る    -わた.る    わた.す",
    english: "transit, ford, ferry, cross, import, deliver, diameter, migrate ",
  },
  {
    kanji: "途",
    kana: "ト",
    english: "route, way, road ",
  },
  {
    kanji: "奴",
    kana: "ド    やつ    やっこ",
    english: "guy, slave, manservant, fellow ",
  },
  {
    kanji: "怒",
    kana: "ド    ヌ    いか.る    おこ.る",
    english: "angry, be offended ",
  },
  {
    kanji: "倒",
    kana: "トウ    たお.れる    -だお.れ    たお.す",
    english: "overthrow, fall, collapse, drop, break down ",
  },
  {
    kanji: "唐",
    kana: "トウ    から",
    english: "T'ang, China ",
  },
  {
    kanji: "塔",
    kana: "トウ",
    english: "pagoda, tower, steeple ",
  },
  {
    kanji: "桃",
    kana: "トウ    もも",
    english: "peach tree ",
  },
  {
    kanji: "盗",
    kana: "トウ    ぬす.む    ぬす.み",
    english: "steal, rob, pilfer ",
  },
  {
    kanji: "到",
    kana: "トウ    いた.る",
    english: "arrival, proceed, reach, attain, result in ",
  },
  {
    kanji: "踏",
    kana: "トウ    ふ.む    ふ.まえる",
    english: "step, trample, carry through, appraise, evade payment ",
  },
  {
    kanji: "逃",
    kana: "トウ    に.げる    に.がす    のが.す    のが.れる",
    english: "escape, flee, shirk, evade, set free ",
  },
  {
    kanji: "透",
    kana: "トウ    す.く    す.かす    す.ける    とう.る    とう.す",
    english: "transparent, permeate, filter, penetrate ",
  },
  {
    kanji: "闘",
    kana: "トウ    たたか.う    あらそ.う",
    english: "fight, war ",
  },
  {
    kanji: "胴",
    kana: "ドウ",
    english: "trunk, torso, hull (ship), hub of wheel ",
  },
  {
    kanji: "峠",
    kana: "とうげ",
    english: "mountain peak, mountain pass, climax, crest, (kokuji) ",
  },
  {
    kanji: "突",
    kana: "トツ    カ    つ.く",
    english: "stab, protruding, thrusting, thrust, pierce, prick ",
  },
  {
    kanji: "曇",
    kana: "ドン    くも.る",
    english: "cloudy weather, cloud up ",
  },
  {
    kanji: "鈍",
    kana: "ドン    にぶ.い    にぶ.る    にぶ-    なま.る    なまく.ら",
    english: "dull, slow, foolish, blunt ",
  },
  {
    kanji: "弐",
    kana: "ニ    ジ    ふた.つ    そえ",
    english: "II, two, second ",
  },
  {
    kanji: "悩",
    kana: "ノウ    なや.む    なや.ます    なや.ましい    なやみ",
    english: "trouble, worry, in pain, distress, illness ",
  },
  {
    kanji: "濃",
    kana: "ノウ    こ.い",
    english: "concentrated, thick, dark, undiluted ",
  },
  {
    kanji: "杯",
    kana: "ハイ    さかずき",
    english: "counter for cupfuls, wine glass, glass, toast ",
  },
  {
    kanji: "輩",
    kana: "ハイ    -ばら    やから    やかい    ともがら",
    english: "comrade, fellow, people, companions ",
  },
  {
    kanji: "拍",
    kana: "ハク    ヒョウ",
    english: "clap, beat (music) ",
  },
  {
    kanji: "泊",
    kana: "ハク    と.まる    と.める",
    english: "overnight, put up at, ride at anchor, 3-day stay ",
  },
  {
    kanji: "薄",
    kana: "ハク    うす.い    うす-    -うす    うす.める    うす.まる    うす.らぐ    うす.ら-    うす.れる    すすき",
    english: "dilute, thin, weak (tea) ",
  },
  {
    kanji: "迫",
    kana: "ハク    せま.る",
    english: "urge, force, imminent, spur on ",
  },
  {
    kanji: "爆",
    kana: "バク    は.ぜる",
    english: "bomb, burst open, pop, split ",
  },
  {
    kanji: "髪",
    kana: "ハツ    かみ",
    english: "hair of the head ",
  },
  {
    kanji: "罰",
    kana: "バツ    バチ    ハツ    ばっ.する",
    english: "penalty, punishment ",
  },
  {
    kanji: "抜",
    kana: "バツ    ハツ    ハイ    ぬ.く    -ぬ.く    ぬ.き    ぬ.ける    ぬ.かす    ぬ.かる",
    english: "slip out, extract, pull out, pilfer, quote, remove, omit ",
  },
  {
    kanji: "搬",
    kana: "ハン",
    english: "conveyor, carry, transport ",
  },
  {
    kanji: "繁",
    kana: "ハン    しげ.る    しげ.く",
    english: "luxuriant, thick, overgrown, frequency, complexity, trouble ",
  },
  {
    kanji: "般",
    kana: "ハン",
    english: "carrier, carry, all ",
  },
  {
    kanji: "販",
    kana: "ハン",
    english: "marketing, sell, trade ",
  },
  {
    kanji: "範",
    kana: "ハン",
    english: "pattern, example, model ",
  },
  {
    kanji: "盤",
    kana: "バン",
    english: "tray, shallow bowl, platter, tub, board, phonograph record ",
  },
  {
    kanji: "彼",
    kana: "ヒ    かれ    かの    か.の",
    english: "he, that, the ",
  },
  {
    kanji: "疲",
    kana: "ヒ    つか.れる    -づか.れ    つか.らす",
    english: "exhausted, tire, weary ",
  },
  {
    kanji: "被",
    kana: "ヒ    こうむ.る    おお.う    かぶ.る    かぶ.せる",
    english:
  "incur, cover, veil, brood over, shelter, wear, put on, be exposed (film), receiving ",
  },
  {
    kanji: "避",
    kana: "ヒ    さ.ける    よ.ける",
    english: "evade, avoid, avert, ward off, shirk, shun ",
  },
  {
    kanji: "尾",
    kana: "ビ    お",
    english: "tail, end, counter for fish, lower slope of mountain ",
  },
  {
    kanji: "微",
    kana: "ビ    かす.か",
    english: "delicate, minuteness, insignificance ",
  },
  {
    kanji: "匹",
    kana: "ヒツ    ひき",
    english: "equal, head, counter for small animals, roll of cloth ",
  },
  {
    kanji: "描",
    kana: "ビョウ    えが.く    か.く",
    english: "sketch, compose, write, draw, paint ",
  },
  {
    kanji: "浜",
    kana: "ヒン    はま",
    english: "seacoast, beach, seashore ",
  },
  {
    kanji: "敏",
    kana: "ビン    さとい",
    english: "cleverness, agile, alert ",
  },
  {
    kanji: "怖",
    kana: "フ    ホ    こわ.い    こわ.がる    お.じる    おそ.れる",
    english: "dreadful, be frightened, fearful ",
  },
  {
    kanji: "敷",
    kana: "フ    し.く    -し.き",
    english: "spread, pave, sit, promulgate ",
  },
  {
    kanji: "普",
    kana: "フ    あまね.く    あまねし",
    english: "universal, wide(ly), generally, Prussia ",
  },
  {
    kanji: "浮",
    kana: "フ    う.く    う.かれる    う.かぶ    む    う.かべる",
    english: "floating, float, rise to surface ",
  },
  {
    kanji: "腐",
    kana: "フ    くさ.る    -くさ.る    くさ.れる    くさ.れ    くさ.らす    くさ.す",
    english: "rot, decay, sour ",
  },
  {
    kanji: "膚",
    kana: "フ    はだ",
    english: "skin, body, grain, texture, disposition ",
  },
  {
    kanji: "賦",
    kana: "フ    ブ",
    english: "levy, ode, prose, poem, tribute, installment ",
  },
  {
    kanji: "舞",
    kana: "ブ    ま.う    -ま.う    まい",
    english: "dance, flit, circle, wheel ",
  },
  {
    kanji: "幅",
    kana: "フク    はば",
    english: "hanging scroll, width ",
  },
  {
    kanji: "払",
    kana: "フツ    ヒツ    ホツ    はら.う    -はら.い    -ばら.い",
    english: "pay, clear out, prune, banish, dispose of ",
  },
  {
    kanji: "噴",
    kana: "フン    ふ.く",
    english: "erupt, spout, emit, flush out ",
  },
  {
    kanji: "柄",
    kana: "ヘイ    がら    え    つか",
    english:
  "design, pattern, build, nature, handle, crank, grip, knob, shaft ",
  },
  {
    kanji: "壁",
    kana: "ヘキ    かべ",
    english: "wall, lining (stomach), fence ",
  },
  {
    kanji: "舗",
    kana: "ホ",
    english: "shop, store ",
  },
  {
    kanji: "捕",
    kana: "ホ    と.らえる    と.らわれる    と.る    とら.える    とら.われる    つか.まえる    つか.まる",
    english: "catch, capture ",
  },
  {
    kanji: "峰",
    kana: "ホウ    みね    ね",
    english: "summit, peak ",
  },
  {
    kanji: "抱",
    kana: "ホウ    だ.く    いだ.く    かか.える",
    english: "embrace, hug, hold in arms ",
  },
  {
    kanji: "砲",
    kana: "ホウ",
    english: "cannon, gun ",
  },
  {
    kanji: "傍",
    kana: "ボウ    かたわ.ら    わき    おか-    はた    そば",
    english: "bystander, side, besides, while, nearby, 3rd person ",
  },
  {
    kanji: "坊",
    kana: "ボウ    ボッ",
    english: "boy, priest's residence, priest ",
  },
  {
    kanji: "帽",
    kana: "ボウ    モウ    ずきん    おお.う",
    english: "cap, headgear ",
  },
  {
    kanji: "忙",
    kana: "ボウ    モウ    いそが.しい    せわ.しい    おそ.れる    うれえるさま",
    english: "busy, occupied, restless ",
  },
  {
    kanji: "冒",
    kana: "ボウ    おか.す",
    english: "risk, face, defy, dare, damage, assume (a name) ",
  },
  {
    kanji: "肪",
    kana: "ボウ",
    english: "obese, fat ",
  },
  {
    kanji: "凡",
    kana: "ボン    ハン    およ.そ    おうよ.そ    すべ.て",
    english: "mediocre ",
  },
  {
    kanji: "盆",
    kana: "ボン",
    english: "basin, lantern festival, tray ",
  },
  {
    kanji: "慢",
    kana: "マン",
    english: "ridicule, laziness ",
  },
  {
    kanji: "漫",
    kana: "マン    みがりに",
    english: "cartoon, involuntarily, in spite of oneself, corrupt ",
  },
  {
    kanji: "妙",
    kana: "ミョウ    ビョウ    たえ",
    english:
  "exquisite, strange, queer, mystery, miracle, excellent, delicate, charming ",
  },
  {
    kanji: "眠",
    kana: "ミン    ねむ.る    ねむ.い",
    english: "sleep, die, sleepy ",
  },
  {
    kanji: "矛",
    kana: "ム    ボウ    ほこ",
    english: "halberd, arms, festival float ",
  },
  {
    kanji: "霧",
    kana: "ム    ボウ    ブ    きり",
    english: "fog, mist ",
  },
  {
    kanji: "娘",
    kana: "ジョウ    むすめ    こ",
    english: "daughter, girl ",
  },
  {
    kanji: "茂",
    kana: "モ    しげ.る",
    english: "overgrown, grow thick, be luxuriant ",
  },
  {
    kanji: "猛",
    kana: "モウ",
    english: "fierce, rave, rush, become furious, wildness, strength ",
  },
  {
    kanji: "網",
    kana: "モウ    あみ",
    english: "netting, network ",
  },
  {
    kanji: "黙",
    kana: "モク    ボク    だま.る    もだ.す",
    english: "silence, become silent, stop speaking, leave as is ",
  },
  {
    kanji: "紋",
    kana: "モン",
    english: "family crest, figures ",
  },
  {
    kanji: "躍",
    kana: "ヤク    おど.る",
    english: "leap, dance, skip ",
  },
  {
    kanji: "雄",
    kana: "ユウ    お-    おす    おん",
    english: "masculine, male, hero, leader, superiority, excellence ",
  },
  {
    kanji: "与",
    kana: "ヨ    あた.える    あずか.る    くみ.する    ともに",
    english:
  "bestow, participate in, give, award, impart, provide, cause, gift, godsend ",
  },
  {
    kanji: "誉",
    kana: "ヨ    ほま.れ    ほ.める",
    english: "reputation, praise, honor, glory ",
  },
  {
    kanji: "溶",
    kana: "ヨウ    と.ける    と.かす    と.く",
    english: "melt, dissolve, thaw ",
  },
  {
    kanji: "謡",
    kana: "ヨウ    うた.い    うた.う",
    english: "noh chanting ",
  },
  {
    kanji: "踊",
    kana: "ヨウ    おど.る",
    english: "jump, dance, leap, skip ",
  },
  {
    kanji: "翼",
    kana: "ヨク    つばさ",
    english: "wing, plane, flank ",
  },
  {
    kanji: "頼",
    kana: "ライ    たの.む    たの.もしい    たよ.る",
    english: "trust, request ",
  },
  {
    kanji: "雷",
    kana: "ライ    かみなり",
    english: "thunder, lightening bolt ",
  },
  {
    kanji: "絡",
    kana: "ラク    から.む    から.まる",
    english: "entwine, coil around, get caught in ",
  },
  {
    kanji: "欄",
    kana: "ラン    てすり",
    english: "column, handrail, blank, space ",
  },
  {
    kanji: "離",
    kana: "リ    はな.れる    はな.す",
    english: "detach, separation, disjoin, digress ",
  },
  {
    kanji: "粒",
    kana: "リュウ    つぶ",
    english: "grains, drop, counter for tiny particles ",
  },
  {
    kanji: "慮",
    kana: "リョ    おもんぱく.る    おもんぱか.る",
    english: "prudence, thought, concern, consider, deliberate, fear ",
  },
  {
    kanji: "療",
    kana: "リョウ",
    english: "heal, cure ",
  },
  {
    kanji: "隣",
    kana: "リン    とな.る    となり",
    english: "neighboring ",
  },
  {
    kanji: "涙",
    kana: "ルイ    レイ    なみだ",
    english: "tears, sympathy ",
  },
  {
    kanji: "隷",
    kana: "レイ    したが.う    しもべ",
    english: "slave, servant, prisoner, criminal, follower ",
  },
  {
    kanji: "麗",
    kana: "レイ    うるわ.しい    うら.らか",
    english: "lovely, companion ",
  },
  {
    kanji: "齢",
    kana: "レイ    よわ.い    とし",
    english: "age ",
  },
  {
    kanji: "暦",
    kana: "レキ    こよみ",
    english: "calendar, almanac ",
  },
  {
    kanji: "劣",
    kana: "レツ    おと.る",
    english: "inferiority, be inferior to, be worse ",
  },
  {
    kanji: "烈",
    kana: "レツ    はげ.しい",
    english: "ardent, violent, vehement, furious, severe, extreme ",
  },
  {
    kanji: "恋",
    kana: "レン    こ.う    こい    こい.しい",
    english: "romance, in love, yearn for, miss, darling ",
  },
  {
    kanji: "露",
    kana: "ロ    ロウ    つゆ",
    english: "dew, tears, expose, Russia ",
  },
  {
    kanji: "郎",
    kana: "ロウ    リョウ    おとこ",
    english: "son, counter for sons ",
  },
  {
    kanji: "惑",
    kana: "ワク    まど.う",
    english: "beguile, delusion, perplexity ",
  },
  {
    kanji: "腕",
    kana: "ワン    うで",
    english: "arm, ability, talent ",
  },
  {
    kanji: "哀",
    kana: "アイ    あわ.れ    あわ.れむ    かな.しい",
    english: "pathetic, grief, sorrow, pathos, pity, sympathize ",
  },
  {
    kanji: "慰",
    kana: "イ    なぐさ.める    なぐさ.む",
    english:
  "consolation, amusement, seduce, cheer, make sport of, comfort, console ",
  },
  {
    kanji: "詠",
    kana: "エイ    よ.む    うた.う",
    english: "recitation, poem, song, composing ",
  },
  {
    kanji: "悦",
    kana: "エツ    よろこ.ぶ    よろこ.ばす",
    english: "ecstasy, joy, rapture ",
  },
  {
    kanji: "閲",
    kana: "エツ    けみ.する",
    english: "review, inspection, revision ",
  },
  {
    kanji: "宴",
    kana: "エン    うたげ",
    english: "banquet, feast, party ",
  },
  {
    kanji: "炎",
    kana: "エン    ほのお",
    english: "inflammation, flame, blaze ",
  },
  {
    kanji: "欧",
    kana: "オウ    うた.う    は.く",
    english: "Europe ",
  },
  {
    kanji: "殴",
    kana: "オウ    なぐ.る",
    english: "assault, hit, beat, thrash ",
  },
  {
    kanji: "乙",
    kana: "オツ    イツ    おと-    きのと",
    english: "the latter, duplicate, strange, witty ",
  },
  {
    kanji: "卸",
    kana: "シャ    おろ.す    おろし    おろ.し",
    english: "wholesale ",
  },
  {
    kanji: "穏",
    kana: "オン    おだ.やか",
    english: "calm, quiet, moderation ",
  },
  {
    kanji: "佳",
    kana: "カ",
    english: "excellent, beautiful, good, pleasing, skilled ",
  },
  {
    kanji: "嫁",
    kana: "カ    よめ    とつ.ぐ",
    english: "marry into, bride ",
  },
  {
    kanji: "架",
    kana: "カ    か.ける    か.かる",
    english: "erect, frame, mount, support, shelf, construct ",
  },
  {
    kanji: "華",
    kana: "カ    ケ    はな",
    english:
  "splendor, flower, petal, shine, luster, ostentatious, showy, gay, gorgeous ",
  },
  {
    kanji: "餓",
    kana: "ガ    う.える",
    english: "starve, hungry, thirst ",
  },
  {
    kanji: "塊",
    kana: "カイ    ケ    かたまり    つちくれ",
    english: "clod, lump, chink, clot, mass ",
  },
  {
    kanji: "怪",
    kana: "カイ    ケ    あや.しい    あや.しむ",
    english: "suspicious, mystery, apparition ",
  },
  {
    kanji: "悔",
    kana: "カイ    く.いる    く.やむ    くや.しい",
    english: "repent, regret ",
  },
  {
    kanji: "慨",
    kana: "ガイ",
    english: "rue, be sad, sigh, lament ",
  },
  {
    kanji: "概",
    kana: "ガイ    おうむ.ね",
    english: "outline, condition, approximation, generally ",
  },
  {
    kanji: "該",
    kana: "ガイ",
    english: "above-stated, the said, that specific ",
  },
  {
    kanji: "穫",
    kana: "カク",
    english: "harvest, reap ",
  },
  {
    kanji: "郭",
    kana: "カク    くるわ",
    english: "enclosure, quarters, fortification, red-light district ",
  },
  {
    kanji: "隔",
    kana: "カク    へだ.てる    へだ.たる",
    english: "isolate, alternate, distance, separate, gulf ",
  },
  {
    kanji: "岳",
    kana: "ガク    たけ",
    english: "point, peak, mountain ",
  },
  {
    kanji: "掛",
    kana: "カイ    ケイ    か.ける    -か.ける    か.け    -か.け    -が.け    か.かる    -か.かる    -が.かる    か.かり    -が.かり    かかり    -がかり",
    english: "hang, suspend, depend, arrive at, tax, pour ",
  },
  {
    kanji: "滑",
    kana: "カツ    コツ    すべ.る    なめ.らか",
    english: "slippery, slide, slip, flunk ",
  },
  {
    kanji: "冠",
    kana: "カン    かんむり",
    english: "crown, best, peerless ",
  },
  {
    kanji: "勘",
    kana: "カン",
    english: "intuition, perception ",
  },
  {
    kanji: "喚",
    kana: "カン    わめ.く",
    english: "yell, cry, scream ",
  },
  {
    kanji: "換",
    kana: "カン    か.える    -か.える    か.わる",
    english: "interchange, period, charge, change? ",
  },
  {
    kanji: "敢",
    kana: "カン    あ.えて    あ.えない    あ.えず",
    english: "daring, sad, tragic, pitiful, frail, feeble ",
  },
  {
    kanji: "緩",
    kana: "カン    ゆる.い    ゆる.やか    ゆる.む    ゆる.める",
    english: "slacken, loosen, relax, lessen, be moderate, ease ",
  },
  {
    kanji: "肝",
    kana: "カン    きも",
    english: "liver, pluck, nerve, chutzpah ",
  },
  {
    kanji: "貫",
    kana: "カン    つらぬ.く    ぬ.く    ぬき",
    english: "pierce, 8 1/3lbs, penetrate, brace ",
  },
  {
    kanji: "企",
    kana: "キ    くわだ.てる",
    english: "undertake, scheme, design, attempt, plan ",
  },
  {
    kanji: "岐",
    kana: "キ    ギ",
    english: "branch off, fork in road, scene, arena, theater ",
  },
  {
    kanji: "忌",
    kana: "キ    い.む    い.み    い.まわしい",
    english: "mourning, abhor, detestable, death anniversary ",
  },
  {
    kanji: "既",
    kana: "キ    すで.に",
    english: "previously, already, long ago ",
  },
  {
    kanji: "棋",
    kana: "キ    ご",
    english: "chess piece, Japanese chess, shogi ",
  },
  {
    kanji: "棄",
    kana: "キ    す.てる",
    english: "abandon, throw away, discard, resign, reject, sacrifice ",
  },
  {
    kanji: "軌",
    kana: "キ",
    english: "rut, wheel, track, model, way of doing ",
  },
  {
    kanji: "騎",
    kana: "キ",
    english: "equestrian, riding on horses, counter for equestrians ",
  },
  {
    kanji: "欺",
    kana: "ギ    あざむ.く",
    english: "deceit, cheat, delude ",
  },
  {
    kanji: "犠",
    kana: "ギ    キ    いけにえ",
    english: "sacrifice ",
  },
  {
    kanji: "菊",
    kana: "キク",
    english: "chrysanthemum ",
  },
  {
    kanji: "吉",
    kana: "キチ    キツ    よし",
    english: "good luck, joy, congratulations ",
  },
  {
    kanji: "喫",
    kana: "キツ",
    english: "consume, eat, drink, smoke, receive (a blow) ",
  },
  {
    kanji: "虐",
    kana: "ギャク    しいた.げる",
    english: "tyrannize, oppress ",
  },
  {
    kanji: "虚",
    kana: "キョ    コ    むな.しい    うつ.ろ",
    english: "void, emptiness, unpreparedness, crack, fissure, untruth ",
  },
  {
    kanji: "峡",
    kana: "キョウ    コウ    はざま",
    english: "gorge, ravine ",
  },
  {
    kanji: "脅",
    kana: "キョウ    おびや.かす    おど.す    おど.かす",
    english: "threaten, coerce ",
  },
  {
    kanji: "凝",
    kana: "ギョウ    こ.る    こ.らす    こご.らす    こご.らせる    こご.る",
    english: "congeal, freeze, stiff, be absorbed in ",
  },
  {
    kanji: "斤",
    kana: "キン    おの",
    english: "axe, 1.32 lb, catty, counter for loaves of bread ",
  },
  {
    kanji: "緊",
    kana: "キン",
    english: "tense, solid, hard, reliable, tight ",
  },
  {
    kanji: "愚",
    kana: "グ    おろ.か",
    english: "foolish, folly, absurdity, stupid ",
  },
  {
    kanji: "偶",
    kana: "グウ    たま",
    english: "accidentally, even number, couple, man & wife, same kind ",
  },
  {
    kanji: "遇",
    kana: "グウ    あ.う",
    english: "interview, treat, entertain, receive, deal with ",
  },
  {
    kanji: "桑",
    kana: "ソウ    くわ",
    english: "mulberry ",
  },
  {
    kanji: "刑",
    kana: "ケイ",
    english: "punish, penalty, sentence, punishment ",
  },
  {
    kanji: "啓",
    kana: "ケイ    ひら.く    さと.す",
    english: "disclose, open, say ",
  },
  {
    kanji: "契",
    kana: "ケイ    ちぎ.る",
    english: "pledge, promise, vow ",
  },
  {
    kanji: "憩",
    kana: "ケイ    いこ.い    いこ.う",
    english: "recess, rest, relax, repose ",
  },
  {
    kanji: "掲",
    kana: "ケイ    かか.げる",
    english:
  "put up (a notice), put up, hoist, display, hang out, publish, describe ",
  },
  {
    kanji: "携",
    kana: "ケイ    たずさ.える    たずさ.わる",
    english: "portable, carry (in hand), armed with, bring along ",
  },
  {
    kanji: "鶏",
    kana: "ケイ    にわとり    とり",
    english: "chicken ",
  },
  {
    kanji: "鯨",
    kana: "ゲイ    くじら",
    english: "whale ",
  },
  {
    kanji: "倹",
    kana: "ケン    つま.しい    つづまやか",
    english: "frugal, economy, thrifty ",
  },
  {
    kanji: "賢",
    kana: "ケン    かしこ.い",
    english: "intelligent, wise, wisdom, cleverness ",
  },
  {
    kanji: "幻",
    kana: "ゲン    まぼろし",
    english: "phantasm, vision, dream, illusion, apparition ",
  },
  {
    kanji: "孤",
    kana: "コ",
    english: "orphan, alone ",
  },
  {
    kanji: "弧",
    kana: "コ",
    english: "arc, arch, bow ",
  },
  {
    kanji: "雇",
    kana: "コ    やと.う",
    english: "employ, hire ",
  },
  {
    kanji: "顧",
    kana: "コ    かえり.みる",
    english: "look back, review, examine oneself, turn around ",
  },
  {
    kanji: "娯",
    kana: "ゴ",
    english: "recreation, pleasure ",
  },
  {
    kanji: "悟",
    kana: "ゴ    さと.る",
    english: "enlightenment, perceive, discern, realize, understand ",
  },
  {
    kanji: "坑",
    kana: "コウ",
    english: "pit, hole ",
  },
  {
    kanji: "孔",
    kana: "コウ    あな",
    english: "cavity, hole, slit, very, great, exceedingly ",
  },
  {
    kanji: "巧",
    kana: "コウ    たく.み    たく.む    うま.い",
    english: "adroit, skilled, ingenuity ",
  },
  {
    kanji: "慌",
    kana: "コウ    あわ.てる    あわ.ただしい",
    english: "disconcerted, be confused, lose one's head ",
  },
  {
    kanji: "拘",
    kana: "コウ    かか.わる",
    english: "arrest, seize, concerned, adhere to, despite ",
  },
  {
    kanji: "控",
    kana: "コウ    ひか.える    ひか.え",
    english: "withdraw, draw in, hold back, refrain from, be moderate ",
  },
  {
    kanji: "甲",
    kana: "コウ    カン    カ    きのえ",
    english:
  "armor, high (voice), A grade, first class, former, instep, carapace ",
  },
  {
    kanji: "硬",
    kana: "コウ    かた.い",
    english: "stiff, hard ",
  },
  {
    kanji: "絞",
    kana: "コウ    しぼ.る    し.める    し.まる",
    english: "strangle, constrict, wring ",
  },
  {
    kanji: "綱",
    kana: "コウ    つな",
    english: "hawser, class (genus), rope, cord, cable ",
  },
  {
    kanji: "郊",
    kana: "コウ",
    english: "outskirts, suburbs, rural area ",
  },
  {
    kanji: "酵",
    kana: "コウ",
    english: "fermentation ",
  },
  {
    kanji: "克",
    kana: "コク    か.つ",
    english: "overcome, kindly, skillfully ",
  },
  {
    kanji: "獄",
    kana: "ゴク",
    english: "prison, jail ",
  },
  {
    kanji: "墾",
    kana: "コン",
    english: "ground-breaking, open up farmland ",
  },
  {
    kanji: "恨",
    kana: "コン    うら.む    うら.めしい",
    english: "regret, bear a grudge, resentment, malice, hatred ",
  },
  {
    kanji: "紺",
    kana: "コン",
    english: "dark blue, navy ",
  },
  {
    kanji: "魂",
    kana: "コン    たましい    たま",
    english: "soul, spirit ",
  },
  {
    kanji: "債",
    kana: "サイ",
    english: "bond, loan, debt ",
  },
  {
    kanji: "催",
    kana: "サイ    もよう.す    もよお.す",
    english: "sponsor, hold (a meeting), give (a dinner) ",
  },
  {
    kanji: "削",
    kana: "サク    けず.る    はつ.る    そ.ぐ",
    english: "plane, sharpen, whittle, pare ",
  },
  {
    kanji: "搾",
    kana: "サク    しぼ.る",
    english: "squeeze ",
  },
  {
    kanji: "錯",
    kana: "サク    シャク",
    english: "confused, mix, be in disorder ",
  },
  {
    kanji: "撮",
    kana: "サツ    と.る    つま.む    -ど.り",
    english: "snapshot, take pictures ",
  },
  {
    kanji: "擦",
    kana: "サツ    す.る    す.れる    -ず.れ    こす.る    こす.れる",
    english: "grate, rub, scratch, scrape, chafe, scour ",
  },
  {
    kanji: "暫",
    kana: "ザン    しばら.く",
    english: "temporarily, a while, moment, long time ",
  },
  {
    kanji: "施",
    kana: "シ    セ    ほどこ.す",
    english: "alms, apply bandages, administer first-aid ",
  },
  {
    kanji: "祉",
    kana: "シ",
    english: "welfare, happiness ",
  },
  {
    kanji: "諮",
    kana: "シ    はか.る",
    english: "consult with ",
  },
  {
    kanji: "侍",
    kana: "ジ    シ    さむらい    はべ.る",
    english: "waiter, samurai, wait upon, serve ",
  },
  {
    kanji: "慈",
    kana: "ジ    いつく.しむ",
    english: "mercy ",
  },
  {
    kanji: "軸",
    kana: "ジク",
    english: "axis, pivot, stem, stalk, counter for book scrolls ",
  },
  {
    kanji: "湿",
    kana: "シツ    シュウ    しめ.る    しめ.す    うるお.う    うるお.す",
    english: "damp, wet, moist ",
  },
  {
    kanji: "疾",
    kana: "シツ",
    english: "rapidly ",
  },
  {
    kanji: "赦",
    kana: "シャ",
    english: "pardon, forgiveness ",
  },
  {
    kanji: "邪",
    kana: "ジャ    よこし.ま",
    english: "wicked, injustice, wrong ",
  },
  {
    kanji: "殊",
    kana: "シュ    こと",
    english: "particularly, especially, exceptionally ",
  },
  {
    kanji: "寿",
    kana: "ジュ    ス    シュウ    ことぶき    ことぶ.く    ことほ.ぐ",
    english: "longevity, congratulations, one's natural life ",
  },
  {
    kanji: "潤",
    kana: "ジュン    うるお.う    うるお.す    うる.む",
    english:
  "wet, be watered, profit by, receive benefits, favor, charm, steep ",
  },
  {
    kanji: "遵",
    kana: "ジュン",
    english: "abide by, follow, obey, learn ",
  },
  {
    kanji: "徐",
    kana: "ジョ    おもむ.ろに",
    english: "gradually, slowly, deliberately, gently ",
  },
  {
    kanji: "匠",
    kana: "ショウ    たくみ",
    english: "artisan, workman, carpenter ",
  },
  {
    kanji: "掌",
    kana: "ショウ    てのひら    たなごころ",
    english: "manipulate, rule, administer, conduct, palm of hand ",
  },
  {
    kanji: "昇",
    kana: "ショウ    のぼ.る",
    english: "rise up ",
  },
  {
    kanji: "晶",
    kana: "ショウ",
    english: "sparkle, clear, crystal ",
  },
  {
    kanji: "焦",
    kana: "ショウ    こ.げる    こ.がす    こ.がれる    あせ.る",
    english: "char, hurry, impatient, irritate, burn, scorch, singe ",
  },
  {
    kanji: "衝",
    kana: "ショウ    つ.く",
    english:
  "collide, brunt, highway, opposition (astronomy), thrust, pierce, stab, prick ",
  },
  {
    kanji: "鐘",
    kana: "ショウ    かね",
    english: "bell, gong, chimes ",
  },
  {
    kanji: "冗",
    kana: "ジョウ",
    english: "superfluous, uselessness ",
  },
  {
    kanji: "嬢",
    kana: "ジョウ    むすめ",
    english: "lass, girl, Miss, daughter ",
  },
  {
    kanji: "譲",
    kana: "ジョウ    ゆず.る",
    english: "defer, turnover, transfer, convey ",
  },
  {
    kanji: "錠",
    kana: "ジョウ",
    english: "lock, fetters, shackles ",
  },
  {
    kanji: "嘱",
    kana: "ショク    しょく.する    たの.む",
    english: "entrust, request, send a message ",
  },
  {
    kanji: "辱",
    kana: "ジョク    はずかし.める",
    english: "embarrass, humiliate, shame ",
  },
  {
    kanji: "伸",
    kana: "シン    の.びる    の.ばす    の.べる    の.す",
    english: "expand, stretch, extend, lengthen, increase ",
  },
  {
    kanji: "審",
    kana: "シン    つまび.らか    つぶさ.に",
    english: "hearing, judge, trial ",
  },
  {
    kanji: "辛",
    kana: "シン    から.い    つら.い    -づら.い    かのと",
    english: "spicy, bitter, hot, acrid ",
  },
  {
    kanji: "炊",
    kana: "スイ    た.く    -だ.き",
    english: "cook, boil ",
  },
  {
    kanji: "粋",
    kana: "スイ    いき",
    english: "chic, style, purity, essence, pith, cream, elite, choice ",
  },
  {
    kanji: "衰",
    kana: "スイ    おとろ.える",
    english: "decline, wane, weaken ",
  },
  {
    kanji: "遂",
    kana: "スイ    と.げる    つい.に",
    english: "consummate, accomplish, attain, commit (suicide) ",
  },
  {
    kanji: "酔",
    kana: "スイ    よ.う    よ.い    よ",
    english: "drunk, feel sick, poisoned, elated, spellbound ",
  },
  {
    kanji: "随",
    kana: "ズイ    まにまに    したが.う",
    english:
  "follow, though, notwithstanding, while, during, both, all, obey, submit to, comply, at the mercy of (the waves) ",
  },
  {
    kanji: "髄",
    kana: "ズイ",
    english: "marrow, pith ",
  },
  {
    kanji: "瀬",
    kana: "ライ    せ",
    english: "rapids, current, torrent, shallows, shoal ",
  },
  {
    kanji: "牲",
    kana: "セイ",
    english: "animal sacrifice, offering ",
  },
  {
    kanji: "請",
    kana: "セイ    シン    ショウ    こ.う    う.ける",
    english: "solicit, invite, ask ",
  },
  {
    kanji: "隻",
    kana: "セキ",
    english: "vessels, counter for ships, fish, birds, arrows, one of a pair ",
  },
  {
    kanji: "惜",
    kana: "セキ    お.しい    お.しむ",
    english: "pity, be sparing of, frugal, stingy, regret ",
  },
  {
    kanji: "斥",
    kana: "セキ    しりぞ.ける",
    english: "reject, retreat, recede, withdraw, repel, repulse ",
  },
  {
    kanji: "籍",
    kana: "セキ",
    english: "enroll, domiciliary register, membership ",
  },
  {
    kanji: "摂",
    kana: "セツ    ショウ    おさ.める    かね.る    と.る",
    english: "vicarious, surrogate, act in addition to ",
  },
  {
    kanji: "潜",
    kana: "セン    ひそ.む    もぐ.る    かく.れる    くぐ.る    ひそ.める",
    english: "submerge, conceal, hide, lower (voice), hush ",
  },
  {
    kanji: "繕",
    kana: "ゼン    つくろ.う",
    english: "darning, repair, mend, trim, tidy up, adjust ",
  },
  {
    kanji: "措",
    kana: "ソ    お.く",
    english: "set aside, give up, suspend, discontinue, lay aside, except ",
  },
  {
    kanji: "礎",
    kana: "ソ    いしずえ",
    english: "cornerstone, foundation stone ",
  },
  {
    kanji: "粗",
    kana: "ソ    あら.い    あら-",
    english: "coarse, rough, rugged ",
  },
  {
    kanji: "阻",
    kana: "ソ    はば.む",
    english: "thwart, separate from, prevent, obstruct, deter, impede ",
  },
  {
    kanji: "双",
    kana: "ソウ    ふた    たぐい    ならぶ    ふたつ",
    english: "pair, set, comparison, counter for pairs ",
  },
  {
    kanji: "掃",
    kana: "ソウ    シュ    は.く",
    english: "sweep, brush ",
  },
  {
    kanji: "葬",
    kana: "ソウ    ほうむ.る",
    english: "interment, bury, shelve ",
  },
  {
    kanji: "遭",
    kana: "ソウ    あ.う    あ.わせる",
    english: "encounter, meet, party, association, interview, join ",
  },
  {
    kanji: "憎",
    kana: "ゾウ    にく.む    にく.い    にく.らしい    にく.しみ",
    english: "hate, detest ",
  },
  {
    kanji: "促",
    kana: "ソク    うなが.す",
    english: "stimulate, urge, press, demand, incite ",
  },
  {
    kanji: "賊",
    kana: "ゾク",
    english: "burglar, rebel, traitor, robber ",
  },
  {
    kanji: "怠",
    kana: "タイ    おこた.る    なま.ける",
    english: "neglect, laziness ",
  },
  {
    kanji: "滞",
    kana: "タイ    テイ    とどこお.る",
    english: "stagnate, be delayed, overdue, arrears ",
  },
  {
    kanji: "胎",
    kana: "タイ",
    english: "womb, uterus ",
  },
  {
    kanji: "袋",
    kana: "タイ    ダイ    ふくろ",
    english: "sack, bag, pouch ",
  },
  {
    kanji: "逮",
    kana: "タイ",
    english: "apprehend, chase ",
  },
  {
    kanji: "滝",
    kana: "ロウ    ソウ    たき",
    english: "waterfall, rapids, cascade ",
  },
  {
    kanji: "卓",
    kana: "タク",
    english: "eminent, table, desk, high ",
  },
  {
    kanji: "択",
    kana: "タク    えら.ぶ",
    english: "choose, select, elect, prefer ",
  },
  {
    kanji: "託",
    kana: "タク    かこつ.ける    かこ.つ    かこ.つける",
    english: "consign, requesting, entrusting with, pretend, hint ",
  },
  {
    kanji: "諾",
    kana: "ダク",
    english: "consent, assent, agreement ",
  },
  {
    kanji: "奪",
    kana: "ダツ    うば.う",
    english: "rob, take by force, snatch away, dispossess, plunder, usurp ",
  },
  {
    kanji: "胆",
    kana: "タン    きも",
    english: "gall bladder, courage, pluck, nerve ",
  },
  {
    kanji: "鍛",
    kana: "タン    きた.える",
    english: "forge, discipline, train ",
  },
  {
    kanji: "壇",
    kana: "ダン    タン",
    english: "podium, stage, rostrum, terrace ",
  },
  {
    kanji: "稚",
    kana: "チ    ジ    いとけない    おさない    おくて    おでる",
    english: "immature, young ",
  },
  {
    kanji: "畜",
    kana: "チク",
    english: "livestock, domestic fowl and animals ",
  },
  {
    kanji: "窒",
    kana: "チツ",
    english: "plug up, obstruct ",
  },
  {
    kanji: "抽",
    kana: "チュウ    ひき-",
    english: "pluck, pull, extract, excel ",
  },
  {
    kanji: "鋳",
    kana: "チュウ    イ    シュ    シュウ    い.る",
    english: "casting, mint ",
  },
  {
    kanji: "駐",
    kana: "チュウ",
    english: "stop-over, reside in, resident ",
  },
  {
    kanji: "彫",
    kana: "チョウ    ほ.る    -ぼ.り",
    english: "carve, engrave, chisel ",
  },
  {
    kanji: "聴",
    kana: "チョウ    テイ    き.く    ゆる.す",
    english: "listen, headstrong, naughty, careful inquiry ",
  },
  {
    kanji: "超",
    kana: "チョウ    こ.える    こ.す",
    english: "transcend, super-, ultra- ",
  },
  {
    kanji: "鎮",
    kana: "チン    しず.める    しず.まる    おさえ",
    english: "tranquilize, ancient peace-preservation centers ",
  },
  {
    kanji: "陳",
    kana: "チン    ひ.ねる",
    english: "exhibit, state, relate, explain ",
  },
  {
    kanji: "墜",
    kana: "ツイ",
    english: "crash, fall (down) ",
  },
  {
    kanji: "帝",
    kana: "テイ    みかど",
    english: "sovereign, the emperor, god, creator ",
  },
  {
    kanji: "締",
    kana: "テイ    し.まる    し.まり    し.める    -し.め    -じ.め",
    english: "tighten, tie, shut, lock, fasten ",
  },
  {
    kanji: "訂",
    kana: "テイ",
    english: "revise, correct, decide ",
  },
  {
    kanji: "哲",
    kana: "テツ",
    english: "philosophy, clear ",
  },
  {
    kanji: "塗",
    kana: "ト    ぬ.る    ぬ.り    まみ.れる",
    english: "paint, plaster, daub, smear, coating ",
  },
  {
    kanji: "斗",
    kana: "ト    トウ",
    english: "Big Dipper, 10 sho (vol), sake dipper ",
  },
  {
    kanji: "凍",
    kana: "トウ    こお.る    こご.える    こご.る    い.てる    し.みる",
    english: "frozen, congeal, refrigerate ",
  },
  {
    kanji: "痘",
    kana: "トウ",
    english: "pox, smallpox ",
  },
  {
    kanji: "陶",
    kana: "トウ",
    english: "pottery, porcelain ",
  },
  {
    kanji: "匿",
    kana: "トク    かくま.う",
    english: "hide, shelter, shield ",
  },
  {
    kanji: "篤",
    kana: "トク    あつ.い",
    english: "fervent, kind, cordial, serious, deliberate ",
  },
  {
    kanji: "豚",
    kana: "トン    ぶた",
    english: "pork, pig ",
  },
  {
    kanji: "如",
    kana: "ジョ    ニョ    ごと.し",
    english: "likeness, like, such as, as if, better, best, equal ",
  },
  {
    kanji: "尿",
    kana: "ニョウ",
    english: "urine ",
  },
  {
    kanji: "粘",
    kana: "ネン    ねば.る",
    english: "sticky, glutinous, greasy, persevere ",
  },
  {
    kanji: "婆",
    kana: "バ    ばば    ばあ",
    english: "old woman, grandma, wet nurse ",
  },
  {
    kanji: "排",
    kana: "ハイ",
    english: "repudiate, exclude, expel, reject ",
  },
  {
    kanji: "陪",
    kana: "バイ",
    english: "obeisance, follow, accompany, attend on ",
  },
  {
    kanji: "縛",
    kana: "バク    しば.る",
    english: "truss, arrest, bind, tie, restrain ",
  },
  {
    kanji: "伐",
    kana: "バツ    ハツ    カ    ボチ    き.る    そむ.く    う.つ",
    english: "fell, strike, attack, punish ",
  },
  {
    kanji: "伴",
    kana: "ハン    バン    ともな.う",
    english: "consort, accompany, bring with, companion ",
  },
  {
    kanji: "帆",
    kana: "ハン    ほ",
    english: "sail ",
  },
  {
    kanji: "畔",
    kana: "ハン    あぜ",
    english: "paddy ridge, levee ",
  },
  {
    kanji: "藩",
    kana: "ハン",
    english: "clan, enclosure ",
  },
  {
    kanji: "蛮",
    kana: "バン    えびす",
    english: "barbarian ",
  },
  {
    kanji: "卑",
    kana: "ヒ    いや.しい    いや.しむ    いや.しめる",
    english: "lowly, base, vile, vulgar ",
  },
  {
    kanji: "泌",
    kana: "ヒツ    ヒ",
    english: "ooze, flow, soak in, penetrate, secrete ",
  },
  {
    kanji: "碑",
    kana: "ヒ    いしぶみ",
    english: "tombstone, monument ",
  },
  {
    kanji: "姫",
    kana: "キ    ひめ    ひめ-",
    english: "princess ",
  },
  {
    kanji: "漂",
    kana: "ヒョウ    ただよ.う",
    english: "drift, float (on liquid) ",
  },
  {
    kanji: "苗",
    kana: "ビョウ    ミョウ    なえ    なわ-",
    english: "seedling, sapling, shoot ",
  },
  {
    kanji: "符",
    kana: "フ",
    english: "token, sign, mark, tally, charm ",
  },
  {
    kanji: "赴",
    kana: "フ    おもむ.く",
    english: "proceed, get, become, tend ",
  },
  {
    kanji: "封",
    kana: "フウ    ホウ",
    english: "seal, closing ",
  },
  {
    kanji: "伏",
    kana: "フク    ふ.せる    ふ.す",
    english: "prostrated, bend down, bow, cover, lay (pipes) ",
  },
  {
    kanji: "覆",
    kana: "フク    おお.う    くつがえ.す    くつがえ.る",
    english: "capsize, cover, shade, mantle, be ruined ",
  },
  {
    kanji: "墳",
    kana: "フン",
    english: "tomb, mound ",
  },
  {
    kanji: "紛",
    kana: "フン    まぎ.れる    -まぎ.れ    まぎ.らす    まぎ.らわす    まぎ.らわしい",
    english: "distract, be mistaken for, go astray, divert ",
  },
  {
    kanji: "癖",
    kana: "ヘキ    くせ    くせ.に",
    english: "mannerism, habit, vice, trait, fault, kink ",
  },
  {
    kanji: "穂",
    kana: "スイ    ほ",
    english: "ear, ear (grain), head, crest (wave) ",
  },
  {
    kanji: "募",
    kana: "ボ    つの.る",
    english: "recruit, campaign, gather (contributions), enlist, grow violent ",
  },
  {
    kanji: "慕",
    kana: "ボ    した.う",
    english: "pining, yearn for, love dearly, adore ",
  },
  {
    kanji: "簿",
    kana: "ボ",
    english: "register, record book ",
  },
  {
    kanji: "倣",
    kana: "ホウ    なら.う",
    english: "emulate, imitate ",
  },
  {
    kanji: "奉",
    kana: "ホウ    ブ    たてまつ.る    まつ.る    ほう.ずる",
    english: "observance, offer, present, dedicate ",
  },
  {
    kanji: "崩",
    kana: "ホウ    くず.れる    -くず.れ    くず.す",
    english: "crumble, die, demolish, level ",
  },
  {
    kanji: "縫",
    kana: "ホウ    ぬ.う",
    english: "sew, stitch, embroider ",
  },
  {
    kanji: "胞",
    kana: "ホウ",
    english: "placenta, sac, sheath ",
  },
  {
    kanji: "芳",
    kana: "ホウ    かんば.しい",
    english: "perfume, balmy, flavorable, fragrant ",
  },
  {
    kanji: "邦",
    kana: "ホウ    くに",
    english: "home country, country, Japan ",
  },
  {
    kanji: "飽",
    kana: "ホウ    あ.きる    あ.かす    あ.く",
    english: "sated, tired of, bored, satiate ",
  },
  {
    kanji: "乏",
    kana: "ボウ    とぼ.しい    とも.しい",
    english: "destitution, scarce, limited ",
  },
  {
    kanji: "妨",
    kana: "ボウ    さまた.げる",
    english: "disturb, prevent, hamper, obstruct ",
  },
  {
    kanji: "房",
    kana: "ボウ    ふさ",
    english:
  "tassel, tuft, fringe, bunch, lock (hair), segment (orange), house, room ",
  },
  {
    kanji: "某",
    kana: "ボウ    それがし    なにがし",
    english: "so-and-so, one, a certain, that person ",
  },
  {
    kanji: "膨",
    kana: "ボウ    ふく.らむ    ふく.れる",
    english: "swell, get fat, thick ",
  },
  {
    kanji: "謀",
    kana: "ボウ    ム    はか.る    たばか.る    はかりごと",
    english:
  "conspire, cheat, impose on, plan, devise, scheme, have in mind, deceive ",
  },
  {
    kanji: "墨",
    kana: "ボク    すみ",
    english: "black ink, India ink, ink stick, Mexico ",
  },
  {
    kanji: "没",
    kana: "ボツ    モツ    おぼ.れる    しず.む    ない",
    english: "drown, sink, hide, fall into, disappear, die ",
  },
  {
    kanji: "翻",
    kana: "ホン    ハン    ひるがえ.る    ひるがえ.す",
    english: "flip, turn over, wave, flutter, change (mind) ",
  },
  {
    kanji: "魔",
    kana: "マ",
    english: "witch, demon, evil spirit ",
  },
  {
    kanji: "埋",
    kana: "マイ    う.める    う.まる    う.もれる    うず.める    うず.まる    い.ける",
    english: "bury, be filled up, embedded ",
  },
  {
    kanji: "膜",
    kana: "マク",
    english: "membrane ",
  },
  {
    kanji: "又",
    kana: "ユウ    また    また-    また.の-",
    english: "or again, furthermore, on the other hand ",
  },
  {
    kanji: "魅",
    kana: "ミ",
    english: "fascination, charm, bewitch ",
  },
  {
    kanji: "婿",
    kana: "セイ    むこ",
    english: "bridegroom, son-in-law ",
  },
  {
    kanji: "滅",
    kana: "メツ    ほろ.びる    ほろ.ぶ    ほろ.ぼす",
    english: "destroy, ruin, overthrow, perish ",
  },
  {
    kanji: "免",
    kana: "メン    まぬか.れる    まぬが.れる",
    english: "excuse, dismissal ",
  },
  {
    kanji: "幽",
    kana: "ユウ",
    english: "seclude, confine to a room ",
  },
  {
    kanji: "憂",
    kana: "ユウ    うれ.える    うれ.い    う.い    う.き",
    english: "melancholy, grieve, lament, be anxious, sad, unhappy ",
  },
  {
    kanji: "誘",
    kana: "ユウ    イウ    さそ.う    いざな.う",
    english: "entice, lead, tempt, invite, ask, call for, seduce, allure ",
  },
  {
    kanji: "揚",
    kana: "ヨウ    あ.げる    -あ.げ    あ.がる",
    english: "hoist, fry in deep fat ",
  },
  {
    kanji: "揺",
    kana: "ヨウ    ゆ.れる    ゆ.る    ゆ.らぐ    ゆ.るぐ    ゆ.する    ゆ.さぶる    ゆ.すぶる    うご.く",
    english: "swing, shake, sway, rock, tremble, vibrate ",
  },
  {
    kanji: "擁",
    kana: "ヨウ",
    english: "hug, embrace, possess, protect, lead ",
  },
  {
    kanji: "抑",
    kana: "ヨク    おさ.える",
    english:
  "repress, well, now, in the first place, push, shove, press, seal, do in spite of ",
  },
  {
    kanji: "裸",
    kana: "ラ    はだか",
    english: "naked, nude, uncovered, partially clothed ",
  },
  {
    kanji: "濫",
    kana: "ラン    みだ.りに    みだ.りがましい",
    english: "excessive, overflow, spread out ",
  },
  {
    kanji: "吏",
    kana: "リ",
    english: "officer, an official ",
  },
  {
    kanji: "隆",
    kana: "リュウ",
    english: "hump, high, noble, prosperity ",
  },
  {
    kanji: "了",
    kana: "リョウ",
    english: "complete, finish ",
  },
  {
    kanji: "猟",
    kana: "リョウ    レフ    かり    か.る",
    english: "game-hunting, shooting, game, bag ",
  },
  {
    kanji: "糧",
    kana: "リョウ    ロウ    かて",
    english: "provisions, food, bread ",
  },
  {
    kanji: "陵",
    kana: "リョウ    みささぎ",
    english: "mausoleum, imperial tomb ",
  },
  {
    kanji: "厘",
    kana: "リン",
    english: "rin, 1/10sen, 1/10bu ",
  },
  {
    kanji: "励",
    kana: "レイ    はげ.む    はげ.ます",
    english: "encourage, be diligent, inspire ",
  },
  {
    kanji: "零",
    kana: "レイ    ぜろ    こぼ.す    こぼ.れる",
    english: "zero, spill, overflow, nothing, cipher ",
  },
  {
    kanji: "霊",
    kana: "レイ    リョウ    たま",
    english: "spirits, soul ",
  },
  {
    kanji: "裂",
    kana: "レツ    さ.く    さ.ける    -ぎ.れ",
    english: "split, rend, tear ",
  },
  {
    kanji: "廉",
    kana: "レン",
    english:
  "bargain, reason, charge, suspicion, point, account, purity, honest, low price, cheap, rested, contented, peaceful ",
  },
  {
    kanji: "錬",
    kana: "レン    ね.る",
    english: "tempering, refine, drill, train, polish ",
  },
  {
    kanji: "炉",
    kana: "ロ    いろり",
    english: "hearth, furnace, kiln, reactor ",
  },
  {
    kanji: "廊",
    kana: "ロウ",
    english: "corridor, hall, tower ",
  },
  {
    kanji: "楼",
    kana: "ロウ    たかどの",
    english: "watchtower, lookout, high building ",
  },
  {
    kanji: "浪",
    kana: "ロウ",
    english: "wandering, waves, billows ",
  },
  {
    kanji: "漏",
    kana: "ロウ    も.る    も.れる    も.らす",
    english: "leak, escape, time ",
  },
  {
    kanji: "湾",
    kana: "ワン    いりえ",
    english: "gulf, bay, inlet ",
  },
  {
    kanji: "亜",
    kana: "ア    アシア    つ.ぐ",
    english: "Asia, rank next, come after, -ous ",
  },
  {
    kanji: "尉",
    kana: "イ    ジョウ",
    english: "military officer, jailer, old man, rank ",
  },
  {
    kanji: "逸",
    kana: "イツ    そ.れる    そ.らす    はぐ.れる",
    english:
  "deviate, idleness, leisure, miss the mark, evade, elude, parry, diverge ",
  },
  {
    kanji: "姻",
    kana: "イン",
    english: "matrimony, marry ",
  },
  {
    kanji: "韻",
    kana: "イン",
    english: "rhyme, elegance, tone ",
  },
  {
    kanji: "渦",
    kana: "カ    うず",
    english: "whirlpool, eddy, vortex ",
  },
  {
    kanji: "浦",
    kana: "ホ    うら",
    english: "bay, creek, inlet, gulf, beach, seacoast ",
  },
  {
    kanji: "疫",
    kana: "エキ    ヤク",
    english: "epidemic ",
  },
  {
    kanji: "謁",
    kana: "エツ",
    english: "audience, audience (with king) ",
  },
  {
    kanji: "猿",
    kana: "エン    さる",
    english: "monkey ",
  },
  {
    kanji: "凹",
    kana: "オウ    くぼ.む    へこ.む    ぼこ",
    english: "concave, hollow, sunken ",
  },
  {
    kanji: "翁",
    kana: "オウ    おきな",
    english: "venerable old man ",
  },
  {
    kanji: "寡",
    kana: "カ",
    english: "widow, minority, few ",
  },
  {
    kanji: "禍",
    kana: "カ    わざわい",
    english: "calamity, misfortune, evil, curse ",
  },
  {
    kanji: "稼",
    kana: "カ    かせ.ぐ",
    english: "earnings, work, earn money ",
  },
  {
    kanji: "蚊",
    kana: "ブン    か",
    english: "mosquito ",
  },
  {
    kanji: "懐",
    kana: "カイ    エ    ふところ    なつ.かしい    なつ.かしむ    なつ.く    なつ.ける    なず.ける    いだ.く    おも.う",
    english:
  "pocket, feelings, heart, yearn, miss someone, become attached to, bosom, breast ",
  },
  {
    kanji: "拐",
    kana: "カイ",
    english: "kidnap, falsify ",
  },
  {
    kanji: "劾",
    kana: "ガイ",
    english: "censure, criminal investigation ",
  },
  {
    kanji: "涯",
    kana: "ガイ    はて",
    english: "horizon, shore ",
  },
  {
    kanji: "垣",
    kana: "エン    かき",
    english: "hedge, fence, wall ",
  },
  {
    kanji: "嚇",
    kana: "カク    おど.かす",
    english: "menacing, dignity, majesty, threaten ",
  },
  {
    kanji: "核",
    kana: "カク",
    english: "nucleus, core, kernel ",
  },
  {
    kanji: "殻",
    kana: "カク    コク    バイ    から    がら",
    english: "husk, nut shell ",
  },
  {
    kanji: "潟",
    kana: "セキ    かた    -がた",
    english: "lagoon ",
  },
  {
    kanji: "喝",
    kana: "カツ",
    english: "hoarse, scold ",
  },
  {
    kanji: "括",
    kana: "カツ    くく.る",
    english: "fasten, tie up, arrest, constrict ",
  },
  {
    kanji: "渇",
    kana: "カツ    かわ.く",
    english: "thirst, dry up, parch ",
  },
  {
    kanji: "褐",
    kana: "カツ",
    english: "brown, woollen kimono ",
  },
  {
    kanji: "轄",
    kana: "カツ    くさび",
    english: "control, wedge ",
  },
  {
    kanji: "且",
    kana: "ショ    ソ    ショウ    か.つ",
    english: "moreover, also, furthermore ",
  },
  {
    kanji: "堪",
    kana: "カン    タン    た.える    たま.る    こ.らえる    こた.える",
    english: "withstand, endure, support, resist ",
  },
  {
    kanji: "寛",
    kana: "カン    くつろ.ぐ    ひろ.い    ゆる.やか",
    english:
  "tolerant, leniency, generosity, relax, feel at home, be at ease, broadminded ",
  },
  {
    kanji: "患",
    kana: "カン    わずら.う",
    english: "afflicted, disease, suffer from, be ill ",
  },
  {
    kanji: "憾",
    kana: "カン    うら.む",
    english: "remorse, regret, be sorry ",
  },
  {
    kanji: "棺",
    kana: "カン",
    english: "coffin, casket ",
  },
  {
    kanji: "款",
    kana: "カン",
    english: "goodwill, article, section, friendship, collusion ",
  },
  {
    kanji: "缶",
    kana: "カン    かま",
    english: "tin can, container ",
  },
  {
    kanji: "艦",
    kana: "カン",
    english: "warship ",
  },
  {
    kanji: "還",
    kana: "カン    かえ.る",
    english: "send back, return ",
  },
  {
    kanji: "閑",
    kana: "カン",
    english: "leisure ",
  },
  {
    kanji: "陥",
    kana: "カン    おちい.る    おとしい.れる",
    english: "collapse, fall into, cave in, fall (castle), slide into ",
  },
  {
    kanji: "頑",
    kana: "ガン    かたく",
    english: "stubborn, foolish, firmly ",
  },
  {
    kanji: "飢",
    kana: "キ    う.える",
    english: "hungry, starve ",
  },
  {
    kanji: "偽",
    kana: "ギ    カ    いつわ.る    にせ    いつわ.り",
    english: "falsehood, lie, deceive, pretend, counterfeit, forgery ",
  },
  {
    kanji: "宜",
    kana: "ギ    よろ.しい    よろ.しく",
    english: "best regards, good ",
  },
  {
    kanji: "擬",
    kana: "ギ    まが.い    もど.き",
    english: "mimic, aim (a gun) at, nominate, imitate ",
  },
  {
    kanji: "窮",
    kana: "キュウ    キョウ    きわ.める    きわ.まる    きわ.まり    きわ.み",
    english: "hard up, destitute, suffer, perplexed, cornered ",
  },
  {
    kanji: "糾",
    kana: "キュウ    ただ.す",
    english: "twist, ask, investigate, verify ",
  },
  {
    kanji: "拒",
    kana: "キョ    ゴ    こば.む",
    english: "repel, refuse, reject, decline ",
  },
  {
    kanji: "享",
    kana: "キョウ    コウ    う.ける",
    english: "receive, undergo, answer (phone), take, get, catch ",
  },
  {
    kanji: "恭",
    kana: "キョウ    うやうや.しい",
    english: "respect, reverent ",
  },
  {
    kanji: "挟",
    kana: "キョウ    ショウ    はさ.む    はさ.まる    わきばさ.む    さしはさ.む",
    english: "pinch, between ",
  },
  {
    kanji: "矯",
    kana: "キョウ    た.める",
    english:
  "rectify, straighten, correct, reform, cure, control, pretend, falsify ",
  },
  {
    kanji: "暁",
    kana: "ギョウ    キョウ    あかつき    さと.る",
    english: "daybreak, dawn, in the event ",
  },
  {
    kanji: "琴",
    kana: "キン    こと",
    english: "harp, koto ",
  },
  {
    kanji: "菌",
    kana: "キン",
    english: "germ, fungus, bacteria ",
  },
  {
    kanji: "襟",
    kana: "キン    えり",
    english: "collar, neck, lapel ",
  },
  {
    kanji: "謹",
    kana: "キン    つつし.む",
    english: "discreet, reverently, humbly ",
  },
  {
    kanji: "吟",
    kana: "ギン",
    english: "versify, singing, recital ",
  },
  {
    kanji: "虞",
    kana: "グ    おそれ",
    english: "uneasiness, fear, anxiety, concern ",
  },
  {
    kanji: "隅",
    kana: "グウ    すみ",
    english: "corner, nook ",
  },
  {
    kanji: "靴",
    kana: "カ    くつ",
    english: "shoes ",
  },
  {
    kanji: "勲",
    kana: "クン    いさお",
    english: "meritorious deed, merit ",
  },
  {
    kanji: "薫",
    kana: "クン    かお.る",
    english: "send forth fragrance, fragrant, be scented, smoke (tobacco) ",
  },
  {
    kanji: "慶",
    kana: "ケイ    よろこ.び",
    english: "jubilation, congratulate, rejoice, be happy ",
  },
  {
    kanji: "渓",
    kana: "ケイ    たに    たにがわ",
    english: "mountain stream, valley ",
  },
  {
    kanji: "茎",
    kana: "ケイ    キョウ    くき",
    english: "stalk, stem ",
  },
  {
    kanji: "蛍",
    kana: "ケイ    ほたる",
    english: "lightning-bug, firefly ",
  },
  {
    kanji: "傑",
    kana: "ケツ",
    english: "greatness, excellence ",
  },
  {
    kanji: "嫌",
    kana: "ケン    ゲン    きら.う    きら.い    いや",
    english: "dislike, detest, hate ",
  },
  {
    kanji: "懸",
    kana: "ケン    ケ    か.ける    か.かる",
    english: "suspend, hang, 10%, install, depend, consult ",
  },
  {
    kanji: "献",
    kana: "ケン    コン    たてまつ.る",
    english: "offering, counter for drinks, present, offer ",
  },
  {
    kanji: "謙",
    kana: "ケン",
    english: "self-effacing, humble oneself, condescend, be modest ",
  },
  {
    kanji: "顕",
    kana: "ケン    あきらか    あらわ.れる",
    english: "appear, existing ",
  },
  {
    kanji: "弦",
    kana: "ゲン    つる",
    english: "bowstring, chord, hypotenuse ",
  },
  {
    kanji: "呉",
    kana: "ゴ    く.れる    くれ",
    english: "give, do something for ",
  },
  {
    kanji: "碁",
    kana: "ゴ",
    english: "Go ",
  },
  {
    kanji: "侯",
    kana: "コウ",
    english: "marquis, lord, daimyo ",
  },
  {
    kanji: "江",
    kana: "コウ    え",
    english: "creek, inlet, bay ",
  },
  {
    kanji: "洪",
    kana: "コウ",
    english: "deluge, flood, vast ",
  },
  {
    kanji: "溝",
    kana: "コウ    みぞ",
    english: "gutter, ditch, sewer, drain, 10**32 ",
  },
  {
    kanji: "肯",
    kana: "コウ    がえんじ.る",
    english: "agreement, consent, comply with ",
  },
  {
    kanji: "衡",
    kana: "コウ",
    english: "equilibrium, measuring rod, scale ",
  },
  {
    kanji: "貢",
    kana: "コウ    ク    みつ.ぐ",
    english: "tribute, support, finance ",
  },
  {
    kanji: "購",
    kana: "コウ",
    english: "subscription, buy ",
  },
  {
    kanji: "剛",
    kana: "ゴウ",
    english: "sturdy, strength ",
  },
  {
    kanji: "拷",
    kana: "ゴウ",
    english: "torture, beat ",
  },
  {
    kanji: "酷",
    kana: "コク    ひど.い",
    english: "cruel, severe, atrocious, unjust ",
  },
  {
    kanji: "懇",
    kana: "コン    ねんご.ろ",
    english: "sociable, kind, courteous, hospitable, cordial ",
  },
  {
    kanji: "昆",
    kana: "コン",
    english: "descendants, elder brother, insect ",
  },
  {
    kanji: "佐",
    kana: "サ",
    english: "assistant, help ",
  },
  {
    kanji: "唆",
    kana: "サ    そそのか.す",
    english: "tempt, seduce, instigate, promote ",
  },
  {
    kanji: "詐",
    kana: "サ    いつわ.る",
    english: "lie, falsehood, deceive, pretend ",
  },
  {
    kanji: "宰",
    kana: "サイ",
    english: "superintend, manager, rule ",
  },
  {
    kanji: "栽",
    kana: "サイ",
    english: "plantation, planting ",
  },
  {
    kanji: "砕",
    kana: "サイ    くだ.く    くだ.ける",
    english: "smash, break, crush, familiar, popular ",
  },
  {
    kanji: "斎",
    kana: "サイ    とき    つつし.む    ものいみ    い.む",
    english: "purification, Buddhist food, room, worship, avoid, alike ",
  },
  {
    kanji: "崎",
    kana: "キ    さき    さい    みさき",
    english: "promontory, cape, spit ",
  },
  {
    kanji: "索",
    kana: "サク",
    english: "cord, rope ",
  },
  {
    kanji: "傘",
    kana: "サン    かさ",
    english: "umbrella ",
  },
  {
    kanji: "桟",
    kana: "サン    セン    かけはし",
    english: "scaffold, cleat, frame, jetty, bolt (door) ",
  },
  {
    kanji: "嗣",
    kana: "シ",
    english: "heir, succeed ",
  },
  {
    kanji: "肢",
    kana: "シ",
    english: "limb, arms & legs ",
  },
  {
    kanji: "賜",
    kana: "シ    たまわ.る    たま.う    たも.う",
    english: "grant, gift, boon, results ",
  },
  {
    kanji: "滋",
    kana: "ジ",
    english: "nourishing, more & more, be luxuriant, planting, turbidity ",
  },
  {
    kanji: "璽",
    kana: "ジ",
    english: "emperor's seal ",
  },
  {
    kanji: "漆",
    kana: "シツ    うるし",
    english: "lacquer, varnish, seven ",
  },
  {
    kanji: "遮",
    kana: "シャ    さえぎ.る",
    english: "intercept, interrupt, obstruct ",
  },
  {
    kanji: "蛇",
    kana: "ジャ    ダ    イ    ヤ    へび",
    english: "snake, serpent, hard drinker ",
  },
  {
    kanji: "爵",
    kana: "シャク",
    english: "baron, peerage, court rank ",
  },
  {
    kanji: "酌",
    kana: "シャク    く.む",
    english:
  "bar-tending, serving sake, the host, draw (water), ladle, scoop, pump ",
  },
  {
    kanji: "珠",
    kana: "シュ    たま",
    english: "pearl, gem, jewel ",
  },
  {
    kanji: "儒",
    kana: "ジュ",
    english: "Confucian ",
  },
  {
    kanji: "囚",
    kana: "シュウ    とら.われる",
    english: "captured, criminal, arrest, catch ",
  },
  {
    kanji: "愁",
    kana: "シュウ    うれ.える    うれ.い",
    english: "distress, grieve, lament, be anxious ",
  },
  {
    kanji: "臭",
    kana: "シュウ    くさ.い    -くさ.い    にお.う    にお.い",
    english:
  "stinking, ill-smelling, suspicious looking, odor, savor, fragrance, be fragrant, stink, glow, be bright ",
  },
  {
    kanji: "酬",
    kana: "シュウ    シュ    トウ    むく.いる",
    english: "repay, reward, retribution ",
  },
  {
    kanji: "醜",
    kana: "シュウ    みにく.い    しこ",
    english: "ugly, unclean, shame, bad looking ",
  },
  {
    kanji: "充",
    kana: "ジュウ    あ.てる    み.たす",
    english: "allot, fill ",
  },
  {
    kanji: "汁",
    kana: "ジュウ    しる    -しる    つゆ",
    english: "soup, juice, broth, sap, gravy, pus ",
  },
  {
    kanji: "渋",
    kana: "ジュウ    シュウ    しぶ    しぶ.い    しぶ.る",
    english: "astringent, hesitate, reluctant, have diarrhea ",
  },
  {
    kanji: "銃",
    kana: "ジュウ",
    english: "gun, arms ",
  },
  {
    kanji: "叔",
    kana: "シュク",
    english: "uncle, youth ",
  },
  {
    kanji: "淑",
    kana: "シュク    しと.やか",
    english: "graceful, gentle, pure ",
  },
  {
    kanji: "粛",
    kana: "シュク    スク    つつし.む",
    english: "solemn, quietly, softly ",
  },
  {
    kanji: "塾",
    kana: "ジュク",
    english: "cram school, private school ",
  },
  {
    kanji: "俊",
    kana: "シュン",
    english: "sagacious, genius, excellence ",
  },
  {
    kanji: "准",
    kana: "ジュン",
    english: "quasi-, semi-, associate ",
  },
  {
    kanji: "循",
    kana: "ジュン",
    english: "sequential, fellow ",
  },
  {
    kanji: "殉",
    kana: "ジュン",
    english: "martyrdom, follow by resigning ",
  },
  {
    kanji: "庶",
    kana: "ショ",
    english: "commoner, all, bastard ",
  },
  {
    kanji: "緒",
    kana: "ショ    チョ    お    いとぐち",
    english: "thong, beginning, inception, end, cord, strap ",
  },
  {
    kanji: "叙",
    kana: "ジョ    つい.ず    ついで",
    english: "confer, relate, narrate, describe ",
  },
  {
    kanji: "償",
    kana: "ショウ    つぐな.う",
    english: "reparation, make up for, recompense, redeem ",
  },
  {
    kanji: "升",
    kana: "ショウ    ます",
    english: "measuring box, 1.8 liter ",
  },
  {
    kanji: "奨",
    kana: "ショウ    ソウ    すす.める",
    english: "exhort, urge, encourage ",
  },
  {
    kanji: "宵",
    kana: "ショウ    よい",
    english: "wee hours, evening, early night ",
  },
  {
    kanji: "尚",
    kana: "ショウ    なお",
    english: "esteem, furthermore, still, yet ",
  },
  {
    kanji: "彰",
    kana: "ショウ",
    english: "patent, clear ",
  },
  {
    kanji: "抄",
    kana: "ショウ",
    english: "extract, selection, summary, copy, spread thin ",
  },
  {
    kanji: "渉",
    kana: "ショウ    わた.る",
    english: "ford, ferry, port ",
  },
  {
    kanji: "症",
    kana: "ショウ",
    english: "symptoms, illness ",
  },
  {
    kanji: "硝",
    kana: "ショウ",
    english: "nitrate, saltpeter ",
  },
  {
    kanji: "礁",
    kana: "ショウ",
    english: "reef, sunken rock ",
  },
  {
    kanji: "祥",
    kana: "ショウ",
    english: "auspicious, happiness, good omen ",
  },
  {
    kanji: "粧",
    kana: "ショウ",
    english: "cosmetics, adorn (one's person) ",
  },
  {
    kanji: "肖",
    kana: "ショウ    あやか.る",
    english: "resemblance ",
  },
  {
    kanji: "訟",
    kana: "ショウ",
    english: "sue, accuse ",
  },
  {
    kanji: "詔",
    kana: "ショウ    みことのり",
    english: "imperial edict ",
  },
  {
    kanji: "剰",
    kana: "ジョウ    あまつさえ    あま.り    あま.る",
    english: "surplus, besides ",
  },
  {
    kanji: "壌",
    kana: "ジョウ    つち",
    english: "lot, earth, soil ",
  },
  {
    kanji: "浄",
    kana: "ジョウ    セイ    きよ.める    きよ.い",
    english: "clean, purify, cleanse, exorcise, Manchu Dynasty ",
  },
  {
    kanji: "醸",
    kana: "ジョウ    かも.す",
    english: "brew, cause ",
  },
  {
    kanji: "唇",
    kana: "シン    くちびる",
    english: "lips ",
  },
  {
    kanji: "娠",
    kana: "シン",
    english: "with child, pregnancy ",
  },
  {
    kanji: "紳",
    kana: "シン",
    english: "sire, good belt, gentleman ",
  },
  {
    kanji: "診",
    kana: "シン    み.る",
    english: "checkup, seeing, diagnose, examine ",
  },
  {
    kanji: "刃",
    kana: "ジン    ニン    は    やいば    き.る",
    english: "blade, sword, edge ",
  },
  {
    kanji: "甚",
    kana: "ジン    はなは.だ    はなは.だしい",
    english: "tremendously, very, great, exceedingly ",
  },
  {
    kanji: "迅",
    kana: "ジン",
    english: "swift, fast ",
  },
  {
    kanji: "酢",
    kana: "サク    す",
    english: "vinegar, sour, acid, tart ",
  },
  {
    kanji: "帥",
    kana: "スイ",
    english: "commander, leading troops, governor ",
  },
  {
    kanji: "睡",
    kana: "スイ",
    english: "drowsy, sleep, die ",
  },
  {
    kanji: "崇",
    kana: "スウ    あが.める",
    english: "adore, respect, revere, worship ",
  },
  {
    kanji: "枢",
    kana: "スウ    シュ    とぼそ    からくり",
    english: "hinge, pivot, door ",
  },
  {
    kanji: "据",
    kana: "キョ    す.える    す.わる",
    english: "set, lay a foundation, install, equip, squat down, sit down ",
  },
  {
    kanji: "杉",
    kana: "サン    すぎ",
    english: "cedar, cryptomeria ",
  },
  {
    kanji: "畝",
    kana: "ボウ    ホ    モ    ム    せ    うね",
    english: "furrow, 30 tsubo, ridge, rib ",
  },
  {
    kanji: "誓",
    kana: "セイ    ちか.う",
    english: "vow, swear, pledge ",
  },
  {
    kanji: "逝",
    kana: "セイ    ゆ.く",
    english: "departed, die ",
  },
  {
    kanji: "斉",
    kana: "セイ    サイ    そろ.う    ひと.しい    ひと.しく    あたる    はやい",
    english: "adjusted, alike, equal, similar variety of ",
  },
  {
    kanji: "析",
    kana: "セキ",
    english: "chop, divide, tear, analyze ",
  },
  {
    kanji: "拙",
    kana: "セツ    つたな.い",
    english: "bungling, clumsy, unskillful ",
  },
  {
    kanji: "窃",
    kana: "セツ    ぬす.む    ひそ.か",
    english: "stealth, steal, secret, private, hushed ",
  },
  {
    kanji: "仙",
    kana: "セン    セント",
    english: "hermit, wizard, cent ",
  },
  {
    kanji: "栓",
    kana: "セン",
    english: "plug, bolt, cork, bung, stopper ",
  },
  {
    kanji: "旋",
    kana: "セン",
    english: "rotation, go around ",
  },
  {
    kanji: "繊",
    kana: "セン",
    english: "slender, fine, thin kimono ",
  },
  {
    kanji: "薦",
    kana: "セン    すす.める",
    english: "recommend, mat, advise, encourage, offer ",
  },
  {
    kanji: "践",
    kana: "セン    ふ.む",
    english: "tread, step on, trample, practice, carry through ",
  },
  {
    kanji: "遷",
    kana: "セン    うつ.る    うつ.す    みやこがえ",
    english: "transition, move, change ",
  },
  {
    kanji: "漸",
    kana: "ゼン",
    english: "steadily, gradually advancing, finally, barely ",
  },
  {
    kanji: "禅",
    kana: "ゼン    セン    しずか    ゆず.る",
    english: "Zen, silent meditation ",
  },
  {
    kanji: "塑",
    kana: "ソ    でく",
    english: "model, molding ",
  },
  {
    kanji: "疎",
    kana: "ソ    ショ    うと.い    うと.む    まば.ら",
    english: "alienate, rough, neglect, shun, sparse ",
  },
  {
    kanji: "租",
    kana: "ソ",
    english: "tariff, crop tax, borrowing ",
  },
  {
    kanji: "喪",
    kana: "ソウ    も",
    english: "miss, mourning ",
  },
  {
    kanji: "壮",
    kana: "ソウ    さかん",
    english: "robust, manhood, prosperity ",
  },
  {
    kanji: "捜",
    kana: "ソウ    シュ    シュウ    さが.す",
    english: "search, look for, locate ",
  },
  {
    kanji: "挿",
    kana: "ソウ    さ.す    はさ.む",
    english: "insert, put in, graft, wear (sword) ",
  },
  {
    kanji: "曹",
    kana: "ソウ    ゾウ    つかさ    ともがら    へや",
    english: "cadet, friend ",
  },
  {
    kanji: "槽",
    kana: "ソウ    ふね",
    english: "vat, tub, tank ",
  },
  {
    kanji: "荘",
    kana: "ソウ    ショウ    チャン    ほうき    おごそ.か",
    english: "villa, inn, cottage, feudal manor ",
  },
  {
    kanji: "藻",
    kana: "ソウ    も",
    english: "seaweed, duckweed ",
  },
  {
    kanji: "霜",
    kana: "ソウ    しも",
    english: "frost ",
  },
  {
    kanji: "堕",
    kana: "ダ    お.ちる    くず.す    くず.れる",
    english: "degenerate, descend to, lapse into ",
  },
  {
    kanji: "妥",
    kana: "ダ",
    english: "gentle, peace, depravity ",
  },
  {
    kanji: "惰",
    kana: "ダ",
    english: "lazy, laziness ",
  },
  {
    kanji: "駄",
    kana: "ダ    タ",
    english: "burdensome, pack horse, horse load, send by horse ",
  },
  {
    kanji: "泰",
    kana: "タイ",
    english: "peaceful, calm, peace, easy, Thailand ",
  },
  {
    kanji: "濯",
    kana: "タク    すす.ぐ    ゆす.ぐ",
    english: "laundry, wash, pour on, rinse ",
  },
  {
    kanji: "但",
    kana: "タン    ただ.し",
    english: "however, but ",
  },
  {
    kanji: "棚",
    kana: "ホウ    たな    -だな",
    english: "shelf, ledge, rack, mount, mantle, trellis ",
  },
  {
    kanji: "痴",
    kana: "チ    し.れる    おろか",
    english: "stupid, foolish ",
  },
  {
    kanji: "逐",
    kana: "チク",
    english: "pursue, drive away, chase, accomplish, attain, commit ",
  },
  {
    kanji: "秩",
    kana: "チツ",
    english: "regularity, salary, order ",
  },
  {
    kanji: "嫡",
    kana: "チャク    テキ",
    english: "legitimate wife, direct descent (non-bastard) ",
  },
  {
    kanji: "衷",
    kana: "チュウ",
    english: "inmost, heart, mind, inside ",
  },
  {
    kanji: "弔",
    kana: "チョウ    とむら.う    とぶら.う",
    english: "condolences, mourning, funeral ",
  },
  {
    kanji: "懲",
    kana: "チョウ    こ.りる    こ.らす    こ.らしめる",
    english: "penal, chastise, punish, discipline ",
  },
  {
    kanji: "挑",
    kana: "チョウ    いど.む",
    english: "challenge, contend for, make love to ",
  },
  {
    kanji: "眺",
    kana: "チョウ    なが.める",
    english: "stare, watch, look at, see, scrutinize ",
  },
  {
    kanji: "勅",
    kana: "チョク    いまし.める    みことのり",
    english: "imperial order ",
  },
  {
    kanji: "朕",
    kana: "チン",
    english: "majestic plural, imperial we ",
  },
  {
    kanji: "津",
    kana: "シン    つ",
    english: "haven, port, harbor, ferry ",
  },
  {
    kanji: "塚",
    kana: "チョウ    つか    -づか",
    english: "hillock, mound ",
  },
  {
    kanji: "漬",
    kana: "シ    つ.ける    つ.かる    -づ.け    -づけ",
    english: "pickling, soak, moisten, steep ",
  },
  {
    kanji: "坪",
    kana: "ヘイ    つぼ",
    english: "two-mat area, ~36 sq ft ",
  },
  {
    kanji: "釣",
    kana: "チョウ    つ.る    つ.り    つ.り-",
    english: "angling, fish, catch, allure, ensnare ",
  },
  {
    kanji: "亭",
    kana: "テイ    チン",
    english:
  "pavilion, restaurant, mansion, arbor, cottage, vaudeville, music hall, stage name ",
  },
  {
    kanji: "偵",
    kana: "テイ",
    english: "spy ",
  },
  {
    kanji: "貞",
    kana: "テイ    さだ",
    english: "upright, chastity, constancy, righteousness ",
  },
  {
    kanji: "呈",
    kana: "テイ",
    english: "display, offer, present, send, exhibit ",
  },
  {
    kanji: "廷",
    kana: "テイ",
    english: "courts, imperial court, government office ",
  },
  {
    kanji: "艇",
    kana: "テイ",
    english: "rowboat, small boat ",
  },
  {
    kanji: "逓",
    kana: "テイ    かわ.る    たがいに",
    english: "relay, in turn, sending ",
  },
  {
    kanji: "邸",
    kana: "テイ    やしき",
    english: "residence, mansion ",
  },
  {
    kanji: "泥",
    kana: "デイ    ナイ    デ    ニ    どろ",
    english: "mud, mire, adhere to, be attached to ",
  },
  {
    kanji: "徹",
    kana: "テツ",
    english: "penetrate, clear, pierce, strike home, sit up (all night) ",
  },
  {
    kanji: "撤",
    kana: "テツ",
    english: "remove, withdraw, disarm, dismantle, reject, exclude ",
  },
  {
    kanji: "迭",
    kana: "テツ",
    english: "transfer, alternation ",
  },
  {
    kanji: "悼",
    kana: "トウ    いた.む",
    english: "lament, grieve over ",
  },
  {
    kanji: "搭",
    kana: "トウ",
    english: "board, load (a vehicle), ride ",
  },
  {
    kanji: "棟",
    kana: "トウ    むね    むな-",
    english: "ridgepole, ridge ",
  },
  {
    kanji: "筒",
    kana: "トウ    つつ",
    english: "cylinder, pipe, tube, gun barrel, sleeve ",
  },
  {
    kanji: "謄",
    kana: "トウ",
    english: "mimeograph, copy ",
  },
  {
    kanji: "騰",
    kana: "トウ",
    english: "inflation, advancing, going ",
  },
  {
    kanji: "洞",
    kana: "ドウ    ほら",
    english: "den, cave, excavation ",
  },
  {
    kanji: "督",
    kana: "トク",
    english: "coach, command, urge, lead, supervise ",
  },
  {
    kanji: "凸",
    kana: "トツ    でこ",
    english: "convex, beetle brow, uneven ",
  },
  {
    kanji: "屯",
    kana: "トン",
    english: "barracks, police station, camp ",
  },
  {
    kanji: "縄",
    kana: "ジョウ    なわ    ただ.す",
    english: "straw rope, cord ",
  },
  {
    kanji: "軟",
    kana: "ナン    やわ.らか    やわ.らかい",
    english: "soft ",
  },
  {
    kanji: "尼",
    kana: "ニ    あま",
    english: "nun ",
  },
  {
    kanji: "妊",
    kana: "ニン    ジン    はら.む    みごも.る",
    english: "pregnancy ",
  },
  {
    kanji: "忍",
    kana: "ニン    しの.ぶ    しの.ばせる",
    english: "endure, bear, put up with, conceal, secrete, spy, sneak ",
  },
  {
    kanji: "寧",
    kana: "ネイ    むし.ろ",
    english: "rather, preferably ",
  },
  {
    kanji: "猫",
    kana: "ビョウ    ねこ",
    english: "cat ",
  },
  {
    kanji: "把",
    kana: "ハ    ワ",
    english: "grasp, faggot, bunch, counter for bundles ",
  },
  {
    kanji: "覇",
    kana: "ハ    ハク    はたがしら",
    english: "hegemony, supremacy, leadership, champion ",
  },
  {
    kanji: "廃",
    kana: "ハイ    すた.れる    すた.る",
    english: "abolish, obsolete, cessation, discarding, abandon ",
  },
  {
    kanji: "培",
    kana: "バイ    つちか.う",
    english: "cultivate, foster ",
  },
  {
    kanji: "媒",
    kana: "バイ",
    english: "mediator, go-between ",
  },
  {
    kanji: "賠",
    kana: "バイ",
    english: "compensation, indemnify ",
  },
  {
    kanji: "伯",
    kana: "ハク",
    english: "chief, count, earl, uncle, Brazil ",
  },
  {
    kanji: "舶",
    kana: "ハク",
    english: "liner, ship ",
  },
  {
    kanji: "漠",
    kana: "バク",
    english: "vague, obscure, desert, wide ",
  },
  {
    kanji: "肌",
    kana: "キ    はだ",
    english: "texture, skin, body, grain ",
  },
  {
    kanji: "鉢",
    kana: "ハチ    ハツ",
    english: "bowl, rice tub, pot, crown ",
  },
  {
    kanji: "閥",
    kana: "バツ",
    english: "clique, lineage, pedigree, faction, clan ",
  },
  {
    kanji: "煩",
    kana: "ハン    ボン    わずら.う    わずら.わす",
    english: "anxiety, trouble, worry, pain, ill, annoy, nuisance, irksome ",
  },
  {
    kanji: "頒",
    kana: "ハン    わか.つ",
    english: "distribute, disseminate, partition, understand ",
  },
  {
    kanji: "妃",
    kana: "ヒ    きさき",
    english: "queen, princess ",
  },
  {
    kanji: "扉",
    kana: "ヒ    とびら",
    english: "front door, title page, front page ",
  },
  {
    kanji: "披",
    kana: "ヒ",
    english: "expose, open ",
  },
  {
    kanji: "罷",
    kana: "ヒ    まか.り-    や.める",
    english: "quit, stop, leave, withdraw, go ",
  },
  {
    kanji: "賓",
    kana: "ヒン",
    english: "V.I.P., guest ",
  },
  {
    kanji: "頻",
    kana: "ヒン    しき.りに",
    english: "repeatedly, recur ",
  },
  {
    kanji: "瓶",
    kana: "ビン    かめ",
    english: "flower pot, bottle, vial, jar, jug, vat, urn ",
  },
  {
    kanji: "扶",
    kana: "フ    たす.ける",
    english: "aid, help, assist ",
  },
  {
    kanji: "譜",
    kana: "フ",
    english: "musical score, music, note, staff, table, genealogy ",
  },
  {
    kanji: "附",
    kana: "フ    つ.ける    つ.く",
    english: "affixed, attach, refer to, append ",
  },
  {
    kanji: "侮",
    kana: "ブ    あなど.る    あなず.る",
    english: "scorn, despise, make light of, contempt ",
  },
  {
    kanji: "沸",
    kana: "フツ    わ.く    わ.かす",
    english: "seethe, boil, ferment, uproar, breed ",
  },
  {
    kanji: "憤",
    kana: "フン    いきどお.る",
    english: "aroused, resent, be indignant, anger ",
  },
  {
    kanji: "雰",
    kana: "フン",
    english: "atmosphere, fog ",
  },
  {
    kanji: "丙",
    kana: "ヘイ    ひのえ",
    english: "third class, 3rd, 3rd calendar sign ",
  },
  {
    kanji: "併",
    kana: "ヘイ    あわ.せる",
    english: "join, get together, unite, collective ",
  },
  {
    kanji: "塀",
    kana: "ヘイ    ベイ",
    english: "fence, wall, (kokuji) ",
  },
  {
    kanji: "幣",
    kana: "ヘイ    ぬさ",
    english:
  "cash, bad habit, humble prefix, gift, shinto offerings of cloth, rope, cut paper ",
  },
  {
    kanji: "弊",
    kana: "ヘイ",
    english: "abuse, evil, vice, breakage ",
  },
  {
    kanji: "偏",
    kana: "ヘン    かたよ.る",
    english: "partial, side, left-side radical, inclining, biased ",
  },
  {
    kanji: "遍",
    kana: "ヘン    あまね.く",
    english: "everywhere, times, widely, generally ",
  },
  {
    kanji: "俸",
    kana: "ホウ",
    english: "stipend, salary ",
  },
  {
    kanji: "泡",
    kana: "ホウ    あわ",
    english: "bubbles, foam, suds, froth ",
  },
  {
    kanji: "褒",
    kana: "ホウ    ほ.める",
    english: "praise, extol ",
  },
  {
    kanji: "剖",
    kana: "ボウ",
    english: "divide ",
  },
  {
    kanji: "紡",
    kana: "ボウ    つむ.ぐ",
    english: "spinning ",
  },
  {
    kanji: "僕",
    kana: "ボク    しもべ",
    english: "me, I (male) ",
  },
  {
    kanji: "撲",
    kana: "ボク",
    english: "slap, strike, hit, beat, tell, speak ",
  },
  {
    kanji: "朴",
    kana: "ボク    ほう    ほお",
    english: "crude, simple, plain, docile ",
  },
  {
    kanji: "堀",
    kana: "クツ    ほり",
    english: "ditch, moat, canal ",
  },
  {
    kanji: "奔",
    kana: "ホン",
    english: "bustle, run ",
  },
  {
    kanji: "摩",
    kana: "マ    ま.する    さ.する    す.る",
    english: "chafe, rub, polish, grind, scrape ",
  },
  {
    kanji: "磨",
    kana: "マ    みが.く    す.る",
    english: "grind, polish, scour, improve, brush (teeth) ",
  },
  {
    kanji: "麻",
    kana: "マ    マア    あさ",
    english: "hemp, flax ",
  },
  {
    kanji: "抹",
    kana: "マツ",
    english: "rub, paint, erase ",
  },
  {
    kanji: "繭",
    kana: "ケン    まゆ    きぬ",
    english: "cocoon ",
  },
  {
    kanji: "岬",
    kana: "コウ    みさき",
    english: "headland, cape, spit, promontory ",
  },
  {
    kanji: "銘",
    kana: "メイ",
    english: "inscription, signature (of artisan) ",
  },
  {
    kanji: "妄",
    kana: "モウ    ボウ    みだ.りに",
    english: "delusion, unnecessarily, without authority, reckless ",
  },
  {
    kanji: "盲",
    kana: "モウ    めくら",
    english: "blind, blind man, ignoramus ",
  },
  {
    kanji: "耗",
    kana: "モウ    コウ    カウ",
    english: "decrease ",
  },
  {
    kanji: "戻",
    kana: "レイ    もど.す    もど.る",
    english: "re-, return, revert, resume, restore, go backwards ",
  },
  {
    kanji: "厄",
    kana: "ヤク",
    english: "unlucky, misfortune, bad luck, disaster ",
  },
  {
    kanji: "柳",
    kana: "リュウ    やなぎ",
    english: "willow ",
  },
  {
    kanji: "愉",
    kana: "ユ    たの.しい    たの.しむ",
    english: "pleasure, happy, rejoice ",
  },
  {
    kanji: "癒",
    kana: "ユ    い.える    いや.す",
    english: "healing, cure, quench (thirst), wreak ",
  },
  {
    kanji: "諭",
    kana: "ユ    さと.す",
    english: "rebuke, admonish, charge, warn, persuade ",
  },
  {
    kanji: "唯",
    kana: "ユイ    イ    ただ",
    english: "solely, only, merely, simply ",
  },
  {
    kanji: "悠",
    kana: "ユウ",
    english: "permanence, distant, long time, leisure ",
  },
  {
    kanji: "猶",
    kana: "ユウ    ユ    なお",
    english: "furthermore, still, yet ",
  },
  {
    kanji: "裕",
    kana: "ユウ",
    english: "abundant, rich, fertile ",
  },
  {
    kanji: "融",
    kana: "ユウ    と.ける    と.かす",
    english: "dissolve, melt ",
  },
  {
    kanji: "庸",
    kana: "ヨウ",
    english: "commonplace, ordinary, employment ",
  },
  {
    kanji: "窯",
    kana: "ヨウ    かま",
    english: "kiln, oven, furnace ",
  },
  {
    kanji: "羅",
    kana: "ラ",
    english: "gauze, thin silk, Rome ",
  },
  {
    kanji: "酪",
    kana: "ラク",
    english: "dairy products, whey, broth, fruit juice ",
  },
  {
    kanji: "履",
    kana: "リ    は.く",
    english: "footgear, shoes, boots, put on (the feet ",
  },
  {
    kanji: "痢",
    kana: "リ",
    english: "diarrhea ",
  },
  {
    kanji: "硫",
    kana: "リュウ",
    english: "sulphur ",
  },
  {
    kanji: "竜",
    kana: "リュウ    リョウ    ロウ    たつ    いせ",
    english: "dragon, imperial ",
  },
  {
    kanji: "虜",
    kana: "リョ    ロ    とりこ    とりく",
    english: "captive, barbarian, low epithet for the enemy ",
  },
  {
    kanji: "僚",
    kana: "リョウ",
    english: "colleague, official, companion ",
  },
  {
    kanji: "寮",
    kana: "リョウ",
    english: "dormitory, hostel, villa, tea pavillion ",
  },
  {
    kanji: "涼",
    kana: "リョウ    すず.しい    すず.む    すず.やか    うす.い    ひや.す    まことに",
    english: "refreshing, nice and cool ",
  },
  {
    kanji: "倫",
    kana: "リン",
    english: "ethics, companion ",
  },
  {
    kanji: "塁",
    kana: "ルイ    ライ    スイ    とりで",
    english: "bases, fort, rampart, walls, base(ball) ",
  },
  {
    kanji: "累",
    kana: "ルイ",
    english: "accumulate, involvement, trouble, tie up, continually ",
  },
  {
    kanji: "鈴",
    kana: "レイ    リン    すず",
    english: "small bell, buzzer ",
  },
  {
    kanji: "賄",
    kana: "ワイ    まかな.う",
    english: "bribe, board, supply, finance ",
  },
  {
    kanji: "枠",
    kana: "わく",
    english: "frame, framework, spindle, spool, bounding-box, (kokuji) ",
  },
  {
    kanji: "挨",
    kana: "アイ    ひら.く",
    english: "push open ",
  },
  {
    kanji: "宛",
    kana: "エン    あ.てる    -あて    -づつ    あたか.も",
    english: "address, just like, fortunately ",
  },
  {
    kanji: "闇",
    kana: "アン    オン    やみ    くら.い",
    english: "get dark, gloom, disorder ",
  },
  {
    kanji: "椅",
    kana: "イ",
    english: "chair ",
  },
  {
    kanji: "畏",
    kana: "イ    おそ.れる    かしこ.まる    かしこ    かしこ.し",
    english: "fear, majestic, graciously, be apprehensive ",
  },
  {
    kanji: "萎",
    kana: "イ    な    しお.れる    しな.びる    しぼ.む    な.える",
    english: "wither, droop, lame ",
  },
  {
    kanji: "茨",
    kana: "シ    ジ    いばら    かや    くさぶき",
    english: "briar, thorn ",
  },
  {
    kanji: "咽",
    kana: "イン    エン    エツ    むせ.ぶ    むせ.る    のど    の.む",
    english: "choked, smothered, stuffy ",
  },
  {
    kanji: "淫",
    kana: "イン    ひた.す    ほしいまま    みだ.ら    みだ.れる    みだり",
    english: "lewdness, licentiousness ",
  },
  {
    kanji: "臼",
    kana: "キュウ    グ    うす    うすづ.く",
    english: "mortar ",
  },
  {
    kanji: "唄",
    kana: "バイ    うた    うた.う",
    english: "songs with samisen ",
  },
  {
    kanji: "餌",
    kana: "ジ    ニ    え    えば    えさ    もち",
    english: "food, bait, prey, tempting profit ",
  },
  {
    kanji: "怨",
    kana: "エン    オン    ウン    うら.む    うらみ    うら.めしい",
    english: "grudge, show resentment, be jealous ",
  },
  {
    kanji: "艶",
    kana: "エン    つや    なま.めかしい    あで.やか    つや.めく    なま.めく",
    english: "glossy, luster, glaze, polish, charm, colorful, captivating ",
  },
  {
    kanji: "旺",
    kana: "オウ    キョウ    ゴウ    かがや.き    うつくし.い    さかん",
    english: "flourishing, successful, beautiful, vigorous ",
  },
  {
    kanji: "岡",
    kana: "コウ    おか",
    english: "mount, hill, knoll ",
  },
  {
    kanji: "臆",
    kana: "オク    ヨク    むね    おくする",
    english: "timidity, heart, mind, fear, cowardly ",
  },
  {
    kanji: "俺",
    kana: "エン    おれ    われ",
    english: "I, myself ",
  },
  {
    kanji: "苛",
    kana: "カ    いじ.める    さいな.む    いらだ.つ    からい    こまかい",
    english: "torment, scold, chastise ",
  },
  {
    kanji: "牙",
    kana: "ガ    ゲ    きば    は    きばへん",
    english: "tusk, fang ",
  },
  {
    kanji: "崖",
    kana: "ガイ    ゲ    ギ    がけ    きし    はて",
    english: "cliff, bluff, precipice ",
  },
  {
    kanji: "蓋",
    kana: "ガイ    カイ    コウ    ふた    けだ.し    おお.う    かさ    かこう",
    english: "cover, lid, flap ",
  },
  {
    kanji: "骸",
    kana: "ガイ    カイ    むくろ",
    english: "bone, body, corpse ",
  },
  {
    kanji: "柿",
    kana: "シ    かき    こけら",
    english: "persimmon, shingle ",
  },
  {
    kanji: "顎",
    kana: "ガク    あご    あぎと",
    english: "jaw, chin, gill ",
  },
  {
    kanji: "葛",
    kana: "カツ    カチ    つづら    くず",
    english: "arrowroot, kudzu ",
  },
  {
    kanji: "釜",
    kana: "フ    かま",
    english: "kettle, cauldron, iron pot ",
  },
  {
    kanji: "鎌",
    kana: "レン    ケン    かま",
    english: "sickle, scythe, trick ",
  },
  {
    kanji: "瓦",
    kana: "ガ    かわら    ぐらむ",
    english: "tile, gram ",
  },
  {
    kanji: "韓",
    kana: "カン    から    いげた",
    english: "Korea ",
  },
  {
    kanji: "玩",
    kana: "ガン    もちあそ.ぶ    もてあそ.ぶ",
    english: "play, take pleasure in, trifle with, make sport of ",
  },
  {
    kanji: "伎",
    kana: "ギ    キ    わざ    わざおぎ",
    english: "deed, skill ",
  },
  {
    kanji: "畿",
    kana: "キ    みやこ",
    english: "capital, suburbs of capital ",
  },
  {
    kanji: "亀",
    kana: "キ    キュウ    キン    かめ",
    english: "tortoise, turtle ",
  },
  {
    kanji: "僅",
    kana: "キン    ゴン    わずか",
    english: "a wee bit ",
  },
  {
    kanji: "巾",
    kana: "キン    フク    おお.い    ちきり    きれ    はば",
    english: "towel, hanging scroll, width ",
  },
  {
    kanji: "錦",
    kana: "キン    にしき",
    english: "brocade, fine dress, honors ",
  },
  {
    kanji: "駒",
    kana: "ク    こま",
    english: "pony, horse, colt ",
  },
  {
    kanji: "串",
    kana: "カン    ケン    セン    くし    つらぬ.く",
    english: "shish kebab, spit, skewer ",
  },
  {
    kanji: "窟",
    kana: "クツ    コツ    いわや    いはや    あな",
    english: "cavern ",
  },
  {
    kanji: "熊",
    kana: "ユウ    くま",
    english: "bear ",
  },
  {
    kanji: "稽",
    kana: "ケイ    かんが.える    とど.める",
    english: "think, consider, quarrel ",
  },
  {
    kanji: "詣",
    kana: "ケイ    ゲイ    けい.する    まい.る    いた.る    もう.でる",
    english: "visit a temple ",
  },
  {
    kanji: "隙",
    kana: "ゲキ    キャク    ケキ    すき    す.く    す.かす    ひま",
    english: "crevice, fissure, discord, opportunity, leisure, also N5013 ",
  },
  {
    kanji: "桁",
    kana: "コウ    けた",
    english: "beam, girder, spar, unit or column (accounting) ",
  },
  {
    kanji: "拳",
    kana: "ケン    ゲン    こぶし",
    english: "fist ",
  },
  {
    kanji: "鍵",
    kana: "ケン    かぎ",
    english: "key ",
  },
  {
    kanji: "舷",
    kana: "ゲン    ふなべい    ふなばた",
    english: "gunwale ",
  },
  {
    kanji: "股",
    kana: "コ    また    もも",
    english: "thigh, crotch, yarn, strand ",
  },
  {
    kanji: "虎",
    kana: "コ    とら",
    english: "tiger, drunkard ",
  },
  {
    kanji: "乞",
    kana: "コツ    キツ    キ    キケ    コチ    こ.う",
    english: "beg, invite, ask ",
  },
  {
    kanji: "勾",
    kana: "コウ    ク    かぎ    ま.がる",
    english: "be bent, slope, capture ",
  },
  {
    kanji: "喉",
    kana: "コウ    のど",
    english: "throat, voice ",
  },
  {
    kanji: "梗",
    kana: "コウ    キョウ    ふさぐ    やまにれ    おおむね",
    english: "for the most part, close up ",
  },
  {
    kanji: "頃",
    kana: "ケイ    キョウ    ころ    ごろ    しばら.く",
    english: "time, about, toward ",
  },
  {
    kanji: "痕",
    kana: "コン    あと",
    english: "mark, foot print ",
  },
  {
    kanji: "沙",
    kana: "サ    シャ    すな    よなげる",
    english: "sand ",
  },
  {
    kanji: "挫",
    kana: "ザ    サ    くじ.く    くじ.ける",
    english: "crush, break, sprain, discourage ",
  },
  {
    kanji: "塞",
    kana: "ソク    サイ    ふさ.ぐ    とりで    み.ちる",
    english: "close, shut, cover, block, obstruct ",
  },
  {
    kanji: "采",
    kana: "サイ    と.る    いろどり",
    english: "dice, form, appearance, take, coloring ",
  },
  {
    kanji: "阪",
    kana: "ハン    さか",
    english: "heights, slope ",
  },
  {
    kanji: "埼",
    kana: "キ    さき    さい    みさき",
    english: "cape, spit, promontory ",
  },
  {
    kanji: "柵",
    kana: "サク    サン    しがら.む    しがらみ    とりで    やらい",
    english: "stockade, fence, wier, entwine around ",
  },
  {
    kanji: "拶",
    kana: "サツ    せま.る",
    english: "be imminent ",
  },
  {
    kanji: "斬",
    kana: "ザン    サン    セン    ゼン    き.る",
    english: "beheading, kill, murder ",
  },
  {
    kanji: "鹿",
    kana: "ロク    しか    か",
    english: "deer ",
  },
  {
    kanji: "叱",
    kana: "シツ    シチ    しか.る",
    english: "scold, reprove ",
  },
  {
    kanji: "嫉",
    kana: "シツ    そね.む    ねた.む    にく.む",
    english: "jealous, envy ",
  },
  {
    kanji: "腫",
    kana: "シュ    ショウ    は.れる    は.れ    は.らす    く.む    はれもの",
    english: "tumor, swelling ",
  },
  {
    kanji: "呪",
    kana: "ジュ    シュ    シュウ    まじな.う    のろ.い    まじな.い    のろ.う",
    english: "spell, curse, charm, malediction ",
  },
  {
    kanji: "蹴",
    kana: "シュク    シュウ    け.る",
    english: "kick ",
  },
  {
    kanji: "拭",
    kana: "ショク    シキ    ぬぐ.う    ふ.く",
    english: "wipe, mop, swab ",
  },
  {
    kanji: "尻",
    kana: "コウ    しり",
    english: "buttocks, hips, butt, rear ",
  },
  {
    kanji: "芯",
    kana: "シン",
    english: "wick ",
  },
  {
    kanji: "腎",
    kana: "ジン",
    english: "kidney ",
  },
  {
    kanji: "須",
    kana: "ス    シュ    すべから.く    すべし    ひげ    まつ    もち.いる    もと.める",
    english: "ought, by all means, necessarily ",
  },
  {
    kanji: "裾",
    kana: "キョ    コ    すそ",
    english: "cuff, hem, foot of mountain ",
  },
  {
    kanji: "凄",
    kana: "セイ    サイ    さむ.い    すご.い    すさ.まじい",
    english: "uncanny, weird, threatening, horrible ",
  },
  {
    kanji: "醒",
    kana: "セイ    さ.ます    さ.める",
    english: "awake, be disillusioned, sober up ",
  },
  {
    kanji: "戚",
    kana: "ソク    セキ    いた.む    うれ.える    みうち",
    english: "grieve ",
  },
  {
    kanji: "脊",
    kana: "セキ    せ    せい",
    english: "stature, height ",
  },
  {
    kanji: "煎",
    kana: "セン    せん.じる    い.る    に.る",
    english: "broil, parch, roast, boil ",
  },
  {
    kanji: "羨",
    kana: "セン    エン    うらや.む    あまり",
    english: "envious, be jealous, covet ",
  },
  {
    kanji: "腺",
    kana: "セン",
    english: "gland ",
  },
  {
    kanji: "詮",
    kana: "セン    せん.ずる    かい    あき.らか",
    english: "discussion, methods called for, selection, result ",
  },
  {
    kanji: "膳",
    kana: "ゼン    セン    かしわ    すす.める    そな.える",
    english: "small low table, tray ",
  },
  {
    kanji: "曽",
    kana: "ソウ    ソ    ゾウ    かつ    かつて    すなわち",
    english: "formerly, once, before, ever, never, ex- ",
  },
  {
    kanji: "狙",
    kana: "ソ    ショ    ねら.う    ねら.い",
    english: "aim at, sight, shadow, stalk ",
  },
  {
    kanji: "遡",
    kana: "ソ    サク    さかのぼ.る",
    english: "go upstream, retrace the past ",
  },
  {
    kanji: "爽",
    kana: "ソウ    あき.らか    さわ.やか    たがう",
    english: "refreshing, bracing, resonant, sweet, clear ",
  },
  {
    kanji: "痩",
    kana: "ソウ    チュウ    シュウ    シュ    や.せる",
    english: "get thin ",
  },
  {
    kanji: "捉",
    kana: "ソク    サク    とら.える",
    english: "catch, capture ",
  },
  {
    kanji: "袖",
    kana: "シュウ    そで",
    english: "sleeve, wing (building), extension, give cold shoulder ",
  },
  {
    kanji: "遜",
    kana: "ソン    したが.う    へりくだ.る    ゆず.る",
    english: "humble, modest ",
  },
  {
    kanji: "汰",
    kana: "タ    タイ    おご.る    にご.る    よな.げる",
    english: "luxury, select ",
  },
  {
    kanji: "唾",
    kana: "ダ    タ    つば    つばき",
    english: "saliva, sputum ",
  },
  {
    kanji: "堆",
    kana: "タイ    ツイ    うずたか.い",
    english: "piled high ",
  },
  {
    kanji: "戴",
    kana: "タイ    いただ.く",
    english: "be crowned with, live under (a ruler), receive ",
  },
  {
    kanji: "誰",
    kana: "スイ    だれ    たれ    た",
    english: "who, someone, somebody ",
  },
  {
    kanji: "旦",
    kana: "タン    ダン    あき.らか    あきら    ただし    あさ    あした",
    english: "nightbreak, dawn, morning ",
  },
  {
    kanji: "綻",
    kana: "タン    ほころ.びる",
    english: "be rent, ripped, unravel, run, begin to open, smile ",
  },
  {
    kanji: "酎",
    kana: "チュウ    チュ    かも.す",
    english: "sake ",
  },
  {
    kanji: "捗",
    kana: "チョク    ホ    はかど.る",
    english: "make progress ",
  },
  {
    kanji: "椎",
    kana: "ツイ    スイ    つち    う.つ",
    english: "oak, mallet ",
  },
  {
    kanji: "潰",
    kana: "カイ    エ    つぶ.す    つぶ.れる    つい.える",
    english: "crush, smash, break, dissipate ",
  },
  {
    kanji: "爪",
    kana: "ソウ    つめ    つま-",
    english: "claw, nail, talon ",
  },
  {
    kanji: "鶴",
    kana: "カク    つる",
    english: "crane, stork ",
  },
  {
    kanji: "諦",
    kana: "テイ    タイ    あき.らめる    あきら.める    つまびらか    まこと",
    english: "abandon, give up ",
  },
  {
    kanji: "溺",
    kana: "デキ    ジョウ    ニョウ    いばり    おぼ.れる",
    english: "drown, indulge ",
  },
  {
    kanji: "填",
    kana: "テン    チン    は.まる    は.める    うず.める    しず.める    ふさ.ぐ",
    english: "fill in ",
  },
  {
    kanji: "貼",
    kana: "テン    チョウ    は.る    つ.く",
    english: "stick, paste, apply ",
  },
  {
    kanji: "妬",
    kana: "ト    ツ    ねた.む    そね.む    つも.る    ふさ.ぐ",
    english: "jealous, envy ",
  },
  {
    kanji: "賭",
    kana: "ト    か.ける    かけ",
    english: "gamble, wager, bet ",
  },
  {
    kanji: "藤",
    kana: "トウ    ドウ    ふじ",
    english: "wisteria ",
  },
  {
    kanji: "憧",
    kana: "ショウ    トウ    ドウ    あこが.れる",
    english: "yearn after, long for, aspire to, admire, adore ",
  },
  {
    kanji: "瞳",
    kana: "ドウ    トウ    ひとみ",
    english: "pupil ",
  },
  {
    kanji: "栃",
    kana: "とち",
    english: "horse chestnut, (kokuji) ",
  },
  {
    kanji: "頓",
    kana: "トン    トツ    にわか.に    とん.と    つまず.く    とみ.に    ぬかずく",
    english: "suddenly, immediately, in a hurry ",
  },
  {
    kanji: "奈",
    kana: "ナ    ナイ    ダイ    いかん    からなし",
    english: "Nara, what? ",
  },
  {
    kanji: "那",
    kana: "ナ    ダ    なに    なんぞ    いかん",
    english: "what? ",
  },
  {
    kanji: "謎",
    kana: "メイ    ベイ    なぞ",
    english: "riddle, puzzle, enigma, hint, tip ",
  },
  {
    kanji: "鍋",
    kana: "カ    なべ",
    english: "pot, pan, kettle ",
  },
  {
    kanji: "匂",
    kana: "にお.う    にお.い    にお.わせる",
    english: "fragrant, stink, glow, insinuate, (kokuji) ",
  },
  {
    kanji: "虹",
    kana: "コウ    にじ",
    english: "rainbow ",
  },
  {
    kanji: "捻",
    kana: "ネン    ジョウ    ね.じる    ねじ.る    ひね.くる    ひね.る",
    english: "twirl, twist, play with ",
  },
  {
    kanji: "罵",
    kana: "バ    ののし.る",
    english: "abuse, insult ",
  },
  {
    kanji: "剥",
    kana: "ハク    ホク    へ.ぐ    へず.る    む.く    む.ける    は.がれる    は.ぐ    は.げる    は.がす",
    english: "come off, peel, fade, discolor ",
  },
  {
    kanji: "箸",
    kana: "チョ    チャク    はし",
    english: "chopsticks ",
  },
  {
    kanji: "斑",
    kana: "ハン    ふ    まだら",
    english: "spot, blemish, speck, patches ",
  },
  {
    kanji: "氾",
    kana: "ハン    ひろ.がる",
    english: "spread out, wide ",
  },
  {
    kanji: "汎",
    kana: "ハン    ブ    フウ    ホウ    ホン    ただよ.う    ひろ.い",
    english: "pan- ",
  },
  {
    kanji: "眉",
    kana: "ビ    ミ    まゆ",
    english: "eyebrow ",
  },
  {
    kanji: "膝",
    kana: "シツ    ひざ",
    english: "knee, lap ",
  },
  {
    kanji: "肘",
    kana: "チュウ    ひじ",
    english: "elbow, arm ",
  },
  {
    kanji: "媛",
    kana: "エン    ひめ",
    english: "beautiful woman, princess ",
  },
  {
    kanji: "阜",
    kana: "フ    フウ",
    english: "hill, mound, left village radical (no. 170) ",
  },
  {
    kanji: "蔽",
    kana: "ヘイ    ヘツ    フツ    おお.う    おお.い",
    english: "cover, shade, mantle, capsize, be ruined ",
  },
  {
    kanji: "蔑",
    kana: "ベツ    ないがしろ    なみ.する    くらい    さげす.む",
    english: "ignore, despise, neglect, ridicule ",
  },
  {
    kanji: "蜂",
    kana: "ホウ    はち",
    english: "bee, wasp, hornet ",
  },
  {
    kanji: "貌",
    kana: "ボウ    バク    かたち    かたどる",
    english: "form, appearance, countenance ",
  },
  {
    kanji: "頬",
    kana: "キョウ    ほお    ほほ",
    english: "cheek ",
  },
  {
    kanji: "睦",
    kana: "ボク    モク    むつ.まじい    むつ.む    むつ.ぶ",
    english: "intimate, friendly, harmonious ",
  },
  {
    kanji: "勃",
    kana: "ボツ    ホツ    おこ.る    にわかに",
    english: "suddenness, rise ",
  },
  {
    kanji: "昧",
    kana: "マイ    バイ    くら.い    むさぼ.る",
    english: "dark, foolish ",
  },
  {
    kanji: "枕",
    kana: "チン    シン    まくら",
    english: "pillow ",
  },
  {
    kanji: "蜜",
    kana: "ミツ    ビツ",
    english: "honey, nectar, molasses ",
  },
  {
    kanji: "冥",
    kana: "メイ    ミョウ    くら.い",
    english: "dark ",
  },
  {
    kanji: "麺",
    kana: "メン    ベン    むぎこ",
    english: "noodles, wheat flour ",
  },
  {
    kanji: "餅",
    kana: "ヘイ    ヒョウ    もち    もちい",
    english: "mochi rice cake ",
  },
  {
    kanji: "冶",
    kana: "ヤ    い.る",
    english: "melting, smelting ",
  },
  {
    kanji: "弥",
    kana: "ミ    ビ    いや    や    あまねし    いよいよ    とおい    ひさし    ひさ.しい    わた.る",
    english: "all the more, increasingly ",
  },
  {
    kanji: "湧",
    kana: "ユウ    ヨウ    ユ    わ.く",
    english: "boil, ferment, seethe, uproar, breed ",
  },
  {
    kanji: "妖",
    kana: "ヨウ    あや.しい    なま.めく    わざわ.い",
    english: "attractive, bewitching, calamity ",
  },
  {
    kanji: "沃",
    kana: "ヨウ    ヨク    オク    そそ.ぐ",
    english: "fertility ",
  },
  {
    kanji: "嵐",
    kana: "ラン    あらし",
    english: "storm, tempest ",
  },
  {
    kanji: "藍",
    kana: "ラン    あい",
    english: "indigo ",
  },
  {
    kanji: "梨",
    kana: "リ    なし",
    english: "pear tree ",
  },
  {
    kanji: "璃",
    kana: "リ",
    english: "glassy, lapis lazuli ",
  },
  {
    kanji: "侶",
    kana: "リョ    ロ    とも",
    english: "companion, follower ",
  },
  {
    kanji: "瞭",
    kana: "リョウ    あきらか",
    english: "clear ",
  },
  {
    kanji: "瑠",
    kana: "ル    リュウ",
    english: "lapis lazuli ",
  },
  {
    kanji: "呂",
    kana: "ロ    リョ    せぼね",
    english: "spine, backbone ",
  },
  {
    kanji: "賂",
    kana: "ロ    まいな.い    まいな.う",
    english: "bribe ",
  },
  {
    kanji: "弄",
    kana: "ロウ    ル    いじく.る    ろう.する    いじ.る    ひねく.る    たわむ.れる    もてあそ.ぶ",
    english: "play with, tamper, trifle with ",
  },
  {
    kanji: "麓",
    kana: "ロク    ふもと",
    english: "foot of a mountain ",
  },
  {
    kanji: "脇",
    kana: "キョウ    わき    わけ",
    english: "armpit, the other way, another place, flank, supporting role ",
  },
  {
    kanji: "丼",
    kana: "トン    タン    ショウ    セイ    どんぶり",
    english: "bowl, bowl of food ",
  },
  {
    kanji: "傲",
    kana: "ゴウ    おご.る    あなど.る",
    english: "be proud ",
  },
  {
    kanji: "刹",
    kana: "セチ    セツ    サツ",
    english: "temple ",
  },
  {
    kanji: "哺",
    kana: "ホ    はぐく.む    ふく.む",
    english: "nurse, suckle ",
  },
  {
    kanji: "喩",
    kana: "ユ    たと.える    さと.す",
    english: "metaphor ",
  },
  {
    kanji: "嗅",
    kana: "キュウ    か.ぐ",
    english: "smell, sniff, scent ",
  },
  {
    kanji: "嘲",
    kana: "チョウ    トウ    あざけ.る",
    english: "ridicule, insult ",
  },
  {
    kanji: "毀",
    kana: "キ    こぼ.つ    こわ.す    こぼ.れる    こわ.れる    そし.る    やぶ.る",
    english:
  "break, destroy, censure, be chipped, be scratched, be broken, be ruined ",
  },
  {
    kanji: "彙",
    kana: "イ    はりねずみ",
    english: "same kind ",
  },
  {
    kanji: "恣",
    kana: "シ    ほしいまま",
    english: "selfish, arbitrary ",
  },
  {
    kanji: "惧",
    kana: "ク    おそ.れる",
    english: "fear, be afraid of, dread ",
  },
  {
    kanji: "慄",
    kana: "リツ    ふる.える    おそ.れる    おのの.く",
    english: "fear ",
  },
  {
    kanji: "憬",
    kana: "ケイ    あこが.れる",
    english: "yearn for, aspire to, admire ",
  },
  {
    kanji: "拉",
    kana: "ラツ    ラ    ロウ    らっ.する    ひし.ぐ    くだ.く",
    english: "Latin, kidnap, crush ",
  },
  {
    kanji: "摯",
    kana: "シ    いた.る",
    english: "gift, seriousness ",
  },
  {
    kanji: "曖",
    kana: "アイ    くら.い",
    english: "dark, not clear ",
  },
  {
    kanji: "楷",
    kana: "カイ",
    english: "square character style, correctness ",
  },
  {
    kanji: "鬱",
    kana: "ウツ    うっ.する    ふさ.ぐ    しげ.る",
    english: "gloom, depression, melancholy ",
  },
  {
    kanji: "璧",
    kana: "ヘキ    たま",
    english: "sphere, ball ",
  },
  {
    kanji: "瘍",
    kana: "ヨウ    かさ",
    english: "boil, carbuncle ",
  },
  {
    kanji: "箋",
    kana: "セン    ふだ",
    english: "paper, label, letter, composition ",
  },
  {
    kanji: "籠",
    kana: "ロウ    ル    かご    こ.める    こも.る    こ.む",
    english: "basket, devote oneself, seclude oneself, cage, coop, implied ",
  },
  {
    kanji: "緻",
    kana: "チ    こまか.い",
    english: "fine (i.e. not coarse) ",
  },
  {
    kanji: "羞",
    kana: "シュウ    はじ.る    すすめ.る",
    english: "feel ashamed ",
  },
  {
    kanji: "訃",
    kana: "フ    しらせ",
    english: "obituary ",
  },
  {
    kanji: "諧",
    kana: "カイ    かな.う    やわ.らぐ",
    english: "harmony ",
  },
  {
    kanji: "貪",
    kana: "タン    トン    むさぼ.る",
    english: "covet, indulge in ",
  },
  {
    kanji: "踪",
    kana: "ソウ    ショウ    あと",
    english: "remains, clue, footprint ",
  },
  {
    kanji: "辣",
    kana: "ラツ    から.い",
    english: "bitter ",
  },
  {
    kanji: "錮",
    kana: "コ    ふさ.ぐ",
    english: "to tie ",
  },
  {
    kanji: "唖",
    kana: "ア    アク    おし",
    english: "mute, dumb ",
  },
  {
    kanji: "娃",
    kana: "ア    アイ    ワ    うつく.しい",
    english: "beautiful ",
  },
  {
    kanji: "阿",
    kana: "ア    オ    おもね.る",
    english: "Africa, flatter, fawn upon, corner, nook, recess ",
  },
  {
    kanji: "姶",
    kana: "オオ    オウ    アイ    あい",
    english: "good-looking, quiet ",
  },
  {
    kanji: "逢",
    kana: "ホウ    あ.う    むか.える",
    english: "meeting, tryst, date, rendezvous ",
  },
  {
    kanji: "葵",
    kana: "キ    あおい",
    english: "hollyhock ",
  },
  {
    kanji: "茜",
    kana: "セン    あかね",
    english: "madder, red dye, Turkey red ",
  },
  {
    kanji: "渥",
    kana: "アク    あつ.い    うるお.う",
    english: "kindness ",
  },
  {
    kanji: "旭",
    kana: "キョク    あさひ",
    english: "rising sun, morning sun ",
  },
  {
    kanji: "葦",
    kana: "イ    しお.れる    しな.びる    しぼ.む    な.える",
    english: "reed, bullrush ",
  },
  {
    kanji: "鯵",
    kana: "ソウ    あじ",
    english: "horse mackerel ",
  },
  {
    kanji: "梓",
    kana: "シ    あずさ",
    english: "catalpa tree ",
  },
  {
    kanji: "斡",
    kana: "アツ    カン    ワツ    めぐ.る    めぐ.らす",
    english: "go around, rule, administer ",
  },
  {
    kanji: "姐",
    kana: "ソ    シャ    あね    ねえさん",
    english: "elder sister, maidservant ",
  },
  {
    kanji: "虻",
    kana: "ボウ    あぶ",
    english: "gadfly, horsefly ",
  },
  {
    kanji: "飴",
    kana: "イ    シ    あめ    やしな.う",
    english: "rice jelly, candy ",
  },
  {
    kanji: "絢",
    kana: "ケン",
    english: "kimono design ",
  },
  {
    kanji: "綾",
    kana: "リン    あや",
    english: "design, figured cloth, twill ",
  },
  {
    kanji: "鮎",
    kana: "デン    ネン    あゆ    なまず",
    english: "freshwater trout, smelt ",
  },
  {
    kanji: "或",
    kana: "ワク    コク    イキ    あ.る    あるい    あるいは",
    english: "some, one, or, possibly, a certain ",
  },
  {
    kanji: "粟",
    kana: "ゾク    ショク    ソク    あわ    もみ",
    english: "millet ",
  },
  {
    kanji: "袷",
    kana: "コウ    キョウ    あわせ",
    english: "lined (kimono) ",
  },
  {
    kanji: "庵",
    kana: "アン    いおり    いお",
    english: "hermitage, retreat ",
  },
  {
    kanji: "按",
    kana: "アン    おさ.える    しら.べる",
    english: "hold, consider, investigate ",
  },
  {
    kanji: "鞍",
    kana: "アン    くら",
    english: "saddle ",
  },
  {
    kanji: "杏",
    kana: "キョウ    アン    コウ    あんず",
    english: "apricot ",
  },
  {
    kanji: "伊",
    kana: "イ    かれ",
    english: "Italy, that one ",
  },
  {
    kanji: "夷",
    kana: "イ    えびす    えみし    ころ.す    たい.らげる",
    english: "barbarian, savage, Ainu ",
  },
  {
    kanji: "惟",
    kana: "イ    ユイ    おも.んみる    これ    おも.うに",
    english: "consider, reflect, think ",
  },
  {
    kanji: "謂",
    kana: "イ    い.う    いい    おも.う    いわゆる",
    english: "reason, origin, history, oral tradition ",
  },
  {
    kanji: "亥",
    kana: "ガイ    カイ    い",
    english: "sign of the hog, 9-11PM, twelfth sign of the Chinese zodiac ",
  },
  {
    kanji: "郁",
    kana: "イク",
    english: "cultural progress, perfume ",
  },
  {
    kanji: "磯",
    kana: "キ    いそ",
    english: "seashore, beach ",
  },
  {
    kanji: "溢",
    kana: "イツ    こぼ.れる    あふ.れる    み.ちる",
    english: "overflow, inundate, spill ",
  },
  {
    kanji: "鰯",
    kana: "いわし",
    english: "sardine, (kokuji) ",
  },
  {
    kanji: "允",
    kana: "イン    じょう    まこと.に    ゆるす",
    english: "license, sincerity, permit ",
  },
  {
    kanji: "胤",
    kana: "イン    たね",
    english: "descendent, issue, offspring ",
  },
  {
    kanji: "蔭",
    kana: "イン    オン    かげ",
    english: "shade, shadow, backing assistance ",
  },
  {
    kanji: "吋",
    kana: "トウ    ドウ    スン    いんち",
    english: "inch ",
  },
  {
    kanji: "烏",
    kana: "ウ    オ    からす    いずくんぞ    なんぞ",
    english: "crow, raven ",
  },
  {
    kanji: "迂",
    kana: "ウ",
    english: "roundabout way ",
  },
  {
    kanji: "卯",
    kana: "ボウ    モウ    う",
    english:
  "sign of the hare or rabbit, 5-7AM, fourth sign of Chinese zodiac, east ",
  },
  {
    kanji: "鵜",
    kana: "テイ    ダイ    う",
    english: "cormorant ",
  },
  {
    kanji: "窺",
    kana: "キ    うかが.う    のぞく",
    english: "lie in wait, spy on, reconnoiter ",
  },
  {
    kanji: "丑",
    kana: "チュウ    うし",
    english: "sign of the ox or cow, 1-3AM, second sign of Chinese zodiac ",
  },
  {
    kanji: "碓",
    kana: "カク    タイ    たし.か    かく.たる",
    english: "pestle ",
  },
  {
    kanji: "嘘",
    kana: "キョ    コ    うそ    ふ.く",
    english: "lie, falsehood ",
  },
  {
    kanji: "蔚",
    kana: "ウツ    イ    うち    おとこよもぎ",
    english: "dense growth ",
  },
  {
    kanji: "鰻",
    kana: "マン    バン    うなぎ",
    english: "eel ",
  },
  {
    kanji: "姥",
    kana: "ボ    モ    うば",
    english: "old woman ",
  },
  {
    kanji: "厩",
    kana: "キュウ    うまや",
    english: "barn, stable ",
  },
  {
    kanji: "瓜",
    kana: "カ    ケ    うり",
    english: "melon ",
  },
  {
    kanji: "閏",
    kana: "ジュン    うるう",
    english: "intercalation, illegitimate throne ",
  },
  {
    kanji: "噂",
    kana: "ソン    うわさ",
    english: "rumor, gossip, hearsay ",
  },
  {
    kanji: "云",
    kana: "ウン    い.う    ここに",
    english: "say ",
  },
  {
    kanji: "荏",
    kana: "ジン    ニン",
    english: "bean ",
  },
  {
    kanji: "叡",
    kana: "エイ    あき.らか",
    english: "intelligence, imperial ",
  },
  {
    kanji: "嬰",
    kana: "エイ    ふ.れる    みどりご    あかご",
    english: "sharp (music), baby ",
  },
  {
    kanji: "曳",
    kana: "エイ    ひ.く",
    english: "pull, tug, jerk, admit, install, quote, refer to ",
  },
  {
    kanji: "洩",
    kana: "エイ    セツ    も.らす    の.びる    も.れる",
    english: "leak, escape ",
  },
  {
    kanji: "瑛",
    kana: "エイ",
    english: "sparkle of jewelry, crystal ",
  },
  {
    kanji: "盈",
    kana: "エイ    み.たす    み.ちる",
    english: "fullness, enough, pride, satisfy ",
  },
  {
    kanji: "穎",
    kana: "エイ    ほさき    のぎ",
    english: "heads of grain, cleverness ",
  },
  {
    kanji: "榎",
    kana: "カ    えのき",
    english: "lotus tree ",
  },
  {
    kanji: "厭",
    kana: "エン    オン    アン    オウ    ユウ    ヨウ    いや    あ.きる    いと.う    おさ.える",
    english: "get tired of, satiate, bore ",
  },
  {
    kanji: "堰",
    kana: "エン    せき    せ.く",
    english: "dam, prevent, stop up ",
  },
  {
    kanji: "奄",
    kana: "エン    おお.う    たちまち",
    english: "cover ",
  },
  {
    kanji: "掩",
    kana: "エン    おお.う",
    english: "cover, conceal ",
  },
  {
    kanji: "焔",
    kana: "エン    ほのお",
    english: "flame, blaze ",
  },
  {
    kanji: "燕",
    kana: "エン    つばめ    つばくら    つばくろ",
    english: "swallow (bird) ",
  },
  {
    kanji: "苑",
    kana: "エン    オン    その    う.つ",
    english: "garden, farm, park ",
  },
  {
    kanji: "薗",
    kana: "エン    オン",
    english: "garden, yard, farm ",
  },
  {
    kanji: "鴛",
    kana: "エン    オン    おし    おしどり",
    english: "male mandarin duck ",
  },
  {
    kanji: "於",
    kana: "オ    ヨ    おい.て    お.ける    ああ    より",
    english: "at, in, on, as for ",
  },
  {
    kanji: "甥",
    kana: "セイ    ソウ    ショウ    おい    むこ",
    english: "nephew ",
  },
  {
    kanji: "襖",
    kana: "オウ    ふすま    あお",
    english: "opaque sliding door ",
  },
  {
    kanji: "鴬",
    kana: "オウ    うぐいす",
    english: "nightingale, bush warbler ",
  },
  {
    kanji: "鴎",
    kana: "オウ    かもめ",
    english: "seagull ",
  },
  {
    kanji: "荻",
    kana: "テキ    おぎ",
    english: "reed ",
  },
  {
    kanji: "桶",
    kana: "ヨウ    トウ    おけ",
    english: "tub, bucket ",
  },
  {
    kanji: "牡",
    kana: "ボ    ボウ    おす    お-    おん-",
    english: "male ",
  },
  {
    kanji: "伽",
    kana: "カ    ガ    キャ    ギャ    とぎ",
    english: "nursing, attending, entertainer ",
  },
  {
    kanji: "嘉",
    kana: "カ    よみ.する    よい",
    english: "applaud, praise, esteem ",
  },
  {
    kanji: "珂",
    kana: "カ",
    english: "jewel ",
  },
  {
    kanji: "禾",
    kana: "カ    いね    のぎ    のぎへん",
    english: "2-branch tree ",
  },
  {
    kanji: "茄",
    kana: "カ",
    english: "eggplant ",
  },
  {
    kanji: "蝦",
    kana: "カ    ゲ    えび",
    english: "shrimp, prawn, lobster ",
  },
  {
    kanji: "嘩",
    kana: "カ    ケ    かまびす.しい",
    english: "noisy ",
  },
  {
    kanji: "迦",
    kana: "カ    ケ",
    english: "(used phonetically) ",
  },
  {
    kanji: "霞",
    kana: "カ    ゲ    かすみ    かす.む",
    english: "be hazy, grow dim, blurred ",
  },
  {
    kanji: "俄",
    kana: "ガ    にわか",
    english: "sudden, abrupt, improvised ",
  },
  {
    kanji: "峨",
    kana: "ガ    けわ.しい",
    english: "high mountain ",
  },
  {
    kanji: "臥",
    kana: "ガ    ふせ.る    ふ.せる    ふ.す",
    english: "bend down, bow, lie prostrate ",
  },
  {
    kanji: "蛾",
    kana: "ギ    ガ    ひむし",
    english: "moth ",
  },
  {
    kanji: "駕",
    kana: "カ    ガ    かご    が.する    しのぐ    のる",
    english: "vehicle, palanquin, litter, hitch up an animal ",
  },
  {
    kanji: "廻",
    kana: "カイ    エ    まわ.る    まわ.す    もとお.る    めぐ.る    めぐ.らす",
    english: "round, game, revolve, go around, circumference ",
  },
  {
    kanji: "恢",
    kana: "カイ    ケ    ひろ.い",
    english: "wide, large, enlarge ",
  },
  {
    kanji: "魁",
    kana: "カイ    さきがけ    かしら",
    english: "charging ahead of others ",
  },
  {
    kanji: "晦",
    kana: "カイ    つごもり    くら.い    みそか",
    english: "dark, disappear ",
  },
  {
    kanji: "芥",
    kana: "カイ    ケ    からし    ごみ    あくた",
    english: "mustard, rape, dust, trash, rubbish ",
  },
  {
    kanji: "蟹",
    kana: "カイ    かに",
    english: "crab ",
  },
  {
    kanji: "凱",
    kana: "ガイ    カイ    かちどき    やわらぐ",
    english: "victory song ",
  },
  {
    kanji: "咳",
    kana: "カイ    ガイ    せ.く    しわぶ.く    せき    しわぶき",
    english: "cough, clear throat ",
  },
  {
    kanji: "碍",
    kana: "ガイ    ゲ    さまた.げる",
    english: "obstacle ",
  },
  {
    kanji: "鎧",
    kana: "カイ    ガイ    よろ.う    よろい",
    english: "put on armor, arm oneself ",
  },
  {
    kanji: "浬",
    kana: "リ    かいり    のっと",
    english: "knot, nautical mile ",
  },
  {
    kanji: "馨",
    kana: "ケイ    キョウ    かお.る    かおり",
    english: "fragrant, balmy, favourable ",
  },
  {
    kanji: "蛙",
    kana: "ア    ワ    かえる    かわず",
    english: "frog ",
  },
  {
    kanji: "蛎",
    kana: "レイ    かき",
    english: "oyster ",
  },
  {
    kanji: "劃",
    kana: "カク    わ.かつ    かぎ.る",
    english: "divide ",
  },
  {
    kanji: "廓",
    kana: "カク    くるわ    とりで",
    english: "enclosure, quarter, red-light district ",
  },
  {
    kanji: "撹",
    kana: "カク    コウ    みだ.す",
    english: "disturb, throw into confusion ",
  },
  {
    kanji: "赫",
    kana: "カク    あかい    あか    かがや.く",
    english: "suddenly ",
  },
  {
    kanji: "笠",
    kana: "リュウ    かさ",
    english: "bamboo hat, one's influence ",
  },
  {
    kanji: "樫",
    kana: "かし",
    english: "evergreen oak, (kokuji) ",
  },
  {
    kanji: "橿",
    kana: "キョウ    かし    もちのき",
    english: "oak ",
  },
  {
    kanji: "梶",
    kana: "ビ    かじ    こずえ",
    english: "sculling oar ",
  },
  {
    kanji: "鰍",
    kana: "シュウ    シュ    かじか    いなだ    どじょう",
    english: "bullhead ",
  },
  {
    kanji: "恰",
    kana: "コウ    カッ    チョウ    キョウ    あたか.も",
    english: "just as, as though, fortunately ",
  },
  {
    kanji: "鰹",
    kana: "ケン    かつお",
    english: "bonito ",
  },
  {
    kanji: "叶",
    kana: "キョウ    かな.える    かな.う",
    english: "grant, answer ",
  },
  {
    kanji: "椛",
    kana: "かば    もみじ",
    english: "birch, maple ",
  },
  {
    kanji: "樺",
    kana: "カ    かば    かんば",
    english: "birch ",
  },
  {
    kanji: "鞄",
    kana: "ハク    ホウ    ビョウ    かばん",
    english: "suitcase, bag, briefcase ",
  },
  {
    kanji: "兜",
    kana: "トウ    ト    かぶと",
    english: "helmet, head piece ",
  },
  {
    kanji: "竃",
    kana: "ソウ    かまど    かま    へっつい",
    english: "kitchen stove, furnace, oven, hearth ",
  },
  {
    kanji: "蒲",
    kana: "ホ    ボ    フ    ブ    がま    かば    かま",
    english: "bullrush, flag, cattail ",
  },
  {
    kanji: "噛",
    kana: "コウ    ゴウ    か.む    か.じる",
    english: "chew, bite, gnaw ",
  },
  {
    kanji: "鴨",
    kana: "オウ    かも    あひる",
    english: "wild duck, easy mark ",
  },
  {
    kanji: "茅",
    kana: "ボウ    ミョウ    かや    ちがや",
    english: "miscanthus reed ",
  },
  {
    kanji: "萱",
    kana: "ケン    かや    かんぞう",
    english: "miscanthus reed ",
  },
  {
    kanji: "粥",
    kana: "イク    シュク    ジュク    かゆ    かい    ひさ.ぐ",
    english: "rice gruel ",
  },
  {
    kanji: "苅",
    kana: "ガイ    カイ    か.る",
    english: "cutting (grass) ",
  },
  {
    kanji: "侃",
    kana: "カン    つよ.い",
    english: "strong, just, righteous, peace-loving ",
  },
  {
    kanji: "姦",
    kana: "カン    ケン    かん.する    かしま.しい    みだら",
    english: "wicked, mischief, seduce, rape, noisy ",
  },
  {
    kanji: "柑",
    kana: "コン    カン",
    english: "citrus, orange ",
  },
  {
    kanji: "桓",
    kana: "カン",
    english: "marking post ",
  },
  {
    kanji: "澗",
    kana: "カン    ケン    たに    たにみず",
    english: "valley river, 10**36 ",
  },
  {
    kanji: "潅",
    kana: "カン    そそ.ぐ",
    english: "pour into, irrigate, shed (tears, flow into, concentrate on ",
  },
  {
    kanji: "竿",
    kana: "カン    さお",
    english: "pole, rod, scale beam, violin neck ",
  },
  {
    kanji: "翰",
    kana: "カン    はね    ふで    やまどり    ふみ",
    english: "letter, writing brush ",
  },
  {
    kanji: "莞",
    kana: "カン    い",
    english: "reed used to cover tatami ",
  },
  {
    kanji: "諌",
    kana: "カン    いさ.め    いさ.める",
    english: "admonish, dissuade ",
  },
  {
    kanji: "舘",
    kana: "カン    やかた    たて",
    english: "mansion, large building, palace ",
  },
  {
    kanji: "巌",
    kana: "ガン    いわ    いわお    けわ.しい",
    english: "rock, crag, boulder ",
  },
  {
    kanji: "癌",
    kana: "ガン",
    english: "cancer, cancerous evil ",
  },
  {
    kanji: "翫",
    kana: "ガン    もてあそ.ぶ",
    english: "take pleasure in, play instrument ",
  },
  {
    kanji: "贋",
    kana: "ガン    にせ",
    english: "counterfeit, forgery ",
  },
  {
    kanji: "雁",
    kana: "ガン    かり    かりがね",
    english: "wild goose ",
  },
  {
    kanji: "嬉",
    kana: "キ    うれ.しい    たの.しむ",
    english: "glad, pleased, rejoice ",
  },
  {
    kanji: "毅",
    kana: "キ    ギ    つよ.い",
    english: "strong ",
  },
  {
    kanji: "稀",
    kana: "キ    ケ    まれ    まばら",
    english: "rare, phenomenal, dilute (acid) ",
  },
  {
    kanji: "徽",
    kana: "キ    しるし",
    english: "good, beautiful, badge ",
  },
  {
    kanji: "妓",
    kana: "ギ    キ    わざおぎ    うたいめ",
    english: "stretch, singing girl, geisha, prostitute ",
  },
  {
    kanji: "祇",
    kana: "ギ    キ    シ    くにつかみ    ただ    まさに",
    english: "national or local god, peaceful, great ",
  },
  {
    kanji: "蟻",
    kana: "ギ    あり",
    english: "ant ",
  },
  {
    kanji: "誼",
    kana: "ギ    よしみ    よい",
    english: "friendship, intimacy ",
  },
  {
    kanji: "掬",
    kana: "キク    コク    きく.す    むす.ぶ    すく.う    たなごころ",
    english: "scoop up water with the hand ",
  },
  {
    kanji: "鞠",
    kana: "キク    キュウ    まり",
    english: "ball ",
  },
  {
    kanji: "吃",
    kana: "キツ    ども.る",
    english: "stammer ",
  },
  {
    kanji: "桔",
    kana: "キツ    ケツ",
    english: "used in plant names ",
  },
  {
    kanji: "橘",
    kana: "キツ    たちばな",
    english: "mandarin orange ",
  },
  {
    kanji: "砧",
    kana: "チン    きぬた",
    english: "fulling block ",
  },
  {
    kanji: "杵",
    kana: "ショ    ソ    きね",
    english: "wooden pestle ",
  },
  {
    kanji: "黍",
    kana: "ショ    きび",
    english: "millet ",
  },
  {
    kanji: "仇",
    kana: "キュウ    グ    あだ    あた    かたき    つれあい",
    english: "foe, enemy, revenge, grudge, feud ",
  },
  {
    kanji: "汲",
    kana: "キュウ    く.む",
    english: "draw (water), ladle, scoop, pump ",
  },
  {
    kanji: "灸",
    kana: "キュウ    ク    やいと",
    english: "moxa cautery, chastisement ",
  },
  {
    kanji: "笈",
    kana: "キュウ",
    english: "backpack bookcase ",
  },
  {
    kanji: "渠",
    kana: "キョ    かれ    なんぞ    なに    みぞ    いずくんぞ",
    english: "ditch, canal, lock ",
  },
  {
    kanji: "鋸",
    kana: "キョ    コ    のこ    のこぎり",
    english: "saw (cuts wood) ",
  },
  {
    kanji: "禦",
    kana: "ギョ    ゴ    ふせ.ぐ",
    english: "defend, protect, resist, ward off ",
  },
  {
    kanji: "亨",
    kana: "コウ    キョウ    ホウ    たてまつ.る",
    english: "undergo, answer (phone), take, get, catch ",
  },
  {
    kanji: "侠",
    kana: "キョウ    きゃん    おとこだて",
    english: "tomboy, chivalry ",
  },
  {
    kanji: "僑",
    kana: "キョウ",
    english: "temporary home ",
  },
  {
    kanji: "兇",
    kana: "キョウ    おそ.れる    わる.い",
    english: "wickedness ",
  },
  {
    kanji: "匡",
    kana: "キョウ    オウ    すく.う",
    english: "correct, save, assist ",
  },
  {
    kanji: "卿",
    kana: "ケイ    キョウ    きみ",
    english: "you, lord, secretary, state minister ",
  },
  {
    kanji: "喬",
    kana: "キョウ    たか.い",
    english: "high, boasting ",
  },
  {
    kanji: "彊",
    kana: "キョウ    ゴウ    つよ.い",
    english: "strong ",
  },
  {
    kanji: "怯",
    kana: "キョウ    コウ    ひる.む    おびえ.る    おじる    おび.える    おそ.れる",
    english: "cowardice, wince, flinch, hesitate, waver ",
  },
  {
    kanji: "蕎",
    kana: "キョウ    そば",
    english: "buckwheat ",
  },
  {
    kanji: "饗",
    kana: "キョウ    う.ける    もてな.す",
    english: "banquet ",
  },
  {
    kanji: "尭",
    kana: "ギョウ    たか.い",
    english: "high, far ",
  },
  {
    kanji: "桐",
    kana: "トウ    ドウ    きり",
    english: "paulownia ",
  },
  {
    kanji: "粁",
    kana: "キロメートル",
    english: "kilometer, (kokuji) ",
  },
  {
    kanji: "欣",
    kana: "キン    ゴン    コン    よろこ.ぶ    よろこ.び",
    english: "take pleasure in, rejoice ",
  },
  {
    kanji: "欽",
    kana: "キン    コン    つつし.む",
    english: "respect, revere, long for ",
  },
  {
    kanji: "禽",
    kana: "キン    とり    とりこ",
    english: "bird, captive, capture ",
  },
  {
    kanji: "芹",
    kana: "キン    せり",
    english: "parsley ",
  },
  {
    kanji: "衿",
    kana: "キン    コン    えり",
    english: "neck, collar, lapel ",
  },
  {
    kanji: "倶",
    kana: "グ    ク    とも.に",
    english: "both ",
  },
  {
    kanji: "狗",
    kana: "ク    コウ    いぬ",
    english: "puppy, dog ",
  },
  {
    kanji: "玖",
    kana: "キュウ    ク",
    english: "beautiful black jewel, nine ",
  },
  {
    kanji: "矩",
    kana: "ク    かね    かねざし    さしがね",
    english: "ruler, carpenter's square ",
  },
  {
    kanji: "躯",
    kana: "ク    むくろ    からだ",
    english: "body, corpse, tree with rotten core ",
  },
  {
    kanji: "駈",
    kana: "ク    か.ける    か.る",
    english: "run, gallop, advance ",
  },
  {
    kanji: "喰",
    kana: "く.う    く.らう",
    english: "eat, drink, receive (a blow), (kokuji) ",
  },
  {
    kanji: "寓",
    kana: "グウ    グ    ドウ    ぐう.する    かこつ.ける    よ.せる    よ.る    かりずまい",
    english: "temporary abode, keep, imply, suggest ",
  },
  {
    kanji: "櫛",
    kana: "シツ    くし    くしけず.る",
    english: "comb ",
  },
  {
    kanji: "釧",
    kana: "セン    くしろ    うでわ",
    english: "bracelet ",
  },
  {
    kanji: "屑",
    kana: "セツ    くず    いさぎよ.い",
    english: "rubbish, junk, trash, waste, scraps ",
  },
  {
    kanji: "沓",
    kana: "トウ    くつ",
    english: "shoes, boots ",
  },
  {
    kanji: "轡",
    kana: "ヒ    くつわ    たづな",
    english: "bit (horse) ",
  },
  {
    kanji: "窪",
    kana: "ワ    ア    くぼ.む    くぼ.み    くぼ.まる    くぼ",
    english: "depression, cave in, sink, become hollow ",
  },
  {
    kanji: "隈",
    kana: "ワイ    エ    くま    すみ",
    english: "corner, nook, recess ",
  },
  {
    kanji: "粂",
    kana: "くめ",
    english: "used in proper names ",
  },
  {
    kanji: "栗",
    kana: "リツ    リ    くり    おののく",
    english: "chestnut ",
  },
  {
    kanji: "鍬",
    kana: "ショウ    シュウ    くわ    すき",
    english: "hoe with long blade at acute angle ",
  },
  {
    kanji: "卦",
    kana: "カ    カイ    ケ    うらかた",
    english: "a divination sign ",
  },
  {
    kanji: "袈",
    kana: "ケ    カ",
    english: "a coarse camlet ",
  },
  {
    kanji: "祁",
    kana: "キ    ケ",
    english: "intense, large ",
  },
  {
    kanji: "圭",
    kana: "ケイ    ケ",
    english: "square jewel, corner, angle, edge ",
  },
  {
    kanji: "珪",
    kana: "ケイ    たま",
    english: "jade scepter or tablet (authority symbol) ",
  },
  {
    kanji: "慧",
    kana: "ケイ    エ    さとい",
    english: "wise ",
  },
  {
    kanji: "桂",
    kana: "ケイ    かつら",
    english: "Japanese Judas-tree, cinnamon tree ",
  },
  {
    kanji: "畦",
    kana: "ケイ    あぜ    うね",
    english: "rice paddy ridge, furrow, rib ",
  },
  {
    kanji: "繋",
    kana: "ケイ    つな.ぐ    かか.る    か.ける",
    english: "tie, fasten, chain, tether, connect ",
  },
  {
    kanji: "罫",
    kana: "ケイ    カイ    ケ",
    english: "ruled line ",
  },
  {
    kanji: "荊",
    kana: "ケイ    いばら",
    english: "thorn, brier, whip ",
  },
  {
    kanji: "頚",
    kana: "ケイ    くび",
    english: "neck, head ",
  },
  {
    kanji: "戟",
    kana: "ゲキ    ほこ",
    english: "halbert, arms ",
  },
  {
    kanji: "訣",
    kana: "ケツ    わかれ    わかれ.る",
    english: "separation, part, secret ",
  },
  {
    kanji: "倦",
    kana: "ケン    あき.る    あぐ.む    あぐ.ねる    う.む    つか.れる",
    english: "lose interest in, tire of ",
  },
  {
    kanji: "喧",
    kana: "ケン    やかま.しい    かまびす.しい",
    english: "noisy, boisterous ",
  },
  {
    kanji: "捲",
    kana: "ケン    ま.く    ま.くる    まく.る    めく.る    まく.れる",
    english:
  "roll, wind, coil, turn pages, roll up sleeves, strip off, be turned, be rolled up ",
  },
  {
    kanji: "牽",
    kana: "ケン    ひ.く",
    english: "pull, tug, jerk, admit, install, quote, refer to ",
  },
  {
    kanji: "硯",
    kana: "ケン    ゲン    すずり",
    english: "inkstone ",
  },
  {
    kanji: "鹸",
    kana: "ケン    カン    セン    あ.く",
    english: "saltiness ",
  },
  {
    kanji: "絃",
    kana: "ゲン    いと",
    english: "string, cord, samisen music ",
  },
  {
    kanji: "諺",
    kana: "ゲン    ことわざ",
    english: "proverb ",
  },
  {
    kanji: "乎",
    kana: "コ    オ    か    ああ    かな    や    よ    を",
    english: "question mark, ? ",
  },
  {
    kanji: "姑",
    kana: "コ    しゅうとめ    しゅうと    おば    しばらく",
    english: "mother-in-law ",
  },
  {
    kanji: "狐",
    kana: "コ    きつね",
    english: "fox ",
  },
  {
    kanji: "糊",
    kana: "コ    ゴ    コツ    のり",
    english: "paste, glue, sizing ",
  },
  {
    kanji: "袴",
    kana: "コ    ク    はかま    ずぼん",
    english: "men's formal divided skirt ",
  },
  {
    kanji: "胡",
    kana: "ウ    コ    ゴ    なんぞ",
    english: "barbarian, foreign ",
  },
  {
    kanji: "菰",
    kana: "コ    こも    まこも",
    english: "reed used for matting ",
  },
  {
    kanji: "跨",
    kana: "コ    カ    また.がる    またが.る    また.ぐ",
    english: "be, sit or stand astride, extend over, straddle ",
  },
  {
    kanji: "鈷",
    kana: "コ",
    english: "cobalt ",
  },
  {
    kanji: "伍",
    kana: "ゴ    いつつ",
    english: "5, 5-man squad, file, line ",
  },
  {
    kanji: "吾",
    kana: "ゴ    われ    わが-    あ-",
    english: "I, my, our, one's own ",
  },
  {
    kanji: "梧",
    kana: "ゴ    あおぎり",
    english: "Chinese parasol tree, phoenix tree ",
  },
  {
    kanji: "檎",
    kana: "キン    ゴン    ゴ",
    english: "pear, apple ",
  },
  {
    kanji: "瑚",
    kana: "コ    ゴ",
    english: "ancestral offering receptacle ",
  },
  {
    kanji: "醐",
    kana: "ゴ    コ",
    english: "boiled butter ",
  },
  {
    kanji: "鯉",
    kana: "リ    こい",
    english: "carp ",
  },
  {
    kanji: "佼",
    kana: "キョウ    コウ    こう.す    うつく.しい",
    english: "beautiful, clever, deceive, sly ",
  },
  {
    kanji: "倖",
    kana: "コウ    しあわ.せ    さいわ.い",
    english: "happiness, luck ",
  },
  {
    kanji: "垢",
    kana: "コウ    ク    あか    はじ",
    english: "dirt, grime, earwax ",
  },
  {
    kanji: "宏",
    kana: "コウ    ひろ.い",
    english: "wide, large ",
  },
  {
    kanji: "巷",
    kana: "コウ    ちまた",
    english: "fork in road, scene, arena, theater ",
  },
  {
    kanji: "庚",
    kana: "コウ    かのえ",
    english: "7th, 7th calendar sign ",
  },
  {
    kanji: "弘",
    kana: "コウ    グ    ひろ.い",
    english: "vast, broad, wide ",
  },
  {
    kanji: "昂",
    kana: "コウ    ゴウ    あ.がる    たか.い    たか.ぶる",
    english: "rise ",
  },
  {
    kanji: "晃",
    kana: "コウ    あきらか",
    english: "clear ",
  },
  {
    kanji: "杭",
    kana: "コウ    くい",
    english: "stake, post, picket ",
  },
  {
    kanji: "浩",
    kana: "コウ    おおき.い    ひろ.い",
    english: "wide expanse, abundance, vigorous ",
  },
  {
    kanji: "糠",
    kana: "コウ    ぬか",
    english: "rice bran ",
  },
  {
    kanji: "紘",
    kana: "コウ    おおづな    つな    つなぐ",
    english: "large ",
  },
  {
    kanji: "肱",
    kana: "コウ    かいな    ひじ    まるい",
    english: "ability, talent, elbow, arm ",
  },
  {
    kanji: "腔",
    kana: "コウ",
    english: "body cavity ",
  },
  {
    kanji: "膏",
    kana: "コウ    あぶら",
    english: "fat, grease, lard, paste, ointment, plaster ",
  },
  {
    kanji: "閤",
    kana: "コウ    くぐりど",
    english: "small side gate ",
  },
  {
    kanji: "鴻",
    kana: "コウ    おおとり    ひしくい",
    english: "large bird, wild goose ",
  },
  {
    kanji: "劫",
    kana: "コウ    ゴウ    キョウ    おびや.かす",
    english: "threat, long ages ",
  },
  {
    kanji: "壕",
    kana: "コウ    ゴウ    ほり",
    english: "trench, dugout, air raid shelter ",
  },
  {
    kanji: "濠",
    kana: "ゴウ    コウ    ほり",
    english: "moat, ditch, canal, Australia ",
  },
  {
    kanji: "轟",
    kana: "コウ    ゴウ    とどろ.かす    とどろ.く",
    english: "roar, thunder, boom resound ",
  },
  {
    kanji: "麹",
    kana: "キク    こうじ",
    english: "malt, yeast ",
  },
  {
    kanji: "鵠",
    kana: "コク    コウ    くぐい    まと",
    english: "swan ",
  },
  {
    kanji: "漉",
    kana: "ロク    こ.し    こ.す    す.く",
    english: "manufacture paper, spread out thin, strain, percolate ",
  },
  {
    kanji: "甑",
    kana: "ソウ    ショウ    こしき",
    english: "rice-steaming pot ",
  },
  {
    kanji: "忽",
    kana: "コツ    たちま.ち    ゆるが.せ",
    english: "in a moment, instantly, all of a sudden, neglect, disregard ",
  },
  {
    kanji: "惚",
    kana: "コツ    ほけ.る    ぼ.ける    ほ.れる",
    english: "fall in love with, admire, grow senile ",
  },
  {
    kanji: "狛",
    kana: "ハク    こま",
    english: "archaic part of Korea, lion-dog shrine guards ",
  },
  {
    kanji: "此",
    kana: "シ    こ.れ    こ.の    ここ",
    english: "this, current, next, coming, last, past ",
  },
  {
    kanji: "坤",
    kana: "コン    つち    ひつじさる",
    english: "divination sign, land, earth ",
  },
  {
    kanji: "昏",
    kana: "コン    くら.い    くれ",
    english: "dark, evening, dusk ",
  },
  {
    kanji: "梱",
    kana: "コン    こう.る    こうり    こり    しきみ",
    english: "pack, tie up, bale ",
  },
  {
    kanji: "艮",
    kana: "コン    ゴン    うしとら    ねずくり",
    english: "northeast (Oriental zodiac), stopping, good radical (no. 138) ",
  },
  {
    kanji: "些",
    kana: "サ    シャ    ち.と    ち.っと    いささか",
    english: "a little bit, sometimes ",
  },
  {
    kanji: "叉",
    kana: "サ    シャ    サイ    また",
    english: "fork in road, crotch ",
  },
  {
    kanji: "嵯",
    kana: "サ    シ",
    english: "steep, craggy, rugged ",
  },
  {
    kanji: "瑳",
    kana: "サ    みが.く",
    english: "polish ",
  },
  {
    kanji: "裟",
    kana: "サ    シャ",
    english: "Buddhist surplice ",
  },
  {
    kanji: "坐",
    kana: "ザ    サ    すわ.る    おわす    そぞろに    まします",
    english: "sit ",
  },
  {
    kanji: "哉",
    kana: "サイ    かな    や",
    english: 'how, what, alas, "?" (question mark) ',
  },
  {
    kanji: "犀",
    kana: "サイ    セイ",
    english: "rhinocerous ",
  },
  {
    kanji: "砦",
    kana: "サイ    とりで",
    english: "fort, stronghold, entrenchments ",
  },
  {
    kanji: "冴",
    kana: "ゴ    コ    さ.える    こお.る    ひ.える",
    english: "be clear, serene, cold, skilful ",
  },
  {
    kanji: "堺",
    kana: "カイ    さかい",
    english: "world ",
  },
  {
    kanji: "榊",
    kana: "さかき",
    english: "sacred shinto tree, (kokuji) ",
  },
  {
    kanji: "肴",
    kana: "コウ    さかな",
    english: "accompaniment for drinks ",
  },
  {
    kanji: "鷺",
    kana: "ロ    さぎ",
    english: "heron ",
  },
  {
    kanji: "朔",
    kana: "サク    ついたち",
    english: "conjunction (astronomy), first day of month ",
  },
  {
    kanji: "窄",
    kana: "サク    すぼ.める    つぼ.める    せま.い",
    english: "narrow, fold, furl, shrug, pucker, shut, close ",
  },
  {
    kanji: "鮭",
    kana: "カイ    ケイ    さけ    しゃけ    ふぐ",
    english: "salmon ",
  },
  {
    kanji: "笹",
    kana: "ささ",
    english: "bamboo grass ",
  },
  {
    kanji: "匙",
    kana: "シ    さじ",
    english: "spoon ",
  },
  {
    kanji: "薩",
    kana: "サツ    サチ",
    english: "Buddha ",
  },
  {
    kanji: "皐",
    kana: "コウ    さつき",
    english: "swamp, shore ",
  },
  {
    kanji: "鯖",
    kana: "セイ    ショウ    さば",
    english: "mackerel ",
  },
  {
    kanji: "捌",
    kana: "ハツ    ハチ    ベツ    さば.く    さば.ける    は.け",
    english:
  "handle, deal with, dispose of, sell, be in demand, be worldly, be frank, be sensible, be sociable, drainage, sale, demand for, eight ",
  },
  {
    kanji: "錆",
    kana: "ショウ    セイ    さび    くわ.しい",
    english: "tarnish ",
  },
  {
    kanji: "鮫",
    kana: "コウ    さめ    みずち",
    english: "shark ",
  },
  {
    kanji: "晒",
    kana: "サイ    シ    さら.す    さらし",
    english: "bleach, refine, expose, air ",
  },
  {
    kanji: "撒",
    kana: "サン    サツ    ま.く",
    english: "scatter, sprinkle, give them the slip ",
  },
  {
    kanji: "燦",
    kana: "サン    さん.たる    あき.らか    きらめ.く    きら.めく",
    english: "brilliant ",
  },
  {
    kanji: "珊",
    kana: "サン    せんち    さんち",
    english: "stagger, loneliness, centimeter ",
  },
  {
    kanji: "纂",
    kana: "サン    あつ.める",
    english: "editing, compiling ",
  },
  {
    kanji: "讃",
    kana: "サン    ほ.める    たた.える",
    english: "praise, title on a picture ",
  },
  {
    kanji: "餐",
    kana: "サン    ソン    の.む    くら.う",
    english: "eat, drink, swallow ",
  },
  {
    kanji: "仔",
    kana: "シ    こ    た.える",
    english: "offspring ",
  },
  {
    kanji: "屍",
    kana: "シ    しかばね",
    english: "corpse ",
  },
  {
    kanji: "孜",
    kana: "シ    つと.める",
    english: "industriousness ",
  },
  {
    kanji: "斯",
    kana: "シ    か    こう    か.く    この    これ    ここに",
    english: "this, thus, such, verbal pause ",
  },
  {
    kanji: "獅",
    kana: "シ    しし",
    english: "lion ",
  },
  {
    kanji: "爾",
    kana: "ジ    ニ    なんじ    しかり    その    のみ",
    english: "you, thou, second person ",
  },
  {
    kanji: "痔",
    kana: "ヂ    ジ    しもがさ",
    english: "piles, hemorrhoids ",
  },
  {
    kanji: "而",
    kana: "ジ    ニ    しこ.うして    しか.して    しか.も    しか.れども    すなわち    なんじ    しかるに",
    english: "rake ",
  },
  {
    kanji: "蒔",
    kana: "シ    ジ    う.える    まく",
    english: "sow (seeds) ",
  },
  {
    kanji: "汐",
    kana: "セキ    しお    うしお    せい",
    english: "eventide, tide, salt water, opportunity ",
  },
  {
    kanji: "鴫",
    kana: "しぎ",
    english: "snipe, (kokuji) ",
  },
  {
    kanji: "竺",
    kana: "ジク    チク    トク",
    english: "bamboo ",
  },
  {
    kanji: "宍",
    kana: "ニク    ジク    しし",
    english: "muscles, meat ",
  },
  {
    kanji: "雫",
    kana: "ダ    しずく",
    english: "drop, trickle, dripping ",
  },
  {
    kanji: "悉",
    kana: "シツ    シチ    つ.きる    ことごと    ことごと.く    つ.くす    つぶさ.に",
    english:
  "all, entirely, altogether, completely, use up, run out of, exhaust, befriend, serve ",
  },
  {
    kanji: "蔀",
    kana: "ホウ    ダ    ダン    ブ    しとみ",
    english: "latticed shutters ",
  },
  {
    kanji: "篠",
    kana: "ゾウ    ショウ    しの    ささ",
    english: "also N3428, bamboo grass ",
  },
  {
    kanji: "偲",
    kana: "サイ    シ    しの.ぶ",
    english: "recollect, remember ",
  },
  {
    kanji: "柴",
    kana: "サイ    シ    しば",
    english: "brush, firewood ",
  },
  {
    kanji: "屡",
    kana: "ル    しばしば",
    english: "often, frequently ",
  },
  {
    kanji: "蕊",
    kana: "ズイ    しべ",
    english: "pistil, stamen ",
  },
  {
    kanji: "縞",
    kana: "コウ    しま    しろぎぬ",
    english: "stripe ",
  },
  {
    kanji: "紗",
    kana: "サ    シャ    うすぎぬ",
    english: "gauze, gossamer ",
  },
  {
    kanji: "勺",
    kana: "シャク",
    english: "ladle, one tenth of a go, dip ",
  },
  {
    kanji: "杓",
    kana: "シャク    チョウ    テキ    ヒョウ    ひしゃく",
    english: "ladle, scoop ",
  },
  {
    kanji: "灼",
    kana: "シャク    あらた    やく",
    english: "miraculous ",
  },
  {
    kanji: "錫",
    kana: "セキ    シャク    すず    たま.う",
    english: "copper, tin ",
  },
  {
    kanji: "惹",
    kana: "ジャク    ジャ    ひ.く",
    english: "attract, captivate ",
  },
  {
    kanji: "綬",
    kana: "ジュ    ひも",
    english: "ribbon ",
  },
  {
    kanji: "洲",
    kana: "シュウ    ス    しま",
    english: "continent, sandbar, island, country ",
  },
  {
    kanji: "繍",
    kana: "シュウ    ぬいとり",
    english: "sew, figured cloth ",
  },
  {
    kanji: "蒐",
    kana: "シュウ    あかね    あつ.まる    あつ.める",
    english: "gather ",
  },
  {
    kanji: "輯",
    kana: "シュウ    あつ.める    やわ.らぐ",
    english: "gather, collect, compile ",
  },
  {
    kanji: "酋",
    kana: "シュウ    ジュ    おさ    ふるざけ    さけのつかさ",
    english: "chieftain ",
  },
  {
    kanji: "什",
    kana: "ジュウ    シュウ",
    english: "utensil, thing, ten ",
  },
  {
    kanji: "戎",
    kana: "ジュウ    えびす    つわもの",
    english: "warrior, arms, barbarian, Ainu ",
  },
  {
    kanji: "夙",
    kana: "シュク    つとに    はやい",
    english: "bright and early, long ago, early in life ",
  },
  {
    kanji: "峻",
    kana: "シュン    けわ.しい    たか.い",
    english: "high, steep ",
  },
  {
    kanji: "竣",
    kana: "ドウ    シュン    わらわ    わらべ    おわ.る",
    english: "end, finish ",
  },
  {
    kanji: "舜",
    kana: "シュン",
    english: "type of morning glory, rose of sharon, althea ",
  },
  {
    kanji: "駿",
    kana: "シュン    スン    すぐ.れる",
    english: "a good horse, speed, a fast person ",
  },
  {
    kanji: "楯",
    kana: "ジュン    たて",
    english: "shield, buckler, pretext ",
  },
  {
    kanji: "淳",
    kana: "ジュン    シュン    あつ.い",
    english: "pure ",
  },
  {
    kanji: "醇",
    kana: "ジュン    シュン    もっぱら    こい    あつい",
    english: "pure sake', purity, affection ",
  },
  {
    kanji: "曙",
    kana: "ショ    あけぼの",
    english: "dawn, daybreak ",
  },
  {
    kanji: "渚",
    kana: "ショ    なぎさ",
    english: "strand, beach, shore ",
  },
  {
    kanji: "薯",
    kana: "ショ    いも",
    english: "potato ",
  },
  {
    kanji: "藷",
    kana: "ショ    ジョ    いも",
    english: "potato ",
  },
  {
    kanji: "恕",
    kana: "ジョ    ショ    ゆる.す",
    english: "excuse, tolerate, forgive ",
  },
  {
    kanji: "鋤",
    kana: "ジョ    ショ    ソ    す.く    すき    くわ",
    english: "spade up, plow ",
  },
  {
    kanji: "哨",
    kana: "ショウ    みはり",
    english: "scout, sentinel ",
  },
  {
    kanji: "嘗",
    kana: "ショウ    ジョウ    かつ.て    こころ.みる    な.める",
    english:
  "once, before, formerly, ever, never, ex-, lick, lap up, burn up, taste, undergo, underrate, despise ",
  },
  {
    kanji: "妾",
    kana: "ショウ    めかけ    そばめ    わらわ",
    english: "concubine ",
  },
  {
    kanji: "娼",
    kana: "ショウ    あそびめ",
    english: "prostitute ",
  },
  {
    kanji: "庄",
    kana: "ショウ    ソ    ソウ    ホウ",
    english: "level ",
  },
  {
    kanji: "廠",
    kana: "ショウ",
    english: "workshop ",
  },
  {
    kanji: "捷",
    kana: "ショウ    ソウ    はや.い",
    english: "victory, fast ",
  },
  {
    kanji: "昌",
    kana: "ショウ    さかん",
    english: "prosperous, bright, clear ",
  },
  {
    kanji: "梢",
    kana: "ショウ    こずえ    くすのき",
    english: "treetops, twig ",
  },
  {
    kanji: "樟",
    kana: "ショウ    くす",
    english: "camphor ",
  },
  {
    kanji: "樵",
    kana: "ショウ    きこ.る    こ.る    きこり",
    english: "woodcutting, lumberjack ",
  },
  {
    kanji: "湘",
    kana: "ショウ",
    english: "name of Chinese river, the sagami river ",
  },
  {
    kanji: "菖",
    kana: "ショウ",
    english: "iris ",
  },
  {
    kanji: "蒋",
    kana: "ショウ    ソウ    まこも    はげ.ます",
    english: "reed ",
  },
  {
    kanji: "蕉",
    kana: "ショウ",
    english: "banana ",
  },
  {
    kanji: "裳",
    kana: "ショウ    も    もすそ",
    english: "skirt ",
  },
  {
    kanji: "醤",
    kana: "ショウ    ひしお",
    english: "a kind of miso ",
  },
  {
    kanji: "鉦",
    kana: "セイ    ショウ    かね",
    english: "bell, gong, chimes ",
  },
  {
    kanji: "鍾",
    kana: "ショウ    シュ    あつ.める    さかずき    かね",
    english: "spindle, gather, collect ",
  },
  {
    kanji: "鞘",
    kana: "ショウ    ソウ    さや",
    english: "sheath, case, margin, difference, shells (of beans) ",
  },
  {
    kanji: "丞",
    kana: "ジョウ    ショウ    すく.う    たす.ける",
    english: "help ",
  },
  {
    kanji: "擾",
    kana: "ジョウ    みだ.れる    みだ.す    わずら.わしい",
    english: "disturb, throw into confusion ",
  },
  {
    kanji: "杖",
    kana: "ジョウ    つえ",
    english: "staff, cane ",
  },
  {
    kanji: "穣",
    kana: "ジョウ    わら    ゆたか",
    english: "good crops, prosperity, 10**28 ",
  },
  {
    kanji: "埴",
    kana: "ショク    はに    へな",
    english: "clay ",
  },
  {
    kanji: "燭",
    kana: "ソク    ショク    ともしび",
    english: "light, candlepower ",
  },
  {
    kanji: "蝕",
    kana: "ショク    むしば.む",
    english: "eclipse, occultation, be defective ",
  },
  {
    kanji: "晋",
    kana: "シン    すす.む",
    english: "advance ",
  },
  {
    kanji: "榛",
    kana: "シン    ハン    はしばみ    はり",
    english: "hazelnut, filbert ",
  },
  {
    kanji: "疹",
    kana: "シン    チン    はしか",
    english: "measles, sickness ",
  },
  {
    kanji: "秦",
    kana: "シン    はた",
    english: "Manchu dynasty, name given to naturalized foreigners ",
  },
  {
    kanji: "塵",
    kana: "チン    ジン    ちり    ごみ",
    english: "dust, trash, garbage ",
  },
  {
    kanji: "壬",
    kana: "ニン    ジン    イ    みずのえ",
    english: "9th calendar sign ",
  },
  {
    kanji: "訊",
    kana: "ジン    シュン    シン    き.く    と.う    たず.ねる",
    english: "request, question, investigate ",
  },
  {
    kanji: "靭",
    kana: "ジン    ニン    サ    サイ    サツ    うつぼ    しな.やか    ゆぎ",
    english: "soft, pliable, quiver ",
  },
  {
    kanji: "笥",
    kana: "ス    シ    け    はこ",
    english: "lunch box, clothes chest ",
  },
  {
    kanji: "諏",
    kana: "シュ    ス    そう    はか.る",
    english: "consult ",
  },
  {
    kanji: "厨",
    kana: "シュウ    ズ    チュ    チュウ    くりや",
    english: "kitchen ",
  },
  {
    kanji: "逗",
    kana: "トウ    ズ    とど.まる",
    english: "stop ",
  },
  {
    kanji: "翠",
    kana: "スイ    かわせみ    みどり",
    english: "green ",
  },
  {
    kanji: "錐",
    kana: "スイ    きり",
    english: "auger, drill, awl, pyramid, cone ",
  },
  {
    kanji: "錘",
    kana: "スイ    つむ    おもり",
    english: "weight, plumb bob, sinker ",
  },
  {
    kanji: "瑞",
    kana: "ズイ    スイ    みず-    しるし",
    english: "congratulations ",
  },
  {
    kanji: "嵩",
    kana: "スウ    シュウ    かさ    かさ.む    たか.い",
    english: "be aggravated, grow worse, grow bulky, swell ",
  },
  {
    kanji: "趨",
    kana: "スウ    ソク    しゅ    おもむ.く    はし.る",
    english: "run, go, quick, tend towards ",
  },
  {
    kanji: "雛",
    kana: "スウ    ス    ジュ    ひな    ひよこ",
    english: "chick, squab, duckling, doll ",
  },
  {
    kanji: "椙",
    kana: "すぎ",
    english: "Japanese cedar, cryptomeria ",
  },
  {
    kanji: "菅",
    kana: "カン    ケン    すげ",
    english: "sedge ",
  },
  {
    kanji: "頗",
    kana: "ハ    すこぶ.る    かたよ.る",
    english: "prejudiced, exceedingly ",
  },
  {
    kanji: "雀",
    kana: "ジャク    ジャン    サク    シャク    すずめ",
    english: "sparrow ",
  },
  {
    kanji: "摺",
    kana: "ショウ    シュウ    ロウ    す.る    ひだ",
    english: "rub, fold, print (on cloth) ",
  },
  {
    kanji: "棲",
    kana: "セイ    す.む",
    english: "live, dwell ",
  },
  {
    kanji: "栖",
    kana: "セイ    す.む",
    english: "nest, rookery, hive, cobweb, den ",
  },
  {
    kanji: "脆",
    kana: "ゼイ    セイ    セツ    もろ.い    よわい",
    english: "brittle, fragile, easy to beat, sentimental, susceptible ",
  },
  {
    kanji: "蹟",
    kana: "セキ    シャク    あと",
    english: "remains, traces, footprint ",
  },
  {
    kanji: "碩",
    kana: "セキ    おお.きい",
    english: "large, great, eminent ",
  },
  {
    kanji: "蝉",
    kana: "セン    ゼン    せみ",
    english: "cicada ",
  },
  {
    kanji: "尖",
    kana: "セン    とが.る    さき    するど.い",
    english: "be pointed, sharp, taper, displeased, angry, edgy ",
  },
  {
    kanji: "撰",
    kana: "サン    セン    せん.する    えら.む    えら.ぶ",
    english: "composing, editing, compiling, selecting ",
  },
  {
    kanji: "栴",
    kana: "セイ    セン    もみじ",
    english: "maple tree, colorful autumn foliage ",
  },
  {
    kanji: "煽",
    kana: "セン    あお.る    おだ.てる    おこ.る",
    english: "fan, flap, instigate, agitate, bolster up, gulp down ",
  },
  {
    kanji: "穿",
    kana: "セン    うが.つ    は.く",
    english: "put on (to the feet), dig, pierce, drill ",
  },
  {
    kanji: "箭",
    kana: "セン    や",
    english: "arrow ",
  },
  {
    kanji: "舛",
    kana: "ブ    セン    まい    そむ.く",
    english: "dancing radical (no. 136) ",
  },
  {
    kanji: "賎",
    kana: "セン    ゼン    いや.しい    いや.しむ    いや.しめる    しず    やす.い",
    english: "despise, low-life, poverty ",
  },
  {
    kanji: "銑",
    kana: "セン",
    english: "pig iron ",
  },
  {
    kanji: "閃",
    kana: "セン    ひらめ.く    ひらめ.き",
    english: "flash, brandish ",
  },
  {
    kanji: "糎",
    kana: "センチメートル    せんち",
    english: "centimeter, (kokuji) ",
  },
  {
    kanji: "噌",
    kana: "ソウ    ショウ    ソ    かまびす.しい",
    english: "boisterous ",
  },
  {
    kanji: "岨",
    kana: "ソ    ショ    いしやま    そば",
    english: "a rocky mountain ",
  },
  {
    kanji: "曾",
    kana: "ソウ    ソ    ゾウ    かつ.て    か.って    すなわち",
    english: "once, before, formerly, ever, never, ex- ",
  },
  {
    kanji: "楚",
    kana: "ソ    ショ    いばら    しもと    すわえ",
    english: "whip, cane ",
  },
  {
    kanji: "疏",
    kana: "ソ    ショ    あら.い    うと.い    うと.む    とお.る    とお.す    まばら",
    english: "estrangement, sparseness, neglect ",
  },
  {
    kanji: "蘇",
    kana: "ソ    ス    よみがえ.る",
    english: "be resuscitated, revived ",
  },
  {
    kanji: "鼠",
    kana: "ソ    ショ    ねずみ    ねず",
    english: "rat, mouse, dark gray ",
  },
  {
    kanji: "叢",
    kana: "ソウ    ス    くさむら    むら.がる    むら",
    english: "plexus, clump of bushes, thicket ",
  },
  {
    kanji: "宋",
    kana: "ソウ",
    english: "dwell, Sung dynasty ",
  },
  {
    kanji: "匝",
    kana: "キョウ    ソウ    めぐ.る",
    english: "go around ",
  },
  {
    kanji: "惣",
    kana: "ソウ    いそが.しい    そうじて",
    english: "all ",
  },
  {
    kanji: "掻",
    kana: "ソウ    か.く",
    english: "scratch, rake, comb, paddle, behead ",
  },
  {
    kanji: "槍",
    kana: "ソウ    ショウ    やり",
    english: "spear, lance, javelin ",
  },
  {
    kanji: "漕",
    kana: "ソウ    こ.ぐ    はこ.ぶ",
    english: "rowing, skull, paddle ",
  },
  {
    kanji: "糟",
    kana: "コウ    ソウ    ぬか",
    english: "dregs, sediment, grounds ",
  },
  {
    kanji: "綜",
    kana: "ソウ    おさ.める    す.べる",
    english: "rule ",
  },
  {
    kanji: "聡",
    kana: "ソウ    さと.い    みみざと.い",
    english: "wise, fast learner ",
  },
  {
    kanji: "蒼",
    kana: "ソウ    あお.い",
    english: "blue, pale ",
  },
  {
    kanji: "鎗",
    kana: "ソウ    ショウ    やり",
    english: "spear, lance, javelin ",
  },
  {
    kanji: "其",
    kana: "キ    ギ    ゴ    そ.れ    そ.の",
    english: "that ",
  },
  {
    kanji: "揃",
    kana: "セン    そろ.える    そろ.う    そろ.い    き.る",
    english: "be complete, uniform, all present ",
  },
  {
    kanji: "詑",
    kana: "イ    タ    ダ    わ.びる    わ.び    あざむ.く",
    english: "deceive, delude ",
  },
  {
    kanji: "柁",
    kana: "ダ    タ    かじ",
    english: "rudder, helm, wheel ",
  },
  {
    kanji: "舵",
    kana: "ダ    タ    かじ",
    english: "rudder, helm, wheel ",
  },
  {
    kanji: "楕",
    kana: "ダ    タ",
    english: "ellipse ",
  },
  {
    kanji: "陀",
    kana: "タ    ダ    イ    チ    ジ    けわ.しい    ななめ",
    english: "steep ",
  },
  {
    kanji: "騨",
    kana: "タン    ダン    タ    ダ    テン",
    english: "dappled grey horse ",
  },
  {
    kanji: "岱",
    kana: "タイ",
    english: "old name for a Chinese mountain, Taishan ",
  },
  {
    kanji: "腿",
    kana: "タイ    もも",
    english: "thigh, femur ",
  },
  {
    kanji: "苔",
    kana: "タイ    こけ    こけら",
    english: "moss, lichen ",
  },
  {
    kanji: "黛",
    kana: "タイ    まゆずみ",
    english: "blackened eyebrows ",
  },
  {
    kanji: "鯛",
    kana: "チョウ    たい",
    english: "sea bream, red snapper ",
  },
  {
    kanji: "醍",
    kana: "ダイ    タイ    テイ",
    english: "whey, good Buddhist teaching ",
  },
  {
    kanji: "鷹",
    kana: "ヨウ    オウ    たか",
    english: "hawk ",
  },
  {
    kanji: "啄",
    kana: "タク    ツク    トク    ついば.む    つつ.く",
    english: "peck, pick up ",
  },
  {
    kanji: "托",
    kana: "タク    たく.する    たの.む",
    english: "requesting, entrusting with, pretend, hint ",
  },
  {
    kanji: "琢",
    kana: "タク    みが.く",
    english: "polish ",
  },
  {
    kanji: "鐸",
    kana: "タク",
    english: "large hand bell ",
  },
  {
    kanji: "茸",
    kana: "ジョウ    ニュ    きのこ    たけ    しげ.る",
    english: "mushroom ",
  },
  {
    kanji: "凧",
    kana: "いかのぼり    たこ",
    english: "kite, (kokuji) ",
  },
  {
    kanji: "蛸",
    kana: "ソウ    ショウ    たこ",
    english: "octopus ",
  },
  {
    kanji: "只",
    kana: "シ    ただ",
    english: "only, free, in addition ",
  },
  {
    kanji: "叩",
    kana: "コウ    たた.く    はた.く    すぎ",
    english: "strike, beat, hit, thrash, criticize ",
  },
  {
    kanji: "辰",
    kana: "シン    ジン    たつ",
    english: "sign of the dragon, 7-9AM, fifth sign of Chinese zodiac ",
  },
  {
    kanji: "巽",
    kana: "ソン    たつみ",
    english: "southeast ",
  },
  {
    kanji: "竪",
    kana: "ジュ    たて    た.てる    こども",
    english: "length, height, warp ",
  },
  {
    kanji: "辿",
    kana: "テン    たど.る    たどり",
    english: "follow (road), pursue ",
  },
  {
    kanji: "狸",
    kana: "リ    ライ    たぬき",
    english: "tanuki, raccoon ",
  },
  {
    kanji: "鱈",
    kana: "セツ    たら",
    english: "codfish, (kokuji) ",
  },
  {
    kanji: "樽",
    kana: "ソン    たる",
    english: "barrel, cask, keg ",
  },
  {
    kanji: "坦",
    kana: "タン    たいら",
    english: "level, wide ",
  },
  {
    kanji: "歎",
    kana: "タン    なげ.く    なげ.き",
    english: "grief, lamentation ",
  },
  {
    kanji: "湛",
    kana: "タン    チン    しず.む    たた.える",
    english: "fill, wear (a smile) ",
  },
  {
    kanji: "箪",
    kana: "タン    はこ",
    english: "bamboo rice basket ",
  },
  {
    kanji: "耽",
    kana: "タン    ふ.ける",
    english: "addicted, absorbed in ",
  },
  {
    kanji: "蛋",
    kana: "タン",
    english: "barbarian, egg ",
  },
  {
    kanji: "檀",
    kana: "ダン    タン    まゆみ",
    english: "cedar, sandlewood, spindle tree ",
  },
  {
    kanji: "弛",
    kana: "チ    シ    たる.む    たる.める    たゆ.む    ゆる.む    ゆる.み",
    english: "slacken, relax ",
  },
  {
    kanji: "智",
    kana: "チ",
    english: "wisdom, intellect, reason ",
  },
  {
    kanji: "蜘",
    kana: "チ    くも",
    english: "spider ",
  },
  {
    kanji: "馳",
    kana: "チ    ジ    は.せる",
    english: "run, gallop, sail, drive (a wagon), win (fame), despatch ",
  },
  {
    kanji: "筑",
    kana: "チク",
    english: "an ancient musical instrument ",
  },
  {
    kanji: "註",
    kana: "チュウ",
    english: "notes, comment, annotate ",
  },
  {
    kanji: "樗",
    kana: "チョ    おおち    おうち",
    english: "Japanese bead tree ",
  },
  {
    kanji: "瀦",
    kana: "チョ    みずたまり",
    english: "pool, puddle ",
  },
  {
    kanji: "猪",
    kana: "チョ    い    いのしし",
    english: "boar ",
  },
  {
    kanji: "苧",
    kana: "チョ    お    からんし    からむし",
    english: "hemp, flax ",
  },
  {
    kanji: "凋",
    kana: "チョウ    しぼ.む",
    english: "wither, droop, lame ",
  },
  {
    kanji: "喋",
    kana: "チョウ    トウ    しゃべ.る    ついば.む",
    english: "talk, chat, chatter ",
  },
  {
    kanji: "寵",
    kana: "チョウ    めぐ.み    めぐ.む",
    english: "affection, love, patronage ",
  },
  {
    kanji: "帖",
    kana: "チョウ    ジョウ    かきもの",
    english:
  "quire (of paper), bundle of seaweed, counter for screens, notebook ",
  },
  {
    kanji: "暢",
    kana: "チョウ    のび.る",
    english: "stretch ",
  },
  {
    kanji: "牒",
    kana: "チョウ    ジョウ    ふだ",
    english: "label, genealogy, circular ",
  },
  {
    kanji: "脹",
    kana: "チョウ    は.れる    ふく.らむ    ふく.れる",
    english: "dilate, distend, bulge, fill out, swell ",
  },
  {
    kanji: "蝶",
    kana: "チョウ",
    english: "butterfly ",
  },
  {
    kanji: "諜",
    kana: "チョウ    ちょう.ずる    うかが.う    しめ.す",
    english: "spy out, reconnoiter ",
  },
  {
    kanji: "銚",
    kana: "チョウ    ヨウ    なべ",
    english: "sake bottle ",
  },
  {
    kanji: "槌",
    kana: "ツイ    つち",
    english: "hammer, mallet ",
  },
  {
    kanji: "鎚",
    kana: "ツイ    タイ    つち",
    english: "hammer, mallet ",
  },
  {
    kanji: "栂",
    kana: "つが    とが",
    english: "hemlock, (kokuji) ",
  },
  {
    kanji: "掴",
    kana: "カク    つか.む    つか.まえる    つか.まる",
    english: "catch, seize, grasp, hold, arrest, capture ",
  },
  {
    kanji: "槻",
    kana: "キ    つき",
    english: "Zelkova tree ",
  },
  {
    kanji: "佃",
    kana: "テン    デン    つくだ",
    english: "cultivated rice field ",
  },
  {
    kanji: "柘",
    kana: "シャ    ジャク    そ    つげ    やまぐわ",
    english: "wild mulberry ",
  },
  {
    kanji: "辻",
    kana: "つじ",
    english: "crossing, crossroad, street corners, (kokuji) ",
  },
  {
    kanji: "蔦",
    kana: "チョウ    つた",
    english: "vine, ivy ",
  },
  {
    kanji: "綴",
    kana: "テイ    テツ    テチ    ゲツ    と.じる    つづ.る    つづり    すみ.やか",
    english: "compose, spell, write, bind (books) ",
  },
  {
    kanji: "鍔",
    kana: "ガク    つば",
    english: "sword guard, kettle brim ",
  },
  {
    kanji: "椿",
    kana: "チン    チュン    つばき",
    english: "camellia ",
  },
  {
    kanji: "壷",
    kana: "コ    つぼ",
    english: "jar, pot, hinge knuckle, one's aim ",
  },
  {
    kanji: "嬬",
    kana: "ジュ    よわ.い",
    english: "mistress, weak ",
  },
  {
    kanji: "紬",
    kana: "チュウ    つむぎ    つむ.ぐ",
    english: "pongee (a knotted silk cloth) ",
  },
  {
    kanji: "吊",
    kana: "チョウ    つ.る    つる.す",
    english: "suspend, hang, wear (sword) ",
  },
  {
    kanji: "剃",
    kana: "テイ    まい    そ.る    す.る",
    english: "shave ",
  },
  {
    kanji: "悌",
    kana: "テイ    ダイ",
    english: "serving our elders ",
  },
  {
    kanji: "挺",
    kana: "チョウ    テイ    ぬ.く",
    english:
  "counter for guns, inksticks, palanquins, rickshaws, bravely volunteer ",
  },
  {
    kanji: "梯",
    kana: "テイ    タイ    はしご",
    english: "ladder, stairs, insatiable drinking ",
  },
  {
    kanji: "汀",
    kana: "テイ    みぎわ    なぎさ",
    english: "water's edge, shore, bank ",
  },
  {
    kanji: "碇",
    kana: "テイ    いかり",
    english: "anchor, grapnel ",
  },
  {
    kanji: "禎",
    kana: "テイ    さいわ.い    ただ.しい",
    english: "happiness ",
  },
  {
    kanji: "蹄",
    kana: "テイ    ひづめ",
    english: "hoof ",
  },
  {
    kanji: "鄭",
    kana: "テイ    ジョウ",
    english: "an ancient Chinese province ",
  },
  {
    kanji: "釘",
    kana: "テイ    チョウ    くぎ",
    english: "nail, tack, peg ",
  },
  {
    kanji: "鼎",
    kana: "テイ    かなえ",
    english: "three legged kettle ",
  },
  {
    kanji: "擢",
    kana: "テキ    タク    ぬ.く    ぬき.んでる",
    english: "excel in, surpass, pull out, select ",
  },
  {
    kanji: "鏑",
    kana: "テキ    かぶら    かぶらや    やじり",
    english: "arrowhead ",
  },
  {
    kanji: "轍",
    kana: "テツ    わだちい    わだち",
    english: "rut, wheel track ",
  },
  {
    kanji: "纏",
    kana: "テン    デン    まつ.わる    まと.う    まと.める    まと.まる    まと.い",
    english: "wear, wrap, tie, follow around, collect ",
  },
  {
    kanji: "甜",
    kana: "テン    うま.い    あま.い",
    english: "sweet ",
  },
  {
    kanji: "顛",
    kana: "テン    いただき    たお.れる",
    english: "overturn, summit, origin ",
  },
  {
    kanji: "澱",
    kana: "デン    テン    おり    ど.ろ    よど.み    よど.む",
    english: "sediment, grounds, dregs, stagnant ",
  },
  {
    kanji: "兎",
    kana: "ト    ツ    うさぎ",
    english: "rabbit, hare ",
  },
  {
    kanji: "堵",
    kana: "ト    かき",
    english: "fence, railing, enclosure ",
  },
  {
    kanji: "杜",
    kana: "ト    トウ    ズ    もり    ふさ.ぐ    やまなし",
    english: "woods, grove ",
  },
  {
    kanji: "菟",
    kana: "ト    ツ    うさぎ",
    english: "rabbit?, var of N198? ",
  },
  {
    kanji: "鍍",
    kana: "ト    めっき",
    english: "plating, gilding ",
  },
  {
    kanji: "砥",
    kana: "シ    テイ    キイ    チ    と    といし    と.ぐ    みが.く    たいら.にする",
    english: "whetstone, grindstone ",
  },
  {
    kanji: "砺",
    kana: "レイ    あらと    みが.く",
    english: "whetstone, polish ",
  },
  {
    kanji: "塘",
    kana: "トウ    つつみ",
    english: "dike, embankment ",
  },
  {
    kanji: "套",
    kana: "トウ    かさ.ねる",
    english: "hackneyed ",
  },
  {
    kanji: "宕",
    kana: "トウ    すぎる",
    english: "cave ",
  },
  {
    kanji: "嶋",
    kana: "トウ    しま",
    english: "island ",
  },
  {
    kanji: "淘",
    kana: "トウ    よな.げる",
    english: "select ",
  },
  {
    kanji: "祷",
    kana: "トウ    いの.る    いの.り    まつ.る",
    english: "pray ",
  },
  {
    kanji: "董",
    kana: "トウ    ただ.す",
    english: "correct ",
  },
  {
    kanji: "蕩",
    kana: "トウ    とろ.かす    とろ.ける    うご.く",
    english: "melt, be charmed, captivated ",
  },
  {
    kanji: "鐙",
    kana: "トウ    あぶみ    たかつき    ひともし",
    english: "stirrup ",
  },
  {
    kanji: "撞",
    kana: "ドウ    トウ    シュ    つ.く",
    english: "thrust, pierce, stab, prick ",
  },
  {
    kanji: "萄",
    kana: "ドウ    トウ",
    english: "grape vine, wild grape ",
  },
  {
    kanji: "鴇",
    kana: "ホウ    とき    のがん",
    english: "wild goose, madam of a brothel, crested ibis ",
  },
  {
    kanji: "涜",
    kana: "トク    トウ    けが.す    けが.れ    みぞ",
    english: "defile, blaspheme, ditch ",
  },
  {
    kanji: "禿",
    kana: "トク    ちび.る    かむろ    は.げる    はげ",
    english:
  "become bald, bare, wear out, waste away, little girl employed at a brothel ",
  },
  {
    kanji: "橡",
    kana: "ショウ    ゾウ    とち    くぬぎ",
    english: "horse chestnut ",
  },
  {
    kanji: "椴",
    kana: "タン    ダン    トド    むくげ",
    english: "fir ",
  },
  {
    kanji: "鳶",
    kana: "エン    とび    とんび",
    english: "black kite, fireman, hook ",
  },
  {
    kanji: "苫",
    kana: "セン    とま",
    english: "rush matting ",
  },
  {
    kanji: "寅",
    kana: "イン    とら",
    english: "sign of the tiger, 3-5AM, third sign of Chinese zodiac ",
  },
  {
    kanji: "酉",
    kana: "ユウ    とり",
    english:
  "west, bird, sign of the bird, 5-7PM, tenth sign of Chinese zodiac, sake radical (no. 164) ",
  },
  {
    kanji: "瀞",
    kana: "セイ    ショウ    ジュウ    とろ    きよ.い",
    english: "pure water, clear water, pool in a river ",
  },
  {
    kanji: "噸",
    kana: "トン",
    english: "tonnage, (kokuji) ",
  },
  {
    kanji: "惇",
    kana: "シュン    ジュン    トン    あつ.い",
    english: "sincere, kind, considerate ",
  },
  {
    kanji: "敦",
    kana: "トン    タイ    ダン    チョウ    あつ.い",
    english: "industry, kindliness ",
  },
  {
    kanji: "沌",
    kana: "トン    くら.い",
    english: "primeval chaos ",
  },
  {
    kanji: "遁",
    kana: "トン    シュン    のが.れる",
    english: "flee, escape, shirk, evade, set free ",
  },
  {
    kanji: "呑",
    kana: "トン    ドン    の.む",
    english: "drink ",
  },
  {
    kanji: "乍",
    kana: "サ    サク    -なが.ら    たちま.ち",
    english: "though, notwithstanding, while, during, both, all ",
  },
  {
    kanji: "凪",
    kana: "なぎ    な.ぐ",
    english: "lull, calm, (kokuji) ",
  },
  {
    kanji: "薙",
    kana: "テイ    チ    な.ぐ    なぎ    か.る",
    english: "mow down (the enemy) ",
  },
  {
    kanji: "灘",
    kana: "タン    ダン    なだ    せ",
    english: "open sea ",
  },
  {
    kanji: "捺",
    kana: "ナツ    ダツ    さ.す    お.す",
    english: "press, print, affix a seal, stamp ",
  },
  {
    kanji: "楢",
    kana: "シュウ    ユウ    なら",
    english: "oak ",
  },
  {
    kanji: "馴",
    kana: "ジュン    シュン    クン    な.れる    な.らす    したが.う",
    english: "get used to, experienced, tamed ",
  },
  {
    kanji: "畷",
    kana: "テツ    テイ    セイ    なわて",
    english: "rice field ridge path ",
  },
  {
    kanji: "楠",
    kana: "ナン    ダン    ゼン    ネン    くす    くすのき",
    english: "camphor tree ",
  },
  {
    kanji: "汝",
    kana: "ジョ    なんじ    なれ",
    english: "you, thou ",
  },
  {
    kanji: "賑",
    kana: "シン    にぎ.わい    にぎ.やか    にぎ.わす    にぎ.わう",
    english: "flourish, be bustling, prosperity ",
  },
  {
    kanji: "廿",
    kana: "ジュウ    ニュウ    にじゅう",
    english: "twenty, 20 ",
  },
  {
    kanji: "韮",
    kana: "キュウ    ク    にら",
    english: "leek ",
  },
  {
    kanji: "濡",
    kana: "ジュ    ニュ    ぬれ.る    ぬら.す    ぬ.れる    ぬ.らす    うるお.い    うるお.う    うるお.す",
    english: "get wet, damp, make love ",
  },
  {
    kanji: "祢",
    kana: "ネ    デイ    ナイ",
    english: "ancestral shrine ",
  },
  {
    kanji: "葱",
    kana: "ソウ    ねぎ",
    english: "stone leek, Welsh onion ",
  },
  {
    kanji: "撚",
    kana: "ネン    よ.る    よ.れる    より    ひね.る",
    english: "twist, twine, kinky ",
  },
  {
    kanji: "乃",
    kana: "ナイ    ダイ    ノ    アイ    の    すなわ.ち    なんじ",
    english: "from, possessive particle, whereupon, accordingly ",
  },
  {
    kanji: "之",
    kana: "シ    の    これ    おいて    ゆく    この",
    english: "of, this ",
  },
  {
    kanji: "埜",
    kana: "ヤ    ショ    の",
    english: "open country, field, wilderness ",
  },
  {
    kanji: "嚢",
    kana: "ノウ    ドウ    ふくろ",
    english: "pouch, purse, bag ",
  },
  {
    kanji: "膿",
    kana: "ノウ    ドウ    う.む    うみ",
    english: "pus, fester, discharge ",
  },
  {
    kanji: "覗",
    kana: "シ    のぞ.く    うかが.う",
    english: "peep, peek, come in sight ",
  },
  {
    kanji: "蚤",
    kana: "ソウ    のみ    はやい",
    english: "flea ",
  },
  {
    kanji: "巴",
    kana: "ハ    ともえ    うずまき",
    english: "comma-design ",
  },
  {
    kanji: "播",
    kana: "ハ    バン    ハン    ま.く",
    english: "plant, sow ",
  },
  {
    kanji: "杷",
    kana: "ハ    つか",
    english: "kind of rake ",
  },
  {
    kanji: "琶",
    kana: "ハ    ベ    ワ",
    english: "lute ",
  },
  {
    kanji: "芭",
    kana: "バ    ハ",
    english: "banana ",
  },
  {
    kanji: "盃",
    kana: "ハイ    さかずき",
    english: "glass, cup ",
  },
  {
    kanji: "牌",
    kana: "ハイ    ぱい    ふだ",
    english: "label, signboard, medal, mahjong tiles ",
  },
  {
    kanji: "楳",
    kana: "バイ    うめ",
    english: "plum ",
  },
  {
    kanji: "煤",
    kana: "バイ    マイ    すす",
    english: "soot, smoke dried ",
  },
  {
    kanji: "狽",
    kana: "ケン    バイ    ハイ",
    english: "wolf, be flurried ",
  },
  {
    kanji: "這",
    kana: "シャ    ゲン    は.う    は.い    むか.える    この",
    english: "crawl, creep, grovel, trail (vines) ",
  },
  {
    kanji: "蝿",
    kana: "ヨウ    はえ    はい",
    english: "fly ",
  },
  {
    kanji: "秤",
    kana: "ショウ    ヒン    ビン    はかり",
    english: "balances, scales, steelyard ",
  },
  {
    kanji: "矧",
    kana: "シン    は.ぐ    いわ.んや    はぐき    はぎ",
    english: "feather (arrow) ",
  },
  {
    kanji: "萩",
    kana: "シュウ    はぎ",
    english: "bush clover ",
  },
  {
    kanji: "柏",
    kana: "ハク    ヒャク    ビャク    かしわ",
    english: "oak ",
  },
  {
    kanji: "箔",
    kana: "ハク    すだれ",
    english: "foil, gilt ",
  },
  {
    kanji: "粕",
    kana: "ハク    かす",
    english: "scrap, waste ",
  },
  {
    kanji: "曝",
    kana: "バク    ホク    ボク    さら.す",
    english: "bleach, refine, expose, air ",
  },
  {
    kanji: "莫",
    kana: "バク    ボ    マク    モ    ナイ    くれ    なか.れ    なし",
    english: "must not, do not, be not ",
  },
  {
    kanji: "駁",
    kana: "ハク    バク    ぶち    まじ.る    まだら",
    english: "refutation, contradiction ",
  },
  {
    kanji: "函",
    kana: "カン    はこ    い.れる",
    english: "box (archaic) ",
  },
  {
    kanji: "硲",
    kana: "はざま",
    english: "ravine, gorge, gap ",
  },
  {
    kanji: "肇",
    kana: "チョウ    ジョウ    トウ    はじ.める    はじめ",
    english: "beginning ",
  },
  {
    kanji: "筈",
    kana: "カツ    はず    やはず",
    english: "notch of an arrow, ought, must, should be, expected ",
  },
  {
    kanji: "幡",
    kana: "マン    ハン    バン    ホン    はた",
    english: "flag ",
  },
  {
    kanji: "畠",
    kana: "はたけ    はた",
    english: "field, farm, garden, (kokuji) ",
  },
  {
    kanji: "溌",
    kana: "ハツ    も.る    とびち.る    そそ.ぐ",
    english: "sprinkle, lively, vigorous ",
  },
  {
    kanji: "醗",
    kana: "ハツ    かも.す",
    english: "fermentation, brewing ",
  },
  {
    kanji: "筏",
    kana: "バツ    ハツ    ボチ    いかだ",
    english: "raft ",
  },
  {
    kanji: "鳩",
    kana: "キュウ    ク    はと    あつ.める",
    english: "pigeon, dove ",
  },
  {
    kanji: "噺",
    kana: "はなし",
    english: "talk, (kokuji) ",
  },
  {
    kanji: "塙",
    kana: "カク    コウ    はなわ    かた.い",
    english: "projecting tableland or mountain ",
  },
  {
    kanji: "蛤",
    kana: "コウ    はまぐり",
    english: "clam ",
  },
  {
    kanji: "隼",
    kana: "シュン    ジュン    はやぶさ",
    english: "falcon ",
  },
  {
    kanji: "叛",
    kana: "ハン    ホン    そむ.く",
    english: "disobey, defy, go back on, rebel, rebellion ",
  },
  {
    kanji: "挽",
    kana: "バン    ひ.く",
    english: "saw, turn (lathe), grind ",
  },
  {
    kanji: "磐",
    kana: "バン    ハン    いわ",
    english: "rock, crag, cliff, wall (in a mine) ",
  },
  {
    kanji: "蕃",
    kana: "バン    ハン",
    english: "grow luxuriously ",
  },
  {
    kanji: "匪",
    kana: "ヒ    あら.ず    かたみ",
    english: "negation, wicked person ",
  },
  {
    kanji: "庇",
    kana: "ヒ    ひさし    おお.う    かば.う",
    english: "protect, shield, defend, eaves, canopy, penthouse, visor ",
  },
  {
    kanji: "斐",
    kana: "ヒ    イ",
    english: "beautiful, patterned ",
  },
  {
    kanji: "緋",
    kana: "ヒ    あけ    あか",
    english: "scarlet, cardinal ",
  },
  {
    kanji: "誹",
    kana: "ヒ    ハイ    そし.る",
    english: "ridicule, slander ",
  },
  {
    kanji: "樋",
    kana: "トウ    ひ    とい",
    english: "water pipe, gutter, downspout, conduit ",
  },
  {
    kanji: "簸",
    kana: "ハ    ひ.る",
    english: "winnow, fan ",
  },
  {
    kanji: "枇",
    kana: "ビ    ヒ",
    english: "spoon ",
  },
  {
    kanji: "毘",
    kana: "ヒ    ビ    たす.ける",
    english: "help, assist ",
  },
  {
    kanji: "琵",
    kana: "ビ    ヒ",
    english: "glissando on strings, lute ",
  },
  {
    kanji: "柊",
    kana: "シュ    シュウ    ひいらぎ",
    english: "holly ",
  },
  {
    kanji: "稗",
    kana: "ハイ    ヒ    ひえ",
    english: "humble, deccan grass ",
  },
  {
    kanji: "疋",
    kana: "ヒキ    ショ    ソ    ヒツ    あし",
    english: "head, counter for animals ",
  },
  {
    kanji: "髭",
    kana: "シ    ひげ    くちひげ",
    english: "beard, mustache ",
  },
  {
    kanji: "彦",
    kana: "ゲン    ひこ",
    english: "lad, boy (ancient) ",
  },
  {
    kanji: "菱",
    kana: "リョウ    ひし",
    english: "diamond (shape), water chestnut, rhombus ",
  },
  {
    kanji: "弼",
    kana: "ヒツ    たす.ける    ゆだめ",
    english: "help ",
  },
  {
    kanji: "畢",
    kana: "ヒツ    おわ.る    あみ    おわ.り    ことごとく",
    english: "the end, finish ",
  },
  {
    kanji: "逼",
    kana: "フク    ヒツ    ヒョク    ヒキ    せま.る    むかばき",
    english: "urge, force, imminent, spur on ",
  },
  {
    kanji: "紐",
    kana: "チュウ    ジュウ    ひも",
    english: "string, cord, braid, lace, tape, strap, ribbon ",
  },
  {
    kanji: "謬",
    kana: "ビュウ    ビョウ    ミュウ    あやま.る",
    english: "mistake ",
  },
  {
    kanji: "彪",
    kana: "ヒョウ    ヒュウ    あや",
    english: "spotted, mottled, patterned, small tiger ",
  },
  {
    kanji: "瓢",
    kana: "ヒョウ    ひさご    ふくべ",
    english: "gourd ",
  },
  {
    kanji: "豹",
    kana: "ヒョウ    ホウ",
    english: "leopard, panther ",
  },
  {
    kanji: "廟",
    kana: "ビョウ    ミョウ    たまや    みたまや    やしろ",
    english: "mausoleum, shrine, palace ",
  },
  {
    kanji: "錨",
    kana: "ビョウ    ミョウ    いかり",
    english: "anchor, grapnel ",
  },
  {
    kanji: "鋲",
    kana: "びょう",
    english: "rivet, tack, thumbtack, (kokuji) ",
  },
  {
    kanji: "蒜",
    kana: "サン    にんにく    ひる    のびる",
    english: "garlic ",
  },
  {
    kanji: "蛭",
    kana: "シツ    チツ    ひる",
    english: "leech ",
  },
  {
    kanji: "鰭",
    kana: "キ    ギ    ひれ",
    english: "fin ",
  },
  {
    kanji: "彬",
    kana: "ヒン    フン    うるわ.しい    あき.らか",
    english: "refined, gentle ",
  },
  {
    kanji: "斌",
    kana: "ヒン    フン    うるわ.しい    あき.らか",
    english: "beautiful, harmony of appearance ",
  },
  {
    kanji: "瀕",
    kana: "ヒン    ほとり",
    english: "shore, brink, verge ",
  },
  {
    kanji: "埠",
    kana: "フ    ホ    つか    はとば",
    english: "wharf ",
  },
  {
    kanji: "斧",
    kana: "フ    おの",
    english: "ax, hatchet ",
  },
  {
    kanji: "芙",
    kana: "フ",
    english: "lotus, Mt fuji ",
  },
  {
    kanji: "撫",
    kana: "ブ    フ    な.でる",
    english: "stroke, pat, smooth down ",
  },
  {
    kanji: "葡",
    kana: "ブ    ホ",
    english: "wild grape, Portugal ",
  },
  {
    kanji: "蕪",
    kana: "ブ    ム    かぶ    かぶら    あれる",
    english: "turnip ",
  },
  {
    kanji: "楓",
    kana: "フウ    かえで",
    english: "maple ",
  },
  {
    kanji: "葺",
    kana: "シュウ    あし    ふ.く    ふき",
    english: "thatch, cover, shingle, tile ",
  },
  {
    kanji: "蕗",
    kana: "ロ    ル    ふき",
    english: "butterbur, bog rhubarb ",
  },
  {
    kanji: "淵",
    kana: "エン    カク    コウ    ふち    かた.い    はなわ",
    english: "abyss, edge, deep pool, the depths ",
  },
  {
    kanji: "弗",
    kana: "フツ    ホチ    どる    ず",
    english: "dollar ",
  },
  {
    kanji: "鮒",
    kana: "ホ    フ    ブ    ふな",
    english: "carp ",
  },
  {
    kanji: "吻",
    kana: "フン    ブン    くちわき    くちさき",
    english: "proboscis ",
  },
  {
    kanji: "扮",
    kana: "フン    ハン    ヘン    ふん.する    やつ.す    よそお.う",
    english: "impersonate, dress up, disguise, thin shingles ",
  },
  {
    kanji: "焚",
    kana: "フン    ホン    ハン    た.く    や.く    やきがり",
    english: "burn, kindle, build a fire, boil, cook ",
  },
  {
    kanji: "糞",
    kana: "フン    くそ",
    english: "shit, feces, excrement ",
  },
  {
    kanji: "頁",
    kana: "ケツ    ぺえじ    おおが.い    かしら",
    english: "page, leaf ",
  },
  {
    kanji: "僻",
    kana: "ヘキ    ヒ    ヘイ    へき.する    ひが.む",
    english: "prejudice, bias, rural area ",
  },
  {
    kanji: "碧",
    kana: "ヘキ    ヒャク",
    english: "blue, green ",
  },
  {
    kanji: "瞥",
    kana: "ベツ    ヘツ",
    english: "glance at ",
  },
  {
    kanji: "箆",
    kana: "ヘイ    ハイ    へら    の    くし",
    english: "spatula, arrow shaft ",
  },
  {
    kanji: "篇",
    kana: "ヘン",
    english: "volume, chapter, book, editing, compilation ",
  },
  {
    kanji: "娩",
    kana: "ベン",
    english: "bear (children) ",
  },
  {
    kanji: "鞭",
    kana: "ベン    ヘン    むち    むちうつ",
    english: "whip, rod ",
  },
  {
    kanji: "鋪",
    kana: "ホ    フ    しく    みせ",
    english: "shop, store ",
  },
  {
    kanji: "圃",
    kana: "ホ    フ    はたけ    にわ",
    english: "garden, field ",
  },
  {
    kanji: "甫",
    kana: "ホ    フ    はじ.めて",
    english: "for the first time, not until ",
  },
  {
    kanji: "輔",
    kana: "ホ    フ    たす.ける",
    english: "help ",
  },
  {
    kanji: "戊",
    kana: "ボ    ボウ    つちのえ",
    english: "5th calendar sign ",
  },
  {
    kanji: "菩",
    kana: "ボ",
    english: "kind of grass, sacred tree ",
  },
  {
    kanji: "呆",
    kana: "ホウ    ほけ.る    ぼ.ける    あき.れる    おろか",
    english: "be amazed, disgusted, shocked ",
  },
  {
    kanji: "峯",
    kana: "ホウ    みね    ね",
    english: "peak, summit ",
  },
  {
    kanji: "庖",
    kana: "ホウ    くりや",
    english: "kitchen ",
  },
  {
    kanji: "捧",
    kana: "ホウ    ささ.げる",
    english: "lift up, give, offer, consecrate, sacrifice, dedicate ",
  },
  {
    kanji: "朋",
    kana: "ホウ    とも",
    english: "companion, friend ",
  },
  {
    kanji: "烹",
    kana: "ホウ    に.る",
    english: "boil, cook ",
  },
  {
    kanji: "萌",
    kana: "ホウ    も.える    きざ.す    めばえ    きざ.し",
    english: "show symptoms of, sprout, bud, malt ",
  },
  {
    kanji: "蓬",
    kana: "ホウ    ブ    よもぎ",
    english: "sagebrush, wormwood, mugwort ",
  },
  {
    kanji: "鋒",
    kana: "ホウ    ほこ.さき",
    english: "dagger, sword's point, festival car, float ",
  },
  {
    kanji: "鳳",
    kana: "ホウ    フウ",
    english: "male mythical bird ",
  },
  {
    kanji: "鵬",
    kana: "ホウ    おおとり",
    english: "phoenix ",
  },
  {
    kanji: "鉾",
    kana: "ボウ    ム    ほこ",
    english: "halberd, arms, festival float ",
  },
  {
    kanji: "吠",
    kana: "ハイ    ベイ    ほえ.る    ほ.える",
    english: "bark, howl, cry ",
  },
  {
    kanji: "卜",
    kana: "ボク    うらな.う    うらない",
    english: "divining, fortune-telling ",
  },
  {
    kanji: "穆",
    kana: "ボク    モク    やわ.らぐ",
    english: "respectful, mild, beautiful ",
  },
  {
    kanji: "釦",
    kana: "コウ    ク    ぼたん",
    english: "button ",
  },
  {
    kanji: "殆",
    kana: "タイ    サイ    ほとほと    ほとん.ど    あやうい",
    english: "almost, quite, really ",
  },
  {
    kanji: "幌",
    kana: "コウ    ほろ    とばり",
    english: "canopy, awning, hood, curtain ",
  },
  {
    kanji: "哩",
    kana: "リ    まいる",
    english: "mile ",
  },
  {
    kanji: "槙",
    kana: "テン    シン    まき    こずえ",
    english: "twig, ornamental evergreen ",
  },
  {
    kanji: "鮪",
    kana: "キ    ユウ    イ    まぐろ    しび",
    english: "tuna ",
  },
  {
    kanji: "柾",
    kana: "まさ    まさめ    まさき",
    english: "straight grain, spindle tree, (kokuji) ",
  },
  {
    kanji: "鱒",
    kana: "ソン    セン    ザン    ます",
    english: "salmon trout ",
  },
  {
    kanji: "亦",
    kana: "エキ    ヤク    また",
    english: "also, again ",
  },
  {
    kanji: "俣",
    kana: "また",
    english: "crotch, thigh, groin, (kokuji) ",
  },
  {
    kanji: "沫",
    kana: "マツ    バツ    あわ    しぶき    つばき",
    english: "splash, suds ",
  },
  {
    kanji: "迄",
    kana: "キツ    まで    およ.ぶ",
    english: "until, up to, as far as, to the extent ",
  },
  {
    kanji: "麿",
    kana: "まろ",
    english: "I, you, (kokuji) ",
  },
  {
    kanji: "蔓",
    kana: "マン    バン    はびこ.る    つる",
    english:
  "vine, tendril, influence, connections, good offices, spread, sprawl, thrive, rampant, powerful ",
  },
  {
    kanji: "巳",
    kana: "シ    み",
    english:
  "sign of the snake or serpent, 9-11AM, sixth sign of Chinese zodiac ",
  },
  {
    kanji: "箕",
    kana: "キ    み",
    english: "winnowing ",
  },
  {
    kanji: "湊",
    kana: "ソウ    みなと    あつ.まる",
    english: "port, harbor ",
  },
  {
    kanji: "蓑",
    kana: "サ    サイ    みの",
    english: "straw raincoat ",
  },
  {
    kanji: "稔",
    kana: "ネン    ジン    ニン    みの.る    みのり",
    english: "harvest, ripen ",
  },
  {
    kanji: "粍",
    kana: "ミリメートル    みり",
    english: "millimeter (affix), (kokuji) ",
  },
  {
    kanji: "牟",
    kana: "ボウ    ム",
    english: "pupil (eye), moo (cow sound) ",
  },
  {
    kanji: "鵡",
    kana: "ブ    ム",
    english: "cockatoo ",
  },
  {
    kanji: "椋",
    kana: "リョウ    むく",
    english: "type of deciduous tree, grey starling ",
  },
  {
    kanji: "姪",
    kana: "テツ    チツ    ジチ    イツ    イチ    めい    おい",
    english: "niece ",
  },
  {
    kanji: "牝",
    kana: "ヒン    めす    め-    めん",
    english: "female ",
  },
  {
    kanji: "棉",
    kana: "メン    わた",
    english: "cotton ",
  },
  {
    kanji: "緬",
    kana: "メン    ベン",
    english: "fine thread, Burma ",
  },
  {
    kanji: "摸",
    kana: "モ    モウ    バク    ボ    マク",
    english: "search, imitate, copy ",
  },
  {
    kanji: "孟",
    kana: "モウ    ボウ    ミョウ    かしら",
    english: "chief, beginning ",
  },
  {
    kanji: "蒙",
    kana: "モウ    ボウ    こうむ.る    おお.う    くら.い",
    english:
  "ignorance, darkness, get, receive, be subjected to, sustain, Mongolia ",
  },
  {
    kanji: "儲",
    kana: "チョ    もう.ける    もう.かる    もうけ    たくわ.える",
    english: "be profitable, yield profit ",
  },
  {
    kanji: "杢",
    kana: "モク",
    english: "woodworker, (kokuji) ",
  },
  {
    kanji: "勿",
    kana: "モチ    ブツ    ボツ    なか.れ    なし",
    english: "not, must not, do not, be not ",
  },
  {
    kanji: "尤",
    kana: "ユウ    もっと.も    とが.める",
    english: "reasonable, just, natural, superb, outstanding, plausible ",
  },
  {
    kanji: "籾",
    kana: "もみ",
    english: "unhulled rice, (kokuji) ",
  },
  {
    kanji: "貰",
    kana: "セイ    シャ    もら.う",
    english: "get, have, obtain ",
  },
  {
    kanji: "悶",
    kana: "モン    もだ.える    もだえ.る",
    english: "be in agony, worry ",
  },
  {
    kanji: "匁",
    kana: "もんめ    め    ひゃくめ",
    english: "monme, 3.75 grams, (kokuji) ",
  },
  {
    kanji: "也",
    kana: "ヤ    エ    なり    か    また",
    english: "to be (classical) ",
  },
  {
    kanji: "爺",
    kana: "ヤ    じい    じじい    おやじ    じじ    ちち",
    english: "old man, grampa ",
  },
  {
    kanji: "耶",
    kana: "ヤ    ジャ    か",
    english: "question mark ",
  },
  {
    kanji: "靖",
    kana: "セイ    ジョウ    やす.んじる",
    english: "peaceful ",
  },
  {
    kanji: "薮",
    kana: "ソウ    やぶ",
    english: "thicket, bush, underbrush, grove ",
  },
  {
    kanji: "鑓",
    kana: "やり",
    english: "spear, javelin, (kokuji) ",
  },
  {
    kanji: "愈",
    kana: "ユ    いよいよ    まさ.る",
    english:
  "be superior, heal, more and more, increasingly, finally, beyond doubt ",
  },
  {
    kanji: "佑",
    kana: "ユウ    ウ    たす.ける",
    english: "help, assist ",
  },
  {
    kanji: "宥",
    kana: "ユウ    なだ.める    ゆる.す",
    english: "soothe, calm, pacify ",
  },
  {
    kanji: "揖",
    kana: "イツ    ユ    シュウ    ユウ",
    english: "bow with arms folded, come together, assemble ",
  },
  {
    kanji: "柚",
    kana: "ユ    ユウ    ジク    ゆず",
    english: "citron ",
  },
  {
    kanji: "涌",
    kana: "ユウ    ヨウ    ユ    わ.く",
    english: "boil, ferment, seethe, uproar, breed ",
  },
  {
    kanji: "猷",
    kana: "ユウ    ヨウ    はかりごと    はか.る",
    english: "plan, scheme, plan, plot, way ",
  },
  {
    kanji: "祐",
    kana: "ユウ    ウ    たす.ける",
    english: "help ",
  },
  {
    kanji: "邑",
    kana: "ユウ    うれ.える    くに    むら",
    english: "village, rural community, right village radical (no. 163) ",
  },
  {
    kanji: "輿",
    kana: "ヨ    かご    こし",
    english: "palanquin, bier ",
  },
  {
    kanji: "傭",
    kana: "ヨウ    チョウ    やと.う    あた.い    ひと.しい",
    english: "employ, hire ",
  },
  {
    kanji: "楊",
    kana: "ヨウ    かわ    やなぎ",
    english: "willow ",
  },
  {
    kanji: "熔",
    kana: "ヨウ    と.ける    と.かす    いがた",
    english: "fuse, melt ",
  },
  {
    kanji: "耀",
    kana: "ヨウ    かがや.く    ひかり",
    english: "shine, sparkle, gleam, twinkle ",
  },
  {
    kanji: "蓉",
    kana: "ヨウ",
    english: "lotus ",
  },
  {
    kanji: "遥",
    kana: "ヨウ    はる.か",
    english: "far off, distant, long ago ",
  },
  {
    kanji: "慾",
    kana: "ヨク",
    english: "covetousness, greed, passion, desire, craving ",
  },
  {
    kanji: "淀",
    kana: "テン    デン    よど.む",
    english: "pool, eddy ",
  },
  {
    kanji: "螺",
    kana: "ラ    にし    にな",
    english: "a small, edible, helical fresh-water mollusk ",
  },
  {
    kanji: "莱",
    kana: "ライ    リ    あかざ    あわち    こうがい",
    english: "goosefoot, pigweed ",
  },
  {
    kanji: "洛",
    kana: "ラク",
    english: "Kyoto, the capital ",
  },
  {
    kanji: "蘭",
    kana: "ラン    ラ",
    english: "orchid, Holland ",
  },
  {
    kanji: "李",
    kana: "リ    すもも",
    english: "plum ",
  },
  {
    kanji: "裡",
    kana: "リ    うち    うら",
    english: "reverse, inside, palm, sole, rear, lining, wrong side ",
  },
  {
    kanji: "葎",
    kana: "リツ    むぐら",
    english: "creepers, trailing plants, vines ",
  },
  {
    kanji: "掠",
    kana: "リャク    リョウ    かす.める    かす.る    かす.れる",
    english: "pillage, rob, graze, skim, sweep over, cheat, hint ",
  },
  {
    kanji: "劉",
    kana: "リュウ    ル    ころ.す",
    english: "axe, kill ",
  },
  {
    kanji: "溜",
    kana: "リュウ    た.まる    たま.る    た.める    したた.る    たまり    ため",
    english: "collect, gather, be in arrears ",
  },
  {
    kanji: "琉",
    kana: "リュウ    ル",
    english: "lapis lazuli ",
  },
  {
    kanji: "亮",
    kana: "リョウ    あきらか",
    english: "clear, help ",
  },
  {
    kanji: "凌",
    kana: "リョウ    しの.ぐ",
    english:
  "endure, keep (rain)out, stave off, tide over, defy, slight, surpass ",
  },
  {
    kanji: "梁",
    kana: "リョウ    はり    うつばり    うちばり    やな    はし",
    english: "weir, fish trap, beam, girder ",
  },
  {
    kanji: "稜",
    kana: "リョウ    ロウ    いつ    かど",
    english: "angle, edge, corner, power, majesty ",
  },
  {
    kanji: "諒",
    kana: "リョウ    あきら.か    まことに",
    english: "fact, reality, understand, appreciate ",
  },
  {
    kanji: "遼",
    kana: "リョウ",
    english: "distant ",
  },
  {
    kanji: "淋",
    kana: "リン    さび.しい    さみ.しい",
    english: "lonely, deserted ",
  },
  {
    kanji: "燐",
    kana: "リン",
    english: "phosphorus ",
  },
  {
    kanji: "琳",
    kana: "リン",
    english: "jewel, tinkling of jewelry ",
  },
  {
    kanji: "鱗",
    kana: "リン    うろこ    こけ    こけら",
    english: "scales (fish) ",
  },
  {
    kanji: "麟",
    kana: "リン",
    english: "Chinese unicorn, genius, giraffe, bright, shining ",
  },
  {
    kanji: "伶",
    kana: "レイ    リョウ    わざおぎ",
    english: "actor ",
  },
  {
    kanji: "嶺",
    kana: "レイ    リョウ",
    english: "peak, summit ",
  },
  {
    kanji: "怜",
    kana: "レイ    レン    リョウ    あわ.れむ    さと.い",
    english: "wise ",
  },
  {
    kanji: "玲",
    kana: "レイ",
    english: "sound of jewels ",
  },
  {
    kanji: "苓",
    kana: "レイ    リョウ    みみなぐさ",
    english: "plant, herb, mushroom ",
  },
  {
    kanji: "憐",
    kana: "レン    あわ.れむ    あわ.れ",
    english: "pity, have mercy, sympathise, compassion ",
  },
  {
    kanji: "漣",
    kana: "レン    ラン    さざなみ",
    english: "ripples ",
  },
  {
    kanji: "煉",
    kana: "レン    ね.る",
    english: "refine metals, kneading over fire ",
  },
  {
    kanji: "簾",
    kana: "レン    すだれ    す",
    english: "bamboo screen, rattan blind ",
  },
  {
    kanji: "聯",
    kana: "レン    つら.なる    つら.ねる",
    english: "party, gang, clique ",
  },
  {
    kanji: "蓮",
    kana: "レン    はす    はちす",
    english: "lotus ",
  },
  {
    kanji: "魯",
    kana: "ロ    おろか",
    english: "foolish, Russia ",
  },
  {
    kanji: "櫓",
    kana: "ロ    やぐら    おおだて",
    english: "oar, tower ",
  },
  {
    kanji: "婁",
    kana: "ル    ロウ    つな.ぐ    ひ.く",
    english: "frequently, tie ",
  },
  {
    kanji: "牢",
    kana: "ロウ    かた.い    ひとや",
    english: "prison, jail, hardness ",
  },
  {
    kanji: "狼",
    kana: "ロウ    おおかみ",
    english: "wolf ",
  },
  {
    kanji: "聾",
    kana: "ロウ    ろう.する    つんぼ    みみしい",
    english: "deafness, deaf person, deafen ",
  },
  {
    kanji: "蝋",
    kana: "ロウ    みつろう    ろうそく",
    english: "wax ",
  },
  {
    kanji: "禄",
    kana: "ロク    さいわ.い    ふち",
    english: "fief, allowance, pension, grant, happiness ",
  },
  {
    kanji: "肋",
    kana: "ロク    あばら",
    english: "rib ",
  },
  {
    kanji: "倭",
    kana: "ワ    イ    したが.う",
    english: "Yamato, ancient Japan ",
  },
  {
    kanji: "歪",
    kana: "ワイ    エ    いが.む    いびつ    ひず.む    ゆが.む",
    english: "warp, bend, strained, distort ",
  },
  {
    kanji: "鷲",
    kana: "シュウ    ジュ",
    english: "eagle ",
  },
  {
    kanji: "亙",
    kana: "コウ    カン    わた.る    もと.める",
    english: "range, reach, extend, cover ",
  },
  {
    kanji: "亘",
    kana: "コウ    カン    わた.る    もと.める",
    english: "span, request ",
  },
  {
    kanji: "鰐",
    kana: "ガク    わに",
    english: "alligator, crocodile ",
  },
  {
    kanji: "詫",
    kana: "タ    わび    わび.しい    かこつ    わ.びる    わび.る",
    english: "apologize ",
  },
  {
    kanji: "藁",
    kana: "コウ    わら",
    english: "straw ",
  },
  {
    kanji: "蕨",
    kana: "ケツ    わらび",
    english: "bracken, fernbrake ",
  },
  {
    kanji: "椀",
    kana: "ワン    はち",
    english: "wooden or lacquered bowl ",
  },
  {
    kanji: "碗",
    kana: "ワン    こばち",
    english: "porcelain bowl, tea cup ",
  },
  {
    kanji: "侑",
    kana: "ユウ    ウ    すす.める    たす.ける",
    english: "urge to eat ",
  },
  {
    kanji: "儘",
    kana: "ジン    まま    ことごとく",
    english: "as it is, because ",
  },
  {
    kanji: "儚",
    kana: "ボウ    モウ    はかな.い    くら.い",
    english: "fleeting, fickle ",
  },
  {
    kanji: "凰",
    kana: "オオ    コウ    オウ    おおとり",
    english: "female phoenix bird ",
  },
  {
    kanji: "勁",
    kana: "ケイ    つよ.い",
    english: "strong ",
  },
  {
    kanji: "奎",
    kana: "ケイ    キ",
    english: "star, god of literature ",
  },
  {
    kanji: "崚",
    kana: "リョウ",
    english: "towering in a row ",
  },
  {
    kanji: "彗",
    kana: "スイ    エ    ケイ    セイ    ほうき",
    english: "comet ",
  },
  {
    kanji: "憫",
    kana: "ビン    ミン    あわれ.む    うれ.える",
    english: "anxiety, mercy ",
  },
  {
    kanji: "昴",
    kana: "コウ    ボウ    すばる",
    english: "the Pleiades ",
  },
  {
    kanji: "晏",
    kana: "アン    おそ.い",
    english: "late, quiet, sets (sun) ",
  },
  {
    kanji: "晨",
    kana: "シン    あした    とき    あさ",
    english: "morning, early ",
  },
  {
    kanji: "晟",
    kana: "セイ    ジョウ    あきらか",
    english: "clear ",
  },
  {
    kanji: "暉",
    kana: "キ    かが.やく",
    english: "shine, light ",
  },
  {
    kanji: "檜",
    kana: "カイ    ひのき    ひ",
    english: "Japanese cypress ",
  },
  {
    kanji: "栞",
    kana: "カン    しおり",
    english: "bookmark, guidebook ",
  },
  {
    kanji: "檮",
    kana: "トウ",
    english: "stump, foolish, ignorant ",
  },
  {
    kanji: "椰",
    kana: "ヤ    やし",
    english: "coconut tree ",
  },
  {
    kanji: "毬",
    kana: "キュウ    いが    まり",
    english: "burr, ball ",
  },
  {
    kanji: "洸",
    kana: "コウ",
    english: "sparkling water ",
  },
  {
    kanji: "洵",
    kana: "ジュン    シュン    の.ぶ    まこと.に",
    english: "alike, truth ",
  },
  {
    kanji: "濤",
    kana: "トウ    なみ",
    english: "waves, billows ",
  },
  {
    kanji: "滉",
    kana: "コウ    ひろ.い",
    english: "deep and broad ",
  },
  {
    kanji: "漑",
    kana: "ガイ    カイ    そそ.ぐ",
    english: "pour ",
  },
  {
    kanji: "漱",
    kana: "ソウ    シュウ    ス    くちすす.ぐ    くちそそ.ぐ    うがい    すす.ぐ",
    english: "gargle, rinse mouth ",
  },
  {
    kanji: "澪",
    kana: "レイ    みお",
    english: "water route, shipping channel ",
  },
  {
    kanji: "燎",
    kana: "リョウ    かがりび",
    english: "burn, bonfire ",
  },
  {
    kanji: "燿",
    kana: "ヨウ    かがや.く    ひかり",
    english: "shine ",
  },
  {
    kanji: "瑶",
    kana: "ヨウ    たま",
    english: "beautiful as a jewel ",
  },
  {
    kanji: "皓",
    kana: "コウ    しろ.い    ひか.る",
    english: "white, clear ",
  },
  {
    kanji: "眸",
    kana: "ボウ    ム    ひとみ",
    english: "pupil of the eye ",
  },
  {
    kanji: "礦",
    kana: "コウ    あらがね",
    english: "mine, mineral, ore ",
  },
  {
    kanji: "龝",
    kana: "シュウ    あき    とき",
    english: "autumn ",
  },
  {
    kanji: "笙",
    kana: "ショウ    ソウ    ふえ",
    english: "a reed instrument ",
  },
  {
    kanji: "綺",
    kana: "キ    あや",
    english: "figured cloth, beautiful ",
  },
  {
    kanji: "綸",
    kana: "リン    カン    いと",
    english: "thread, silk cloth ",
  },
  {
    kanji: "翔",
    kana: "ショウ    かけ.る    と.ぶ",
    english: "soar, fly ",
  },
  {
    kanji: "脩",
    kana: "シュウ    おさ.める    なが.い    ほじし",
    english: "dried meat ",
  },
  {
    kanji: "苒",
    kana: "ゼン",
    english: "flourishing, luxuriant ",
  },
  {
    kanji: "茉",
    kana: "マツ    バツ    マ",
    english: "jasmine ",
  },
  {
    kanji: "莉",
    kana: "リ    ライ    レイ",
    english: "jasmine ",
  },
  {
    kanji: "菫",
    kana: "キン    すみれ",
    english: "the violet ",
  },
  {
    kanji: "蛛",
    kana: "チュ    シュ",
    english: "spider ",
  },
  {
    kanji: "褌",
    kana: "コン    ふんどし",
    english: "loincloth ",
  },
  {
    kanji: "詢",
    kana: "ジュン    シュン    はか.る    まこと",
    english: "consult with ",
  },
  {
    kanji: "諄",
    kana: "シュン    ひちくど.い    くど.い    くどくど    ねんご.ろ",
    english: "tedious ",
  },
  {
    kanji: "赳",
    kana: "キュウ",
    english: "strong and brave ",
  },
  {
    kanji: "迪",
    kana: "テキ    みち    みち.びく    すす.む    いた.る",
    english: "edify, way, path ",
  },
  {
    kanji: "迺",
    kana: "ナイ    ダイ    アイ    の    すなわ.ち    なんじ",
    english: "in other words, thou, you, possessive particle ",
  },
  {
    kanji: "鉤",
    kana: "コウ    ク    かぎ",
    english: "hook, barb, gaff, [brackets] ",
  },
  {
    kanji: "韃",
    kana: "ダツ    タツ",
    english: "proper name ",
  },
  {
    kanji: "頌",
    kana: "ショウ    ジュ    ヨウ    かたち    たた.える    ほめ.る",
    english: "eulogy ",
  },
  {
    kanji: "颯",
    kana: "サツ    ソウ    さっ.と",
    english: "suddenly, smoothly ",
  },
  {
    kanji: "鴦",
    kana: "オウ",
    english: "female mandarin duck ",
  },
  {
    kanji: "鸚",
    kana: "オオ    イン    オウ    ヨウ",
    english: "parrot, parakeet ",
  },
  {
    kanji: "麒",
    kana: "キ",
    english: "Chinese unicorn, genius, giraffe, bright, shining ",
  },
  {
    kanji: "黎",
    kana: "レイ    リ    くろ.い",
    english: "dark, black, many ",
  },
  {
    kanji: "凜",
    kana: "リン    きびし.い",
    english: "cold, strict, severe ",
  },
  {
    kanji: "熙",
    kana: "キ    たのし.む    ひか.る    ひろ.い    よろこ.ぶ    かわ.く    あきらか    ひろ.める    ひろ.まる",
    english: "bright, sunny, prosperous, merry ",
  },
  {
    kanji: "穐",
    kana: "シュウ    あき    とき",
    english: "autumn ",
  },
  {
    kanji: "芦",
    kana: "ロ    あし    よし",
    english: "reed, bullrush ",
  },
  {
    kanji: "欝",
    kana: "ウツ    ウン    うっ.する    ふさ.ぐ    しげ.る",
    english: "gloom, depression, melancholy ",
  },
  {
    kanji: "頴",
    kana: "エイ    ほさき    のぎ",
    english: "heads of grain, cleverness ",
  },
  {
    kanji: "鈎",
    kana: "コウ    ク    かぎ",
    english: "hook, barb, gaff, brackets ",
  },
  {
    kanji: "栢",
    kana: "ハク    ヒャク    かしわ",
    english: "oak ",
  },
  {
    kanji: "砿",
    kana: "コウ    あらがね",
    english: "ore ",
  },
  {
    kanji: "碕",
    kana: "キ    さき    さい    みさき",
    english: "cape, spit, promontory ",
  },
  {
    kanji: "咋",
    kana: "サク    サクサ    か.む    く.う    くら.う",
    english: "shout, chew, eat ",
  },
  {
    kanji: "讐",
    kana: "シュウ    あだ    むく.いる    あ.たる",
    english: "enemy, revenge ",
  },
  {
    kanji: "瀧",
    kana: "ロウ    ソウ    たき",
    english: "waterfall, rapids, cascade ",
  },
  {
    kanji: "屠",
    kana: "ト    チョ    ほふ.る",
    english: "slaughter, butcher, slay ",
  },
  {
    kanji: "梼",
    kana: "トウ",
    english: "block of wood, blockhead, stupid ",
  },
  {
    kanji: "涛",
    kana: "トウ    なみ",
    english: "waves, billows ",
  },
  {
    kanji: "燈",
    kana: "トウ    ひ    ほ-    ともしび    とも.す    あかり",
    english: "nonstandard for J825 ",
  },
  {
    kanji: "迩",
    kana: "ジ    ニ    ちか.い",
    english: "approach, near, close ",
  },
  {
    kanji: "禰",
    kana: "ネ    デイ    ナイ",
    english: "ancestral shrine ",
  },
  {
    kanji: "廼",
    kana: "ナイ    ダイ    ノ    アイ    すなわ.ち    なんじ",
    english: "in other words, thou, you, possessive particle ",
  },
  {
    kanji: "櫨",
    kana: "ロ    はぜ",
    english: "wax tree, sumac ",
  },
  {
    kanji: "釆",
    kana: "ハン    ベン    と    いろどり",
    english: "separate, divide ",
  },
  {
    kanji: "桧",
    kana: "カイ    ひのき    ひ",
    english: "Japanese cypress ",
  },
  {
    kanji: "冨",
    kana: "フ    フウ    と.む    とみ",
    english: "enrich, wealthy, abundant ",
  },
  {
    kanji: "桝",
    kana: "ます",
    english: "measuring box ",
  },
  {
    kanji: "侭",
    kana: "ジン    まま    ことごとく",
    english: "as it is, because ",
  },
  {
    kanji: "龍",
    kana: "リュウ    リョウ    ロウ    たつ",
    english: "dragon, imperial ",
  },
  {
    kanji: "榔",
    kana: "ロウ",
    english: "betel palm tree ",
  },
  {
    kanji: "篭",
    kana: "ロウ    ル    かご    こ.める    こも.る    こ.む",
    english: "seclude oneself, cage, coop, implied ",
  },
  {
    kanji: "弌",
    kana: "イチ    イツ    ひと-    ひと.つ",
    english: "one ",
  },
  {
    kanji: "丐",
    kana: "カイ    こ.う",
    english: "beggar, beg, give ",
  },
  {
    kanji: "丕",
    kana: "ヒ    おお.きい",
    english: "large, great, grand, glorious, distinguished ",
  },
  {
    kanji: "个",
    kana: "カ    コ",
    english: "counter for articles, individual ",
  },
  {
    kanji: "丱",
    kana: "カン    ケン",
    english: "saguaro-like kanji, horn-shaped locks of hair, young, tender ",
  },
  {
    kanji: "丶",
    kana: "チュ    てん",
    english: "dot, tick or dot radical (no. 3) ",
  },
  {
    kanji: "丿",
    kana: "ヘツ    えい    よう",
    english: "kana-no radical (no. 4) ",
  },
  {
    kanji: "乂",
    kana: "ガイ    カイ    ゲ    おさ.める    か.る",
    english: "mow, cut grass, subdue ",
  },
  {
    kanji: "乖",
    kana: "カイ    そむ.く    もとる",
    english: "oppose, disobey ",
  },
  {
    kanji: "乘",
    kana: "ジョウ    の.る    の.せる",
    english: "power, multiplication, record, counter for vehicles ",
  },
  {
    kanji: "亂",
    kana: "ラン    ロン    みだ.れる    みだ.る    みだ.す    みだ.れ    おさ.める    わた.る",
    english: "war, disorder, riot, disturb ",
  },
  {
    kanji: "亅",
    kana: "ケツ    かぎ    はねぼう",
    english: "feathered stick, barb ",
  },
  {
    kanji: "豫",
    kana: "ヨ    シャ    あらかじ.め",
    english: "relaxed, comfortable, at ease ",
  },
  {
    kanji: "亊",
    kana: "ジ    シ    ズ    こと    つか.う    つか.える",
    english: "affair, matter, business, to serve, accident, incident ",
  },
  {
    kanji: "舒",
    kana: "ジョ    ショ    の.べる",
    english: "stretch, loosen, open, relax, mention ",
  },
  {
    kanji: "弍",
    kana: "ニ    ジ    ふた-    ふた.つ    ふたた.び",
    english: "two ",
  },
  {
    kanji: "于",
    kana: "ウ    ク    ここに    ああ    おいて    に    より    を",
    english: "going, from ",
  },
  {
    kanji: "亞",
    kana: "ア    アシア    つ.ぐ",
    english: "rank, follow ",
  },
  {
    kanji: "亟",
    kana: "キョク    キ    ケ    しばしば    すみやか",
    english: "fast, quick, sudden ",
  },
  {
    kanji: "亠",
    kana: "トウ    なべぶた",
    english: "kettle lid ",
  },
  {
    kanji: "亢",
    kana: "コウ    たかぶる",
    english: "high spirits ",
  },
  {
    kanji: "亰",
    kana: "キョウ    ケイ    キン    みやこ",
    english: "capital city ",
  },
  {
    kanji: "亳",
    kana: "ハク",
    english: "an ancient Chinese capital ",
  },
  {
    kanji: "亶",
    kana: "タン    セン    あつ.い    ほしいまま",
    english: "truly, wholly, cordial ",
  },
  {
    kanji: "从",
    kana: "ショウ    ジュウ    ジュ    したが.う    したが.える    より",
    english: "two people ",
  },
  {
    kanji: "仍",
    kana: "ジョウ    ニョウ    よ.って    しきりに    なお    よる",
    english: "therefore, consequently ",
  },
  {
    kanji: "仄",
    kana: "ソク    ほの.か    ほの-    ほの.めかす    ほの.めく    かたむ.く",
    english: "be seen dimly, suggest, intimate, faint, stupid, hint ",
  },
  {
    kanji: "仆",
    kana: "フ    たお.れる",
    english: "fall, lie down, bend ",
  },
  {
    kanji: "仂",
    kana: "ドウ    リュク    リキ    ロク    リョク    はたら.く",
    english: "surplus or excess, remainder ",
  },
  {
    kanji: "仗",
    kana: "ジョウ    チョウ    つえ    つわもの    まわり    よる",
    english: "cane, stick ",
  },
  {
    kanji: "仞",
    kana: "ジン    はか.る",
    english: "fathom ",
  },
  {
    kanji: "仭",
    kana: "ジン    はか.る",
    english: "fathom ",
  },
  {
    kanji: "仟",
    kana: "セン    ち    かしら",
    english: "thousand ",
  },
  {
    kanji: "价",
    kana: "カイ",
    english: "man with shellfish kanji ",
  },
  {
    kanji: "伉",
    kana: "コウ    たぐ.い    なら.ぶ",
    english: "same kind, compare with ",
  },
  {
    kanji: "佚",
    kana: "イツ    テツ    たのし.む    のが.れる",
    english: "lost, hide, peace, mistake, beautiful, in turn ",
  },
  {
    kanji: "估",
    kana: "コ    あきな.う    あた.い",
    english: "price, business, selling ",
  },
  {
    kanji: "佛",
    kana: "ブツ    フツ    ほとけ",
    english: "France ",
  },
  {
    kanji: "佝",
    kana: "コウ    ク    せむし",
    english: "foolish, stopped over ",
  },
  {
    kanji: "佗",
    kana: "タ    イ    わび.しい    わび    ほか    わ.びる",
    english: "proud, lonely ",
  },
  {
    kanji: "佇",
    kana: "チョ    たたず.む",
    english: "stop, linger, appearance, figure, bearing ",
  },
  {
    kanji: "佶",
    kana: "キツ    キチ",
    english: "healthy, correct ",
  },
  {
    kanji: "侈",
    kana: "シ    おご.る",
    english: "luxury, pride ",
  },
  {
    kanji: "侏",
    kana: "シュ",
    english: "actor, supporting post ",
  },
  {
    kanji: "侘",
    kana: "タ    わび.しい    ほこ.る    わ.びる",
    english: "proud, lonely ",
  },
  {
    kanji: "佻",
    kana: "チョウ    ジョウ    ヨウ    かる.い",
    english: "frivolity ",
  },
  {
    kanji: "佩",
    kana: "ハイ    は.く    お.びる    おびだま",
    english: "wear, put on (a sword) ",
  },
  {
    kanji: "佰",
    kana: "ヒャク    ハク    おさ",
    english: "100, hundred, leader of 100 men, east-west path between paddies ",
  },
  {
    kanji: "佯",
    kana: "ヨウ    いつわ.る",
    english: "pretend, feign, false, deceitful ",
  },
  {
    kanji: "來",
    kana: "ライ    タイ    く.る    きた.る    きた.す    き.たす    き.たる",
    english: "come, due, next, cause, become ",
  },
  {
    kanji: "侖",
    kana: "リン    ロン    おも.う",
    english: "think, be methodical ",
  },
  {
    kanji: "俔",
    kana: "ケン    たと.える    うかが.う",
    english: "compare, spy on ",
  },
  {
    kanji: "俟",
    kana: "シ    ま.つ",
    english: "wait, depend on ",
  },
  {
    kanji: "俎",
    kana: "ソ    ショ    いた    まないた",
    english: "altar of sacrifice, chopping board ",
  },
  {
    kanji: "俘",
    kana: "フ    とりこ",
    english: "captive ",
  },
  {
    kanji: "俛",
    kana: "フ    ベン    メン    ふ.せる",
    english: "look down, diligent ",
  },
  {
    kanji: "俑",
    kana: "ヨウ    トウ    ユウ",
    english: "effigy ",
  },
  {
    kanji: "俚",
    kana: "リ    いや.しい",
    english: "rustic, ill mannered ",
  },
  {
    kanji: "俐",
    kana: "リ    かしこ.い",
    english: "clever ",
  },
  {
    kanji: "俤",
    kana: "おもかげ",
    english: "(kokuji) ",
  },
  {
    kanji: "俥",
    kana: "くるま",
    english: "jinricksha, (kokuji) ",
  },
  {
    kanji: "倚",
    kana: "イ    キ    よ.る    たの.む",
    english: "lean on, rest against ",
  },
  {
    kanji: "倨",
    kana: "キョ    コ    おご.る",
    english: "pride, squatting with legs outstretched ",
  },
  {
    kanji: "倔",
    kana: "クツ    つよ.い",
    english: "stubborn ",
  },
  {
    kanji: "倪",
    kana: "ゲイ    ガイ    きわ",
    english: "stare ",
  },
  {
    kanji: "倥",
    kana: "コウ    ぬか.る",
    english: "boorish, urgent ",
  },
  {
    kanji: "倅",
    kana: "サイ    ソツ    ソチ    せがれ",
    english: "son, my son ",
  },
  {
    kanji: "伜",
    kana: "サイ    ソツ    ソチ    せがれ",
    english: "son, my son ",
  },
  {
    kanji: "俶",
    kana: "シュク    テキ    はじめ    よい",
    english: "beginning, good, excel ",
  },
  {
    kanji: "倡",
    kana: "ショウ    とな.える    わざおぎ",
    english: "prostitute, actor ",
  },
  {
    kanji: "倩",
    kana: "セン    セイ    つらつら    うつく.しい",
    english: "carefully, attentively, profoundly ",
  },
  {
    kanji: "倬",
    kana: "タク",
    english: "large, clear, remarkable ",
  },
  {
    kanji: "俾",
    kana: "フ    ヒ    ヘイ    かしずく    しむ",
    english: "tutor ",
  },
  {
    kanji: "俯",
    kana: "フ    ふ.す    うつむ.く    ふ.せる",
    english: "bend down, lie prostrate ",
  },
  {
    kanji: "們",
    kana: "モン    ともがら",
    english: "plural suffix ",
  },
  {
    kanji: "倆",
    kana: "リョウ    たくみ",
    english: "skill ",
  },
  {
    kanji: "偃",
    kana: "エン    ふ.せる",
    english: "dam, weir ",
  },
  {
    kanji: "假",
    kana: "カ    ケ    かり    かり.る",
    english: "temporary, interim, assumed (name), informal ",
  },
  {
    kanji: "會",
    kana: "カイ    エ    あ.う    あ.わせる    あつ.まる",
    english: "meet, party, association, interview, join ",
  },
  {
    kanji: "偕",
    kana: "カイ    ともに",
    english: "together ",
  },
  {
    kanji: "偐",
    kana: "ゲン    ガン",
    english: "fake, counterfeit ",
  },
  {
    kanji: "偈",
    kana: "ゲ    ケツ    ケイ    いこ.う",
    english: "verse in praise of Buddha, fast, healthy, rest ",
  },
  {
    kanji: "做",
    kana: "サ    サク    ソ    な.す    つく.る",
    english: "make ",
  },
  {
    kanji: "偖",
    kana: "シャ    さて",
    english: "well, now ",
  },
  {
    kanji: "偬",
    kana: "ソウ    くる.しむ",
    english: "feel pain, suffer ",
  },
  {
    kanji: "偸",
    kana: "ツ    トウ    チュウ    ぬす.む",
    english: "steal ",
  },
  {
    kanji: "傀",
    kana: "カイ    おおき.い",
    english: "large ",
  },
  {
    kanji: "傚",
    kana: "コウ    なら.う",
    english: "imitate, follow, emulate ",
  },
  {
    kanji: "傅",
    kana: "フ    かしず.く    つく    もり",
    english: "tutor ",
  },
  {
    kanji: "傴",
    kana: "ク    ウ    かが.む    せむし",
    english: "bend over, stoop, bow ",
  },
  {
    kanji: "僉",
    kana: "セン    みな",
    english: "all ",
  },
  {
    kanji: "僊",
    kana: "セン",
    english: "hermit ",
  },
  {
    kanji: "傳",
    kana: "テン    デン    つた.わる    つた.える    つた.う    つて",
    english: "summon, propagate, transmit ",
  },
  {
    kanji: "僂",
    kana: "ロウ    ル    かが.む",
    english: "bend over ",
  },
  {
    kanji: "僖",
    kana: "キ    よろこ.ぶ",
    english: "enjoyment, pleasure ",
  },
  {
    kanji: "僞",
    kana: "ギ    カ    いつわ.る    いつわ.り    にせ",
    english: "lie, falsehood, deceive, pretend ",
  },
  {
    kanji: "僥",
    kana: "ギョウ    キョウ",
    english: "luck, seek, desire ",
  },
  {
    kanji: "僭",
    kana: "シン    セン    せん.する    おご.る",
    english: "boastfully usurp ",
  },
  {
    kanji: "僣",
    kana: "シン    セン    せん.する    おご.る",
    english: "boastfully usurp ",
  },
  {
    kanji: "僮",
    kana: "トウ    ドウ    しもべ    わらべ",
    english: "child, servant, foolishness ",
  },
  {
    kanji: "價",
    kana: "カ    ケ    あたい",
    english: "price, value ",
  },
  {
    kanji: "僵",
    kana: "キョウ    たお.れる",
    english: "fall down, collapse ",
  },
  {
    kanji: "儉",
    kana: "ケン    つま.しい    つづまやか",
    english: "economy, thrifty ",
  },
  {
    kanji: "儁",
    kana: "シュン    すぐ.れる",
    english: "excellence, talented person ",
  },
  {
    kanji: "儂",
    kana: "ドウ    ノウ    わし    かれ",
    english: "I, my, he, his, me (used by old people) ",
  },
  {
    kanji: "儖",
    kana: "ラン",
    english: "ugly ",
  },
  {
    kanji: "儕",
    kana: "セイ    サイ    ともがら",
    english: "companion ",
  },
  {
    kanji: "儔",
    kana: "チュウ    ジュ    ともがら",
    english: "companion, similar kind ",
  },
  {
    kanji: "儡",
    kana: "ライ",
    english: "defeat ",
  },
  {
    kanji: "儺",
    kana: "ナ    ダ    おにやらい",
    english: "exorcism ",
  },
  {
    kanji: "儷",
    kana: "レイ    つれあい    ならぶ",
    english: "companion ",
  },
  {
    kanji: "儼",
    kana: "ゲン    いかめ.しい    おごそか",
    english: "serious, untouched, solemnly, majestically ",
  },
  {
    kanji: "儻",
    kana: "トウ    あるいは    すぐ.れる    もし",
    english: "excel, surpass, if, perhaps ",
  },
  {
    kanji: "儿",
    kana: "ジン    ニン    がい    にんにょう    ひとあし",
    english: "legs radical (no. 10) ",
  },
  {
    kanji: "兀",
    kana: "コツ",
    english: "high & level, lofty, bald, dangerous ",
  },
  {
    kanji: "兒",
    kana: "ジ    ニ    ゲイ    こ",
    english: "child, young of animals ",
  },
  {
    kanji: "兌",
    kana: "ダ    エイ    エツ    タイ    よろこ.ぶ",
    english: "exchange ",
  },
  {
    kanji: "兔",
    kana: "ト    ツ    うさぎ",
    english: "rabbit, hare ",
  },
  {
    kanji: "兢",
    kana: "キョウ    おそ.れる    つつ.しむ",
    english: "discreet, careful ",
  },
  {
    kanji: "竸",
    kana: "キョウ    ケイ    きそ.う    せ.る    くら.べる",
    english: "contest, race ",
  },
  {
    kanji: "兩",
    kana: "リョウ    ふたつ",
    english: "old Japanese coin, both, counter for vehicles, two ",
  },
  {
    kanji: "兪",
    kana: "ツ    トウ    ユ    しかり",
    english: "steal ",
  },
  {
    kanji: "兮",
    kana: "ケイ",
    english: "auxiliary word for euphony or emphasis ",
  },
  {
    kanji: "冀",
    kana: "キ    こいねが.う    こいねが.わくは",
    english: "hope for, wish, Hebei province ",
  },
  {
    kanji: "冂",
    kana: "キョウ    ケイ    まきがまえ    えながまえ    どうがまえ    けいがまえ",
    english: "upside-down box radical (no. 11) ",
  },
  {
    kanji: "囘",
    kana: "カイ    エ    まわ.る    まわ.す    もとお.る    か.える",
    english: "round ",
  },
  {
    kanji: "册",
    kana: "サツ    サク    ふみ",
    english: "counter for books, volume ",
  },
  {
    kanji: "冉",
    kana: "ゼン    ネン    あや.うい",
    english: "red, tan ",
  },
  {
    kanji: "冏",
    kana: "ケイ    キョウ    ソウ    あきらか",
    english: "clear, bright ",
  },
  {
    kanji: "冑",
    kana: "チュウ    かぶと    よろい",
    english: "helmet ",
  },
  {
    kanji: "冓",
    kana: "コウ    かま.える",
    english: "put together, inner palace ",
  },
  {
    kanji: "冕",
    kana: "ベン    メン    かんむり",
    english: "crown ",
  },
  {
    kanji: "冖",
    kana: "ベキ    わかんむり    べきかんむり",
    english: "wa-shaped crown radical (no. 14) ",
  },
  {
    kanji: "冤",
    kana: "エン",
    english: "false charge, hatred ",
  },
  {
    kanji: "冦",
    kana: "コウ    あだ.する",
    english: "foe, enemy, revenge, grudge, feud ",
  },
  {
    kanji: "冢",
    kana: "チョウ    つか    おお.う",
    english: "mound, hillock ",
  },
  {
    kanji: "冩",
    kana: "シャ    うつ.す    うつ.る",
    english: "write, draw, sketch, compose ",
  },
  {
    kanji: "冪",
    kana: "ベキ",
    english: "power, exponent ",
  },
  {
    kanji: "冫",
    kana: "ヒョウ    こおり    にすい",
    english: "two-stroke water radical or ice radical (no. 15) ",
  },
  {
    kanji: "决",
    kana: "ケチ    ケツ    き.める    き.まる    さ.く",
    english: "decide, determine, judge ",
  },
  {
    kanji: "冱",
    kana: "ゴ    コ    さ.える    こお.る    ひ.える",
    english: "freeze, be cold, be clear, attain skill ",
  },
  {
    kanji: "冲",
    kana: "チュウ    おき    おきつ    ちゅう.する    わく",
    english: "offing, open sea, rise high into sky ",
  },
  {
    kanji: "冰",
    kana: "ヒョウ    こおり    ひ    こお.る",
    english: "ice, hail ",
  },
  {
    kanji: "况",
    kana: "キョウ    まし.て    いわ.んや    おもむき",
    english: "still more, still less ",
  },
  {
    kanji: "冽",
    kana: "レツ    レイ    きよ.い",
    english: "cold ",
  },
  {
    kanji: "凅",
    kana: "コ    カク    か.れる    か.らす    こお.る",
    english: "wither, droop, lame ",
  },
  {
    kanji: "凉",
    kana: "リョウ    すず.しい    すず.む    すず.やか    うす.い    ひや.す    まことに",
    english: "nice and cool ",
  },
  {
    kanji: "凛",
    kana: "リン    きびし.い",
    english: "cold ",
  },
  {
    kanji: "几",
    kana: "キ    きにょう    つくえ",
    english: "table, table enclosure ",
  },
  {
    kanji: "處",
    kana: "ショ    ところ    -こ    お.る",
    english: "place, locale, department ",
  },
  {
    kanji: "凩",
    kana: "こがらし",
    english: "wintry wind, (kokuji) ",
  },
  {
    kanji: "凭",
    kana: "ヒョウ    ヘイ    もた.れる    よ.る",
    english: "lean on, recline on, lie heavy ",
  },
  {
    kanji: "凵",
    kana: "カン    うけばこ    かんにょう",
    english: "open box enclosure ",
  },
  {
    kanji: "凾",
    kana: "カン    はこ    い.れる",
    english: "box ",
  },
  {
    kanji: "刄",
    kana: "ジン    ニン    は    やいば    き.る",
    english: "blade, sword, edge ",
  },
  {
    kanji: "刋",
    kana: "カン    セン    き.る    けず.る",
    english: "cut, whittle ",
  },
  {
    kanji: "刔",
    kana: "ケツ    えぐ.る",
    english: "scoop out, gouge ",
  },
  {
    kanji: "刎",
    kana: "フン    は.ねる    くびは.ねる",
    english: "decapitate ",
  },
  {
    kanji: "刧",
    kana: "コウ    ゴウ    キョウ    おびや.かす",
    english: "threat, long ages ",
  },
  {
    kanji: "刪",
    kana: "サン    けず.る",
    english: "cut down ",
  },
  {
    kanji: "刮",
    kana: "カツ    こそ.げる    けず.る",
    english: "scrape off ",
  },
  {
    kanji: "刳",
    kana: "コ    く.る    えぐ.る",
    english: "clear, serene, cold ",
  },
  {
    kanji: "剏",
    kana: "ソウ    ショウ    はじ.める",
    english: "begin, be damaged, break, fall ",
  },
  {
    kanji: "剄",
    kana: "ケイ    くびき.る",
    english: "beheading ",
  },
  {
    kanji: "剋",
    kana: "コク    かつ",
    english: "victory ",
  },
  {
    kanji: "剌",
    kana: "ラツ    もと.る",
    english: "opposed, biased ",
  },
  {
    kanji: "剞",
    kana: "キ    きざ.む",
    english: "carve ",
  },
  {
    kanji: "剔",
    kana: "テキ    テイ    えぐ.る    そ.る",
    english: "cutting ",
  },
  {
    kanji: "剪",
    kana: "セン    き.る    つ.む",
    english: "clip, snip, cut ",
  },
  {
    kanji: "剴",
    kana: "ガイ    カイ",
    english: "scythe, suitability ",
  },
  {
    kanji: "剩",
    kana: "ジョウ    あまつさえ    あま.り    あま.る",
    english: "leftovers, residue, remains ",
  },
  {
    kanji: "剳",
    kana: "トウ    サツ    チョウ    さ.す",
    english: "sickle, stay, remain ",
  },
  {
    kanji: "剿",
    kana: "ソウ    ショウ",
    english: "destroy ",
  },
  {
    kanji: "剽",
    kana: "ヒョウ    おびや.かす    さす",
    english: "threat ",
  },
  {
    kanji: "劍",
    kana: "ケン    つるぎ",
    english: "sword ",
  },
  {
    kanji: "劔",
    kana: "ケン    つるぎ",
    english: "sword ",
  },
  {
    kanji: "劒",
    kana: "ケン    つるぎ",
    english: "sword ",
  },
  {
    kanji: "剱",
    kana: "ケン    つるぎ",
    english: "sword ",
  },
  {
    kanji: "劈",
    kana: "ヘキ    ヒャク    つんざ.く    さく",
    english: "break, tear, split ",
  },
  {
    kanji: "劑",
    kana: "ザイ    スイ    セイ    かる    けず.る",
    english: "medicine, drug, dose ",
  },
  {
    kanji: "辨",
    kana: "ベン    ヘン    わきま.える    わ.ける    はなびら    あらそ.う",
    english: "discrimination, dispose of, distinguish ",
  },
  {
    kanji: "辧",
    kana: "ベン    ヘン    わきま.える    わ.ける    はなびら    あらそ.う",
    english: "manage, do, handle, deal with ",
  },
  {
    kanji: "劬",
    kana: "ク    つか.れる",
    english: "become tired, work busily ",
  },
  {
    kanji: "劭",
    kana: "ショウ    つと.める",
    english: "recommend, work hard, beautiful ",
  },
  {
    kanji: "劼",
    kana: "カツ    ケチ",
    english: "be careful, hard, strive ",
  },
  {
    kanji: "劵",
    kana: "ケン    てがた    わりふ",
    english: "become fatigued, stop ",
  },
  {
    kanji: "勍",
    kana: "ケイ    つよ.い",
    english: "strong, fierce ",
  },
  {
    kanji: "勗",
    kana: "キョク    ボウ    つと.める",
    english: "be diligent ",
  },
  {
    kanji: "勞",
    kana: "ロウ    ろう.する    いたわ.る    いた.ずき    ねぎら.う    つか.れる    ねぎら.い",
    english: "thank for, reward for ",
  },
  {
    kanji: "勣",
    kana: "セキ    シャク    いさお    つむ.ぐ",
    english: "merit, achievement ",
  },
  {
    kanji: "勦",
    kana: "ソウ    ショウ",
    english: "destroy, steal ",
  },
  {
    kanji: "飭",
    kana: "チョク    チキ    いまし.める    ただ.す",
    english: "correct, rectify ",
  },
  {
    kanji: "勠",
    kana: "リク    あわ.せる",
    english: "combine, join forces ",
  },
  {
    kanji: "勳",
    kana: "クン    いさお",
    english: "meritorious deed, merits, rank ",
  },
  {
    kanji: "勵",
    kana: "レイ    はげ.む    はげ.ます",
    english: "strive, encourage ",
  },
  {
    kanji: "勸",
    kana: "カン    ケン    すす.める",
    english: "persuade, recommend, advise, encourage, offer ",
  },
  {
    kanji: "勹",
    kana: "ホウ    つつ.む    つつみがまえ",
    english: "wrapping enclosure ",
  },
  {
    kanji: "匆",
    kana: "ソウ    いそが.しい",
    english: "rush, hurry, be flustered ",
  },
  {
    kanji: "匈",
    kana: "キョウ",
    english: "turmoil, Hungary ",
  },
  {
    kanji: "甸",
    kana: "デン    テン    かり",
    english: "region around the imperial capital, outskirts ",
  },
  {
    kanji: "匍",
    kana: "ホ    は.う",
    english: "crawl, creep ",
  },
  {
    kanji: "匐",
    kana: "ホク    フク",
    english: "crawl ",
  },
  {
    kanji: "匏",
    kana: "ホ    ホウ    ひさご",
    english: "gourd ",
  },
  {
    kanji: "匕",
    kana: "ヒ    さじ    さじのひ",
    english: "spoon ",
  },
  {
    kanji: "匚",
    kana: "ホウ    はこがまえ",
    english: "box-on-side enclosure ",
  },
  {
    kanji: "匣",
    kana: "コウ    はこ",
    english: "box ",
  },
  {
    kanji: "匯",
    kana: "キ    エ    カイ    ワイ    がい    めぐ.る",
    english: "whirl, swirl ",
  },
  {
    kanji: "匱",
    kana: "キ    ひつ",
    english: "chest, coffer, rice tub ",
  },
  {
    kanji: "匳",
    kana: "レン    くしげ    はこ",
    english: "cosmetics box ",
  },
  {
    kanji: "匸",
    kana: "ケイ    かくしがまえ",
    english: "hiding enclosure radical (no. 23) ",
  },
  {
    kanji: "區",
    kana: "ク    オウ    コウ",
    english: "ward, district ",
  },
  {
    kanji: "卆",
    kana: "ソツ    シュツ    そっ.する    お.える    お.わる    ついに    にわか",
    english: "soldier, private, die ",
  },
  {
    kanji: "卅",
    kana: "ソウ    さんじゅう",
    english: "thirty ",
  },
  {
    kanji: "丗",
    kana: "セイ    セ    ソウ    よ    さんじゅう",
    english: "thirty ",
  },
  {
    kanji: "卉",
    kana: "キ    ケ    くさ",
    english: "grass ",
  },
  {
    kanji: "卍",
    kana: "バン    マン    まんじ",
    english: "swastika, gammadion, fylfot ",
  },
  {
    kanji: "凖",
    kana: "ジュン    じゅん.じる    じゅん.ずる    なぞら.える    のり    ひと.しい    みずもり",
    english: "correspond to, proportionate to, conform, imitate ",
  },
  {
    kanji: "卞",
    kana: "ベン    ヘン    ハン",
    english: "law, rule, rash, hasty ",
  },
  {
    kanji: "卩",
    kana: "セツ    わりふ    ふしづくり",
    english: "seal ",
  },
  {
    kanji: "卮",
    kana: "シ    さかずき",
    english: "large goblet, apt, fitting ",
  },
  {
    kanji: "夘",
    kana: "ボウ    う",
    english: "rabbit (zodiac sign) ",
  },
  {
    kanji: "卻",
    kana: "キャク    かえ.って    しりぞ.く    しりぞ.ける",
    english: "instead, on the contrary, rather ",
  },
  {
    kanji: "卷",
    kana: "カン    ケン    ま.く    まき",
    english: "volume, book, part ",
  },
  {
    kanji: "厂",
    kana: "カン    かりがね    がんだれ",
    english: "wild goose, trailing cliff ",
  },
  {
    kanji: "厖",
    kana: "ボウ    おおき.い",
    english: "large, mix ",
  },
  {
    kanji: "厠",
    kana: "シ    ショク    かわや",
    english: "privy, toilet ",
  },
  {
    kanji: "厦",
    kana: "カ    サ    いえ",
    english: "house ",
  },
  {
    kanji: "厥",
    kana: "ケツ    クツ    その    それ",
    english: "that ",
  },
  {
    kanji: "厮",
    kana: "シ    こもの",
    english: "cut, divide, companion, follower ",
  },
  {
    kanji: "厰",
    kana: "ショウ",
    english: "workshop ",
  },
  {
    kanji: "厶",
    kana: "シ    ボウ    ム    わたくし    ござ.る    む",
    english: "I, myself ",
  },
  {
    kanji: "參",
    kana: "サン    シン    まい.る    まじわる    みつ",
    english: "three, going, coming, visiting ",
  },
  {
    kanji: "簒",
    kana: "サン    セン    うば.う",
    english: "rob ",
  },
  {
    kanji: "雙",
    kana: "ソウ    たぐい    ならぶ    ふたつ    ふた-",
    english: "pair, set, comparison, counter for pairs ",
  },
  {
    kanji: "叟",
    kana: "ソウ    シュウ    おきな",
    english: "old person ",
  },
  {
    kanji: "曼",
    kana: "マン    バン    なが.い",
    english: "wide, beautiful ",
  },
  {
    kanji: "燮",
    kana: "ショウ    やわ.らげる",
    english: "moderate, alleviate, boil over low heat ",
  },
  {
    kanji: "叮",
    kana: "テイ",
    english: "courtesy ",
  },
  {
    kanji: "叨",
    kana: "トウ    みだりに",
    english: "truly, graciously, gratuitously, ravenously ",
  },
  {
    kanji: "叭",
    kana: "ハツ",
    english: "open ",
  },
  {
    kanji: "叺",
    kana: "かます",
    english: "straw bag, (kokuji) ",
  },
  {
    kanji: "吁",
    kana: "ク    ウ    ああ",
    english: "exclamation ",
  },
  {
    kanji: "吽",
    kana: "コウ    ウン    イン    オン    グ    ほえ.る",
    english: "bark, growl ",
  },
  {
    kanji: "呀",
    kana: "ガ    カ    あ",
    english: "open one's mouth, bare one's teeth, empty ",
  },
  {
    kanji: "听",
    kana: "キン    ぽんど    わら.う",
    english: "open-mouthed laughter, listen to, pound (sterling, lb) ",
  },
  {
    kanji: "吭",
    kana: "コウ    のど",
    english: "throat, neck, pivot ",
  },
  {
    kanji: "吼",
    kana: "コウ    ク    ほ.える",
    english: "bark, bay, howl, bellow, roar, cry ",
  },
  {
    kanji: "吮",
    kana: "セン    シュン    す.う",
    english: "suck ",
  },
  {
    kanji: "吶",
    kana: "トツ    ども.る",
    english: "stutter ",
  },
  {
    kanji: "吩",
    kana: "フン    ふ.く",
    english: "give an order, sprout forth ",
  },
  {
    kanji: "吝",
    kana: "リン    しわ.い    やぶさ.かな    おし.む",
    english: "miserly, stingy, sparing ",
  },
  {
    kanji: "呎",
    kana: "シャク    ふいいと",
    english: "foot ",
  },
  {
    kanji: "咏",
    kana: "エイ    よ.む    うた.う",
    english: "recitation, poem, song, composing ",
  },
  {
    kanji: "呵",
    kana: "カ    か.す    しか.る    わら.う",
    english: "scold, blow on, reprove ",
  },
  {
    kanji: "咎",
    kana: "キュウ    コウ    とが.める    とが",
    english: "blame, censure, reprimand ",
  },
  {
    kanji: "呟",
    kana: "ゲン    つぶや.く",
    english: "mutter, grumble, murmur ",
  },
  {
    kanji: "呱",
    kana: "コ",
    english: "cry ",
  },
  {
    kanji: "呷",
    kana: "コウ    あお.る    す.う",
    english: "sip, noisy, quack ",
  },
  {
    kanji: "呰",
    kana: "シ    サ",
    english: "blame, censure, damage, this ",
  },
  {
    kanji: "咒",
    kana: "ジュ    シュ    シュウ    まじな.う    のろ.い    まじない    のろ.う",
    english: "spell, curse, malediction ",
  },
  {
    kanji: "呻",
    kana: "シン    うめ.く    うめき",
    english: "moan, groan ",
  },
  {
    kanji: "咀",
    kana: "ソ    ショ    か.む",
    english: "bite, eat ",
  },
  {
    kanji: "呶",
    kana: "ド    ドウ    かまびす.しい",
    english: "noisy ",
  },
  {
    kanji: "咄",
    kana: "トツ    はなし    しか.る",
    english: "pshaw, god forbid ",
  },
  {
    kanji: "咐",
    kana: "フ    ホ",
    english: "blow, command ",
  },
  {
    kanji: "咆",
    kana: "ホウ    ほ.える",
    english: "bark, roar, get angry ",
  },
  {
    kanji: "哇",
    kana: "ア    アイ    エ    ワ    かい    けい",
    english: "fawning child's voice, laughing child's voice ",
  },
  {
    kanji: "咢",
    kana: "ガク    おどろく",
    english: "outspokenly ",
  },
  {
    kanji: "咸",
    kana: "カン    ゲン",
    english: "all, same ",
  },
  {
    kanji: "咥",
    kana: "テツ    キ    か.む",
    english: "laugh, chew, eat ",
  },
  {
    kanji: "咬",
    kana: "コウ    ヨウ    か.む",
    english: "bite, gnaw, chew, gear with, dash against ",
  },
  {
    kanji: "哄",
    kana: "コウ",
    english: "resound, reverberate ",
  },
  {
    kanji: "哈",
    kana: "ゴウ    ハ    ソウ",
    english: "school of fish, fish's mouth moving, exhaling sound ",
  },
  {
    kanji: "咨",
    kana: "シ    ああ    はか.る",
    english: "investigate ",
  },
  {
    kanji: "咫",
    kana: "シ    た",
    english: "short, span ",
  },
  {
    kanji: "哂",
    kana: "シン    わら.う",
    english: "derisive laugh, sneer ",
  },
  {
    kanji: "咤",
    kana: "タ    ト    しか.る",
    english: "clicking (with tongue), upbraid, pity, belch ",
  },
  {
    kanji: "咾",
    kana: "ロウ",
    english: "voice ",
  },
  {
    kanji: "咼",
    kana: "カイ    ケ    クウ    カ    よこしま    くちがゆがむ    ゆが.む",
    english: "crooked mouth, evil, dishonest ",
  },
  {
    kanji: "哘",
    kana: "さそ.う",
    english: "(kokuji), invite, entice ",
  },
  {
    kanji: "哥",
    kana: "カ    コ    あに    うた",
    english: "big brother ",
  },
  {
    kanji: "哦",
    kana: "ガ",
    english: "sing ",
  },
  {
    kanji: "唏",
    kana: "キ    なげ.く",
    english: "lament, grieve ",
  },
  {
    kanji: "唔",
    kana: "ゴ",
    english: "reading voice ",
  },
  {
    kanji: "哽",
    kana: "コウ    むせ.ぶ",
    english: "sob, get choked up ",
  },
  {
    kanji: "哮",
    kana: "コウ    た.ける    ほ.える",
    english: "roar, howl, growl, bellow ",
  },
  {
    kanji: "哭",
    kana: "コク    なげ.く    な.く",
    english: "weep, moan, wail ",
  },
  {
    kanji: "哢",
    kana: "ロウ    さえず.る",
    english: "chirp, twitter, warble ",
  },
  {
    kanji: "唹",
    kana: "オ",
    english: "laugh, smile ",
  },
  {
    kanji: "啀",
    kana: "ガイ    いがむ",
    english: "wrangle, growl at ",
  },
  {
    kanji: "啣",
    kana: "カン    くわ.える    くつわ",
    english: "hold in mouth or between teeth ",
  },
  {
    kanji: "啌",
    kana: "クウ    コウ",
    english: "angry voice, gargle, throat ",
  },
  {
    kanji: "售",
    kana: "シュウ    う.る",
    english: "sell, be popular ",
  },
  {
    kanji: "啜",
    kana: "セツ    テツ    すす.る",
    english: "suck, sip ",
  },
  {
    kanji: "啅",
    kana: "タク    トウ",
    english: "noisy, peck at, chirping, twittering ",
  },
  {
    kanji: "啖",
    kana: "タン    く.う    くらわ.す",
    english: "eat ",
  },
  {
    kanji: "啗",
    kana: "タン    く.らわす    く.う    く.らう",
    english: "allure, entice ",
  },
  {
    kanji: "唸",
    kana: "テン    うな.る    うなり",
    english: "groan, roar ",
  },
  {
    kanji: "唳",
    kana: "レイ    れつ",
    english: "cry, honking of birds, droning of cicadas ",
  },
  {
    kanji: "啝",
    kana: "ワ",
    english: "follow, childless ",
  },
  {
    kanji: "喙",
    kana: "カイ    がい    くちばし",
    english: "beak ",
  },
  {
    kanji: "喀",
    kana: "カク    は.く",
    english: "vomit ",
  },
  {
    kanji: "咯",
    kana: "カク    は.く",
    english: "quarrel ",
  },
  {
    kanji: "喊",
    kana: "カン    ヤク    さけ.ぶ",
    english: "cry, call ",
  },
  {
    kanji: "喟",
    kana: "キ    カイ    なげ.く",
    english: "moan ",
  },
  {
    kanji: "啻",
    kana: "シ    ただ.ならぬ    ただ.に",
    english: "incomparable, merely ",
  },
  {
    kanji: "啾",
    kana: "シュウ    な.く",
    english: "cry, whimper, neigh ",
  },
  {
    kanji: "喘",
    kana: "ゼン    セン    あえ.ぐ    せき",
    english: "pant, gasp, breathe hard ",
  },
  {
    kanji: "喞",
    kana: "ショク    ソク    かこ.つ",
    english: "speak resentfully ",
  },
  {
    kanji: "單",
    kana: "タン    ひとえ",
    english: "one, single, simple ",
  },
  {
    kanji: "啼",
    kana: "テイ    な.く",
    english: "bark, chirp, cry ",
  },
  {
    kanji: "喃",
    kana: "ナン    の.う",
    english: "chatter, rattle on ",
  },
  {
    kanji: "喇",
    kana: "ラツ    ラ",
    english: "chatter, rattle on ",
  },
  {
    kanji: "喨",
    kana: "リョウ    ロウ",
    english: "clear voice ",
  },
  {
    kanji: "嗚",
    kana: "ウ    オ    ああ",
    english: "weep, ah, alas ",
  },
  {
    kanji: "嗟",
    kana: "サ    シャ    あ    ああ    なげ.く",
    english: "be satisfied, grieve, ah ",
  },
  {
    kanji: "嗄",
    kana: "サ    か.らす    か.れる    しゃが.れる",
    english: "hoarse ",
  },
  {
    kanji: "嗜",
    kana: "シ    たしな.む    たしな.み    この.む    この.み",
    english: "like, taste, modest ",
  },
  {
    kanji: "嗤",
    kana: "シ    わら.う",
    english: "laugh, ridicule ",
  },
  {
    kanji: "嗔",
    kana: "シン    いか.る",
    english: "be angry ",
  },
  {
    kanji: "嘔",
    kana: "オウ    ク    は.く    むかつ.く    うた.う",
    english: "vomit, nauseated ",
  },
  {
    kanji: "嗷",
    kana: "ゴウ    かまびす.しい",
    english: "noisy ",
  },
  {
    kanji: "嘖",
    kana: "サク    さいな.む    さけ.ぶ",
    english: "scold, torment, chastise ",
  },
  {
    kanji: "嗾",
    kana: "ゾク    ソク    ソウ    けしか.ける    そそのか.す",
    english: "sic'em, egg on, instigate ",
  },
  {
    kanji: "嗽",
    kana: "ソウ    シュウ    ソク    すす.ぐ    ゆす.ぐ    くちすす.ぐ",
    english: "rinse, wash, gargle ",
  },
  {
    kanji: "嘛",
    kana: "マ",
    english: "wheat ",
  },
  {
    kanji: "嗹",
    kana: "レン    おしゃべり",
    english: "voluble, garrulous ",
  },
  {
    kanji: "噎",
    kana: "イツ    エツ    む.せる    むせ.ぶ",
    english: "choke, smother ",
  },
  {
    kanji: "噐",
    kana: "キ    うつわ",
    english: "vessel, receptacle, implement, instrument, ability ",
  },
  {
    kanji: "營",
    kana: "エイ    いとな.む    いとな.み",
    english: "camp, perform, build, conduct (business) ",
  },
  {
    kanji: "嘴",
    kana: "シ    くちばし    はし",
    english: "beak, bill ",
  },
  {
    kanji: "嘶",
    kana: "セイ    いなな.く",
    english: "neigh, whinny ",
  },
  {
    kanji: "嘸",
    kana: "ブ    ム    さぞ    さぞや    さぞかし",
    english: "how, indeed, I dare say ",
  },
  {
    kanji: "噫",
    kana: "イ    アイ    オク    ああ    おくび",
    english: "exclamation, burp, belch ",
  },
  {
    kanji: "噤",
    kana: "キン    つぐ.む",
    english: "shut up ",
  },
  {
    kanji: "嘯",
    kana: "ショウ    シツ    うそぶ.く",
    english: "roar, howl, recite emotionally, feign indifference ",
  },
  {
    kanji: "噬",
    kana: "ゼイ    か.む",
    english: "bite ",
  },
  {
    kanji: "噪",
    kana: "ソウ    さわ.ぐ",
    english: "be noisy ",
  },
  {
    kanji: "嚆",
    kana: "コウ    さけ.ぶ",
    english: "call ",
  },
  {
    kanji: "嚀",
    kana: "ネイ    ニョウ",
    english: "kindness ",
  },
  {
    kanji: "嚊",
    kana: "ヒ    かかめ    かかあ    はないき",
    english: "breathing through the nose, snorting, wife, one's old lady ",
  },
  {
    kanji: "嚠",
    kana: "リュウ    ル",
    english: "a clear sound ",
  },
  {
    kanji: "嚔",
    kana: "テイ    くしゃみ    くさめ    くさみ",
    english: "sneeze ",
  },
  {
    kanji: "嚏",
    kana: "テイ    くしゃみ    くさめ    くさみ",
    english: "sneeze ",
  },
  {
    kanji: "嚥",
    kana: "エン    の.む",
    english: "swallow ",
  },
  {
    kanji: "嚮",
    kana: "コウ    キョウ    さきに    むか.う",
    english: "guide, direct, incline to, favor ",
  },
  {
    kanji: "嚶",
    kana: "オオ    オウ    な.く",
    english: "chirping, birds singing together ",
  },
  {
    kanji: "嚴",
    kana: "ゲン    ゴン    おごそ.か    きび.しい    いか.めしい    いつくし",
    english: "strictness, severity, rigidity ",
  },
  {
    kanji: "囂",
    kana: "ゴウ    キョウ    かしま.しい    かまびす.しい",
    english: "noisy, boisterous ",
  },
  {
    kanji: "嚼",
    kana: "シャク    か.む",
    english: "bite ",
  },
  {
    kanji: "囁",
    kana: "ショウ    ささや.く",
    english: "whisper, murmur ",
  },
  {
    kanji: "囃",
    kana: "サツ    ソウ    はや.す",
    english: "play (music), accompany, beat time, banter, jeer, applaud ",
  },
  {
    kanji: "囀",
    kana: "テン    さえず.る",
    english: "sing, chirp, warble, chatter ",
  },
  {
    kanji: "囈",
    kana: "ゲイ",
    english: "foolish talk ",
  },
  {
    kanji: "囎",
    kana: "ソ    しょう",
    english: "used in place names ",
  },
  {
    kanji: "囑",
    kana: "ショク    しょく.する    たの.む",
    english: "request, send a message ",
  },
  {
    kanji: "囓",
    kana: "ゲツ    ケツ    かじ.る    か.む",
    english: "gnaw ",
  },
  {
    kanji: "囗",
    kana: "イ    コク    くにがまえ",
    english: "box or enclosure radical (no. 31), box ",
  },
  {
    kanji: "囮",
    kana: "カ    ユウ    おとり",
    english: "decoy, lure, stool pigeon ",
  },
  {
    kanji: "囹",
    kana: "レイ",
    english: "prison ",
  },
  {
    kanji: "圀",
    kana: "コク    くに",
    english: "country ",
  },
  {
    kanji: "囿",
    kana: "ユウ    その",
    english: "game preserve, pasture, garden ",
  },
  {
    kanji: "圄",
    kana: "ゴ    ギョ    ひとや",
    english: "prison, arrest ",
  },
  {
    kanji: "圉",
    kana: "ギョ    ゴ    うまか.い    ひとや",
    english: "prison, horse tender, ostler ",
  },
  {
    kanji: "圈",
    kana: "ケン    かこ.い",
    english: "sphere, circle, radius, range ",
  },
  {
    kanji: "國",
    kana: "コク    くに",
    english: "country ",
  },
  {
    kanji: "圍",
    kana: "イ    かこ.む    かこ.う    かこ.い",
    english: "enclose, surround, encircle, preserve, store, keep ",
  },
  {
    kanji: "圓",
    kana: "エン    まる.い    まる    まど    まど.か    まろ.やか",
    english: "yen, circle, round ",
  },
  {
    kanji: "團",
    kana: "ダン    トン    かたまり    まる.い",
    english: "association ",
  },
  {
    kanji: "圖",
    kana: "ズ    ト    え    はか.る",
    english: "drawing, plan ",
  },
  {
    kanji: "嗇",
    kana: "ショク    やぶさ.か    おし.む",
    english: "miserly, stingy, sparing ",
  },
  {
    kanji: "圜",
    kana: "カン    エン    まる.い    めぐ.る",
    english: "round, go around ",
  },
  {
    kanji: "圦",
    kana: "イリ",
    english: "sluice, spout, floodgate, penstock ",
  },
  {
    kanji: "圷",
    kana: "あくつ",
    english: "low-lying land, (kokuji) ",
  },
  {
    kanji: "圸",
    kana: "まま",
    english: "steep slope, (kokuji) ",
  },
  {
    kanji: "坎",
    kana: "カン    あな",
    english: "pitfall ",
  },
  {
    kanji: "圻",
    kana: "キ    ギン    さか.い",
    english: "region surrounding the capital ",
  },
  {
    kanji: "址",
    kana: "シ    あと",
    english: "ruins ",
  },
  {
    kanji: "坏",
    kana: "ハイ    つき    おか",
    english: "bowl ",
  },
  {
    kanji: "坩",
    kana: "カン    つぼ",
    english: "jar, pot ",
  },
  {
    kanji: "埀",
    kana: "スイ    た.れる    た.らす    なんなんと.す",
    english: "let down, suspend, hand, down ",
  },
  {
    kanji: "垈",
    kana: "ハツ    ボチ    ぬた",
    english: "plough, cultivate, swamp, wetlands, (kokuji) ",
  },
  {
    kanji: "坡",
    kana: "ハ    ヒ    つつ.み",
    english: "dike, dam, slope, bank ",
  },
  {
    kanji: "坿",
    kana: "フ",
    english: "slope, hill ",
  },
  {
    kanji: "垉",
    kana: "ホウ",
    english: "collapse, break ",
  },
  {
    kanji: "垓",
    kana: "ガイ    カイ    はて",
    english: "border, boundary, staircase, hundred quintillion ",
  },
  {
    kanji: "垠",
    kana: "ギン    ゴン    きし    さか.い",
    english: "limit, boundary ",
  },
  {
    kanji: "垳",
    kana: "ガケ    いけ",
    english: "cliff, used in proper names ",
  },
  {
    kanji: "垤",
    kana: "テツ    ありづか",
    english: "anthill, hill ",
  },
  {
    kanji: "垪",
    kana: "ハ",
    english: "used in proper names ",
  },
  {
    kanji: "垰",
    kana: "たわ    とうげ    たお    あくつ",
    english: "mountain pass, ancient kuni, low ground ",
  },
  {
    kanji: "埃",
    kana: "アイ    ほこり    ちり",
    english: "dust ",
  },
  {
    kanji: "埆",
    kana: "カク    きそ.う",
    english: "barren land ",
  },
  {
    kanji: "埔",
    kana: "ホ",
    english: "used in Chinese place names ",
  },
  {
    kanji: "埒",
    kana: "レツ    ラツ    ラチ    らち.があく    かこ.い",
    english: "picket, limits, be settled ",
  },
  {
    kanji: "埓",
    kana: "レツ    ラツ    ラチ    らち.があく    かこ.い",
    english: "pale, picket fence, limits, come to an end ",
  },
  {
    kanji: "堊",
    kana: "アク    ア    オ    いろつち    しろつち",
    english: "whitewash ",
  },
  {
    kanji: "埖",
    kana: "ごみ",
    english: "garbage, refuse ",
  },
  {
    kanji: "埣",
    kana: "ソツ",
    english: "barren land ",
  },
  {
    kanji: "堋",
    kana: "ホウ",
    english: "bury, archery target mound ",
  },
  {
    kanji: "堙",
    kana: "イン    ふさ.ぐ",
    english: "close up, stop up ",
  },
  {
    kanji: "堝",
    kana: "カ    るつぼ",
    english: "crucible, melting pot ",
  },
  {
    kanji: "塲",
    kana: "ジョウ    チョウ    ば",
    english: "open space, field, market ",
  },
  {
    kanji: "堡",
    kana: "ホ    ホウ    とりで",
    english: "fort ",
  },
  {
    kanji: "塢",
    kana: "オ    ウ",
    english: "fortress embankment, village ",
  },
  {
    kanji: "塋",
    kana: "エイ    はか",
    english: "cemetery ",
  },
  {
    kanji: "塰",
    kana: "あま",
    english: "title of a Noh play, (kokuji) ",
  },
  {
    kanji: "塒",
    kana: "シ    ジ    ねぐら    とや    とぐろ",
    english: "roost, hen coop, spiral ",
  },
  {
    kanji: "堽",
    kana: "コウ",
    english: "mound, used in place names ",
  },
  {
    kanji: "塹",
    kana: "ザン    セン    ほり    あな",
    english: "moat, ditch ",
  },
  {
    kanji: "墅",
    kana: "ショ    ヤ    しもやしき",
    english: "shed, country house, countryside ",
  },
  {
    kanji: "墹",
    kana: "まま",
    english: "steep slope ",
  },
  {
    kanji: "墟",
    kana: "キョ    あと",
    english: "ruins ",
  },
  {
    kanji: "墫",
    kana: "シュン",
    english: "cup ",
  },
  {
    kanji: "墺",
    kana: "オウ    イク    きし",
    english: "land, shore, Austria ",
  },
  {
    kanji: "壞",
    kana: "カイ    エ    こわ.す    こわ.れる    やぶ.る",
    english: "demolition, break, destroy ",
  },
  {
    kanji: "墻",
    kana: "ショウ    かき",
    english: "fence, hedge ",
  },
  {
    kanji: "墸",
    kana: "チョ",
    english: "hesitate ",
  },
  {
    kanji: "墮",
    kana: "ダ    おち.る    くず.す    くず.れる",
    english: "descend to, lapse into, degenerate ",
  },
  {
    kanji: "壅",
    kana: "ヨウ    ふさ.ぐ",
    english: "plug up, shut up ",
  },
  {
    kanji: "壓",
    kana: "アツ    エン    オウ    お.す    へ.す    おさ.える",
    english: "pressure ",
  },
  {
    kanji: "壑",
    kana: "ガク    カク    たに",
    english: "valley ",
  },
  {
    kanji: "壗",
    kana: "まま",
    english: "steep slope ",
  },
  {
    kanji: "壙",
    kana: "コウ    あな",
    english: "hole ",
  },
  {
    kanji: "壘",
    kana: "ルイ    ライ    スイ    とりで",
    english: "fort, rampart, walls, base(ball) ",
  },
  {
    kanji: "壥",
    kana: "テン",
    english: "fine residence, shop, store ",
  },
  {
    kanji: "壜",
    kana: "ドン    タン    びん",
    english: "bottle, vial, jar ",
  },
  {
    kanji: "壤",
    kana: "ジョウ    つち",
    english: "soil, loam, earth, rich ",
  },
  {
    kanji: "壟",
    kana: "ロウ    リョウ    おか    うね    つか",
    english: "mound, grave, rice field dike ",
  },
  {
    kanji: "壯",
    kana: "ソウ    さかん",
    english: "big, large, robust, name of tribe ",
  },
  {
    kanji: "壺",
    kana: "コ    つぼ",
    english: "jar, pot ",
  },
  {
    kanji: "壹",
    kana: "イチ    イツ    ひとつ",
    english: "number one ",
  },
  {
    kanji: "壻",
    kana: "セイ    むこ",
    english: "son-in-law ",
  },
  {
    kanji: "壼",
    kana: "コン",
    english: "palace corridor or passageway ",
  },
  {
    kanji: "壽",
    kana: "ジュ    ス    シュウ    ことぶき    ことぶ.く    ことほ.ぐ",
    english: "longevity, congratulations ",
  },
  {
    kanji: "夂",
    kana: "チ    しゅう    ふゆがしら",
    english: "winter radical (no. 34) ",
  },
  {
    kanji: "夊",
    kana: "スイ    ゆき    すいにょう",
    english: "winter variant radical (no. 34) ",
  },
  {
    kanji: "夐",
    kana: "ケイ    ケン    はるか",
    english: "far, distant ",
  },
  {
    kanji: "夛",
    kana: "タ    おお.い    まさ.に    まさ.る",
    english: "much, many, more than, over ",
  },
  {
    kanji: "梦",
    kana: "ム    ボウ    ゆめ    ゆめ.みる    くら.い",
    english: "dream, visionary, wishful ",
  },
  {
    kanji: "夥",
    kana: "カ    ワ    おびただ.しい",
    english: "immense, tremendous ",
  },
  {
    kanji: "夬",
    kana: "カイ    ケツ    ケチ    わ.ける",
    english: "decide, determine, archery glove ",
  },
  {
    kanji: "夭",
    kana: "ヨウ    オウ    カ    わか.い    わかじに    わざわい",
    english: "early death, calamity ",
  },
  {
    kanji: "夲",
    kana: "ホン    もと",
    english: "advance quickly, to go back and forth, origin, source ",
  },
  {
    kanji: "夸",
    kana: "コ    カ    ほご.る",
    english: "boast ",
  },
  {
    kanji: "夾",
    kana: "キョウ    コウ    はさ.む",
    english: "insert between ",
  },
  {
    kanji: "竒",
    kana: "キ    く.しき    あや.しい    くし.くも    めずら.しい",
    english: "strange, strangeness, curiosity ",
  },
  {
    kanji: "奕",
    kana: "エキ    ヤク",
    english: "large ",
  },
  {
    kanji: "奐",
    kana: "カン    あき.らか",
    english: "clear, bright ",
  },
  {
    kanji: "奚",
    kana: "ケイ    なんぞ",
    english: "servant, what, why ",
  },
  {
    kanji: "奘",
    kana: "ジョウ    ソウ    さかん",
    english: "large, great ",
  },
  {
    kanji: "奢",
    kana: "シャ    おご.る    おご.り",
    english: "extravagance, luxury ",
  },
  {
    kanji: "奠",
    kana: "テン    デン    テイ    さだ.める    まつ.る",
    english: "decision ",
  },
  {
    kanji: "奧",
    kana: "オウ    オク    おく.まる    くま",
    english: "heart, interior ",
  },
  {
    kanji: "奬",
    kana: "ショウ    ソウ    すす.める",
    english: "prize, reward, give award to ",
  },
  {
    kanji: "奩",
    kana: "レン    くしげ    はこ",
    english: "lady's vanity case, trousseau ",
  },
  {
    kanji: "奸",
    kana: "カン    おか.す",
    english: "wickedness, mischief, rudeness ",
  },
  {
    kanji: "妁",
    kana: "シャク    なこうど",
    english: "go-between ",
  },
  {
    kanji: "妝",
    kana: "ソウ    ショウ    よそお.う",
    english: "dress up ",
  },
  {
    kanji: "佞",
    kana: "ネイ    おもね.る    よこしま",
    english: "flattery, insincerity ",
  },
  {
    kanji: "侫",
    kana: "ネイ    おもね.る    よこしま",
    english: "flattery, insincerity ",
  },
  {
    kanji: "妣",
    kana: "ヒ    なきはは",
    english: "mother ",
  },
  {
    kanji: "妲",
    kana: "ダツ",
    english: "female proper name ",
  },
  {
    kanji: "姆",
    kana: "ボ    モ    うば",
    english: "wet nurse ",
  },
  {
    kanji: "姨",
    kana: "テイ    イ    いもと    いもうと    おば",
    english: "younger sister ",
  },
  {
    kanji: "姜",
    kana: "キョウ    ガ    こう",
    english: "Chinese surname, ginger ",
  },
  {
    kanji: "妍",
    kana: "ケン    うつく.しい",
    english: "beauty, splendor ",
  },
  {
    kanji: "姙",
    kana: "ニン    ジン    はら.む    みごも.る",
    english: "be(come) pregnant ",
  },
  {
    kanji: "姚",
    kana: "ヨウ    チョウ    うつく.しい",
    english: "beautiful ",
  },
  {
    kanji: "娥",
    kana: "ガ    みめよ.い",
    english: "beautiful ",
  },
  {
    kanji: "娟",
    kana: "エン    ケン",
    english: "beauty of face ",
  },
  {
    kanji: "娑",
    kana: "シャ    サ",
    english: "old woman ",
  },
  {
    kanji: "娜",
    kana: "ダ    ナ",
    english: "graceful ",
  },
  {
    kanji: "娉",
    kana: "ヘイ    ホウ    ほ",
    english: "ask after a woman's name, marry a woman, good-looking ",
  },
  {
    kanji: "娚",
    kana: "ナン    めおと",
    english: "loud talking ",
  },
  {
    kanji: "婀",
    kana: "ア    あだ    あだ.っぽい    たおやか",
    english: "charm, flirtation ",
  },
  {
    kanji: "婬",
    kana: "イン    みだれ-    ひた.す    ほしいまま    みだ.ら    みだ.れる",
    english: "lewdness, licentiousness ",
  },
  {
    kanji: "婉",
    kana: "エン    うつく.しい    したが.う",
    english: "graceful ",
  },
  {
    kanji: "娵",
    kana: "シュ    シュウ    ス    ソウ    よめ",
    english: "marry, bride ",
  },
  {
    kanji: "娶",
    kana: "シュ    めと.る    めあわ.せる",
    english: "marry, arrange a marriage ",
  },
  {
    kanji: "婢",
    kana: "ヒ    はしため",
    english: "maidservant ",
  },
  {
    kanji: "婪",
    kana: "ラン    むさぼ.る",
    english: "covet ",
  },
  {
    kanji: "媚",
    kana: "ビ    こ.びる",
    english: "flatter, humor, flirt ",
  },
  {
    kanji: "媼",
    kana: "オオ    オウ    おうな",
    english: "mother, grandma, old woman ",
  },
  {
    kanji: "媾",
    kana: "コウ    よしみ",
    english: "association, intimacy ",
  },
  {
    kanji: "嫋",
    kana: "ジョウ    ジャク    デキ    なよ.やかな    しなや.か    たお.やか",
    english: "supple, pliant, delicate, slender ",
  },
  {
    kanji: "嫂",
    kana: "ソウ    あによめ",
    english: "elder brother's wife ",
  },
  {
    kanji: "媽",
    kana: "ボ    モ    はは",
    english: "mother, mare ",
  },
  {
    kanji: "嫣",
    kana: "エン",
    english: "beauty ",
  },
  {
    kanji: "嫗",
    kana: "オオ    ウ    オウ    あたた.める    おうな",
    english: "old woman, mother ",
  },
  {
    kanji: "嫦",
    kana: "コウ    ジョウ",
    english: "proper name ",
  },
  {
    kanji: "嫩",
    kana: "ドン    ノン    わか.い",
    english: "young, weak ",
  },
  {
    kanji: "嫖",
    kana: "ヒョウ    かる.い",
    english: "wanton, hedonistic ",
  },
  {
    kanji: "嫺",
    kana: "カン    なら.う    みやびやか",
    english: "refined, elegant, skilled ",
  },
  {
    kanji: "嫻",
    kana: "カン    なら.う    みやびやか",
    english: "elegant, refined, skillful ",
  },
  {
    kanji: "嬌",
    kana: "キョウ    なまめか.しい",
    english: "attractive ",
  },
  {
    kanji: "嬋",
    kana: "セン",
    english: "beautiful ",
  },
  {
    kanji: "嬖",
    kana: "ヘイ    きにいり",
    english: "agreeable person ",
  },
  {
    kanji: "嬲",
    kana: "ドウ    ジョウ    なぶ.る",
    english: "sport with, ridicule, tease ",
  },
  {
    kanji: "嫐",
    kana: "ドウ    ジョウ    なぶ.る",
    english: "frolic, play with, flirt with ",
  },
  {
    kanji: "嬪",
    kana: "ヒン    ひめ",
    english: "bride, marriage ",
  },
  {
    kanji: "嬶",
    kana: "かか    かかあ",
    english: "wife (vulg), (kokuji) ",
  },
  {
    kanji: "嬾",
    kana: "ラン    おこた.る    ものうい",
    english: "lazy, languid ",
  },
  {
    kanji: "孃",
    kana: "ジョウ    むすめ",
    english: "girl, Miss, daughter ",
  },
  {
    kanji: "孅",
    kana: "セン    かよわ.い",
    english: "delicate ",
  },
  {
    kanji: "孀",
    kana: "ソウ    やもめ",
    english: "widow ",
  },
  {
    kanji: "孑",
    kana: "ケツ    ひとり",
    english: "mosquito wriggler ",
  },
  {
    kanji: "孕",
    kana: "ヨウ    はら.む",
    english: "become pregnant ",
  },
  {
    kanji: "孚",
    kana: "フ    たまご    はぐく.む",
    english: "sincere, nourish, encase ",
  },
  {
    kanji: "孛",
    kana: "ハイ    ブツ    ボツ",
    english: "comet, dark, obscure ",
  },
  {
    kanji: "孥",
    kana: "ド    ヌ    つまこ",
    english: "child, wife and children, servant, slave ",
  },
  {
    kanji: "孩",
    kana: "ガイ    カイ    ちのみご",
    english: "baby, infancy ",
  },
  {
    kanji: "孰",
    kana: "ジュク    いずれ    たれ",
    english: "which, how, who ",
  },
  {
    kanji: "孳",
    kana: "ジ    シ    う.む    しげ.る",
    english: "increase, bear children, also N1274 ",
  },
  {
    kanji: "孵",
    kana: "フ    か.えす",
    english: "hatch, incubate ",
  },
  {
    kanji: "學",
    kana: "ガク    まな.ぶ",
    english: "learning, knowledge, school ",
  },
  {
    kanji: "斈",
    kana: "ガク    まな.ぶ",
    english: "learning, knowledge, school ",
  },
  {
    kanji: "孺",
    kana: "ジュ    おさない    ちのみご",
    english: "child ",
  },
  {
    kanji: "宀",
    kana: "ベン    メン    うかんむり",
    english: "shaped crown ",
  },
  {
    kanji: "它",
    kana: "タ    へび",
    english: "other ",
  },
  {
    kanji: "宦",
    kana: "カン    つかさ",
    english: "official ",
  },
  {
    kanji: "宸",
    kana: "シン    のき",
    english: "eaves, palace, imperial courtesy ",
  },
  {
    kanji: "寃",
    kana: "エン",
    english: "grievance, injustice, wrong ",
  },
  {
    kanji: "寇",
    kana: "コウ    あだ.する",
    english: "bandits, thieves, enemy, invade ",
  },
  {
    kanji: "寉",
    kana: "つる",
    english: "crane (bird) ",
  },
  {
    kanji: "寔",
    kana: "ショク    これ    じき    まことに",
    english: "real, genuine, actual ",
  },
  {
    kanji: "寐",
    kana: "ビ    ね.る",
    english: "sleep ",
  },
  {
    kanji: "寤",
    kana: "ゴ    さ.める",
    english: "awake, understand ",
  },
  {
    kanji: "實",
    kana: "ジツ    シツ    み    みの.る    まこと.に    みの.り    みち.る",
    english: "truth, reality ",
  },
  {
    kanji: "寢",
    kana: "シン    ね.る    ね.かす    い.ぬ    みたまや    や.める",
    english: "sleep, rest, bed chamber ",
  },
  {
    kanji: "寞",
    kana: "バク    マク    さび.しい",
    english: "lonely, quiet ",
  },
  {
    kanji: "寥",
    kana: "リョウ    さび.しい",
    english: "lonely ",
  },
  {
    kanji: "寫",
    kana: "シャ    うつ.す    うつ.る",
    english: "be photographed, copy, describe ",
  },
  {
    kanji: "寰",
    kana: "カン",
    english: "imperial domain, world ",
  },
  {
    kanji: "寶",
    kana: "ホウ    たから",
    english: "treasure, jewel, precious, rare ",
  },
  {
    kanji: "寳",
    kana: "ホウ    たから",
    english: "treasure, jewel, precious, rare ",
  },
  {
    kanji: "尅",
    kana: "コク    かつ",
    english: "subdue, destroy, overcome ",
  },
  {
    kanji: "將",
    kana: "ショウ    ソウ    まさ.に    はた    ひきい.る    もって",
    english: "commander, general, admiral ",
  },
  {
    kanji: "專",
    kana: "セン    もっぱ.ら",
    english: "specialty, exclusive, mainly, solely ",
  },
  {
    kanji: "對",
    kana: "タイ    ツイ    あいて    こた.える    そろ.い    つれあ.い    なら.ぶ    むか.う",
    english: "correct, right, facing, opposed ",
  },
  {
    kanji: "尓",
    kana: "ジ    ニ    なんじ    しかり    その    のみ",
    english: "you, that ",
  },
  {
    kanji: "尠",
    kana: "セン    セウ    すくな.い",
    english: "at least, not a little ",
  },
  {
    kanji: "尢",
    kana: "オウ    だいのまげあし    もっとも",
    english: "crooked-big radical (no. 43) ",
  },
  {
    kanji: "尨",
    kana: "ボウ    むくいぬ",
    english: "shaggy hair or dog ",
  },
  {
    kanji: "尸",
    kana: "シ    かたしろ    しかばね    しかばねかんむり",
    english: "corpse, remains, flag radical (no. 44) ",
  },
  {
    kanji: "尹",
    kana: "イン    おさ    ただ.す",
    english: "an official rank ",
  },
  {
    kanji: "屁",
    kana: "ヒ    へ    おなら",
    english: "fart, passing gas ",
  },
  {
    kanji: "屆",
    kana: "カイ    とど.ける    とど.く",
    english: "reach, arrive, report, notify, forward ",
  },
  {
    kanji: "屎",
    kana: "シ    キ    くそ",
    english: "shit, excrement ",
  },
  {
    kanji: "屓",
    kana: "キ",
    english: "exerting strength (aikido) ",
  },
  {
    kanji: "屐",
    kana: "ゲキ    ケキ    はきもの",
    english: "clog ",
  },
  {
    kanji: "屏",
    kana: "ヘイ    ビョウ    おお.う    しりぞ.く    びょう.ぶ",
    english: "wall, fence ",
  },
  {
    kanji: "孱",
    kana: "セン    サン    よわ.い",
    english: "weak, steep ",
  },
  {
    kanji: "屬",
    kana: "ゾク    ショク    さかん    つく    やから",
    english: "genus, subordinate official, belong, affiliated ",
  },
  {
    kanji: "屮",
    kana: "テツ",
    english: "old grass radical (no. 45) ",
  },
  {
    kanji: "乢",
    kana: "ガイ    たわ    たお",
    english: "mountain saddle ",
  },
  {
    kanji: "屶",
    kana: "なた    たな",
    english: "used in proper names ",
  },
  {
    kanji: "屹",
    kana: "キツ    そばだ.つ",
    english: "towering mountains ",
  },
  {
    kanji: "岌",
    kana: "キュウ    たか.い",
    english: "high, dangerous ",
  },
  {
    kanji: "岑",
    kana: "シン    ギン    みね",
    english: "peak, mountaintop ",
  },
  {
    kanji: "岔",
    kana: "タ",
    english: "fork in a road ",
  },
  {
    kanji: "妛",
    kana: "シ    あなど.る    おろか    みにく.い    みだる",
    english: "despise, contempt, ugly, same as ",
  },
  {
    kanji: "岫",
    kana: "コウ    シュウ    ユウ    みさき    くき    みね",
    english: "gorge, ravine, in the mountains, cape, promontory ",
  },
  {
    kanji: "岻",
    kana: "ジ    ニ",
    english: "name of a mountain ",
  },
  {
    kanji: "岶",
    kana: "ハク",
    english: "dense mountain vegetation ",
  },
  {
    kanji: "岼",
    kana: "ゆり",
    english: "level spot part-way up a mountain ",
  },
  {
    kanji: "岷",
    kana: "ビン    ミン",
    english: "name of a Chinese river, name of a Chinese mountain ",
  },
  {
    kanji: "峅",
    kana: "くら",
    english: "shrine in the mountains ",
  },
  {
    kanji: "岾",
    kana: "やま",
    english: "used in proper names ",
  },
  {
    kanji: "峇",
    kana: "コウ",
    english: "mountain cave ",
  },
  {
    kanji: "峙",
    kana: "ジ    そばだ.つ",
    english: "tower, soar ",
  },
  {
    kanji: "峩",
    kana: "ガ    けわ.しい",
    english: "lofty ",
  },
  {
    kanji: "峽",
    kana: "キョウ    コウ    はざま",
    english: "gorge, strait, ravine, isthmus ",
  },
  {
    kanji: "峺",
    kana: "コ",
    english: "obstruct ",
  },
  {
    kanji: "峭",
    kana: "ショウ    きび.しい    けわ.しい",
    english: "high & steep ",
  },
  {
    kanji: "嶌",
    kana: "トウ    しま",
    english: "island ",
  },
  {
    kanji: "峪",
    kana: "ヨク    たに",
    english: "ravine ",
  },
  {
    kanji: "崋",
    kana: "カ    ク",
    english: "name of mountain ",
  },
  {
    kanji: "崕",
    kana: "ガイ    がけ",
    english: "cliff, bluff, precipice ",
  },
  {
    kanji: "崗",
    kana: "コウ    おか",
    english: "hill ",
  },
  {
    kanji: "嵜",
    kana: "キ    さき    さい    みさき",
    english: "steep, promontory ",
  },
  {
    kanji: "崟",
    kana: "ギン    みね",
    english: "peak, mountaintop, steep, lofty ",
  },
  {
    kanji: "崛",
    kana: "クツ    そばだ.つ    たか.い",
    english: "high & lofty (mountains) ",
  },
  {
    kanji: "崑",
    kana: "コン",
    english: "place name ",
  },
  {
    kanji: "崔",
    kana: "ガイ    サイ    スイ    がけ",
    english: "cliff, bluff, precipice ",
  },
  {
    kanji: "崢",
    kana: "ソウ",
    english: "high, steep ",
  },
  {
    kanji: "崙",
    kana: "ロン",
    english: "place name ",
  },
  {
    kanji: "崘",
    kana: "ロン",
    english: "Kunlun mountains in Jiangsu ",
  },
  {
    kanji: "嵌",
    kana: "カン    は.める    は.まる    あな",
    english: "go into, plunge, inlay ",
  },
  {
    kanji: "嵒",
    kana: "ガン    いわ    けわ.しい",
    english: "rock ",
  },
  {
    kanji: "嵎",
    kana: "グウ    グ    くま",
    english: "mountain recesses ",
  },
  {
    kanji: "嵋",
    kana: "ビ",
    english: "place name ",
  },
  {
    kanji: "嵬",
    kana: "カイ    ギ",
    english: "high and flat ",
  },
  {
    kanji: "嵳",
    kana: "サ",
    english: "high, towering, irregular, rugged ",
  },
  {
    kanji: "嵶",
    kana: "たお.やか    たわ.む",
    english: "mountain pass ",
  },
  {
    kanji: "嶇",
    kana: "ク    けわ.しい",
    english: "steep ",
  },
  {
    kanji: "嶄",
    kana: "ザン    サン",
    english: "steep or high mountain ",
  },
  {
    kanji: "嶂",
    kana: "ショウ    みね",
    english: "steep, lofty ",
  },
  {
    kanji: "嶢",
    kana: "ギョウ    けわ.しい",
    english: "high, towering ",
  },
  {
    kanji: "嶝",
    kana: "トウ    さかみち",
    english: "hill, uphill path ",
  },
  {
    kanji: "嶬",
    kana: "ギ",
    english: "high, steep ",
  },
  {
    kanji: "嶮",
    kana: "ケン    けわ.しい",
    english:
  "inaccessible place, impregnable position, steep place, sharp eyes ",
  },
  {
    kanji: "嶽",
    kana: "ガク    たけ",
    english: "peak ",
  },
  {
    kanji: "嶐",
    kana: "リュ    やまのかたち",
    english: "shape of a mountain ",
  },
  {
    kanji: "嶷",
    kana: "ギョク    ギ    さと.い",
    english: "wise ",
  },
  {
    kanji: "嶼",
    kana: "ショ    しま",
    english: "island ",
  },
  {
    kanji: "巉",
    kana: "ザン    サン",
    english: "rising precipitously, rising steeply ",
  },
  {
    kanji: "巍",
    kana: "ギ    たか.い",
    english: "high ",
  },
  {
    kanji: "巓",
    kana: "テン    いただき",
    english: "summit ",
  },
  {
    kanji: "巒",
    kana: "ラン    みね",
    english: "small peak ",
  },
  {
    kanji: "巖",
    kana: "ガン    いわ    いわお    けわ.しい",
    english: "rock, crag, boulder ",
  },
  {
    kanji: "巛",
    kana: "セン    かわ    まがりがわ",
    english: "curving river radical (no.47) ",
  },
  {
    kanji: "巫",
    kana: "フ    みこ    かんなぎ",
    english: "sorcerer, medium, shrine maiden ",
  },
  {
    kanji: "已",
    kana: "イ    や.む    すで.に    のみ    はなはだ",
    english: "stop, halt, previously, already, long ago ",
  },
  {
    kanji: "巵",
    kana: "シ    さかずき",
    english: "large winecup, apt, fitting ",
  },
  {
    kanji: "帋",
    kana: "シ    かみ",
    english: "paper, stationary, document ",
  },
  {
    kanji: "帚",
    kana: "ソウ    シュウ    ほうき",
    english: "broom ",
  },
  {
    kanji: "帙",
    kana: "チツ    ふまき",
    english: "Japanese book cover ",
  },
  {
    kanji: "帑",
    kana: "トウ    ド    かねぐら",
    english: "money repository ",
  },
  {
    kanji: "帛",
    kana: "ハク    きぬ",
    english: "cloth ",
  },
  {
    kanji: "帶",
    kana: "タイ    お.びる    おび",
    english: "belt, girdle, band, strap, zone ",
  },
  {
    kanji: "帷",
    kana: "イ    とばり",
    english: "curtain, screen ",
  },
  {
    kanji: "幄",
    kana: "アク    とばり",
    english: "curtain ",
  },
  {
    kanji: "幃",
    kana: "イ    キ    とばり",
    english: "bag ",
  },
  {
    kanji: "幀",
    kana: "テイ    チョウ    トウ",
    english: "making books or scrolls ",
  },
  {
    kanji: "幎",
    kana: "ベキ    とばり",
    english: "cloth covering ",
  },
  {
    kanji: "幗",
    kana: "カク",
    english: "woman's head covering, veil ",
  },
  {
    kanji: "幔",
    kana: "マン    バン    まく",
    english: "curtain ",
  },
  {
    kanji: "幟",
    kana: "シ    のぼり",
    english: "flag, banner, streamer ",
  },
  {
    kanji: "幢",
    kana: "トウ    はた",
    english: "flag, banner ",
  },
  {
    kanji: "幤",
    kana: "ヘイ    ぬさ",
    english: "shinto zigzag paper offerings, bad habit, humble prefix, gift ",
  },
  {
    kanji: "幇",
    kana: "ホウ    たす.ける",
    english: "help ",
  },
  {
    kanji: "幵",
    kana: "ヘイ",
    english: "put together ",
  },
  {
    kanji: "并",
    kana: "ヘイ    ヒョウ    あわ.せる    なら.ぶ",
    english: "put together ",
  },
  {
    kanji: "幺",
    kana: "ヨウ    ちいさい    いとがしら    ようへん",
    english: "short thread radical (no. 52) ",
  },
  {
    kanji: "麼",
    kana: "ビ    ミ    バ    マ    モ",
    english: "rope ",
  },
  {
    kanji: "广",
    kana: "ゲン    まだれ",
    english: "dotted cliff ",
  },
  {
    kanji: "庠",
    kana: "ショウ    まなびや",
    english: "school ",
  },
  {
    kanji: "廁",
    kana: "シ    ショク    かわや",
    english: "toilet, lavatory, mingle with ",
  },
  {
    kanji: "廂",
    kana: "ショウ    ソウ    ひさし",
    english: "eaves, canopy, vizor, hallways ",
  },
  {
    kanji: "廈",
    kana: "カ    サ    いえ",
    english: "house ",
  },
  {
    kanji: "廐",
    kana: "キュウ    うまや",
    english: "barn, stable ",
  },
  {
    kanji: "廏",
    kana: "キュウ    うまや",
    english: "barn, stable ",
  },
  {
    kanji: "廖",
    kana: "リョウ",
    english: "empty, name ",
  },
  {
    kanji: "廣",
    kana: "コウ    ひろ.い    ひろ.まる    ひろ.める    ひろ.がる    ひろ.げる",
    english: "broad, wide, spacious ",
  },
  {
    kanji: "廝",
    kana: "シ    こもの",
    english: "servant ",
  },
  {
    kanji: "廚",
    kana: "シュウ    ズ    チュ    チュウ    くりや",
    english: "kitchen ",
  },
  {
    kanji: "廛",
    kana: "テン    みせ    やしき    たな",
    english: "fine residence, shop, store ",
  },
  {
    kanji: "廢",
    kana: "ハイ    すた.れる    すた.る",
    english: "abrogate, terminate, discard ",
  },
  {
    kanji: "廡",
    kana: "ブ    しげ.る    ひさし",
    english: "walking under the eaves ",
  },
  {
    kanji: "廨",
    kana: "カイ    ケ    やくしょ",
    english: "government office ",
  },
  {
    kanji: "廩",
    kana: "リン    くら",
    english: "rice storehouse ",
  },
  {
    kanji: "廬",
    kana: "ロ    リョ    いお    いおり    いえ",
    english: "hermitage ",
  },
  {
    kanji: "廱",
    kana: "ヨウ    やわらぐ",
    english: "mild, congenial, block, obstruct ",
  },
  {
    kanji: "廳",
    kana: "チョウ    テイ    やくしょ",
    english: "hall, central room ",
  },
  {
    kanji: "廰",
    kana: "チョウ    テイ    やくしょ",
    english: "government office, var of JIS572c ",
  },
  {
    kanji: "廴",
    kana: "イン    いんにょう    えんにょう",
    english: "long stride or stretching radical (no. 54) ",
  },
  {
    kanji: "廸",
    kana: "テキ    みち    みち.びく    すす.む    いた.る",
    english: "path, way, guide, lead, proceed, advance, reach, arrive ",
  },
  {
    kanji: "廾",
    kana: "キョウ    ク    にじゅう    にじゅうあし",
    english: "twenty, 20 ",
  },
  {
    kanji: "弃",
    kana: "キ    すて.る",
    english: "reject, abandon, discard ",
  },
  {
    kanji: "弉",
    kana: "ジョウ    ソウ    さかん",
    english: "large, powerful, stout, thick ",
  },
  {
    kanji: "彝",
    kana: "イ    つね",
    english: "moral principle ",
  },
  {
    kanji: "彜",
    kana: "イ    つね",
    english: "moral principle ",
  },
  {
    kanji: "弋",
    kana: "ヨク    いぐるみ    しきがまえ",
    english: "piling, ceremony radical (no. 56) ",
  },
  {
    kanji: "弑",
    kana: "シ    シイ    しい.する",
    english: "murder one's lord or father ",
  },
  {
    kanji: "弖",
    kana: "テ",
    english: "phoneme only ",
  },
  {
    kanji: "弩",
    kana: "ド    おおゆみ    いしゆみ",
    english: "bow (arrow) ",
  },
  {
    kanji: "弭",
    kana: "ビ    ミ    や.める    や.む    ゆは.ず",
    english: "stop, cease, notches where drawstring is attached to the bow ",
  },
  {
    kanji: "弸",
    kana: "ホウ",
    english: "strong bow, full ",
  },
  {
    kanji: "彁",
    kana: "カ    セイ",
    english: "(no known meaning; s&H uses jabberwocky words) ",
  },
  {
    kanji: "彈",
    kana: "ダン    タン    ひ.く    はず.む    たま    はじ.く    はじ.ける    ただ.す",
    english: "bullet, twang, flip, snap ",
  },
  {
    kanji: "彌",
    kana: "ミ    ビ    いや    や    あまねし    いよいよ    とおい    ひさし    ひさ.しい    わた.る",
    english: "extensive, full, fill, complete ",
  },
  {
    kanji: "彎",
    kana: "ワン    ひ.く",
    english: "curve, stretching a bow ",
  },
  {
    kanji: "弯",
    kana: "ワン    ひ.く",
    english: "curve, stretching a bow ",
  },
  {
    kanji: "彑",
    kana: "ケイ    けいがしら",
    english: "pig's head ",
  },
  {
    kanji: "彖",
    kana: "タン",
    english: "divination ",
  },
  {
    kanji: "彡",
    kana: "サン    セン    さんづくり    かみかざり",
    english: "three, hair ornament, short hair or fur radical (no. 59) ",
  },
  {
    kanji: "彭",
    kana: "ホウ",
    english: "swelling, sound of drum ",
  },
  {
    kanji: "彳",
    kana: "テキ    たた.ずむ    ぎょうにんべん",
    english: "stop, linger, loiter ",
  },
  {
    kanji: "彷",
    kana: "ホウ    さまよ.う",
    english: "stray, wander, loiter ",
  },
  {
    kanji: "徃",
    kana: "オウ    い.く    いにしえ    さき.に    ゆ.く",
    english: "journey, chase away, let go, going, travel ",
  },
  {
    kanji: "徂",
    kana: "ソ    ゆ.く",
    english: "go ",
  },
  {
    kanji: "彿",
    kana: "フツ",
    english: "dimly ",
  },
  {
    kanji: "徊",
    kana: "カイ    クワイ    エ    さまよ.う",
    english: "wandering ",
  },
  {
    kanji: "很",
    kana: "コン    コウ    ギン    もと.る",
    english: "disobey, dispute, very, go against, be contrary to ",
  },
  {
    kanji: "徑",
    kana: "ケイ    みち    こみち    さしわたし    ただちに",
    english: "path, diameter, method ",
  },
  {
    kanji: "徇",
    kana: "ジュン    シュン    あまねし    したが.う    とな.える",
    english: "herald, announce, follow, obey, seek, lay down one's life ",
  },
  {
    kanji: "從",
    kana: "ジュウ    ショウ    ジュ    したが.う    したが.える    より",
    english: "from, by, since, whence, through ",
  },
  {
    kanji: "徙",
    kana: "シ    うつ.る    うつ.す",
    english: "move ",
  },
  {
    kanji: "徘",
    kana: "ハイ    さまよ.う",
    english: "wander ",
  },
  {
    kanji: "徠",
    kana: "ライ    きた.す    きた.る    く.る",
    english: "induce, encourage to come ",
  },
  {
    kanji: "徨",
    kana: "コウ    さまよ.う",
    english: "wandering ",
  },
  {
    kanji: "徭",
    kana: "ヨウ    エウ    えだち    ふぞろ.い    つかい",
    english: "compulsory service to the state, corvee ",
  },
  {
    kanji: "徼",
    kana: "キョウ    ヨウ    めぐ.る",
    english: "seek, enquire, go around, border ",
  },
  {
    kanji: "忖",
    kana: "ソン    はか.る",
    english: "conjecture ",
  },
  {
    kanji: "忻",
    kana: "キン    よろこ.ぶ",
    english: "rejoice, open one's heart ",
  },
  {
    kanji: "忤",
    kana: "ゴ    さから.う    もと.る",
    english: "insubordinate, stubborn, wrong ",
  },
  {
    kanji: "忸",
    kana: "ジク    ジュウ    はじ.る",
    english: "shame ",
  },
  {
    kanji: "忱",
    kana: "シン    まこと",
    english: "sincere ",
  },
  {
    kanji: "忝",
    kana: "テン    かたじけな.い",
    english: "grateful, indebted ",
  },
  {
    kanji: "悳",
    kana: "トク",
    english: "ethics, morality, virtue ",
  },
  {
    kanji: "忿",
    kana: "フン    いか.る    いかり",
    english: "be angry ",
  },
  {
    kanji: "怡",
    kana: "イ    よろこ.ぶ",
    english: "rejoice, enjoy ",
  },
  {
    kanji: "恠",
    kana: "カイ    ケ    あや.しい    あや.しむ",
    english: "suspicious, mystery, apparition ",
  },
  {
    kanji: "怙",
    kana: "コ    たの.む",
    english: "depend, rely on, father ",
  },
  {
    kanji: "怐",
    kana: "ク",
    english: "foolish, fear ",
  },
  {
    kanji: "怩",
    kana: "ジ",
    english: "shame ",
  },
  {
    kanji: "怎",
    kana: "シン    ソ    いかで    なんぞ",
    english: "why, how ",
  },
  {
    kanji: "怱",
    kana: "ソウ    にわか    あわ.てる",
    english: "rush, hurry, be flustered ",
  },
  {
    kanji: "怛",
    kana: "ダツ    タン    タツ    いた.む",
    english: "be sad, be dejected, fear ",
  },
  {
    kanji: "怕",
    kana: "ハク    ヒャク    ハ    かしわ    おそ.れる",
    english: "oak ",
  },
  {
    kanji: "怫",
    kana: "フツ    ハイ    ヒ",
    english: "anger ",
  },
  {
    kanji: "怦",
    kana: "ホウ    ヒョウ",
    english: "in a hurry, excited, agitated ",
  },
  {
    kanji: "怏",
    kana: "オウ    ヨウ    うら.む",
    english: "dissatisfaction, grudge ",
  },
  {
    kanji: "怺",
    kana: "こら.える",
    english: "endure, (kokuji) ",
  },
  {
    kanji: "恚",
    kana: "イ    いか.る",
    english: "anger ",
  },
  {
    kanji: "恁",
    kana: "イン    ジン    ニン",
    english: "like this, thus ",
  },
  {
    kanji: "恪",
    kana: "カク    つつし.む",
    english: "carefulness ",
  },
  {
    kanji: "恷",
    kana: "キュウ",
    english: "be contrary to ",
  },
  {
    kanji: "恟",
    kana: "キョウ    おそ.れる",
    english: "fear ",
  },
  {
    kanji: "恊",
    kana: "キョウ    あわ.せる    かな.う",
    english: "threaten ",
  },
  {
    kanji: "恆",
    kana: "コウ    つね.に",
    english: "constant, regular, persistent ",
  },
  {
    kanji: "恍",
    kana: "コウ    とぼ.ける    ほ.れる",
    english: "unclear, senile, stupid, joke ",
  },
  {
    kanji: "恃",
    kana: "ジ    シ    たの.む",
    english: "depend on ",
  },
  {
    kanji: "恤",
    kana: "ジュツ    シュツ    めぐ.む    あわ.れむ    うれ.える",
    english: "relieve, have mercy ",
  },
  {
    kanji: "恂",
    kana: "ジュン    シュン    まこと",
    english: "sincere, fear, sudden, blinking ",
  },
  {
    kanji: "恬",
    kana: "テン    やすら.く    やす.い",
    english: "composure ",
  },
  {
    kanji: "恫",
    kana: "ドウ    トウ    いた.む",
    english: "painful, fearful ",
  },
  {
    kanji: "恙",
    kana: "ヨウ    つつが.ない",
    english: "illness ",
  },
  {
    kanji: "悁",
    kana: "エン    ケン",
    english: "anger, worry, impatience ",
  },
  {
    kanji: "悍",
    kana: "カン    たけし    あらし",
    english: "rough, clumsy, violent ",
  },
  {
    kanji: "悃",
    kana: "コン    まごころ",
    english: "sincerity ",
  },
  {
    kanji: "悚",
    kana: "ショウ    おそ.れる",
    english: "fear ",
  },
  {
    kanji: "悄",
    kana: "ショウ    うれ.える",
    english: "anxiety ",
  },
  {
    kanji: "悛",
    kana: "シュン    セン    あらた.める",
    english: "amend ",
  },
  {
    kanji: "悖",
    kana: "ハイ    ボツ    もと.る",
    english: "be contrary ",
  },
  {
    kanji: "悗",
    kana: "バン    マン",
    english: "be perplexed ",
  },
  {
    kanji: "悒",
    kana: "ユウ    ふさ.ぐ    うれ.える",
    english: "be depressed ",
  },
  {
    kanji: "悧",
    kana: "リ",
    english: "clever ",
  },
  {
    kanji: "悋",
    kana: "リン    ねた.む    やぶさか    お.しむ",
    english: "stingy ",
  },
  {
    kanji: "惡",
    kana: "アク    オ    わる.い    あ.し    にく.い    ああ    いずくに    いずくんぞ    にく.む",
    english: "bad, evil ",
  },
  {
    kanji: "悸",
    kana: "キ",
    english: "pulsate, shudder ",
  },
  {
    kanji: "惠",
    kana: "ケイ    エ    めぐ.む    めぐ.み",
    english: "blessing, grace, favor, kindness ",
  },
  {
    kanji: "惓",
    kana: "ケン    うむ",
    english: "be respectful, grow tired ",
  },
  {
    kanji: "悴",
    kana: "スイ    せがれ    やつ.れる",
    english: "becoming emaciated, son ",
  },
  {
    kanji: "忰",
    kana: "スイ    せがれ    やつ.れる",
    english: "suffer, become emaciated, haggard ",
  },
  {
    kanji: "悽",
    kana: "セイ    いたむ",
    english: "be sad, be sorrowful ",
  },
  {
    kanji: "惆",
    kana: "チュウ    うら.む",
    english: "grieve over, be disappointed ",
  },
  {
    kanji: "悵",
    kana: "チョウ    いた.む    うら.む",
    english: "be sad ",
  },
  {
    kanji: "惘",
    kana: "ボウ    モウ    あき.れる",
    english: "unclear, be astonished ",
  },
  {
    kanji: "慍",
    kana: "ウン    オン    いか.る    いか.り    うら.む",
    english: "be angry (excited) ",
  },
  {
    kanji: "愕",
    kana: "ガク    おどろ.く",
    english: "surprised, frightened ",
  },
  {
    kanji: "愆",
    kana: "ケン    あや.まる",
    english: "mistake, fault, offence ",
  },
  {
    kanji: "惶",
    kana: "コウ    おそ.れる",
    english: "fear ",
  },
  {
    kanji: "惷",
    kana: "シュン",
    english: "confusion, foolish ",
  },
  {
    kanji: "愀",
    kana: "シュウ    ショウ",
    english: "respect ",
  },
  {
    kanji: "惴",
    kana: "ズイ    スイ    おそ.れる",
    english: "fear, be afraid ",
  },
  {
    kanji: "惺",
    kana: "セイ    さと.る",
    english: "realize ",
  },
  {
    kanji: "愃",
    kana: "ケン    カン",
    english: "abundant, generous ",
  },
  {
    kanji: "愡",
    kana: "ソウ",
    english: "meaningless, foot race ",
  },
  {
    kanji: "惻",
    kana: "ソク    ショク    いた.む",
    english: "be sad ",
  },
  {
    kanji: "惱",
    kana: "ノウ    なや.む    なや.ます    なや.ましい    なやみ",
    english: "angered, filled with hate ",
  },
  {
    kanji: "愍",
    kana: "ビン    ミン    あわ.れむ",
    english: "pity, mercy, compassion ",
  },
  {
    kanji: "愎",
    kana: "フク    ヒョク    もと.る",
    english: "go against, disobey ",
  },
  {
    kanji: "慇",
    kana: "イン",
    english: "courtesy ",
  },
  {
    kanji: "愾",
    kana: "ガイ    キ    ケ    キツ    ためいき",
    english: "anger, breathlessness ",
  },
  {
    kanji: "愨",
    kana: "カク    つつし.む    まこと",
    english: "respectful, sincerely ",
  },
  {
    kanji: "愧",
    kana: "キ    はじ.る    はじ.らう    はずかし.める    とが.める",
    english: "feel ashamed, shy ",
  },
  {
    kanji: "慊",
    kana: "ケン    キョウ    あきたりる    うら.む",
    english: "satisfaction ",
  },
  {
    kanji: "愿",
    kana: "ゲン    つつし.む",
    english: "respectful, honest ",
  },
  {
    kanji: "愼",
    kana: "シン    つつし.む    つつし.み",
    english: "care, chastity ",
  },
  {
    kanji: "愬",
    kana: "ソ    サク    うった.える",
    english: "complain of ",
  },
  {
    kanji: "愴",
    kana: "ソウ    いたま.しい    いた.む",
    english: "sad, pathetic ",
  },
  {
    kanji: "愽",
    kana: "タン",
    english: "grieving ",
  },
  {
    kanji: "慂",
    kana: "ヨウ    すす.む    すす.める",
    english: "direct, advise ",
  },
  {
    kanji: "慳",
    kana: "ケン    カン    おし.む",
    english: "regret, stinginess ",
  },
  {
    kanji: "慷",
    kana: "コウ",
    english: "weep, grieve ",
  },
  {
    kanji: "慘",
    kana: "サン    みじ.め    いた.む    むご.い",
    english: "sad, pitiful, wretched, cruel ",
  },
  {
    kanji: "慙",
    kana: "ザン    はじ    はじ.る",
    english: "ashamed, humiliated, shameful ",
  },
  {
    kanji: "慚",
    kana: "ザン    はじ    はじ.る",
    english: "feel ashamed ",
  },
  {
    kanji: "慫",
    kana: "ショウ    すす.める",
    english: "advise, persuade ",
  },
  {
    kanji: "慴",
    kana: "シュウ    ショウ    おそ.れる",
    english: "fear, threaten ",
  },
  {
    kanji: "慯",
    kana: "ショウ",
    english: "be sad, grieve ",
  },
  {
    kanji: "慥",
    kana: "ゾウ    たし.かに",
    english: "certainly, doubtless ",
  },
  {
    kanji: "慱",
    kana: "タン",
    english: "grieving ",
  },
  {
    kanji: "慟",
    kana: "ドウ    トウ    なげ.く",
    english: "be sad, grieve ",
  },
  {
    kanji: "慝",
    kana: "トク    わる.い",
    english: "bad, evil, disaster ",
  },
  {
    kanji: "慓",
    kana: "ヒョウ",
    english: "fast, quick ",
  },
  {
    kanji: "慵",
    kana: "ヨウ    ショウ    ものうい",
    english: "languid ",
  },
  {
    kanji: "憙",
    kana: "キ    よろこ.ぶ    ああ    この.む",
    english: "rejoice, like, prefer, exclamation ",
  },
  {
    kanji: "憖",
    kana: "ギン    キン    なまじ.い",
    english: "thoughtlessly ",
  },
  {
    kanji: "憇",
    kana: "ケイ    いこ.い    いこ.う",
    english: "rest, take rest ",
  },
  {
    kanji: "憔",
    kana: "ショウ    セウ    ソウ    やつ.れる    やせ.る",
    english: "get thin ",
  },
  {
    kanji: "憚",
    kana: "タン    タ    はばか.る",
    english: "hesitate, shrink, awe ",
  },
  {
    kanji: "憊",
    kana: "ハイ    ヘイ    つか.れる",
    english: "fatigue ",
  },
  {
    kanji: "憑",
    kana: "ヒョウ    つ.く    つか.れる    よ.る    たの.む",
    english: "depend, rely, evidence, proof, according to, possess, haunt ",
  },
  {
    kanji: "憮",
    kana: "ブ    コ    いつくし.む",
    english: "disappointment ",
  },
  {
    kanji: "懌",
    kana: "エキ    よろこ.ぶ",
    english: "rejoice ",
  },
  {
    kanji: "懊",
    kana: "オウ    じれった.い    なや.む",
    english: "in distress, provoking, irritating, impatient, vexed ",
  },
  {
    kanji: "應",
    kana: "オウ    ヨウ    あた.る    まさに    こた.える",
    english: "answer, yes, OK, reply, accept ",
  },
  {
    kanji: "懷",
    kana: "カイ    エ    ふところ    なつ.かしい    なつ.かしむ    なつ.く    なつ.ける    いだ.く    おも.う",
    english:
  "pocket, feelings, heart, yearn, miss someone, become attached to, bosom, breast ",
  },
  {
    kanji: "懈",
    kana: "ケ    カイ    たわ.い    おこた.る",
    english: "laziness ",
  },
  {
    kanji: "懃",
    kana: "キン    ゴン    ねんごろ",
    english: "courtesy ",
  },
  {
    kanji: "懆",
    kana: "ソウ",
    english: "unease ",
  },
  {
    kanji: "憺",
    kana: "タン",
    english: "calm, quiet, move ",
  },
  {
    kanji: "懋",
    kana: "ボウ    し.げる    つと.める",
    english: "strive, flourish ",
  },
  {
    kanji: "罹",
    kana: "リ    ラ    かか.る",
    english: "catch, get ",
  },
  {
    kanji: "懍",
    kana: "リン    ラン",
    english: "fear, tremble ",
  },
  {
    kanji: "懦",
    kana: "ダ    ジュ    ゼン    よわ.い",
    english: "weakness, cowardice ",
  },
  {
    kanji: "懣",
    kana: "マン    モン    もだ.える",
    english: "worry, agony, anger ",
  },
  {
    kanji: "懶",
    kana: "ラン    ライ    ものうい    おこたる",
    english: "languid, be lazy, be negligent ",
  },
  {
    kanji: "懺",
    kana: "ザン    サン    くい.る",
    english: "regret, repent, confess sins ",
  },
  {
    kanji: "懴",
    kana: "ザン    サン    くい.る",
    english: "remorse ",
  },
  {
    kanji: "懿",
    kana: "イ    よい",
    english: "beautiful, splendid ",
  },
  {
    kanji: "懽",
    kana: "カン    よろこ.ぶ",
    english: "rejoice ",
  },
  {
    kanji: "懼",
    kana: "ク    おそ.れる",
    english: "fear, overawed ",
  },
  {
    kanji: "懾",
    kana: "ショウ    おそ.れる",
    english: "fear ",
  },
  {
    kanji: "戀",
    kana: "レン    こ.う    こい    こい.しい",
    english: "in love, yearn for, miss, darling ",
  },
  {
    kanji: "戈",
    kana: "カ    ほこ    ほこづくり    かのほこ",
    english: "halberd, arms, festival car, float ",
  },
  {
    kanji: "戉",
    kana: "ジュウ    エツ    えびす    まさかり",
    english: "warrior, arms, savage, Ainu ",
  },
  {
    kanji: "戍",
    kana: "ジュ    シュ    まもり    まも.る",
    english: "protection ",
  },
  {
    kanji: "戌",
    kana: "ジュツ    いぬ",
    english: "sign of the dog, 7-9PM, eleventh sign of Chinese zodiac ",
  },
  {
    kanji: "戔",
    kana: "セン    サン",
    english: "damage, remain, slight ",
  },
  {
    kanji: "戛",
    kana: "カツ    ほこ",
    english: "halberd ",
  },
  {
    kanji: "戞",
    kana: "カツ    ほこ",
    english: "lance, tap or strike lightly ",
  },
  {
    kanji: "戡",
    kana: "カン    チン    かつ    さす",
    english: "victory ",
  },
  {
    kanji: "截",
    kana: "セツ    サイ    き.る    たつ",
    english: "cut off, sever ",
  },
  {
    kanji: "戮",
    kana: "リク    リュウ    ロク    キョウ    ク    ころ.す    けず.る",
    english: "kill ",
  },
  {
    kanji: "戰",
    kana: "セン    いくさ    たたか.う    おのの.く    そよぐ",
    english: "war, fighting, battle ",
  },
  {
    kanji: "戲",
    kana: "ギ    ゲ    たわむ.れる    たわむ.れ",
    english: "play, frolic, sport ",
  },
  {
    kanji: "戳",
    kana: "タク",
    english: "poke, prod ",
  },
  {
    kanji: "扁",
    kana: "ヘン    ひらたい",
    english: "level, small ",
  },
  {
    kanji: "扎",
    kana: "サツ    アツ",
    english: "pull, tie up, prick, stab ",
  },
  {
    kanji: "扞",
    kana: "カン    ふせ.ぐ",
    english: "restrain ",
  },
  {
    kanji: "扣",
    kana: "コウ    たた.く    ひか.える",
    english: "knock, strike, rap, tap, button ",
  },
  {
    kanji: "扛",
    kana: "コウ    あ.げる",
    english: "raise ",
  },
  {
    kanji: "扠",
    kana: "サ    さて    さ.す",
    english: "well, now ",
  },
  {
    kanji: "扨",
    kana: "サ    さて    さ.す",
    english: "well, now ",
  },
  {
    kanji: "扼",
    kana: "ヤク    アク    おさ.える",
    english: "command, dominate, prevent, obstruct ",
  },
  {
    kanji: "抂",
    kana: "キョウ    ゴウ",
    english: "disorder ",
  },
  {
    kanji: "抉",
    kana: "ケツ    えぐ.る    こじ.る    くじ.る",
    english: "gouge, hollow out, bore, pry ",
  },
  {
    kanji: "找",
    kana: "ソウ",
    english: "look for, seek, make change ",
  },
  {
    kanji: "抒",
    kana: "ジョ    ショ    く.む    の.べる",
    english: "tell, 10**24 ",
  },
  {
    kanji: "抓",
    kana: "ソウ    つ.ねる    つ.める    つね.る    つま.む",
    english: "pick, pinch, summarize ",
  },
  {
    kanji: "抖",
    kana: "ト    トウ",
    english: "shake, jiggle ",
  },
  {
    kanji: "拔",
    kana: "バツ    ハイ    ぬ.く    ぬ.ける    ぬ.かす    ぬ.かる",
    english: "extract, pull out, pilfer, quote, remove, omit ",
  },
  {
    kanji: "抃",
    kana: "ベン    う.つ",
    english: "strike with hand ",
  },
  {
    kanji: "抔",
    kana: "ホウ    ハイ    など    すく.う",
    english: "and so forth ",
  },
  {
    kanji: "拗",
    kana: "オウ    ヨウ    イク    ユウ    ねじ.れる    こじ.れる    す.ねる    ねじ.ける",
    english: "crooked, twisted, distorted, perverted, cross ",
  },
  {
    kanji: "拑",
    kana: "カン    ケン    つぐ.む",
    english: "shut one's mouth ",
  },
  {
    kanji: "抻",
    kana: "シン    チン",
    english: "stretch, extend ",
  },
  {
    kanji: "拏",
    kana: "ダ    ナ    つか.む    ひ.く",
    english: "catch, arrest ",
  },
  {
    kanji: "拿",
    kana: "ダ    ナ    つか.む    ひ.く",
    english: "catch, arrest ",
  },
  {
    kanji: "拆",
    kana: "タク    セキ    さく    ひらく",
    english: "open ",
  },
  {
    kanji: "擔",
    kana: "タン    かつ.ぐ    にな.う",
    english: "carry, bear, undertake ",
  },
  {
    kanji: "拈",
    kana: "ネン    セン    デン    ひね.る",
    english: "twirl, twist, twiddle, wring ",
  },
  {
    kanji: "拜",
    kana: "ハイ    おが.む    おろが.む",
    english: "worship, adore, pray to ",
  },
  {
    kanji: "拌",
    kana: "ハン",
    english: "stir and mix ",
  },
  {
    kanji: "拊",
    kana: "フ    は.る    うつ    な.でる",
    english: "slap, strike ",
  },
  {
    kanji: "拂",
    kana: "ヒツ    フツ    ホツ    はら.う",
    english: "clear out, sweep away ",
  },
  {
    kanji: "拇",
    kana: "ボ    おやゆび",
    english: "thumb ",
  },
  {
    kanji: "抛",
    kana: "ホウ    なげう.つ",
    english: "hurl ",
  },
  {
    kanji: "挌",
    kana: "カク    う.つ",
    english: "strike, hit, fight ",
  },
  {
    kanji: "拮",
    kana: "カツ    ケツ    キツ    はた.らく",
    english: "be imminent ",
  },
  {
    kanji: "拱",
    kana: "キョウ    コウ    こまぬ.く    こまね.く",
    english: "arch, fold arms ",
  },
  {
    kanji: "挧",
    kana: "ウ",
    english: "horse-chestnut tree, used in names, s&H jabberwocky words ",
  },
  {
    kanji: "挂",
    kana: "ケイ    カイ    ケ    か.ける",
    english: "hang ",
  },
  {
    kanji: "挈",
    kana: "ケイ    ケツ    ひっさ.げる",
    english: "carry by hand ",
  },
  {
    kanji: "拯",
    kana: "ショウ    ジョウ    すく.う",
    english: "help ",
  },
  {
    kanji: "拵",
    kana: "ソン    こしら.える",
    english: "make, prepare, arrange ",
  },
  {
    kanji: "捐",
    kana: "エン    す.てる",
    english: "throw away ",
  },
  {
    kanji: "挾",
    kana: "キョウ    ショウ    はさ.む    はさ.まる    わきばさ.む    さしはさ.む",
    english: "put between, insert, jam, get caught, sandwich ",
  },
  {
    kanji: "捍",
    kana: "カン    ふせ.ぐ",
    english: "defend, protect ",
  },
  {
    kanji: "搜",
    kana: "ソウ    シュ    シュウ    さが.す",
    english: "search, seek, investigate ",
  },
  {
    kanji: "捏",
    kana: "ネツ    テツ    ネチ    こ.ねる    ね.る    つく.ねる",
    english: "knead, mix ",
  },
  {
    kanji: "掖",
    kana: "エキ    たす.ける    わきばさ.む",
    english: "side (of body), carry under arm ",
  },
  {
    kanji: "掎",
    kana: "キ    ひ.く",
    english: "pull, hold back ",
  },
  {
    kanji: "掀",
    kana: "キン    ケン",
    english: "raise, hoist ",
  },
  {
    kanji: "掫",
    kana: "ソウ    シュウ    まも.る    たきぎ    う.つ",
    english: "var of N1924? ",
  },
  {
    kanji: "捶",
    kana: "スイ    むちう.つ",
    english: "strike, whip, slap ",
  },
  {
    kanji: "掣",
    kana: "セイ    セツ    ひ.く",
    english: "pull back, restrain ",
  },
  {
    kanji: "掏",
    kana: "トウ    す.る    えら.ぶ",
    english: "pickpocket ",
  },
  {
    kanji: "掉",
    kana: "トウ    チョウ    ふる.う",
    english: "shake & move ",
  },
  {
    kanji: "掟",
    kana: "トウ    チョウ    ジョウ    テイ    おきて",
    english: "law, commandments, regulations ",
  },
  {
    kanji: "掵",
    kana: "ハバ",
    english: "alluvial terraced land ",
  },
  {
    kanji: "捫",
    kana: "モン    な.でる",
    english: "to stroke ",
  },
  {
    kanji: "捩",
    kana: "レイ    レツ    よじ.る    ね.じる    ねじ.れる    も.じる",
    english: "screw, twist, wrench, distort ",
  },
  {
    kanji: "掾",
    kana: "エン    テン    じょう",
    english: "help, subordinate official, obsolete government service rank ",
  },
  {
    kanji: "揩",
    kana: "カイ    カツ    ぬぐ.う",
    english: "wipe ",
  },
  {
    kanji: "揀",
    kana: "カン    ケン    えら.ぶ",
    english: "select ",
  },
  {
    kanji: "揆",
    kana: "キ    はかりごと    はか.る",
    english: "category, plan, drumstick ",
  },
  {
    kanji: "揣",
    kana: "シ    スイ    タン    はか.る",
    english: "conjecture ",
  },
  {
    kanji: "揉",
    kana: "ジュウ    も.む    も.める",
    english:
  "rub, massage, shampoo, debate vigorously, train, coach, worry, get in trouble ",
  },
  {
    kanji: "插",
    kana: "ソウ    さ.す    はさ.む",
    english: "insert, stick into, plant ",
  },
  {
    kanji: "揶",
    kana: "ヤ    からか.う",
    english: "tease, play with ",
  },
  {
    kanji: "揄",
    kana: "ヨウ    ユウ    ユ",
    english: "pull, tease, play with ",
  },
  {
    kanji: "搖",
    kana: "ヨウ    ゆ.れる    ゆ.らぐ    ゆ.るぐ    ゆ.する    ゆ.さぶる    ゆ.すぶる    うご.く",
    english: "wag, swing, wave, shake, scull ",
  },
  {
    kanji: "搴",
    kana: "ケン    と.る    ぬ.く",
    english: "take, hoist, pull out, shrink ",
  },
  {
    kanji: "搆",
    kana: "コウ",
    english: "pull, cause ",
  },
  {
    kanji: "搓",
    kana: "サ    サイ    よ.る",
    english: "braid, cut ",
  },
  {
    kanji: "搦",
    kana: "ジャク    ジョク    ダク    ニャク    から.める    -がら.み",
    english: "bind, tie, approx. ",
  },
  {
    kanji: "搶",
    kana: "ソウ    ショウ    つ.く",
    english: "thrust, poke, come together, assemble ",
  },
  {
    kanji: "攝",
    kana: "セツ    ショウ    おさ.める    かね.る    と.る",
    english: "surrogate, act in addition to ",
  },
  {
    kanji: "搗",
    kana: "トウ    つ.く    か.つ",
    english: "pound, husk ",
  },
  {
    kanji: "搨",
    kana: "トウ    う.つ    す.る",
    english: "trace, rub a copy of a stone inscription ",
  },
  {
    kanji: "搏",
    kana: "ハク    う.つ    と.る",
    english: "seize, spring upon, strike ",
  },
  {
    kanji: "摧",
    kana: "サイ    サ    くだ.く",
    english: "break, smash, crush, familiar, popular ",
  },
  {
    kanji: "摶",
    kana: "タン    セン    まる.い",
    english: "roll into a ball, slap ",
  },
  {
    kanji: "摎",
    kana: "ク    キュウ",
    english: "tie into a bundle, coil around ",
  },
  {
    kanji: "攪",
    kana: "カク    コウ    みだ.す",
    english: "disturb, throw into confusion ",
  },
  {
    kanji: "撕",
    kana: "セイ    シ",
    english: "warn against, break, rend, tear ",
  },
  {
    kanji: "撓",
    kana: "トウ    キョウ    コウ    ジョウ    たわ.む    しな.う    しお.る    たわ.める    みだ.す    みだ.れる",
    english: "bend, train, lithe ",
  },
  {
    kanji: "撥",
    kana: "ハツ    バチ    は.ねる    おさ.める",
    english: "brush up, reject, exclude, eliminate, bone plectrum ",
  },
  {
    kanji: "撩",
    kana: "リョウ    ロウ",
    english: "disorder ",
  },
  {
    kanji: "撈",
    kana: "ロウ    リョウ",
    english: "catch fish ",
  },
  {
    kanji: "撼",
    kana: "カン    うごか.す",
    english: "move ",
  },
  {
    kanji: "據",
    kana: "キョ    コ    よ.る",
    english: "to occupy, take possession of, a base ",
  },
  {
    kanji: "擒",
    kana: "キン    とら.える    とりこ",
    english: "capture, a captive ",
  },
  {
    kanji: "擅",
    kana: "セン    ほしいまま",
    english: "self-indulgent ",
  },
  {
    kanji: "擇",
    kana: "タク    えら.ぶ",
    english: "select, choose, pick out ",
  },
  {
    kanji: "撻",
    kana: "タツ    むちうつ",
    english: "whip, flog, strike ",
  },
  {
    kanji: "擘",
    kana: "ハク    ヒャク    ヘキ    さ.く",
    english: "tear up ",
  },
  {
    kanji: "擂",
    kana: "ライ    す.る",
    english: "grind, mash, grate ",
  },
  {
    kanji: "擱",
    kana: "カク    お.く",
    english: "lay down, put down ",
  },
  {
    kanji: "擧",
    kana: "キョ    あ.げる    あ.がる    こぞ.る",
    english: "raise, plan, project, behavior, actions ",
  },
  {
    kanji: "舉",
    kana: "キョ    あ.げる    あ.がる    こぞ.る",
    english: "raise, plan, project, behavior, actions ",
  },
  {
    kanji: "擠",
    kana: "セイ    サイ    お.す",
    english: "push aside ",
  },
  {
    kanji: "擡",
    kana: "タイ    もた.げる",
    english: "lift, raise ",
  },
  {
    kanji: "抬",
    kana: "タイ    もた.げる",
    english: "lift, carry ",
  },
  {
    kanji: "擣",
    kana: "トウ    う.つ    つ.く",
    english: "pound ",
  },
  {
    kanji: "擯",
    kana: "ヒン    しりぞ.ける",
    english: "push (people) back, reject ",
  },
  {
    kanji: "攬",
    kana: "ラン    と.る",
    english: "hold (in hand) ",
  },
  {
    kanji: "擶",
    kana: "セン    ただす",
    english: "straighten (an arrow) ",
  },
  {
    kanji: "擴",
    kana: "カク    コウ    ひろ.がる    ひろ.げる    ひろ.める",
    english: "broaden, extend, expand, enlarge ",
  },
  {
    kanji: "擲",
    kana: "テキ    チャク    ジャク    なぐ.る    なげう.つ",
    english: "hit, resign ",
  },
  {
    kanji: "擺",
    kana: "ハイ    ひら.く",
    english: "push open ",
  },
  {
    kanji: "攀",
    kana: "ハン    よ.じる",
    english: "climb, scale ",
  },
  {
    kanji: "擽",
    kana: "リャク    ラク    レキ    フキ    くすぐ.る    う.つ",
    english: "tickle, funny ",
  },
  {
    kanji: "攘",
    kana: "ジョウ    ぬす.む    はら.う",
    english: "chase away, steal ",
  },
  {
    kanji: "攜",
    kana: "ケイ    たずさ.える    たずさ.わる",
    english: "carry (in hand), armed with, bring along ",
  },
  {
    kanji: "攅",
    kana: "サン    あつ.まる",
    english: "gather, come together ",
  },
  {
    kanji: "攤",
    kana: "タン    ひら.く",
    english: "open, broaden, apportion ",
  },
  {
    kanji: "攣",
    kana: "レン    つ.る    ひ.く",
    english: "crooked, bent ",
  },
  {
    kanji: "攫",
    kana: "カク    さら.う    つか.む",
    english: "abduct ",
  },
  {
    kanji: "攴",
    kana: "ホク    ぼくづくり    ぼくにょう    とまた",
    english: "strike, hit, folding chair radical (no. 66) ",
  },
  {
    kanji: "攵",
    kana: "ホク    のぶん    ぼくづくり    ぼくにょう",
    english: "strike, hit, folding chair radical variant (no. 66) ",
  },
  {
    kanji: "攷",
    kana: "コウ    かんが.える",
    english: "examine, test, investigate ",
  },
  {
    kanji: "收",
    kana: "シュウ    おさ.める    おさ.まる",
    english: "income ",
  },
  {
    kanji: "攸",
    kana: "ユウ    ところ",
    english: "relaxed, at ease, place ",
  },
  {
    kanji: "畋",
    kana: "デン    テン    かり",
    english: "till, cultivate, hunting ",
  },
  {
    kanji: "效",
    kana: "コウ    き.く    ききめ    なら.う",
    english: "result, effect, effectiveness ",
  },
  {
    kanji: "敖",
    kana: "ゴウ    あそ.ぶ    おご.る",
    english: "play, be proud ",
  },
  {
    kanji: "敕",
    kana: "チョク    いまし.める    みことのり",
    english: "an imperial order or decree ",
  },
  {
    kanji: "敍",
    kana: "ジョ    つい.ず    ついで",
    english: "express, state, relate, narrate ",
  },
  {
    kanji: "敘",
    kana: "ジョ    つい.ず    ついで",
    english: "var of N2050 ",
  },
  {
    kanji: "敞",
    kana: "ショウ    たか.い    ほが.らか    ひろ.い",
    english: "high and flat, broad, spacious ",
  },
  {
    kanji: "敝",
    kana: "ヘイ    やぶ.れる",
    english: "be worn-out, be dilapidated, be defeated ",
  },
  {
    kanji: "敲",
    kana: "コウ    たた.く",
    english: "strike, beat, hit ",
  },
  {
    kanji: "數",
    kana: "スウ    ス    サク    ソク    シュ    かず    かぞ.える    しばしば    せ.める    わずらわ.しい",
    english: "number, strength, fate, law, figures ",
  },
  {
    kanji: "斂",
    kana: "レン    おさ.める",
    english: "tighten, stiffen ",
  },
  {
    kanji: "斃",
    kana: "ヘイ    たお.れる    たお.す",
    english: "kill, die violent death ",
  },
  {
    kanji: "變",
    kana: "ヘン    か.わる    か.える",
    english: "change, strange ",
  },
  {
    kanji: "斛",
    kana: "コク    と",
    english: "measure, 10, unit of volume, about 180 liters ",
  },
  {
    kanji: "斟",
    kana: "シン    く.む",
    english: "dip water, estimate ",
  },
  {
    kanji: "斫",
    kana: "シャク    き.る",
    english: "cut with a sword ",
  },
  {
    kanji: "斷",
    kana: "ダン    た.つ    ことわ.る    さだ.める",
    english: "sever, cut off, interrupt ",
  },
  {
    kanji: "旃",
    kana: "セン    はた",
    english: "woollen cloth ",
  },
  {
    kanji: "旆",
    kana: "ハイ    はた",
    english: "flag ",
  },
  {
    kanji: "旁",
    kana: "ボウ    ホウ    つくり    かたがた    かたわら",
    english: "RHS of character, at same time ",
  },
  {
    kanji: "旄",
    kana: "ボウ    モウ",
    english: "tassel on a flag, long haired cow, old man ",
  },
  {
    kanji: "旌",
    kana: "セイ    ショウ    あら.わす    はた",
    english: "flag, praise ",
  },
  {
    kanji: "旒",
    kana: "リュウ    はたあし",
    english: "counter for flags ",
  },
  {
    kanji: "旛",
    kana: "ヘン    ハン    はた",
    english: "flag ",
  },
  {
    kanji: "旙",
    kana: "ヘン    ハン    はた",
    english: "a pennant, a banner ",
  },
  {
    kanji: "无",
    kana: "ブ    ム    なし    ない    むにょう    む    なし",
    english: "nothing, not exist, crooked heaven radical (no.71) ",
  },
  {
    kanji: "旡",
    kana: "キ    ケ    む    なし    すでのつくり",
    english: "sob, choke ",
  },
  {
    kanji: "旱",
    kana: "カン    ひでり",
    english: "drought, dry weather ",
  },
  {
    kanji: "杲",
    kana: "コウ    あきらか    たか.い",
    english: "clear, high ",
  },
  {
    kanji: "昊",
    kana: "コウ    そら",
    english: "sky, big ",
  },
  {
    kanji: "昃",
    kana: "ショク    ソク    かたむ.く",
    english: "decline, go down, sunset ",
  },
  {
    kanji: "旻",
    kana: "ビン    ミン    あきぞら",
    english: "the autumn sky ",
  },
  {
    kanji: "杳",
    kana: "ヨウ    くら.い    はるか",
    english: "darkness, dimly ",
  },
  {
    kanji: "昵",
    kana: "ジツ    ショク    ちかづ.く",
    english: "reconcile, become intimate ",
  },
  {
    kanji: "昶",
    kana: "チョウ",
    english: "long day, clear ",
  },
  {
    kanji: "昜",
    kana: "ヨウ",
    english: "open, sun ",
  },
  {
    kanji: "晄",
    kana: "コウ    あきらか",
    english: "clear ",
  },
  {
    kanji: "晉",
    kana: "シン    すす.む",
    english: "advance ",
  },
  {
    kanji: "晁",
    kana: "チョウ    あさ",
    english: "proper name ",
  },
  {
    kanji: "晞",
    kana: "キ    かわ.く",
    english: "dry out, expose to the sun ",
  },
  {
    kanji: "晝",
    kana: "チュウ    ひる",
    english: "daytime, daylight ",
  },
  {
    kanji: "晤",
    kana: "ゴ    あきらか",
    english: "clear ",
  },
  {
    kanji: "晧",
    kana: "コウ",
    english: "bright, pure ",
  },
  {
    kanji: "晢",
    kana: "セイ    セツ    あきらか",
    english: "light of stars, shine ",
  },
  {
    kanji: "晰",
    kana: "シャク    セキ    あきらか",
    english: "clear ",
  },
  {
    kanji: "暃",
    kana: "ヒ",
    english: "be separated ",
  },
  {
    kanji: "暈",
    kana: "ウン    ぼか.す    ぼか.る    かさ    くま    ぼかし    めまい",
    english: "halo, corona, fade ",
  },
  {
    kanji: "暎",
    kana: "エイ    ヨウ    うつ.す    うつ.る    は.える",
    english: "sun beginning decline, reflect ",
  },
  {
    kanji: "暄",
    kana: "ケン    あたたか.い",
    english: "warm weather ",
  },
  {
    kanji: "暘",
    kana: "ヨウ",
    english: "sunrise ",
  },
  {
    kanji: "暝",
    kana: "メイ    ミョウ    くら.い",
    english: "dark ",
  },
  {
    kanji: "曁",
    kana: "キ    およ.ぶ",
    english: "and, along with, reach, extend to ",
  },
  {
    kanji: "暹",
    kana: "セン",
    english: "sunrise ",
  },
  {
    kanji: "曉",
    kana: "キョウ    ギョウ    あかつき    さと.る",
    english: "dawn, daybreak, clear, explicit ",
  },
  {
    kanji: "暾",
    kana: "トン    あさひ",
    english: "sunrise, sun's rays ",
  },
  {
    kanji: "暼",
    kana: "ヘツ    ヘチ",
    english: "setting sun ",
  },
  {
    kanji: "曄",
    kana: "ヨウ    かが.やく",
    english: "shine, flourishing ",
  },
  {
    kanji: "暸",
    kana: "リョウ    あきらか",
    english: "clear ",
  },
  {
    kanji: "曚",
    kana: "モウ    ボウ    くら.い",
    english: "darkness ",
  },
  {
    kanji: "曠",
    kana: "コウ    あきらか    むな.しい",
    english: "wide, worthless ",
  },
  {
    kanji: "昿",
    kana: "コウ    あきらか    むな.しい",
    english: "extensive, wide, broad, empty ",
  },
  {
    kanji: "曦",
    kana: "ギ    キ",
    english: "the sun ",
  },
  {
    kanji: "曩",
    kana: "ノウ    ドウ    さき.に",
    english: "point ",
  },
  {
    kanji: "曰",
    kana: "エツ    いわ.く    のたま.わく    ここに    ひらび",
    english: "say, reason, pretext, history, past ",
  },
  {
    kanji: "曵",
    kana: "エイ    ひ.く",
    english: "trail, tow, drag, pull ",
  },
  {
    kanji: "曷",
    kana: "カツ    なんぞ    いつ    いずくんぞ    なに",
    english: "why, how, when ",
  },
  {
    kanji: "朏",
    kana: "ヒ    ハイ",
    english: "new moon, crescent moon ",
  },
  {
    kanji: "朖",
    kana: "ロウ    ほが.らか    あき.らか",
    english: "clear, bright, distinct ",
  },
  {
    kanji: "朞",
    kana: "キ    ゴ",
    english: "one period ",
  },
  {
    kanji: "朦",
    kana: "モウ    ボウ    おぼろ",
    english: "dim, obscure ",
  },
  {
    kanji: "朧",
    kana: "ロウ    おぼろ",
    english: "haziness, dreaminess, gloom ",
  },
  {
    kanji: "霸",
    kana: "ハ    ハク    はたがしら",
    english: "supremacy, leadership ",
  },
  {
    kanji: "朮",
    kana: "ジュツ    シュツ    チュツ    もちあわ    おけら",
    english: "a type of millet, a type of herb ",
  },
  {
    kanji: "朿",
    kana: "シ    とげ",
    english: "thorn ",
  },
  {
    kanji: "朶",
    kana: "ダ    タ    えだ",
    english: "branch ",
  },
  {
    kanji: "杁",
    kana: "イリ",
    english: "sluice, spout, floodgate, penstock ",
  },
  {
    kanji: "朸",
    kana: "リョク    おおご    おうご",
    english: "carrying pole ",
  },
  {
    kanji: "朷",
    kana: "トウ",
    english: "type of tree ",
  },
  {
    kanji: "杆",
    kana: "カン    てこ",
    english: "shield, pole ",
  },
  {
    kanji: "杞",
    kana: "コ    キ",
    english: "river willow ",
  },
  {
    kanji: "杠",
    kana: "コウ    てこ",
    english: "carry on the shoulder ",
  },
  {
    kanji: "杙",
    kana: "ヨク    くい",
    english: "stake, post, picket, piling ",
  },
  {
    kanji: "杣",
    kana: "そま",
    english: "timber, lumber, woodcutter, (kokuji) ",
  },
  {
    kanji: "杤",
    kana: "とち",
    english: "type of oak, stable ",
  },
  {
    kanji: "枉",
    kana: "オオ    オウ    ま.げる    ま.がる    ま.げて",
    english:
  "bend, curve, crooked, perverse, lean, forcibly, against one's will ",
  },
  {
    kanji: "杰",
    kana: "ケツ    ゲチ    すぐ.れる",
    english: "hero, heroic, outstanding ",
  },
  {
    kanji: "枩",
    kana: "ショウ    まつ",
    english: "pine tree, fir tree ",
  },
  {
    kanji: "杼",
    kana: "チョ    ショ    ひ    どんぐり",
    english: "shuttle ",
  },
  {
    kanji: "杪",
    kana: "ビョウ    ショウ    こずえ",
    english: "twig, treetop ",
  },
  {
    kanji: "枌",
    kana: "ショウ    フン    まつ    そぎ",
    english: "pine tree ",
  },
  {
    kanji: "枋",
    kana: "ホウ    ヘイ    ほ",
    english: "raft, boat ",
  },
  {
    kanji: "枦",
    kana: "ロ    はぜ",
    english: "wax tree, sumac ",
  },
  {
    kanji: "枡",
    kana: "ます",
    english: "measuring box, (kokuji) ",
  },
  {
    kanji: "枅",
    kana: "ケイ    ひじき",
    english: "rafter, place name ",
  },
  {
    kanji: "枷",
    kana: "カ    かせ    からざお",
    english: "shackles, irons, handcuffs, bonds ",
  },
  {
    kanji: "柯",
    kana: "カ    え",
    english: "handle ",
  },
  {
    kanji: "枴",
    kana: "カイ    つえ",
    english: "cane, walking stick ",
  },
  {
    kanji: "柬",
    kana: "カン    ケン    えら.ぶ",
    english: "select, pick out ",
  },
  {
    kanji: "枳",
    kana: "キ    シ    からたち",
    english: "trifoliate orange tree, thorny tree used for hedges ",
  },
  {
    kanji: "柩",
    kana: "キュウ    グ    ひちぎ    ひつぎ",
    english: "bier, coffin ",
  },
  {
    kanji: "枸",
    kana: "ク    コウ",
    english: "quince tree ",
  },
  {
    kanji: "柤",
    kana: "サ    そ",
    english: "railing ",
  },
  {
    kanji: "柞",
    kana: "サク    ははそ",
    english: "type of oak ",
  },
  {
    kanji: "柝",
    kana: "タク    ひょうしぎ",
    english: "sounding sticks ",
  },
  {
    kanji: "柢",
    kana: "テイ    ね",
    english: "root, founded on ",
  },
  {
    kanji: "柮",
    kana: "トツ",
    english: "to cut, a stump ",
  },
  {
    kanji: "枹",
    kana: "フ    ホウ    ほ    ばち",
    english: "gong stick, drum stick, type of tree ",
  },
  {
    kanji: "柎",
    kana: "フ    うてな",
    english: "raft, calyx ",
  },
  {
    kanji: "柆",
    kana: "ロウ",
    english: "bent tree, broken tree ",
  },
  {
    kanji: "柧",
    kana: "コ    カ    く",
    english: "corner, spire, goblet, winecup ",
  },
  {
    kanji: "框",
    kana: "キョウ    かまち",
    english: "framework ",
  },
  {
    kanji: "栩",
    kana: "ク    くぬぎ",
    english: "type of oak ",
  },
  {
    kanji: "桀",
    kana: "ケツ    ます    はりつけ",
    english: "measuring box, var of N2242 ",
  },
  {
    kanji: "桍",
    kana: "コ",
    english: "type of tree, empty ",
  },
  {
    kanji: "栲",
    kana: "コウ    かえ    たえ",
    english: "sumac, cloth woven from tree fibres ",
  },
  {
    kanji: "桎",
    kana: "シツ    あしかせ",
    english: "fetters ",
  },
  {
    kanji: "梳",
    kana: "ソ    と.く    と.かす    す.く    けず.る    くしけず.る",
    english: "comb (hair) ",
  },
  {
    kanji: "栫",
    kana: "セン    ソン",
    english: "weir ",
  },
  {
    kanji: "桙",
    kana: "ウ    ほこ",
    english: "halberd ",
  },
  {
    kanji: "档",
    kana: "トウ",
    english: "bookshelf, archives ",
  },
  {
    kanji: "桷",
    kana: "カク    たるき",
    english: "rafter ",
  },
  {
    kanji: "桿",
    kana: "カン    てこ",
    english: "shield, pole ",
  },
  {
    kanji: "梟",
    kana: "キョウ    ふくろ.う",
    english: "owl, expose ",
  },
  {
    kanji: "梏",
    kana: "コク    カク    てかせ",
    english: "manacles ",
  },
  {
    kanji: "梭",
    kana: "サ    ひ",
    english: "shuttle ",
  },
  {
    kanji: "梔",
    kana: "シ    くちなし",
    english: "gardenia ",
  },
  {
    kanji: "條",
    kana: "ジョウ    チョウ    デキ    えだ    すじ",
    english: "article, ray of light ",
  },
  {
    kanji: "梛",
    kana: "ダ    ナ    なぎ",
    english: "type of tall evergreen tree ",
  },
  {
    kanji: "梃",
    kana: "チョウ    テイ    てこ    つえ",
    english: "lever ",
  },
  {
    kanji: "梹",
    kana: "ヒン",
    english: "areca nut, betel nut ",
  },
  {
    kanji: "桴",
    kana: "フ    ばち    いかだ",
    english: "drumstick, raft ",
  },
  {
    kanji: "梵",
    kana: "ボン    フウ",
    english: "Sanskrit, purity, Buddhist ",
  },
  {
    kanji: "梠",
    kana: "ロ    リョ    ひさし",
    english: "a kind of quince ",
  },
  {
    kanji: "梺",
    kana: "ふむと    ふもと",
    english: "base of a mountain ",
  },
  {
    kanji: "椏",
    kana: "また",
    english: "crotch of a tree ",
  },
  {
    kanji: "梍",
    kana: "ユウ",
    english: "sickle handle, type of tree ",
  },
  {
    kanji: "桾",
    kana: "クン",
    english: "type of fruit tree ",
  },
  {
    kanji: "椁",
    kana: "カク",
    english: "outer box for a coffin ",
  },
  {
    kanji: "棊",
    kana: "キ    ご",
    english: "Japanese chess ",
  },
  {
    kanji: "椈",
    kana: "キク",
    english: "oak ",
  },
  {
    kanji: "棘",
    kana: "キョク    いばら    とげ",
    english: "thorn, splinter, spine, biting words, briers ",
  },
  {
    kanji: "椢",
    kana: "カイ    そこ    はこ    くぬぎ",
    english: "bottom, box, type of oak tree ",
  },
  {
    kanji: "椦",
    kana: "ケン    まげもの",
    english: "wickerwork ",
  },
  {
    kanji: "棡",
    kana: "コウ",
    english: "mast crossbeam ",
  },
  {
    kanji: "椌",
    kana: "コウ",
    english: "type of ancient musical instrument, unadorned tool ",
  },
  {
    kanji: "棍",
    kana: "コン    つえ",
    english: "a cane ",
  },
  {
    kanji: "棔",
    kana: "コン    ねむのき",
    english: "silk tree ",
  },
  {
    kanji: "棧",
    kana: "サン    セン    かけはし",
    english: "crosspiece ",
  },
  {
    kanji: "棕",
    kana: "シュ    ソウ",
    english: "hemp palm ",
  },
  {
    kanji: "椶",
    kana: "シュ    ソウ",
    english: "hemp palm ",
  },
  {
    kanji: "椒",
    kana: "ショウ    はじかみ",
    english: "mountain ash ",
  },
  {
    kanji: "椄",
    kana: "セツ    ショウ    つ.ぐ",
    english: "graft ",
  },
  {
    kanji: "棗",
    kana: "ソウ    なつめ",
    english: "jujube ",
  },
  {
    kanji: "棣",
    kana: "テイ    タイ    にわざくら",
    english: "flowering almond ",
  },
  {
    kanji: "椥",
    kana: "なぎ",
    english: "type of evergreen tree ",
  },
  {
    kanji: "棹",
    kana: "トウ    タク    さお    こ.ぐ",
    english: "pole a boat ",
  },
  {
    kanji: "棠",
    kana: "トウ    やまなし",
    english: "wild pear tree, crabapple tree ",
  },
  {
    kanji: "棯",
    kana: "ネン",
    english: "type of fruit tree ",
  },
  {
    kanji: "椨",
    kana: "たぶ    たふ",
    english: "type of evergreen camphor tree ",
  },
  {
    kanji: "椪",
    kana: "ポン",
    english: "name of a place in India, Poona ",
  },
  {
    kanji: "椚",
    kana: "くにぎ    くぬぎ",
    english: "oak used for charcoal, (kokuji) ",
  },
  {
    kanji: "椣",
    kana: "しで",
    english: "type of deciduous birch tree ",
  },
  {
    kanji: "椡",
    kana: "トウ",
    english: "(no known meaning; s&H uses jabberwocky words) ",
  },
  {
    kanji: "棆",
    kana: "リン",
    english: "camphor tree ",
  },
  {
    kanji: "楹",
    kana: "エイ    はしら",
    english: "pillar ",
  },
  {
    kanji: "楜",
    kana: "コ",
    english: "pepper ",
  },
  {
    kanji: "楸",
    kana: "シュウ    きささげ    ひさぎ",
    english: "Japanese catalpa ",
  },
  {
    kanji: "楫",
    kana: "シュウ    ショウ    かじ    かい",
    english: "sculling oar ",
  },
  {
    kanji: "楔",
    kana: "ケツ    セツ    くさび    ほうだて",
    english: "wedge, arrowhead ",
  },
  {
    kanji: "楾",
    kana: "はんぞう",
    english: "container for pouring water ",
  },
  {
    kanji: "楮",
    kana: "チョ    こうぞ",
    english: "paper mulberry ",
  },
  {
    kanji: "椹",
    kana: "ジン    チン    シン    さわら    あてぎ    くわのみ",
    english: "type of cypress ",
  },
  {
    kanji: "楴",
    kana: "テイ",
    english: "ornamental hairpin ",
  },
  {
    kanji: "椽",
    kana: "テン    えん    たるき",
    english: "rafter, porch ",
  },
  {
    kanji: "楙",
    kana: "ボウ    しげる",
    english: "name of plant, lush ",
  },
  {
    kanji: "楡",
    kana: "ユ    にれ",
    english: "elm ",
  },
  {
    kanji: "楞",
    kana: "リョウ    ロウ    かど",
    english: "corner, protrusion ",
  },
  {
    kanji: "楝",
    kana: "レン    おおち    おうち",
    english: "Japanese bead tree ",
  },
  {
    kanji: "榁",
    kana: "むろ",
    english: "needle juniper ",
  },
  {
    kanji: "楪",
    kana: "チャ",
    english: "lacquered dish ",
  },
  {
    kanji: "榲",
    kana: "オツ",
    english: "quince ",
  },
  {
    kanji: "榮",
    kana: "エイ    ヨウ    さか.える    は.える    え",
    english: "flourish, prosperity, honour, glory, splendour ",
  },
  {
    kanji: "槐",
    kana: "カイ    えんじゅ",
    english: "type of Japanese pagoda tree ",
  },
  {
    kanji: "榿",
    kana: "ガイ    カイ",
    english: "alder ",
  },
  {
    kanji: "槁",
    kana: "コウ    か.れる",
    english: "die (vegetation) ",
  },
  {
    kanji: "槓",
    kana: "コウ    てこ",
    english: "lever ",
  },
  {
    kanji: "榾",
    kana: "コツ    ほた",
    english: "chip (of wood) ",
  },
  {
    kanji: "槎",
    kana: "サ    いかだ    き.る",
    english: "raft, cut slantwise ",
  },
  {
    kanji: "寨",
    kana: "サイ    とりで",
    english: "fort ",
  },
  {
    kanji: "槊",
    kana: "サク    ほこ",
    english: "halberd ",
  },
  {
    kanji: "槝",
    kana: "かし",
    english: "oak, mooring pole, used in proper names ",
  },
  {
    kanji: "榻",
    kana: "トウ    こしかけ    しじ",
    english: "chair ",
  },
  {
    kanji: "槃",
    kana: "ハン    たら.い",
    english: "tub ",
  },
  {
    kanji: "榧",
    kana: "ヒ    かや",
    english: "Japanese nutmeg, plum-yew ",
  },
  {
    kanji: "樮",
    kana: "ほくそ",
    english: "a type of tree ",
  },
  {
    kanji: "榑",
    kana: "フ    くれ",
    english: "unbarked lumber ",
  },
  {
    kanji: "榠",
    kana: "ベイ",
    english: "type of tree ",
  },
  {
    kanji: "榜",
    kana: "ボウ    ホウ    かじ    たてふだ    ふだ",
    english: "rudder, oar, name plate ",
  },
  {
    kanji: "榕",
    kana: "ヨウ    あこう",
    english: "evergreen mulberry ",
  },
  {
    kanji: "榴",
    kana: "ル    リュウ    リョウ    ざくろ",
    english: "pomegranate ",
  },
  {
    kanji: "槞",
    kana: "ロウ",
    english: "cage ",
  },
  {
    kanji: "槨",
    kana: "カク",
    english: "outer box for a coffin ",
  },
  {
    kanji: "樂",
    kana: "ガク    ラク    ゴウ    たの.しい    たの.しむ    この.む",
    english: "music, comfort ",
  },
  {
    kanji: "樛",
    kana: "キュウ    つが",
    english: "bend, droop, undulate ",
  },
  {
    kanji: "槿",
    kana: "キン    むくげ",
    english: "rose of sharon ",
  },
  {
    kanji: "權",
    kana: "ケン    ゴン    おもり    かり    はか.る",
    english: "authority, power, rights ",
  },
  {
    kanji: "槹",
    kana: "コウ",
    english: "well sweep ",
  },
  {
    kanji: "槲",
    kana: "コク    かしわ",
    english: "oak ",
  },
  {
    kanji: "槧",
    kana: "ザン    セン    サン    ふだ",
    english: "printed book ",
  },
  {
    kanji: "樅",
    kana: "ショウ    もみ",
    english: "fir ",
  },
  {
    kanji: "榱",
    kana: "スイ    たるき",
    english: "rafter ",
  },
  {
    kanji: "樞",
    kana: "スウ    シュ    とぼそ    からくり",
    english: "pivot, door ",
  },
  {
    kanji: "槭",
    kana: "セキ    シュク    かえで",
    english: "maple tree ",
  },
  {
    kanji: "樔",
    kana: "ソウ    す    すく.う    た.える",
    english: "nest, dip up, scoop up, come to an end ",
  },
  {
    kanji: "槫",
    kana: "タン    セン",
    english: "hearse ",
  },
  {
    kanji: "樊",
    kana: "ハン    まがき",
    english: "cage, fence, pen, enclosure ",
  },
  {
    kanji: "樒",
    kana: "ミツ    しきみ    じんこう",
    english: "tree whose branches are placed on Buddhist graves ",
  },
  {
    kanji: "櫁",
    kana: "ミツ    しきみ    じんこう",
    english: "Japanese star anise ",
  },
  {
    kanji: "樣",
    kana: "ヨウ    ショウ    さま",
    english: "Esq., way, manner, situation, polite suffix ",
  },
  {
    kanji: "樓",
    kana: "ロウ    たかどの",
    english: "tower, turret ",
  },
  {
    kanji: "橄",
    kana: "カン",
    english: "olive ",
  },
  {
    kanji: "樌",
    kana: "カン",
    english: "grove ",
  },
  {
    kanji: "橲",
    kana: "ツサ",
    english: "used in proper names ",
  },
  {
    kanji: "樶",
    kana: "サイ    ふし",
    english: "knot in wood ",
  },
  {
    kanji: "橸",
    kana: "まさ",
    english: "straight grain ",
  },
  {
    kanji: "橇",
    kana: "キョウ    ゼイ    セイ    そり    かんじき",
    english: "sled, sleigh, snowshoes ",
  },
  {
    kanji: "橢",
    kana: "ダ",
    english: "ellipse ",
  },
  {
    kanji: "橙",
    kana: "トウ    だいだい",
    english: "bitter orange ",
  },
  {
    kanji: "橦",
    kana: "シュ    ショウ    トウ",
    english: "pole ",
  },
  {
    kanji: "橈",
    kana: "ドウ    ジョウ    ニョウ    かい    かじ    たわ.む    たわ.める",
    english: "oar, scull, paddle ",
  },
  {
    kanji: "樸",
    kana: "ボク    ハク    ホク    こはだ    きじ",
    english: "bark of a tree ",
  },
  {
    kanji: "樢",
    kana: "ト    チョウ    つた",
    english: "type of bird, vine ",
  },
  {
    kanji: "檐",
    kana: "エン    タン    のき    ひさし",
    english: "eaves ",
  },
  {
    kanji: "檍",
    kana: "オク    い",
    english: "ilex, holm oak, birdlime tree ",
  },
  {
    kanji: "檠",
    kana: "ケイ    ゆだめ",
    english: "straighten a bow, lamp stand ",
  },
  {
    kanji: "檄",
    kana: "ケキ    げき.する    ふれぶみ",
    english: "written appeal, manifesto ",
  },
  {
    kanji: "檢",
    kana: "ケン    しら.べる",
    english: "check, examine ",
  },
  {
    kanji: "檣",
    kana: "ショウ    ほばしら",
    english: "mast ",
  },
  {
    kanji: "檗",
    kana: "ハク    ビャク    きはだ    きわだ",
    english: "Amur or Chinese cork tree ",
  },
  {
    kanji: "蘗",
    kana: "ハク    ビャク    きはだ    きわだ",
    english: "stump, sprout ",
  },
  {
    kanji: "檻",
    kana: "カン    おり    おばしま    てすり",
    english: "pen, corral, cell, jail ",
  },
  {
    kanji: "櫃",
    kana: "キ    ひつ",
    english: "chest, coffer, tub ",
  },
  {
    kanji: "櫂",
    kana: "トウ    タク    かい    かじ",
    english: "oar, scull, paddle ",
  },
  {
    kanji: "檸",
    kana: "ネイ    ドウ",
    english: "lemon tree ",
  },
  {
    kanji: "檳",
    kana: "ビン    ヒン",
    english: "betel-nut palm ",
  },
  {
    kanji: "檬",
    kana: "モウ",
    english: "lemon tree ",
  },
  {
    kanji: "櫞",
    kana: "エン",
    english: "kind of lemon tree ",
  },
  {
    kanji: "櫑",
    kana: "ライ    さか.だる",
    english: "decorated wine cask, decorated sword hilt ",
  },
  {
    kanji: "櫟",
    kana: "レキ    ヤク    ロウ    くぬぎ",
    english: "oak for charcoal ",
  },
  {
    kanji: "檪",
    kana: "レキ    ヤク    ロウ    くぬぎ",
    english: "oak used for charcoal ",
  },
  {
    kanji: "櫚",
    kana: "ロ    リョ",
    english: "kind of quince ",
  },
  {
    kanji: "櫪",
    kana: "レキ    かいばおけ    くぬぎ",
    english: "manger, fodder trough, horse barn ",
  },
  {
    kanji: "櫻",
    kana: "オウ    ヨウ    さくら",
    english: "cherry ",
  },
  {
    kanji: "欅",
    kana: "キョ    けやき",
    english: "keyaki, zelkova tree ",
  },
  {
    kanji: "蘖",
    kana: "ゲツ    ひこばえ",
    english: "sprout ",
  },
  {
    kanji: "櫺",
    kana: "レイ    リョウ    れんじ",
    english: "latticework ",
  },
  {
    kanji: "欒",
    kana: "ラン    おうち    ひじき    まどか    まるい",
    english: "chinaberry tree, round, harmonious ",
  },
  {
    kanji: "欖",
    kana: "ラン",
    english: "Chinese olive tree ",
  },
  {
    kanji: "欟",
    kana: "つき",
    english: "keyaki, zelkova tree ",
  },
  {
    kanji: "欸",
    kana: "アイ    カイ",
    english: "exclamation ",
  },
  {
    kanji: "欷",
    kana: "キ    なげく",
    english: "cry ",
  },
  {
    kanji: "盜",
    kana: "トウ    ぬす.む",
    english: "thief, to steal ",
  },
  {
    kanji: "欹",
    kana: "イ    キ    そばだ.てる    そばだ.つ",
    english: "prick up (one's ears) ",
  },
  {
    kanji: "飮",
    kana: "イン    オン    の.む",
    english: "drink ",
  },
  {
    kanji: "歇",
    kana: "ケツ    カイ    カツ    や.める",
    english: "exhausted, out of ",
  },
  {
    kanji: "歃",
    kana: "ソウ    コウ    ショウ    すす.る",
    english: "sip, slurp, suck ",
  },
  {
    kanji: "歉",
    kana: "ケン    カン    あきたりない",
    english: "insufficiency, lack, shortage ",
  },
  {
    kanji: "歐",
    kana: "オウ    うた.う    は.く",
    english: "Europe ",
  },
  {
    kanji: "歙",
    kana: "キュウ    キョウ    ショウ    す.う",
    english: "come together, meet, put away, store ",
  },
  {
    kanji: "歔",
    kana: "キョ    すすりな.く",
    english: "cry ",
  },
  {
    kanji: "歛",
    kana: "レン",
    english: "tighten, also N2426 ",
  },
  {
    kanji: "歟",
    kana: "ヨ    や    か",
    english: "interrogative particle ",
  },
  {
    kanji: "歡",
    kana: "カン    よろこ.ぶ",
    english: "delight, joy ",
  },
  {
    kanji: "歸",
    kana: "キ    かえ.る    かえ.す    おく.る    とつ.ぐ",
    english: "homecoming, arrive at, lead to, result in ",
  },
  {
    kanji: "歹",
    kana: "ガツ    ガチ    タイ    がつへん    いちたへん    しにがまえ",
    english: "bare bone, bad, wrong, death radical (n. 78) ",
  },
  {
    kanji: "歿",
    kana: "ボツ    しぬ",
    english: "die ",
  },
  {
    kanji: "殀",
    kana: "ヨウ    わかじに",
    english: "dying young ",
  },
  {
    kanji: "殄",
    kana: "テン    た.つ    つき.る    つく.す",
    english: "all, completely ",
  },
  {
    kanji: "殃",
    kana: "オオ    オウ    ヨウ    わざわい",
    english: "misfortune, disaster, calamity ",
  },
  {
    kanji: "殍",
    kana: "ヒョウ    フ    うえじに",
    english: "dying of starvation ",
  },
  {
    kanji: "殘",
    kana: "ザン    のこ.る    のこ.す    そこな.う    のこ.り",
    english: "leftover, remain, balance ",
  },
  {
    kanji: "殕",
    kana: "フ    ね.る",
    english: "grow mouldy ",
  },
  {
    kanji: "殞",
    kana: "イン    ウン    おち.る    し.ぬ",
    english: "fall, die ",
  },
  {
    kanji: "殤",
    kana: "ショウ    わかじに",
    english: "dying at a young age ",
  },
  {
    kanji: "殪",
    kana: "エイ    たお.す",
    english: "die, bury ",
  },
  {
    kanji: "殫",
    kana: "タン    つき.る",
    english: "become exhausted, all ",
  },
  {
    kanji: "殯",
    kana: "ヒン    かりもがり",
    english: "lying in state, unburied coffin ",
  },
  {
    kanji: "殲",
    kana: "セン    つく.す    ほろぼ.す",
    english: "massacre ",
  },
  {
    kanji: "殱",
    kana: "セン    つく.す    ほろぼ.す",
    english: "massacre ",
  },
  {
    kanji: "殳",
    kana: "シュ    また    ほこ    ほこつくり    るまた",
    english: "pike, windy-again radical (no. 79) ",
  },
  {
    kanji: "殷",
    kana: "イン    アン    さかん",
    english: "flourishing ",
  },
  {
    kanji: "殼",
    kana: "カク    コク    バイ    から",
    english: "husk, nut shell ",
  },
  {
    kanji: "毆",
    kana: "オウ    ク    なぐ.る    たた.く",
    english: "beat, fight with fists, hit, to strike, brawl ",
  },
  {
    kanji: "毋",
    kana: "ブ    ム    はは    ぼ    ない    なか.れ    なかれ    かんのはは",
    english: "do not, must not, be not, mother radical (no. 80) ",
  },
  {
    kanji: "毓",
    kana: "イク    そだ.つ    そだ.てる    はぐく.む",
    english: "bring up, grow up, raise, rear ",
  },
  {
    kanji: "毟",
    kana: "むし.る",
    english: "pluck, pick, tear, (kokuji) ",
  },
  {
    kanji: "毫",
    kana: "ゴウ    コウ    ごう.も    すこし",
    english: "fine hair, brush, not at all ",
  },
  {
    kanji: "毳",
    kana: "ゼイ    セイ    セツ    けば    むくげ",
    english: "nap, down, fluff ",
  },
  {
    kanji: "毯",
    kana: "タン",
    english: "wool rug ",
  },
  {
    kanji: "麾",
    kana: "キ    さしまね.く    さしずばた",
    english: "beckon to, command ",
  },
  {
    kanji: "氈",
    kana: "セン    もうせん",
    english: "woollen cloth or rug ",
  },
  {
    kanji: "氓",
    kana: "ボウ    たみ",
    english: "people ",
  },
  {
    kanji: "气",
    kana: "キ    ケ    いき    きがまえ",
    english: "spirit, steam radical (no. 84) ",
  },
  {
    kanji: "氛",
    kana: "フン",
    english: "air, atmosphere, weather ",
  },
  {
    kanji: "氤",
    kana: "イン",
    english: "spirited ",
  },
  {
    kanji: "氣",
    kana: "キ    ケ    いき",
    english: "spirit, mind ",
  },
  {
    kanji: "汞",
    kana: "コウ    みずがね",
    english: "mercury ",
  },
  {
    kanji: "汕",
    kana: "サン",
    english: "fish swimming, fishing with a net ",
  },
  {
    kanji: "汢",
    kana: "ヌタ",
    english: "wetland, marsh ",
  },
  {
    kanji: "汪",
    kana: "オオ    オウ",
    english: "flowing full, expanse of water, wide, deep ",
  },
  {
    kanji: "沂",
    kana: "ギ    キ    ギン",
    english: "name of a Chinese river ",
  },
  {
    kanji: "沍",
    kana: "ゴ    コ    さ.える    こお.る    ひ.える",
    english: "close up, freeze over, congeal ",
  },
  {
    kanji: "沚",
    kana: "シ    なぎさ",
    english: "shore, shoal ",
  },
  {
    kanji: "沁",
    kana: "シン    し.みる",
    english: "penetrate, soak in ",
  },
  {
    kanji: "沛",
    kana: "ハイ",
    english: "big rain, swamp ",
  },
  {
    kanji: "汾",
    kana: "フン",
    english: "name of a Chinese river ",
  },
  {
    kanji: "汨",
    kana: "コツ    イツ    ベキ    しず.む",
    english: "to sink, name of a Chinese river ",
  },
  {
    kanji: "汳",
    kana: "ヘン    ベン",
    english: "proper name ",
  },
  {
    kanji: "沒",
    kana: "ボツ    モツ    おぼ.れる    しず.む    ない",
    english: "not, have not, none, to drown, sink ",
  },
  {
    kanji: "沐",
    kana: "モク    もく.する    あら.う",
    english: "wash ",
  },
  {
    kanji: "泄",
    kana: "セツ    エイ    も.れる",
    english: "leak ",
  },
  {
    kanji: "泱",
    kana: "オオ    オウ",
    english: "billowy clouds, deep and broad ",
  },
  {
    kanji: "泓",
    kana: "オオ    オウ    ふか.い",
    english: "deep clear water ",
  },
  {
    kanji: "沽",
    kana: "コ    あた.い    あら.い    う.る",
    english: "price, buying & selling ",
  },
  {
    kanji: "泗",
    kana: "シ    なみだ",
    english: "name of a Chinese river, snivel ",
  },
  {
    kanji: "泅",
    kana: "シュウ    およぐ",
    english: "swim ",
  },
  {
    kanji: "泝",
    kana: "ソ    さかのぼる",
    english: "go upstream ",
  },
  {
    kanji: "沮",
    kana: "ソ    ショ    はば.む",
    english: "stop, prevent, defeated, dejected ",
  },
  {
    kanji: "沱",
    kana: "タ    ダ",
    english: "flowing of tears ",
  },
  {
    kanji: "沾",
    kana: "セン    チョウ    テン    うるお.う    うるお.す",
    english: "moisten, wet, soak, touch ",
  },
  {
    kanji: "沺",
    kana: "デン",
    english: "vast surging waters ",
  },
  {
    kanji: "泛",
    kana: "ハン    ホウ    うか.ぶ",
    english: "to drift, float, careless, reckless ",
  },
  {
    kanji: "泯",
    kana: "ビン    ベン    ミン    メン    ほろ.びる",
    english: "die out, dim ",
  },
  {
    kanji: "泙",
    kana: "ホウ",
    english: "surging water ",
  },
  {
    kanji: "泪",
    kana: "ルイ    レイ    なみだ",
    english: "tears, weep, cry ",
  },
  {
    kanji: "洟",
    kana: "イ    テイ    はな.しる    はな.じる",
    english: "tear, nasal discharge ",
  },
  {
    kanji: "衍",
    kana: "エン    あまり    しく    はびこ.る",
    english: "overflowing ",
  },
  {
    kanji: "洶",
    kana: "キョウ    わ.く",
    english: "gush forth, surge ",
  },
  {
    kanji: "洫",
    kana: "キョク    みぞ",
    english: "ditch ",
  },
  {
    kanji: "洽",
    kana: "コウ    あまねし    うるお.す",
    english: "far and wide ",
  },
  {
    kanji: "洙",
    kana: "シュ",
    english: "name of a Chinese river ",
  },
  {
    kanji: "洳",
    kana: "ジュ",
    english: "wet ",
  },
  {
    kanji: "洒",
    kana: "シャ    ソン    サイ    セン    セイ    すす.ぐ    あら.う",
    english: "wash, sprinkle ",
  },
  {
    kanji: "洌",
    kana: "レツ    レイ    きよ.い",
    english: "pure ",
  },
  {
    kanji: "浣",
    kana: "カン    あら.う",
    english: "wash ",
  },
  {
    kanji: "涓",
    kana: "ケン",
    english: "drop, pure ",
  },
  {
    kanji: "浤",
    kana: "コウ    ふか.い",
    english: "rising waters, clear deep water ",
  },
  {
    kanji: "浚",
    kana: "シュン    さら.える    さら.う",
    english: "dredge, drag, clean ",
  },
  {
    kanji: "浹",
    kana: "ショウ    あまねし",
    english: "far and wide, cycle, period ",
  },
  {
    kanji: "浙",
    kana: "セツ",
    english: "name of a Chinese river ",
  },
  {
    kanji: "涎",
    kana: "セン    エン    よだれ",
    english: "saliva, slobber ",
  },
  {
    kanji: "涕",
    kana: "テイ    なみだ    な.く",
    english: "tears, sympathy ",
  },
  {
    kanji: "涅",
    kana: "ネツ    デツ    そ.める",
    english: "black soil ",
  },
  {
    kanji: "淹",
    kana: "エン",
    english: "dip, soak, immerse, stop, linger ",
  },
  {
    kanji: "渕",
    kana: "エン    カク    コウ    ふち    かた.い    はなわ",
    english: "edge ",
  },
  {
    kanji: "渊",
    kana: "エン    カク    コウ    ふち    かた.い    はなわ",
    english: "edge ",
  },
  {
    kanji: "涵",
    kana: "カン    ひた.す",
    english: "immerse ",
  },
  {
    kanji: "淇",
    kana: "キ",
    english: "name of a Chinese river ",
  },
  {
    kanji: "淦",
    kana: "カン    コン    あか",
    english: "bilge water ",
  },
  {
    kanji: "涸",
    kana: "コ    カク    か.れる    か.らす    こお.る",
    english: "dry up, mature ",
  },
  {
    kanji: "淆",
    kana: "コウ    ま.じる",
    english: "turbidity, mixing ",
  },
  {
    kanji: "淬",
    kana: "サイ    にらぐ",
    english: "anneal, quench, temper ",
  },
  {
    kanji: "淞",
    kana: "ショウ",
    english: "name of a Chinese river ",
  },
  {
    kanji: "淌",
    kana: "トウ",
    english: "flow ",
  },
  {
    kanji: "淨",
    kana: "ジョウ    セイ    きよ.める    きよ.い",
    english: "pure, clean, unspoiled ",
  },
  {
    kanji: "淒",
    kana: "セイ    サイ    すご.む    さむ.い    すご.い    すさ.まじい",
    english: "bitter cold, miserable, dreary ",
  },
  {
    kanji: "淅",
    kana: "セキ",
    english: "wash rice ",
  },
  {
    kanji: "淺",
    kana: "セン    あさ.い",
    english: "shallow, not deep, superficial ",
  },
  {
    kanji: "淙",
    kana: "ソウ",
    english: "sound of running water ",
  },
  {
    kanji: "淤",
    kana: "オ    ヨ    どろ",
    english: "mud, silt, clog up, obstruct ",
  },
  {
    kanji: "淕",
    kana: "リク    ロク",
    english: "sleet, slush, name of a wetland ",
  },
  {
    kanji: "淪",
    kana: "リン    ロン    しず.む",
    english: "sink, ripple ",
  },
  {
    kanji: "淮",
    kana: "ワイ    エ    カイ",
    english: "name of a Chinese river ",
  },
  {
    kanji: "渭",
    kana: "イ",
    english: "name of Chinese river ",
  },
  {
    kanji: "湮",
    kana: "イン    エン    しず.む    ふさ.ぐ",
    english: "sink ",
  },
  {
    kanji: "渮",
    kana: "カ",
    english: "name of Chinese river ",
  },
  {
    kanji: "渙",
    kana: "カン    あきらか",
    english: "scatter ",
  },
  {
    kanji: "湲",
    kana: "エン    カン",
    english: "flowing water ",
  },
  {
    kanji: "湟",
    kana: "コウ",
    english: "name of Chinese river ",
  },
  {
    kanji: "渾",
    kana: "コン    すべ.て    にご.る",
    english: "all, turbidity ",
  },
  {
    kanji: "渣",
    kana: "サ",
    english: "dregs ",
  },
  {
    kanji: "湫",
    kana: "シュウ    ショウ    くて",
    english: "wetlands, marsh, not N2595 ",
  },
  {
    kanji: "渫",
    kana: "セツ    チョウ    さら.う",
    english: "dredging, cleaning out ",
  },
  {
    kanji: "湶",
    kana: "セン    いずみ    ぜに",
    english: "spring, fountain-head, source ",
  },
  {
    kanji: "湍",
    kana: "タン    はや.い    はやせ",
    english: "rapids ",
  },
  {
    kanji: "渟",
    kana: "テイ    とど.まる",
    english: "stop ",
  },
  {
    kanji: "湃",
    kana: "ハイ",
    english: "sound of waves ",
  },
  {
    kanji: "渺",
    kana: "ビョウ    びょう.たる",
    english: "tiny, boundless ",
  },
  {
    kanji: "湎",
    kana: "メン    ベン    おぼ.れる    しず.む",
    english: "drown, be immersed ",
  },
  {
    kanji: "渤",
    kana: "ボツ    ホツ",
    english: "place name ",
  },
  {
    kanji: "滿",
    kana: "マン    バン    み.ちる    み.つ    み.たす",
    english: "fill, full, satisfied ",
  },
  {
    kanji: "渝",
    kana: "ユ    かわ.る",
    english: "change, be transformed ",
  },
  {
    kanji: "游",
    kana: "ユウ    リュウ    あそ.び    あそ.ぶ    およ.ぐ",
    english: "float, swim ",
  },
  {
    kanji: "溂",
    kana: "ラツ",
    english: "opposed, biased ",
  },
  {
    kanji: "溪",
    kana: "ケイ    たに    たにがわ",
    english: "valley ",
  },
  {
    kanji: "溘",
    kana: "コウ",
    english: "sudden, unexpected ",
  },
  {
    kanji: "溷",
    kana: "コン    かわや    けが.れる    にご.る    みだ.れる",
    english: "get muddy ",
  },
  {
    kanji: "滓",
    kana: "シ    サイ    おり    か.す",
    english: "dregs, grounds ",
  },
  {
    kanji: "溽",
    kana: "ヒョク    ジョク    むしあつ.い",
    english: "humid ",
  },
  {
    kanji: "溯",
    kana: "ソ    サク    さかのぼ.る",
    english: "go upstream, retrace past ",
  },
  {
    kanji: "滄",
    kana: "ソウ",
    english: "ocean ",
  },
  {
    kanji: "溲",
    kana: "シュ    シュウ    ソウ    いばり    ひた.す",
    english: "urine, also N2554 ",
  },
  {
    kanji: "滔",
    kana: "トウ    はびこ.る",
    english: "overflowing ",
  },
  {
    kanji: "滕",
    kana: "トウ    わ.く",
    english: "rising water ",
  },
  {
    kanji: "溏",
    kana: "トウ",
    english: "mud ",
  },
  {
    kanji: "溥",
    kana: "フ    ハク    あまねし",
    english: "far and wide ",
  },
  {
    kanji: "滂",
    kana: "ホウ    ボウ",
    english: "flowing, vast ",
  },
  {
    kanji: "溟",
    kana: "メイ    うみ    くら.い",
    english: "dark, ocean ",
  },
  {
    kanji: "潁",
    kana: "エイ",
    english: "name of a Chinese river ",
  },
  {
    kanji: "灌",
    kana: "カン    そそ.ぐ",
    english: "pour ",
  },
  {
    kanji: "滬",
    kana: "コウ    コ",
    english: "NRC ",
  },
  {
    kanji: "滸",
    kana: "コ    ほとり",
    english: "vicinity ",
  },
  {
    kanji: "滾",
    kana: "コン    たぎ.る    たぎ.らかす",
    english: "flow, boil ",
  },
  {
    kanji: "漿",
    kana: "ショウ    こんず",
    english: "a drink ",
  },
  {
    kanji: "滲",
    kana: "シン    し.みる    にじ.む",
    english: "imbued with ",
  },
  {
    kanji: "滯",
    kana: "タイ    テイ    とどこお.る",
    english: "block up, obstruct, stagnant ",
  },
  {
    kanji: "漲",
    kana: "チョウ    みなぎ.る",
    english: "overflow ",
  },
  {
    kanji: "滌",
    kana: "デキ    テキ    ジョウ    あら.う",
    english: "rinse, wash ",
  },
  {
    kanji: "漾",
    kana: "ヨウ    ただよ.う",
    english: "drift, flow ",
  },
  {
    kanji: "漓",
    kana: "リ    うす.い",
    english: "dropping, soak in ",
  },
  {
    kanji: "滷",
    kana: "ロ",
    english: "brine ",
  },
  {
    kanji: "澆",
    kana: "ギョウ    そそ.ぐ",
    english: "sprinkle, thing, shallow, frivolous ",
  },
  {
    kanji: "潺",
    kana: "セン    サン",
    english: "sound of flowing water ",
  },
  {
    kanji: "潸",
    kana: "サン",
    english: "flowing of tears ",
  },
  {
    kanji: "澁",
    kana: "ジュウ    シュウ    しぶ    しぶ.い    しぶ.る",
    english: "astringent, harsh, uneven, rough ",
  },
  {
    kanji: "澀",
    kana: "ジュウ    シュウ    しぶ    しぶ.い    しぶ.る",
    english: "astringent, harsh, uneven, rough ",
  },
  {
    kanji: "潯",
    kana: "ジン    ふち",
    english: "shore, banks ",
  },
  {
    kanji: "潛",
    kana: "セン    ひそ.む    もぐ.る    かく.れる    くぐ.る    ひそ.める",
    english: "conceal, hide, lower (voice), hush ",
  },
  {
    kanji: "濳",
    kana: "セン    ひそ.む    もぐ.る    かく.れる    くぐ.る    ひそ.める",
    english: "hide, conceal, secrete, hidden ",
  },
  {
    kanji: "潭",
    kana: "タン    ジン    ふち    ふか.い",
    english: "deep water, deep ",
  },
  {
    kanji: "澂",
    kana: "チョウ    すま.す    す.む",
    english: "clear and still water ",
  },
  {
    kanji: "潼",
    kana: "ドウ    トウ",
    english: "high ",
  },
  {
    kanji: "潘",
    kana: "ハン",
    english: "water in which rice has been washed ",
  },
  {
    kanji: "澎",
    kana: "ホウ    ヒョウ",
    english: "turbulent water ",
  },
  {
    kanji: "澑",
    kana: "リュウ    た.まる    たま.る    た.める    したた.る    たまり    ため",
    english: "slide, glide, slip, slippery ",
  },
  {
    kanji: "濂",
    kana: "レン",
    english: "name of Chinese river ",
  },
  {
    kanji: "潦",
    kana: "ロウ    にわたずみ",
    english: "heavy rainfall, runoff ",
  },
  {
    kanji: "澳",
    kana: "オウ    イク    オク    おき    くま",
    english: "curving shoreline, bend in river ",
  },
  {
    kanji: "澣",
    kana: "カン    あら.う",
    english: "wash ",
  },
  {
    kanji: "澡",
    kana: "ソウ    あら.う",
    english: "wash ",
  },
  {
    kanji: "澤",
    kana: "タク    さわ    うるお.い    うるお.す    つや",
    english: "swamp ",
  },
  {
    kanji: "澹",
    kana: "タン    セン    あわ.い",
    english: "calm, quiet, bland, rocking, rippling, suffice ",
  },
  {
    kanji: "濆",
    kana: "フン    ホン    ほとり    わ.く",
    english: "gush forth, also N2705 ",
  },
  {
    kanji: "濟",
    kana: "サイ    セイ    す.む    す.ます    すく.う    な.す    わた.す    わた.る",
    english: "to help, aid, relieve, to ferry, cross ",
  },
  {
    kanji: "濕",
    kana: "シツ    シュウ    しめ.る    しめ.す    うるお.う    うるお.す",
    english: "wet, moist, humid, damp, an illness ",
  },
  {
    kanji: "濬",
    kana: "シュン    さら.う",
    english: "deep, dredge ",
  },
  {
    kanji: "濔",
    kana: "ビ",
    english: "much, many ",
  },
  {
    kanji: "濘",
    kana: "ネイ    ぬか.る",
    english: "muddiness ",
  },
  {
    kanji: "濱",
    kana: "ヒン    はま",
    english: "beach, sea coast, river bank ",
  },
  {
    kanji: "濮",
    kana: "ボク    ホク",
    english: "name of Chinese river ",
  },
  {
    kanji: "濛",
    kana: "モウ    こさめ",
    english: "dark ",
  },
  {
    kanji: "瀉",
    kana: "シャ    くだ.す    は.く",
    english: "evacuation ",
  },
  {
    kanji: "瀋",
    kana: "シン",
    english: "juice, broth ",
  },
  {
    kanji: "濺",
    kana: "セン    そそ.ぐ",
    english: "sprinkle, splash ",
  },
  {
    kanji: "瀑",
    kana: "バク    ハク    ホウ    ボウ    ホク    ボク    たき    にわかあめ",
    english: "waterfall ",
  },
  {
    kanji: "瀁",
    kana: "ヨウ",
    english: "drift, flow, overflowing, vast ",
  },
  {
    kanji: "瀏",
    kana: "リュウ    きよ.い",
    english: "clear ",
  },
  {
    kanji: "濾",
    kana: "ロ    リョ    こ.す",
    english: "filter ",
  },
  {
    kanji: "瀛",
    kana: "エイ    うみ",
    english: "ocean, swamp ",
  },
  {
    kanji: "瀚",
    kana: "カン    ひろ.い",
    english: "wide & large ",
  },
  {
    kanji: "潴",
    kana: "チョ    みずたまり",
    english: "pond, a pool ",
  },
  {
    kanji: "瀝",
    kana: "レキ    したた.る",
    english: "dropping ",
  },
  {
    kanji: "瀘",
    kana: "ロ",
    english: "name of river in China ",
  },
  {
    kanji: "瀟",
    kana: "ショウ",
    english: "pure, clean ",
  },
  {
    kanji: "瀰",
    kana: "ビ    ミ",
    english: "copious flow, broad, extensive ",
  },
  {
    kanji: "瀾",
    kana: "ラン    なみ",
    english: "large waves ",
  },
  {
    kanji: "瀲",
    kana: "レン    なぎさ",
    english: "brimming, rippling ",
  },
  {
    kanji: "灑",
    kana: "シャ    サイ    サ    セ    そそ.ぐ",
    english: "sprinkle, wash, free and easy ",
  },
  {
    kanji: "灣",
    kana: "ワン    いりえ",
    english: "gulf, bay, inlet ",
  },
  {
    kanji: "炙",
    kana: "シャ    セキ    あぶ.る",
    english: "roast, broil, toast, cauterize ",
  },
  {
    kanji: "炒",
    kana: "ソウ    ショウ    い.る    いた.める",
    english: "broil, parch, roast, fry ",
  },
  {
    kanji: "炯",
    kana: "ケイ    キョウ    あきらか",
    english: "light, clear ",
  },
  {
    kanji: "烱",
    kana: "ケイ    キョウ    あきらか",
    english: "light, clear ",
  },
  {
    kanji: "炬",
    kana: "コ    キョ",
    english: "torch, signal fire ",
  },
  {
    kanji: "炸",
    kana: "タク    サ    サク",
    english: "frying, explosion ",
  },
  {
    kanji: "炳",
    kana: "ヘイ    あきらか",
    english: "clear & bright ",
  },
  {
    kanji: "炮",
    kana: "ホウ    あぶ.る",
    english: "burn, roast ",
  },
  {
    kanji: "烟",
    kana: "エン    けむ.る    けむり    けむ.い",
    english: "smoke ",
  },
  {
    kanji: "烋",
    kana: "コウ    キュウ    キョウ",
    english: "boasting, fortunate, beautiful ",
  },
  {
    kanji: "烝",
    kana: "ジョウ    ショウ    む.す    もろもろ",
    english: "many, offer, dedicate, to steam ",
  },
  {
    kanji: "烙",
    kana: "ラク    カク    や.く",
    english: "burn ",
  },
  {
    kanji: "焉",
    kana: "エン    いずく.んぞ    ここに    これ",
    english: "how, why, then ",
  },
  {
    kanji: "烽",
    kana: "ホウ    のろし    とぶひ",
    english: "signal fire ",
  },
  {
    kanji: "焜",
    kana: "コン    かが.やく",
    english: "shine ",
  },
  {
    kanji: "焙",
    kana: "ホウ    ハイ    ほう.じる    あぶ.る",
    english: "fire, roast ",
  },
  {
    kanji: "煥",
    kana: "カン    あきらか",
    english: "shine ",
  },
  {
    kanji: "煕",
    kana: "キ    たのし.む    ひか.る    ひろ.い    よろこ.ぶ    かわ.く    あきらか    ひろ.める    ひろ.まる",
    english: "shine ",
  },
  {
    kanji: "熈",
    kana: "キ    たのし.む    ひか.る    ひろ.い    よろこ.ぶ    かわ.く    あきらか    ひろ.める    ひろ.まる",
    english: "shine ",
  },
  {
    kanji: "煦",
    kana: "ク    あたた.める",
    english: "warm ",
  },
  {
    kanji: "煢",
    kana: "ケイ    ひとりもの",
    english: "all alone, without any family, worry ",
  },
  {
    kanji: "煌",
    kana: "コウ    きらめ.く    きら.めく    かが.やく",
    english: "glitter, gleam, twinkle ",
  },
  {
    kanji: "煖",
    kana: "ダン    カン    ケン    ナン    あたた.か    あたた.める",
    english: "warm ",
  },
  {
    kanji: "煬",
    kana: "ヨウ    あぶ.る    や.く",
    english: "roast, burn ",
  },
  {
    kanji: "熏",
    kana: "クン    くす.べる    ふす.べる    いぶ.す    いぶ.る    くす.ぶる    くゆ.らす",
    english: "smoke, fog, vapor, smoke, cure ",
  },
  {
    kanji: "燻",
    kana: "クン    くす.べる    ふす.べる    いぶ.す    いぶ.る    くす.ぶる    くゆ.らす",
    english: "smoulder, fume, oxidize ",
  },
  {
    kanji: "熄",
    kana: "ソク    き.える    や.む",
    english: "cessation ",
  },
  {
    kanji: "熕",
    kana: "コウ",
    english: "cannon ",
  },
  {
    kanji: "熨",
    kana: "イ    ウツ    のし    おさ.える    の.す    ひのし",
    english: "flatiron, smooth out ",
  },
  {
    kanji: "熬",
    kana: "ゴウ    い.る",
    english: "parch, roast ",
  },
  {
    kanji: "燗",
    kana: "ラン    カン    かん.する",
    english: "warming sake ",
  },
  {
    kanji: "熹",
    kana: "キ    あぶ.る    あかるい",
    english: "burn, faint light ",
  },
  {
    kanji: "熾",
    kana: "シ    おこ.る    おこ.す    さかん",
    english: "kindling fire ",
  },
  {
    kanji: "燒",
    kana: "ショウ    や.く    や.ける",
    english: "burn, bake, heat, roast ",
  },
  {
    kanji: "燉",
    kana: "トン",
    english: "fiery ",
  },
  {
    kanji: "燔",
    kana: "ハン    や.く",
    english: "burn ",
  },
  {
    kanji: "燠",
    kana: "ウ    イク    オウ    おき    あたたか.い",
    english: "embers ",
  },
  {
    kanji: "燬",
    kana: "キ    や.く",
    english: "blaze ",
  },
  {
    kanji: "燧",
    kana: "スイ    ひうち    ひきり    のろし",
    english: "signal fire ",
  },
  {
    kanji: "燵",
    kana: "タツ",
    english: "foot warmer, (kokuji) ",
  },
  {
    kanji: "燼",
    kana: "ジン    もえのこり",
    english: "embers ",
  },
  {
    kanji: "燹",
    kana: "セン    のび",
    english: "prairie fire ",
  },
  {
    kanji: "爍",
    kana: "シャク    とか.す    ひか.る",
    english: "shine, melt ",
  },
  {
    kanji: "爐",
    kana: "ロ    いろり",
    english: "fireplace, stove, oven, furnace ",
  },
  {
    kanji: "爛",
    kana: "ラン    ただ.れる",
    english: "be sore, inflamed, bleary, fester ",
  },
  {
    kanji: "爨",
    kana: "サン    かし.ぐ    かまど",
    english: "cook, boil ",
  },
  {
    kanji: "爭",
    kana: "ソウ    あらそ.う    いか.でか",
    english: "to dispute, fight, contend, strive ",
  },
  {
    kanji: "爬",
    kana: "ハ    か.く",
    english: "scratch ",
  },
  {
    kanji: "爰",
    kana: "エン    ここ.に",
    english: "lead on to, therefore, then ",
  },
  {
    kanji: "爲",
    kana: "イ    ため    な.る    な.す    す.る    たり    つく.る    なり",
    english: "change, be of use, reach to, do, try, practice, cost, serve as ",
  },
  {
    kanji: "爻",
    kana: "コウ    ギョウ    まじ.わる    めめ    まじわる",
    english:
  "to mix with, to asociate with, to join, double X radical (no. 89) ",
  },
  {
    kanji: "爼",
    kana: "ソ    ショ    まないた",
    english: "altar of sacrifice, chopping board ",
  },
  {
    kanji: "爿",
    kana: "ショウ    ソウ    しょうへん",
    english: "left-side kata ",
  },
  {
    kanji: "牀",
    kana: "ショウ    ソウ    ゆか",
    english: "bed, couch, bench, chassis ",
  },
  {
    kanji: "牆",
    kana: "ショウ    かき",
    english: "fence, hedge, wall ",
  },
  {
    kanji: "牋",
    kana: "セン",
    english: "paper, label, letter, composition ",
  },
  {
    kanji: "牘",
    kana: "トク    かきもの    ふだ",
    english: "letter ",
  },
  {
    kanji: "牴",
    kana: "テイ    ふ.れる",
    english: "touch ",
  },
  {
    kanji: "牾",
    kana: "ゴ",
    english: "go against, be contrary to ",
  },
  {
    kanji: "犂",
    kana: "リ    レイ    リュウ    すき",
    english: "plow ",
  },
  {
    kanji: "犁",
    kana: "リ    レイ    リュウ    すき",
    english: "plow ",
  },
  {
    kanji: "犇",
    kana: "ホン    ひし.めく    ひしひし    は.しる",
    english: "clamour, crowded ",
  },
  {
    kanji: "犒",
    kana: "コウ    ねぎら.う",
    english: "thanks, reward ",
  },
  {
    kanji: "犖",
    kana: "ラク    まだらうし",
    english: "brindled cow, bright, excel ",
  },
  {
    kanji: "犢",
    kana: "トク    こうし",
    english: "calf ",
  },
  {
    kanji: "犧",
    kana: "ギ    キ    いけにえ",
    english: "sacrifice ",
  },
  {
    kanji: "犹",
    kana: "ジョウ    ユウ    ヨウ    なお",
    english: "condition ",
  },
  {
    kanji: "犲",
    kana: "サイ    やまいぬ",
    english: "wolf, cruel, wicked, mean ",
  },
  {
    kanji: "狃",
    kana: "ジュウ    な.れる    なら.う",
    english: "get used to, learn ",
  },
  {
    kanji: "狆",
    kana: "チュウ    ちん",
    english: "Pekinese dog, Japanese spaniel ",
  },
  {
    kanji: "狄",
    kana: "テキ    えびす",
    english: "barbarian ",
  },
  {
    kanji: "狎",
    kana: "オウ    コウ    な.れる    あなど.る",
    english: "get used to, experienced, tamed ",
  },
  {
    kanji: "狒",
    kana: "ヒ    ひひ",
    english: "baboon ",
  },
  {
    kanji: "狢",
    kana: "カク    ハク    バク    むじな",
    english: "badger ",
  },
  {
    kanji: "狠",
    kana: "ガン    ゲン    コン    もと.る",
    english: "vicious, cruel, severely, extreme ",
  },
  {
    kanji: "狡",
    kana: "コウ    キョウ    ずる.い    こす.い    わるがしこ.い",
    english: "cunning, sly, crafty, niggardly ",
  },
  {
    kanji: "狹",
    kana: "キョウ    コウ    せま.い    せば.める    せば.まる    さ",
    english: "narrow, contract, reduce, tight, limited ",
  },
  {
    kanji: "狷",
    kana: "ケン",
    english: "short-tempered ",
  },
  {
    kanji: "倏",
    kana: "シュク    たちまち",
    english: "quick, prompt ",
  },
  {
    kanji: "猗",
    kana: "イ    ア    ああ",
    english: "luxuriant growth, gentle, docile ",
  },
  {
    kanji: "猊",
    kana: "ゲイ",
    english: "lion, the seat of a famous priest ",
  },
  {
    kanji: "猜",
    kana: "サイ    ねた.む",
    english: "envy, jealousy, doubt ",
  },
  {
    kanji: "猖",
    kana: "ショウ    くる.う",
    english: "be insane, severe, violence ",
  },
  {
    kanji: "猝",
    kana: "ソツ    にわか",
    english: "sudden ",
  },
  {
    kanji: "猴",
    kana: "コウ    さる",
    english: "monkey ",
  },
  {
    kanji: "猯",
    kana: "タン    いのしし    まみ",
    english: "wild boar ",
  },
  {
    kanji: "猩",
    kana: "ショウ    セイ    ソウ    しょうじょう",
    english: "orangutan ",
  },
  {
    kanji: "猥",
    kana: "ワイ    みだ.ら    みだり.に",
    english: "obscene ",
  },
  {
    kanji: "猾",
    kana: "カツ    わるがしこ.い",
    english: "crafty ",
  },
  {
    kanji: "獎",
    kana: "ショウ    ソウ    すす.める",
    english: "prize, reward, give award to ",
  },
  {
    kanji: "獏",
    kana: "バク    ミャク",
    english: "tapir ",
  },
  {
    kanji: "默",
    kana: "ボク    モク    だ.まる    もだ.す",
    english: "silent, quiet, still, dark ",
  },
  {
    kanji: "獗",
    kana: "ケツ",
    english: "storm around, be crazy ",
  },
  {
    kanji: "獪",
    kana: "カイ    わるがしこ.い",
    english: "crafty ",
  },
  {
    kanji: "獨",
    kana: "ドク    トク    ひと.り",
    english: "alone, spontaneously, Germany ",
  },
  {
    kanji: "獰",
    kana: "ドウ    ネイ    わる.い",
    english: "bad ",
  },
  {
    kanji: "獸",
    kana: "ジュウ    けもの    けだもの",
    english: "beast, animal, bestial ",
  },
  {
    kanji: "獵",
    kana: "リョウ    レフ    かり    か.る",
    english: "hunt, field sports ",
  },
  {
    kanji: "獻",
    kana: "ケン    コン    たてまつ.る",
    english: "offer, present, show, display ",
  },
  {
    kanji: "獺",
    kana: "ダツ    タツ    うそ    かわ    かわうそ",
    english: "otter ",
  },
  {
    kanji: "珈",
    kana: "カ    かみかざり",
    english: "ornamental hairpin ",
  },
  {
    kanji: "玳",
    kana: "タイ    たいまい",
    english: "tortoise shell ",
  },
  {
    kanji: "珎",
    kana: "チン    めずら.しい    たから",
    english: "precious, valuable, rare ",
  },
  {
    kanji: "玻",
    kana: "ハ",
    english: "glass ",
  },
  {
    kanji: "珀",
    kana: "ハク",
    english: "amber ",
  },
  {
    kanji: "珥",
    kana: "ジ    みみだま",
    english: "ear bauble, hilt ",
  },
  {
    kanji: "珮",
    kana: "ハイ    おびだま",
    english: "bauble, jewel ",
  },
  {
    kanji: "珞",
    kana: "ラク",
    english: "necklace ",
  },
  {
    kanji: "璢",
    kana: "ル    リュウ",
    english: "precious stone ",
  },
  {
    kanji: "琅",
    kana: "ロウ",
    english: "a precious stone ",
  },
  {
    kanji: "瑯",
    kana: "ロウ",
    english: "precious stone ",
  },
  {
    kanji: "琥",
    kana: "コ",
    english: "jewelled utensil ",
  },
  {
    kanji: "珸",
    kana: "ゴ",
    english: "jewel ",
  },
  {
    kanji: "琲",
    kana: "ハイ    つらぬく",
    english: "string of many pearls ",
  },
  {
    kanji: "琺",
    kana: "ホウ",
    english: "enamel ",
  },
  {
    kanji: "瑕",
    kana: "カ    あら    きず    なんぞ",
    english: "flaw, blemish ",
  },
  {
    kanji: "琿",
    kana: "コン",
    english: "jewel ",
  },
  {
    kanji: "瑟",
    kana: "シツ    おおごと",
    english: "large koto ",
  },
  {
    kanji: "瑙",
    kana: "ノウ",
    english: "agate, onyx ",
  },
  {
    kanji: "瑁",
    kana: "マイ    バイ    ボウ    モウ",
    english: "ancient Chinese imperial jewels ",
  },
  {
    kanji: "瑜",
    kana: "ユ",
    english: "jewel ",
  },
  {
    kanji: "瑩",
    kana: "エイ",
    english: "clear ",
  },
  {
    kanji: "瑰",
    kana: "カイ    たま    めずら.しい",
    english: "strange ",
  },
  {
    kanji: "瑣",
    kana: "サ    ちいさ.い    くさり",
    english: "small, chain ",
  },
  {
    kanji: "瑪",
    kana: "メ    バ",
    english: "agate, onyx ",
  },
  {
    kanji: "瑾",
    kana: "キン",
    english: "jewel ",
  },
  {
    kanji: "璋",
    kana: "ショウ",
    english: "ceremonial jeweled implement ",
  },
  {
    kanji: "璞",
    kana: "ハク    あらたま",
    english: "uncut gem, unpolished gem ",
  },
  {
    kanji: "瓊",
    kana: "ケイ    たま",
    english: "red jewel, beautiful jewel ",
  },
  {
    kanji: "瓏",
    kana: "ロウ",
    english: "clarity, sound of jewels ",
  },
  {
    kanji: "瓔",
    kana: "エイ    ヨウ",
    english: "jewelled necklace ",
  },
  {
    kanji: "珱",
    kana: "エイ    ヨウ",
    english: "a necklace made of precious stones ",
  },
  {
    kanji: "瓠",
    kana: "コ    カク    ひさご",
    english: "gourd ",
  },
  {
    kanji: "瓣",
    kana: "ベン    ヘン    わきま.える    わ.ける    はなびら    あらそ.う",
    english: "petal, valve ",
  },
  {
    kanji: "瓧",
    kana: "デカグラム",
    english: "10 grams, (kokuji) ",
  },
  {
    kanji: "瓩",
    kana: "キログラム",
    english: "1000 grams, (kokuji) ",
  },
  {
    kanji: "瓮",
    kana: "オオ    オウ    もたい",
    english: "jar, jug, container ",
  },
  {
    kanji: "瓲",
    kana: "とん",
    english: "ton, 1000 kilograms ",
  },
  {
    kanji: "瓰",
    kana: "デシグラム",
    english: "0.1 gram, (kokuji) ",
  },
  {
    kanji: "瓱",
    kana: "ミリグラム",
    english: "0.001 gram, (kokuji) ",
  },
  {
    kanji: "瓸",
    kana: "ヘクトグラム",
    english: "100 grams, (kokuji) ",
  },
  {
    kanji: "瓷",
    kana: "シ    かめ",
    english: "high quality porcelain ",
  },
  {
    kanji: "甄",
    kana: "ケン    シン    すえ",
    english: "porcelain, make clear, distinguish between ",
  },
  {
    kanji: "甃",
    kana: "シュウ    しきがわら    いしだたみ",
    english: "floor tile ",
  },
  {
    kanji: "甅",
    kana: "センチグラム",
    english: "centigram, (kokuji) ",
  },
  {
    kanji: "甌",
    kana: "オオ    オウ    ほとぎ    はち    かめ",
    english: "small jar, jug ",
  },
  {
    kanji: "甎",
    kana: "セン    しきがわら    かわら",
    english: "floor tiles ",
  },
  {
    kanji: "甍",
    kana: "ボウ    ミョウ    いらか",
    english: "roof tile, tiled roof ",
  },
  {
    kanji: "甕",
    kana: "オウ    かめ    みか",
    english: "jar, jug, vat ",
  },
  {
    kanji: "甓",
    kana: "ヘキ    ビャク    かわら",
    english: "floor tiles ",
  },
  {
    kanji: "甞",
    kana: "ショウ    ジョウ    かつ.て    な.める",
    english: "lick, lap up, burn up, taste, undergo, underrate, despise ",
  },
  {
    kanji: "甦",
    kana: "ソ    コウ    よみがえ.る",
    english: "be resuscitated, revived ",
  },
  {
    kanji: "甬",
    kana: "ヨウ",
    english: "road with walls on both sides ",
  },
  {
    kanji: "甼",
    kana: "チョウ    みち",
    english: "town, block ",
  },
  {
    kanji: "畄",
    kana: "リュウ    ル    と.める    と.まる    とど.める    とど.まる    るうぶる",
    english: "fasten, halt, stop ",
  },
  {
    kanji: "畍",
    kana: "カイ    さかい",
    english: "circle, world ",
  },
  {
    kanji: "畊",
    kana: "キョウ    コウ    たが.やす",
    english: "plow, cultivate ",
  },
  {
    kanji: "畉",
    kana: "フ    たがや.す",
    english: "till, cultivate ",
  },
  {
    kanji: "畛",
    kana: "シン    あぜ",
    english: "boundary between paddies ",
  },
  {
    kanji: "畆",
    kana: "ボウ    ホ    モ    ム    せ    うね",
    english: "Chinese land measure, fields ",
  },
  {
    kanji: "畚",
    kana: "ホン    もっこ    ふご",
    english: "basket, hamper ",
  },
  {
    kanji: "畩",
    kana: "けさ",
    english: "surplice ",
  },
  {
    kanji: "畤",
    kana: "ジ    シ",
    english: "festival grounds ",
  },
  {
    kanji: "畧",
    kana: "リャク    ほぼ    おか.す    おさ.める    はかりごと    はか.る    はぶ.く",
    english: "abbreviation, omission, outline, shorten, capture, plunder ",
  },
  {
    kanji: "畫",
    kana: "ガ    カク    エ    カイ    えが.く    かく.する    かぎ.る    はかりごと    はか.る",
    english: "picture, sketch, drawing, stroke, mark, divide ",
  },
  {
    kanji: "畭",
    kana: "ヨ    シャ",
    english: "new field ",
  },
  {
    kanji: "畸",
    kana: "キ",
    english: "difference, strange, cripple ",
  },
  {
    kanji: "當",
    kana: "トウ    あ.たる    あ.てる    まさ.に",
    english: "bear, accept, undertake, just ",
  },
  {
    kanji: "疆",
    kana: "キョウ    さかい",
    english: "boundary ",
  },
  {
    kanji: "疇",
    kana: "チュウ    うね    たぐい    ひと.しい",
    english: "before, companion, same kind ",
  },
  {
    kanji: "畴",
    kana: "チュウ    うね    たぐい    ひと.しい",
    english: "farmland, arable land, category ",
  },
  {
    kanji: "疊",
    kana: "ジョウ    チョウ    たた.む    たたみ    かさ.なる    かさ.ねる",
    english: "tatami, counter for tatami mats, fold, shut up, do away with ",
  },
  {
    kanji: "疉",
    kana: "ジョウ    チョウ    たた.む    たたみ    かさ.なる",
    english: "repeat, duplicate, repetitious ",
  },
  {
    kanji: "疂",
    kana: "ジョウ    チョウ    たた.む    たたみ    かさ.なる    かさ.ねる",
    english: "counter for tatami mats, fold ",
  },
  {
    kanji: "疔",
    kana: "テイ    チョウ",
    english: "carbuncle ",
  },
  {
    kanji: "疚",
    kana: "キュウ    やま.しい    や.む",
    english: "ashamed, painful, guilty conscious ",
  },
  {
    kanji: "疝",
    kana: "セン    サン",
    english: "colic, stomach ache ",
  },
  {
    kanji: "疥",
    kana: "カイ    はたけ",
    english: "scabby eruption ",
  },
  {
    kanji: "疣",
    kana: "ユ    ユウ    いぼ",
    english: "wart ",
  },
  {
    kanji: "痂",
    kana: "カ    ケ    かさ    かさ.ぶた",
    english: "scab, dry up, slough ",
  },
  {
    kanji: "疳",
    kana: "カン",
    english: "children's diseases ",
  },
  {
    kanji: "痃",
    kana: "ゲン    ケン",
    english: "cramps ",
  },
  {
    kanji: "疵",
    kana: "シ    きず",
    english: "crack, flaw, scratch, speck ",
  },
  {
    kanji: "疽",
    kana: "ソ    ショ    かさ",
    english: "carbuncle ",
  },
  {
    kanji: "疸",
    kana: "タン",
    english: "jaundice ",
  },
  {
    kanji: "疼",
    kana: "トウ    うず.く    いた.む",
    english: "ache, pain, tingle, fester ",
  },
  {
    kanji: "疱",
    kana: "ホウ    もがさ",
    english: "smallpox, blister ",
  },
  {
    kanji: "痍",
    kana: "イ    きず",
    english: "injury ",
  },
  {
    kanji: "痊",
    kana: "セン",
    english: "heal ",
  },
  {
    kanji: "痒",
    kana: "ヨウ    かゆ.がる    かさ    かゆ.い",
    english: "itchy ",
  },
  {
    kanji: "痙",
    kana: "ケイ    つ.る    ひきつ.る",
    english: "have a cramp ",
  },
  {
    kanji: "痣",
    kana: "シ    あざ    ほくろ",
    english: "birthmark, mole ",
  },
  {
    kanji: "痞",
    kana: "ヒ    つかえ",
    english: "constipation, costiveness in chest or intestines ",
  },
  {
    kanji: "痾",
    kana: "ア    やまい",
    english: "chronic illness, also N3048 ",
  },
  {
    kanji: "痿",
    kana: "イ    な.える",
    english: "atrophy, go numb, be paralysed ",
  },
  {
    kanji: "痼",
    kana: "コ",
    english: "chronic illness ",
  },
  {
    kanji: "瘁",
    kana: "スイ    つか.れる",
    english: "take sick, fatigue ",
  },
  {
    kanji: "痰",
    kana: "タン",
    english: "sputum, phlegm ",
  },
  {
    kanji: "痺",
    kana: "ヒ    しび.れる",
    english: "palsy, become numb, paralysed ",
  },
  {
    kanji: "痲",
    kana: "マ    バ    しび.れる",
    english: "measles, paralysis ",
  },
  {
    kanji: "痳",
    kana: "リン",
    english: "gonorrhea ",
  },
  {
    kanji: "瘋",
    kana: "フウ",
    english: "insanity, headache ",
  },
  {
    kanji: "瘉",
    kana: "ユ    い.える    いや.す",
    english: "get well, recover ",
  },
  {
    kanji: "瘟",
    kana: "オン    えやみ",
    english: "contagious disease ",
  },
  {
    kanji: "瘧",
    kana: "ギャク    ガク    おこり",
    english: "ague, intermittent fever ",
  },
  {
    kanji: "瘠",
    kana: "セキ    ジャク    やせ.る",
    english: "get thin, lose weight, become sterile ",
  },
  {
    kanji: "瘡",
    kana: "ソウ    ショウ    かさ",
    english: "wound, boil, syphilis ",
  },
  {
    kanji: "瘢",
    kana: "ハン    きず",
    english: "scar ",
  },
  {
    kanji: "瘤",
    kana: "リュウ    ル    こぶ",
    english: "lump, swelling ",
  },
  {
    kanji: "瘴",
    kana: "ショウ",
    english: "miasma ",
  },
  {
    kanji: "瘰",
    kana: "ルイ    ラ    ライ",
    english: "swollen neck glands ",
  },
  {
    kanji: "瘻",
    kana: "ル    ロウ    せむし    かさ    できもの",
    english: "fistula ",
  },
  {
    kanji: "癇",
    kana: "カン    ひきつけ",
    english: "bitter, hot temper, irritable, nervous ",
  },
  {
    kanji: "癈",
    kana: "ハイ",
    english: "chronic illness, getting crippled ",
  },
  {
    kanji: "癆",
    kana: "ロウ",
    english: "rash, pain, debilitation ",
  },
  {
    kanji: "癜",
    kana: "デン    テン    なまず",
    english: "leucoderma, piebald skin ",
  },
  {
    kanji: "癘",
    kana: "レイ    ライ    えやみ",
    english: "contagious disease, leprosy ",
  },
  {
    kanji: "癡",
    kana: "チ    し.れる    おろか",
    english: "foolish ",
  },
  {
    kanji: "癢",
    kana: "ヨウ    かゆ.い",
    english: "itchy ",
  },
  {
    kanji: "癨",
    kana: "カク",
    english: "heatstroke, sunstroke ",
  },
  {
    kanji: "癩",
    kana: "ライ",
    english: "leprosy ",
  },
  {
    kanji: "癪",
    kana: "しゃく",
    english: "spasms, (kokuji) ",
  },
  {
    kanji: "癧",
    kana: "レキ",
    english: "swollen neck glands ",
  },
  {
    kanji: "癬",
    kana: "セン    たむし",
    english: "ringworm ",
  },
  {
    kanji: "癰",
    kana: "ヨウ    はれもの",
    english: "boil, carbuncle, also N3089 ",
  },
  {
    kanji: "癲",
    kana: "テン",
    english: "insanity ",
  },
  {
    kanji: "癶",
    kana: "ハツ    はつがしら",
    english: "dotted tent radical (no. 105) ",
  },
  {
    kanji: "癸",
    kana: "キ    みずのと",
    english: "10th calendar sign ",
  },
  {
    kanji: "發",
    kana: "ハツ    ホツ    た.つ    あば.く    おこ.る    つか.わす    はな.つ",
    english: "departure, publish, emit, start from, disclose ",
  },
  {
    kanji: "皀",
    kana: "キュウ    ヒョク    キョウ    コウ",
    english: "fragrant, grain ",
  },
  {
    kanji: "皃",
    kana: "ボウ    バク    かたち    かたどる",
    english: "countenance, appearance ",
  },
  {
    kanji: "皈",
    kana: "キ    かえ.る    かえ.す    おく.る    とつ.ぐ",
    english: "homecoming, arrive at, lead to, result in ",
  },
  {
    kanji: "皋",
    kana: "コウ    さつき",
    english: "the high land along a river ",
  },
  {
    kanji: "皎",
    kana: "キョウ    コウ    きよ.い    しろ.い",
    english: "white, shining ",
  },
  {
    kanji: "皖",
    kana: "カン",
    english: "Venus, morning star, place name ",
  },
  {
    kanji: "皙",
    kana: "シャク    セキ    しろ.い",
    english: "clear ",
  },
  {
    kanji: "皚",
    kana: "ガイ    ギ    ゲ    カイ    しろ.い    さむ.い",
    english: "white ",
  },
  {
    kanji: "皰",
    kana: "ホウ    ビョウ    にきび",
    english: "pimple ",
  },
  {
    kanji: "皴",
    kana: "シュン    ひび    しわ",
    english: "wrinkles, cracking, creases ",
  },
  {
    kanji: "皸",
    kana: "クン    キン    ひび    あかぎれ",
    english: "skin cracks or roughness ",
  },
  {
    kanji: "皹",
    kana: "クン    キン    ひび    あかぎれ",
    english: "skin cracks or roughness ",
  },
  {
    kanji: "皺",
    kana: "シュウ    スウ    しわ    しぼ",
    english: "wrinkles, creases, folds ",
  },
  {
    kanji: "盂",
    kana: "ウ    はち",
    english: "bowl ",
  },
  {
    kanji: "盍",
    kana: "コウ    おお.う    なんぞ",
    english: "come together, congregate, meet, cover ",
  },
  {
    kanji: "盖",
    kana: "ガイ    カイ    コウ    ふた    けだ.し    おお.う    かさ    かこう",
    english: "cover, lid, flap ",
  },
  {
    kanji: "盒",
    kana: "コウ    さら    ふたもの",
    english: "covered utensil ",
  },
  {
    kanji: "盞",
    kana: "サン    セン    さかずき",
    english: "sake cup ",
  },
  {
    kanji: "盡",
    kana: "ジン    サン    つ.くす    つ.きる    つ.かす    さかづき    ことごと.く",
    english: "sake cup ",
  },
  {
    kanji: "盥",
    kana: "カン    たらい    そそ.ぐ",
    english: "tub, washbasin ",
  },
  {
    kanji: "盧",
    kana: "ロ",
    english: "hut ",
  },
  {
    kanji: "盪",
    kana: "トウ    とろ.かす    あら.う    うご.く",
    english: "melt, be charmed, captivated ",
  },
  {
    kanji: "蘯",
    kana: "トウ    とろ.かす    あら.う    うご.く",
    english: "to toss about, to swing, to rock ",
  },
  {
    kanji: "盻",
    kana: "ケイ    にら.む",
    english: "glare at, toil ",
  },
  {
    kanji: "眈",
    kana: "タン    にら.む",
    english: "watch intently ",
  },
  {
    kanji: "眇",
    kana: "ビョウ    ミョウ    びょう.たる    すがめ",
    english: "minuteness, squint ",
  },
  {
    kanji: "眄",
    kana: "ベン    メン    かえり.みる",
    english: "looking askance ",
  },
  {
    kanji: "眩",
    kana: "ゲン    カン    げん.す    くるめ.く    まぶ.しい    くら.む    まど.う    めま.い",
    english: "faint, dizzy ",
  },
  {
    kanji: "眤",
    kana: "ケイ    ダイ    てい    い",
    english: "glance at, gaze at ",
  },
  {
    kanji: "眞",
    kana: "シン    ま    まこと",
    english: "truth, reality, Buddhist sect ",
  },
  {
    kanji: "眥",
    kana: "セ    イシ    サイ    シ    セイ    まなじり    めじり",
    english: "outside the corner of the eye ",
  },
  {
    kanji: "眦",
    kana: "セ    イシ    サイ    シ    セイ    まなじり    めじり",
    english: "corner of the eyes, eyesockets ",
  },
  {
    kanji: "眛",
    kana: "マイ    バイ    くら.い",
    english: "dark ",
  },
  {
    kanji: "眷",
    kana: "ケン    かえり.みる",
    english: "look around, regard affectionately ",
  },
  {
    kanji: "睇",
    kana: "テイ    ダイ",
    english: "looking askance at ",
  },
  {
    kanji: "睚",
    kana: "ガイ    まなじり",
    english: "glare, angry look ",
  },
  {
    kanji: "睨",
    kana: "ゲイ    にら.む    にら.み",
    english: "glaring at, authority, power, scowl at ",
  },
  {
    kanji: "睫",
    kana: "ショウ    まつげ",
    english: "eyelashes ",
  },
  {
    kanji: "睛",
    kana: "セイ    ショウ    ひとみ",
    english: "pupil of the eye ",
  },
  {
    kanji: "睥",
    kana: "ヘイ    ながしめ    み.る",
    english: "glare at ",
  },
  {
    kanji: "睿",
    kana: "エイ    あき.らか",
    english: "intelligence, imperial ",
  },
  {
    kanji: "睾",
    kana: "コウ",
    english: "testicles ",
  },
  {
    kanji: "睹",
    kana: "ト    み.る",
    english: "look at, see ",
  },
  {
    kanji: "瞎",
    kana: "カツ    めくら    かため",
    english: "blind eye, one eye ",
  },
  {
    kanji: "瞋",
    kana: "シン    い.かる    いか.らす",
    english: "be angry ",
  },
  {
    kanji: "瞑",
    kana: "メイ    ベン    ミョウ    ミン    メン    めい.する    つぶ.る    つむ.る    くら.い",
    english: "sleep, dark, close eyes ",
  },
  {
    kanji: "瞠",
    kana: "ドウ    トウ    みは.る",
    english: "stare intently ",
  },
  {
    kanji: "瞞",
    kana: "マン    モン    バン    ボン    だま.す",
    english: "deception ",
  },
  {
    kanji: "瞰",
    kana: "カン    み.る",
    english: "look, see ",
  },
  {
    kanji: "瞶",
    kana: "キ",
    english: "see everything ",
  },
  {
    kanji: "瞹",
    kana: "アイ",
    english: "hidden, unclear ",
  },
  {
    kanji: "瞿",
    kana: "ク    おそ.れる    み.る",
    english: "surname ",
  },
  {
    kanji: "瞼",
    kana: "ケン    まぶた",
    english: "eyelids ",
  },
  {
    kanji: "瞽",
    kana: "コ    めし.い",
    english: "blind person ",
  },
  {
    kanji: "瞻",
    kana: "セン    み.る",
    english: "look at ",
  },
  {
    kanji: "矇",
    kana: "モウ    ボウ    くら.い    めし.い",
    english: "blind ",
  },
  {
    kanji: "矍",
    kana: "カク",
    english: "surprise & confusion ",
  },
  {
    kanji: "矗",
    kana: "チョク    シュク    チク    なお.い",
    english: "luxuriance ",
  },
  {
    kanji: "矚",
    kana: "ショク    ソク    み.る",
    english: "look intently ",
  },
  {
    kanji: "矜",
    kana: "キン    キョウ    ケイ    あわ.れむ    つつし.む    ほこ.る",
    english: "pride, respect ",
  },
  {
    kanji: "矣",
    kana: "イ",
    english: "sentence particle ",
  },
  {
    kanji: "矮",
    kana: "ワイ    アイ    ひく.い",
    english: "low, short ",
  },
  {
    kanji: "矼",
    kana: "コウ",
    english: "stepping stone, hard, serious minded ",
  },
  {
    kanji: "砌",
    kana: "サイ    セイ    みぎり",
    english: "time, occasion ",
  },
  {
    kanji: "砒",
    kana: "ヒ    ヘイ",
    english: "arsenic ",
  },
  {
    kanji: "砠",
    kana: "ソ    ショ",
    english: "stony hill, stony mountain ",
  },
  {
    kanji: "礪",
    kana: "レイ    あらと    みが.く",
    english: "whetstone, polish ",
  },
  {
    kanji: "硅",
    kana: "カク    キャク    ケイ    やぶ.る",
    english: "silicon ",
  },
  {
    kanji: "碎",
    kana: "サイ    くだ.く    くだ.ける",
    english: "break, smash, broken, busted ",
  },
  {
    kanji: "硴",
    kana: "かき",
    english: "oyster ",
  },
  {
    kanji: "碆",
    kana: "ハ",
    english: "arrowhead, weight attached to an arrow by a cord ",
  },
  {
    kanji: "硼",
    kana: "ホウ",
    english: "sound of stones struck together, boron ",
  },
  {
    kanji: "碚",
    kana: "ハイ",
    english: "mound, bud ",
  },
  {
    kanji: "碌",
    kana: "ロク    ろく.な",
    english: "satisfactory ",
  },
  {
    kanji: "碣",
    kana: "ケツ    いしぶみ",
    english: "round stone, monument ",
  },
  {
    kanji: "碵",
    kana: "",
    english: "great, see JIS4059 ",
  },
  {
    kanji: "碪",
    kana: "チン    きぬた",
    english: "stone slab used for washing clothes, an anvil ",
  },
  {
    kanji: "碯",
    kana: "ノウ",
    english: "agate ",
  },
  {
    kanji: "磑",
    kana: "ガイ    う.す",
    english: "mortar, hand mill ",
  },
  {
    kanji: "磆",
    kana: "カツ",
    english: "stone implement ",
  },
  {
    kanji: "磋",
    kana: "サ    みが.く",
    english: "polish ",
  },
  {
    kanji: "磔",
    kana: "タク    チャク    さ.く    はりつけ    ひらく",
    english: "crucifixion ",
  },
  {
    kanji: "碾",
    kana: "テン    ひ.く    う.す",
    english: "mortar, grind ",
  },
  {
    kanji: "碼",
    kana: "バ    メ    やあど    やある",
    english: "number, wharf, agate, yard (91.44 cm) ",
  },
  {
    kanji: "磅",
    kana: "ボウ    ホウ    ぽんど",
    english: "become obstructed, pound (sterling, lb) ",
  },
  {
    kanji: "磊",
    kana: "ライ",
    english: "many stones ",
  },
  {
    kanji: "磬",
    kana: "ケイ",
    english: "upside-V-shaped gong ",
  },
  {
    kanji: "磧",
    kana: "セキ    かわら",
    english: "expanse of sand, pebbly beach ",
  },
  {
    kanji: "磚",
    kana: "セン    かわら",
    english: "tile ",
  },
  {
    kanji: "磽",
    kana: "コウ    キョウ",
    english: "rocky, barren ",
  },
  {
    kanji: "磴",
    kana: "トウ",
    english: "stone steps, stone bridge ",
  },
  {
    kanji: "礇",
    kana: "イク",
    english: "jewel ",
  },
  {
    kanji: "礒",
    kana: "ギ    ガ    いそ    いわお",
    english: "rock, beach, shore ",
  },
  {
    kanji: "礑",
    kana: "トウ    はた    はたと",
    english: "bottom, base, slap, bang, all of a sudden ",
  },
  {
    kanji: "礙",
    kana: "ガイ    ゲ    さまた.げる",
    english: "obstruct, hinder, block, deter ",
  },
  {
    kanji: "礬",
    kana: "バン    ハン",
    english: "alum ",
  },
  {
    kanji: "礫",
    kana: "レキ    つぶて    こいし",
    english: "small stones ",
  },
  {
    kanji: "祀",
    kana: "シ    まつ.る    まつり",
    english: "enshrine, worship ",
  },
  {
    kanji: "祠",
    kana: "シ    ほこら    まつる",
    english: "small shrine ",
  },
  {
    kanji: "祗",
    kana: "シ    つつし.む    まさに",
    english: "respectful ",
  },
  {
    kanji: "祟",
    kana: "スイ    たた.る    たた.り",
    english: "curse, haunt ",
  },
  {
    kanji: "祚",
    kana: "ソ    くら.い    さいわ.い",
    english: "imperial throne, happiness ",
  },
  {
    kanji: "祕",
    kana: "ヒ    ひ.める    かく.す",
    english: "mysterious, secret, abstruse ",
  },
  {
    kanji: "祓",
    kana: "フツ    ハイ    はら.う",
    english: "exorcise ",
  },
  {
    kanji: "祺",
    kana: "キ    さいわ.い",
    english: "fortunate, peace of mind ",
  },
  {
    kanji: "祿",
    kana: "ロク    さいわ.い    ふち",
    english: "fief, allowance, pension, grant, happiness ",
  },
  {
    kanji: "禊",
    kana: "ケイ    カツ    みそぎ    はら.う",
    english: "shinto purification ceremony ",
  },
  {
    kanji: "禝",
    kana: "ショク    きび",
    english: "proper name ",
  },
  {
    kanji: "禧",
    kana: "キ    さいわ.い",
    english: "fortunate, auspicious ",
  },
  {
    kanji: "齋",
    kana: "サイ    つつし.む    とき    ものいみ",
    english:
  "Buddhist food, room, religious purification, worship, avoid, alike ",
  },
  {
    kanji: "禪",
    kana: "ゼン    セン    しずか    ゆず.る",
    english: "Zen Buddhism, silent meditation ",
  },
  {
    kanji: "禮",
    kana: "レイ    ライ",
    english: "social custom, manners, courtesy, rites ",
  },
  {
    kanji: "禳",
    kana: "ジョウ    はら.う",
    english: "exorcise, drive away ",
  },
  {
    kanji: "禹",
    kana: "ウ",
    english: "name of a Chinese emperor ",
  },
  {
    kanji: "禺",
    kana: "グ    グウ    おながざる",
    english: "long-tailed monkey ",
  },
  {
    kanji: "秉",
    kana: "ヘイ    と.る",
    english: "take, cherish, sheaf, unit of volume ",
  },
  {
    kanji: "秕",
    kana: "ヒ    しいな",
    english: "empty grain or rice husk, chaff ",
  },
  {
    kanji: "秧",
    kana: "オウ    なえ",
    english: "rice, seedlings ",
  },
  {
    kanji: "秬",
    kana: "キョ    くろきび",
    english: "a type of millet ",
  },
  {
    kanji: "秡",
    kana: "ハツ    バチ",
    english: "damaged grain ",
  },
  {
    kanji: "秣",
    kana: "マツ    バツ    まぐさ    まぐさかう",
    english: "fodder ",
  },
  {
    kanji: "稈",
    kana: "カン    わら",
    english: "straw, hollow stem ",
  },
  {
    kanji: "稍",
    kana: "ソウ    ショウ    やや    ようやく",
    english: "slightly ",
  },
  {
    kanji: "稘",
    kana: "キ",
    english: "straw, one year ",
  },
  {
    kanji: "稙",
    kana: "ショク    チョク",
    english: "early-maturing rice ",
  },
  {
    kanji: "稠",
    kana: "チュウ    チョウ    おお.い    し.げる",
    english: "density ",
  },
  {
    kanji: "稟",
    kana: "リン    ヒン    こめぐら",
    english: "salary in rice ",
  },
  {
    kanji: "禀",
    kana: "リン    ヒン    こめぐら",
    english: "salary in rice ",
  },
  {
    kanji: "稱",
    kana: "ショウ    たた.える    とな.える    あ.げる    かな.う    はか.る    ほめ.る",
    english: "call, name, brand, address, say ",
  },
  {
    kanji: "稻",
    kana: "トウ    テ    いね    いな-",
    english: "rice plant ",
  },
  {
    kanji: "稾",
    kana: "コウ    わら    したがき",
    english: "draft, manuscript, rough copy ",
  },
  {
    kanji: "稷",
    kana: "ショク    きび",
    english: "millet ",
  },
  {
    kanji: "穃",
    kana: "ヨウ",
    english: "(no known meaning; s&H uses jabberwocky words) ",
  },
  {
    kanji: "穗",
    kana: "スイ    ほ",
    english: "ear (of grain), head, crest (of wave) ",
  },
  {
    kanji: "穉",
    kana: "チ    ジ    いと.けない    おさ.ない    おく.て    お.ごる",
    english: "infancy ",
  },
  {
    kanji: "穡",
    kana: "ショク",
    english: "harvest ",
  },
  {
    kanji: "穢",
    kana: "アイ    エ    ワイ    けが.す    けが.れ    けが.れる",
    english: "dirty ",
  },
  {
    kanji: "穩",
    kana: "オン    おだ.やか",
    english: "calm ",
  },
  {
    kanji: "穰",
    kana: "ジョウ    わら    ゆたか",
    english: "abundance ",
  },
  {
    kanji: "穹",
    kana: "キュウ    キョウ    あめ    そら",
    english: "sky ",
  },
  {
    kanji: "穽",
    kana: "セイ    おとしあな",
    english: "sunken trap ",
  },
  {
    kanji: "窈",
    kana: "ヨウ",
    english: "quiet ",
  },
  {
    kanji: "窗",
    kana: "ソウ    ス    まど    てんまど    けむだし",
    english: "window, pane ",
  },
  {
    kanji: "窕",
    kana: "チョウ    ヨウ    うつく.しい",
    english: "quiet ",
  },
  {
    kanji: "窘",
    kana: "キン    たしな.める    くるし.む",
    english: "rebuke ",
  },
  {
    kanji: "窖",
    kana: "コウ    キョウ    あなぐら",
    english: "cellar ",
  },
  {
    kanji: "窩",
    kana: "カ    ワ    むろ",
    english: "cave, pouch ",
  },
  {
    kanji: "竈",
    kana: "ソウ    かまど    かま    へっつい",
    english: "hearth, kitchen stove ",
  },
  {
    kanji: "窰",
    kana: "ヨウ    かま",
    english: "brick kiln, furnace, coal mine pit ",
  },
  {
    kanji: "窶",
    kana: "ロウ    ク    ル    や.つる    や.つれる",
    english: "emaciated ",
  },
  {
    kanji: "竅",
    kana: "キョウ    あな",
    english: "hole, cave ",
  },
  {
    kanji: "竄",
    kana: "ザン    サン    かく.れる    のが.れる",
    english: "flee ",
  },
  {
    kanji: "窿",
    kana: "リュウ",
    english: "vault (of sky), dome ",
  },
  {
    kanji: "邃",
    kana: "スイ    おくぶか.い",
    english: "deep, profound ",
  },
  {
    kanji: "竇",
    kana: "トウ    トク    あな",
    english: "hole, doorway, ditch ",
  },
  {
    kanji: "竊",
    kana: "セツ    ぬす.む    ひそ.かに",
    english: "steal, secret, private, hushed ",
  },
  {
    kanji: "竍",
    kana: "デカリットル",
    english: "decalitre, (kokuji) ",
  },
  {
    kanji: "竏",
    kana: "キロリットル",
    english: "kilolitre, (kokuji) ",
  },
  {
    kanji: "竕",
    kana: "デシリットル",
    english: "decilitre, (kokuji) ",
  },
  {
    kanji: "竓",
    kana: "ミリリットル",
    english: "millilitre, (kokuji) ",
  },
  {
    kanji: "站",
    kana: "タン",
    english: "stop, halt ",
  },
  {
    kanji: "竚",
    kana: "チョ    たたず.む",
    english: "stop, linger ",
  },
  {
    kanji: "竝",
    kana: "ヘイ    ホウ    な.み    なら.べる    なら.ぶ    なら.びに",
    english: "line up, be in a row, rank with, rival, equal ",
  },
  {
    kanji: "竡",
    kana: "ヘクトリットル",
    english: "hectolitre, (kokuji) ",
  },
  {
    kanji: "竢",
    kana: "シ    まつ",
    english: "wait for, wait until, as soon as ",
  },
  {
    kanji: "竦",
    kana: "ショウ    すく.む    おそ.れる    つつし.む",
    english: "crouch, cower ",
  },
  {
    kanji: "竭",
    kana: "ケツ    つく.す",
    english: "end, exhaust ",
  },
  {
    kanji: "竰",
    kana: "センチリットル",
    english: "centilitre, (kokuji) ",
  },
  {
    kanji: "笂",
    kana: "うつぼ",
    english: "quiver, arrow holder ",
  },
  {
    kanji: "笏",
    kana: "コツ    しゃく",
    english: "mace, baton, scepter ",
  },
  {
    kanji: "笊",
    kana: "ソウ    ざる    す",
    english: "bamboo basket ",
  },
  {
    kanji: "笆",
    kana: "ハ",
    english: "thorny bamboo, bamboo fence ",
  },
  {
    kanji: "笳",
    kana: "カ    あしぶえ",
    english: "reed flute ",
  },
  {
    kanji: "笘",
    kana: "セン    チョウ",
    english: "whip, cane, wooden writing slate ",
  },
  {
    kanji: "笞",
    kana: "チ    むち    しもと",
    english: "whip, rod, scourge, crime punishable by flogging ",
  },
  {
    kanji: "笵",
    kana: "ハン    ボン    のり",
    english: "bamboo frame, law ",
  },
  {
    kanji: "笨",
    kana: "ホン    あら.い",
    english: "coarse ",
  },
  {
    kanji: "笶",
    kana: "シ",
    english: "arrow ",
  },
  {
    kanji: "筐",
    kana: "キョウ    かたみ    かご    はこ",
    english: "bamboo basket ",
  },
  {
    kanji: "筺",
    kana: "キョウ    かたみ    かご    はこ",
    english: "bamboo basket ",
  },
  {
    kanji: "笄",
    kana: "ケイ    こうがい",
    english: "hairpin, crossbar of anchor, metal rod on sheath ",
  },
  {
    kanji: "筍",
    kana: "ジュン    シュン    イン    たけのこ    たかんな",
    english: "bamboo shoot ",
  },
  {
    kanji: "笋",
    kana: "ジュン    シュン    イン    たけのこ    たかんな",
    english: "bamboo shoot ",
  },
  {
    kanji: "筌",
    kana: "セン    うけ    うえ",
    english: "fish trap, weir ",
  },
  {
    kanji: "筅",
    kana: "セン    ささら",
    english: "bamboo whisk for tea-making ",
  },
  {
    kanji: "筵",
    kana: "エン    むしろ",
    english: "straw mat ",
  },
  {
    kanji: "筥",
    kana: "キョ",
    english: "round basket ",
  },
  {
    kanji: "筴",
    kana: "キョウ    サク    めどぎ",
    english: "insert between, chopsticks, divining sticks, plan ",
  },
  {
    kanji: "筧",
    kana: "ケン",
    english: "waterpipe, flume ",
  },
  {
    kanji: "筰",
    kana: "サク    しゃく",
    english: "bamboo rope ",
  },
  {
    kanji: "筱",
    kana: "ゾウ    ショウ    しの",
    english: "dwarf bamboo, diminutive in person's name ",
  },
  {
    kanji: "筬",
    kana: "セイ    おさ",
    english: "reed, guide for yarn on a loom ",
  },
  {
    kanji: "筮",
    kana: "ゼイ    セイ    うらな.う    めどぎ",
    english: "(water) divining equipment ",
  },
  {
    kanji: "箝",
    kana: "カン    ケン    す.げる    くびかせ    はさ.む",
    english: "insert, fit into, attach (a clog thong) ",
  },
  {
    kanji: "箘",
    kana: "キン",
    english: "a type of bamboo, bamboo shoots, dice ",
  },
  {
    kanji: "箟",
    kana: "キン",
    english: "a type of bamboo, bamboo shoots, dice ",
  },
  {
    kanji: "箍",
    kana: "コ    たが",
    english: "barrel hoop ",
  },
  {
    kanji: "箜",
    kana: "ク    コウ",
    english: "type of harp ",
  },
  {
    kanji: "箚",
    kana: "トウ    サツ    チョウ    さ.す",
    english: "progress report ",
  },
  {
    kanji: "箒",
    kana: "ソウ    シュウ    ほうき",
    english: "broom ",
  },
  {
    kanji: "箏",
    kana: "ソウ    ショウ    こと",
    english: "a koto ",
  },
  {
    kanji: "筝",
    kana: "ソウ    ショウ    こと",
    english: "koto ",
  },
  {
    kanji: "箙",
    kana: "フク    えびら",
    english: "quiver ",
  },
  {
    kanji: "篋",
    kana: "キョウ    はこ",
    english: "box ",
  },
  {
    kanji: "篁",
    kana: "コウ    たかむら",
    english: "bamboo grove ",
  },
  {
    kanji: "篌",
    kana: "ゴ    コウ",
    english: "type of harp ",
  },
  {
    kanji: "篏",
    kana: "カン    は.める    は.まる    あな",
    english: "inlay, set in, fall into, rugged ",
  },
  {
    kanji: "箴",
    kana: "シン    いまし.める    はり",
    english: "warning, counsel, presept, needle ",
  },
  {
    kanji: "篆",
    kana: "テン",
    english: "seal-style characters ",
  },
  {
    kanji: "篝",
    kana: "コウ    かがりび    かがり    ふせご",
    english: "campfire, fishing fire, beacon basket ",
  },
  {
    kanji: "篩",
    kana: "シ    サイ    ふる.う",
    english: "sieve, sift, screen ",
  },
  {
    kanji: "簑",
    kana: "サ    サイ    みの",
    english: "a coat raincoat ",
  },
  {
    kanji: "簔",
    kana: "サ    サイ    みの",
    english: "a coat raincoat ",
  },
  {
    kanji: "篦",
    kana: "ヘイ    ハイ    へら    の",
    english: "spatula, arrow shaft ",
  },
  {
    kanji: "篥",
    kana: "リキ    リツ    リチ",
    english: "horn, flageolet ",
  },
  {
    kanji: "簀",
    kana: "サク    ジャク    セキ    す",
    english: "rough mat (reeds) ",
  },
  {
    kanji: "簇",
    kana: "ゾク    ソウ    ソク    むら.がる",
    english: "group, crowd, swarm ",
  },
  {
    kanji: "簓",
    kana: "ささら",
    english: "bamboo whisk, (kokuji) ",
  },
  {
    kanji: "篳",
    kana: "ヒチ    ヒツ    まがき",
    english: "fence ",
  },
  {
    kanji: "篷",
    kana: "ホウ    とま",
    english: "woven rush awning ",
  },
  {
    kanji: "簗",
    kana: "リョウ    やな",
    english: "weir, fish trap ",
  },
  {
    kanji: "簍",
    kana: "ル    ロウ",
    english: "bamboo basket ",
  },
  {
    kanji: "篶",
    kana: "エン    くろだけ    すず",
    english: "black bamboo, slender bamboo ",
  },
  {
    kanji: "簣",
    kana: "キ    もっこ    あじか",
    english: "earth-carrying basket ",
  },
  {
    kanji: "簧",
    kana: "コウ    した",
    english: "flute reed ",
  },
  {
    kanji: "簪",
    kana: "シン    サン    かんざし",
    english: "ornamental hairpin ",
  },
  {
    kanji: "簟",
    kana: "タン    テン    たかむしろ",
    english: "a type of bamboo, round bamboo lunchbox ",
  },
  {
    kanji: "簷",
    kana: "エン    ひさし",
    english: "eaves ",
  },
  {
    kanji: "簫",
    kana: "ショウ    ふえ",
    english: "pan pipes, flute ",
  },
  {
    kanji: "簽",
    kana: "セン    かご",
    english: "label, signature ",
  },
  {
    kanji: "籌",
    kana: "チュウ    かずとり    はかりごと",
    english: "plan ",
  },
  {
    kanji: "籃",
    kana: "ラン    かご",
    english: "basket ",
  },
  {
    kanji: "籔",
    kana: "ソウ    やぶ",
    english: "thicket, bush, underbrush, grove ",
  },
  {
    kanji: "籏",
    kana: "キ    はた",
    english: "flag, banner ",
  },
  {
    kanji: "籀",
    kana: "チュウ    シュウ    ジュ    よ.む",
    english: "a style of calligraphy ",
  },
  {
    kanji: "籐",
    kana: "トウ",
    english: "rattan, cane ",
  },
  {
    kanji: "籘",
    kana: "トウ",
    english: "climbing plants, vines, cane ",
  },
  {
    kanji: "籟",
    kana: "ライ    ふえ",
    english: "rattling of the wind ",
  },
  {
    kanji: "籤",
    kana: "セン    くじ    かずとり",
    english: "lottery, raffle ",
  },
  {
    kanji: "籖",
    kana: "セン    くじ    かずとり",
    english: "lottery, raffle ",
  },
  {
    kanji: "籥",
    kana: "ヤク    ふえ",
    english: "three-holed flute ",
  },
  {
    kanji: "籬",
    kana: "リ    まがき    かき",
    english: "rough-woven fence, bamboo hedge ",
  },
  {
    kanji: "籵",
    kana: "デカメートル",
    english: "dekametre, (kokuji) ",
  },
  {
    kanji: "粃",
    kana: "ヒ    しな    しいな",
    english: "empty grain husk ",
  },
  {
    kanji: "粐",
    kana: "ロ    コ",
    english: "(no known meaning; s&H uses jabberwocky words) ",
  },
  {
    kanji: "粤",
    kana: "エツ    ここに",
    english: "alas ",
  },
  {
    kanji: "粭",
    kana: "すくも",
    english: "chaff, rice hulls ",
  },
  {
    kanji: "粢",
    kana: "シ    しとぎ",
    english: "millet, rice cakes ",
  },
  {
    kanji: "粫",
    kana: "メン",
    english: "(no known meaning; s&H uses jabberwocky words) ",
  },
  {
    kanji: "粡",
    kana: "トウ",
    english: "unpolished rice ",
  },
  {
    kanji: "粨",
    kana: "ヘクトメートル",
    english: "hectometre, (kokuji) ",
  },
  {
    kanji: "粳",
    kana: "コウ    うるち    ぬか",
    english: "ordinary rice ",
  },
  {
    kanji: "粲",
    kana: "サン    いい",
    english: "bright ",
  },
  {
    kanji: "粱",
    kana: "リョウ    あわ",
    english: "high quality rice ",
  },
  {
    kanji: "粮",
    kana: "リョウ    ロウ    かて",
    english: "food, provisions ",
  },
  {
    kanji: "粹",
    kana: "スイ    いき",
    english: "pure, unadulterated, select ",
  },
  {
    kanji: "粽",
    kana: "ソウ    ちまき",
    english: "rice dumplings steamed in bamboo leaves ",
  },
  {
    kanji: "糀",
    kana: "こうじ",
    english: "malt ",
  },
  {
    kanji: "糅",
    kana: "ジュウ    ま.じる",
    english: "mix ",
  },
  {
    kanji: "糂",
    kana: "ジン",
    english: "mixing rice into soup ",
  },
  {
    kanji: "糘",
    kana: "すくも",
    english: "chaff, rice hulls ",
  },
  {
    kanji: "糒",
    kana: "ビ    ハイ    ほしい    ほしい.い",
    english: "dried boiled rice ",
  },
  {
    kanji: "糜",
    kana: "ビ    ただ.れる",
    english: "be inflamed ",
  },
  {
    kanji: "糢",
    kana: "ボ    モ    かた    のっとる",
    english: "rice snacks ",
  },
  {
    kanji: "鬻",
    kana: "イク    シュク    かゆ    かい    ひさ.ぐ",
    english: "sell, deal in ",
  },
  {
    kanji: "糯",
    kana: "ダ    ナ    もちごめ",
    english: "glutinous rice ",
  },
  {
    kanji: "糲",
    kana: "レイ    ラツ    あら.い    くろごめ",
    english: "unpolished rice ",
  },
  {
    kanji: "糴",
    kana: "チョウ    テキ    う.る    せり    かいよね",
    english: "sell (grain), auction ",
  },
  {
    kanji: "糶",
    kana: "チョウ    せり    うりよね",
    english: "auction ",
  },
  {
    kanji: "糺",
    kana: "キュウ    ただ.す    あざな.う",
    english: "ask, investigate, verify, twist (rope) ",
  },
  {
    kanji: "紆",
    kana: "ウ    まが.る    めぐ.る",
    english: "crouch ",
  },
  {
    kanji: "紂",
    kana: "チュウ    しりがい",
    english: "harness strap, window ",
  },
  {
    kanji: "紜",
    kana: "ウン    みだ.れる",
    english: "disorder, confusion ",
  },
  {
    kanji: "紕",
    kana: "ヒ",
    english: "braiding, decoration, error ",
  },
  {
    kanji: "紊",
    kana: "ビン    ブン    みだ.れる",
    english: "disturb ",
  },
  {
    kanji: "絅",
    kana: "ケイ    ひ.く",
    english: "thin silk ",
  },
  {
    kanji: "絋",
    kana: "コウ",
    english: "cotton wadding ",
  },
  {
    kanji: "紮",
    kana: "サツ    からげる",
    english: "tie up ",
  },
  {
    kanji: "紲",
    kana: "セツ    きずな",
    english: "fetters ",
  },
  {
    kanji: "紿",
    kana: "タイ    あざむ.く",
    english: "deceive ",
  },
  {
    kanji: "紵",
    kana: "チョ",
    english: "flax, linen ",
  },
  {
    kanji: "絆",
    kana: "ハン    きずな    ほだ.す    つな.ぐ",
    english: "bonds, fetters ",
  },
  {
    kanji: "絳",
    kana: "コウ    あか",
    english: "red ",
  },
  {
    kanji: "絖",
    kana: "コウ    ぬめ    わた",
    english: "white rice ",
  },
  {
    kanji: "絎",
    kana: "コウ    く.れる    く.ける",
    english: "blindstitch ",
  },
  {
    kanji: "絲",
    kana: "シ    いと",
    english: "thread ",
  },
  {
    kanji: "絨",
    kana: "ジュウ",
    english: "wool cloth ",
  },
  {
    kanji: "絮",
    kana: "ジョ    ショ    わた",
    english: "cotton ",
  },
  {
    kanji: "絏",
    kana: "セツ",
    english: "tie ",
  },
  {
    kanji: "絣",
    kana: "ホウ    かすり",
    english: "splashed pattern (on cloth) ",
  },
  {
    kanji: "經",
    kana: "ケイ    キョウ    へ.る    た.つ    たていと    はか.る    のり",
    english: "classic works, pass through ",
  },
  {
    kanji: "綉",
    kana: "シュウ    ツ    トウ",
    english: "embroidery ",
  },
  {
    kanji: "絛",
    kana: "ジュウ    ジョウ    トウ    さなだ",
    english: "braid ",
  },
  {
    kanji: "綏",
    kana: "スイ    タ    やす.い",
    english: "peaceful, cheap, grab strap ",
  },
  {
    kanji: "絽",
    kana: "ロ    リョ",
    english: "silk gauze ",
  },
  {
    kanji: "綛",
    kana: "かせ    かすり",
    english: "splashed dye pattern, reel, skein ",
  },
  {
    kanji: "綮",
    kana: "ケイ",
    english: "emblem on banner ",
  },
  {
    kanji: "綣",
    kana: "ケン",
    english: "attachment, affection ",
  },
  {
    kanji: "綵",
    kana: "サイ    あや    あやぎぬ",
    english: "colorful ",
  },
  {
    kanji: "緇",
    kana: "シ    くろ",
    english: "black clothing, priest ",
  },
  {
    kanji: "綽",
    kana: "シャク    あだ    しな.やか    ゆる.やか",
    english: "loose, lenient ",
  },
  {
    kanji: "綫",
    kana: "セン    すじ",
    english: "thread, line ",
  },
  {
    kanji: "總",
    kana: "ソウ    す.べて    すべ.て    ふさ",
    english: "collect, overall, altogether ",
  },
  {
    kanji: "綢",
    kana: "チュウ    トウ    まとう",
    english: "be clothed in, tie, detailed, fine ",
  },
  {
    kanji: "綯",
    kana: "トウ    な.う    なわ    よ.る",
    english: "twist, make rope ",
  },
  {
    kanji: "緜",
    kana: "メン    わた    つら.なる",
    english: "cotton ",
  },
  {
    kanji: "綟",
    kana: "レイ    もじ",
    english: "yellowish green, coarse mesh linen ",
  },
  {
    kanji: "綰",
    kana: "ワン    わが.ねる",
    english: "bend around ",
  },
  {
    kanji: "緘",
    kana: "カン    かん.する    と.じる",
    english: "shut, seal ",
  },
  {
    kanji: "緝",
    kana: "シュウ    つむ.ぐ",
    english: "spin thread, bring together, shine ",
  },
  {
    kanji: "緤",
    kana: "セツ    セチ    きずな    つな.ぐ",
    english: "leash ",
  },
  {
    kanji: "緞",
    kana: "ドン    タン",
    english: "damask ",
  },
  {
    kanji: "緲",
    kana: "ビョウ    ミョウ",
    english: "faint, far off ",
  },
  {
    kanji: "緡",
    kana: "ビン    コン    ミン    さし    つりいと    なわ    ぜにさし",
    english: "paper string ",
  },
  {
    kanji: "縅",
    kana: "おど.す",
    english: "the thread/braid (of armour), (kokuji) ",
  },
  {
    kanji: "縊",
    kana: "イ    エイ    くび.る    くび.れる",
    english: "strangle ",
  },
  {
    kanji: "縣",
    kana: "ケン    か.ける",
    english: "county, district, subdivision ",
  },
  {
    kanji: "縡",
    kana: "サイ    こと",
    english: "breath, life ",
  },
  {
    kanji: "縒",
    kana: "シ    サ    よ.る",
    english: "twist ",
  },
  {
    kanji: "縱",
    kana: "ジュウ    たて",
    english: "indulge in, give free reign to ",
  },
  {
    kanji: "縟",
    kana: "ジョク    しげし",
    english: "decoration ",
  },
  {
    kanji: "縉",
    kana: "シン    さしはさ.む",
    english: "thin red cloth, high officer ",
  },
  {
    kanji: "縋",
    kana: "ツイ    すが.る",
    english: "cling, hang on, depend ",
  },
  {
    kanji: "縢",
    kana: "トウ    かが.る    かな    から.げる    むかばき",
    english: "cross-stitch, darn ",
  },
  {
    kanji: "繆",
    kana: "ビュウ    キュウ    ボク    リョウ    あやま.る    まと.う",
    english: "error, wrap around ",
  },
  {
    kanji: "繦",
    kana: "キョウ    むつき    ぜにさし",
    english: "string of coins, child's obi, nappy ",
  },
  {
    kanji: "縻",
    kana: "ビ    ミ    きずな",
    english: "rope ",
  },
  {
    kanji: "縵",
    kana: "マン    バン",
    english: "unpatterned silk, loose ",
  },
  {
    kanji: "縹",
    kana: "ヒョウ    はなだ    はなだ.いろ",
    english: "light blue ",
  },
  {
    kanji: "繃",
    kana: "ホウ    ヒョウ    まく    たば.ねる",
    english: "wrap ",
  },
  {
    kanji: "縷",
    kana: "ル    ロウ    いと",
    english: "thread ",
  },
  {
    kanji: "縲",
    kana: "ルイ",
    english: "tie ",
  },
  {
    kanji: "縺",
    kana: "レン    もつ.れる",
    english: "tangle, knot, fasten, fetter ",
  },
  {
    kanji: "繧",
    kana: "ウン",
    english: "a method of dyeing ",
  },
  {
    kanji: "繝",
    kana: "カン    ケン",
    english: "a method of dyeing ",
  },
  {
    kanji: "繖",
    kana: "サン",
    english: "parasol, umbrella ",
  },
  {
    kanji: "繞",
    kana: "ジョウ    ニョウ    めぐ.る    まわ.る    もとう.る    まとう",
    english: "surround, return ",
  },
  {
    kanji: "繙",
    kana: "ハン    ホン    ひもと.く",
    english: "peruse ",
  },
  {
    kanji: "繚",
    kana: "リョウ    まと.う    めぐ.る",
    english: "put on, twist around ",
  },
  {
    kanji: "繹",
    kana: "エキ    ヤク    たずね.る    ぬ.く",
    english: "pull out ",
  },
  {
    kanji: "繪",
    kana: "カイ    エ",
    english: "picture, drawing, painting, sketch ",
  },
  {
    kanji: "繩",
    kana: "ジョウ    なわ    ただ.す",
    english: "rope, cord ",
  },
  {
    kanji: "繼",
    kana: "ケイ    つ.ぐ    まま-",
    english: "succeed, inherit, patch, graft (tree) ",
  },
  {
    kanji: "繻",
    kana: "シュ    うすぎぬ",
    english: "satin ",
  },
  {
    kanji: "纃",
    kana: "かすり",
    english: "splashed pattern dyeing or weaving ",
  },
  {
    kanji: "緕",
    kana: "かすり",
    english: "splashed pattern dyeing or weaving ",
  },
  {
    kanji: "繽",
    kana: "ヒン    おおし",
    english: "disorder, scattering ",
  },
  {
    kanji: "辮",
    kana: "ベン    ヘン    あ.む",
    english: "braid ",
  },
  {
    kanji: "繿",
    kana: "ラン    ぼろ",
    english: "rags ",
  },
  {
    kanji: "纈",
    kana: "ケツ    ケチ    しぼり",
    english: "tie-dyeing, purblind ",
  },
  {
    kanji: "纉",
    kana: "サン    サブ    つ.ぐ",
    english: "succeed to, inherit ",
  },
  {
    kanji: "續",
    kana: "ゾク    ショク    コウ    キョウ    つづ.く    つづ.ける    つぐ.ない",
    english: "continue, carry on, succeed ",
  },
  {
    kanji: "纒",
    kana: "テン    まつ.わる    まと.う    まと.める    まと.まる",
    english: "wear, wrap, tie, follow around, collect ",
  },
  {
    kanji: "纐",
    kana: "コウ",
    english: "tie-dyeing ",
  },
  {
    kanji: "纓",
    kana: "エイ    ヨウ",
    english: "crown string, breast harness ",
  },
  {
    kanji: "纔",
    kana: "サン    ザン    サイ    わずか",
    english: "a little ",
  },
  {
    kanji: "纖",
    kana: "セン",
    english: "fine, slender, thin kimono ",
  },
  {
    kanji: "纎",
    kana: "セン",
    english: "fine, delicate, minute, graceful ",
  },
  {
    kanji: "纛",
    kana: "トウ    トク    はたぼこ",
    english: "flag, banner ",
  },
  {
    kanji: "纜",
    kana: "ラン    ともづな",
    english: "hawser ",
  },
  {
    kanji: "缸",
    kana: "コウ    かめ",
    english: "urn ",
  },
  {
    kanji: "缺",
    kana: "ケツ    ケン    か.ける    か.く",
    english: "lack, gap, fail ",
  },
  {
    kanji: "罅",
    kana: "カ    ケ    ひび    すき",
    english: "fissure, crack, hole ",
  },
  {
    kanji: "罌",
    kana: "オウ    エイ    ヨウ    もたい    ほとぎ    かめ",
    english: "vase ",
  },
  {
    kanji: "罍",
    kana: "ライ    さかだる",
    english: "liquor jar ",
  },
  {
    kanji: "罎",
    kana: "ドン    タン    びん",
    english: "bottle, vial, jar ",
  },
  {
    kanji: "罐",
    kana: "カン    かま",
    english: "steam boiler (left side only) ",
  },
  {
    kanji: "网",
    kana: "モウ    ボウ    あみ    あみがしら    よんかしら    よこめ",
    english: "net, net or net crown radical (no. 122) ",
  },
  {
    kanji: "罕",
    kana: "カン    まれ",
    english: "bird-catching net, rare ",
  },
  {
    kanji: "罔",
    kana: "モウ    ボウ    あみ    しい.る    ない",
    english: "net ",
  },
  {
    kanji: "罘",
    kana: "フ    うさぎあみ",
    english: "rabbit catching net ",
  },
  {
    kanji: "罟",
    kana: "コ    あみ",
    english: "net ",
  },
  {
    kanji: "罠",
    kana: "ビン    ミン    わな    あみ",
    english: "trap, snare ",
  },
  {
    kanji: "罨",
    kana: "アン    エン    あみ",
    english: "cover ",
  },
  {
    kanji: "罩",
    kana: "トウ    こめ.る",
    english: "fish basket kept in water ",
  },
  {
    kanji: "罧",
    kana: "リン",
    english: "luring fish with a bonfire ",
  },
  {
    kanji: "罸",
    kana: "バツ    バチ    ハツ    はっ.する",
    english: "punishment, penalty ",
  },
  {
    kanji: "羂",
    kana: "ケン    わな",
    english: "trap, snare ",
  },
  {
    kanji: "羆",
    kana: "ヒ    ひぐま    しぐま",
    english: "brown bear ",
  },
  {
    kanji: "羃",
    kana: "ベキ",
    english: "power, exponent ",
  },
  {
    kanji: "羈",
    kana: "キ    ハ    おもが.い    たづな    たび    つな.ぐ",
    english: "reins, connection ",
  },
  {
    kanji: "羇",
    kana: "キ    ハ    おもが.い    たづな    たび    つな.ぐ",
    english: "reins ",
  },
  {
    kanji: "羌",
    kana: "キョウ    ああ    えびす",
    english: "barbarian ",
  },
  {
    kanji: "羔",
    kana: "コウ    こひつじ",
    english: "lamb ",
  },
  {
    kanji: "羝",
    kana: "ラン    テイ    おひつじ",
    english: "male sheep, ram ",
  },
  {
    kanji: "羚",
    kana: "レイ    リョウ    かもしか",
    english: "antelope ",
  },
  {
    kanji: "羣",
    kana: "グン    む.れる    むれ    むら    むら.がる",
    english: "group, crowd, multitude, mob ",
  },
  {
    kanji: "羯",
    kana: "カツ    ケツ",
    english: "barbarian ",
  },
  {
    kanji: "羲",
    kana: "ギ    キ",
    english: "used in proper names ",
  },
  {
    kanji: "羹",
    kana: "コウ    カン    あつもの",
    english: "hot soup ",
  },
  {
    kanji: "羮",
    kana: "コウ    カン    あつもの",
    english: "hot soup ",
  },
  {
    kanji: "羶",
    kana: "セン    なまぐさ.い",
    english: "smelling like a sheep ",
  },
  {
    kanji: "羸",
    kana: "ルイ    つか.れる    よわ.い",
    english: "thin, weak ",
  },
  {
    kanji: "譱",
    kana: "ゼン    よ.い    い.い    よ.く    よし.とする",
    english: "virtuous, good, goodness ",
  },
  {
    kanji: "翅",
    kana: "シ    はね    つばさ",
    english: "(insect) wings, fly, merely ",
  },
  {
    kanji: "翆",
    kana: "スイ    かわせみ    みどり",
    english: "color green, kingfisher ",
  },
  {
    kanji: "翊",
    kana: "ヨク",
    english: "flying, assist, help, respect ",
  },
  {
    kanji: "翕",
    kana: "キュウ    あ.う",
    english: "gather ",
  },
  {
    kanji: "翡",
    kana: "ヒ",
    english: "kingfisher ",
  },
  {
    kanji: "翦",
    kana: "セン",
    english: "scissors, cut, clip, annihilate ",
  },
  {
    kanji: "翩",
    kana: "ヘン    ひるが.える",
    english: "fluttering of flag ",
  },
  {
    kanji: "翳",
    kana: "エイ    かげ    かげ.る    かざ.す    きぬがさ    くも.る    くもり",
    english: "hold aloft ",
  },
  {
    kanji: "翹",
    kana: "ギョウ    あ.げる    つまだ.てる",
    english: "excellence ",
  },
  {
    kanji: "飜",
    kana: "ハン    ホン    ひるが.えす    ひるが.える",
    english: "flip over, upset, capsize ",
  },
  {
    kanji: "耆",
    kana: "キ    シ    おい.る",
    english: "senility ",
  },
  {
    kanji: "耄",
    kana: "ボウ    モウ    おいぼ.れる",
    english: "senility ",
  },
  {
    kanji: "耋",
    kana: "テツ    としより",
    english: "old, elderly ",
  },
  {
    kanji: "耒",
    kana: "ライ    ルイ    き    く    すき    らいすき",
    english: "come, plough, 3-branch tree ",
  },
  {
    kanji: "耘",
    kana: "ウン    くさぎ.る",
    english: "weed ",
  },
  {
    kanji: "耙",
    kana: "ハ",
    english: "forked hoe ",
  },
  {
    kanji: "耜",
    kana: "シ    すき",
    english: "plough ",
  },
  {
    kanji: "耡",
    kana: "ジョ    す.く    すき",
    english: "plough, spade ",
  },
  {
    kanji: "耨",
    kana: "ドウ    ジョク    ヌ    ジュク    くさぎ.る    くわ    すき",
    english: "hoe ",
  },
  {
    kanji: "耿",
    kana: "コウ    ひかり",
    english: "light ",
  },
  {
    kanji: "耻",
    kana: "チ    は.じる    はじ    は.じらう    は.ずかしい",
    english: "shame, humiliation, ashamed ",
  },
  {
    kanji: "聊",
    kana: "リョウ    いささか",
    english: "slightly ",
  },
  {
    kanji: "聆",
    kana: "レイ    リョウ    きく",
    english: "listening, realizing ",
  },
  {
    kanji: "聒",
    kana: "カツ    かまびす.しい",
    english: "noisy ",
  },
  {
    kanji: "聘",
    kana: "ヘイ    へい.する    と.う    め.す",
    english: "invite ",
  },
  {
    kanji: "聚",
    kana: "シュウ    シュ    あつ.まる",
    english: "assemble ",
  },
  {
    kanji: "聟",
    kana: "セイ    むこ",
    english: "son-in-law ",
  },
  {
    kanji: "聢",
    kana: "しか    しかと",
    english: "certainly, (kokuji) ",
  },
  {
    kanji: "聨",
    kana: "レン    つら.なる    つら.ねる",
    english: "var of N3713 ",
  },
  {
    kanji: "聳",
    kana: "ショウ    そび.える",
    english: "rise, tower ",
  },
  {
    kanji: "聲",
    kana: "セイ    ショウ    こえ    こわ-",
    english: "sound, voice, noise, tone, music ",
  },
  {
    kanji: "聰",
    kana: "ソウ    さと.い    みみざと.い",
    english: "wise, fast learner ",
  },
  {
    kanji: "聶",
    kana: "ショウ    ジョウ    ニョウ    ささや.く",
    english: "whisper ",
  },
  {
    kanji: "聹",
    kana: "ネイ",
    english: "noisy, earwax ",
  },
  {
    kanji: "聽",
    kana: "チョウ    き.く    ゆる.す",
    english: "careful enquiry, headstrong ",
  },
  {
    kanji: "聿",
    kana: "イチ    イツ    ふで    ここに    ふでづくり",
    english:
  "brush, finally, self, relate, follow, here, fast, writing brush radical (no. 129) ",
  },
  {
    kanji: "肄",
    kana: "イ    なら.う",
    english: "learn, striving, effort ",
  },
  {
    kanji: "肆",
    kana: "シ    つら.ねる    ほしいまま    みせ",
    english: "four ",
  },
  {
    kanji: "肅",
    kana: "シュク    スク    つつし.む",
    english: "quietly, softly, solemnly ",
  },
  {
    kanji: "肛",
    kana: "コウ",
    english: "anus ",
  },
  {
    kanji: "肓",
    kana: "コウ",
    english:
  "interior region of the body too deep to be reached by acupuncture ",
  },
  {
    kanji: "肚",
    kana: "ト    はら",
    english: "belly, stomach ",
  },
  {
    kanji: "肭",
    kana: "トツ    ジク",
    english: "new moon ",
  },
  {
    kanji: "冐",
    kana: "ボウ    おか.す",
    english:
  "risk, brave, dare, face, defy, (diseases) attack, damage, desecrate, assume (a name) ",
  },
  {
    kanji: "肬",
    kana: "ユ    ユウ    いぼ",
    english: "wart, tumor, goiter, papule ",
  },
  {
    kanji: "胛",
    kana: "コウ    かいがらぼね",
    english: "shoulder blade ",
  },
  {
    kanji: "胥",
    kana: "ショ    ソ    あい    み.る    みな",
    english: "together, mutual, subordinate official ",
  },
  {
    kanji: "胙",
    kana: "ソ    サク    ひもろぎ",
    english: "offerings to gods ",
  },
  {
    kanji: "胝",
    kana: "チ    あかぎれ",
    english: "chap, crack, callus ",
  },
  {
    kanji: "胄",
    kana: "チュウ    かぶと    ちすじ    よつぎ",
    english: "lineage, helmet ",
  },
  {
    kanji: "胚",
    kana: "ハイ    はらみ    はら.む",
    english: "embryo ",
  },
  {
    kanji: "胖",
    kana: "ハン",
    english: "half a sacrifice, ribs, abundant, plentiful ",
  },
  {
    kanji: "脉",
    kana: "ミャク    すじ",
    english: "vein (blood, ore), pulse, hope ",
  },
  {
    kanji: "胯",
    kana: "コウ    カ    コ    また",
    english: "crotch ",
  },
  {
    kanji: "胱",
    kana: "コウ",
    english: "bladder ",
  },
  {
    kanji: "脛",
    kana: "ケイ    すね    はぎ",
    english: "leg, shin ",
  },
  {
    kanji: "脣",
    kana: "シン    くちびる",
    english: "lip ",
  },
  {
    kanji: "脯",
    kana: "フ    ホ    こじし    ほじし",
    english: "dried meat ",
  },
  {
    kanji: "腋",
    kana: "エキ    セキ    わき",
    english: "armpit, side ",
  },
  {
    kanji: "隋",
    kana: "ズイ    スイ    タ",
    english: "name of a Chinese dynasty ",
  },
  {
    kanji: "腆",
    kana: "テン    あつ.い",
    english: "much, abundant, kind, considerate ",
  },
  {
    kanji: "脾",
    kana: "ヒ",
    english: "spleen ",
  },
  {
    kanji: "腓",
    kana: "ヒ    ふくらはぎ    こむら    こぶら",
    english: "calf (of leg) ",
  },
  {
    kanji: "腑",
    kana: "フ    はらわた",
    english: "viscera, bowels ",
  },
  {
    kanji: "胼",
    kana: "ヘン",
    english: "callus, corn ",
  },
  {
    kanji: "腱",
    kana: "ケン    キン",
    english: "tendon ",
  },
  {
    kanji: "腮",
    kana: "サイ    あご    えら",
    english: "jaw ",
  },
  {
    kanji: "腥",
    kana: "セイ    ショウ    なまぐさ.い",
    english: "bloody, smelling of fish, raw smelling ",
  },
  {
    kanji: "腦",
    kana: "ノウ    ドウ    のうずる",
    english: "brain, memory ",
  },
  {
    kanji: "腴",
    kana: "ユ    あぶら    こえ.る",
    english: "fat, grease, growing fat ",
  },
  {
    kanji: "膃",
    kana: "オツ",
    english: "fat, corpulent ",
  },
  {
    kanji: "膈",
    kana: "カク",
    english: "diaphragm ",
  },
  {
    kanji: "膊",
    kana: "ハク    ほじし",
    english: "arm ",
  },
  {
    kanji: "膀",
    kana: "ボウ    ホウ",
    english: "bladder ",
  },
  {
    kanji: "膂",
    kana: "リョ    ロ    せぼね",
    english: "backbone ",
  },
  {
    kanji: "膠",
    kana: "コウ    キョウ    にかわ    にべ",
    english: "glue, isinglass ",
  },
  {
    kanji: "膕",
    kana: "カク    コク    キョク    ひかがみ",
    english: "hollow of knee ",
  },
  {
    kanji: "膤",
    kana: "セツ    そり",
    english: "used in proper names ",
  },
  {
    kanji: "膣",
    kana: "チツ",
    english: "vagina ",
  },
  {
    kanji: "腟",
    kana: "チツ",
    english: "vagina ",
  },
  {
    kanji: "膓",
    kana: "チョウ    はらわた",
    english: "guts, bowels, intestines, viscera ",
  },
  {
    kanji: "膩",
    kana: "ジ    ニ    あぶら    あぶらあか",
    english: "smooth, oily ",
  },
  {
    kanji: "膰",
    kana: "ハン    ひもごり    ひもろぎ",
    english: "offerings to gods ",
  },
  {
    kanji: "膵",
    kana: "スイ",
    english: "pancreas ",
  },
  {
    kanji: "膾",
    kana: "カイ    ケ    なま.す",
    english: "raw fish salad ",
  },
  {
    kanji: "膸",
    kana: "ズイ",
    english: "marrow, pith ",
  },
  {
    kanji: "膽",
    kana: "タン    きも",
    english: "gall bladder, bravery, courage ",
  },
  {
    kanji: "臀",
    kana: "デン    トン    しり",
    english: "buttocks, hips, butt, rear ",
  },
  {
    kanji: "臂",
    kana: "ヒ    ひじ",
    english: "elbow ",
  },
  {
    kanji: "膺",
    kana: "ヨウ    オウ    むね",
    english: "breast, strike ",
  },
  {
    kanji: "臉",
    kana: "ケン    セン    レン",
    english: "area between eye and cheek, face ",
  },
  {
    kanji: "臍",
    kana: "セイ    サイ    へそ    ほぞ",
    english: "navel ",
  },
  {
    kanji: "臑",
    kana: "ジ    ドウ    ジュ    デイ    すね",
    english: "leg, shin ",
  },
  {
    kanji: "臙",
    kana: "エン    のど    べに",
    english: "rouge ",
  },
  {
    kanji: "臘",
    kana: "ロウ",
    english: "12th lunar month ",
  },
  {
    kanji: "臈",
    kana: "ロウ",
    english: "year-end sacrifice, dried meat ",
  },
  {
    kanji: "臚",
    kana: "ロ    リョ",
    english: "skin, tell, report ",
  },
  {
    kanji: "臟",
    kana: "ゾウ    はらわた",
    english: "viscera, bowels ",
  },
  {
    kanji: "臠",
    kana: "レン    みそな.わす    きりみ",
    english: "witness ",
  },
  {
    kanji: "臧",
    kana: "ゾウ    ソウ    よい",
    english: "good, bribe, servant ",
  },
  {
    kanji: "臺",
    kana: "ダイ    タイ    うてな    われ    つかさ",
    english: "stand, counter for vehicles ",
  },
  {
    kanji: "臻",
    kana: "シン    いた.る",
    english: "arrive, reach, gather ",
  },
  {
    kanji: "臾",
    kana: "ユ    ヨ    ヨウ",
    english: "a little while, urging ",
  },
  {
    kanji: "舁",
    kana: "ヨ    か.く",
    english: "bear, carry ",
  },
  {
    kanji: "舂",
    kana: "ショウ    うすつ.く    うすづ.く    つ.く",
    english: "pound (mortar), sink, set (sun) ",
  },
  {
    kanji: "舅",
    kana: "キュウ    しゅうと",
    english: "father-in-law ",
  },
  {
    kanji: "與",
    kana: "ヨ    あた.える    あずか.る    くみ.する    ともに",
    english: "participate in, give, award, impart, provide, cause ",
  },
  {
    kanji: "舊",
    kana: "キュウ    ふる.い    もと",
    english: "old things, old friend, old times, former, ex- ",
  },
  {
    kanji: "舍",
    kana: "セキ    シャ    やど.る",
    english: "inn, hut, house, mansion ",
  },
  {
    kanji: "舐",
    kana: "シ    ねぶ.る    な.める",
    english: "lick, lap up, burn up, taste, undergo, underrate, despise ",
  },
  {
    kanji: "舖",
    kana: "ホ",
    english: "shop, store ",
  },
  {
    kanji: "舩",
    kana: "セン    ふね    ふな-",
    english: "boat, ship, vessel ",
  },
  {
    kanji: "舫",
    kana: "ホウ    もや.う    もやいぶね",
    english: "moor, berth ",
  },
  {
    kanji: "舸",
    kana: "カ    ふね",
    english: "large boat ",
  },
  {
    kanji: "舳",
    kana: "ジク    チク    チュウ    へ    へさき    とも",
    english: "bow, prow ",
  },
  {
    kanji: "艀",
    kana: "フ    はしけ",
    english: "sampan, lighter, barge ",
  },
  {
    kanji: "艙",
    kana: "ソウ",
    english: "hold (ship) ",
  },
  {
    kanji: "艘",
    kana: "ショウ    シュウ    ソウ    ふね",
    english: "counter for ships ",
  },
  {
    kanji: "艝",
    kana: "そり",
    english: "sled, sleigh ",
  },
  {
    kanji: "艚",
    kana: "ソウ",
    english: "boat ",
  },
  {
    kanji: "艟",
    kana: "ドウ    ショウ    トウ    いくさぶね",
    english: "fighting ship ",
  },
  {
    kanji: "艤",
    kana: "ギ    ふなよそおい",
    english: "landing a boat ",
  },
  {
    kanji: "艢",
    kana: "ロ    ショウ    ゾウ    とも    ほばしら",
    english: "bow, stern ",
  },
  {
    kanji: "艨",
    kana: "モウ    ボウ    いくさぶね",
    english: "fighting ship ",
  },
  {
    kanji: "艪",
    kana: "ロ    やぐら    かい",
    english: "oar, tower ",
  },
  {
    kanji: "艫",
    kana: "ロ    とも    へさき",
    english: "bow, prow, stern ",
  },
  {
    kanji: "舮",
    kana: "ロ    とも    へさき",
    english: "bow or prow of boat ",
  },
  {
    kanji: "艱",
    kana: "カン    ケン    なや.む    かた.い    なやみ",
    english: "difficult, be distressed ",
  },
  {
    kanji: "艷",
    kana: "エン    つや    なま.めかしい    あで.やか    つや.めく    なま.めく",
    english: "luster, glaze, polish, charm, colorful, captivating ",
  },
  {
    kanji: "艸",
    kana: "ソウ    くさ    くさかんむり    そうこう",
    english: "grass, plants, grass radical (no. 140) ",
  },
  {
    kanji: "艾",
    kana: "カイ    ゲイ    もぐさ    よもぎ    おさ.める    か.る",
    english: "moxa, sagebrush, wormwood, mugwort ",
  },
  {
    kanji: "芍",
    kana: "シャク",
    english: "peony ",
  },
  {
    kanji: "芒",
    kana: "ボウ    コウ    モウ    すすき    のぎ    のげ",
    english: "pampas grass, beard (grain) ",
  },
  {
    kanji: "芫",
    kana: "ゲン    ガン",
    english: "type of vetch ",
  },
  {
    kanji: "芟",
    kana: "セン    サン    か.る",
    english: "cut, clip, trim, harvest, mow ",
  },
  {
    kanji: "芻",
    kana: "スウ    シュウ    ス    まぐさ",
    english: "grass cutting, hay ",
  },
  {
    kanji: "芬",
    kana: "フン    かおり    こうば.しい",
    english: "perfume ",
  },
  {
    kanji: "苡",
    kana: "イ    シ    ワ    くさ",
    english: "adlay, plantain ",
  },
  {
    kanji: "苣",
    kana: "キョ    ちしゃ",
    english: "torch ",
  },
  {
    kanji: "苟",
    kana: "コウ    ク    いやしく.も",
    english: "any, at all, in the least ",
  },
  {
    kanji: "苴",
    kana: "ソ    サ    シャ    ショ    つと    あさ",
    english: "husk, bract, straw wrapper, souvenir gift, bribe ",
  },
  {
    kanji: "苳",
    kana: "トウ    ふき",
    english: "butterbur, bog rhubarb ",
  },
  {
    kanji: "苺",
    kana: "バイ    マイ    いちご",
    english: "strawberry ",
  },
  {
    kanji: "莓",
    kana: "バイ    マイ    いちご",
    english: "wild strawberry ",
  },
  {
    kanji: "范",
    kana: "ハン    いがた",
    english: "bee, law, casting mould ",
  },
  {
    kanji: "苻",
    kana: "フ",
    english: "kudzu-like plant ",
  },
  {
    kanji: "苹",
    kana: "ヘイ    ビョウ    ホウ    ほ",
    english: "duckweed, mugwort ",
  },
  {
    kanji: "苞",
    kana: "ホウ    ヒョウ    つと",
    english: "husk, bract, straw wrapper, souvenir gift, bribe ",
  },
  {
    kanji: "茆",
    kana: "エン    ボウ    その    かや    ぬなわ",
    english: "garden, farm, yard ",
  },
  {
    kanji: "苜",
    kana: "モク    ボク",
    english: "clover, medic ",
  },
  {
    kanji: "苙",
    kana: "リュウ    キュウ",
    english: "type of herb, pigsty ",
  },
  {
    kanji: "茵",
    kana: "イン    しとね",
    english: "cushion, mattress ",
  },
  {
    kanji: "茴",
    kana: "ウイ    カイ",
    english: "fennel ",
  },
  {
    kanji: "茖",
    kana: "カク",
    english: "mountain leek, garlic ",
  },
  {
    kanji: "茲",
    kana: "シ    ジ    ここ.に    し.げる",
    english: "here ",
  },
  {
    kanji: "茱",
    kana: "シュ",
    english: "river ginger tree, oleaster ",
  },
  {
    kanji: "荀",
    kana: "ジュン    シュン",
    english: "type of plant, proper name ",
  },
  {
    kanji: "茹",
    kana: "ジョ    ニョ    ゆ.でる    う.でる",
    english: "boil, seethe ",
  },
  {
    kanji: "荐",
    kana: "セン    しきりに",
    english: "mat, repeatedly ",
  },
  {
    kanji: "荅",
    kana: "トウ    あずき    こた.える",
    english: "adzuki beans, thick ",
  },
  {
    kanji: "茯",
    kana: "フク    ブク    ヒ    ビ",
    english: "type of mushroom ",
  },
  {
    kanji: "茫",
    kana: "ボウ    とお.い",
    english: "wide, extensive ",
  },
  {
    kanji: "茗",
    kana: "ミョウ    メイ    ちゃ",
    english: "tea ",
  },
  {
    kanji: "茘",
    kana: "レイ    リ    レン    おおにら",
    english: "scallion, small onion ",
  },
  {
    kanji: "莅",
    kana: "リ    レイ    るい    のぞ.む    つ.く",
    english: "proceed to, assume a post ",
  },
  {
    kanji: "莚",
    kana: "エン    むしろ",
    english: "straw mat ",
  },
  {
    kanji: "莪",
    kana: "ガ",
    english: "type of thistle ",
  },
  {
    kanji: "莟",
    kana: "ガン    カン    つぼみ",
    english: "bud (plant) ",
  },
  {
    kanji: "莢",
    kana: "キョウ    さや",
    english: "pod, hull, husk, shell, case ",
  },
  {
    kanji: "莖",
    kana: "ケイ    キョウ    くき",
    english: "stem, stalk ",
  },
  {
    kanji: "茣",
    kana: "ゴ",
    english: "mat, matting ",
  },
  {
    kanji: "莎",
    kana: "サ    シャ    はますげ",
    english: "sedge ",
  },
  {
    kanji: "莇",
    kana: "ジョ    あさがら",
    english: "Chinese matrimony vine, tilling public fields, corvee, surname ",
  },
  {
    kanji: "莊",
    kana: "ソウ    ショウ    チャン    ほうき    おごそ.か",
    english: "broom ",
  },
  {
    kanji: "荼",
    kana: "タ    ズ    ト    ダ    にがな",
    english: "a weed ",
  },
  {
    kanji: "莵",
    kana: "ト    ツ    うさぎ",
    english: "dodder (plant) ",
  },
  {
    kanji: "荳",
    kana: "トウ    ズ    まめ",
    english: "bean, nutmeg ",
  },
  {
    kanji: "荵",
    kana: "ニン    ジン    しのぶ",
    english: "hare's foot fern ",
  },
  {
    kanji: "莠",
    kana: "ユウ    はぐさ",
    english: "appears good but is bad, type of weed which resembles rice ",
  },
  {
    kanji: "莨",
    kana: "ロウ    たばこ",
    english: "tobacco ",
  },
  {
    kanji: "菴",
    kana: "アン    いおり    いお",
    english: "hermitage ",
  },
  {
    kanji: "萓",
    kana: "ギ",
    english: "day lily ",
  },
  {
    kanji: "菎",
    kana: "コン",
    english: "a kind of fragrant herb ",
  },
  {
    kanji: "菽",
    kana: "シュク    まめ",
    english: "beans ",
  },
  {
    kanji: "萃",
    kana: "スイ    サイ    あつ.まる",
    english: "collect, gather, assemble ",
  },
  {
    kanji: "菘",
    kana: "スウ    シュウ",
    english: "type of rape plant ",
  },
  {
    kanji: "萋",
    kana: "セイ    サイ",
    english: "luxuriant growth, beautiful ",
  },
  {
    kanji: "菁",
    kana: "セイ    ショウ",
    english: "turnip ",
  },
  {
    kanji: "菷",
    kana: "シュウ    ソウ    ほうき",
    english: "broom ",
  },
  {
    kanji: "萇",
    kana: "チョウ",
    english: "type of plant ",
  },
  {
    kanji: "菠",
    kana: "ハ    ホ    ほうれんそう",
    english: "spinach ",
  },
  {
    kanji: "菲",
    kana: "ヒ    うす.い",
    english: "thin, inferior ",
  },
  {
    kanji: "萍",
    kana: "ヘイ    ヒョウ    うきくさ",
    english: "floating plants ",
  },
  {
    kanji: "萢",
    kana: "ヤチ    ヤラ",
    english: "bog, wetlands, used in proper names ",
  },
  {
    kanji: "萠",
    kana: "ホウ    も.える    きざ.す    めばえ    きざ.し",
    english: "show symptoms of, sprout, bud, malt ",
  },
  {
    kanji: "莽",
    kana: "ボウ    モウ    くさ",
    english: "grass, grassy field ",
  },
  {
    kanji: "萸",
    kana: "ユ",
    english: "oleaster, river ginger tree ",
  },
  {
    kanji: "蔆",
    kana: "リョウ    ひし",
    english: "water chestnut ",
  },
  {
    kanji: "菻",
    kana: "リン",
    english: "kind of thistle ",
  },
  {
    kanji: "葭",
    kana: "カ    よし    あし",
    english: "reed ",
  },
  {
    kanji: "萪",
    kana: "カ",
    english: "type of wisteria ",
  },
  {
    kanji: "萼",
    kana: "ガク    うてな",
    english: "calyx, cup ",
  },
  {
    kanji: "蕚",
    kana: "ガク    うてな",
    english: "calyx, cup ",
  },
  {
    kanji: "蒄",
    kana: "カン",
    english: "type of plant ",
  },
  {
    kanji: "葷",
    kana: "クン",
    english: "garlic ",
  },
  {
    kanji: "葫",
    kana: "コ",
    english: "garlic ",
  },
  {
    kanji: "蒭",
    kana: "シュウ    ス    スウ    まぐさ",
    english: "to cut grass, hay, fodder ",
  },
  {
    kanji: "葮",
    kana: "ダン    タン    むくげ",
    english: "rose of sharon, althea ",
  },
  {
    kanji: "蒂",
    kana: "テイ    タイ    へた",
    english: "peduncle, stem of plants ",
  },
  {
    kanji: "葩",
    kana: "ハ    はな",
    english: "flower, petal ",
  },
  {
    kanji: "葆",
    kana: "ホウ    ホ    し.げる",
    english: "dense growth, keep, adhere to, conceal ",
  },
  {
    kanji: "萬",
    kana: "マン    バン    よろず",
    english: 10000,
  },
  {
    kanji: "葯",
    kana: "ヤク",
    english: "pollen pod at tip of stamen, type of tall grass ",
  },
  {
    kanji: "葹",
    kana: "シ    おなもみ",
    english: "cocklebur ",
  },
  {
    kanji: "萵",
    kana: "ワ",
    english: "lettuce ",
  },
  {
    kanji: "蓊",
    kana: "オオ    オウ    とう",
    english: "flower stalk, vigorous growth ",
  },
  {
    kanji: "葢",
    kana: "ガイ    カイ    コウ    ふた    けだ.し    おお.う    かさ    かこう",
    english: "cover, lid, flap ",
  },
  {
    kanji: "蒹",
    kana: "ケン    おぎ",
    english: "type of reed ",
  },
  {
    kanji: "蒿",
    kana: "コウ    よもぎ",
    english: "mugwort ",
  },
  {
    kanji: "蒟",
    kana: "コン    ク",
    english: "devil's tongue (plant) ",
  },
  {
    kanji: "蓙",
    kana: "ザ    ござ",
    english: "mat, matting, (kokuji) ",
  },
  {
    kanji: "蓍",
    kana: "シ    めどぎ",
    english: "yarrow, sericea, stalks used for divination ",
  },
  {
    kanji: "蒻",
    kana: "ジャク    ニャク",
    english: "a kind of water plant ",
  },
  {
    kanji: "蓚",
    kana: "シュウ",
    english: "(used only in compounds) ",
  },
  {
    kanji: "蓐",
    kana: "ジョク    ニク    しとね",
    english: "bed ",
  },
  {
    kanji: "蓁",
    kana: "シン",
    english: "dense growth, thicket ",
  },
  {
    kanji: "蓆",
    kana: "セキ    むしろ",
    english: "straw mat, matting ",
  },
  {
    kanji: "蓖",
    kana: "ヒ    ヘイ",
    english: "castor-oil plant ",
  },
  {
    kanji: "蒡",
    kana: "ボウ    ホウ",
    english: "burdock ",
  },
  {
    kanji: "蔡",
    kana: "サイ",
    english: "type of tortoise used for divination ",
  },
  {
    kanji: "蓿",
    kana: "シュク",
    english: "clover, medic ",
  },
  {
    kanji: "蓴",
    kana: "シュン    ぬなわ",
    english: "type of water plant ",
  },
  {
    kanji: "蔗",
    kana: "シャ    ショ    さとうきび",
    english: "sugar cane ",
  },
  {
    kanji: "蔘",
    kana: "シン    サン",
    english: "luxurious growth of grass ",
  },
  {
    kanji: "蔬",
    kana: "ソ    ショ    あおもの",
    english: "greens, vegetables ",
  },
  {
    kanji: "蔟",
    kana: "ゾク    ソウ    まぶし",
    english: "gather together ",
  },
  {
    kanji: "蔕",
    kana: "テイ    タイ    へた",
    english: "calyx, stem ",
  },
  {
    kanji: "蔔",
    kana: "フク    ホク",
    english: "giant radish, daikon ",
  },
  {
    kanji: "蓼",
    kana: "シン    リク    リョウ    たで",
    english: "luxurious grass, a smartweed ",
  },
  {
    kanji: "蕀",
    kana: "キョク",
    english: "milwort ",
  },
  {
    kanji: "蕣",
    kana: "シュン    むくげ    あさがお",
    english: "rose of sharon, althea ",
  },
  {
    kanji: "蕘",
    kana: "ジョウ    たきぎ    きこり",
    english: "firewood ",
  },
  {
    kanji: "蕈",
    kana: "ジン    シン    きのこ    たけ",
    english: "mushroom, toadstool, fungus ",
  },
  {
    kanji: "蕁",
    kana: "ジン    タン",
    english: "a kind of grass ",
  },
  {
    kanji: "蘂",
    kana: "ズイ    しべ",
    english: "pistil, stamen ",
  },
  {
    kanji: "蕋",
    kana: "ズイ    しべ",
    english: "pistil, stamen ",
  },
  {
    kanji: "蕕",
    kana: "ユウ    ユ",
    english: "foul-smelling grass ",
  },
  {
    kanji: "薀",
    kana: "ウン    オン    たくわ.える    つ.む",
    english: "pile up, store, hornwort ",
  },
  {
    kanji: "薤",
    kana: "カイ    らっきょう    にら",
    english: "scallion, shallot ",
  },
  {
    kanji: "薈",
    kana: "カイ    ワイ",
    english: "luxuriant vegetation ",
  },
  {
    kanji: "薑",
    kana: "キョウ    コウ    はじかみ",
    english: "ginger ",
  },
  {
    kanji: "薊",
    kana: "ケイ    キ    カイ    ケ    あざみ    さく    とげ",
    english: "thistle ",
  },
  {
    kanji: "薨",
    kana: "コウ    こう.じる    みま.かる",
    english: "die ",
  },
  {
    kanji: "蕭",
    kana: "ショウ    よもぎ",
    english: "a weed, mugwort, lonely, silent, calm ",
  },
  {
    kanji: "薔",
    kana: "バ    ショウ    ショク    ソウ    みずたで",
    english: "a kind of grass ",
  },
  {
    kanji: "薛",
    kana: "セツ",
    english: "type of mugwort ",
  },
  {
    kanji: "藪",
    kana: "ソウ    やぶ",
    english: "thicket, bush, underbrush, grove ",
  },
  {
    kanji: "薇",
    kana: "ラ    ビ    ぜんまい",
    english: "an edible fern ",
  },
  {
    kanji: "薜",
    kana: "ヘイ",
    english: "type of vine ",
  },
  {
    kanji: "蕷",
    kana: "ヨ    いも",
    english: "potato ",
  },
  {
    kanji: "蕾",
    kana: "ライ    つぼみ",
    english: "bud (plants, mushrooms not yet opened) ",
  },
  {
    kanji: "薐",
    kana: "ロウ    ほうれんそう",
    english: "spinach ",
  },
  {
    kanji: "藉",
    kana: "シャ    セキ    ジャク    かり.る    ふ.む",
    english: "carpet, lend, borrow, make excuses, spread out ",
  },
  {
    kanji: "薺",
    kana: "セイ    ザイ    ひと    ととの.える    なずな",
    english: "water-chestnuts, caltrop ",
  },
  {
    kanji: "藏",
    kana: "ゾウ    ソウ    くら    おさ.める    かく.れる",
    english: "hide, own, have, possess ",
  },
  {
    kanji: "薹",
    kana: "タイ    とう    あぶらな",
    english: "seed pod ",
  },
  {
    kanji: "藐",
    kana: "ビョウ    バク    かろ.んじる    とお.い",
    english: "make light of, far away, beautiful ",
  },
  {
    kanji: "藕",
    kana: "グウ    グ    ゴウ    はすのね",
    english: "lotus, lotus root, arrowroot ",
  },
  {
    kanji: "藝",
    kana: "ゲイ    ウン    う.える    のり    わざ",
    english: "art, craft, performance, acting, trick, stunt ",
  },
  {
    kanji: "藥",
    kana: "ヤク    くすり",
    english: "medicine, chemical, enamel, gunpowder, benefit ",
  },
  {
    kanji: "藜",
    kana: "レイ    あかざ",
    english: "goosefoot, wild spinach ",
  },
  {
    kanji: "藹",
    kana: "アイ",
    english: "flourishing, luxuriant, harmonize, graceful, noble, refined ",
  },
  {
    kanji: "蘊",
    kana: "ウン    つ.む",
    english: "pile up ",
  },
  {
    kanji: "蘓",
    kana: "ソ    ス    よみがえ.る",
    english: "be resurrected, resuscitated, revived ",
  },
  {
    kanji: "蘋",
    kana: "ヒン    うきくさ",
    english: "duckweed ",
  },
  {
    kanji: "藾",
    kana: "ライ",
    english: "type of mugwort, cover, hide ",
  },
  {
    kanji: "藺",
    kana: "リン    い",
    english: "rush, used for tatami covers, surname ",
  },
  {
    kanji: "蘆",
    kana: "ロ    あし    よし",
    english: "reed, rush ",
  },
  {
    kanji: "蘢",
    kana: "ロウ",
    english: "dragon grass ",
  },
  {
    kanji: "蘚",
    kana: "セン    こけ",
    english: "moss ",
  },
  {
    kanji: "蘰",
    kana: "かつら",
    english: "surname ",
  },
  {
    kanji: "蘿",
    kana: "ラ    つた",
    english: "ivy ",
  },
  {
    kanji: "虍",
    kana: "コ    とらかんむり    とらがしら",
    english: "tiger spots, mottled, tiger or tiger crown radical (no. 141) ",
  },
  {
    kanji: "乕",
    kana: "コ    とら",
    english: "tiger, brave, fierce, surname ",
  },
  {
    kanji: "虔",
    kana: "ケン    つつし.む",
    english: "respect ",
  },
  {
    kanji: "號",
    kana: "コウ    さけ.ぶ    よびな",
    english: "mark, sign, symbol, number ",
  },
  {
    kanji: "虧",
    kana: "キ    か.ける",
    english: "wane (moon) ",
  },
  {
    kanji: "虱",
    kana: "シツ    しらみ",
    english: "lice, vermin ",
  },
  {
    kanji: "蚓",
    kana: "ズ    イン    みみず",
    english: "earthworm ",
  },
  {
    kanji: "蚣",
    kana: "コウ    ショウ",
    english: "centipede, grasshopper ",
  },
  {
    kanji: "蚩",
    kana: "シ",
    english: "fool, make a fool of ",
  },
  {
    kanji: "蚪",
    kana: "ト",
    english: "tadpole ",
  },
  {
    kanji: "蚋",
    kana: "ゼイ    ネイ    ゼツ    ネチ    ぶゆ    ぶよ    ぶと    か",
    english: "gnat, sand fly ",
  },
  {
    kanji: "蚌",
    kana: "ボウ    ホウ    ビョウ    はまぐり    どぶが.い",
    english: "clam ",
  },
  {
    kanji: "蚶",
    kana: "カン",
    english: "ark shell ",
  },
  {
    kanji: "蚯",
    kana: "キュウ    みみず",
    english: "earthworm ",
  },
  {
    kanji: "蛄",
    kana: "コ",
    english: "mole cricket, cicada ",
  },
  {
    kanji: "蛆",
    kana: "ソ    ショ    うじ",
    english: "worm, grub, maggot ",
  },
  {
    kanji: "蚰",
    kana: "ユウ",
    english: "millipede ",
  },
  {
    kanji: "蛉",
    kana: "レイ",
    english: "dragonfly, moon moth ",
  },
  {
    kanji: "蠣",
    kana: "レイ    かき",
    english: "oyster ",
  },
  {
    kanji: "蚫",
    kana: "ホウ    あわび",
    english: "abalone, dried fish, surname ",
  },
  {
    kanji: "蛔",
    kana: "カイ    ユウ    かいちゅう    はらのむし",
    english: "intestinal worms ",
  },
  {
    kanji: "蛞",
    kana: "カツ",
    english: "kind of slug ",
  },
  {
    kanji: "蛩",
    kana: "キョウ    こおろぎ",
    english: "cricket ",
  },
  {
    kanji: "蛬",
    kana: "キョウ    ころぎ    きりぎりす",
    english: "cricket ",
  },
  {
    kanji: "蛟",
    kana: "コウ    キョウ    みずち",
    english: "dragon ",
  },
  {
    kanji: "蛯",
    kana: "ケン    えび",
    english: "shrimp ",
  },
  {
    kanji: "蜒",
    kana: "エン    タン",
    english: "meandering, serpentine ",
  },
  {
    kanji: "蜆",
    kana: "ケン    しじみ",
    english: "fresh-water clam ",
  },
  {
    kanji: "蜈",
    kana: "ゴ",
    english: "centipede ",
  },
  {
    kanji: "蜀",
    kana: "ショク    ゾク    いもむし",
    english: "green caterpillar, Szechwan ",
  },
  {
    kanji: "蜃",
    kana: "シン",
    english: "clam ",
  },
  {
    kanji: "蛻",
    kana: "ゼイ    セイ    タイ    もぬ.ける    ぬけがら",
    english: "insect moulting ",
  },
  {
    kanji: "蜑",
    kana: "タン    あま",
    english: "egg ",
  },
  {
    kanji: "蜉",
    kana: "フ",
    english: "kind of ant, may fly ",
  },
  {
    kanji: "蜍",
    kana: "ショ",
    english: "toad ",
  },
  {
    kanji: "蛹",
    kana: "ヨウ    さなぎ",
    english: "chrysalis, pupa ",
  },
  {
    kanji: "蜊",
    kana: "リ    あさり",
    english: "a kind of bivalve ",
  },
  {
    kanji: "蜴",
    kana: "エキ",
    english: "lizard ",
  },
  {
    kanji: "蜿",
    kana: "エン    ワン",
    english: "meandering ",
  },
  {
    kanji: "蜷",
    kana: "ケン    にな",
    english: "an edible river snail ",
  },
  {
    kanji: "蜻",
    kana: "セイ",
    english: "dragonfly ",
  },
  {
    kanji: "蜥",
    kana: "シャク    セキ    とかげ",
    english: "a lizard ",
  },
  {
    kanji: "蜩",
    kana: "チョウ    ひぐらし    せみ",
    english: "clear-toned cicada ",
  },
  {
    kanji: "蜚",
    kana: "ヒ    あぶらむし",
    english: "wilwild ",
  },
  {
    kanji: "蝠",
    kana: "フク",
    english: "bat ",
  },
  {
    kanji: "蝟",
    kana: "イ    はりねずみ",
    english: "hedgehog ",
  },
  {
    kanji: "蝸",
    kana: "カ    かたつむり",
    english: "snail ",
  },
  {
    kanji: "蝌",
    kana: "カ",
    english: "tadpole ",
  },
  {
    kanji: "蝎",
    kana: "カツ    さそり    すくもむし",
    english: "scorpion ",
  },
  {
    kanji: "蝴",
    kana: "コ",
    english: "butterfly ",
  },
  {
    kanji: "蝗",
    kana: "コウ    いなご    ばった",
    english: "locust ",
  },
  {
    kanji: "蝨",
    kana: "シツ    しらみ",
    english: "lice, vermin ",
  },
  {
    kanji: "蝮",
    kana: "フク    まむし",
    english: "viper, adder, asp ",
  },
  {
    kanji: "蝙",
    kana: "ヘン    こうもり",
    english: "bat ",
  },
  {
    kanji: "蝓",
    kana: "ユ",
    english: "slug, snail ",
  },
  {
    kanji: "蝣",
    kana: "ユウ",
    english: "mayfly ",
  },
  {
    kanji: "蝪",
    kana: "エキ",
    english: "lizard ",
  },
  {
    kanji: "蠅",
    kana: "ヨウ    はえ    はい",
    english: "fly ",
  },
  {
    kanji: "螢",
    kana: "ケイ    ほたる",
    english: "firefly ",
  },
  {
    kanji: "螟",
    kana: "メイ    ミョウ    ずいむし",
    english: "injurious parasite ",
  },
  {
    kanji: "螂",
    kana: "ロウ",
    english: "mantis, also N4143 ",
  },
  {
    kanji: "螯",
    kana: "ゴウ    はさみ",
    english: "claws ",
  },
  {
    kanji: "蟋",
    kana: "シツ",
    english: "cricket, grasshopper ",
  },
  {
    kanji: "螽",
    kana: "シュウ    いなご",
    english: "grasshopper ",
  },
  {
    kanji: "蟀",
    kana: "シュツ",
    english: "cricket, grasshopper ",
  },
  {
    kanji: "蟐",
    kana: "ジョウ    もむ",
    english: "toad, mantis ",
  },
  {
    kanji: "雖",
    kana: "スイ    いえど.も    これ",
    english: "although, however ",
  },
  {
    kanji: "螫",
    kana: "セキ    カク    さ.す",
    english: "bee sting ",
  },
  {
    kanji: "蟄",
    kana: "チツ    チュウ    ちっ.する    かく.れる",
    english: "hibernation of insects ",
  },
  {
    kanji: "螳",
    kana: "トウ",
    english: "mantis ",
  },
  {
    kanji: "蟇",
    kana: "バ    マ    ひき",
    english: "toad ",
  },
  {
    kanji: "蟆",
    kana: "バ    マ    ひき",
    english: "toad ",
  },
  {
    kanji: "螻",
    kana: "ロウ    ル    けら",
    english: "mole cricket ",
  },
  {
    kanji: "蟯",
    kana: "ギョウ    ジョウ",
    english: "intestinal worm ",
  },
  {
    kanji: "蟲",
    kana: "チュウ    キ    むし",
    english: "insect, bug, temper ",
  },
  {
    kanji: "蟠",
    kana: "ハン    わだかま.る    わらじむし",
    english: "coiled up ",
  },
  {
    kanji: "蠏",
    kana: "カイ    かに",
    english: "crab ",
  },
  {
    kanji: "蠍",
    kana: "カツ    さそり",
    english: "scorpion ",
  },
  {
    kanji: "蟾",
    kana: "セン",
    english: "toad ",
  },
  {
    kanji: "蟶",
    kana: "テイ    まて",
    english: "razor clam ",
  },
  {
    kanji: "蟷",
    kana: "トウ",
    english: "mantis ",
  },
  {
    kanji: "蠎",
    kana: "ボウ    モウ    うわばみ    おろち",
    english: "python, boa constrictor ",
  },
  {
    kanji: "蟒",
    kana: "ボウ    モウ    うわばみ    おろち",
    english: "boa constrictor, python ",
  },
  {
    kanji: "蠑",
    kana: "エイ",
    english: "newt, turban shell ",
  },
  {
    kanji: "蠖",
    kana: "ワク    カク",
    english: "inchworm, geometer ",
  },
  {
    kanji: "蠕",
    kana: "ゼン    ダ    ネン    ジュ    ニュ    うごめ.く",
    english: "crawling of a worm ",
  },
  {
    kanji: "蠢",
    kana: "シュン    うご.めく",
    english: "wriggle ",
  },
  {
    kanji: "蠡",
    kana: "レイ    ライ    リ    ラ    にな    ひさご",
    english: "worm-eaten, conch ",
  },
  {
    kanji: "蠱",
    kana: "コ    ヤ",
    english: "rice worm, lead astray ",
  },
  {
    kanji: "蠶",
    kana: "サン    テン    かいこ    こ",
    english: "silkworms ",
  },
  {
    kanji: "蠹",
    kana: "ト    きくいむし",
    english: "moth, insects which eat into clot ",
  },
  {
    kanji: "蠧",
    kana: "ト    きくいむし",
    english: "worm-eaten ",
  },
  {
    kanji: "蠻",
    kana: "バン    えびす",
    english: "barbarian ",
  },
  {
    kanji: "衄",
    kana: "ジク    はなぢ",
    english: "nosebleed ",
  },
  {
    kanji: "衂",
    kana: "ジク    はなぢ",
    english: "nosebleed ",
  },
  {
    kanji: "衒",
    kana: "ゲン    ケン    てら.う",
    english: "show off, display, pretend ",
  },
  {
    kanji: "衙",
    kana: "ガ    ギョ    ゴ",
    english: "government office ",
  },
  {
    kanji: "衞",
    kana: "エイ    エ    まも.る",
    english: "defense ",
  },
  {
    kanji: "衢",
    kana: "ク    みち",
    english: "crossroads ",
  },
  {
    kanji: "衫",
    kana: "サン",
    english: "thin kimono ",
  },
  {
    kanji: "袁",
    kana: "エン    オン",
    english: "long kimono ",
  },
  {
    kanji: "衾",
    kana: "キン    ふすま",
    english: "quilt, bedding ",
  },
  {
    kanji: "袞",
    kana: "コン",
    english: "imperial robes ",
  },
  {
    kanji: "衵",
    kana: "ジツ    あこめ",
    english: "everyday clothing, underwear ",
  },
  {
    kanji: "衽",
    kana: "ジン    ニン    こくび    おくみ    しとね",
    english: "neck of a garment, gusset, gore ",
  },
  {
    kanji: "袵",
    kana: "ジン    ニン    こくび    おくみ    しとね",
    english: "neck of a garment, gusset, gore ",
  },
  {
    kanji: "衲",
    kana: "ドウ    ノウ    ころも",
    english: "mend, priestly vestments, priest ",
  },
  {
    kanji: "袂",
    kana: "ベイ    ケツ    たまと    たもと",
    english: "sleeve, foot (of hill), edge ",
  },
  {
    kanji: "袗",
    kana: "シン",
    english: "thin kimono, embroidery ",
  },
  {
    kanji: "袒",
    kana: "タン    かたぬ.ぐ",
    english: "baring the shoulder, strip to waist ",
  },
  {
    kanji: "袮",
    kana: "デイ    ネ",
    english: "ancestral shrine ",
  },
  {
    kanji: "袙",
    kana: "バツ    ハ    あこめ",
    english: "warrior's headband ",
  },
  {
    kanji: "袢",
    kana: "ハン",
    english: "summer kimono, short clothing ",
  },
  {
    kanji: "袍",
    kana: "ホウ    わたいれ",
    english: "coat ",
  },
  {
    kanji: "袤",
    kana: "ボウ    ながさ",
    english: "length ",
  },
  {
    kanji: "袰",
    kana: "ほろ",
    english: "hood, top, awning, cover ",
  },
  {
    kanji: "袿",
    kana: "ケイ    うちき    うちかけ    うちぎ",
    english: "ancient ordinary kimono ",
  },
  {
    kanji: "袱",
    kana: "フク",
    english: "cloth wrapper ",
  },
  {
    kanji: "裃",
    kana: "かみしも",
    english: "old ceremonial garb, samurai garb, (kokuji) ",
  },
  {
    kanji: "裄",
    kana: "ゆき",
    english: "sleeve length, (kokuji) ",
  },
  {
    kanji: "裔",
    kana: "エイ    すそ",
    english: "descendant, border ",
  },
  {
    kanji: "裘",
    kana: "キュウ    グ    かわごろも",
    english: "leather clothing ",
  },
  {
    kanji: "裙",
    kana: "クン    もすそ",
    english: "hem, underwear ",
  },
  {
    kanji: "裝",
    kana: "ソウ    ショウ    よそお.う    よそお.い",
    english: "dress, pretend, disguise, profess ",
  },
  {
    kanji: "裹",
    kana: "ホウ    カ    つつ.む",
    english: "wrap, pack up, cover, conceal ",
  },
  {
    kanji: "褂",
    kana: "ケイ    カイ    ケ    うちき    うちかけ",
    english: "ancient ordinary kimono ",
  },
  {
    kanji: "裼",
    kana: "セキ    テイ    はだぬ.ぐ",
    english: "to bare the shoulder ",
  },
  {
    kanji: "裴",
    kana: "ハイ    ヒ    ベ    たちもとお.る",
    english: "long robes ",
  },
  {
    kanji: "裨",
    kana: "ヒ    おぎな.う    たす.ける    ます",
    english: "help ",
  },
  {
    kanji: "裲",
    kana: "リョウ    うちかけ",
    english: "ancient robe ",
  },
  {
    kanji: "褄",
    kana: "つま",
    english: "skirt, (kokuji) ",
  },
  {
    kanji: "褊",
    kana: "ヘン    せま.い",
    english: "narrow, small ",
  },
  {
    kanji: "褓",
    kana: "ホ    ホウ    むつき",
    english: "diaper ",
  },
  {
    kanji: "襃",
    kana: "ホウ    ほ.める",
    english: "praise, extol ",
  },
  {
    kanji: "褞",
    kana: "ウン    オン    ぬのこ",
    english: "robe ",
  },
  {
    kanji: "褥",
    kana: "ジョク    しとね",
    english: "cushion, mattress, bedding ",
  },
  {
    kanji: "褪",
    kana: "タイ    トン    あ.せる    ぬ.ぐ",
    english: "fade, discolour ",
  },
  {
    kanji: "褫",
    kana: "チ    うば.う",
    english: "rob ",
  },
  {
    kanji: "襁",
    kana: "キョウ    むつき",
    english: "diaper ",
  },
  {
    kanji: "襄",
    kana: "ジョウ    ショウ    はら.う",
    english: "rise, raise ",
  },
  {
    kanji: "褻",
    kana: "セツ    けが.れる    な.れる",
    english: "filthy ",
  },
  {
    kanji: "褶",
    kana: "ショウ    シュウ    チョウ    かさね.る",
    english: "pleats ",
  },
  {
    kanji: "褸",
    kana: "ロ    ル    ロウ    いと",
    english: "rags ",
  },
  {
    kanji: "襌",
    kana: "タン    ゼン    ひとえ",
    english: "thin kimono, undergarment ",
  },
  {
    kanji: "褝",
    kana: "タン    ゼン    ひとえ",
    english: "thin kimono, undergarment ",
  },
  {
    kanji: "襠",
    kana: "トウ    ふんどし    まち",
    english: "gusset, gore ",
  },
  {
    kanji: "襞",
    kana: "ヘキ    ヒャク    ひだ    しわ",
    english: "pleat, fold, tuck, crease ",
  },
  {
    kanji: "襦",
    kana: "ジュ    したぎ    はだぎ",
    english: "underwear ",
  },
  {
    kanji: "襤",
    kana: "ラン    ぼろ",
    english: "rags ",
  },
  {
    kanji: "襭",
    kana: "ケツ    つまばさ.む    はさ.む",
    english: "tuck into one's obi ",
  },
  {
    kanji: "襪",
    kana: "ベツ    バツ",
    english: "socks ",
  },
  {
    kanji: "襯",
    kana: "シン    はだぎ",
    english: "underwear ",
  },
  {
    kanji: "襴",
    kana: "ラン    リン",
    english: "a kind of cloth ",
  },
  {
    kanji: "襷",
    kana: "たすき",
    english: "cord to hold up sleeves, (kokuji) ",
  },
  {
    kanji: "襾",
    kana: "ア    け    にし",
    english: "cover, place on top of, west radical variant (no. 146) ",
  },
  {
    kanji: "覃",
    kana: "タン    エン",
    english: "extend, deep, large ",
  },
  {
    kanji: "覈",
    kana: "カク    ケツ    しら.べる",
    english: "investigate ",
  },
  {
    kanji: "覊",
    kana: "キ    ハ    おもが.い    たづな    たび    つな.ぐ",
    english: "reins, connection ",
  },
  {
    kanji: "覓",
    kana: "ベキ    エキ    ミャク    もと.める",
    english: "seek ",
  },
  {
    kanji: "覘",
    kana: "テン    のぞ.く    うかが.う",
    english: "peep, peek ",
  },
  {
    kanji: "覡",
    kana: "ゲキ    ケキ    かんなぎ    みこ",
    english: "diviner, medium ",
  },
  {
    kanji: "覩",
    kana: "ト    み.る",
    english: "see ",
  },
  {
    kanji: "覦",
    kana: "ユ    ねが.う",
    english: "coveting high rank ",
  },
  {
    kanji: "覬",
    kana: "キ",
    english: "coveting high rank ",
  },
  {
    kanji: "覯",
    kana: "コウ    あ.う",
    english: "happening to meet ",
  },
  {
    kanji: "覲",
    kana: "キン    まみ.える",
    english: "see, have an audience with ",
  },
  {
    kanji: "覺",
    kana: "カク    おぼ.える    さ.ます    さ.める    さと.る",
    english: "memorize ",
  },
  {
    kanji: "覽",
    kana: "ラン    み.る",
    english: "look at, inspect, perceive ",
  },
  {
    kanji: "覿",
    kana: "テキ    あ.う",
    english: "meet, see ",
  },
  {
    kanji: "觀",
    kana: "カン    み.る    しめ.す",
    english: "outlook, look, appearance, condition, view ",
  },
  {
    kanji: "觚",
    kana: "コ    さかずき",
    english: "cup ",
  },
  {
    kanji: "觜",
    kana: "シ    スイ    くちばし    はし",
    english: "beak, bill ",
  },
  {
    kanji: "觝",
    kana: "テイ    ふ.れる",
    english: "touch, feel, collide with, conflict with ",
  },
  {
    kanji: "觧",
    kana: "カイ    ゲ    と.く    と.かす    と.ける    ほど.く    ほど.ける    わか.る    さと.る",
    english: "notes, key, explanation, understanding ",
  },
  {
    kanji: "觴",
    kana: "ショウ    さかずき",
    english: "cup ",
  },
  {
    kanji: "觸",
    kana: "ショク    ふ.れる    さわ.る",
    english: "touch, feel, hit, proclaim, announce, conflict, contact ",
  },
  {
    kanji: "訖",
    kana: "キツ    お.える    お.わる    ついに",
    english: "come to an end, reach, arrive at, finally ",
  },
  {
    kanji: "訐",
    kana: "ケツ    あば.く",
    english: "divulge, reveal ",
  },
  {
    kanji: "訌",
    kana: "コウ",
    english: "get confused ",
  },
  {
    kanji: "訛",
    kana: "カ    なま.る    なま.り    あやま.る",
    english: "accent, dialect ",
  },
  {
    kanji: "訝",
    kana: "ガ    ゲ    いぶか.る",
    english: "doubt ",
  },
  {
    kanji: "訥",
    kana: "トツ    ども.る",
    english: "stutter ",
  },
  {
    kanji: "訶",
    kana: "カ    しか.る    せ.める",
    english: "scold ",
  },
  {
    kanji: "詁",
    kana: "コ    よみ",
    english: "exegesis, critical analysis of classical texts ",
  },
  {
    kanji: "詛",
    kana: "ソ    ショ    のろ.う",
    english: "curse ",
  },
  {
    kanji: "詒",
    kana: "イ    タイ    あざむ.く",
    english: "deceive, cheat, give, leave behind ",
  },
  {
    kanji: "詆",
    kana: "テイ    タイ    そし.る    しか.る",
    english: "vilify, denounce ",
  },
  {
    kanji: "詈",
    kana: "リ    ののし.る",
    english: "ridicule ",
  },
  {
    kanji: "詼",
    kana: "カイ    たわむれ",
    english: "jest ",
  },
  {
    kanji: "詭",
    kana: "キ    いつわ.る",
    english: "lie, deceive ",
  },
  {
    kanji: "詬",
    kana: "コウ    ク    ののし.る    はじ    はずかし.める",
    english: "ridicule ",
  },
  {
    kanji: "誅",
    kana: "チュウ    チュ    ちゅう.する    ころ.す    せ.める",
    english: "death penalty ",
  },
  {
    kanji: "誂",
    kana: "チョウ    あつら.える    いど.む",
    english: "order ",
  },
  {
    kanji: "誄",
    kana: "ルイ    しのびごと",
    english: "condolence message ",
  },
  {
    kanji: "誨",
    kana: "カイ    おし.える",
    english: "instruct ",
  },
  {
    kanji: "誡",
    kana: "カイ    いまし.める",
    english: "admonish, warn, prohibit ",
  },
  {
    kanji: "誑",
    kana: "キョウ    たばか.る    たぶら.かす    た.らす",
    english: "cheat, coax ",
  },
  {
    kanji: "誥",
    kana: "コウ    つ.ぐ",
    english: "state, give instructions ",
  },
  {
    kanji: "誦",
    kana: "ショウ    ジュ    ズ    とな.える    よ.む",
    english: "recite, chant ",
  },
  {
    kanji: "誚",
    kana: "ショウ    せ.める",
    english: "censure, blame ",
  },
  {
    kanji: "誣",
    kana: "フ    しい.る    し.いる    あざむ.く",
    english: "slander ",
  },
  {
    kanji: "諍",
    kana: "ソウ    ショウ    いさか.う    あらそ.う    いさ.める    うった.える",
    english: "quarrel ",
  },
  {
    kanji: "諂",
    kana: "テン    へつら.う",
    english: "flatter ",
  },
  {
    kanji: "諚",
    kana: "ジョウ",
    english: "command, (kokuji) ",
  },
  {
    kanji: "諫",
    kana: "カン    いさ.める",
    english: "admonish, dissuade ",
  },
  {
    kanji: "諳",
    kana: "アン    オン    そら.んじる",
    english: "memorize, recite from memory ",
  },
  {
    kanji: "諤",
    kana: "ガク    わめ.く    あご",
    english: "speaking the truth ",
  },
  {
    kanji: "諱",
    kana: "キ    いみな    い.む",
    english: "posthumous (real) name ",
  },
  {
    kanji: "謔",
    kana: "ギャク    キャク    たわむ.れる",
    english: "sport with ",
  },
  {
    kanji: "諠",
    kana: "ケン    かまびす.しい    わす.れる",
    english: "forget, noisy ",
  },
  {
    kanji: "諢",
    kana: "コン",
    english: "joke, jest, colloquial ",
  },
  {
    kanji: "諷",
    kana: "フウ    そら.んじる",
    english: "hint, satirize ",
  },
  {
    kanji: "諞",
    kana: "ヘン",
    english: "flattering, glibness ",
  },
  {
    kanji: "諛",
    kana: "ユ    へつら.う    へつら.い",
    english: "flatter ",
  },
  {
    kanji: "謌",
    kana: "カ    うた    うた.う",
    english: "sing, recite, carol, poem, tanka, slander, defame ",
  },
  {
    kanji: "謇",
    kana: "ケン    ども.る",
    english: "stutter, speak frankly ",
  },
  {
    kanji: "謚",
    kana: "エキ    シ    おくりな",
    english: "laughing ",
  },
  {
    kanji: "諡",
    kana: "エキ    シ    おくりな",
    english: "posthumous name ",
  },
  {
    kanji: "謖",
    kana: "ショク    シュク    た.つ",
    english: "arise ",
  },
  {
    kanji: "謐",
    kana: "ヒツ    しずか",
    english: "quiet ",
  },
  {
    kanji: "謗",
    kana: "ボウ    ホウ    そし.る",
    english: "slander, disparage, censure, criticize ",
  },
  {
    kanji: "謠",
    kana: "ヨウ    うた.う    うた",
    english: "chant (esp. Noh), folksong, ballad ",
  },
  {
    kanji: "謳",
    kana: "オウ    ウ    うた.う",
    english: "extol, declare, express ",
  },
  {
    kanji: "鞫",
    kana: "キク",
    english: "investigate a crime ",
  },
  {
    kanji: "謦",
    kana: "ケイ    しわぶき",
    english: "coughing ",
  },
  {
    kanji: "謫",
    kana: "タク    チャク    せ.める    とが.める",
    english: "crime ",
  },
  {
    kanji: "謾",
    kana: "マン    バン    あざむ.く    あなど.る",
    english: "despise ",
  },
  {
    kanji: "謨",
    kana: "ボ    モ    はか.る",
    english: "plan, deliberate ",
  },
  {
    kanji: "譁",
    kana: "カ    ケ    かまびす.しい",
    english: "noisy ",
  },
  {
    kanji: "譌",
    kana: "カ    なま.る    あやま.る",
    english: "accent, dialect, also N4323 ",
  },
  {
    kanji: "譏",
    kana: "キ    そし.る",
    english: "slander, disparage, censure, criticize ",
  },
  {
    kanji: "譎",
    kana: "ケツ    キツ    いつわ.る    いつわ.り",
    english: "deceive ",
  },
  {
    kanji: "證",
    kana: "ショウ    あかし",
    english:
  "proof, evidence, certificate, testify, verify, guarantee, witness ",
  },
  {
    kanji: "譖",
    kana: "シン    セン    そし.る",
    english: "slander ",
  },
  {
    kanji: "譛",
    kana: "シン    セン    そし.る",
    english: "slander, false accusation ",
  },
  {
    kanji: "譚",
    kana: "タン    はなし",
    english: "talk ",
  },
  {
    kanji: "譫",
    kana: "トウ    セン    タン    うわごと    たわごと    うるさくしゃべ.る",
    english: "delirious talk ",
  },
  {
    kanji: "譟",
    kana: "ソウ    さわ.ぐ",
    english: "shout, be noisy ",
  },
  {
    kanji: "譬",
    kana: "ヒ    たと.える    たと.え",
    english: "illustrate ",
  },
  {
    kanji: "譯",
    kana: "ヤク    わけ",
    english: "translate, decode, encode ",
  },
  {
    kanji: "譴",
    kana: "ケン    せめ.る",
    english: "reproach ",
  },
  {
    kanji: "譽",
    kana: "ヨ    ほ.まれ    ほ.める",
    english: "fame, reputation, praise ",
  },
  {
    kanji: "讀",
    kana: "ドク    トク    トウ    よ.む",
    english: "read, study, pronounce ",
  },
  {
    kanji: "讌",
    kana: "エン    うたげ",
    english: "banquet ",
  },
  {
    kanji: "讎",
    kana: "シュウ    あだ    むく.いる",
    english: "enemy, revenge ",
  },
  {
    kanji: "讒",
    kana: "ザン    サン    そし.る",
    english: "defamation ",
  },
  {
    kanji: "讓",
    kana: "ジョウ    ゆず.る",
    english: "allow, permit, yield, concede ",
  },
  {
    kanji: "讖",
    kana: "シン",
    english: "omen ",
  },
  {
    kanji: "讙",
    kana: "カン    ケン    かまびす.しい",
    english: "noisy, disputatious ",
  },
  {
    kanji: "讚",
    kana: "サン    ほ.める    たた.える",
    english: "praise, picture title ",
  },
  {
    kanji: "谺",
    kana: "コ    カ    こだま",
    english: "tree spirit ",
  },
  {
    kanji: "豁",
    kana: "カツ    ひら.ける    ひろ.い",
    english: "empty ",
  },
  {
    kanji: "谿",
    kana: "ケイ    たに    たにがわ",
    english: "valley ",
  },
  {
    kanji: "豈",
    kana: "カイ    ガイ    キ    あに",
    english: "an interjection of surprise ",
  },
  {
    kanji: "豌",
    kana: "エン    ワン",
    english: "pea ",
  },
  {
    kanji: "豎",
    kana: "ジュ    たて    た.てる    こども",
    english: "vertical, child ",
  },
  {
    kanji: "豐",
    kana: "ホウ    ブ    ゆた.か    とよ",
    english: "bountiful, excellent, rich ",
  },
  {
    kanji: "豕",
    kana: "シ    いのこ",
    english: "pig, hog ",
  },
  {
    kanji: "豢",
    kana: "ケン    カン    やしな.う",
    english: "raising domestic animals ",
  },
  {
    kanji: "豬",
    kana: "チョ    い    いのしし",
    english: "pig, hog ",
  },
  {
    kanji: "豸",
    kana: "タイ    チ    むじなへん",
    english: "snake, legless insect, badger or clawed dog radical (no. 153) ",
  },
  {
    kanji: "豺",
    kana: "サイ    やまいぬ",
    english: "jackal ",
  },
  {
    kanji: "貂",
    kana: "チョウ    てん",
    english: "marten, sable ",
  },
  {
    kanji: "貉",
    kana: "カク    ハク    むじな",
    english: "badger ",
  },
  {
    kanji: "貅",
    kana: "キュウ",
    english: "brave heraldic beast ",
  },
  {
    kanji: "貊",
    kana: "ハク    ミャク    えびす",
    english: "barbarians ",
  },
  {
    kanji: "貍",
    kana: "リ    ライ    たぬき",
    english: "a fox-like animal ",
  },
  {
    kanji: "貎",
    kana: "ゲイ",
    english: "lion, wild beast, wild horse ",
  },
  {
    kanji: "貔",
    kana: "ヒ",
    english: "brave heraldic beast ",
  },
  {
    kanji: "豼",
    kana: "ヒ",
    english: "brave heraldic beast ",
  },
  {
    kanji: "貘",
    kana: "バク    ミャク",
    english: "tapir ",
  },
  {
    kanji: "戝",
    kana: "ザイ    サイ    ゾク",
    english: "pirate, thief ",
  },
  {
    kanji: "貭",
    kana: "シツ    シチ    チ    たち    ただ.す    もと    わりふ",
    english: "matter, material, substance ",
  },
  {
    kanji: "貽",
    kana: "イ    おく.る",
    english: "leave behind, gift ",
  },
  {
    kanji: "貲",
    kana: "シ    たから",
    english: "treasure, assets, pay a fine ",
  },
  {
    kanji: "貳",
    kana: "ニ    ジ    ふた.つ    そえ",
    english: "two ",
  },
  {
    kanji: "貮",
    kana: "ニ    ジ    ふた.つ    そえ",
    english: "number two ",
  },
  {
    kanji: "貶",
    kana: "ヘン    おとし.める    おと.す",
    english: "degrade ",
  },
  {
    kanji: "賈",
    kana: "コ    カ    あきな.い    あきな.う    う.る    か.う",
    english: "buy, tradesman ",
  },
  {
    kanji: "賁",
    kana: "フン    ヒ    ホン",
    english: "decorate ",
  },
  {
    kanji: "賤",
    kana: "セン    ゼン    いや.しい    いや.しむ    いや.しめる    しず    やす.い",
    english: "despise, low-life, poverty ",
  },
  {
    kanji: "賣",
    kana: "バイ    う.る    う.れる",
    english: "sell, betray, show off ",
  },
  {
    kanji: "賚",
    kana: "ライ    たま.う    たまもの",
    english: "gift ",
  },
  {
    kanji: "賽",
    kana: "サイ",
    english: "dice, temple visit ",
  },
  {
    kanji: "賺",
    kana: "タン    レン    すか.す",
    english: "coax ",
  },
  {
    kanji: "賻",
    kana: "フ",
    english: "condolence gift ",
  },
  {
    kanji: "贄",
    kana: "シ    にえ",
    english: "offering, sacrifice ",
  },
  {
    kanji: "贅",
    kana: "セイ    いぼ",
    english: "luxury ",
  },
  {
    kanji: "贊",
    kana: "サン    たす.ける    たた.える",
    english: "help, support, assist, aid ",
  },
  {
    kanji: "贇",
    kana: "イン",
    english: "beautiful ",
  },
  {
    kanji: "贏",
    kana: "エイ    あまり",
    english: "victory, surplus ",
  },
  {
    kanji: "贍",
    kana: "セン    すく.う",
    english: "have enough of, add to ",
  },
  {
    kanji: "贐",
    kana: "シン    はなむけ",
    english: "going away present, parting gift ",
  },
  {
    kanji: "齎",
    kana: "セイ    サイ    シ    もた.らす",
    english: "bring, take, bring about ",
  },
  {
    kanji: "贓",
    kana: "ソウ",
    english: "bribery ",
  },
  {
    kanji: "賍",
    kana: "ソウ",
    english: "bribery ",
  },
  {
    kanji: "贔",
    kana: "ヒ",
    english: "strength, power ",
  },
  {
    kanji: "贖",
    kana: "ショク    あがな.う",
    english: "redeem ",
  },
  {
    kanji: "赧",
    kana: "タン    あから.める",
    english: "get red ",
  },
  {
    kanji: "赭",
    kana: "シャ    あかつち",
    english: "red ",
  },
  {
    kanji: "赱",
    kana: "ソウ    はし.る",
    english: "walk, go on foot, run, leave ",
  },
  {
    kanji: "趁",
    kana: "チン    お.う",
    english: "go to, follow ",
  },
  {
    kanji: "趙",
    kana: "チョウ    ジョウ    キョウ",
    english: "nimble, late-going ",
  },
  {
    kanji: "跂",
    kana: "キ    つまだ.つ    むつゆび",
    english: "stand on tiptoes ",
  },
  {
    kanji: "趾",
    kana: "シ    あと    はや.い",
    english: "footprint, remains ",
  },
  {
    kanji: "趺",
    kana: "シ    フ    あし",
    english: "foot, calyx, sitting in the lotus position ",
  },
  {
    kanji: "跏",
    kana: "カ",
    english: "sitting in the lotus position ",
  },
  {
    kanji: "跚",
    kana: "サン",
    english: "stagger, reel, stumble ",
  },
  {
    kanji: "跖",
    kana: "セキ    あしのうら",
    english: "sole of the foot ",
  },
  {
    kanji: "跌",
    kana: "テツ    あやまつ    つまず.く",
    english: "stumble ",
  },
  {
    kanji: "跛",
    kana: "ハ    ヒ    びっこ    ちんば",
    english: "lame, lameness, odd shoe ",
  },
  {
    kanji: "跋",
    kana: "ハツ    バツ    おくがき    ふ.む",
    english: "epilogue, postscript ",
  },
  {
    kanji: "跪",
    kana: "キ    ひざまず.く",
    english: "kneel ",
  },
  {
    kanji: "跫",
    kana: "キョウ    あしおと",
    english: "sound of footsteps ",
  },
  {
    kanji: "跟",
    kana: "コン    くび.す",
    english: "heel ",
  },
  {
    kanji: "跣",
    kana: "セン    はだし",
    english: "barefooted ",
  },
  {
    kanji: "跼",
    kana: "キョク    こご.む    くぐま.る    かが.む    せぐく.まる",
    english: "bow, stoop, bend over, crouch ",
  },
  {
    kanji: "踈",
    kana: "ソ    ショ    うと.い    うと.む    まば.ら",
    english: "neglect, careless, lax ",
  },
  {
    kanji: "踉",
    kana: "ロウ    リョウ",
    english: "stagger, falter ",
  },
  {
    kanji: "跿",
    kana: "ト",
    english: "barefoot ",
  },
  {
    kanji: "踝",
    kana: "カ    くるぶし",
    english: "ankle ",
  },
  {
    kanji: "踞",
    kana: "キョ    コ    うずく.まる",
    english: "crouch, cower ",
  },
  {
    kanji: "踐",
    kana: "セン    ふ.む",
    english: "step on, trample, practice, carry through ",
  },
  {
    kanji: "踟",
    kana: "チ",
    english: "hesitate ",
  },
  {
    kanji: "蹂",
    kana: "ジュウ    ふ.む",
    english: "step on ",
  },
  {
    kanji: "踵",
    kana: "ショウ    かかと    くび.す    きび.す    つ.ぐ",
    english: "heel ",
  },
  {
    kanji: "踰",
    kana: "ユ    ヨウ    こ.える",
    english: "go beyond ",
  },
  {
    kanji: "踴",
    kana: "ヨウ    おど.る",
    english: "jump, dance, leap, skip ",
  },
  {
    kanji: "蹊",
    kana: "ケイ    みち    わた.る",
    english: "path ",
  },
  {
    kanji: "蹇",
    kana: "ケン    いざ.る    あしなえ    なや.む",
    english: "cripple ",
  },
  {
    kanji: "蹉",
    kana: "サ    つまず.く",
    english: "stumble ",
  },
  {
    kanji: "蹌",
    kana: "ソウ    ショウ    うご.く    よろ.めく",
    english: "move, stagger ",
  },
  {
    kanji: "蹐",
    kana: "セキ",
    english: "stealthy footsteps ",
  },
  {
    kanji: "蹈",
    kana: "トウ    ふ.む",
    english: "step on, trample, carry through, appraise, evade payment ",
  },
  {
    kanji: "蹙",
    kana: "シュク    セキ    せ.まる",
    english: "a tight place, scowl, approaching ",
  },
  {
    kanji: "蹤",
    kana: "ショウ    あと",
    english: "footprints, traces, tracks ",
  },
  {
    kanji: "蹠",
    kana: "セキ    あしうら    あしのうら",
    english: "sole of foot ",
  },
  {
    kanji: "蹣",
    kana: "マン    ハン    よろ.めく",
    english: "staggering, tottering ",
  },
  {
    kanji: "蹕",
    kana: "ヒツ    さきばらい",
    english: "one who preceeds king in procession ",
  },
  {
    kanji: "蹶",
    kana: "ケツ    ケイ    たお.れる    つまず.く",
    english: "stumble ",
  },
  {
    kanji: "蹲",
    kana: "ソン    シュン    つくば.う    うずくま.る",
    english: "crouch, squat, cower ",
  },
  {
    kanji: "蹼",
    kana: "ボク    ホク    みずかき",
    english: "webfoot, web ",
  },
  {
    kanji: "躁",
    kana: "ソウ    さわ.ぐ",
    english: "noisy ",
  },
  {
    kanji: "躇",
    kana: "チョ    チャク    ためら.う",
    english: "hesitate ",
  },
  {
    kanji: "躅",
    kana: "チョク    タク",
    english: "tap with the feet, ruins ",
  },
  {
    kanji: "躄",
    kana: "ヘキ    いざ.る    いざ.り",
    english: "crawl, cripple ",
  },
  {
    kanji: "躋",
    kana: "セイ    サイ    のぼ.る",
    english: "climb ",
  },
  {
    kanji: "躊",
    kana: "チュウ    チュ    シュウ    ジュ    ためら.う",
    english: "hesitate ",
  },
  {
    kanji: "躓",
    kana: "チ    つまず.く",
    english: "stumble ",
  },
  {
    kanji: "躑",
    kana: "テキ    しゃが.む    たちもとお.る",
    english: "squat, sit on heels, loiter ",
  },
  {
    kanji: "躔",
    kana: "テン    ふ.む",
    english: "movement of the sun/moon through the heavens ",
  },
  {
    kanji: "躙",
    kana: "リン    にじ.る    ふ.む",
    english: "edge forward, trample ",
  },
  {
    kanji: "躪",
    kana: "リン    にじ.る    ふ.む",
    english: "edge forward, trample ",
  },
  {
    kanji: "躡",
    kana: "ジョウ    ふ.む",
    english: "step on ",
  },
  {
    kanji: "躬",
    kana: "キュウ    キョウ    み",
    english: "body, self ",
  },
  {
    kanji: "躰",
    kana: "タイ    テイ    からだ    かたち",
    english: "the body, substance, object, reality ",
  },
  {
    kanji: "軆",
    kana: "タイ    テイ    からだ    かたち",
    english: "body, group, class, body, unit ",
  },
  {
    kanji: "躱",
    kana: "タ    かわ.す",
    english: "dodge, parry, avoid ",
  },
  {
    kanji: "躾",
    kana: "しつ.ける    しつけ",
    english: "training, (kokuji) ",
  },
  {
    kanji: "軅",
    kana: "やがて",
    english: "soon after, presently, almost, all but, no more than, after all ",
  },
  {
    kanji: "軈",
    kana: "やがて",
    english:
  "soon after, presently, almost, all but, no more than, after all, (kokuji) ",
  },
  {
    kanji: "軋",
    kana: "アツ    きし.る    きし.む",
    english: "squeak, creak, grate ",
  },
  {
    kanji: "軛",
    kana: "ヤク    アク    くびき",
    english: "yoke ",
  },
  {
    kanji: "軣",
    kana: "コウ    とどろ.かす    とどろ.く",
    english: "rumble, explosion, blast ",
  },
  {
    kanji: "軼",
    kana: "イツ    テツ    すぎ.る",
    english: "pass along ",
  },
  {
    kanji: "軻",
    kana: "カ",
    english: "difficult progress ",
  },
  {
    kanji: "軫",
    kana: "シン    よこぎ",
    english: "sad, revolve ",
  },
  {
    kanji: "軾",
    kana: "ショク    シキ    しきみ",
    english: "front railing on a carriage ",
  },
  {
    kanji: "輊",
    kana: "チ",
    english: "low ",
  },
  {
    kanji: "輅",
    kana: "ロ    くるま",
    english: "carriage ",
  },
  {
    kanji: "輕",
    kana: "ケイ    かる.い    かろ.やか    かろ.んじる",
    english: "light, easy, simple, gentle ",
  },
  {
    kanji: "輒",
    kana: "チョウ    すなわち    わきぎ",
    english: "promptly, easily, i.e. ",
  },
  {
    kanji: "輙",
    kana: "チョウ    すなわち    わきぎ",
    english: "sides of chariot were weapons ",
  },
  {
    kanji: "輓",
    kana: "バン    おそ.い    ひ.く",
    english: "pull ",
  },
  {
    kanji: "輜",
    kana: "シ    こにだ    ほろぐるま    にぐるま",
    english: "wagon, dray, canopied cart ",
  },
  {
    kanji: "輟",
    kana: "テツ    や.める",
    english: "stop, mend ",
  },
  {
    kanji: "輛",
    kana: "リョウ",
    english: "counter for large vehicles ",
  },
  {
    kanji: "輌",
    kana: "リョウ",
    english: "numerary adjunct for vehicles ",
  },
  {
    kanji: "輦",
    kana: "レン    たごし    てぐるま",
    english: "palanquin ",
  },
  {
    kanji: "輳",
    kana: "ソウ    あつ.まる",
    english: "gather ",
  },
  {
    kanji: "輻",
    kana: "フク    や",
    english: "spoke (wheel) ",
  },
  {
    kanji: "輹",
    kana: "フク    とこしばり",
    english: "connection between axle and carriage ",
  },
  {
    kanji: "轅",
    kana: "エン    ながえ",
    english: "shaft ",
  },
  {
    kanji: "轂",
    kana: "コク    こしき",
    english: "hub (of wheel) ",
  },
  {
    kanji: "輾",
    kana: "テン    ネン    きし.る    めぐ.る",
    english: "squeak ",
  },
  {
    kanji: "轌",
    kana: "そり",
    english: "sleigh, sled ",
  },
  {
    kanji: "轉",
    kana: "テン    ころ.がる    ころ.げる    ころ.がす    ころ.ぶ    まろ.ぶ    うたた    うつ.る",
    english: "shift, move, turn ",
  },
  {
    kanji: "轆",
    kana: "ロク    ころ",
    english: "pulley, roller ",
  },
  {
    kanji: "轎",
    kana: "キョウ    かご",
    english: "palanquin, litter ",
  },
  {
    kanji: "轗",
    kana: "カン    コン",
    english: "difficulty, misfortune ",
  },
  {
    kanji: "轜",
    kana: "ジ    ひつぎぐるま    じしゃ",
    english: "hearse ",
  },
  {
    kanji: "轢",
    kana: "レキ    ひ.く    きし.る",
    english: "run over ",
  },
  {
    kanji: "轣",
    kana: "レキ",
    english: "creaking sound ",
  },
  {
    kanji: "轤",
    kana: "ロ",
    english: "pulley ",
  },
  {
    kanji: "辜",
    kana: "コ    つみ",
    english: "sin, crime ",
  },
  {
    kanji: "辟",
    kana: "ヘキ    ヒ    きみ    ひら.く    め.す",
    english: "false, punish, crime, law ",
  },
  {
    kanji: "辭",
    kana: "ジ    や.める",
    english: "words, speech, expression, phrase ",
  },
  {
    kanji: "辯",
    kana: "ベン    ヘン    わきま.える    わ.ける    はなびら    あらそ.う",
    english: "speech, dialect ",
  },
  {
    kanji: "辷",
    kana: "すべ.る    すべ.らす",
    english: "glide, skate, slip, fail in exams, (kokuji) ",
  },
  {
    kanji: "迚",
    kana: "とても",
    english: "some way or other, very, (kokuji) ",
  },
  {
    kanji: "迥",
    kana: "ケイ    ギョウ    はるか",
    english: "far, distant ",
  },
  {
    kanji: "迢",
    kana: "チョ    チョウ",
    english: "far off, distant ",
  },
  {
    kanji: "迯",
    kana: "トウ    に.げる    に.がす    のが.す    のが.れる",
    english: "escape, flee, abscond, dodge ",
  },
  {
    kanji: "邇",
    kana: "ジ    ニ    ちか.い",
    english: "approach, near, close ",
  },
  {
    kanji: "迴",
    kana: "カイ    エ",
    english: "go around ",
  },
  {
    kanji: "逅",
    kana: "コウ    あ.う    まみ.える",
    english: "meet ",
  },
  {
    kanji: "迹",
    kana: "セキ    シャク    あと",
    english: "mark, print, impression ",
  },
  {
    kanji: "逑",
    kana: "キュウ    つれあ.い",
    english: "pair, gather, meet ",
  },
  {
    kanji: "逕",
    kana: "ケイ    みち    こみち    さしわたし    ただちに",
    english: "path ",
  },
  {
    kanji: "逡",
    kana: "シュン    しりぞ.く",
    english: "saunter, go back ",
  },
  {
    kanji: "逍",
    kana: "ショウ",
    english: "saunter, loaf ",
  },
  {
    kanji: "逞",
    kana: "テイ    たくま.しい",
    english: "sturdy, brawny, bold ",
  },
  {
    kanji: "逖",
    kana: "テキ    とお.い",
    english: "far ",
  },
  {
    kanji: "逋",
    kana: "ホ    フ    のが.れる",
    english: "flee ",
  },
  {
    kanji: "逧",
    kana: "サコ    セコ",
    english: "ravine, valley ",
  },
  {
    kanji: "逶",
    kana: "イ",
    english: "long, winding, oblique ",
  },
  {
    kanji: "逵",
    kana: "キ    おおじ",
    english: "broad road ",
  },
  {
    kanji: "逹",
    kana: "タツ    ダ    -たち",
    english: "arrive at, reach, intelligent ",
  },
  {
    kanji: "迸",
    kana: "ホウ    ヒョウ    ほとば.しる    は.しる",
    english: "gush out, spurt ",
  },
  {
    kanji: "遏",
    kana: "アツ    とど.める    と.める",
    english: "stop, suppress ",
  },
  {
    kanji: "遐",
    kana: "カ    とお.い    なんぞ",
    english: "distant ",
  },
  {
    kanji: "遑",
    kana: "カン    コウ    いとま    ひま",
    english: "leisure ",
  },
  {
    kanji: "遒",
    kana: "シュウ    せま.る    つよ.い",
    english: "strong, powerful ",
  },
  {
    kanji: "逎",
    kana: "シュウ    せま.る    つよ.い",
    english: "strong, unyielding, forceful ",
  },
  {
    kanji: "遉",
    kana: "テイ    うかが.う    さすが",
    english: "as might be expected ",
  },
  {
    kanji: "逾",
    kana: "ユ    いよいよ    こ.える",
    english: "pass, go beyond ",
  },
  {
    kanji: "遖",
    kana: "あっぱれ",
    english: "bravo, admirable ",
  },
  {
    kanji: "遘",
    kana: "コウ    あ.う    まみ.える",
    english: "meet ",
  },
  {
    kanji: "遞",
    kana: "テイ    かわ.る    たがいに",
    english: "hand over, deliver, substitute ",
  },
  {
    kanji: "遨",
    kana: "ゴウ    あそ.ぶ",
    english: "play, enjoyment ",
  },
  {
    kanji: "遯",
    kana: "トン    のが.れる",
    english: "deceive, hide, conceal, flee ",
  },
  {
    kanji: "遶",
    kana: "ニョウ    ジョウ    めぐ.る",
    english: "surround ",
  },
  {
    kanji: "隨",
    kana: "ズイ    まにまに    したが.う",
    english: "at the mercy of (the waves) ",
  },
  {
    kanji: "遲",
    kana: "チ    おく.れる    おく.らす    おそ.い",
    english: "late, tardy, slow, delay ",
  },
  {
    kanji: "邂",
    kana: "カイ    あ.う",
    english: "meet unexpectedly ",
  },
  {
    kanji: "遽",
    kana: "キョ    あわ.てる    あわただ.しい    すみやか    にわか",
    english: "fear, agitation, confusion, hurry ",
  },
  {
    kanji: "邁",
    kana: "マイ    バイ    ゆ.く",
    english: "go, excel ",
  },
  {
    kanji: "邀",
    kana: "ヨウ    むか.える    もと.める",
    english: "go to meet, call ",
  },
  {
    kanji: "邊",
    kana: "ヘン    あた.り    ほと.り    -べ",
    english: "edge, margin, side, border ",
  },
  {
    kanji: "邉",
    kana: "ヘン    あた.り    ほと.り    -べ",
    english: "edge, margin, side, border ",
  },
  {
    kanji: "邏",
    kana: "ラ    めぐ.る",
    english: "go around, conceal ",
  },
  {
    kanji: "邨",
    kana: "ソン    むら",
    english: "village, hamlet, rustic ",
  },
  {
    kanji: "邯",
    kana: "カン",
    english: "place name, tree cricket ",
  },
  {
    kanji: "邱",
    kana: "キュウ    おか",
    english: "hill ",
  },
  {
    kanji: "邵",
    kana: "ショウ",
    english: "place name ",
  },
  {
    kanji: "郢",
    kana: "エイ",
    english: "place name ",
  },
  {
    kanji: "郤",
    kana: "ゲキ    キャク    ケキ",
    english: "crevice, interstice ",
  },
  {
    kanji: "扈",
    kana: "コ    したが.う",
    english: "follow ",
  },
  {
    kanji: "郛",
    kana: "フ    くるわ",
    english: "earthwork enclosure around a castle ",
  },
  {
    kanji: "鄂",
    kana: "ガク",
    english: "place name, frankly ",
  },
  {
    kanji: "鄒",
    kana: "スウ    シュ    シュウ",
    english: "place name ",
  },
  {
    kanji: "鄙",
    kana: "ヒ    ひな    ひな.びる    いや.しい",
    english: "lowly, the country, the countryside, be countrified ",
  },
  {
    kanji: "鄲",
    kana: "タン",
    english: "place name ",
  },
  {
    kanji: "鄰",
    kana: "リン    とな.る    となり",
    english: "neighbor, neighborhood ",
  },
  {
    kanji: "酊",
    kana: "テイ    よう",
    english: "intoxication ",
  },
  {
    kanji: "酖",
    kana: "タン    チン    ふ.ける",
    english: "addiction, poison ",
  },
  {
    kanji: "酘",
    kana: "トウ",
    english: "rebrew, ferment again ",
  },
  {
    kanji: "酣",
    kana: "カン    たけなわ",
    english: "height of, thick of, full swing ",
  },
  {
    kanji: "酥",
    kana: "ソ",
    english: "milk ",
  },
  {
    kanji: "酩",
    kana: "メイ    よう",
    english: "sweet sake ",
  },
  {
    kanji: "酳",
    kana: "シン    イン",
    english: "drunken babbling, offer ",
  },
  {
    kanji: "酲",
    kana: "テイ",
    english: "hangover ",
  },
  {
    kanji: "醋",
    kana: "サク    す",
    english: "vinegar ",
  },
  {
    kanji: "醉",
    kana: "スイ    よ.う    よ.い",
    english: "get drunk, feel sick, poisoned, elated, spellbound ",
  },
  {
    kanji: "醂",
    kana: "ラン    リン    あわ.す    さわ.す",
    english: "remove astringency, bleach in water ",
  },
  {
    kanji: "醢",
    kana: "カイ    ひしお    ししびしお    しおから",
    english: "salted meat ",
  },
  {
    kanji: "醫",
    kana: "イ    い.やす    い.する    くすし",
    english: "medicine ",
  },
  {
    kanji: "醯",
    kana: "ケイ    カイ",
    english: "vinegar ",
  },
  {
    kanji: "醪",
    kana: "ロウ    もろみ    にごりざけ",
    english: "unrefined sake or shoyu ",
  },
  {
    kanji: "醵",
    kana: "キョ",
    english: "contribution for a feast (potluck) ",
  },
  {
    kanji: "醴",
    kana: "レイ    ライ    あまざけ",
    english: "sweet sake ",
  },
  {
    kanji: "醺",
    kana: "クン    よう",
    english: "hunger ",
  },
  {
    kanji: "釀",
    kana: "ジョウ    かも.す",
    english: "brew, cause ",
  },
  {
    kanji: "釁",
    kana: "キン    ちぬ.る    すき    ひま",
    english: "smear with blood ",
  },
  {
    kanji: "釉",
    kana: "ユウ    うわぐすり",
    english: "glaze, enamel ",
  },
  {
    kanji: "釋",
    kana: "シャク    セキ    とく    す.てる    ゆる.す",
    english: "explain ",
  },
  {
    kanji: "釐",
    kana: "リ    おさ.める    さいわ.い    りん",
    english: "few, 10th of a bu ",
  },
  {
    kanji: "釖",
    kana: "トウ    かたな    そり",
    english: "knife, sword ",
  },
  {
    kanji: "釟",
    kana: "ハチ    ハツ",
    english: "forge, temper, anneal ",
  },
  {
    kanji: "釡",
    kana: "フ    かま",
    english: "kettle, cauldron, iron pot ",
  },
  {
    kanji: "釛",
    kana: "コク    かね",
    english: "gold ",
  },
  {
    kanji: "釼",
    kana: "ケン    つるぎ",
    english: "sword, dagger, saber ",
  },
  {
    kanji: "釵",
    kana: "サイ    サ    かざし    かんざし",
    english: "ornamental hairpin ",
  },
  {
    kanji: "釶",
    kana: "シ",
    english: "halberd ",
  },
  {
    kanji: "鈞",
    kana: "キン    ひと.しい",
    english: "equal, important point ",
  },
  {
    kanji: "釿",
    kana: "キン",
    english: "hatchet ",
  },
  {
    kanji: "鈔",
    kana: "ショウ",
    english: "selection, summary, 1/10 shaku ",
  },
  {
    kanji: "鈬",
    kana: "タク",
    english: "bell, surname ",
  },
  {
    kanji: "鈕",
    kana: "チュウ    ジュウ    ぼたん    つまみ",
    english: "button ",
  },
  {
    kanji: "鈑",
    kana: "バン    ハン",
    english: "sheet metal ",
  },
  {
    kanji: "鉞",
    kana: "エツ    まさかり",
    english: "battleaxe ",
  },
  {
    kanji: "鉗",
    kana: "ケン    カン    つぐ.む    くびかせ",
    english: "shut up ",
  },
  {
    kanji: "鉅",
    kana: "キョ    はがね",
    english: "big, great ",
  },
  {
    kanji: "鉉",
    kana: "ケン    つ.る",
    english: "handle ",
  },
  {
    kanji: "鉈",
    kana: "シャ    なた    ほこ",
    english: "hatchet ",
  },
  {
    kanji: "銕",
    kana: "テツ    くろがね",
    english: "iron, strong, solid, firm ",
  },
  {
    kanji: "鈿",
    kana: "デン    テン    かんざし",
    english: "ornamental hairpiece ",
  },
  {
    kanji: "鉋",
    kana: "ホウ    ビョウ    かんな",
    english: "carpenter's plane ",
  },
  {
    kanji: "鉐",
    kana: "セキ    ジャク",
    english: "brass ",
  },
  {
    kanji: "銜",
    kana: "カン    くつわ",
    english: "horse's bit ",
  },
  {
    kanji: "銖",
    kana: "シュ",
    english: "measuring unit, 1/16 of a ryou, percent, small, slight ",
  },
  {
    kanji: "銓",
    kana: "セン    はか.る",
    english: "measure, scales, weigh ",
  },
  {
    kanji: "銛",
    kana: "セン    テン    もり    すき",
    english: "harpoon, gaff ",
  },
  {
    kanji: "鉚",
    kana: "リュ    よいかね",
    english: "gold ",
  },
  {
    kanji: "鋏",
    kana: "キョウ    はさみ    はさ.む    つるぎ",
    english: "scissors ",
  },
  {
    kanji: "銹",
    kana: "シュ    シュウ    さび",
    english: "rust, tarnish ",
  },
  {
    kanji: "銷",
    kana: "ショウ    ソウ    け.す    と.ける    かわ.す    とろ.かす",
    english: "erase, shut (door) ",
  },
  {
    kanji: "鋩",
    kana: "ボウ    ほこさき    きっさき",
    english: "sword point ",
  },
  {
    kanji: "錏",
    kana: "ア    エ    しろこ    しころ",
    english: "armour havelock, helmet neck guard ",
  },
  {
    kanji: "鋺",
    kana: "エン    かなまり",
    english: "metal bowl ",
  },
  {
    kanji: "鍄",
    kana: "キョウ",
    english: "kind of percussion instrument ",
  },
  {
    kanji: "錙",
    kana: "シ",
    english: "unit of weight, small, slight ",
  },
  {
    kanji: "錢",
    kana: "セン    ぜに    すき",
    english: "100th of yen ",
  },
  {
    kanji: "錚",
    kana: "ソウ",
    english: "gong ",
  },
  {
    kanji: "錣",
    kana: "テツ    テイ    しころ",
    english: "armor neckplates ",
  },
  {
    kanji: "錺",
    kana: "かざり",
    english: "metal jewelry, (kokuji) ",
  },
  {
    kanji: "錵",
    kana: "カ    にえ",
    english: "holmium, pattern on sword blade ",
  },
  {
    kanji: "錻",
    kana: "ブ",
    english: "tin plate ",
  },
  {
    kanji: "鍜",
    kana: "カ",
    english: "armour neck plates ",
  },
  {
    kanji: "鍠",
    kana: "コウ",
    english: "sound of bells and drums ",
  },
  {
    kanji: "鍼",
    kana: "シン    はり    さ.す",
    english: "needle ",
  },
  {
    kanji: "鍮",
    kana: "チュウ    トウ",
    english: "brass ",
  },
  {
    kanji: "鍖",
    kana: "チン",
    english: "unsatisfactory ",
  },
  {
    kanji: "鎰",
    kana: "イツ    かぎ",
    english: "unit of weight ",
  },
  {
    kanji: "鎬",
    kana: "コウ    しのぎ    なべ",
    english: "sword-blade ridges ",
  },
  {
    kanji: "鎭",
    kana: "チン    しず.める    しず.まる    おさえ",
    english: "ancient peace-preservation centers ",
  },
  {
    kanji: "鎔",
    kana: "ヨウ    と.ける    と.かす    いがた",
    english: "fuse, melt ",
  },
  {
    kanji: "鎹",
    kana: "かすがい",
    english: "clamp, (kokuji) ",
  },
  {
    kanji: "鏖",
    kana: "オウ    みなごろ.し",
    english: "massacre, annihilation ",
  },
  {
    kanji: "鏗",
    kana: "コウ    つく",
    english: "clinking sound ",
  },
  {
    kanji: "鏨",
    kana: "サン    ザン    たがね",
    english: "cold chisel ",
  },
  {
    kanji: "鏥",
    kana: "シュウ    さび",
    english: "rust, corrosion ",
  },
  {
    kanji: "鏘",
    kana: "ソウ    ショウ",
    english: "tinkling of jade or metal pendants ",
  },
  {
    kanji: "鏃",
    kana: "ソク    ゾク    やじり",
    english: "arrowhead, barb ",
  },
  {
    kanji: "鏝",
    kana: "マン    こて",
    english: "soldering iron, trowel, curling iron, flat iron ",
  },
  {
    kanji: "鏐",
    kana: "リュウ",
    english: "gold ",
  },
  {
    kanji: "鏈",
    kana: "レン    くさり",
    english: "chain, irons, connection ",
  },
  {
    kanji: "鏤",
    kana: "ル    ロウ    ちりば.める",
    english: "inlay, set, mount ",
  },
  {
    kanji: "鐚",
    kana: "ワ    ア    びた    しころ",
    english: "coin of smallest value ",
  },
  {
    kanji: "鐔",
    kana: "タン    シン    つば",
    english: "sword guard, hilt ",
  },
  {
    kanji: "鐓",
    kana: "タイ    いしづき",
    english: "ferrule, butt end ",
  },
  {
    kanji: "鐃",
    kana: "ドウ    ニョウ    どら",
    english: "gong ",
  },
  {
    kanji: "鐇",
    kana: "ハン",
    english: "hatchet, vanadium ",
  },
  {
    kanji: "鐐",
    kana: "リョウ    あしかせ",
    english: "silver, platinum, chains ",
  },
  {
    kanji: "鐶",
    kana: "カン    たまき    わ",
    english: "metal ring, link, drawer pull ",
  },
  {
    kanji: "鐫",
    kana: "セン    ほ.る    え.る    き.る    のみ",
    english: "carve, engrave, chisel ",
  },
  {
    kanji: "鐵",
    kana: "テツ    くろがね",
    english: "iron ",
  },
  {
    kanji: "鐡",
    kana: "テツ    くろがね",
    english: "iron ",
  },
  {
    kanji: "鐺",
    kana: "ト    ソウ    トウ    くさり    こじり    こて    なべ",
    english: "chain, tip of a scabbard, flatiron ",
  },
  {
    kanji: "鑁",
    kana: "バン",
    english: "name ",
  },
  {
    kanji: "鑒",
    kana: "カン    かんが.みる    かがみ",
    english: "take warning from, learn from, pattern, example ",
  },
  {
    kanji: "鑄",
    kana: "チュウ    シュ    シュウ    い.る",
    english: "cast, mint ",
  },
  {
    kanji: "鑛",
    kana: "コウ    あらがね",
    english: "ore ",
  },
  {
    kanji: "鑠",
    kana: "シャク    とろ.かす    と.かす",
    english: "melt, be charmed, captivated ",
  },
  {
    kanji: "鑢",
    kana: "ロ    リョ    やすり",
    english: "file, rasp ",
  },
  {
    kanji: "鑞",
    kana: "ロウ",
    english: "solder ",
  },
  {
    kanji: "鑪",
    kana: "ロ    いろり",
    english: "hearth, fireplace, furnace ",
  },
  {
    kanji: "鈩",
    kana: "ロ    いろり",
    english: "hearth, fireplace, furnace ",
  },
  {
    kanji: "鑰",
    kana: "ヤク    かぎ",
    english: "lock ",
  },
  {
    kanji: "鑵",
    kana: "カン    かま",
    english: "steam boiler ",
  },
  {
    kanji: "鑷",
    kana: "セツ    ジョウ    ニョウ    けぬき",
    english: "pluck hair, tweezers ",
  },
  {
    kanji: "鑽",
    kana: "サン    き.る",
    english: "make fire by rubbing sticks ",
  },
  {
    kanji: "鑚",
    kana: "サン    き.る",
    english: "make fire by rubbing sticks ",
  },
  {
    kanji: "鑼",
    kana: "ラ    どら",
    english: "gong ",
  },
  {
    kanji: "鑾",
    kana: "ラン    すず",
    english: "bells on emperor's carriage ",
  },
  {
    kanji: "钁",
    kana: "カク    キャク",
    english: "hoe ",
  },
  {
    kanji: "鑿",
    kana: "サク    のみ    うが.つ",
    english: "chisel ",
  },
  {
    kanji: "閂",
    kana: "サン    セン    かんぬき",
    english: "gate bar ",
  },
  {
    kanji: "閇",
    kana: "ヘイ    と.じる    と.ざす    し.める    し.まる    た.てる",
    english: "shut, close, obstruct, block up ",
  },
  {
    kanji: "閊",
    kana: "つか.える",
    english: "to be obstructed, to be blocked, (kokuji) ",
  },
  {
    kanji: "閔",
    kana: "ビン    ミン    あわ.れむ    うれ.える",
    english: "grieve, be sad, pity ",
  },
  {
    kanji: "閖",
    kana: "ヘイ    ゆ.る",
    english: "shake while rinsing, pan for gold ",
  },
  {
    kanji: "閘",
    kana: "コウ    ひのくち",
    english: "water gate, lock ",
  },
  {
    kanji: "閙",
    kana: "ドウ    トウ    さわが.しい",
    english: "noisy ",
  },
  {
    kanji: "閠",
    kana: "ケイ    ギョク    ケイ    ジュン    うるう",
    english: "intercalation, illegitimate throne ",
  },
  {
    kanji: "閨",
    kana: "ケイ    ケ    ねや",
    english: "bedroom ",
  },
  {
    kanji: "閧",
    kana: "コウ    とき",
    english: "war cry ",
  },
  {
    kanji: "閭",
    kana: "リョ    ロ    さと",
    english: "rural area ",
  },
  {
    kanji: "閼",
    kana: "ア    アツ    エン    ヨ    とど.める    ふさ.ぐ",
    english: "obstruct, conceal ",
  },
  {
    kanji: "閻",
    kana: "エン",
    english: "town ",
  },
  {
    kanji: "閹",
    kana: "エン    アン    おお.う",
    english: "eunuch ",
  },
  {
    kanji: "閾",
    kana: "シキ    イキ    キョク    ヨク    くぎり    しきい",
    english: "threshold ",
  },
  {
    kanji: "闊",
    kana: "カツ    ひろ.い",
    english: "wide ",
  },
  {
    kanji: "濶",
    kana: "カツ    ひろ.い",
    english: "wide ",
  },
  {
    kanji: "闃",
    kana: "ゲキ    ケキ    しずか    ひっそり",
    english: "quiet, still ",
  },
  {
    kanji: "闍",
    kana: "ト    ジャ",
    english: "watchtower, used phonetically ",
  },
  {
    kanji: "闌",
    kana: "ラン    た.ける    たけなわ    てすり",
    english: "rise high, be well along ",
  },
  {
    kanji: "闕",
    kana: "ケツ    か.ける",
    english: "lack, gap, fail, imperial palace ",
  },
  {
    kanji: "闔",
    kana: "コウ    とびら",
    english: "doors ",
  },
  {
    kanji: "闖",
    kana: "チン    うかが.う",
    english: "inquire about ",
  },
  {
    kanji: "關",
    kana: "カン    せき    かか.わる    からくり    かんぬき",
    english: "connection, barrier, gateway, involve, concerning ",
  },
  {
    kanji: "闡",
    kana: "セン    みち.る",
    english: "clarify ",
  },
  {
    kanji: "闥",
    kana: "タツ    タチ",
    english: "gate ",
  },
  {
    kanji: "闢",
    kana: "ヘキ    ビャク    ひら.く",
    english: "open ",
  },
  {
    kanji: "阡",
    kana: "セン",
    english: "thousand ",
  },
  {
    kanji: "阨",
    kana: "ヤク    アイ    アク    せま.い    ふさが.る    せま.る",
    english: "obstruct, distress, narrow ",
  },
  {
    kanji: "阮",
    kana: "ゲン",
    english: "place name ",
  },
  {
    kanji: "阯",
    kana: "シ    あと",
    english: "foundation, site, address ",
  },
  {
    kanji: "陂",
    kana: "ヒ    ハ    つつみ",
    english: "levee, embankment, hill, slope ",
  },
  {
    kanji: "陌",
    kana: "ハク    まち    みち",
    english: "east-west path between paddies, road ",
  },
  {
    kanji: "陏",
    kana: "ダ    ずい",
    english: "melon, wrap ",
  },
  {
    kanji: "陋",
    kana: "ロウ    いや.しい    せま.い",
    english: "narrowness, meanness, humbleness ",
  },
  {
    kanji: "陷",
    kana: "カン    おちい.る    おとしい.れる",
    english: "fall into, cave in, fall (castle), slide into ",
  },
  {
    kanji: "陜",
    kana: "キョウ    コウ    せま.い",
    english: "narrow ",
  },
  {
    kanji: "陞",
    kana: "ショウ    のぼ.る",
    english: "go up, climb ",
  },
  {
    kanji: "陝",
    kana: "セン",
    english: "place name ",
  },
  {
    kanji: "陟",
    kana: "チョク    トク    すす.む    のぼ.る",
    english: "climb, rise ",
  },
  {
    kanji: "陦",
    kana: "トウ    チョウ    しま",
    english: "island ",
  },
  {
    kanji: "陲",
    kana: "スイ    ほとり",
    english: "boundary ",
  },
  {
    kanji: "陬",
    kana: "スウ    シュウ    すみ",
    english: "corner ",
  },
  {
    kanji: "隍",
    kana: "コウ    ほり",
    english: "dry moat ",
  },
  {
    kanji: "隘",
    kana: "アイ    ヤク    せま.い",
    english: "narrow, obstruct ",
  },
  {
    kanji: "隕",
    kana: "イン    エン    ウン    おち.る",
    english: "fall ",
  },
  {
    kanji: "隗",
    kana: "カイ    けわ.しい",
    english: "high, steep ",
  },
  {
    kanji: "險",
    kana: "ケン    けわ.しい",
    english:
  "inaccessible place, impregnable position, steep place, sharp eyes ",
  },
  {
    kanji: "隧",
    kana: "スイ    ツイ    みち",
    english: "fall, go around ",
  },
  {
    kanji: "隱",
    kana: "イン    オン    かく.す    かく.れる    よ.る",
    english: "hide, conceal, cover ",
  },
  {
    kanji: "隲",
    kana: "チョク    シツ    のぼ.る",
    english: "stallion, climb, make ",
  },
  {
    kanji: "隰",
    kana: "シツ    シュウ    さわ",
    english: "be moist, be wet ",
  },
  {
    kanji: "隴",
    kana: "ロウ    リョウ    おか",
    english: "hill, mound ",
  },
  {
    kanji: "隶",
    kana: "タイ    れいづくり",
    english: "extend, give, cast, slave radical (no. 171) ",
  },
  {
    kanji: "隸",
    kana: "レイ    したが.う    しもべ",
    english: "servant, prisoner, criminal, follower ",
  },
  {
    kanji: "隹",
    kana: "サイ    スイ    とり    ふるとり",
    english: "bird, old bird radical (no. 172) ",
  },
  {
    kanji: "雎",
    kana: "ショ",
    english: "osprey ",
  },
  {
    kanji: "雋",
    kana: "シュン    セン    すぐ.れる",
    english: "excel ",
  },
  {
    kanji: "雉",
    kana: "ジ    チ    きじ",
    english: "pheasant ",
  },
  {
    kanji: "雍",
    kana: "ヨウ    ユ    ふさ.ぐ    やわら.ぐ",
    english: "softening, mitigation ",
  },
  {
    kanji: "襍",
    kana: "ザツ    ゾウ    まじ.える    まじ.る",
    english: "mixed, blended, mix, mingle ",
  },
  {
    kanji: "雜",
    kana: "ザツ    ゾウ    まじ.える    まじ.る",
    english: "mixed, blended, mix, mingle ",
  },
  {
    kanji: "霍",
    kana: "カク    にわか",
    english: "quick, sudden ",
  },
  {
    kanji: "雕",
    kana: "チョウ    きざ.む    わし    ほ.る",
    english: "carving ",
  },
  {
    kanji: "雹",
    kana: "ハク    ヒョク    ボク    ひょう",
    english: "hail ",
  },
  {
    kanji: "霄",
    kana: "ショウ    そら",
    english: "sky ",
  },
  {
    kanji: "霆",
    kana: "テイ    いかづち",
    english: "lightning, thunder ",
  },
  {
    kanji: "霈",
    kana: "ハイ    ひさめ",
    english: "big rain, long rainy spell ",
  },
  {
    kanji: "霓",
    kana: "ゲイ    にじ",
    english: "rainbow ",
  },
  {
    kanji: "霎",
    kana: "ショウ    ソウ",
    english: "light rain, short while ",
  },
  {
    kanji: "霑",
    kana: "テン    うるお.う    うるお.い",
    english: "moisten, water, soak ",
  },
  {
    kanji: "霏",
    kana: "ヒ    もや",
    english: "falling rain or snow ",
  },
  {
    kanji: "霖",
    kana: "リン    ながあめ",
    english: "long rainy spell ",
  },
  {
    kanji: "霙",
    kana: "エイ    ヨウ    みぞれ",
    english: "sleet ",
  },
  {
    kanji: "霤",
    kana: "リュウ    あまだれ",
    english: "raindrops falling from the eaves, eaves ",
  },
  {
    kanji: "霪",
    kana: "イン",
    english: "rain lasting at least ten days ",
  },
  {
    kanji: "霰",
    kana: "セン    サン    あられ",
    english: "hail, hailstones, small cubes ",
  },
  {
    kanji: "霹",
    kana: "ヘキ    ヒャク",
    english: "thunder ",
  },
  {
    kanji: "霽",
    kana: "セイ    サイ    は.れる    は.らす",
    english: "clear up ",
  },
  {
    kanji: "霾",
    kana: "バイ    つちふる",
    english: "wind-blown dust falling like rain ",
  },
  {
    kanji: "靄",
    kana: "アイ    もや",
    english: "mist, haze, fog ",
  },
  {
    kanji: "靆",
    kana: "タイ",
    english: "cloud cover ",
  },
  {
    kanji: "靈",
    kana: "レイ    リョウ    たま",
    english: "soul, spirit ",
  },
  {
    kanji: "靂",
    kana: "レキ",
    english: "violent, thunder, lightening ",
  },
  {
    kanji: "靉",
    kana: "アイ    イ",
    english: "clouds ",
  },
  {
    kanji: "靜",
    kana: "セイ    ジョウ    しず-    しず.か    しず.まる    しず.める",
    english: "quiet ",
  },
  {
    kanji: "靠",
    kana: "コウ    もた.れる    たが.う    よ.る",
    english: "lean on ",
  },
  {
    kanji: "靤",
    kana: "ホウ    にきび",
    english: "pimple ",
  },
  {
    kanji: "靦",
    kana: "テン",
    english: "unashamed ",
  },
  {
    kanji: "靨",
    kana: "ヨウ    えくぼ",
    english: "dimple ",
  },
  {
    kanji: "勒",
    kana: "ロク    くつわ",
    english: "halter and bit ",
  },
  {
    kanji: "靫",
    kana: "ジン    ニン    サ    サイ    サツ    うつぼ    うつお    しな.やか    ゆぎ",
    english: "quiver ",
  },
  {
    kanji: "靱",
    kana: "ジン    ニン    サ    サイ    サツ    うつぼ    うつお    しな.やか    ゆぎ",
    english: "soft, pliable, quiver ",
  },
  {
    kanji: "靹",
    kana: "ケツ",
    english: "archer's arm protector ",
  },
  {
    kanji: "鞅",
    kana: "オウ    ヨウ    むながい",
    english:
  "martingale, breast harness, saddle girth, fetter, shackle, carry on back ",
  },
  {
    kanji: "靼",
    kana: "タン    タチ    タツ    なめ.す    なめしがわ",
    english: "tanned leather, smooth leather ",
  },
  {
    kanji: "鞁",
    kana: "ヒ",
    english: "reins, saddle cover ",
  },
  {
    kanji: "靺",
    kana: "マツ    バツ",
    english: "proper name ",
  },
  {
    kanji: "鞆",
    kana: "とも",
    english: "archer's arm protector, (kokuji) ",
  },
  {
    kanji: "鞋",
    kana: "アイ    カイ    わらじ    くつ",
    english: "straw sandals ",
  },
  {
    kanji: "鞏",
    kana: "キョウ    かたい",
    english: "hard ",
  },
  {
    kanji: "鞐",
    kana: "こはぜ",
    english: "clamp, fastener ",
  },
  {
    kanji: "鞜",
    kana: "トウ    くつ",
    english: "shoes, boots ",
  },
  {
    kanji: "鞨",
    kana: "カツ    ガチ    セツ    ゼチ    かわぐつ",
    english: "musical instrument ",
  },
  {
    kanji: "鞦",
    kana: "シュウ    ふらん.に    しりがい",
    english: "swing ",
  },
  {
    kanji: "鞣",
    kana: "ジュウ    ニュウ    なめ.す    なめしがわ",
    english: "tanned leather ",
  },
  {
    kanji: "鞳",
    kana: "トウ",
    english: "rumbling ",
  },
  {
    kanji: "鞴",
    kana: "ヒ    ビ    フク    ふいご",
    english: "bellows ",
  },
  {
    kanji: "韆",
    kana: "セン",
    english: "swing, trapeze ",
  },
  {
    kanji: "韈",
    kana: "ベツ    モチ    バツ    マチ    くつした    たび",
    english: "underwear, leather-wear, var of MN43079X ",
  },
  {
    kanji: "韋",
    kana: "イ    そむ.く    なめしがわ",
    english: "tanned leather ",
  },
  {
    kanji: "韜",
    kana: "トウ    ゆぶくろ    ゆみぶくろ    つつ.む",
    english: "bag, wrapping ",
  },
  {
    kanji: "韭",
    kana: "キュウ    ク    にら",
    english: "leek ",
  },
  {
    kanji: "齏",
    kana: "セイ    サイ    あえもの    な.ます    あ.える",
    english: "dishes seasoned with vinegar or miso ",
  },
  {
    kanji: "韲",
    kana: "セイ    サイ    あえもの    な.ます    あ.える",
    english: "dress (salad) vegetables ",
  },
  {
    kanji: "竟",
    kana: "キョウ    ケイ    おわ.る    ついに    わた.る",
    english: "end, finally ",
  },
  {
    kanji: "韶",
    kana: "ショウ",
    english: "music, spring ",
  },
  {
    kanji: "韵",
    kana: "イン    ひびき",
    english: "rhyme, vowel ",
  },
  {
    kanji: "頏",
    kana: "コウ    のど",
    english: "alight, land, throat, neck ",
  },
  {
    kanji: "頸",
    kana: "ケイ    くび",
    english: "neck, head ",
  },
  {
    kanji: "頤",
    kana: "イ    おとがい    あご",
    english: "chin, jaw ",
  },
  {
    kanji: "頡",
    kana: "ケツ    キツ    カツ    ケチ",
    english: "take wing, fly up ",
  },
  {
    kanji: "頷",
    kana: "ガン    カン    うなず.く    あご",
    english: "nod approval ",
  },
  {
    kanji: "頽",
    kana: "タイ    くず.れる",
    english: "decline, slide ",
  },
  {
    kanji: "顆",
    kana: "カ    つ.ぶ",
    english: "grain (e.g. rice) ",
  },
  {
    kanji: "顏",
    kana: "ガン    かお",
    english: "face, expression ",
  },
  {
    kanji: "顋",
    kana: "サイ    あご    えら",
    english: "lower part of face, jaw, gills of a fish ",
  },
  {
    kanji: "顫",
    kana: "セン    ふる.える",
    english: "shudder ",
  },
  {
    kanji: "顯",
    kana: "ケン    あきらか    あらわ.れる",
    english: "manifest, display, evident, clear ",
  },
  {
    kanji: "顰",
    kana: "ヒン    ひそ.める    しか.める",
    english: "scowl, raise eyebrows ",
  },
  {
    kanji: "顱",
    kana: "ロ    かしら    あたま",
    english: "head, skull ",
  },
  {
    kanji: "顴",
    kana: "ケン    カン",
    english: "cheekbone ",
  },
  {
    kanji: "顳",
    kana: "ショウ",
    english: "temple (of head) ",
  },
  {
    kanji: "颪",
    kana: "おろし",
    english: "wind from mountains, (kokuji) ",
  },
  {
    kanji: "颱",
    kana: "タイ",
    english: "typhoon ",
  },
  {
    kanji: "颶",
    kana: "グ    ク",
    english: "storm ",
  },
  {
    kanji: "飄",
    kana: "ヒョウ    ひるが.える    つむじかぜ",
    english: "turn over, wave ",
  },
  {
    kanji: "飃",
    kana: "ヒョウ    ひるが.える    つむじかぜ",
    english: "whirlwind, cyclone, floating ",
  },
  {
    kanji: "飆",
    kana: "ヒョウ    つむじかぜ",
    english: "whirlwind ",
  },
  {
    kanji: "飩",
    kana: "ドン    トン",
    english: "Japanese noodles ",
  },
  {
    kanji: "飫",
    kana: "ヨウ    オ    ヨ    あき.る",
    english: "satiety ",
  },
  {
    kanji: "餃",
    kana: "ギョウ    キョウ    コウ",
    english: "gyoza ",
  },
  {
    kanji: "餉",
    kana: "ショウ    け    かれい    かれい.い    べんとう",
    english: "(dried) boiled rice ",
  },
  {
    kanji: "餒",
    kana: "ダイ    イ    う.える",
    english: "hunger, spoil ",
  },
  {
    kanji: "餔",
    kana: "ホ    フ    く.う    ゆうめし",
    english: "eat, late afternoon meal ",
  },
  {
    kanji: "餘",
    kana: "ヨ    あま.る    あま.り    あま.す",
    english: "surplus, excess, remainder ",
  },
  {
    kanji: "餡",
    kana: "アン    カン",
    english: "bean jam ",
  },
  {
    kanji: "餝",
    kana: "コウ    シキ    ショク    かざり    かざ.る",
    english: "decorate, ornament, adorn, embellish ",
  },
  {
    kanji: "餞",
    kana: "セン    はなむけ",
    english: "farewell gift ",
  },
  {
    kanji: "餤",
    kana: "タン",
    english: "proceed, offer ",
  },
  {
    kanji: "餠",
    kana: "ヘイ    ヒョウ    もち    もちい",
    english: "rice cake ",
  },
  {
    kanji: "餬",
    kana: "コ    かゆ",
    english: "rice broth ",
  },
  {
    kanji: "餮",
    kana: "テツ    むさぼ.る",
    english: "voracious, gluttonous ",
  },
  {
    kanji: "餽",
    kana: "キ    おく.る",
    english: "give, provide ",
  },
  {
    kanji: "餾",
    kana: "リュウ",
    english: "steaming rice ",
  },
  {
    kanji: "饂",
    kana: "ウン    うどん",
    english: "Japanese noodles, (kokuji) ",
  },
  {
    kanji: "饉",
    kana: "キン    う.える",
    english: "hunger ",
  },
  {
    kanji: "饅",
    kana: "マン",
    english: "bean-jam dumpling, manjuu ",
  },
  {
    kanji: "饐",
    kana: "イ    エイ    エツ    す.える    むせ.ぶ",
    english: "go bad, sour ",
  },
  {
    kanji: "饋",
    kana: "キ    おく.る",
    english: "give, provide, offer ",
  },
  {
    kanji: "饑",
    kana: "キ    う.える",
    english: "hunger, thirst ",
  },
  {
    kanji: "饒",
    kana: "ジョウ    ニョウ    ゆたか",
    english: "abundant ",
  },
  {
    kanji: "饌",
    kana: "セン    サン    そな.える",
    english: "food, offering ",
  },
  {
    kanji: "饕",
    kana: "トウ    むさぼ.る",
    english: "be greedy, be ravenous ",
  },
  {
    kanji: "馗",
    kana: "キ",
    english: "road ",
  },
  {
    kanji: "馘",
    kana: "カク    キョク    くびき.る    みみき.る",
    english: "behead, dismiss ",
  },
  {
    kanji: "馥",
    kana: "クク    ヒョク    フク    か    かお.る",
    english: "perfume ",
  },
  {
    kanji: "馭",
    kana: "ギョ",
    english: "driving (horse) ",
  },
  {
    kanji: "馮",
    kana: "ヒョウ    フ    フウ    たの.む    よ.る",
    english: "displeasure, proper name ",
  },
  {
    kanji: "馼",
    kana: "ブン    モン",
    english: "zebra with yellow eyes and red mane ",
  },
  {
    kanji: "駟",
    kana: "シ",
    english: "four horses ",
  },
  {
    kanji: "駛",
    kana: "シ    は.せる    はや.い",
    english: "run fast ",
  },
  {
    kanji: "駝",
    kana: "ダ    タ    せむし",
    english: "hunchback, load ",
  },
  {
    kanji: "駘",
    kana: "タイ",
    english: "stupid ",
  },
  {
    kanji: "駑",
    kana: "ド    にぶ.い",
    english: "slow horse, foolish fellow ",
  },
  {
    kanji: "駭",
    kana: "ガイ    カイ    おどろ.く    おどろ.かす",
    english: "be surprised ",
  },
  {
    kanji: "駮",
    kana: "カク    ハク    ぶち    まだら",
    english: "spots ",
  },
  {
    kanji: "駱",
    kana: "ラク    かわらげ",
    english: "white horse ",
  },
  {
    kanji: "駲",
    kana: "シュウ    シュン",
    english: "(no known meaning; s&H uses jabberwocky words) ",
  },
  {
    kanji: "駻",
    kana: "カン",
    english: "rage, run wild ",
  },
  {
    kanji: "駸",
    kana: "シン",
    english: "speed, horses running ",
  },
  {
    kanji: "騁",
    kana: "テイ    はせ.る",
    english: "run fast, gallop, as one pleases ",
  },
  {
    kanji: "騏",
    kana: "キ",
    english: "fast horse ",
  },
  {
    kanji: "騅",
    kana: "スイ    あしげ",
    english: "grey horse ",
  },
  {
    kanji: "駢",
    kana: "ヘン    なら.ぶ",
    english: "two-horse carriage ",
  },
  {
    kanji: "騙",
    kana: "ヘン    かた.る    だま.す",
    english: "deceive ",
  },
  {
    kanji: "騫",
    kana: "ケン",
    english: "lift up, err, hopping ",
  },
  {
    kanji: "騷",
    kana: "ソウ    さわ.ぐ    うれい    さわが.しい",
    english: "harass, bother, annoy, disturb, agitate, sad, grieved ",
  },
  {
    kanji: "驅",
    kana: "ク    か.ける    か.る",
    english: "spur a horse on, expel, drive away ",
  },
  {
    kanji: "驂",
    kana: "サン    そえうま",
    english: "extra driver or horse ",
  },
  {
    kanji: "驀",
    kana: "バク",
    english: "going straight forward ",
  },
  {
    kanji: "驃",
    kana: "ヒョウ",
    english: "white horse ",
  },
  {
    kanji: "騾",
    kana: "ラ",
    english: "mule ",
  },
  {
    kanji: "驕",
    kana: "キョウ    おご.る",
    english: "pride, haughtiness ",
  },
  {
    kanji: "驍",
    kana: "ギョウ    キョウ    たけし",
    english: "strong, good horse ",
  },
  {
    kanji: "驛",
    kana: "エキ",
    english: "station ",
  },
  {
    kanji: "驗",
    kana: "ケン    ゲン    あかし    しるし    ため.す    ためし",
    english: "verification, effect, testing ",
  },
  {
    kanji: "驟",
    kana: "シュウ    にわか    はせ.る",
    english: "run, suddenly ",
  },
  {
    kanji: "驢",
    kana: "ロ    リョ    うさぎうま",
    english: "donkey ",
  },
  {
    kanji: "驥",
    kana: "キ",
    english: "fast horse, talent ",
  },
  {
    kanji: "驤",
    kana: "ジョウ    ショウ    あ.がる",
    english: "lift one's head ",
  },
  {
    kanji: "驩",
    kana: "カン    よろこ.ぶ",
    english: "greetings, be happy, celebrate ",
  },
  {
    kanji: "驫",
    kana: "ショウ",
    english: "many horses ",
  },
  {
    kanji: "驪",
    kana: "リ    レイ",
    english: "black horse ",
  },
  {
    kanji: "骭",
    kana: "カン    はぎ",
    english: "leg, shin ",
  },
  {
    kanji: "骰",
    kana: "トウ    さい",
    english: "dice, bones ",
  },
  {
    kanji: "骼",
    kana: "カク",
    english: "bleached bones ",
  },
  {
    kanji: "髀",
    kana: "ヒ    ヘイ    もも",
    english: "thigh ",
  },
  {
    kanji: "髏",
    kana: "ロ",
    english: "skull ",
  },
  {
    kanji: "髑",
    kana: "ドク    トク",
    english: "skull ",
  },
  {
    kanji: "髓",
    kana: "ズイ",
    english: "marrow, pith ",
  },
  {
    kanji: "體",
    kana: "タイ    テイ    からだ    かたち",
    english: "the body, substance, object, reality ",
  },
  {
    kanji: "髞",
    kana: "ソウ",
    english: "hurry, high ",
  },
  {
    kanji: "髟",
    kana: "ヒュウ    ヒョウ    かみがしら    かみかんむり",
    english: "hair hanging long, mane, long hair radical (no.190) ",
  },
  {
    kanji: "髢",
    kana: "テイ    セキ    かもじ",
    english: "wig ",
  },
  {
    kanji: "髣",
    kana: "ホウ",
    english: "dimly ",
  },
  {
    kanji: "髦",
    kana: "ボウ    モウ    たれがみ",
    english: "bangs, long hair, excellence ",
  },
  {
    kanji: "髯",
    kana: "ゼン    ひげ",
    english: "beard, mustache ",
  },
  {
    kanji: "髫",
    kana: "チョウ    うな.る    うな.い",
    english: "long hair, groan ",
  },
  {
    kanji: "髮",
    kana: "ハツ    かみ",
    english: "hair ",
  },
  {
    kanji: "髴",
    kana: "フツ",
    english: "dimly ",
  },
  {
    kanji: "髱",
    kana: "ホウ    たぼ",
    english: "topknot, bun, coiled hairknot ",
  },
  {
    kanji: "髷",
    kana: "キョク    まげ    わげ",
    english: "topknot ",
  },
  {
    kanji: "髻",
    kana: "ケイ    キツ    たぶさ    みずら    もとどり",
    english: "samurai topknot ",
  },
  {
    kanji: "鬆",
    kana: "ショウ    ソウ    シュ",
    english: "loose, dishevelled, pore, cavity in overboiled daikon ",
  },
  {
    kanji: "鬘",
    kana: "バン    マン    かつら",
    english: "wig, hair piece ",
  },
  {
    kanji: "鬚",
    kana: "シュ    ス    ひげ",
    english: "beard, mustache ",
  },
  {
    kanji: "鬟",
    kana: "カン    わげ    みずら",
    english: "topknot, chignon, male hairstyle of looped ponytails ",
  },
  {
    kanji: "鬢",
    kana: "ビン    ヒン",
    english: "sideburns ",
  },
  {
    kanji: "鬣",
    kana: "リョウ    たてがみ",
    english: "mane ",
  },
  {
    kanji: "鬥",
    kana: "とうがまえ    たたかいがまえ",
    english: "broken gate radical (no. 191) ",
  },
  {
    kanji: "鬧",
    kana: "トウ    ドウ    さわが.しい",
    english: "quarrel, dispute hotly ",
  },
  {
    kanji: "鬨",
    kana: "コウ    グ    とき",
    english: "fight, war cry ",
  },
  {
    kanji: "鬩",
    kana: "ケキ    カク    ゲキ    せめ.ぐ",
    english: "quarrel ",
  },
  {
    kanji: "鬪",
    kana: "トウ    たたか.う    あらそ.う",
    english: "fighting ",
  },
  {
    kanji: "鬮",
    kana: "キュウ    くじ",
    english: "lottery, lot, raffle ",
  },
  {
    kanji: "鬯",
    kana: "チョウ    かおりぐさ",
    english: "fragrant herbs ",
  },
  {
    kanji: "鬲",
    kana: "カク    レキ    かなえ    へだ.てる",
    english: "tripod ",
  },
  {
    kanji: "魄",
    kana: "ハク    タク    たま.しい",
    english: "soul, spirit ",
  },
  {
    kanji: "魃",
    kana: "ハツ    バツ",
    english: "(god of) drought ",
  },
  {
    kanji: "魏",
    kana: "ギ    たか.い",
    english: "high, large ",
  },
  {
    kanji: "魍",
    kana: "モウ    ボウ",
    english: "spirits of mountains and streams ",
  },
  {
    kanji: "魎",
    kana: "リョウ    こだま",
    english: "spirits of trees and rocks ",
  },
  {
    kanji: "魑",
    kana: "チ    すだま",
    english: "mountain spirits ",
  },
  {
    kanji: "魘",
    kana: "エン    ヨウ    うな.される",
    english: "have a nightmare ",
  },
  {
    kanji: "魴",
    kana: "ホウ    かがみたい    おしきうお    かがみだい",
    english: "type of sea bream ",
  },
  {
    kanji: "鮓",
    kana: "サ    すし",
    english: "sushi, seasoned rice ",
  },
  {
    kanji: "鮃",
    kana: "ヒョウ    ヘイ    ひらめ",
    english: "flounder, flatfish ",
  },
  {
    kanji: "鮑",
    kana: "ホ    ホウ    あわび",
    english: "abalone ",
  },
  {
    kanji: "鮖",
    kana: "かじか",
    english: "bullhead, (kokuji) ",
  },
  {
    kanji: "鮗",
    kana: "このしろ",
    english: "gizzard shad, (kokuji) ",
  },
  {
    kanji: "鮟",
    kana: "アン",
    english: "angler-fish ",
  },
  {
    kanji: "鮠",
    kana: "カイ    ゲ    ガイ    はえ    はや",
    english: "dace (carp), (kokuji) ",
  },
  {
    kanji: "鮨",
    kana: "シ    キ    すし",
    english: "sushi, seasoned rice ",
  },
  {
    kanji: "鮴",
    kana: "ゴリ    めばる    まて    こち",
    english: "bullhead, rockfish, razor clam, flathead ",
  },
  {
    kanji: "鯀",
    kana: "コン",
    english: "large mythical fish, proper name ",
  },
  {
    kanji: "鯊",
    kana: "サ    シャ    さめ    はぜ",
    english: "goby (fish) ",
  },
  {
    kanji: "鮹",
    kana: "ショウ    ソウ    たこ",
    english: "octopus ",
  },
  {
    kanji: "鯆",
    kana: "フ    ホ    いるか",
    english: "type of herring ",
  },
  {
    kanji: "鯏",
    kana: "あさり    うぐい",
    english: "short necked clam, dace, chub, (kokuji) ",
  },
  {
    kanji: "鯑",
    kana: "かずのこ",
    english: "yellow fish (herring) eggs (sushi), (kokuji) ",
  },
  {
    kanji: "鯒",
    kana: "こち",
    english: "flathead (fish), (kokuji), (kokuji) ",
  },
  {
    kanji: "鯣",
    kana: "エキ    するめ",
    english: "cuttlefish ",
  },
  {
    kanji: "鯢",
    kana: "ゲイ    さんしょううお",
    english: "salamander, female whale, small fish, old person's teeth ",
  },
  {
    kanji: "鯤",
    kana: "コン",
    english: "large mythical fish, roe ",
  },
  {
    kanji: "鯔",
    kana: "シ    ぼら    とど",
    english: "mullet (fish) ",
  },
  {
    kanji: "鯡",
    kana: "ヒ    にしん    はららご",
    english: "herring ",
  },
  {
    kanji: "鰺",
    kana: "ソウ    あじ",
    english: "horse mackerel ",
  },
  {
    kanji: "鯲",
    kana: "どじょう",
    english: "loach, lamprey ",
  },
  {
    kanji: "鯱",
    kana: "しゃちほこ    しゃち",
    english: "fabulous dolphin-like fish, killer whale, (kokuji) ",
  },
  {
    kanji: "鯰",
    kana: "ネン    なまず",
    english: "fresh-water catfish, (kokuji) ",
  },
  {
    kanji: "鰕",
    kana: "カ    えび",
    english: "shrimp, prawn, lobster ",
  },
  {
    kanji: "鰔",
    kana: "カン    かれい    たら",
    english: "flatfish, turbot, cod ",
  },
  {
    kanji: "鰉",
    kana: "コウ    ちょうざめ    ひがい",
    english: "sturgeon ",
  },
  {
    kanji: "鰓",
    kana: "サイ    シ    えら",
    english: "gills, gill slits ",
  },
  {
    kanji: "鰌",
    kana: "シュ    シュウ    どじょう",
    english: "loach (fish) ",
  },
  {
    kanji: "鰆",
    kana: "シュン    さわら",
    english: "Spanish mackerel ",
  },
  {
    kanji: "鰈",
    kana: "チョウ    トウ    かれい",
    english: "sole, flatfish, flounder ",
  },
  {
    kanji: "鰒",
    kana: "フク    あわび    ふぐ",
    english: "abalone ",
  },
  {
    kanji: "鰊",
    kana: "レン    にしん",
    english: "herring ",
  },
  {
    kanji: "鰄",
    kana: "イ",
    english: "a type of fish ",
  },
  {
    kanji: "鰮",
    kana: "オン    いわし",
    english: "sardine ",
  },
  {
    kanji: "鰛",
    kana: "オン    いわし",
    english: "sardine ",
  },
  {
    kanji: "鰥",
    kana: "カン    コン    やもめ    やもお",
    english: "widower, unmarried man ",
  },
  {
    kanji: "鰤",
    kana: "シ    ソウ    ぶり    はまち    かます",
    english: "yellowtail ",
  },
  {
    kanji: "鰡",
    kana: "リュウ    ル",
    english: "a type of fish ",
  },
  {
    kanji: "鰰",
    kana: "はたはた",
    english: "sandfish, (kokuji) ",
  },
  {
    kanji: "鱇",
    kana: "コウ",
    english: "anglerfish ",
  },
  {
    kanji: "鰲",
    kana: "ゴウ    おおがめ",
    english: "huge sea turtle ",
  },
  {
    kanji: "鱆",
    kana: "ショウ    たこ",
    english: "octopus ",
  },
  {
    kanji: "鰾",
    kana: "ヒョウ    ふえ    うきぶくろ",
    english: "fish bladder ",
  },
  {
    kanji: "鱚",
    kana: "きす",
    english: "sillaginoid, (kokuji) ",
  },
  {
    kanji: "鱠",
    kana: "カイ    ケ    えそ    なます",
    english: "lizard fish ",
  },
  {
    kanji: "鱧",
    kana: "レイ    はも",
    english: "conger, sea eel ",
  },
  {
    kanji: "鱶",
    kana: "ショウ    ヨウ    ふか    ひもの",
    english: "shark ",
  },
  {
    kanji: "鱸",
    kana: "ロ    すずき",
    english: "sea bass ",
  },
  {
    kanji: "鳧",
    kana: "フ    けり    かも",
    english: "wild duck, end, suffix ",
  },
  {
    kanji: "鳬",
    kana: "フ    けり    かも",
    english: "wild duck, end, suffix ",
  },
  {
    kanji: "鳰",
    kana: "にお",
    english: "grebe ",
  },
  {
    kanji: "鴉",
    kana: "ア    からす",
    english: "crow, raven ",
  },
  {
    kanji: "鴈",
    kana: "ガン    かり    かりがね",
    english: "wild goose ",
  },
  {
    kanji: "鳫",
    kana: "ガン    かり    かりがね",
    english: "wild goose ",
  },
  {
    kanji: "鴃",
    kana: "ケイ    ケキ    ケツ    もず",
    english: "shrike ",
  },
  {
    kanji: "鴆",
    kana: "チン",
    english: "a poisonous Chinese bird ",
  },
  {
    kanji: "鴪",
    kana: "イツ",
    english: "flying fast, swooping ",
  },
  {
    kanji: "鶯",
    kana: "オウ    うぐいす",
    english: "nightingale ",
  },
  {
    kanji: "鴣",
    kana: "コ",
    english: "partridge ",
  },
  {
    kanji: "鴟",
    kana: "シ    とび",
    english: "kite ",
  },
  {
    kanji: "鵄",
    kana: "シ    とび",
    english: "kite, horned owl, wine cups ",
  },
  {
    kanji: "鴕",
    kana: "ダ    タ",
    english: "Chinese ostrich ",
  },
  {
    kanji: "鴒",
    kana: "レイ",
    english: "wagtail ",
  },
  {
    kanji: "鵁",
    kana: "コウ",
    english: "night heron ",
  },
  {
    kanji: "鴿",
    kana: "コウ    はと    どばと",
    english: "dove, temple pigeon ",
  },
  {
    kanji: "鴾",
    kana: "ボウ    とき",
    english: "crested ibis ",
  },
  {
    kanji: "鵆",
    kana: "ちどり",
    english: "plover ",
  },
  {
    kanji: "鵈",
    kana: "とび",
    english: "kite (bird) ",
  },
  {
    kanji: "鵝",
    kana: "ガ",
    english: "goose ",
  },
  {
    kanji: "鵞",
    kana: "ガ",
    english: "goose ",
  },
  {
    kanji: "鵤",
    kana: "いかる    いかるが",
    english: "grosbeak, hawkfinch ",
  },
  {
    kanji: "鵑",
    kana: "ケン",
    english: "cuckoo ",
  },
  {
    kanji: "鵐",
    kana: "ブ    ム",
    english: "unmottled quail ",
  },
  {
    kanji: "鵙",
    kana: "ケキ    ゲキ    もず",
    english: "shrike ",
  },
  {
    kanji: "鵲",
    kana: "シャク    ジャク    かささぎ",
    english: "magpie ",
  },
  {
    kanji: "鶉",
    kana: "ジュン    シュン    うずら",
    english: "quail ",
  },
  {
    kanji: "鶇",
    kana: "トウ    ツ    つぐみ",
    english: "thrush ",
  },
  {
    kanji: "鶫",
    kana: "トウ    ツ    つぐみ",
    english: "thrush ",
  },
  {
    kanji: "鵯",
    kana: "ヒ    ヒツ    ひよどり",
    english: "brown eared bulbul ",
  },
  {
    kanji: "鵺",
    kana: "コウ    ヤ    ぬえ",
    english: "fabulous night bird, chimera ",
  },
  {
    kanji: "鶚",
    kana: "ガク    みさご",
    english: "osprey ",
  },
  {
    kanji: "鶤",
    kana: "ウン    コン    とうまる    しゃも",
    english: "type of black songbird ",
  },
  {
    kanji: "鶩",
    kana: "ボク    ブ    ム    あひる",
    english: "domestic duck ",
  },
  {
    kanji: "鶲",
    kana: "ひたき",
    english: "crested flycatcher, peewee ",
  },
  {
    kanji: "鷄",
    kana: "ケイ    にわとり    とり",
    english: "chicken ",
  },
  {
    kanji: "鷁",
    kana: "ゲキ",
    english: "waterfowl which flies high but not against the wind ",
  },
  {
    kanji: "鶻",
    kana: "コツ    カツ    はやぶさ",
    english: "falcon, eagle ",
  },
  {
    kanji: "鶸",
    kana: "ジャク    ひわ",
    english: "siskin, greenfinch, light yellow-green ",
  },
  {
    kanji: "鶺",
    kana: "セキ",
    english: "wagtail ",
  },
  {
    kanji: "鷆",
    kana: "テン    シン    かすい",
    english: "yellow-white mottled songbird ",
  },
  {
    kanji: "鷏",
    kana: "テン    シン    かすい",
    english: "yellow-white mottled songbird ",
  },
  {
    kanji: "鷂",
    kana: "ヨウ    はいたか",
    english: "sparrow hawk ",
  },
  {
    kanji: "鷙",
    kana: "ゴウ    シ    チツ",
    english: "flying fish, vicious as a hawk, ferocious bird of prey ",
  },
  {
    kanji: "鷓",
    kana: "シャ",
    english: "partridge ",
  },
  {
    kanji: "鷸",
    kana: "イツ    しぎ",
    english: "kingfisher, snipe ",
  },
  {
    kanji: "鷦",
    kana: "ショウ",
    english: "wren ",
  },
  {
    kanji: "鷭",
    kana: "ハン    バ    ばん",
    english: "water hen, gallinulle ",
  },
  {
    kanji: "鷯",
    kana: "リョウ",
    english: "wren ",
  },
  {
    kanji: "鷽",
    kana: "カク    アク    うそ",
    english: "long-tailed bird, dove, bullfinch ",
  },
  {
    kanji: "鸛",
    kana: "カン    こうのとり",
    english: "Japanese stork ",
  },
  {
    kanji: "鸞",
    kana: "ラン",
    english: "fabulous mythical bird, imperial ",
  },
  {
    kanji: "鹵",
    kana: "ロ    しお    しおち    たて",
    english: "salt ",
  },
  {
    kanji: "鹹",
    kana: "カン    ダイ    から.い    しおからい    しおけ    せいしゅ",
    english: "salty ",
  },
  {
    kanji: "鹽",
    kana: "エン    しお",
    english: "salt ",
  },
  {
    kanji: "麁",
    kana: "ソ    あら.い",
    english: "rough, crude, coarse ",
  },
  {
    kanji: "麈",
    kana: "シュ    ス    おおじか",
    english: "moose, priest's horsehair flapper, elk ",
  },
  {
    kanji: "麋",
    kana: "ビ    なれしか",
    english: "reindeer ",
  },
  {
    kanji: "麌",
    kana: "グ    ゴ    おじか",
    english: "stag, buck, hart ",
  },
  {
    kanji: "麕",
    kana: "キン    クン    のろ",
    english: "roe deer ",
  },
  {
    kanji: "麑",
    kana: "ゲイ    ベイ    こじか    かのこ",
    english: "fawn ",
  },
  {
    kanji: "麝",
    kana: "ジャ    シャ",
    english: "musk deer ",
  },
  {
    kanji: "麥",
    kana: "バク    むぎ",
    english: "wheat ",
  },
  {
    kanji: "麩",
    kana: "フ    ふすま",
    english: "light wheat-gluten bread ",
  },
  {
    kanji: "麸",
    kana: "フ    ふすま",
    english: "light wheat-gluten bread ",
  },
  {
    kanji: "麪",
    kana: "メン    ベン    むぎこ",
    english: "noodles, wheat flour ",
  },
  {
    kanji: "麭",
    kana: "ホウ    こなもち",
    english: "sticky rice ball ",
  },
  {
    kanji: "靡",
    kana: "ヒ    ビ    ミ    なび.く    ない    わ.ける",
    english: "flutter, wave, bow to, obey, seduce ",
  },
  {
    kanji: "黌",
    kana: "コウ    オウ",
    english: "school ",
  },
  {
    kanji: "黏",
    kana: "ネン    ねば.り    ねば.る",
    english: "stick to, glutinous, sticky, glue ",
  },
  {
    kanji: "黐",
    kana: "チ    リ    もち",
    english: "bird-lime ",
  },
  {
    kanji: "黔",
    kana: "ケン    キン    くろ.い",
    english: "black ",
  },
  {
    kanji: "黜",
    kana: "チュツ    しりぞ.ける",
    english: "draw back ",
  },
  {
    kanji: "點",
    kana: "テン    つ.ける    つ.く    た.てる    さ.す    とぼ.す    とも.す    ぼち",
    english: "point, mark, speck, decimal pt ",
  },
  {
    kanji: "黝",
    kana: "ユウ    あおぐろ",
    english: "black ",
  },
  {
    kanji: "黠",
    kana: "カツ    さと.い    わるがしこ.い",
    english: "crafty ",
  },
  {
    kanji: "黥",
    kana: "ケイ    ゲイ    いれずみ",
    english: "tatooing ",
  },
  {
    kanji: "黨",
    kana: "トウ    なかま    むら",
    english: "party, faction, clique ",
  },
  {
    kanji: "黯",
    kana: "アン    くら.い",
    english: "black, dark ",
  },
  {
    kanji: "黴",
    kana: "バイ    ビ    マイ    ミ    かび    か.びる",
    english: "mold, mildew ",
  },
  {
    kanji: "黶",
    kana: "アン    エン    ほくろ",
    english: "mole, scar, blemish ",
  },
  {
    kanji: "黷",
    kana: "トク    けが.す    けが.れる",
    english: "make dirty, become dirty ",
  },
  {
    kanji: "黹",
    kana: "チ    ぬう    ぬいとり    ふつ",
    english: "sewing ",
  },
  {
    kanji: "黻",
    kana: "フツ    あや",
    english: "lap robe, embroidery pattern ",
  },
  {
    kanji: "黼",
    kana: "フ    ホ    あや",
    english: "embroidery ",
  },
  {
    kanji: "黽",
    kana: "ボウ    ビン    ベン    ミン    メン    あおが.える    つと.める",
    english: "green frog, industry ",
  },
  {
    kanji: "鼇",
    kana: "ベツ    ゴウ    すっぽん    おおがめ",
    english: "snapping turtle ",
  },
  {
    kanji: "鼈",
    kana: "ベツ    ヘツ    すっぽん",
    english: "snapping turtle ",
  },
  {
    kanji: "皷",
    kana: "コ    つづみ",
    english: "drum, beat, rouse ",
  },
  {
    kanji: "鼕",
    kana: "トウ",
    english: "beating of drums ",
  },
  {
    kanji: "鼡",
    kana: "ソ    ショ    ねずみ    ねず",
    english: "rat, mouse, dark gray ",
  },
  {
    kanji: "鼬",
    kana: "ユウ    ユ    いたち",
    english: "weasel, skunk, ermine ",
  },
  {
    kanji: "鼾",
    kana: "カン    いびき",
    english: "snoring ",
  },
  {
    kanji: "齊",
    kana: "セイ    サイ    そろ.う    ひと.しい    ひと.しく    あたる    はやい",
    english: "alike, equal, similar, Saito ",
  },
  {
    kanji: "齒",
    kana: "シ    よわい    は    よわ.い    よわい.する",
    english: "tooth, cog ",
  },
  {
    kanji: "齔",
    kana: "シン    ソン    トン    かけば",
    english: "losing baby teeth, child ",
  },
  {
    kanji: "齣",
    kana: "シャク    シュツ    セキ    こま",
    english: "a paragraph, section ",
  },
  {
    kanji: "齟",
    kana: "ソ    サ    ショ    かむ",
    english: "uneven, bite, disagree ",
  },
  {
    kanji: "齠",
    kana: "チョウ",
    english: "baby teeth, young child ",
  },
  {
    kanji: "齡",
    kana: "レイ    よわ.い    とし",
    english: "age ",
  },
  {
    kanji: "齦",
    kana: "ギン    コン    はぐき",
    english: "gums ",
  },
  {
    kanji: "齧",
    kana: "ゲツ    ケツ    かじ.る    か.む",
    english: "gnaw, nibble, munch, have a smattering of ",
  },
  {
    kanji: "齬",
    kana: "ゴ",
    english: "irregular teeth ",
  },
  {
    kanji: "齪",
    kana: "サク    ソク    セク    シュク    シュウ    せま.る",
    english: "grating the teeth ",
  },
  {
    kanji: "齷",
    kana: "アク",
    english: "grating the teeth, fretful ",
  },
  {
    kanji: "齲",
    kana: "ク    ウ    むしば",
    english: "decayed tooth, cavity ",
  },
  {
    kanji: "齶",
    kana: "ガク    あご    はぐき",
    english: "jaw ",
  },
  {
    kanji: "龕",
    kana: "カン    ガン    れい",
    english: "alcove for an image ",
  },
  {
    kanji: "龜",
    kana: "キ    キュウ    キン    かめ",
    english: "turtle, tortoise ",
  },
  {
    kanji: "龠",
    kana: "ヤク    ふえ",
    english: "flute ",
  },
  {
    kanji: "堯",
    kana: "ギョウ    たか.い",
    english: "high, far ",
  },
  {
    kanji: "槇",
    kana: "テン    シン    まき    こずえ",
    english: "twig, Chinese black pine ",
  },
  {
    kanji: "遙",
    kana: "ヨウ    はる.か",
    english: "far off, distant, long ago ",
  },
  {
    kanji: "瑤",
    kana: "ヨウ    たま",
    english: "beautiful (as a jewel) ",
  },
];
