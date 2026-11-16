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

                    <div class="nehezseg" :class="{
                        'konnyu': recept.getNehezseg() === 'Könnyű',
                        'kozepes': recept.getNehezseg() === 'Közepes',
                        'nehez': recept.getNehezseg() === 'Nehéz'
                    }">
                        {{ recept.getNehezseg() }}
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

.nehezseg {
    font-size: small;
    font-weight: bold;
    width: 33%;
    text-align: center;
    border-radius: 10px;
    margin-bottom: 5px;
}

.konnyu {
    color: #ffff;
    background-color: green;
}

.kozepes {
    color: #ffff;
    background-color: orange;
}

.nehez {
    color: #ffff;
    background-color: red;
}
</style>