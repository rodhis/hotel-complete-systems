<template>
    <mainHeader></mainHeader>
    <main>
        <HeroBanner class="img-bg" title="Acessar conta"></HeroBanner>
        <section class="sign-in">
            <div class="sign-in-container">
                <div class="sign-in-cover"></div>
                <div class="sign-in-forms">
                    <div class="sign-in-header">
                        <!-- <router-link to="/">
                            <img src="@/assets/images/logo.svg" alt="Chloe Gran Hotel" />
                        </router-link> -->
                    </div>
                    <form method="get" id="myForm">
                        <label for="nome">Email:</label>
                        <input class="input-text-primary" type="email" name="login" id="login" required />
                        <label for="senha">Senha:</label>
                        <input class="input-text-primary" type="password" name="senha" id="senha" required />
                        <input class="btn-default" type="submit" formaction="../index.html" onclick="return validarFormulario();" value="Confirmar" />
                    </form>
                    <div class="sign-in-help">
                        <h3>Não possui conta?</h3>
                        <a href="/cadastrar">Criar uma nova conta</a>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <MainFooter></MainFooter>
</template>

<script>
import HeroBanner from '@/components/commons/HeroBanner.vue'
import MainFooter from '@/components/commons/MainFooter.vue'
import MainHeader from '@/components/commons/MainHeader.vue'
import LinkButton from '@/components/commons/LinkButton.vue'

export default {
    name: 'SignView',
    components: {
        MainHeader,
        MainFooter,
        HeroBanner,
        LinkButton,
    },
    methods: {
        validarFormulario() {},
    },
}
</script>

<style src="./style.scss" lang="scss" />
