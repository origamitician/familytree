//UPDATES FOR THE FUTURE
/*update visual glitch on 3rd generation*/

document.getElementById('settingsDiv').style.height = window.innerHeight + 'px';
var maternal = [
    /*0*/{name: '(廖) Miki Kiyokawa', marriedTo: 1, kids: [2, 3, 4], dob: 'December 1, 1970', marriageDate: 'December 28, 1996', marriagePlace: '8118 Ingleside Way, Sacramento, CA', generation: 3, gender: 'f', birthplace: 'Hiroshima, Japan', exists: 'Living', livesIn: 'Honolulu, HI', facts: ['She only went to Japanese School til 4th grade and could speak Japanese fluently now. She also started to learn English in 4th grade and could speak it naturally, despite it being her second language.', 'She was an only child.', 'She went to medical school in the Philippines, where she met my dad.', 'She told me that following graduation of medical school, she and my dad didn\'t know where to go. She then saw a vision of Hawaii in her dream, so she decided to move there.'], memories: ['I remember, if I completed a certain Kumon math worksheet in a certain time limit, she would give me a fruit snack, which motivated me.']},

    /*1*/{name: 'Michael Cape', marriedTo: 0, kids: [2, 3, 4], dob: 'April 9, 1969', marriageDate: 'December 28, xxxx', marriagePlace: '8118 Ingleside Way, Sacramento, CA', generation: 3, gender: 'm', kidsOf: [11, 12], birthplace: 'San Francisco, US', exists: 'Living', livesIn: 'Honolulu, HI', facts: ['He went to Bible college in the Phillipines, where he met my mother.', 'He was the youngest of 4, so he was subject to constant bullying. He therefore developed tactics to fight back.'], memories: ['My dad introduced me to running, and we ran and trained for the Great Aloha Run when I was only 7 years old.']},

    /*2*/{name: '(廖) Micaiah Cape', marriedTo: -1, kids: [], dob: 'February 15, 2005', marriageDate: 'TBA', marriagePlace: 'TBA', generation: 4, gender: 'm', birthplace: 'Honolulu, HI', exists: 'Living', livesIn: 'Honolulu, HI', facts: ['I have perfect pitch!', 'I wish I could ask (encrypted) to prom this year.', 'My longest run ever is 10.58 miles, in 1 hour 14 minutes and 8 seconds.', 'I\'m a Kumon Math program graduate', 'I have two published articles in scientific peer-reviewed medical journals.', 'I coded this family tree myself.', ''], memories: ['My dad introduced me to running, and we ran and trained for the Great Aloha Run when I was only 7 years old.']},

    /*3*/{name: '(廖) Malachi Cape', marriedTo: -1, kids: [], dob: 'November 18, 2007', marriageDate: 'TBA', marriagePlace: 'TBA', generation: 4, gender: 'm'},

    /*4*/{name: '(廖) Matthew Cape', marriedTo: -1, kids: [], dob: 'July 26, 2009', marriageDate: 'TBA', marriagePlace: 'TBA', generation: 4, gender: 'm'},

    /*5*/{name: '黄幸子', marriedTo: 6, kids: [0], dob: 'November 23, 1944', marriageDate: 'TBA', marriagePlace: 'TBA', generation: 2, gender: 'f', kidsOf: [9, 10]},

    /*6*/{name: '廖仁', marriedTo: 5, kids: [0], dob: 'June 6, 1945', marriageDate: 'TBA', marriagePlace: 'TBA', generation: 2, gender: 'm'},

    /*7*/{name: '廖泉生', marriedTo: 8, kids: [6], dob: 'November 25, 1916', marriageDate: 'TBA', marriagePlace: 'TBA', generation: 1, gender: 'm'},

    /*8*/{name: '林雲', marriedTo: 7, kids: [6], dob: 'March 10, 1926', marriageDate: 'TBA', marriagePlace: 'TBA', generation: 1, gender: 'f'},

    /*9*/{name: '黄万たい', marriedTo: 10, kids: [5], dob: '1911', marriageDate: 'TBA', marriagePlace: 'TBA', generation: 1, gender: 'm'},

    /*10*/{name: '黄阿六', marriedTo: 9, kids: [5], dob: '1916', marriageDate: 'TBA', marriagePlace: 'TBA', generation: 1, gender: 'f'},

    /*11*/{name: 'Pio Cape', marriedTo: 12, kids: [1], dob: 'TBA', marriageDate: 'TBA', marriagePlace: 'TBA', generation: 2, gender: 'm', kidsOf: [13, 14]},

    /*12*/{name: 'Angelina Abalos', marriedTo: 9, kids: [1], dob: 'TBA', marriageDate: 'TBA', marriagePlace: 'TBA', generation: 2, gender: 'f', kidsOf: [15, 16]},

    /*13*/{name: 'Tranqulino Cape', marriedTo: 14, kids: [], dob: 'TBA', marriageDate: 'TBA', marriagePlace: 'TBA', generation: 1, gender: 'm'},

    /*14*/{name: 'Rebecca Garcia', marriedTo: 13, kids: [], dob: 'TBA', marriageDate: 'TBA', marriagePlace: 'TBA', generation: 1, gender: 'f'},

    /*15*/{name: 'Felissimo Abalos', marriedTo: 16, kids: [], dob: 'TBA', marriageDate: 'TBA', marriagePlace: 'TBA', generation: 1, gender: 'm'},

    /*16*/{name: 'Nina Ferrer', marriedTo: 15, kids: [], dob: 'TBA', marriageDate: 'TBA', marriagePlace: 'TBA', generation: 1, gender: 'f'},
];
//width of each element is 10!
var startingPosX;
var startingPosY;
var realStartingPosX;
var realStartingPosY;
var tempStartingX;
var n = 0;
var apartPerGeneration = [200, 100, 50, 20];
var apartPerGenerationPartners = [1, 2, 5, 14];
var listOfXPositions = [[], [], [], []];
var generationCounter = [0, 0, 0, 0];
var apartPerGenerationPartners
var generationHeight = 24;
var distBetweenPartners = 15;
var boxSize = 10;

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
    repeatPathFind(location, a);
}

function repeatPathFind(l, a){//l is an int, referring to a location! + recursive sequence
    //creates marriage partner and kids
    n++;
    startingPosY = realStartingPosY + (generationHeight*(a[l].generation-1));
    console.log(n + ' time through: currently rendering ' + a[l].name + '\'s kids')
    generationCounter[a[l].generation-1] +=1;
    if(a[l].marriedTo > -1){
        createMember(a, a[l].marriedTo, listOfXPositions[a[l].generation-1][generationCounter[a[l].generation-1]-1]+parseInt(boxSize)+parseInt(distBetweenPartners*apartPerGenerationPartners[a[l].generation-1]), startingPosY*(generationHeight/24));
        if(a[a[l].marriedTo].hasOwnProperty('kidsOf')){
            var tempBranchingPoint = listOfXPositions[a[l].generation-1][generationCounter[a[l].generation-1]-1]+parseInt(boxSize)+parseInt(distBetweenPartners*apartPerGenerationPartners[a[l].generation-1])+parseInt(boxSize/2);

            function reversePathFindUp(member){//member is .marriedTo
                //build family tree up a generation
                createBar('vertical', ((member.generation-1)*24)-17, ((member.generation-1)*24)+4*(generationHeight/24), tempBranchingPoint);
                //build the branch
                createBar('horizontal', tempBranchingPoint-((member.generation-1)*distBetweenPartners)/2,  tempBranchingPoint+((member.generation-1)*distBetweenPartners)/2,  ((member.generation-1)*24)-17);
                //create the two partners at the end of branch
                createMember(a, member.kidsOf[0], tempBranchingPoint-((member.generation-1)*distBetweenPartners)/2-parseInt(boxSize), ((member.generation-1)*24)-21);
                console.log('created a member' + member.kids[0] + ' on the top');
                createMember(a, member.kidsOf[1], tempBranchingPoint+((member.generation-1)*distBetweenPartners)/2, ((member.generation-1)*24)-21);
                console.log('created a member' + member.kids[1] + ' on the top');
                var originalBranchingPoint = tempBranchingPoint;
                if(a[member.kidsOf[0]].hasOwnProperty('kidsOf')){
                    //recurse
                    tempBranchingPoint = tempBranchingPoint-((member.generation-1)*distBetweenPartners)/2-parseInt(boxSize/2);
                    reversePathFindUp(a[member.kidsOf[0]]);
                }

                if(a[member.kidsOf[1]].hasOwnProperty('kidsOf')){
                    tempBranchingPoint = originalBranchingPoint+((member.generation-1)*distBetweenPartners)/2+parseInt(boxSize/2);
                    reversePathFindUp(a[member.kidsOf[1]]);
                }
            }
            reversePathFindUp(a[a[l].marriedTo])
        }

        console.log('creating marriage partner of ' + a[l].name + ' at X: ' + (listOfXPositions[a[l].generation-1][generationCounter[a[l].generation-1]-1]+parseInt(boxSize)+parseInt(distBetweenPartners*apartPerGenerationPartners[a[l].generation-1])));
        console.log('current list of X positions is ' + listOfXPositions);
        //create bar between
        createBar('horizontal', listOfXPositions[a[l].generation-1][generationCounter[a[l].generation-1]-1]+parseInt(boxSize), listOfXPositions[a[l].generation-1][generationCounter[a[l].generation-1]-1]+parseInt(boxSize)+parseInt(distBetweenPartners*apartPerGenerationPartners[a[l].generation-1]), startingPosY+4*(generationHeight/24));
        /*console.log('created horizontal bar from X: ' + listOfXPositions[a[l].generation-1][generationCounter[a[l].generation-1]-1]+parseInt(boxSize) + ', ' + listOfXPositions[a[l].generation-1][generationCounter[a[l].generation-1]-1]+parseInt(boxSize)+parseInt(distBetweenPartners*apartPerGenerationPartners[a[l].generation-1]));*/
        createBar('vertical', startingPosY+4*(generationHeight/24), startingPosY+15*(generationHeight/24), listOfXPositions[a[l].generation-1][generationCounter[a[l].generation-1]-1]+parseInt(boxSize)+parseInt(distBetweenPartners*apartPerGenerationPartners[a[l].generation-1])/2);
        //create children
        for (var j = 0; j < a[l].kids.length; j++){
            listOfXPositions[a[l].generation].push(startingPosX+parseInt(boxSize+distBetweenPartners*apartPerGenerationPartners[a[l].generation-1])/2)/2-(((a[l].kids.length/2)-0.5)*apartPerGeneration[a[l].generation])+(j*apartPerGeneration[a[l].generation]);
               
            //for future reference, the commented text below is for siblings in the future.
            createBar('vertical', startingPosY+15*(generationHeight/24), startingPosY+24*(generationHeight/24), listOfXPositions[a[l].generation-1][generationCounter[a[l].generation-1]-1]+(boxSize+(distBetweenPartners*apartPerGenerationPartners[a[l].generation-1]))/2-(((a[l].kids.length/2)-0.5)*apartPerGeneration[a[l].generation])+(j*apartPerGeneration[a[l].generation])+(boxSize/2));
            
            /*createBar('vertical', startingPosY+15*(generationHeight/24), startingPosY+24*(generationHeight/24), listOfXPositions[a[l].generation-1][generationCounter[a[l].generation-1]-1]+parseInt(boxSize)+parseInt(distBetweenPartners*apartPerGenerationPartners[a[l].generation-1])/2);*/

            createMember(a, a[l].kids[j], listOfXPositions[a[l].generation-1][generationCounter[a[l].generation-1]-1]+(boxSize+(distBetweenPartners*apartPerGenerationPartners[a[l].generation-1]))/2-(((a[l].kids.length/2)-0.5)*apartPerGeneration[a[l].generation])+(j*apartPerGeneration[a[l].generation]), startingPosY+(24*(generationHeight/24)));

            console.log('created ' + a[l].name + '\'s kid: ' + a[a[l].kids[j]].name + ' at X=');
        }
        if(a[l].kids.length>0){
            if(a[l].kids.length>1){
                createBar('horizontal', listOfXPositions[a[l].generation-1][generationCounter[a[l].generation-1]-1]+(boxSize+(distBetweenPartners*apartPerGenerationPartners[a[l].generation-1]))/2-(((a[l].kids.length/2)-0.5)*apartPerGeneration[a[l].generation]) + (boxSize/2), listOfXPositions[a[l].generation-1][generationCounter[a[l].generation-1]-1]+(boxSize+(distBetweenPartners*apartPerGenerationPartners[a[l].generation-1]))/2+(((a[l].kids.length/2)-0.5)*apartPerGeneration[a[l].generation]) + (boxSize/2), startingPosY+(15*(generationHeight/24)))
            }
            for (var j = 0; j < a[l].kids.length; j++){
                startingPosX = realStartingPosX+12.5-(((a[l].kids.length/2)-0.5)*apartPerGeneration[a[l].generation])+(j*apartPerGeneration[a[l].generation]);
                repeatPathFind(a[l].kids[j], a);
            }
        }else{
            return 0;
        }
    }
}

init(maternal, 40, 3);

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
    this.style.border = '3px solid yellow';
    this.style.brightness = '100%';
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
    init(maternal, 40, 3);
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
    init(maternal, 20, 3);
    document.getElementById('showSettings').style.display = 'block';
}

function showSettings(){
    document.getElementById('settingsDiv').style.display = 'block';
    removeAll();
    init(maternal, 40, 3);
    document.getElementById('showSettings').style.display = 'none';
}

document.getElementById('showSettings').style.display = 'none';

document.getElementById('applyBtn').addEventListener('click', redraw);
document.getElementById('x').addEventListener('click', hideSettings);
document.getElementById('showSettings').addEventListener('click', showSettings);

