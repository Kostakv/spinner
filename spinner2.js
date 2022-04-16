const display = '|/-\\|/-\\|';
let i = 0;
  const displayText = function (){
    console.clear();
  process.stdout.write(display[i])
  i++;
  if (i >= display.length){
    clearInterval(timer);
  }
}
let timer = setInterval(displayText, 200);
