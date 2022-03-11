//UPDATES FOR THE FUTURE
/*update visual glitch on 3rd generation*/

document.getElementById('settingsDiv').style.height = window.innerHeight + 'px';
var maternal = [
    /*0*/{name: '(廖) Miki Kiyokawa', marriedTo: 1, kids: [2, 3, 4], dob: 'December 1, 1970', marriageDate: 'December 28, 1996', marriagePlace: '8118 Ingleside Way, Sacramento, CA', generation: 3, gender: 'f', information: ''},

    /*1*/{name: 'Michael Cape', marriedTo: 0, kids: [2, 3, 4], dob: 'April 9, 1969', marriageDate: 'December 28, xxxx', marriagePlace: '8118 Ingleside Way, Sacramento, CA', generation: 3, gender: 'm'},

    /*2*/{name: '(廖) Micaiah Cape', marriedTo: -1, kids: [], dob: 'February 15, 2005', marriageDate: 'TBA', marriagePlace: 'TBA', generation: 4, gender: 'm'},

    /*3*/{name: '(廖) Malachi Cape', marriedTo: -1, kids: [], dob: 'November 18, 2007', marriageDate: 'TBA', marriagePlace: 'TBA', generation: 4, gender: 'm'},

    /*4*/{name: '(廖) Matthew Cape', marriedTo: -1, kids: [], dob: 'July 26, 2009', marriageDate: 'TBA', marriagePlace: 'TBA', generation: 4, gender: 'm'},

    /*5*/{name: '黄幸子', marriedTo: 6, kids: [0], dob: 'November 23, 1944', marriageDate: 'TBA', marriagePlace: 'TBA', generation: 2, gender: 'f', kidsOf: [9, 10]},

    /*6*/{name: '廖仁', marriedTo: 5, kids: [0], dob: 'June 6, 1945', marriageDate: 'TBA', marriagePlace: 'TBA', generation: 2, gender: 'm'},

    /*7*/{name: '廖泉生', marriedTo: 8, kids: [6], dob: 'November 25, 1916', marriageDate: 'TBA', marriagePlace: 'TBA', generation: 1, gender: 'm'},

    /*8*/{name: '林雲', marriedTo: 7, kids: [6], dob: 'March 10, 1926', marriageDate: 'TBA', marriagePlace: 'TBA', generation: 1, gender: 'f'},

    /*9*/{name: '黄万たい', marriedTo: 10, kids: [5], dob: '1911', marriageDate: 'TBA', marriagePlace: 'TBA', generation: 1, gender: 'm'},

    /*10*/{name: '黄阿六', marriedTo: 9, kids: [5], dob: '1916', marriageDate: 'TBA', marriagePlace: 'TBA', generation: 1, gender: 'f'},
];


//width of each element is 10!

var startingPosX;
var startingPosY;
var realStartingPosX;
var realStartingPosY;
var tempStartingX;
var n = 0;
var apartPerGeneration = [200, 100, 50, 20];

var listOfXPositions = [[], [], [], []];
var generationCounter = [0, 0, 0, 0];
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
        createMember(a, a[l].marriedTo, listOfXPositions[a[l].generation-1][generationCounter[a[l].generation-1]-1]+parseInt(boxSize)+parseInt(distBetweenPartners*a[l].generation), startingPosY*(generationHeight/24));
        if(a[a[l].marriedTo].has)
        console.log('creating marriage partner of ' + a[l].name + ' at X: ' + (listOfXPositions[a[l].generation-1][generationCounter[a[l].generation-1]-1]+parseInt(boxSize)+parseInt(distBetweenPartners*a[l].generation)));
        console.log('current list of X positions is ' + listOfXPositions);

        //create bar between
        createBar('horizontal', listOfXPositions[a[l].generation-1][generationCounter[a[l].generation-1]-1]+parseInt(boxSize), listOfXPositions[a[l].generation-1][generationCounter[a[l].generation-1]-1]+parseInt(boxSize)+parseInt(distBetweenPartners*a[l].generation), startingPosY+4*(generationHeight/24));

        /*console.log('created horizontal bar from X: ' + listOfXPositions[a[l].generation-1][generationCounter[a[l].generation-1]-1]+parseInt(boxSize) + ', ' + listOfXPositions[a[l].generation-1][generationCounter[a[l].generation-1]-1]+parseInt(boxSize)+parseInt(distBetweenPartners*a[l].generation));*/

        createBar('vertical', startingPosY+4*(generationHeight/24), startingPosY+15*(generationHeight/24), listOfXPositions[a[l].generation-1][generationCounter[a[l].generation-1]-1]+parseInt(boxSize)+parseInt(distBetweenPartners*a[l].generation)/2);

        //create children
        for (var j = 0; j < a[l].kids.length; j++){
            listOfXPositions[a[l].generation].push(startingPosX+parseInt(boxSize+distBetweenPartners*a[l].generation)/2)/2-(((a[l].kids.length/2)-0.5)*apartPerGeneration[a[l].generation])+(j*apartPerGeneration[a[l].generation]);
               
            //for future reference, the commented text below is for siblings in the future.
            createBar('vertical', startingPosY+15*(generationHeight/24), startingPosY+24*(generationHeight/24), listOfXPositions[a[l].generation-1][generationCounter[a[l].generation-1]-1]+(boxSize+(distBetweenPartners*a[l].generation))/2-(((a[l].kids.length/2)-0.5)*apartPerGeneration[a[l].generation])+(j*apartPerGeneration[a[l].generation])+(boxSize/2));
            
            /*createBar('vertical', startingPosY+15*(generationHeight/24), startingPosY+24*(generationHeight/24), listOfXPositions[a[l].generation-1][generationCounter[a[l].generation-1]-1]+parseInt(boxSize)+parseInt(distBetweenPartners*a[l].generation)/2);*/

            createMember(a, a[l].kids[j], listOfXPositions[a[l].generation-1][generationCounter[a[l].generation-1]-1]+(boxSize+(distBetweenPartners*a[l].generation))/2-(((a[l].kids.length/2)-0.5)*apartPerGeneration[a[l].generation])+(j*apartPerGeneration[a[l].generation]), startingPosY+(24*(generationHeight/24)));

            console.log('created ' + a[l].name + '\'s kid: ' + a[a[l].kids[j]].name + ' at X=');

        }
        if(a[l].kids.length>0){
            if(a[l].kids.length>1){
                createBar('horizontal', listOfXPositions[a[l].generation-1][generationCounter[a[l].generation-1]-1]+(boxSize+(distBetweenPartners*a[l].generation))/2-(((a[l].kids.length/2)-0.5)*apartPerGeneration[a[l].generation]) + (boxSize/2), listOfXPositions[a[l].generation-1][generationCounter[a[l].generation-1]-1]+(boxSize+(distBetweenPartners*a[l].generation))/2+(((a[l].kids.length/2)-0.5)*apartPerGeneration[a[l].generation]) + (boxSize/2), startingPosY+(15*(generationHeight/24)))
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
    this.style.border = '4px solid yellow';
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

document.getElementById('applyBtn').addEventListener('click', redraw);

