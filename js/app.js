//UPDATES FOR THE FUTURE
/*update visual glitch on 3rd generation*/

document.getElementById('settingsDiv').style.height = window.innerHeight + 'px';
var maternal = [
    /*0*/{name: '(廖) Miki Kiyokawa', marriedTo: 1, kids: [2, 3, 4], dob: 'December 1, 1970', marriageDate: 'December 28, 1996', marriagePlace: '8118 Ingleside Way, Sacramento, CA', generation: 3, gender: 'f', birthplace: 'Hiroshima, Japan', exists: 'Living', livesIn: 'Honolulu, HI', facts: ['She only went to Japanese School til 4th grade and could speak Japanese fluently now. She also started to learn English in 4th grade and could speak it naturally, despite it being her second language.', 'She was an only child.', 'She went to medical school in the Philippines, where she met my dad.', 'She told me that following graduation of medical school, she and my dad didn\'t know where to go. She then saw a vision of Hawaii in her dream, so she decided to move there.'], memories: ['I remember, if I completed a certain Kumon math worksheet in a certain time limit, she would give me a fruit snack, which motivated me.']},

    /*1*/{name: 'Michael Cape', marriedTo: 0, kids: [2, 3, 4], dob: 'April 9, 1969', marriageDate: 'December 28, xxxx', marriagePlace: '8118 Ingleside Way, Sacramento, CA', generation: 3, gender: 'm', /*kidsOf: [11, 12],*/ birthplace: 'San Francisco, US', exists: 'Living', livesIn: 'Honolulu, HI', facts: ['He went to Bible college in the Phillipines, where he met my mother.', 'He was the youngest of 4, so he was subject to constant bullying. He therefore developed tactics to fight back.', 'He met my mom when the church sent him to pick up a new member that would be joining them, and that happened to be my mom.'], memories: ['My dad introduced me to running, and we ran and trained for the Great Aloha Run when I was only 7 years old.']}, 

    /*2*/{name: '(廖) Micaiah Cape', marriedTo: -1, kids: [], dob: 'February 15, 2005', marriageDate: 'TBA', marriagePlace: 'TBA', generation: 4, gender: 'm', birthplace: 'Honolulu, HI', exists: 'Living', livesIn: 'Honolulu, HI', facts: ['I have perfect pitch!', 'I have a crush on (encrypted).', 'My longest (non-race) run ever is 11.17 miles, in 1 hour 20 minutes and 57 seconds.', 'I\'m a Kumon Math program graduate', 'I have two published articles in scientific peer-reviewed medical journals.', 'I coded this family tree myself.', 'My cumulative GPA is coincidentally around 4.20'], memories: ['I used to be scared of flashing lights.']},

    /*3*/{name: '(廖) Malachi Cape', marriedTo: -1, kids: [], dob: 'November 18, 2007', marriageDate: 'TBA', marriagePlace: 'TBA', generation: 4, gender: 'm', birthplace: 'Honolulu, HI', exists: 'Living', livesIn: 'Honolulu, HI', facts: ['He is allergic to gluten', 'He also enjoys cross country and track.', 'He likes to drive me crazy by saying cringy things.'], memories: ['He was holding a yellow toy bulldozer in his hands when he was born.']},

    /*4*/{name: '(廖) Matthew Cape', marriedTo: -1, kids: [], dob: 'July 26, 2009', marriageDate: 'TBA', marriagePlace: 'TBA', generation: 4, gender: 'm', exists: 'Living',birthplace: 'Honolulu, HI', livesIn: 'Honolulu, HI', facts: ['He loves surfing.'], memories: ['He was holding a waterproof glowing watch when he was born.']},

    /*5*/{name: '黄幸子', marriedTo: -1, kids: [] /*weird junction*/, dob: 'November 23, 1944', marriageDate: 'TBA', marriagePlace: 'TBA', generation: 2, gender: 'f', kidsOf: [9, 10], birthplace: 'Hiroshima, Japan',exists: 'Deceased; from lung cancer on March 16, 2016', livesIn: 'Taichung, Taiwan', facts: ['(ENCRYPTED - key is stored by me) Swk aduyrifql sy 黄阿六 doe acjmkllqodzs kgzmixyo. Qiffmot: vqz cz zqz ftjyc gctxqegu qpfy taze av nswm luuv, apx th qse bfo oonv zgd 黄阿六 bf bguc. Rojuvx Wqlwr Qsd QZ, tq ydquhq bye dixpm, 黄阿六 uaccdp’n noljk 3 jrbkyd, zyshqeg 黄幸子 kh evy kzwn tq xts. Bgimmet, qssh ktm nepn mowc m nvw jiffm dmbvr, ubp acjmkllqodzs oma jtkfw ofahm.', 'She worked as an accountant to my grandfather.'], memories: ['she always made me egg rice and shrimp every time we went on the train to visit her in Taiwan. She would also always take me to the shopping district next to her. She would also go as far as dropping us off at the airport (and that meant riding the bullet train for an hour with us).', 'She would also watch me do origami and play simple video games next to her.', 'She was also the biggest inspiration for me – she was so loving and kind to me despite her bedridden, it inspired me to be caring towards others regardless of my circumstances.', 'When I stayed at their house, I remember she would have an hourglass by the hot tub. I hated the hourglass and thought it was a monster waiting to attack me. Before I would go in the tub, I remember always asking her “Is the hourglass still there?”']},

    /*6*/{name: '廖仁', marriedTo: 5, kids: [0], dob: 'June 6, 1945', marriageDate: 'TBA', marriagePlace: 'TBA', generation: 2, gender: 'm', exists: 'Living', birthplace: 'Manchuria, China',livesIn: 'Taichung, Taiwan', facts: ['Born in Manchuria due to World War II, but moved back to Taiwan when he was 2 years old', 'Went to Taiwanese school and 東海 college – got in without any exams', 'Went to medical school：広島大学 (Hiroshima University)', '泉生’s (his father\'s) friend was at Osaka、and he met his wife through a formal dinner invited through 広島のおじいちゃん, whom 泉生 knew.', '1981 or 1982 went back home to Taiwan due to stroke from 泉生.', 'One night, he got so drunk that he got swindled out of his money into buying a dog, Taro. Although the dog passed away, the kennel is still there at his house. '], memories: ['I loved numbers ever since I was young, and that is where Sudoku came into play. My grandfather played so much sudoku that he would always have a stash of sudoku books in the bathroom, as well as he would often comment that he encountered the same exact sudoku twice. He would do those crazy merged sudokus and printed some out for me to do when I was back in Hawaii.', 'Following my grandmother’s death, things changed. He started taking us and his friends out on excursions to keep his spirits up. We were so excited for these – for example we went to an actual dude ranch （飛牛牧場）, went to see a glass museum, driving around Taiwan’s largest lake (日月潭）, took us to DIY centers where we could make anything out of wood, and took us to the port many times where we would eat freshly caught fish.']},

    /*7*/{name: '廖泉生', marriedTo: 8, kids: [11, 12, 13, 6], dob: 'November 25, 1916', marriageDate: 'TBA', marriagePlace: 'TBA', generation: 1, gender: 'm', exists: 'Deceased; died in 2015', birthplace: 'Taiwan', livesIn: 'Taichung, Taiwan', facts: ['Initially born in Taiwan and attended intermediate boarding school in Japan.', 'Went to 広島 to help, following atomic bombing in 1945', 'Went to Manchuria to complete medical school. His father was rich so he could afford to go overseas. Did not fight in World War II because he was a doctor. ', 'Inside Manchuria, he was almost forced to marry a Japanese woman due to the territory being under Japanese rule, so they went back to Taiwan.', 'When coming back to Taiwan, there was a limit on how much currency the officials allowed. Because he wanted to bring all of his money back to Taiwan, he converted money into gold and flattened it into extremely thin sheets and tucked it under his socks and belt buckles! '], memories: ['I remember him cracking jokes at the dinner table about when you misbehave at the table, you would be sleeping in the Taro’s kennel that night. I also remember both of my little brothers and I going in front of the dinner table and singing to them, to his request.']},

    /*8*/{name: '林雲', marriedTo: 7, kids: [6], dob: 'March 10, 1926', marriageDate: 'TBA', marriagePlace: 'TBA', generation: 1, gender: 'f', exists: 'Deceased; died in 2014', birthplace: 'Taiwan', livesIn: 'Taichung, Taiwan', facts: ['Also went to Hiroshima to help, following atomic bombing ', 'Was going to a girl\'s school (very rare back then), there was a planned reunion. Coincidentally, there was an announcement that 泉生 was coming back to Taiwan so that was the purpose of the reunion. She was the first girl to come out of the school to meet 泉生, and they instantly started dating. ', 'Fun fact: 泉生 took her to 洋食屋 (western food) and she couldn’t adapt to the customs of using knife and fork, so 泉生 interpreted it as she being pure. In fact, 雲 was so shy that on their first honeymoon, they didn’t even hold hands! They each held one handle of a bag, which was being carried between them.'], memories: ['She would always tell me to eat. She would also have these Russian dolls that always left me intrigued. I remember lining them out on the long hallway or playing bowling with them. If I remember correctly, there were 6 or 7 layers and the interior smelled really good. In fact, I would sometimes play with this just to smell the wood.', 'Her bedroom also had their own automatic toilet. I was scared of it for some reason because I was so used to using my grandfather’s toilet!']},

    /*9*/{name: '黄万たい', marriedTo: 10, kids: [5, 20, 21, 22, 23], dob: '1911', marriageDate: 'TBA', marriagePlace: 'TBA', generation: 1, gender: 'm', exists: 'Deceased', birthplace: 'Puli, Taiwan', livesIn: 'Hiroshima, Japan', facts: ['He has 4 daughters', 'Head of a group of Taiwanese at Osaka; this allowed 廖仁 to meet Ama through the dinner.', 'Had a good job as a postman, but due to 黄阿六 wanting to leave, he left.', 'He told his brothers that he didn’t need inheritance money, so just stay with the house. At the time, it was an older brother’s responsibility to stay.'], memories: []},

    /*10*/{name: '黄阿六', marriedTo: 9, kids: [5, 20, 21, 22, 23], dob: '1916', marriageDate: 'TBA', marriagePlace: 'TBA', generation: 1, gender: 'f', exists: 'Deceased', birthplace: 'Puli, Taiwan', livesIn: 'Hiroshima, Japan', facts: ['They met by matchmaking', 'Moved to Hiroshima before World War 2, because she did not like the agricultural job she worked at Puli and wanted to get out. THEY DIDN’T BRING ANY MONEY!', 'Ran a Chinese restaurant upon arrival. She was a bit weird, in a good way, as my mom likes to describe her. For example, when she ate out, she would get mad at the waiter over skimpy portions. At the same time though, post-World War II, she would offer free hearty meals at her restaurant for any passerby, due to Japan being hit really hard by the war.'], memories: []},

    /*11*/{name: 'Guo Buo', marriedTo: 15, kids: [14, 25, 26], picture: '', generation: 2, gender: 'f'},
    /*12*/{name: 'べんぎちっこん', marriedTo: 16, kids: [27, 28, 29], picture: '', generation: 2, gender: 'm'},
    /*13*/{name: '沖縄のちっこん', marriedTo: 17, kids: [], picture: '', generation: 2, gender: 'm'},
    /*14*/{name: 'メコちゃん', marriedTo: -1, kids: [], picture: '', generation: 3, gender: 'f'},
    /*15*/{name: 'Guo Buo\'s husband', marriedTo: -1, kids: [14], picture: '', generation: 2, gender: 'm'},
    /*16*/{name: 'Gloria', marriedTo: 15, kids: [], picture: '', generation: 2, gender: 'f'},
    /*17*/{name: 'じゅんこ姉さん', marriedTo: 14, kids: [], picture: '', generation: 2, gender: 'f'},
    /*18*/{name: 'Guo Buo\'s kid\'s partner', marriedTo: 14, kids: [], picture: '', generation: 3, gender: 'm'},
    /*19*/{name: 'Guo Buo\'s kid 2', marriedTo: -1, kids: [], picture: '', generation: 3, gender: 'm'},
    /*20*/{name: 'Ama\'s sibling 2', marriedTo: 24, kids: [], picture: '', generation: 2, gender: 'f'},
    /*21*/{name: 'Ama\'s sibling 3', marriedTo: -1, kids: [], picture: '', generation: 2, gender: 'f'},
    /*22*/{name: 'Ama\'s sibling 4', marriedTo: -1, kids: [], picture: '', generation: 2, gender: 'f'},
    /*23*/{name: 'Ama\'s sibling 5', marriedTo: -1, kids: [], picture: '', generation: 2, gender: 'f'},
    /*24*/{name: 'Kid 1', marriedTo: 20, kids: [], picture: '', generation: 3, gender: 'm'},
    /*25*/{name: 'Angela', marriedTo: -1, kids: [], picture: '', generation: 3, gender: 'f'},
    /*26*/{name: 'Henry', marriedTo: -1, kids: [], picture: '', generation: 3, gender: 'm'},
    /*27*/{name: 'Mark', marriedTo: 30, kids: [], picture: '', generation: 3, gender: 'm'},
    /*28*/{name: 'Gwen', marriedTo: 31, kids: [], picture: '', generation: 3, gender: 'f'},
    /*29*/{name: 'Daniel', marriedTo: 32, kids: [], picture: '', generation: 3, gender: 'm'},
    /*30*/{name: 'Suk', marriedTo: -1, kids: [], picture: '', generation: 3, gender: 'f'},
    /*31*/{name: 'Steve Arimoto', marriedTo: -1, kids: [], picture: '', generation: 3, gender: 'm'},
    /*32*/{name: 'Sayako', marriedTo: -1, kids: [], picture: '', generation: 3, gender: 'f'},
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
    Uncle Septer is married to Auntie Jasmine, and Demone (s) and Josela and Josarah
    Auntie Adela is married to XXXX, Jaren is the son
    Angela is married to XXXX, has 1 daughter named Aliana
    Jeff is married to XXXX
    Uncle Chris is married to XXXX and has XXXX
    Jing jing is married to Jordan

    ________________________

    Under Auntie Edith, she was married to Uncle Eugene, two children are Aileen (married to Nick) -> adopted a son. Edwin is the younger brother of Aileen, he's also married, and has 3 kids  




];
//width of each element is 10!
var startingPosX;
var startingPosY;
var realStartingPosX;
var realStartingPosY;
var tempStartingX;
var n = 0;
var apartPerGeneration = [100, 90, 50, 25]; /*(siblings)*/
var apartPerGenerationPartners = [1, 1, 1, 1];
var listOfXPositions = [[], [], [], []];
var generationCounter = [0, 0, 0, 0];

var generationHeight = 24;
var distBetweenPartners = 15;
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
            var tempBranchingPoint = forkX[0]+parseInt(boxSize)+parseInt(distBetweenPartners+parseInt(boxSize/2))

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
                listOfXPositions[a[member].generation-1].push(tempBranchingPoint+j*(apartPerGeneration[a[a[member].kidsOf[0]].generation])-parseInt(boxSize/2));
    
                console.log(listOfXPositions);

                createBar('vertical', (startingPosY-generationHeight*2)+15*(generationHeight/24), (startingPosY-generationHeight*2)+24*(generationHeight/24), tempBranchingPoint+j*(apartPerGeneration[a[a[member].kidsOf[0]].generation]));

                createMember(a, a[a[member].kidsOf[0]].kids[j], tempBranchingPoint+j*(apartPerGeneration[a[a[member].kidsOf[0]].generation])-parseInt(boxSize/2), (startingPosY-2*generationHeight)+(24*(generationHeight/24)));

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
            forkX.push(listOfXPositions[1][3])  
            forkLocations.push(6)
            //reversePathFindUp(a[a[l].marriedTo])
            console.log('Detected fork___________________')
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

            }else if (a[a[l].kids[2]].name == '(廖) Matthew Cape'){
                console.log('STOP!___')
                if(listOfXPositions[3].length == 3){
                    reversePathFindUp(a[6].marriedTo);
                    console.log('now reverse pathfinding');
                }
            }
            
        }else{
            //end
            return 0;
        }
    }
}

init(maternal, 180, 3);

function createMember(side, location, posX, posY){ // location is also an int!
    var holder = document.createElement('div');
    holder.className = 'preview';
    holder.innerHTML = side[location].name;
    if(side[location].gender == 'f'){
        holder.style.backgroundColor = '#ffa3eb';
        //holder.style.border = '2px solid #ff00c8';
    }else{
        holder.style.backgroundColor = '#9fd1fc'
        //holder.style.border = '#1994ff'
    }
    document.getElementById('tree').appendChild(holder);
    holder.style.top = posY + '%';
    holder.style.left = posX + '%';
    /*var text = document.createElement('p');
    text.innerHTML = location.name;
    text.className = 'namePreview';
    document.getElementsByClassName('preview')[document.getElementsByClassName('preview').length-1].appendChild(text);*/
    holder.addEventListener('click', showInfo);
    holder.style.brightness = '90%';
}

function showInfo(){
 
    document.getElementById('informationText').innerHTML = 'About ' + this.innerHTML;
    if(event.clientY + 50 > 300){
        document.getElementById('informationDiv').style.top = '300px';
    }else{
        document.getElementById('informationDiv').style.top = event.clientY + 50 + 'px';
    }
    
    document.getElementById('informationDiv').style.left = event.clientX + window.pageXOffset - 100 + 'px';
    document.getElementById('informationDiv').style.display = 'block';
    this.style.border = '3px solid yellow';
    this.style.brightness = '100%';
    //search thru list of names
    document.getElementsByClassName('keyInformation')[4].innerHTML = '<b>> Facts: </b>'
    document.getElementsByClassName('keyInformation')[5].innerHTML = '<b>> Personal Memories: </b>'
    var locationOfName;
    for (var i = 0; i < maternal.length; i++){
        if(maternal[i].name == this.innerHTML){
            locationOfName = i;
            break;
        }
    }
    document.getElementsByClassName('keyInformation')[0].innerHTML = '<b>> Birthplace: </b>' + maternal[locationOfName].birthplace;
    document.getElementsByClassName('keyInformation')[1].innerHTML = '<b>> Birthdate: </b>' + maternal[locationOfName].dob;
    document.getElementsByClassName('keyInformation')[2].innerHTML = '<b>> Status: </b>' + maternal[locationOfName].exists;
    if(maternal[locationOfName].exists != 'Living'){
        document.getElementsByClassName('keyInformation')[2].style.color = 'red';
    }else{
        document.getElementsByClassName('keyInformation')[2].style.color = 'lightgreen';
    }
    document.getElementsByClassName('keyInformation')[3].innerHTML = '<b>> Currently resides in: </b>' + maternal[locationOfName].livesIn;
    for (var i = 0; i < maternal[locationOfName].facts.length; i++){
        var facts = document.createElement('p');
        facts.className = 'facts';
        facts.innerHTML = '- ' + maternal[locationOfName].facts[i];
        document.getElementsByClassName('keyInformation')[4].appendChild(facts);
    }

    for (var i = 0; i < maternal[locationOfName].memories.length; i++){
        var m = document.createElement('p');
        m.className = 'facts';
        m.innerHTML = '- ' + maternal[locationOfName].memories[i];
        document.getElementsByClassName('keyInformation')[5].appendChild(m);
    }
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
    apartPerGeneration[1] = 100*(document.getElementsByClassName('range1')[2].value/20);
    apartPerGeneration[2] = 50*(document.getElementsByClassName('range1')[2].value/20);
    apartPerGeneration[3] = 20*(document.getElementsByClassName('range1')[2].value/20);
}

document.getElementsByClassName('range1')[3].oninput = function(){
    document.getElementsByClassName('sliderText')[3].innerHTML = 'Bar thickness: ' + document.getElementsByClassName('range1')[3].value;
}

function redraw(){
    removeAll();
    init(maternal, 180, 3);
    for (var i = 0; i < document.getElementsByClassName('preview').length; i++){
        document.getElementsByClassName('preview')[i].style.width = boxSize + '%';
        document.getElementsByClassName('preview')[i].style.fontSize = 85*(boxSize/10) + '%';
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
    init(maternal, 150, 3);
    document.getElementById('showSettings').style.display = 'block';
    document.getElementById('informationDiv').style.display = 'none';
}

function showSettings(){
    document.getElementById('settingsDiv').style.display = 'block';
    removeAll();
    init(maternal, 180, 3);
    document.getElementById('showSettings').style.display = 'none';
    document.getElementById('informationDiv').style.display = 'none';
}

document.getElementById('showSettings').style.display = 'none';

document.getElementById('applyBtn').addEventListener('click', redraw);
document.getElementById('x').addEventListener('click', hideSettings);
document.getElementById('showSettings').addEventListener('click', showSettings);

//small change