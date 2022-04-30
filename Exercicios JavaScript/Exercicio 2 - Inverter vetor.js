var vetor = [1,2,3,4,5];

Array.prototype.inverter = function() {
  var vetor = [];
  for(i = this.length - 1; i >= 0; i--) {
     vetor.push(this[i]);
  }
  return vetor;
}

var novoVetor = vetor.inverter();
console.log(novoVetor);