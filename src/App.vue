<script setup>
import Filter from './components/Filter.vue';
import Hozzaadas from './components/Hozzaadas.vue';
import ReceptLista from './components/ReceptLista.vue';
import { ReceptData } from './data/Receptek.js';
import Recept from './classes/Recept.js';
import { ref } from 'vue';

const receptek = ref([]);

const init = () => {
  for (let i = 0; i < ReceptData.length; i++) {
    const e = ReceptData[i];
    const ujrecept = new Recept(e.file, e.nev, e.leiras, e.nehezseg, e.elkeszitesiIdo)
    receptek.value.push(ujrecept)
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
              <a class="nav-link" href="#hozzaad">Új recept</a>
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
      <Filter class="p-3"/>
      <ReceptLista class="m-5"/>
    </section>
    <section id="hozzaad">
      <Hozzaadas class="p-5" />
    </section>
  </main>
</template>

<style scoped></style>