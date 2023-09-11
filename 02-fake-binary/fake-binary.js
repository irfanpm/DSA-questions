//question
//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.


function fakeBin(x) {
  let data = x.split("");
  let text = "";
  data.forEach((value) => {
    if (value < 5) {
      text +=0;
    } else {
      text+= 1
    }
  });
  return text;
}
console.log(fakeBin('6326373774'))
