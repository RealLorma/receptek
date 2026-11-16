<script setup>
import Filter from './components/Filter.vue';
import Hozzaadas from './components/Hozzaadas.vue';
import ReceptLista from './components/ReceptLista.vue';


</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Receptkönyv</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Receptek</a>
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
    <section>
      <Filter />
      <ReceptLista />
    </section>
    <section id="hozzaad">
      <Hozzaadas />
    </section>
  </main>
</template>

<style scoped></style>