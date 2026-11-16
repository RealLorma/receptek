<script>

</script>
<template>
    <div class="row g-2 align-items-center">
        <div class="col-md-6">
            <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Keress receptet...">
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
                <option value="1">30 perc</option>
                <option value="2">45 perc</option>
                <option value="3">60 perc</option>
                <option value="4">120 perc</option>
            </select>
        </div>
    </div>
</template>
<style scoped></style>