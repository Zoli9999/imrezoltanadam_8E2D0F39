const jatekosok = [
  { nev: "Lionel Messi", kor: 36 },
  { nev: "Neymar", kor: 33 },
  { nev: "Ronaldinho", kor: 45 },
  { nev: "Andrés Iniesta", kor: 41 },
  { nev: "Pedri", kor: 22 },
  { nev: "Carles Puyol", kor: 47 }
];

// 1. Játékosok listázása
window.onload = function () {
  const lista = document.getElementById("jatekosLista");
  if (lista) {
    jatekosok.forEach(j => {
      let li = document.createElement("li");
      li.textContent = `${j.nev} (${j.kor} éves)`;
      lista.appendChild(li);
    });
  }
};

// 2. Összegzés
function osszegzes(lista) {
  let osszeg = 0;
  for (let j of lista) {
    osszeg += j.kor;
  }
  return osszeg;
}

// 3. Maximum kiválasztás
function maxEletkor(lista) {
  let max = lista[0];
  for (let j of lista) {
    if (j.kor > max.kor) {
      max = j;
    }
  }
  return max;
}

// 4. Név alapú keresés
function keresNevAlapjan() {
  const nev = document.getElementById("keresNev").value;
  const eredmeny = jatekosok.find(j => j.nev.toLowerCase() === nev.toLowerCase());
  const ki = document.getElementById("talalat");
  if (eredmeny) {
    ki.textContent = `${eredmeny.nev} megtalálva, életkora: ${eredmeny.kor}`;
  } else {
    ki.textContent = "Nincs ilyen nevű játékos.";
  }
}

// 5. Összeg + maximum megjelenítés
function megjelenitEletkor() {
  const osszeg = osszegzes(jatekosok);
  const max = maxEletkor(jatekosok);
  document.getElementById("eletkorOsszeg").textContent =
    `Összes életkor: ${osszeg} év. Legidősebb: ${max.nev} (${max.kor} év)`;
}

// Csapat oldali extra infó
function mutatTovabbiInfo() {
  document.getElementById("extraInfo").textContent =
    "A Barcelona híres saját nevelésű játékosairól, mint Messi, Iniesta vagy Xavi. A csapat jelenlegi edzője Xavi, és a klub a La Liga egyik legfontosabb szereplője.";
}