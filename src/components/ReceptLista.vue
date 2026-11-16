<script setup>

const props = defineProps({
    receptek: Array
})

const getURL = (kepFile) => {
    return new URL(kepFile, import.meta.url).href
}

</script>

<template>
    <section>
        <div class="d-flex flex-wrap justify-content-center gap-3">

            <div class="card" v-for="recept in receptek" :key="recept.getNev()">
                <img :src="getURL(recept.getFile())" class="card-img-top" alt="">

                <div class="card-body">
                    <h5 class="card-title">{{ recept.getNev() }}</h5>

                    <p class="card-text">
                        Elkészítési idő: {{ recept.getElkeszitesiIdo() }}
                    </p>

                    <div>
                        <button type="button" class="btn btn-success mb-2">
                            {{ recept.getNehezseg() }}
                        </button>
                    </div>
                    <div>
                        <button type="button" class="btn btn-primary">
                            Részletek
                        </button>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<style scoped>
.card {
    width: 250px;
    margin-bottom: 10px;
}

.card img {
    width: 100%;
    height: 150px;
    object-fit: cover;
}
</style>