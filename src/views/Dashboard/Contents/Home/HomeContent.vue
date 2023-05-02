<template>
    <div class="acomodacoes">
        <!-- <div class="lista" v-for="usuario in usuarios.list" :key="usuario.id">
            <ul>
                <li>
                    <h3>{{ usuario.nome_usuario }}</h3>
                </li>
                <li>{{ usuario.email_usuario }}</li>
                <li>{{ usuario.nivel }}</li>
                <li>{{ usuario.status }}</li>
            </ul>
        </div> -->
        <!-- <table class="" style="width: 100%">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Email</th>
                    <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                <tr style="text-align: center" v-for="usuario in usuarios.list" :key="usuario.id">
                    <th>{{ usuario.id }}</th>
                    <td>{{ usuario.nome_usuario }}</td>
                    <td>{{ usuario.email_usuario }}</td>
                    <td>{{ usuario.status }}</td>
                    <td>{{ usuario.nivel }}</td>
                </tr>
            </tbody>
        </table> -->
    </div>
</template>

<script>
export default {
    name: 'UsuariosContent',
    props: ['usuarios'],
    data() {
        return {}
    },
    computed: {
        usuarios() {
            console.log(this.$store.state.user)
            return this.$store.state.user
        },
    },
    created() {
        this.$store.dispatch('loadUser')
    },
}
</script>

<style lang="scss">
h1 {
    padding: 30px 0;
}

.acomodacoes {
    display: flex;
    width: 100%;
    gap: 24px;
    flex-wrap: wrap;
}

.lista {
    padding: 30px;
    width: 200px;
    background-color: red;
}

.lista li {
    padding: 5px 0;
}
</style>
