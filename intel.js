atribut = [
  "tuki_bor",
  "sut_bersa",
  "pat",
  "uchsa",
  "tuxum",
  "gusht",
  "sut_emizuvchi",
  "yirtqich",
  "sargish",
  "qora_doglar",
  "qora_chiziq",
  "qush",
  "ucha_olmasa",
  "suza_olsa",
  "ucha_olsa",
];
qiymat = [
  "sut_emizuvchi",
  "qush",
  "yirtqich",
  "gepard",
  "yulbars",
  "pingvin",
  "chayka",
];

s = ["tuki_bor", "gusht", "sargish", "qora_doglar"];

function qoidalar() {
  a = [];
  if (s.includes(atribut[0])) {
    a.push(1);
  }
  if (s.includes(atribut[1])) {
    a.push(2);
  }
  if (s.includes(atribut[2])) {
    a.push(3);
  }
  if (s.includes(atribut[3]) && s.includes(atribut[4])) {
    a.push(4);
  }
  if (s.includes(atribut[5]) && s.includes(atribut[6])) {
    a.push(5);
  }
  if (
    s.includes(atribut[7]) &&
    s.includes(atribut[8]) &&
    s.includes(atribut[9])
  ) {
    a.push(6);
  }
  if (
    s.includes(atribut[7]) &&
    s.includes(atribut[8]) &&
    s.includes(atribut[10])
  ) {
    a.push(7);
  }
  if (
    s.includes(atribut[11]) &&
    s.includes(atribut[12]) &&
    s.includes(atribut[13])
  ) {
    a.push(8);
  }
  if (s.includes(atribut[11]) && s.includes(atribut[14])) {
    a.push(9);
  }
  return a;
}

function bajar(k, s) {
  if (k == 1) {
    s.splice(atribut[0]);
    s.append(qiymat[0]);
  } else if (k == 2) {
    s.splice(atribut[1]);
    s.append(qiymat[0]);
  } else if (k == 3) {
    s.splice(atribut[2]);
    s.append(qiymat[1]);
  } else if (k == 4) {
    s.splice(atribut[4]);
    s.splice(atribut[3]);
    s.append(qiymat[1]);
  } else if (k == 5) {
    s.splice(atribut[6]);
    s.splice(atribut[5]);
    s.append(qiymat[2]);
  } else if (k == 6) {
    s.splice(atribut[9]);
    s.splice(atribut[8]);
    s.splice(atribut[7]);
    s.append(qiymat[3]);
  } else if (k == 7) {
    s.splice(atribut[10]);
    s.splice(atribut[8]);
    s.splice(atribut[7]);
    s.append(qiymat[4]);
  } else if (k == 8) {
    s.splice(atribut[13]);
    s.splice(atribut[12]);
    s.splice(atribut[11]);
    s.append(qiymat[5]);
  } else if (k == 9) {
    s.splice(atribut[14]);
    s.splice(atribut[11]);
    s.append(qiymat[6]);
    return s;
  }
}
