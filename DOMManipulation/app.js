//creates a button on the page, creates text for the button, appends button text to button, and appends button to page. 
let btn = document.createElement('button');
let btnText = document.createTextNode('Button 1')
btn.append(btnText);
document.body.append(btn);
btn.style.marginTop = '2em';
btn.style.marginBottom = '2em';

//adds click functionality.
btn.addEventListener('click', function () {
    alert('');
});

//defines HTML button and text box content in JS.
let btn2 = document.getElementById('btn2')
let txtBoxContent = document.getElementById('textBox1');

//adds click event that displays the contents of text box when button is pressed.
btn2.addEventListener('click', function () {
    alert(txtBoxContent.value);
});

//defines div in JS document.
let myDiv = document.getElementById('myDiv');
myDiv.style.marginTop = '2em';
myDiv.style.marginBottom = '2em';

//Changes background color of HTML div element.
myDiv.addEventListener('mouseover', function () {
    myDiv.style.backgroundColor = 'gainsboro';
});

//changes background of HTML div back to original color.
myDiv.addEventListener('mouseout', function () {
    myDiv.style.backgroundColor = 'white';
});

//defines a paragraph element and its contents.
let paragraph = document.createElement('p');
let pTxt = document.createTextNode('I\'m a litte teapot, short and stout....');
document.body.append(paragraph);
paragraph.append(pTxt);
paragraph.style.marginTop = '2em';
paragraph.style.marginBottom = '2em';

//changes text color to red Made irrelivant by next task. 
//paragraph.style.color = 'red';

//changes text to random color on click function.
paragraph.addEventListener('click', function () {
    paragraph.style.color = randoRainbow();
});

document.createElement('div');

function randoRainbow() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

//Creates a new div (with id) and a button (with id). Appends button and div to page.
let newDiv = document.createElement('div');
newDiv.setAttribute('id', 'frankenDiv');
let btnIgor = document.createElement('button');
let btnIgorTxt = document.createTextNode('GIVE IT LIFE!');
btnIgor.setAttribute('id', 'yesMaster');
document.body.append(newDiv);
newDiv.append(btnIgor);
btnIgor.append(btnIgorTxt);

//creates a terrifying monster that has FEELINGS!!! In all seriousness this block of code creates a span with the words of the monster displayed inside.
btnIgor.addEventListener('click', function () {
    let monsterLives = document.createElement('span');
    document.body.append(monsterLives);
    let monsterSpeaks = document.createTextNode('RAAAAAHH! Hayden want better code! RAAAAAAAAAHHHH')
    monsterLives.append(monsterSpeaks);
    monsterLives.style.color = 'green';
});
//creates a variable to refer to id of ul in HTML

let friendsBtn = document.getElementById('friendsButton');
let newUl = document.getElementById('friendsUl');


//fires new ul with a list of 10 of my friends
friendsBtn.addEventListener('click', function () {
    let friends = [
        {
            name: 'Paul'
        },
        {
            name: 'Katie'
        },
        {
            name: 'Garrett'
        },
        {
            name: 'Chris'
        },
        {
            name: 'Clayton'
        },
        {
            name: 'Anna-Claire'
        },
        {
            name: 'Caleb'
        },
        {
            name: 'Missy'
        },
        {
            name: 'Rob'
        },
        {
            name: 'Tommy'
        }];

    for (i = 0; i < friends.length; i++) {
        let w = friends[i].name;
        let newLi = document.createElement('li');
        let friendName = document.createTextNode(w);
        newLi.appendChild(friendName);
        document.getElementById('friendsUl').appendChild(newLi);
    }
});
