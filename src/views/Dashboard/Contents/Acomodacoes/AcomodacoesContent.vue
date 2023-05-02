<template>
    <div class="acomodacoes">
        <table class="table table-hover overflow-hidden">
            <thead class="table-light">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Email</th>
                    <th scope="col">Status</th>
                    <th scope="col" colspan="3">Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="acomodacao in acomodacoes.list" :key="acomodacao.id">
                    <th>{{ acomodacao.id }}</th>
                    <td>{{ acomodacao.nome }}</td>
                    <td>{{ acomodacao.descricao }}</td>
                    <td>R$ {{ acomodacao.preco }}</td>
                    <td>
                        <span :class="acomodacao.status === 'Disponível' ? 'text-bg-primary' : 'text-bg-secondary'" class="badge rounded-pill p-2"
                            >{{ acomodacao.status }}
                        </span>
                    </td>
                    <td>
                        <button type="button" class="btn btn-outline-success btn-sm">Editar</button>
                    </td>
                    <td>
                        <button type="button" class="btn btn-outline-danger btn-sm">Remover</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'AcomodacoesContent',
    props: ['acomodacoes'],
    data() {
        return {}
    },
    computed: {
        acomodacoes() {
            return this.$store.state.acomodacoes
        },
    },
    created() {
        this.$store.dispatch('loadRooms')
    },
}
</script>

<style lang="scss">
h1 {
    padding: 30px 0;
}

.conteudo {
    padding: 50px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
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
