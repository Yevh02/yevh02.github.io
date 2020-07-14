var chg = [document.getElementById('1'), document.getElementById('2'), document.getElementById('3'), document.getElementById('4'), document.getElementById('5')];
var strings = ["Мы - это то, что нас окружает!", "Думай об окружающей среде.", "Подумай о животных."];
var m = 1;
chg[0].style.background = "#000000";

function change_background(value)
{
    for(var i = 0; i<5; i++)
    {
        if(i == value)
        {
            chg[i].style.background = "#000000";
            continue;
        }
        chg[i].style.background = "#ffffff";
    }
}

function changePicture1()
{
    document.getElementById('headerPics').src = "pictures/header/header_background1.jpg";
    change_background(0);
}

function changePicture2()
{
    document.getElementById('headerPics').src = "pictures/header/header_background2.jpg";
    change_background(1);
}

function changePicture3()
{
    document.getElementById('headerPics').src = "pictures/header/header_background3.jpg";
    change_background(2);
}

function changePicture4()
{
    document.getElementById('headerPics').src = "pictures/header/header_background4.jpg";
    change_background(3);
}

function changePicture5()
{
    document.getElementById('headerPics').src = "pictures/header/header_background5.jpg";
    change_background(4);
}

function changeString()
{
    document.getElementById('hello').innerHTML = strings[m++];
    if(m == 3) m = 0;
}
