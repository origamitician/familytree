document.pageYOffset = 0;
//360 noscope!!!!1!!1!!111!
document.body.scroll({
    top: 0,
    behavior: 'smooth'
  });

document.getElementById('settingsDiv').scrollIntoView();//UPDATES FOR THE FUTURE
/*update visual glitch on 3rd generation*/
document.getElementsByClassName('flexInputText')[4].style.paddingBottom = '10%';
var mode = 'm';

var male = '#9fd1fc';
var female = '#ffa3eb';
var unidentified = 'black';
var barColor = 'black';
var textColor = 'black'

document.getElementById('settingsDiv').style.height = window.innerHeight + 'px';
var maternal = [
    /*0*/{name: '(廖) Miki Kiyokawa', marriedTo: 1, kids: [2, 3, 4], dob: 'December 1, 1970', marriageDate: 'December 28, 1996', marriagePlace: '8118 Ingleside Way, Sacramento, CA', generation: 3, gender: 'f', birthplace: 'Hiroshima, Japan', exists: 'Living', livesIn: 'Honolulu, HI', facts: ['She only went to Japanese School til 4th grade and could speak Japanese fluently now. She also started to learn English in 4th grade and could speak it naturally, despite it being her second language.', 'She was an only child.', 'She went to medical school in the Philippines, where she met my dad.', 'She told me that following graduation of medical school, she and my dad didn\'t know where to go. She then saw a vision of Hawaii in her dream, so she decided to move there.'], memories: ['I remember, if I completed a certain Kumon math worksheet in a certain time limit, she would give me a fruit snack, which motivated me.'], picture: 'mom.png'},

    /*1*/{name: 'Michael Cape', marriedTo: 0, kids: [2, 3, 4], dob: 'April 9, 1969', marriageDate: 'December 28, xxxx', marriagePlace: '8118 Ingleside Way, Sacramento, CA', generation: 3, gender: 'm', /*kidsOf: [11, 12],*/ birthplace: 'San Francisco, US', exists: 'Living', livesIn: 'Honolulu, HI', facts: ['He went to Bible college in the Phillipines, where he met my mother.', 'He was the youngest of 4, so he was subject to constant bullying. He therefore developed tactics to fight back.', 'He met my mom when the church sent him to pick up a new member that would be joining them, and that happened to be my mom.'], memories: ['My dad introduced me to running, and we ran and trained for the Great Aloha Run when I was only 7 years old.'], picture: ''}, 

    /*2*/{name: '(廖) Micaiah Cape', marriedTo: -1, kids: [], dob: 'February 15, 2005', marriageDate: 'TBA', marriagePlace: 'TBA', generation: 4, gender: 'm', birthplace: 'Honolulu, HI', exists: 'Living', livesIn: 'Honolulu, HI', facts: ['I have perfect pitch, and I love flexing this on anyone I could!', 'I have a crush on (encrypted).', 'My longest (non-race) run ever is 11.17 miles, in 1 hour 20 minutes and 57 seconds.', 'I was the junior homecoming prince and the senior prom prince.', 'I have two published articles in scientific peer-reviewed medical journals.', 'I coded this family tree myself.', 'I ended up crying at the end of track season.', 'Michael was my Spartan Buddy when I came into Maryknoll sophomore year and we\'ve been friends ever since.'], memories: ['I used to be scared of flashing lights.'], picture: 'micaiah.png'},

    /*3*/{name: '(廖) Malachi Cape', marriedTo: -1, kids: [], dob: 'November 18, 2007', marriageDate: 'TBA', marriagePlace: 'TBA', generation: 4, gender: 'm', birthplace: 'Honolulu, HI', exists: 'Living', livesIn: 'Honolulu, HI', facts: ['He is allergic to gluten', 'He also enjoys cross country and track.', 'He likes to drive me crazy by saying cringy things.'], memories: ['He was holding a yellow toy bulldozer in his hands when he was born.'], picture: 'malachi.png'},

    /*4*/{name: '(廖) Matthew Cape', marriedTo: -1, kids: [], dob: 'July 26, 2009', marriageDate: 'TBA', marriagePlace: 'TBA', generation: 4, gender: 'm', exists: 'Living',birthplace: 'Honolulu, HI', livesIn: 'Honolulu, HI', facts: ['He loves surfing.'], memories: ['He was holding a waterproof glowing watch when he was born.'], picture: 'matthew.png'},

    /*5*/{name: '黄幸子', marriedTo: -1, kids: [] /*weird junction*/, dob: 'November 23, 1944', marriageDate: 'TBA', marriagePlace: 'TBA', generation: 2, gender: 'f', kidsOf: [9, 10], birthplace: 'Hiroshima, Japan',exists: 'Deceased; from lung cancer on March 16, 2016', livesIn: 'Taichung, Taiwan', facts: ['(ENCRYPTED - key is stored by me) Swk aduyrifql sy 黄阿六 doe acjmkllqodzs kgzmixyo. Qiffmot: vqz cz zqz ftjyc gctxqegu qpfy taze av nswm luuv, apx th qse bfo oonv zgd 黄阿六 bf bguc. Rojuvx Wqlwr Qsd QZ, tq ydquhq bye dixpm, 黄阿六 uaccdp’n noljk 3 jrbkyd, zyshqeg 黄幸子 kh evy kzwn tq xts. Bgimmet, qssh ktm nepn mowc m nvw jiffm dmbvr, ubp acjmkllqodzs oma jtkfw ofahm.', 'She worked as an accountant to my grandfather.'], memories: ['she always made me egg rice and shrimp every time we went on the train to visit her in Taiwan. She would also always take me to the shopping district next to her. She would also go as far as dropping us off at the airport (and that meant riding the bullet train for an hour with us).', 'She would also watch me do origami and play simple video games next to her.', 'She was also the biggest inspiration for me – she was so loving and kind to me despite her bedridden, it inspired me to be caring towards others regardless of my circumstances.', 'When I stayed at their house, I remember she would have an hourglass by the hot tub. I hated the hourglass and thought it was a monster waiting to attack me. Before I would go in the tub, I remember always asking her “Is the hourglass still there?”'], picture: 'ama.png'},

    /*6*/{name: '廖仁', marriedTo: 5, kids: [0], dob: 'June 6, 1945', marriageDate: 'TBA', marriagePlace: 'TBA', generation: 2, gender: 'm', exists: 'Living', birthplace: 'Manchuria, China',livesIn: 'Taichung, Taiwan', facts: ['Born in Manchuria due to World War II, but moved back to Taiwan when he was 2 years old', 'Went to Taiwanese school and 東海 college – got in without any exams', 'Went to medical school：広島大学 (Hiroshima University)', '泉生’s (his father\'s) friend was at Osaka、and he met his wife through a formal dinner invited through 広島のおじいちゃん, whom 泉生 knew.', '1981 or 1982 went back home to Taiwan due to stroke from 泉生.', 'One night, he got so drunk that he got swindled out of his money into buying a dog, Taro. Although the dog passed away, the kennel is still there at his house. '], memories: ['I loved numbers ever since I was young, and that is where Sudoku came into play. My grandfather played so much sudoku that he would always have a stash of sudoku books in the bathroom, as well as he would often comment that he encountered the same exact sudoku twice. He would do those crazy merged sudokus and printed some out for me to do when I was back in Hawaii.', 'Following my grandmother’s death, things changed. He started taking us and his friends out on excursions to keep his spirits up. We were so excited for these – for example we went to an actual dude ranch （飛牛牧場）, went to see a glass museum, driving around Taiwan’s largest lake (日月潭）, took us to DIY centers where we could make anything out of wood, and took us to the port many times where we would eat freshly caught fish.'], picture: 'akon.png'},

    /*7*/{name: '廖泉生', marriedTo: 8, kids: [11, 12, 13, 6], dob: 'November 25, 1916', marriageDate: 'TBA', marriagePlace: 'TBA', generation: 1, gender: 'm', exists: 'Deceased; died in 2015', birthplace: 'Taiwan', livesIn: 'Taichung, Taiwan', facts: ['Initially born in Taiwan and attended intermediate boarding school in Japan.', 'Went to 広島 to help, following atomic bombing in 1945', 'Went to Manchuria to complete medical school. His father was rich so he could afford to go overseas. Did not fight in World War II because he was a doctor. ', 'Inside Manchuria, he was almost forced to marry a Japanese woman due to the territory being under Japanese rule, so they went back to Taiwan.', 'When coming back to Taiwan, there was a limit on how much currency the officials allowed. Because he wanted to bring all of his money back to Taiwan, he converted money into gold and flattened it into extremely thin sheets and tucked it under his socks and belt buckles! '], memories: ['I remember him cracking jokes at the dinner table about when you misbehave at the table, you would be sleeping in the Taro’s kennel that night. I also remember both of my little brothers and I going in front of the dinner table and singing to them, to his request.'], picture: 'sensei.png'},

    /*8*/{name: '林雲', marriedTo: 7, kids: [6], dob: 'March 10, 1926', marriageDate: 'TBA', marriagePlace: 'TBA', generation: 1, gender: 'f', exists: 'Deceased; died in 2014', birthplace: 'Taiwan', livesIn: 'Taichung, Taiwan', facts: ['Also went to Hiroshima to help, following atomic bombing ', 'Was going to a girl\'s school (very rare back then), there was a planned reunion. Coincidentally, there was an announcement that 泉生 was coming back to Taiwan so that was the purpose of the reunion. She was the first girl to come out of the school to meet 泉生, and they instantly started dating. ', 'Fun fact: 泉生 took her to 洋食屋 (western food) and she couldn’t adapt to the customs of using knife and fork, so 泉生 interpreted it as she being pure. In fact, 雲 was so shy that on their first honeymoon, they didn’t even hold hands! They each held one handle of a bag, which was being carried between them.'], memories: ['She would always tell me to eat. She would also have these Russian dolls that always left me intrigued. I remember lining them out on the long hallway or playing bowling with them. If I remember correctly, there were 6 or 7 layers and the interior smelled really good. In fact, I would sometimes play with this just to smell the wood.', 'Her bedroom also had their own automatic toilet. I was scared of it for some reason because I was so used to using my grandfather’s toilet!'], picture: 'kumo.png'},

    /*9*/{name: '黄万たい', marriedTo: 10, kids: [5, 20, 21, 22, 23], dob: '1911', marriageDate: 'TBA', marriagePlace: 'TBA', generation: 1, gender: 'm', exists: 'Deceased', birthplace: 'Puli, Taiwan', livesIn: 'Hiroshima, Japan', facts: ['He has 4 daughters', 'Head of a group of Taiwanese at Osaka; this allowed 廖仁 to meet Ama through the dinner.', 'Had a good job as a postman, but due to 黄阿六 wanting to leave, he left.', 'He told his brothers that he didn’t need inheritance money, so just stay with the house. At the time, it was an older brother’s responsibility to stay.'], memories: [], picture: ''},

    /*10*/{name: '黄阿六', marriedTo: 9, kids: [5, 20, 21, 22, 23], dob: '1916', marriageDate: 'TBA', marriagePlace: 'TBA', generation: 1, gender: 'f', exists: 'Deceased', birthplace: 'Puli, Taiwan', livesIn: 'Hiroshima, Japan', facts: ['They met by matchmaking', 'Moved to Hiroshima before World War 2, because she did not like the agricultural job she worked at Puli and wanted to get out. THEY DIDN’T BRING ANY MONEY!', 'Ran a Chinese restaurant upon arrival. She was a bit weird, in a good way, as my mom likes to describe her. For example, when she ate out, she would get mad at the waiter over skimpy portions. At the same time though, post-World War II, she would offer free hearty meals at her restaurant for any passerby, due to Japan being hit really hard by the war.'], memories: [], picture: ''},

    /*11*/{name: 'Guo Buo', marriedTo: 15, kids: [14, 25, 26], picture: '', generation: 2, gender: 'f'},
    /*12*/{name: '(廖) Bengi', marriedTo: 16, kids: [27, 28, 29], picture: 'bengi.png', generation: 2, gender: 'm'},
    /*13*/{name: '(廖) Minchen', marriedTo: 17, kids: [38, 39], picture: '', generation: 2, gender: 'm'},
    /*14*/{name: 'Meko', marriedTo: -1, kids: [], picture: '', generation: 3, gender: 'f'},
    /*15*/{name: '---', marriedTo: -1, kids: [14], picture: '', generation: 2, gender: 'm'},
    /*16*/{name: 'Gloria', marriedTo: 15, kids: [], picture: '', generation: 2, gender: 'f'},
    /*17*/{name: 'Junko', marriedTo: 14, kids: [], picture: '', generation: 2, gender: 'f'},
    /*18*/{name: 'Guo Buo\'s kid\'s partner', marriedTo: 14, kids: [], picture: '', generation: 3, gender: 'm'},
    /*19*/{name: 'Guo Buo\'s kid 2', marriedTo: -1, kids: [], picture: '', generation: 3, gender: 'm'},

    /*20*/{name: '(黄) そうけん', marriedTo: 41, kids: [42, 43, 44], picture: '', generation: 2, gender: 'm'},
    /*21*/{name: '(黄) まさこ', marriedTo: 45, kids: [46, 47], picture: 'masako.png', generation: 2, gender: 'f'},
    /*22*/{name: '(黄) てるこ', marriedTo: 53, kids: [54, 55, 56], picture: '', generation: 2, gender: 'f'},
    /*23*/{name: '(黄) たまこ', marriedTo: 67, kids: [68, 69, 70], picture: '', generation: 2, gender: 'f'},
    /*24*/{name: 'Kid 1', marriedTo: 20, kids: [], picture: '', generation: 3, gender: 'm'},
    /*25*/{name: 'Angela', marriedTo: -1, kids: [], picture: '', generation: 3, gender: 'f'},
    /*26*/{name: 'Henry', marriedTo: -1, kids: [], picture: '', generation: 3, gender: 'm'},
    /*27*/{name: '(廖) Mark', marriedTo: 30, kids: [36, 37], picture: 'mark.png', generation: 3, gender: 'm'},
    /*28*/{name: '(廖) Gwen', marriedTo: 31, kids: [34, 35], picture: '', generation: 3, gender: 'f'},
    /*29*/{name: '(廖) Daniel', marriedTo: 32, kids: [33], picture: '', generation: 3, gender: 'm'},
    /*30*/{name: 'Suk', marriedTo: 27, kids: [], picture: 'suk.png', generation: 3, gender: 'f'},

    /*31*/{name: 'Steve Arimoto', marriedTo: 28, kids: [], picture: '', generation: 3, gender: 'm'},
    /*32*/{name: 'さやこ', marriedTo: 29, kids: [], picture: '', generation: 3, gender: 'f'},
    /*33*/{name: '(廖) ルカ', marriedTo: -1, kids: [], picture: '', generation: 4, gender: 'm'},
    /*34*/{name: 'Isaac Arimoto', marriedTo: -1, kids: [], picture: '', generation: 4, gender: 'm'},
    /*35*/{name: 'Kai Arimoto', marriedTo: -1, kids: [], picture: '', generation: 4, gender: 'm'},
    /*36*/{name: '(廖) Sienna', marriedTo: -1, kids: [], picture: '', generation: 4, gender: 'f'},
    /*37*/{name: '(廖) Lila', marriedTo: -1, kids: [], picture: '', generation: 4, gender: 'f'},
    /*38*/{name: '(廖) ゆりこ', marriedTo: 40, kids: [], picture: '', generation: 3, gender: 'f'},
    /*39*/{name: '(廖) よしえ', marriedTo: -1, kids: [], picture: '', generation: 3, gender: 'f'},
    /*40*/{name: '---', marriedTo: -1, kids: [], picture: '', generation: 3, gender: 'm'},

    /*41*/{name: '---', marriedTo: 20, kids: [], picture: '', generation: 2, gender: 'f'},
    /*42*/{name: '(黄) のりえ', marriedTo: -1, kids: [], picture: 'nori.png', generation: 3, gender: 'f'},
    /*43*/{name: '(黄) としお', marriedTo: -1, kids: [], picture: '', generation: 3, gender: 'm'},
    /*44*/{name: '(黄) としのり', marriedTo: -1, kids: [], picture: 'toshinori.png', generation: 3, gender: 'm'},
    /*45*/{name: '---', marriedTo: 21, kids: [], picture: '', generation: 2, gender: 'm'},
    /*46*/{name: '(黄) ひろみね', marriedTo: 48, kids: [49, 50, 51], picture: '', generation: 3, gender: 'm'},
    /*47*/{name: '(黄) ひろもり', marriedTo: 52, kids: [], picture: 'hiromori.png', generation: 3, gender: 'm'},
    /*48*/{name: 'なおみ', marriedTo: 48, kids: [], picture: 'naomi.png', generation: 3, gender: 'f'},
    /*49*/{name: 'あおい', marriedTo: -1, kids: [], picture: 'あ.png', generation: 4, gender: 'f'},
    /*50*/{name: 'すみれ', marriedTo: -1, kids: [], picture: 'すう.png', generation: 4, gender: 'f'},

    /*51*/{name: 'さつき', marriedTo: -1, kids: [], picture: 'さっちゃん.png', generation: 4, gender: 'f'},
    /*52*/{name: 'かよ', marriedTo: 47, kids: [], picture: 'kayo.png', generation: 3, gender: 'f'},
    /*53*/{name: 'たけお', marriedTo: 22, kids: [], picture: 'takeo.png', generation: 3, gender: 'm'},
    /*54*/{name: 'こう鈴', marriedTo: 57, kids: [58, 59, 60], picture: 'kourei.png', generation: 3, gender: 'f'},
    /*55*/{name: 'よしひこ', marriedTo: 61, kids: [62, 63], picture: 'yoshihiko.png', generation: 3, gender: 'm'},
    /*56*/{name: 'たかよし', marriedTo: 64, kids: [65, 66], picture: 'takayoshi.png', generation: 3, gender: 'm'},
    /*57*/{name: '(鈴木)けん太郎', marriedTo: 54, kids: [], picture: 'kentarou.png', generation: 3, gender: 'm'},
    /*58*/{name: '(鈴木)こう一郎', marriedTo: -1, kids: [], picture: 'kouichirou.png', generation: 4, gender: 'm'},
    /*59*/{name: '(鈴木)しょうた', marriedTo: -1, kids: [], picture: 'shilyouta.png', generation: 4, gender: 'm'},
    /*60*/{name: '(鈴木)よう介', marriedTo: -1, kids: [], picture: 'yousuke.png', generation: 4, gender: 'm'},

    /*61*/{name: 'なおみ', marriedTo: 55, kids: [], picture: 'naomi (yoshi).png', generation: 3, gender: 'f'},
    /*62*/{name: '---', marriedTo: -1, kids: [], picture: '', generation: 4, gender: 'i'},
    /*63*/{name: '---', marriedTo: -1, kids: [], picture: '', generation: 4, gender: 'i'},
    /*64*/{name: 'かおり', marriedTo: 56, kids: [], picture: 'kaori.png', generation: 3, gender: 'f'},
    /*65*/{name: 'りん', marriedTo: -1, kids: [], picture: 'rin.png', generation: 4, gender: 'f'},
    /*66*/{name: 'らん', marriedTo: -1, kids: [], picture: 'ran.png', generation: 4, gender: 'f'},
    /*67*/{name: '---', marriedTo: 23, kids: [], picture: '', generation: 2, gender: 'm'},
    /*68*/{name: 'せいけん', marriedTo: -1, kids: [], picture: '', generation: 3, gender: 'm'},
    /*69*/{name: 'きおみ', marriedTo: 71, kids: [], picture: '', generation: 3, gender: 'f'},
    /*70*/{name: 'ひろみ', marriedTo: -1, kids: [], picture: 'hiro.png', generation: 3, gender: 'f'},
    /*71*/{name: '---', marriedTo: 69, kids: [], picture: '', generation: 3, gender: 'm'},
    

    /*kid from sayako is ruka*/
    /*Isaac and Kai from Gwen*/
    /*Sienna and Lila from Mark*/
    /*yuriko and yoshie from okinawa*/
    /*yuriko is married with no kids*/

    /*Ama's side*/
    /*Siblings: souken (m), don't know marriage)-> 3 kids: norie, toshio, toshinori

    masako ama married to (idk) -> Hiromine and Hiromori (2 kids) -> Hiromine is married to Naomi -> kids names are aoi, sumire, satsuki. Hiromori is married to Kayo, no children

    Teruko (f) married to takeo (m) -> kids are korei, yoshihiko, takayoshi -> korei is married to kentarou -> kids are kouichiro, shiyouta, and yousuke, -> yoshihiko (m) is married to naomi (f), have 2 kids but don't know their name. Takayoshi (m) is married to kaori (f) -> kids are rin and ran

    Tamako (f) -> 3 kids are seiken, kiomi, hiromi -> Kiomi is married and has no kids, hiromi is not married

    ______________________

    Lolo's side siblings: Nester (m), Edith(f)

    Lola's siblings: Ernesto the 1st (m), Ernesto the 2nd (m), Uncle Manny (m), Uncle Mike (m), Auntie Ellen (f), Ellis (f) -> Erneston the 2nd is married to florie, kids are Harley (m) and Rios (m) and Venus (f). Uncle Manny is married to Auntie Eva; kids are Uncle Euclid and uncle Septer. Uncle Mike is marreid to Auntie Marilyn, have Auntie America, Adela, and Angela as kids. Ellen is married to Doming, kids are Uncle Jeff, Uncle Chris, and Uncle Dominic, Ellis was married to Jake. John is the eldest, David, and Jing jing.

    Uncle Euclid is married to Auntie Debra, and Alexis and Aiden are their kids.
    Uncle Septer is married to Auntie Jasmine, and Dimone (s) and Josela and Josarah
    Auntie Adela is married to XXXX, Jaren is the son
    Angela is married to XXXX, has 1 daughter named Aliana
    Jeff is married to XXXX
    Uncle Chris is married to XXXX and has XXXX
    Jing jing is married to Jordan

    ________________________

    Under Auntie Edith, she was married to Uncle Eugene, two children are Aileen (married to Nick) -> adopted a son. Edwin is the younger brother of Aileen, he's also married, and has 3 kids*/  
];

var paternal = [
    /*0*/{name: 'Michael Cape', marriedTo: 1, kids: [2, 3, 4], dob: 'April 9, 1969', marriageDate: 'December 28, xxxx', marriagePlace: '8118 Ingleside Way, Sacramento, CA', generation: 3, gender: 'm', birthplace: 'San Francisco, US', exists: 'Living', livesIn: 'Honolulu, HI', facts: ['He went to Bible college in the Phillipines, where he met my mother.', 'He was the youngest of 4, so he was subject to constant bullying. He therefore developed tactics to fight back.', 'He met my mom when the church sent him to pick up a new member that would be joining them, and that happened to be my mom.'], memories: ['My dad introduced me to running, and we ran and trained for the Great Aloha Run when I was only 7 years old.'], picture: ''}, 

    /*1*/{name: '(廖) Miki Kiyokawa', marriedTo: 0, kids: [2, 3, 4], dob: 'December 1, 1970', marriageDate: 'December 28, 1996', marriagePlace: '8118 Ingleside Way, Sacramento, CA', generation: 3, gender: 'f', birthplace: 'Hiroshima, Japan', exists: 'Living', livesIn: 'Honolulu, HI', facts: ['She only went to Japanese School til 4th grade and could speak Japanese fluently now. She also started to learn English in 4th grade and could speak it naturally, despite it being her second language.', 'She was an only child.', 'She went to medical school in the Philippines, where she met my dad.', 'She told me that following graduation of medical school, she and my dad didn\'t know where to go. She then saw a vision of Hawaii in her dream, so she decided to move there.'], memories: ['I remember, if I completed a certain Kumon math worksheet in a certain time limit, she would give me a fruit snack, which motivated me.'], picture: 'mom.png'},

    /*2*/{name: '(廖) Micaiah Cape', marriedTo: -1, kids: [], dob: 'February 15, 2005', marriageDate: 'TBA', marriagePlace: 'TBA', generation: 4, gender: 'm', birthplace: 'Honolulu, HI', exists: 'Living', livesIn: 'Honolulu, HI', facts: ['I have perfect pitch!', 'I have a crush on (encrypted).', 'My longest (non-race) run ever is 11.17 miles, in 1 hour 20 minutes and 57 seconds.', 'I\'m a Kumon Math program graduate', 'I have two published articles in scientific peer-reviewed medical journals.', 'I coded this family tree myself.', 'My cumulative GPA is coincidentally around 4.20'], memories: ['I used to be scared of flashing lights.'], picture: 'micaiah.png'},

    /*3*/{name: '(廖) Malachi Cape', marriedTo: -1, kids: [], dob: 'November 18, 2007', marriageDate: 'TBA', marriagePlace: 'TBA', generation: 4, gender: 'm', birthplace: 'Honolulu, HI', exists: 'Living', livesIn: 'Honolulu, HI', facts: ['He is allergic to gluten', 'He also enjoys cross country and track.', 'He likes to drive me crazy by saying cringy things.'], memories: ['He was holding a yellow toy bulldozer in his hands when he was born.'], picture: 'malachi.png'},

    /*4*/{name: '(廖) Matthew Cape', marriedTo: -1, kids: [], dob: 'July 26, 2009', marriageDate: 'TBA', marriagePlace: 'TBA', generation: 4, gender: 'm', exists: 'Living',birthplace: 'Honolulu, HI', livesIn: 'Honolulu, HI', facts: ['He loves surfing.'], memories: ['He was holding a waterproof glowing watch when he was born.'], picture: 'matthew.png'},

    /*5*/{name: 'Nester Cape', marriedTo: -1, kids: [], picture: '', generation: 2, gender: 'm'},

    /*6*/{name: 'Angelina Abalos', marriedTo: -1, kids: [], dob: 'March 9, 1939', marriageDate: 'TBA', marriagePlace: 'TBA', generation: 2, gender: 'f', kidsOf: [9, 10], exists: 'Deceased - from leukemia in 2014', birthPlace: 'Dyong Calisao, Pangasinan', livesIn: 'Sacramento, CA', facts: ['Met Pio @San Francisco, California, at grandma’s cousin’s restaurant ', '1982 moved to Sacramento – cheaper houses compared to San Francisco.'], memories: ['In celebration of my 8th birthday in California, she invited all my relatives over to her house and bought a 50-pound pig as a main. I also remember her pronouncing “waffle” as “wapple” and it got me so mad and I foolishly tried to correct her.'], picture: ''}, 

    /*7*/{name: 'Tranqulino Cape', marriedTo: 8, kids: [5, 11, 12], dob: 'unknown', marriageDate: 'TBA', marriagePlace: 'TBA', generation: 1, gender: 'm', exists: 'Deceased before I was born', birthplace: 'Canilog Ilo Ilo, Philippines', livesIn: 'N/A', facts: ['Parents died very early; only he and his two sisters.', 'Orphaned at 14 or 15 years old.', 'My dad was actually going to be named after him, but one of my sisters wanted the name “Michael” and persuaded my grandparents to name my dad that. Quite honestly though, Tranquilino is a cool name and I wouldn’t mind having a dad with that name!'], memories: [], picture: ''}, 

    /*8*/{name: 'Rebecca Garcia', marriedTo: 7, kids: [5, 11], dob: 'unknown', marriageDate: 'TBA', marriagePlace: 'TBA', generation: 1, gender: 'f', exists: 'Deceased before I was born', birthplace: 'Canilog Ilo Ilo, Philippines', livesIn: 'N/A', facts: ['Smoked big cigars', 'Was a great story teller'], memories: [], picture: ''}, 

    /*9*/{name: 'Felissimo Abalos', marriedTo: 10, kids: [6, 25, 26, 27, 28, 29, 30], dob: 'unknown', marriageDate: 'TBA', marriagePlace: 'TBA', generation: 1, gender: 'm', exists: 'Deceased before I was born', birthplace: 'Dyong Calisao Pangasinan , Philippines', livesIn: 'N/A', facts: ['Was an architect, helped design buildings'], memories: [], picture: ''}, 

    /*10*/{name: 'Nina Ferrer', marriedTo: 9, kids: [], dob: 'unknown', marriageDate: 'TBA', marriagePlace: 'TBA', generation: 1, gender: 'f', exists: 'Deceased before I was born', birthplace: 'Dyong Calisao Pangasinan , Philippines', livesIn: 'N/A', facts: ['Auntie Nina, the sister that persuaded my dad be named “Michael” is named after him.', 'Owned a lot of land – helped take care of my dad before and after school by feeding him and taking him on walks. '], memories: [], picture: ''}, 

    /*11*/{name: 'Edith Cape', marriedTo: 13, kids: [14, 15], picture: '', generation: 2, gender: 'f'},

    /*12*/{name: 'Pio Cape', marriedTo: 6, kids: [22, 23, 24, 0], dob: 'November 19, 1928', marriageDate: 'TBA', marriagePlace: 'TBA', generation: 2, gender: 'm', exists: 'Living', birthplace: 'Canilog Ilo Ilo, Philippines', livesIn: 'Sacramento, CA', facts: ['He never finished high school, due to war.', 'He was in army, fought in the Korean war. He joined the army to become a citizen. He moved to California as part of the army requirement. He also said that he came to Hawaii for a short while, but due to the lack of employment opportunities, he left.', 'He learned how to play chess and gamble during his nights out at sea. A trip between Philippines, where he was building things, and California, would take up to 2 weeks. To handle the immense boredom, his sailors taught him how to play chess. After a few days, no one wanted to play him anymore because he was too strong.', 'During the Korean War, he was part of frontline. Fortunately, he was driving a tank as a radio operator, so he was sort of safe. He talked about how he witnessed his friends die.', 'He is also a self-taught fisherman, by observing people. His largest fish caught was 50 pounds. His catches often went to the family restaurant.'], memories: ['He recently came over to spend the new year with us. We played chess a lot and I actually beat him several times! I remember the first time I tried to play him I got rekt. By using some strategies, I was able to attack him. We also (fake) gambled a lot, using thin disks as money. It was a great experience.'], picture: ''}, 

    /*13*/{name: 'Eugene', marriedTo: 11, kids: [14, 15], picture: '', generation: 2, gender: 'm'},

    /*14*/{name: 'Aileen', marriedTo: 16, kids: [17], picture: '', generation: 3, gender: 'f'},

    /*15*/{name: 'Edwin', marriedTo: 18, kids: [19, 20, 21], picture: '', generation: 3, gender: 'f'},

    /*16*/{name: 'Nick', marriedTo: 14, kids: [], picture: '', generation: 3, gender: 'm'},

    /*17*/{name: '---', marriedTo: -1, kids: [], picture: '', generation: 4, gender: 'i'},

    /*18*/{name: '---', marriedTo: -1, kids: [], picture: '', generation: 3, gender: 'm'},

    /*19*/{name: '---', marriedTo: -1, kids: [], picture: '', generation: 4, gender: 'm'},

    /*20*/{name: '---', marriedTo: -1, kids: [], picture: '', generation: 4, gender: 'm'},

    /*21*/{name: '---', marriedTo: -1, kids: [], picture: '', generation: 4, gender: 'm'},

    /*22*/{name: 'Joseph Cape', marriedTo: -1, kids: [], picture: '', generation: 3, gender: 'm'},

    /*23*/{name: 'Rowena Cape', marriedTo: -1, kids: [], picture: '', generation: 3, gender: 'f'},

    /*24*/{name: 'Markie Cape', marriedTo: -1, kids: [], picture: '', generation: 3, gender: 'm'},

    /*25*/{name: 'Ernesto the 1st Abalos', marriedTo: -1, kids: [], picture: '', generation: 2, gender: 'm'},

    /*26*/{name: 'Ernesto the 2nd Abalos', marriedTo: 31, kids: [32, 33, 34], picture: '', generation: 2, gender: 'm'},

    /*27*/{name: 'Manny Abalos', marriedTo: 35, kids: [36, 37], picture: '', generation: 2, gender: 'm'},

    /*28*/{name: 'Mike Abalos', marriedTo: 45, kids: [46, 47, 48], picture: '', generation: 2, gender: 'm'},

    /*29*/{name: 'Ellen Abalos', marriedTo: 53, kids: [54, 55, 56], picture: '', generation: 2, gender: 'f'},

    /*30*/{name: 'Ellis Abalos', marriedTo: 57, kids: [60, 59, 58], picture: '', generation: 2, gender: 'f'},

    /*31*/{name: 'Florie', marriedTo: -1, kids: [], picture: '', generation: 2, gender: 'f'},

    /*32*/{name: 'Harley Abalos', marriedTo: -1, kids: [], picture: '', generation: 3, gender: 'm'},

    /*33*/{name: 'Rios Abalos', marriedTo: -1, kids: [], picture: '', generation: 3, gender: 'm'},

    /*34*/{name: 'Venus Abalos', marriedTo: -1, kids: [], picture: '', generation: 3, gender: 'f'},

    /*35*/{name: 'Eva', marriedTo: 27, kids: [], picture: '', generation: 2, gender: 'f'},

    /*36*/{name: 'Euclid Abalos', marriedTo: 38, kids: [39, 40], picture: '', generation: 3, gender: 'm'},

    /*37*/{name: 'Septer Abalos', marriedTo: 41, kids: [42, 43, 44], picture: '', generation: 3, gender: 'm'},

    /*38*/{name: 'Debra', marriedTo: 36, kids: [], picture: '', generation: 3, gender: 'f'},

    /*39*/{name: 'Alexis Abalos', marriedTo: -1, kids: [], picture: '', generation: 4, gender: 'f'},

    /*40*/{name: 'Aiden Abalos', marriedTo: -1, kids: [], picture: '', generation: 4, gender: 'm'},

    /*41*/{name: 'Jasmine', marriedTo: -1, kids: [], picture: '', generation: 3, gender: 'f'},

    /*42*/{name: 'Dimone Abalos', marriedTo: -1, kids: [], picture: '', generation: 4, gender: 'm'},

    /*43*/{name: 'Josela Abalos', marriedTo: -1, kids: [], picture: '', generation: 4, gender: 'f'},

    /*44*/{name: 'Josarah Abalos', marriedTo: -1, kids: [], picture: '', generation: 4, gender: 'f'},

    /*45*/{name: 'Marilyn', marriedTo: -1, kids: [], picture: '', generation: 2, gender: 'f'},

    /*46*/{name: 'Adela Abalos', marriedTo: 49, kids: [50], picture: '', generation: 3, gender: 'f'},

    /*47*/{name: 'Angela Abalos', marriedTo: 51, kids: [52], picture: '', generation: 3, gender: 'f'},

    /*48*/{name: 'America Abalos', marriedTo: -1, kids: [], picture: '', generation: 3, gender: 'f'},

    /*49*/{name: '---', marriedTo: 46, kids: [50], picture: '', generation: 3, gender: 'm'},

    /*50*/{name: 'Jaren', marriedTo: -1, kids: [], picture: '', generation: 4, gender: 'm'},

    /*51*/{name: '---', marriedTo: -1, kids: [52], picture: '', generation: 3, gender: 'm'},

    /*52*/{name: 'Aliana', marriedTo: -1, kids: [], picture: '', generation: 4, gender: 'f'},

    /*53*/{name: 'Doming', marriedTo: -1, kids: [], picture: '', generation: 2, gender: 'm'},

    /*54*/{name: 'Jeff', marriedTo: 61, kids: [], picture: '', generation: 3, gender: 'm'},

    /*55*/{name: 'Chris', marriedTo: 62, kids: [63], picture: '', generation: 3, gender: 'm'},

    /*56*/{name: 'Dominic', marriedTo: -1, kids: [], picture: '', generation: 3, gender: 'm'},

    /*57*/{name: 'Jake', marriedTo: -1, kids: [], picture: '', generation: 2, gender: 'm'},

    /*58*/{name: 'John', marriedTo: -1, kids: [], picture: '', generation: 3, gender: 'm'},

    /*59*/{name: 'David', marriedTo: -1, kids: [], picture: '', generation: 3, gender: 'm'},

    /*60*/{name: 'Jing Jing', marriedTo: 64, kids: [65], picture: '', generation: 3, gender: 'm'},

    /*61*/{name: '---', marriedTo: -1, kids: [], picture: '', generation: 3, gender: 'f'},

    /*62*/{name: '---', marriedTo: -1, kids: [], picture: '', generation: 3, gender: 'f'},

    /*63*/{name: '---', marriedTo: -1, kids: [], picture: '', generation: 4, gender: 'f'},

    /*64*/{name: 'Jordan', marriedTo: -1, kids: [65], picture: '', generation: 3, gender: 'f'},

    /*65*/{name: '---', marriedTo: -1, kids: [], picture: '', generation: 4, gender: 'f'},


]

//width of each element is 10!
var startingPosX;
var startingPosY;
var realStartingPosX;
var realStartingPosY;
var tempStartingX;
var n = 0;
var apartPerGeneration = [200, 120, 40, 15]; /*(siblings)*/
var apartPerGenerationPartners = [1, 1, 1, 1];
var listOfXPositions = [[], [], [], []];
var generationCounter = [0, 0, 0, 0];

var generationHeight = 24;
var distBetweenPartners = document.getElementsByClassName('range1')[0].value;
var boxSize = 10;
var forkX = [];
var forkLocations = [];

function init(a, x, y){
    //find 1st generation
    var location = 0;
    for (var i = 0; i < a.length; i++){
        if(a[i].generation == 1 && i > 4){
            location = i;
            break;
        }
    }
    listOfXPositions = [[], [], [], []];
    generationCounter = [0, 0, 0, 0];
    startingPosX = x;
    realStartingPosX = x;
    startingPosY = y;
    realStartingPosY = y;
    console.log('______________________________________________________________________________________________\n👩‍💻👩‍💻👩‍💻Sᴛᴀʀᴛɪɴɢ Rᴇᴄᴜʀsɪᴏɴ')
    listOfXPositions[0].push(x);
    createMember(a, location, startingPosX, startingPosY);//end x 113
    repeatPathFind(location, a, false);
  
}

function repeatPathFind(l, a, ignoreforks){//l is an int, referring to a location! + recursive sequence
    //creates marriage partner and kids
    n++;

    startingPosY = realStartingPosY + (generationHeight*(a[l].generation-1));

    console.log(n + ' time through: currently rendering ' + a[l].name + '\'s kids')

    generationCounter[a[l].generation-1] +=1;

    console.log('generationCounter ' + generationCounter)

    if(a[l].marriedTo > -1){

        function reversePathFindUp(member){//member is .marriedTo
            //build family tree up a generation
            console.log(member);
            var tempBranchingPoint = forkX[forkX.length-1]+parseInt(boxSize)+parseInt(distBetweenPartners)+parseFloat(boxSize/2)

            console.log('tempbranchingpoint is: ' + tempBranchingPoint);
            
            var siblingsIntoConsideration = tempBranchingPoint + ((a[a[member].kidsOf[0]].kids.length-1)/2)*apartPerGeneration[a[member].generation-1]/*-distBetweenPartners*apartPerGenerationPartners[member.generation-1]-boxSize*/

            /*var siblingsIntoConsideration = tempBranchingPoint + parseInt(member.kidsOf[0].kids.length/2)-(0.5*apartPerGeneration[member.generation-1])+(j*apartPerGeneration[member.generation-1])*/

            console.log('siblings into consideration is: ' + siblingsIntoConsideration);

            createBar('vertical', ((a[member].generation-1)*24)-17, ((a[member].generation-1)*24), siblingsIntoConsideration);

            //build the branch
            createBar('horizontal', siblingsIntoConsideration-((a[member].generation-1)*distBetweenPartners)/2,  siblingsIntoConsideration+((a[member].generation-1)*distBetweenPartners)/2,  ((a[member].generation-1)*24)-17);

            //create the two partners at the end of branch
            createMember(a, a[member].kidsOf[0], siblingsIntoConsideration-((a[member].generation-1)*distBetweenPartners)/2-parseInt(boxSize), ((a[member].generation-1)*24)-21);

            /*listOfXPositions[a[member].generation-1].push(siblingsIntoConsideration-((a[member].generation-1)*distBetweenPartners)/2-parseInt(boxSize))*/

            console.log('created a member' + a[a[member].kidsOf[0]].name + ' on the top');

            createMember(a, a[member].kidsOf[1], siblingsIntoConsideration+((a[member].generation-1)*distBetweenPartners)/2, ((a[member].generation-1)*24)-21);

            console.log('created a member' + a[a[member].kidsOf[1]].name + ' on the top');

            //create kids

            for (var j = 0; j < a[a[member].kidsOf[0]].kids.length; j++){
                listOfXPositions[a[member].generation-1].push(tempBranchingPoint+j*(apartPerGeneration[a[a[member].kidsOf[0]].generation])-parseFloat(boxSize/2));
    
                console.log(listOfXPositions);

                createBar('vertical', (startingPosY-generationHeight*2)+15*(generationHeight/24), (startingPosY-generationHeight*2)+24*(generationHeight/24), tempBranchingPoint+j*(apartPerGeneration[a[a[member].kidsOf[0]].generation]));

                createMember(a, a[a[member].kidsOf[0]].kids[j], tempBranchingPoint+j*(apartPerGeneration[a[a[member].kidsOf[0]].generation])-parseFloat(boxSize/2), (startingPosY-2*generationHeight)+(24*(generationHeight/24)));

                console.log('created kid ' + (j+1) + 'on reverse family tree')
            }        

            if(a[a[member].kidsOf[0]].kids.length>1){
                createBar('horizontal', tempBranchingPoint, tempBranchingPoint+(j-1)*(apartPerGeneration[a[a[member].kidsOf[0]].generation]), (startingPosY-generationHeight*2)+15*(generationHeight/24))
            }

            console.log('sibilings into consideration is: ' + siblingsIntoConsideration)

            //after recursive pathfind down the fork is finished
            for (var j = 0; j < a[a[member].kidsOf[0]].kids.length; j++){
                repeatPathFind(a[a[member].kidsOf[0]].kids[j], a, false)
            }
        }
    
        if(a[a[l].marriedTo].hasOwnProperty('kidsOf')){   
            if(a == maternal){
                forkX.push(listOfXPositions[1][3])
                forkLocations.pop();
                forkLocations.push(5)
                //reversePathFindUp(a[a[l].marriedTo])
                console.log('Detected fork___________________, pushed '+ listOfXPositions[1][3] +' into forkX')
            }else{
                forkX.push(listOfXPositions[1][2])
                forkLocations.pop();
                forkLocations.push(12)
                //reversePathFindUp(a[a[l].marriedTo])
                console.log('Detected fork___________________, pushed '+ listOfXPositions[1][2] +' into forkX')
            }
            
        }else{
            //create second member (married to initial member)
            createMember(a, a[l].marriedTo, listOfXPositions[a[l].generation-1][generationCounter[a[l].generation-1]-1]+parseInt(boxSize)+parseInt(distBetweenPartners*apartPerGenerationPartners[a[l].generation-1]), startingPosY*(generationHeight/24));
        }

        console.log('current list of X positions is ' + listOfXPositions);

        //create bar between

        createBar('horizontal', listOfXPositions[a[l].generation-1][generationCounter[a[l].generation-1]-1]+parseInt(boxSize), listOfXPositions[a[l].generation-1][generationCounter[a[l].generation-1]-1]+parseInt(boxSize)+parseInt(distBetweenPartners*apartPerGenerationPartners[a[l].generation-1]), startingPosY+4*(generationHeight/24));

        /*console.log('created horizontal bar from X: ' + listOfXPositions[a[l].generation-1][generationCounter[a[l].generation-1]-1]+parseInt(boxSize) + ', ' + listOfXPositions[a[l].generation-1][generationCounter[a[l].generation-1]-1]+parseInt(boxSize)+parseInt(distBetweenPartners*apartPerGenerationPartners[a[l].generation-1]));*/

        createBar('vertical', startingPosY+4*(generationHeight/24), startingPosY+15*(generationHeight/24), listOfXPositions[a[l].generation-1][generationCounter[a[l].generation-1]-1]+parseInt(boxSize)+parseInt(distBetweenPartners*apartPerGenerationPartners[a[l].generation-1])/2);
        
        //create children
        for (var j = 0; j < a[l].kids.length; j++){
            listOfXPositions[a[l].generation].push(listOfXPositions[a[l].generation-1][generationCounter[a[l].generation-1]-1]+(boxSize+(distBetweenPartners*apartPerGenerationPartners[a[l].generation-1]))/2-(((a[l].kids.length/2)-0.5)*apartPerGeneration[a[l].generation])+(j*apartPerGeneration[a[l].generation]));

            console.log(listOfXPositions);
               
            //for future reference, the commented text below is for siblings in the future.
            createBar('vertical', startingPosY+15*(generationHeight/24), startingPosY+24*(generationHeight/24), listOfXPositions[a[l].generation-1][generationCounter[a[l].generation-1]-1]+(boxSize+(distBetweenPartners*apartPerGenerationPartners[a[l].generation-1]))/2-(((a[l].kids.length/2)-0.5)*apartPerGeneration[a[l].generation])+(j*apartPerGeneration[a[l].generation])+(boxSize/2));

            createMember(a, a[l].kids[j], listOfXPositions[a[l].generation-1][generationCounter[a[l].generation-1]-1]+(boxSize+(distBetweenPartners*apartPerGenerationPartners[a[l].generation-1]))/2-(((a[l].kids.length/2)-0.5)*apartPerGeneration[a[l].generation])+(j*apartPerGeneration[a[l].generation]), startingPosY+(24*(generationHeight/24)));

        }
        if(a[l].kids.length>0){
            if(a[l].kids.length>1){
                createBar('horizontal', listOfXPositions[a[l].generation-1][generationCounter[a[l].generation-1]-1]+(boxSize+(distBetweenPartners*apartPerGenerationPartners[a[l].generation-1]))/2-(((a[l].kids.length/2)-0.5)*apartPerGeneration[a[l].generation]) + (boxSize/2), listOfXPositions[a[l].generation-1][generationCounter[a[l].generation-1]-1]+(boxSize+(distBetweenPartners*apartPerGenerationPartners[a[l].generation-1]))/2+(((a[l].kids.length/2)-0.5)*apartPerGeneration[a[l].generation]) + (boxSize/2), startingPosY+(15*(generationHeight/24)))
            }

            if(a[l].generation < 3){
                for (var j = 0; j < a[l].kids.length; j++){
                    startingPosX = realStartingPosX+(distBetweenPartners+boxSize)/2-(((a[l].kids.length/2)-0.5)*apartPerGeneration[a[l].generation])+(j*apartPerGeneration[a[l].generation]);
                    repeatPathFind(a[l].kids[j], a, false);
                }

            }else if (a[a[l].kids[a[l].kids.length-1]].name == '(廖) Matthew Cape'){
                console.log('STOP!___')
                if(a == maternal){
                    if(listOfXPositions[3].length == 8){//change accordingly to # of 4th gens
                        reversePathFindUp(a[6].marriedTo);
                        console.log('now reverse pathfinding');
                    }
                }else{
                    if(listOfXPositions[3].length == 7){//change accordingly to # of 4th gens
                        reversePathFindUp(a[12].marriedTo);
                        console.log('now reverse pathfinding');
                    }
                }
            }
        }else{
            //end
            return 0;
        }
    }
}

if(mode == 'm'){
    init(maternal, 240, 3);
}else{
    init(paternal, 150, 3);
}

function createMember(side, location, posX, posY){ // location is also an int!
    var holder = document.createElement('div');
    holder.className = 'preview';
    holder.innerHTML = side[location].name;
    if(side[location].gender == 'f'){
        holder.style.backgroundColor = female;
        //holder.style.border = '2px solid #ff00c8';
    }else if (side[location].gender == 'm'){
        holder.style.backgroundColor = male;
        //holder.style.border = '#1994ff'
    }else{
        holder.style.backgroundColor = unidentified;
    }

    if (side[location].name == '---'){
        holder.style.backgroundColor = unidentified;
    }
    holder.style.color = textColor;
    document.getElementById('tree').appendChild(holder);
    holder.style.top = posY + '%';
    holder.style.left = posX + '%';
    /*var text = document.createElement('p');
    text.innerHTML = location.name;
    text.className = 'namePreview';
    document.getElementsByClassName('preview')[document.getElementsByClassName('preview').length-1].appendChild(text);*/
    if(side[location].hasOwnProperty('dob')){
        holder.addEventListener('click', showMoreInfo);
    }
    holder.addEventListener('mousemove', showInfo);
    holder.addEventListener('mouseout', hideInfo);
    holder.style.brightness = '90%';
}

function showInfo(){
    document.getElementById('informationDiv').style.display = 'block';
    if(event.clientY + 50 > 750){
        document.getElementById('informationDiv').style.top = '750px';
    }else{
        document.getElementById('informationDiv').style.top = event.clientY + 40 + 'px';
    }
    
    document.getElementById('informationDiv').style.left = event.clientX + window.pageXOffset + 15 + 'px';
    document.getElementById('informationDiv').style.display = 'block';
  
    this.style.brightness = '100%';
    //search thru list of names
    /*document.getElementsByClassName('keyInformation')[4].innerHTML = '<b>> Facts: </b>'
    document.getElementsByClassName('keyInformation')[5].innerHTML = '<b>> Personal Memories: </b>'*/
    var locationOfName;
    if(mode == 'm'){
        for (var i = 0; i < maternal.length; i++){
            if(maternal[i].name == this.innerHTML){
                locationOfName = i;
                break;
            }
        }
    }else{
        for (var i = 0; i < paternal.length; i++){
            if(paternal[i].name == this.innerHTML){
                locationOfName = i;
                break;
            }
        }
    }
    
    if(mode == 'm'){
        if(maternal[locationOfName].picture == ''){
            document.getElementById('warningText').style.display = 'block';
            document.getElementById('warningText').innerHTML = '⚠️ No picture available for ' + this.innerHTML;
            document.getElementById('informationDiv').style.width = '14%';
            document.getElementById('informationDiv').style.border = '2px solid red';
            document.getElementById('floatingImage').style.display = 'none';
            if(maternal[locationOfName].hasOwnProperty('dob')){
                document.getElementById('readMore').style.display = 'block';
                document.getElementById('informationDiv').style.border = '2px solid green';
            }else{
                document.getElementById('readMore').style.display = 'none';
                document.getElementById('informationDiv').style.border = '2px solid red';
            }
        }else{
            document.getElementById('warningText').style.display = 'none';
            document.getElementById('informationDiv').style.width = '5%';
            document.getElementById('floatingImage').style.display = 'block';
            document.getElementById('informationDiv').style.border = '2px solid black';
            document.getElementById('floatingImage').setAttribute('src', maternal[locationOfName].picture)
            if(maternal[locationOfName].hasOwnProperty('dob')){
                document.getElementById('informationDiv').style.width = '5%';
                document.getElementById('readMore').style.display = 'block';
                document.getElementById('informationDiv').style.border = '2px solid green';
            }else{
                document.getElementById('readMore').style.display = 'none';
                document.getElementById('informationDiv').style.border = '2px solid black';
            }
        }
    }else{
        if(paternal[locationOfName].picture == ''){
            document.getElementById('warningText').style.display = 'block';
            document.getElementById('warningText').innerHTML = '⚠️ No picture available for ' + this.innerHTML;
            document.getElementById('informationDiv').style.width = '14%';
            document.getElementById('informationDiv').style.border = '2px solid red';
            document.getElementById('floatingImage').style.display = 'none';
            if(paternal[locationOfName].hasOwnProperty('dob')){
                document.getElementById('readMore').style.display = 'block';
                document.getElementById('informationDiv').style.border = '2px solid green';
            }else{
                document.getElementById('readMore').style.display = 'none';
                document.getElementById('informationDiv').style.border = '2px solid red';
            }
        }else{
            document.getElementById('warningText').style.display = 'none';
            document.getElementById('informationDiv').style.width = '5%';
            document.getElementById('floatingImage').style.display = 'block';
            document.getElementById('informationDiv').style.border = '2px solid black';
            document.getElementById('floatingImage').setAttribute('src', paternal[locationOfName].picture)
            if(paternal[locationOfName].hasOwnProperty('dob')){
                document.getElementById('readMore').style.display = 'block';
                document.getElementById('informationDiv').style.border = '2px solid green';
            }else{
                document.getElementById('readMore').style.display = 'none';
                document.getElementById('informationDiv').style.border = '2px solid red';
            }
        }
    }
}

function showMoreInfo(){
    document.getElementById('tree').style.opacity = '0.25';
   
    var locationOfName;
    //remove all instances of stats
    const allFacts = document.querySelectorAll('.facts');

    //position the window
    document.getElementById('moreInformationDiv').style.left = parseInt(window.pageXOffset) + (window.innerWidth*0.25) + "px";
    allFacts.forEach(box => {
    box.remove();
    });

    if(mode == 'm'){
        for (var i = 0; i < maternal.length; i++){
            if(maternal[i].name == this.innerHTML){
                locationOfName = i;
                break;
            }
        }
        
        if(maternal[locationOfName].picture != ''){
            document.getElementById('profilepic').setAttribute('src', maternal[locationOfName].picture);
        }else{
            document.getElementById('profilepic').setAttribute('src', 'https://images.nightcafe.studio//assets/profile.png?tr=w-1600,c-at_max');
        }
        
        document.getElementById('moreInformationDiv').style.display = 'block';
        if(maternal[locationOfName].gender == 'm'){
            document.getElementById('moreInformationDiv').style.border = '3px solid ' + male;
            document.getElementById('topHeader').style.backgroundColor = male;
        }else{
            document.getElementById('moreInformationDiv').style.border = '3px solid ' + female;
            document.getElementById('topHeader').style.backgroundColor = female;
        }
        document.getElementById('topHeader').style.color = textColor;
        document.getElementsByClassName('keyInformation')[0].innerHTML = '<b>► Birthplace: </b>' + maternal[locationOfName].birthplace;
        document.getElementsByClassName('keyInformation')[1].innerHTML = '<b>► Birthdate: </b>' + maternal[locationOfName].dob;
        document.getElementsByClassName('keyInformation')[2].innerHTML = '<b>► Status: </b>' + maternal[locationOfName].exists;
        document.getElementById('introductory').innerHTML = 'About ' + this.innerHTML;
        if(maternal[locationOfName].exists != 'Living'){
            document.getElementsByClassName('keyInformation')[2].style.color = 'red';
        }else{
            document.getElementsByClassName('keyInformation')[2].style.color = 'green';
        }
        document.getElementsByClassName('keyInformation')[3].innerHTML = '<b>► Currently resides in: </b>' + maternal[locationOfName].livesIn;
        for (var i = 0; i < maternal[locationOfName].facts.length; i++){
            var facts = document.createElement('p');
            facts.className = 'facts';
            facts.innerHTML = '» ' + maternal[locationOfName].facts[i];
            document.getElementsByClassName('keyInformation')[4].appendChild(facts);
        }
    
        for (var i = 0; i < maternal[locationOfName].memories.length; i++){
            var m = document.createElement('p');
            m.className = 'facts';
            m.innerHTML = '» ' + maternal[locationOfName].memories[i];
            document.getElementsByClassName('keyInformation')[5].appendChild(m);
        }

    }else{
        for (var i = 0; i < paternal.length; i++){
            if(paternal[i].name == this.innerHTML){
                locationOfName = i;
                break;
            }
        }

        if(paternal[locationOfName].picture != ''){
            document.getElementById('profilepic').setAttribute('src', paternal[locationOfName].picture);
        }else{
            document.getElementById('profilepic').setAttribute('src', 'https://images.nightcafe.studio//assets/profile.png?tr=w-1600,c-at_max');
        }

        document.getElementById('profilepic').setAttribute('src', paternal[locationOfName].picture);
        document.getElementById('moreInformationDiv').style.display = 'block';
        if(maternal[locationOfName].gender == 'm'){
            document.getElementById('moreInformationDiv').style.border = '3px solid ' + male;
            document.getElementById('topHeader').style.backgroundColor = male;
        }else{
            document.getElementById('moreInformationDiv').style.border = '3px solid ' + female;
            document.getElementById('topHeader').style.backgroundColor = female;
        }
        document.getElementById('topHeader').style.color = textColor;
        document.getElementsByClassName('keyInformation')[0].innerHTML = '<b>► Birthplace: </b>' + paternal[locationOfName].birthplace;
        document.getElementsByClassName('keyInformation')[1].innerHTML = '<b>► Birthdate: </b>' + paternal[locationOfName].dob;
        document.getElementsByClassName('keyInformation')[2].innerHTML = '<b>► Status: </b>' + paternal[locationOfName].exists;
        document.getElementById('introductory').innerHTML = 'About ' + this.innerHTML;
        if(paternal[locationOfName].exists != 'Living'){
            document.getElementsByClassName('keyInformation')[2].style.color = 'red';
        }else{
            document.getElementsByClassName('keyInformation')[2].style.color = 'green';
        }
        document.getElementsByClassName('keyInformation')[3].innerHTML = '<b>► Currently resides in: </b>' + paternal[locationOfName].livesIn;
        for (var i = 0; i < paternal[locationOfName].facts.length; i++){
            var facts = document.createElement('p');
            facts.className = 'facts';
            facts.innerHTML = '» ' + paternal[locationOfName].facts[i];
            document.getElementsByClassName('keyInformation')[4].appendChild(facts);
        }
    
        for (var i = 0; i < paternal[locationOfName].memories.length; i++){
            var m = document.createElement('p');
            m.className = 'facts';
            m.innerHTML = '» ' + paternal[locationOfName].memories[i];
            document.getElementsByClassName('keyInformation')[5].appendChild(m);
        }
    }
}

function hideInfo(){
    document.getElementById('informationDiv').style.display = 'none';
}

function createBar(direction, start, end, locationXorY){
    var h = document.createElement('div');
    h.className = 'line';
    h.style.position = 'absolute';
    if(direction == 'horizontal'){
        h.style.left = start + "%";
        h.style.width = (end-start) + "%";
        h.style.top = locationXorY + "%";
    }else{
        h.style.left = locationXorY + "%";
        h.style.top = start + "%";
        h.style.height = ((end - start)/100)*window.innerHeight + 'px';
    }
    h.style.border = document.getElementsByClassName('range1')[3].value + 'px solid ' + barColor;
    h.style.backgroundColor = barColor;
    document.getElementById('tree').appendChild(h);
}

/*document.getElementsByClassName('range1')[1].oninput = function() {
    distBetweenPartners = document.getElementsByClassName('range1')[1].value;
    document.getElementsByClassName('sliderText')[1].innerHTML = 'Distance between partners: ' + distBetweenPartners;
    
    removeAll();
    //redraw
    init(maternal, 203, 3);
}*/

document.getElementsByClassName('range1')[0].oninput = function(){
    boxSize = parseInt(document.getElementsByClassName('range1')[0].value);
    document.getElementsByClassName('sliderText')[0].innerHTML = 'Individual box size: ' + document.getElementsByClassName('range1')[0].value;
}

document.getElementsByClassName('range1')[1].oninput = function(){
    distBetweenPartners = document.getElementsByClassName('range1')[1].value;
    document.getElementsByClassName('sliderText')[1].innerHTML = 'Distance between partners: ' + document.getElementsByClassName('range1')[1].value;
}

document.getElementsByClassName('range1')[2].oninput = function() {
    document.getElementsByClassName('sliderText')[2].innerHTML = 'Distance between siblings: ' + document.getElementsByClassName('range1')[2].value;
    apartPerGeneration[0] = 200*(document.getElementsByClassName('range1')[2].value/20);
    apartPerGeneration[1] = 120*(document.getElementsByClassName('range1')[2].value/20);
    apartPerGeneration[2] = 40*(document.getElementsByClassName('range1')[2].value/20);
    apartPerGeneration[3] = 15*(document.getElementsByClassName('range1')[2].value/20);
}

document.getElementsByClassName('range1')[3].oninput = function(){
    document.getElementsByClassName('sliderText')[3].innerHTML = 'Bar thickness: ' + document.getElementsByClassName('range1')[3].value;
}

function redraw(){
    removeAll();
    if(mode == 'm'){
        init(maternal, 240, 3);
    }else{
        init(paternal, 150, 3);
    }
    
    for (var i = 0; i < document.getElementsByClassName('preview').length; i++){
        document.getElementsByClassName('preview')[i].style.width = boxSize + '%';
        document.getElementsByClassName('preview')[i].style.fontSize = 105*(boxSize/10) + '%';
        
    }
    document.getElementById('title').style.fontSize = 500*(boxSize/10) + '%';
    if(mode == 'm'){
        document.getElementById('title').style.left = parseInt(Math.min(...listOfXPositions[2])) + "%";
    }else{
        document.getElementById('title').style.left = parseInt(Math.min(...listOfXPositions[1])) + "%";
    }
    

    for (var i = 0; i < document.getElementsByClassName('line').length; i++){
        document.getElementsByClassName('line')[i].style.border = document.getElementsByClassName('range1')[3].value + 'px solid black';
    }
}

function removeAll(){
    const boxes = document.querySelectorAll('.preview');

    boxes.forEach(box => {
    box.remove();
    });

    const boxes2 = document.querySelectorAll('.line');

    boxes2.forEach(box2 => {
    box2.remove();
    });
}

function hideSettings(){
    document.getElementById('settingsDiv').style.display = 'none';
    removeAll();
    init(maternal, 210, 3);
    document.getElementById('showSettings').style.display = 'block';
    document.getElementById('informationDiv').style.display = 'none';
}

function showSettings(){
    document.getElementById('settingsDiv').style.display = 'block';
    removeAll();
    init(maternal, 240, 3);
    document.getElementById('showSettings').style.display = 'none';
    document.getElementById('informationDiv').style.display = 'none';
}

document.getElementById('showSettings').style.display = 'none';

document.getElementById('applyBtn').addEventListener('click', redraw);


//small change

function switchMode(){
    if(this.innerHTML == '(Switch to maternal)'){
        mode = 'm';
        this.innerHTML = '(Switch to paternal)';
        this.style.backgroundColor = male;
        document.getElementById('bold').innerHTML = 'Maternal side'
        document.getElementById('bold').style.color = female;
        document.getElementById('title').innerHTML = 'Micaiah\'s maternal family tree ^'
        removeAll();
        init(maternal, 240, 3);
    }else{
        console.log('false');
        mode = 'p';
        this.innerHTML = '(Switch to maternal)';
        this.style.backgroundColor = female;
        document.getElementById('bold').innerHTML = 'Paternal side'
        document.getElementById('bold').style.color = male;
        document.getElementById('title').innerHTML = 'Micaiah\'s paternal family tree ^'
        removeAll();
        init(paternal, 150, 3);
    }
}

document.getElementById('change').addEventListener('click', switchMode);

//by default
document.getElementsByClassName('textBox')[0].value = '#ffa3eb';
document.getElementsByClassName('textBox')[1].value = '#9fd1fc';
document.getElementsByClassName('textBox')[2].value = 'black';
document.getElementsByClassName('textBox')[3].value = 'black';
document.getElementsByClassName('textBox')[4].value = 'black';

function changeFemale(){
    female = document.getElementsByClassName('textBox')[0].value;
    removeAll();
    redraw();
    if(mode == 'f'){
        document.getElementById('bold').style.color = female;
    }else{
        document.getElementById('change').style.backgroundColor = female;
    }
    document.getElementById('emphasisGradient').style.backgroundImage = 'linear-gradient(90deg, ' + female + ', ' + male + ')'
    document.getElementById('title').style.backgroundImage = 'linear-gradient(90deg, ' + female + ', ' + male + ')'
    document.getElementById('rainbowGradient').style.backgroundImage = 'linear-gradient(90deg, ' + female + ', ' + male + ')'
}

function changeMale(){
    male = document.getElementsByClassName('textBox')[1].value;
    removeAll();
    redraw();
    if(mode == 'm'){
        document.getElementById('bold').style.color = male;
        
    }else{
        document.getElementById('change').style.backgroundColor = male;
    }
    document.getElementById('emphasisGradient').style.backgroundImage = 'linear-gradient(90deg, ' + female + ', ' + male + ')'
    document.getElementById('title').style.backgroundImage = 'linear-gradient(90deg, ' + female + ', ' + male + ')'
    document.getElementById('rainbowGradient').style.backgroundImage = 'linear-gradient(90deg, ' + female + ', ' + male + ')'
}

function changeUnidentified(){
    unidentified = document.getElementsByClassName('textBox')[2].value;
    removeAll();
    redraw();
}

function changeBarColor(){
    barColor = document.getElementsByClassName('textBox')[3].value;
    removeAll();
    redraw();
}

function changeTextColor(){
    textColor = document.getElementsByClassName('textBox')[4].value;
    document.getElementById('change').style.color = textColor;
    removeAll();
    redraw();
}

document.getElementsByClassName('inputTextSubmit')[0].addEventListener('click', changeFemale);
document.getElementsByClassName('inputTextSubmit')[1].addEventListener('click', changeMale);
document.getElementsByClassName('inputTextSubmit')[2].addEventListener('click', changeUnidentified);
document.getElementsByClassName('inputTextSubmit')[3].addEventListener('click', changeBarColor);
document.getElementsByClassName('inputTextSubmit')[4].addEventListener('click', changeTextColor);

function hideExtraInfo(){
    document.getElementById('moreInformationDiv').style.display = 'none';
    document.getElementById('tree').style.opacity = '1';
}

document.getElementById('exit').addEventListener('click', hideExtraInfo);
if(mode == 'm'){
    document.getElementById('title').style.left = parseInt(Math.min(...listOfXPositions[2])) + "%";
}else{
    document.getElementById('title').style.left = parseInt(Math.min(...listOfXPositions[1])) + "%";
}

document.getElementById('rainbowGradient').style.backgroundImage = 'linear-gradient(90deg, ' + female + ', ' + male + ')'