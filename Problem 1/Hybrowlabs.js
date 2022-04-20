function Hybrowlabs(sen) {
  let s = sen.toLowerCase().split(" ").join("");
  var result = [...s].reduce((a, e) => {
    a[e] = a[e] ? a[e] + 1 : 1;
    return a;
  }, {});
  return result;
}
console.log(Hybrowlabs("Hi Iam sachin lokare"));
