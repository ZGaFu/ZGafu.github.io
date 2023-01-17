var time = document.getElementById("time");
var hours;
var min;
var music = [449818741,440208476,1874302915,1404596131,515453363,36990266,436514312];
var musicId = 0
function clock(){
    var date = new Date();
    hours = date.getHours();
    min = date.getMinutes();
    time.innerHTML = hours + ":" + min;
}


function music_function(){
    document.getElementById("music_up").onclick = function(){
        if (musicId >= 1){
            musicId = musicId - 1
        }
        else{
            musicId = music.length -1
        }
        document.getElementById('music').src='https://music.163.com/outchain/player?type=2&id='+music[musicId]+"&auto=1&height=66"
    }
    document.getElementById("music_down").onclick = function(){
        if (musicId < music.length - 1){
            musicId = musicId + 1
        }
        else{
            musicId = 0
        }
        document.getElementById('music').src='https://music.163.com/outchain/player?type=2&id='+music[musicId]+"&auto=1&height=66"
    }
    
}

function compile(){
    var reader = document.getElementById("text").value;
    var converter = new showdown.Converter();
    var html = converter.makeHtml(reader);
    document.getElementById("result").innerHTML = html;
}

function search(){
    var reader = document.getElementById("inputSearch").value;
    if (reader != ""){
        window.open("https://www.baidu.com/s?tn=68018901_39_oem_dg&ie=utf-8&word=" + reader);
    }
}

function searchEnterEvent(){
    var key = window.event;
    if (key.keyCode == 13){
        search()
    }
}

function homo_bei(){
    var reader = Number(document.getElementById("homohomo").value);
    if (reader != ""){
        let aaa = homo(reader);
        window.alert(aaa);
    }
}

compile()
clock()
music_function()
setInterval(clock,500)