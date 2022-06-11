const array = [3, 94, 656, 578, 123, 87878, 154, 51231, 35465, 21, 2, 35];
const size = array.length;
let temp = 0;

for (i = 0; i < size; i++) {
  for (j = i + 1; j < size; j++) {
    if (array[i] > array[j]) {
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
}
console.log(`Smallest number is= ${array[0]}`);
console.log(`Biggest number is= ${array[size - 1]}`);