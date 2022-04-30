Data = [3,5,1,7,9,10];
elemento = 4;

Data.sort(function(a,b) {
    return a - b;
});

var str = "";
for (var it = 0; it < Data.length; it++) {
    str += Data[it] + ",";
}

for(var i = 0; i < Data.length; i++){
  if(Data[i] < elemento && elemento < Data[i+1]){
    Data.splice(i+1, 0, elemento);
  }
}
console.log(Data)