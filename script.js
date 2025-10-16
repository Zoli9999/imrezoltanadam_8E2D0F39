const jatekosok = [
  { nev: "Lionel Messi", kor: 36, kep: "https://s.24.hu/app/uploads/sites/28/2022/12/lionel-messi1-1024x576.jpg" },
  { nev: "Neymar", kor: 33, kep: "https://i.guim.co.uk/img/media/365e871f85c366235b5a797e1690f2a429f74d26/52_20_1220_732/master/1220.jpg?width=1200&quality=85&auto=format&fit=max&s=0e2302643cb525cad907b140af7f64f4" },
  { nev: "Ronaldinho", kor: 45, kep: "https://dantenieri.com/wp-content/uploads/2021/01/Diseno-sin-titulo-32.jpg" },
  { nev: "Andrés Iniesta", kor: 41, kep: "https://www.fcbarcelona.com/photo-resources/2019/03/29/d626d1f9-bc41-436d-8840-b7825185200c/fmkRGsYS.jpg?width=1200&height=750" },
  { nev: "Pedri", kor: 22, kep: "https://external-preview.redd.it/pedri-on-his-signature-goal-celebration-i-celebrate-this-v0-fxNWgRDxSCjUqdFSe9OYJVo1FDmFwJwUEWA6IbT0-Mc.jpeg?width=640&crop=smart&auto=webp&s=f4e2949fa04cf2dac6e47d73f6cb6f893cbb0885" },
  { nev: "Carles Puyol", kor: 47, kep: "https://editorial.uefa.com/resources/01d4-0f84eee82060-e0eaa5ffad70-1000/carles_puyol_knows_the_title_race_has_a_fair_way_left_to_run.jpeg" }
];

// 1. Játékosok listázása
window.onload = function () {
  const lista = document.getElementById("jatekosLista");
  if (lista) {
    jatekosok.forEach(j => {
      let li = document.createElement("li");
      
      let img = document.createElement("img");
      img.src = j.kep;
      img.alt = j.nev;
      img.style.maxHeight = "150px";
      img.style.objectFit = "cover";
      img.style.borderRadius = "8px";
      
      let name = document.createElement("p");
      name.textContent = `${j.nev} (${j.kor} éves)`;
      
      li.appendChild(img);
      li.appendChild(name);
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