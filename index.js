function laCajaDePandora(num) {
  if (num % 2 === 0) {
    let number = num;
    let binary = (num % 2).toString();
    for (; num > 1; ) {
      number = num / 2;
      binary = (num % 2) + binary;
    }
    return binary;
  } else {
    let mensajito = "No lo pude hacer. sorrynotsorry";
    return mensajito;
  }
}
