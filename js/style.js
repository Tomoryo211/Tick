

// 背景のアニメーション
// .view
const viewArea = document.querySelector(".view");
//.btn_start
const startButton = document.querySelector(".btn_start");
//.btn_stop
const stopButton =  document.querySelector(".btn_stop");

function createLines () {
    let line = document.createElement("div");
    line.setAttribute("class", "line");
    document.body.appendChild(line);

    // Math.random()は０〜１の間のランダムな数字を作る
        // JavaScript側から光のスタイルを修正
        // JavaScriptから編集した方が少なくすむ
    line.style.left = Math.random() * innerHeight + "px";
    line.style.animationDuration = 3 + Math.random() * 12 + "s";
    line.style.width = Math.random() * 20 + "px";
    line.style.height = Math.random() * 20 + "px";
    // 作った光を消すまでの時間を設定
    setTimeout(function(){
        document.body.removeChild(line);
    }, 6000);
}
//　光を繰り返し発射し続ける
setInterval(function() {
    createLines();
}, 200);



let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

//htmlから要素の取得
const timerElement = document.getElementById('timer');
const start = document.getElementById('start');
const reset = document.getElementById('reset');

start.addEventListener('click',() => {
    if(isRunning){
        //タイマーが起動していない状態
        clearInterval(timer);
        start.textContent = 'start';
    }else{
        //タイマーが起動している状態
        timer = setInterval(updateTimer,10);
        start.textContent = 'stop';
    }
    isRunning = !isRunning;

});

//resetボタンが押された時の関数設定
reset.addEventListener('click',resetTimer);

//タイマーの数値の表示
function updateTimer(){
    seconds++;
    if(seconds === 99){
        seconds = 0;
        minutes++;
        if(minutes === 99){
            minutes = 0;
            hours++;
        }
    }
    timerElement.textContent = formatTime(hours) +':'+ formatTime(minutes) +':'+ formatTime(seconds);
}

function formatTime(time){
    return time < 10 ? '0' + time : time;
}

//resetボタンの機能
function resetTimer(){
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    timerElement.textContent = '00:00:00'
    start.textContent = 'start';
}

// wrapボタンを取得
const wrap = document.getElementById('wrap');
// ラップタイムを表示するエリアを取得
const wrapList = document.getElementById('wrap_list');

// wrapボタンを押した時の処理
wrap.addEventListener('click', function() {
    const lapTime = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
    const lapItem = document.createElement('li');
    lapItem.textContent = lapTime;
    wrapList.appendChild(lapItem);
});
