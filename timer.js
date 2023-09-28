/* Grupo: 16, Número: 56941, Nome: Bruno Gonzalez , PL: 26 */
/* Grupo: 16, Número: 56915, Nome: Maria Santos   , PL: 26 */
/* Grupo: 16, Número: 55945, Nome: Mariana Valente, PL: 26 */

document.getElementById('timer').innerHTML = 
  005 + ":" + 00;
startTimer();
StopFunction();

function startTimer() {
  if (localStorage.getItem('Terminou') == null) {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));

  if (s==59) {m=m-1}
  
  document.getElementById('timer').innerHTML =
    m + ":" + s;
  console.log(m)
  setTimeout(startTimer, 1000);
  }
  else (localStorage.removeItem)
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; 
  if (sec < 0) {sec = "59"};
  return sec;
}

var sec = 0;

function pad ( val ) { return val > 9 ? val : "0" + val; }

var setIntValue =   setInterval( function(){
    $("#seconds").html(pad(++sec%60));
    $("#minutes").html(pad(parseInt(sec/60,10)));
}, 1000);

function StopFunction() {
        clearInterval(setIntValue);
}
