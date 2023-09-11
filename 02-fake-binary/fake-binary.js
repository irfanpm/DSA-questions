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
