function populateNums() {
  numSpans = document.getElementsByTagName("span")
  console.log(numSpans.length)
  for (num = 0; num < numSpans.length; num++) {
    var zeroStr = "0"
    document.getElementsByTagName("span")[num].innerHTML = num < 9 ? zeroStr.concat(num+1) : num+1;
  }
};

populateNums();
