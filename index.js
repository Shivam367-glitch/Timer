setInterval(myfun, 0);

function myfun() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let mi = today.getMilliseconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('h').innerHTML = h;
    document.getElementById('m').innerHTML = m;
    document.getElementById('s').innerHTML = s;
    document.getElementById('mi').innerHTML = mi;


}

function checkTime(i) {
    if (i < 10) { i = "0" + i };
    return i;
}