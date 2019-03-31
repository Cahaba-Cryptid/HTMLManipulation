$('body').append('<div id="div1"></div>');

$('#div1').append('<button id="btn1">Nice message</button>');

$('#btn1').click(function(){
    alert('Yeah, man. You did it.');
});

$('body').append('<div id="div2"></div>');
$('#div2').append('<button id="btn2">Display text box content</button>');
$('#div2').append('<input type="text" id="txtBox">');

$('#btn2').click(function(){
    let boxContent = $('#txtBox').val();
    alert(boxContent);
});

let colorMeSurprised = $('#colorDiv');

$(colorMeSurprised).mouseover(function(){
    $(colorMeSurprised).css('background-color', 'gainsboro');
});
$(colorMeSurprised).mouseout(function(){
    $(colorMeSurprised).css('background-color', '');
});

$('body').append('<p id="pNeedsColor">Bonjour, mon ami.</p>');
$('#pNeedsColor').click(function(){
    let colorText = $('#pNeedsColor');
    $(colorText).css('color', randoRainbow());
});

function randoRainbow() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
} 

$('body').append('<div id="newDiv"></div>');
$('#newDiv').append('<button id=myNameBtn>Je m\'appelle</button>');
$('#myNameBtn').click(function(){
    $('#newDiv').append('<span> Hayden</span>');
});

let friendsUl = $('#friendsGoHere');
let summonBtn =  $('#summonFriends');

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

$(summonBtn).on('click', function(){
    friends.forEach(function(friends){
        $(friendsUl).append('<li>' + friends.name + '</li>');
        })
});


