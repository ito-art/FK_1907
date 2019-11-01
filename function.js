/*
function myfunc(filename, pathname){

        var anchor = document.createElement('a');
        anchor.download = filename;
        var textnode = document.createTextNode("Click here to download!");
        document.body.appendChild(anchor);
        anchor.appendChild(textnode);
            anchor.href = pathname;
}
*/
//ファイル名を日時にしたい。
function Save(){
  save.onclick = e => {
    link.download = fname.value + ".txt";
    link.href = "data:text/plain,aaa";
    link.click();
  };
}

/*
//url : https://teratail.com/questions/100320
//現在の日時を読み込む
var dt = new Date();
var year = dt.getFullYear();
var month = dt.getMonth() + 1;
var date = dt.getFullDay();
var hours = dt.getHours();
var minutes = dt.getMinutes();

var name = year + "_" + month + date + "_" + hours + minutes;

save.onclick = e => {
    link.download =  + ".txt";
    link.href = "data:text/plain,aaa";
    link.click();
};
*/
