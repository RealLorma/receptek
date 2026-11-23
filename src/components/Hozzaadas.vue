<script setup>
import { ref } from 'vue';
import Recept from '../classes/Recept';
import { ReceptData } from '../data/Receptek';


const nev = ref("")
const leiras = ref("")
const nehezseg = ref(0)
const elkeszitesiIdo = ref("")

const props = defineProps({
    modositandoRecept: Recept
})

if (props.modositandoRecept != null) {
    nev.value = props.modositandoRecept.getNev()
    leiras.value = props.modositandoRecept.getLeiras()
    nehezseg.value = props.modositandoRecept.getNehezseg()
    elkeszitesiIdo.value = props.modositandoRecept.getElkeszitesiIdo()
}



const emit = defineEmits(["hozzaadas", "modositas"])

const hozzadas = () => {
    if (nev.value == "" || leiras.value == "" || nehezseg.value == 0 || elkeszitesiIdo.value == "") {
        alert("Nem hagyhatsz üresen mezőt!")
    } else {
        const ujrecept = new Recept("https://picsum.photos/300/200", nev.value, leiras.value, nehezseg.value, elkeszitesiIdo.value)
        emit("hozzaadas", ujrecept)
        alert("Sikeres hozzáadás!")
    }
}

const modositas = (nev, leiras, nehezseg, elkeszitesiIdo) => {
    emit("modositas", nev, leiras, nehezseg, elkeszitesiIdo)
}

</script>

<template>
    <section v-if="modositandoRecept == null">
        <div class="container hatter">
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
    </section>




    <section v-else>
        <div class="container hatter">
            <div class="mb-3">
                <label class="form-label">Módosítsd a recept nevét:</label>
                <input type="text" class="form-control" v-model="nev">
            </div>

            <div class="mb-3">
                <label class="form-label">Módosítsd a recept leírását:</label>
                <input type="text" class="form-control" v-model="leiras">
            </div>

            <div class="mb-3">
                <label class="form-label">Módosítsd a recept nehézségét:</label>
                <select class="form-select" v-model="nehezseg">
                    <option value="0">Módosítsd a recept nehézségét</option>
                    <option value="Könnyű">Könnyű</option>
                    <option value="Közepes">Közepes</option>
                    <option value="Nehéz">Nehéz</option>
                </select>
            </div>

            <div class="mb-3">
                <label class="form-label">Módosítsd a recept elkészítési idejét:</label>
                <input type="text" class="form-control" v-model="elkeszitesiIdo">
            </div>

            <div class="mb-3">
                <p><button type="button" class="btn btn-success" @click="modositas(nev, leiras, nehezseg, elkeszitesiIdo)">Módosítás</button></p>
            </div>
        </div>
    </section>

</template>

<style scoped>
.hatter {
    background-color: #f5f5dc;
    border: solid 2px #000000;
    border-radius: 10px;
}
</style>