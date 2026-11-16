<script setup>
import { ref, watch } from 'vue';

const filter = ref("");
const nehezseg = ref("0");
const elkeszitesiIdo = ref("0");

const emit = defineEmits(["keyUp", "nehez", "ido"]);

const press = () => {
    emit("keyUp", filter.value);
};

watch(nehezseg, (ertek) => emit("nehez", ertek));
watch(elkeszitesiIdo, (ertek) => emit("ido", ertek));
</script>
<template>
    <div class="row g-2 align-items-center">
        <div class="col-md-6">
            <input class="form-control" v-model="filter" list="datalistOptions" id="exampleDataList" placeholder="Keress receptet..." @keyup="press">
        </div>

        <div class="col-md-3">
            <select class="form-select" aria-label="Nehézség" v-model="nehezseg">
                <option value="0" selected>Minden nehézség</option>
                <option value="1">könnyű</option>
                <option value="2">közepes</option>
                <option value="3">nehéz</option>
            </select>
        </div>

        <div class="col-md-3">
            <select class="form-select" aria-label="Elkészítési idő" v-model="elkeszitesiIdo">
                <option value="0" selected>Elkészítési idő szerint</option>
                <option value="1">Növekvő</option>
                <option value="2">Csökkenő</option>
            </select>
        </div>
    </div>
</template>
<style scoped></style>
