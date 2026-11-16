<script setup>

const props = defineProps({
    receptek: Array
})

const getURL = (kepFile) =>{
    return new URL(kepFile, import.meta.url).href
}

</script>

<template>
        <section>
            <div class="row row-cols-1 row-cols-md-2 g-4">
                <div class="col">
                    <div class="card" v-for="recept in receptek">
                        <img :src="getURL(recept.getFile())" class="card-img-top" alt="">
                        <div class="card-body">
                            <h5 class="card-title">{{ recept.getNev() }}</h5>
                            <p class="card-text">Elkészítési idő: {{ recept.getElkeszitesiIdo()}}</p>
                            <button type="button" class="btn btn-success">{{ recept.getNehezseg() }}</button><br>
                            <button type="button" class="btn btn-primary">Részletek</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>

<style scoped></style>