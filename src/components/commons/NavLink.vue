<template>
    <li>
        <router-link to="/sobre">O Hotel</router-link>
    </li>
    <li>
        <router-link to="/acomodacoes">Acomodações</router-link>
    </li>
    <li>
        <router-link to="/reservar">Reservar</router-link>
    </li>
    <li>
        <router-link to="/contato">Contato</router-link>
    </li>
    <li>
        <router-link to="/avaliacoes">Feedbacks</router-link>
    </li>
</template>

<script>
export default {
    name: 'NavLink',
}
</script>

<style lang="scss">
@use '@/assets/scss/index' as *;

a {
    text-decoration: none;
    color: $titles-gray;
    padding: 28px 0;
}
</style>
