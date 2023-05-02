<template>
    <main>
        <HeroBanner class="img-bg" title="Registro de novo usuário"></HeroBanner>

        <h2 class="title">Bem-vindo ao melhor hotel da cidade</h2>

        <section class="section">
            <div class="container">
                <article class="register">
                    <form enctype="application/x-www-form-urlencoded" method="post">
                        <div class="itens-form">
                            <div class="cells">
                                <label for="nome_usuario">Nome Completo:</label>
                                <input type="text" name="nome_usuario" v-model="nome_usuario" />
                            </div>
                            <div class="cells">
                                <label for="email_usuario">Email:</label>
                                <input type="email" name="email_usuario" v-model="email_usuario" />
                            </div>
                            <div class="cells">
                                <label for="password">Senha:</label>
                                <input type="password" name="password" v-model="password" />
                            </div>
                            <input class="btn-default" type="submit" value="Enviar" @click.prevent="register()" />
                        </div>
                    </form>
                </article>
            </div>
        </section>
    </main>
</template>

<script>
import HeroBanner from '@/components/commons/HeroBanner.vue'

export default {
    name: 'RegisterView',
    components: { HeroBanner },

    data() {
        return {
            user: {
                nome_usuario: '',
                email_usuario: '',
                password: '',
            },
        }
    },
    computed: {
        nome_usuario: {
            get() {
                return this.$store.state.user.nome_usuario
            },
            set(value) {
                this.$store.commit('updateUser', { nome_usuario: this.removeQuotesSpaces(value) })
            },
        },
        email_usuario: {
            get() {
                return this.$store.state.user.email_usuario
            },
            set(value) {
                this.$store.commit('updateUser', { email_usuario: this.removeQuotesSpaces(value) })
            },
        },
        password: {
            get() {
                return this.$store.state.user.password
            },
            set(value) {
                this.$store.commit('updateUser', { password: this.removeQuotesSpaces(value) })
            },
        },
    },
    methods: {
        removeQuotesSpaces(str) {
            return str.replaceAll("'", '').replaceAll('"', '').trim()
        },
        register() {
            this.$store.dispatch('createUser', this.$store.state.user)
        },
    },
}
</script>

<style src="./style.scss" lang="scss" />
