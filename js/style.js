
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
