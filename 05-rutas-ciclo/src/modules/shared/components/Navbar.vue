<template>
    <div>
        <!-- asi se tiene que hacer los enlaces internos OJO -->
        <router-link to="/">Pokemon List</router-link>
        <router-link to="/id">Pokemon por id</router-link>
        <router-link to="/about">About</router-link>
    </div>    
</template>

<style scoped>

div{
    padding: 0 30px;
}

div a {
    font-weight: bold;
    color: tomato;
    margin: 0 10px;
}

</style>