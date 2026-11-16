<script setup>
import { ref } from 'vue';


const nev = ref("")
const leiras = ref("")
const nehezseg = ref("")
const elkeszitesiIdo = ref("")

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
            <input type="text" class="form-control" v-model="nehezseg">
        </div>

        <div class="mb-3">
            <label class="form-label">Add meg a recept elkészítési idejét:</label>
            <input type="text" class="form-control" v-model="elkeszitesiIdo">
        </div>
    </div>
</template>

<style scoped></style>