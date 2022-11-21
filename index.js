function laCajaDePandora(num) {
  if (num % 2 === 0) {
    let dec = [];
    if (num <= 0) return false;
    while (num > 0) {
      dec.push(num % 2);
      num = Math.floor(num / 2);
    }
    return dec.reverse().join("");
  }
}

console.log(laCajaDePandora(2));
console.log(laCajaDePandora(14));
console.log(laCajaDePandora(17));

function edd() {
  let obj = {
    name: "Edd",
    age: 45,
    nationality: "Colombian",
  };
}
return obj;
