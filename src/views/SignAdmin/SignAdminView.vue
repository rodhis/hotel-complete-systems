<template>
    <main class="main-sign-in-admin">
        <section class="sign-in-admin">
            <div class="sign-in-admin-logo">
                <router-link to="/">
                    <img src="@/assets/images/logo.svg" alt="Chloe Gran Hotel" />
                </router-link>
            </div>
            <div class="sign-in-admin-container">
                <div class="sign-in-admin-forms">
                    <form method="post" id="myForm">
                        <label for="nome">Email de administrador:</label>
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
</template>

<script>
export default {
    name: 'SignAdminView',
    components: {},
    methods: {
        validarFormulario() {},
    },
}
</script>

<style src="./style.scss" lang="scss" />
