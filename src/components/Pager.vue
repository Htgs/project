<template>
    <div class="pager">
        <ul>
            <li>«</li>
            <li class="cur">1</li>
            <li>2</li>
            <li>3</li>
            <li>...</li>
            <li>20</li>
            <li>»</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:'pager'
    }
</script>

<style scoped>
    .pager {
        padding: 0.3em;
    }
    .pager ul{
        width: 100%;
    }
    .pager li{
        
    }
</style>