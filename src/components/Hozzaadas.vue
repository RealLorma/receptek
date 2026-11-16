<script setup>
import { ref } from 'vue';
import Recept from '../classes/Recept';


const nev = ref("")
const leiras = ref("")
const nehezseg = ref(0)
const elkeszitesiIdo = ref("")

const emit = defineEmits(["hozzaadas"])

const hozzadas = () => {
    const ujrecept = new Recept("https://picsum.photos/300/200", nev.value, leiras.value, nehezseg.value, elkeszitesiIdo.value)
    emit("hozzaadas", ujrecept)
}

</script>

<template>
    <div class="container">
        <div class="mb-3">
            <label class="form-label">Add meg a recept nevét:</label>
            <input type="text" class="form-control" v-model="nev">
        </div>

        <div class="mb-3">
            <label class="form-label">Add meg a recept leírását:</label>
            <input type="text" class="form-control" v-model="leiras">
        </div>

        <div class="mb-3">
            <label class="form-label">Add meg a recept nehézségét:</label>
            <select class="form-select" v-model="nehezseg">
                <option value="0">Válaszd ki a recept nehézségét</option>
                <option value="Könnyű">Könnyű</option>
                <option value="Közepes">Közepes</option>
                <option value="Nehéz">Nehéz</option>
            </select>
        </div>

        <div class="mb-3">
            <label class="form-label">Add meg a recept elkészítési idejét:</label>
            <input type="text" class="form-control" v-model="elkeszitesiIdo">
        </div>

        <div class="mb-3">
            <p><button type="button" class="btn btn-success" @click="hozzadas">Hozzáad</button></p>
        </div>
    </div>
</template>

<style scoped></style>