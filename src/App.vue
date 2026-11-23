<script setup>
import Filter from './components/Filter.vue';
import Hozzaadas from './components/Hozzaadas.vue';
import ReceptLista from './components/ReceptLista.vue';
import { ReceptData } from './data/Receptek.js';
import Recept from './classes/Recept.js';
import { ref, computed } from 'vue';

const receptek = ref([]);
const hozzaadErtek = ref(0)
const filter = ref("")
const modositandoRecept = ref(null)

const nehezseg = ref("0");
const elkeszitesiIdo = ref("0");

const init = () => {
  for (let i = 0; i < ReceptData.length; i++) {
    const e = ReceptData[i];
    const ujrecept = new Recept(e.file, e.nev, e.leiras, e.nehezseg, e.elkeszitesiIdo)
    receptek.value.push(ujrecept)
  }
}

const hozzaadGomb = () => {
  hozzaadErtek.value++
}

const ujReceptetAd = (ujreceptet) => {
  receptek.value.push(ujreceptet)
  hozzaadErtek.value = 0;
}

const keyUp = (f) =>{
    filter.value = f;
}


const filteredReceptek = computed(() => {
    let eredmeny = receptek.value;

    if (filter.value !== "") {
        eredmeny = eredmeny.filter(r =>
            r.getNev().toLowerCase().includes(filter.value.toLowerCase()) ||
            r.getLeiras().toLowerCase().includes(filter.value.toLowerCase())
        );
    }

    if (nehezseg.value !== "0") {
        const nehezsegek = {
            "1": "könnyű",
            "2": "közepes",
            "3": "nehéz"
        };

        eredmeny = eredmeny.filter(r =>
            r.getNehezseg().toLowerCase() === nehezsegek[nehezseg.value]
        );
    }

    if (elkeszitesiIdo.value === "1") {
        eredmeny = [...eredmeny].sort((a, b) =>
            parseInt(a.getElkeszitesiIdo()) - parseInt(b.getElkeszitesiIdo())
        );
    }

    if (elkeszitesiIdo.value === "2") {
        eredmeny = [...eredmeny].sort((a, b) =>
            parseInt(b.getElkeszitesiIdo()) - parseInt(a.getElkeszitesiIdo())
        );
    }

    return eredmeny;
});


const nehezSzures = (ertek) => {
    nehezseg.value = ertek;
};

const idoSzures = (ertek) => {
    elkeszitesiIdo.value = ertek;
};

const modositas = (index) => {
  hozzaadErtek.value++
  modositandoRecept.value = receptek.value[index]
}

const atiras = (nev, leiras, nehezseg, elkeszitesiIdo) => {
  const index = receptek.value.indexOf(modositandoRecept.value)

  if (index !== -1) {
    const e = receptek.value[index]

    e.setNev(nev)
    e.setLeiras(leiras)
    e.setNehezseg(nehezseg)
    e.setElkeszitesiIdo(elkeszitesiIdo)
  }

  modositandoRecept.value = null
  hozzaadErtek.value = 0

  receptek.value = [...receptek.value]
}


const torles = (index) => {
  if (confirm("Biztosan törölni szeretnéd: " + receptek.value[index].getNev() )) {
    receptek.value.splice(index, 1)
    alert("Sikeres törlés")
  } 
}

init();
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Receptkönyv</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#receptek">Receptek</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#hozzaad" @click="hozzaadGomb">Új recept</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Kedvencek</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <main>
    <section id="receptek">
      <Filter class="p-3" @keyUp="keyUp" @nehez="nehezSzures" @ido="idoSzures" />
      <ReceptLista :filteredReceptek="filteredReceptek" @modositas="modositas" @torles="torles" class="m-5"/>
    </section>
    <section id="hozzaad" v-if="hozzaadErtek>0">
      <Hozzaadas class="p-5" :modositandoRecept="modositandoRecept" @modositas="atiras"  @hozzaadas="ujReceptetAd" />
    </section>
  </main>
</template>

<style scoped></style>