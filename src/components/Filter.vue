<script setup>
import { ref } from 'vue';


const filter = ref("");

const emit = defineEmits(["keyUp"])

const press = () => {
    emit("keyUp", filter.value)
}

</script>
<template>
    <div class="row g-2 align-items-center">
        <div class="col-md-6">
            <input class="form-control" v-model="filter" list="datalistOptions" id="exampleDataList" placeholder="Keress receptet..." @keyup="press">
        </div>

        <div class="col-md-3">
            <select class="form-select" aria-label="Nehézség">
                <option selected>Minden nehézség</option>
                <option value="1">könnyű</option>
                <option value="2">közepes</option>
                <option value="3">nehéz</option>
            </select>
        </div>

        <div class="col-md-3">
            <select class="form-select" aria-label="Elkészítési idő">
                <option selected>Elkészítési idő szerint</option>
                <option value="1">Növekvő</option>
                <option value="2">Csökkenő</option>
            </select>
        </div>
    </div>
</template>
<style scoped></style>
