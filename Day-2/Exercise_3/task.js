// Number 1
const Lov =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";
let regex = /love/gi;
console.log(Lov.match(regex).length);

//Number 2
const bec =
  "You cannot end a sentence with because because because is a conjunction";
let regX = /because/gi;
console.log(bec.match(regX).length);

//Number 3 (I don't know how to find most frequent word)
const sent =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
let regx = /[!@#$%&.,?;]/gi;
console.log(sent.replace(regx, ""));

// Number 4
let sentence =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
let regEx = /\d+/gi;
let numbers = sentence.match(regEx);
let total = 0;
for (i = 0; i < numbers.length; i++) {
  total += Number(numbers[i]);
}
console.log(total);
