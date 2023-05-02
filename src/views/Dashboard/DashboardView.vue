<template>
    <div class="main">
        <header class="aside-header">
            <div class="logo">
                <router-link to="/">
                    <img src="@/assets/images/logo.svg" alt="Chloe Gran Hotel" />
                </router-link>
            </div>
            <div class="profile-bar">
                <div class="profile">
                    <img src="https://picsum.photos/id/839/600/400" alt="" />
                    <div>
                        <h4>Fulano da Silva</h4>
                        <p>Administrador</p>
                    </div>
                </div>
                <ul class="logout">
                    <li>
                        <font-awesome-icon icon="fa-solid fa-right-from-bracket" />
                        <router-link to="/">Sair</router-link>
                    </li>
                </ul>
            </div>
        </header>

        <main class="container-dashboard">
            <aside class="aside">
                <nav class="aside-menu">
                    <ul class="menu-dashboard">
                        <!-- <li>
                            <font-awesome-icon icon="fa-solid fa-house" />
                            <router-link to="/painel/inicio">Inicio</router-link>
                        </li> -->
                        <li>
                            <font-awesome-icon icon="fa-solid fa-user" />
                            <router-link to="/painel/usuarios">Usuários</router-link>
                        </li>
                        <li>
                            <font-awesome-icon icon="fa-solid fa-hotel" />
                            <router-link to="/painel/acomodacoes">Acomodações</router-link>
                        </li>
                        <!-- <li>
                            <font-awesome-icon icon="fa-solid fa-address-book" />
                            <router-link to="/painel/reservas">Reservas</router-link>
                        </li>
                        <li>
                            <font-awesome-icon icon="fa-solid fa-chess-queen" />
                            <router-link to="/painel/servicos">Serviços</router-link>
                        </li>
                        <li>
                            <font-awesome-icon icon="fa-solid fa-star" />
                            <router-link to="/painel/avaliacoes">Avaliações</router-link>
                        </li> -->
                    </ul>
                </nav>
            </aside>
            <section>
                <h1>Olá aqui tem: {{ slug }}</h1>
                <div class="content">
                    <router-view></router-view>
                </div>
            </section>
        </main>
    </div>
</template>

<script>
export default {
    name: 'DashboardView',
    props: ['slug'],
}
</script>

<style src="./style.scss" lang="scss" scoped />
