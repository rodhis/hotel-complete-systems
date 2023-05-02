<template>
    <div class="acomodacoes">
        {{ feedbacks }}
        <div class="lista" v-for="feedback in feedbacks.list" :key="feedbacks.id">
            <ul>
                <li>
                    <h3>{{ feedbacks.nome }}</h3>
                </li>
                <li>{{ feedbacks.descricao }}</li>
                <li>R$ {{ feedbacks.preco }}</li>
                <li>{{ feedbacks.status }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FeedbacksContent',
    props: ['feedbacks'],
    data() {
        return {}
    },
    computed: {
        acomodacoes() {
            return this.$store.state.feedbacks
        },
    },
    created() {
        this.$store.dispatch('loadFeedbacks')
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
