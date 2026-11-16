<script setup>
import Filter from './Filter.vue';


</script>

<template>
    <main class="p-5">
        <Filter />
        <section>
            <div class="row row-cols-1 row-cols-md-2 g-4">
                <div class="col">
                    <div class="card">
                        <img src="..." class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">{{ nev }}</h5>
                            <p class="card-text">Elkészítési idő: {{ }}</p>
                            <button type="button" class="btn btn-success">{{ nehezseg }}</button>
                            <button type="button" class="btn btn-primary">Részletek</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped></style>