<template>
    <nav class="navbar">
        <ul class="menu">
            <NavLink />
            <li>
                <router-link to="/cadastrar" class="btn-menu btn-menu_signin">Cadastrar</router-link>
            </li>
            <li>
                <router-link to="/acessar" class="btn-menu btn-menu_login">Acessar</router-link>
            </li>
            <!-- <li>
                <router-link to="/acessar-admin" class="btn-menu btn-menu_login btn-admin">Acesso Admin</router-link>
            </li> -->
        </ul>
    </nav>
    <div class="nav-mobile">
        <nav-mobile></nav-mobile>
    </div>
</template>

<script>
import NavLink from './NavLink.vue'
import NavMobile from '@/components/commons/NavMobile.vue'

export default {
    name: 'MainNavbar',
    components: { NavLink, NavMobile },
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/index' as *;

.navbar {
    font-size: 20px;
}

.nav-mobile {
    display: none;
}

.menu {
    display: flex;
}

.menu {
    // justify-content: space-between;
    align-items: center;
    gap: 36px;
}

.menu li a {
    text-decoration: none;
    color: $titles-gray;
}

.menu a:not(.btn-menu_signin):not(.btn-menu_login) {
    color: $titles-gray;
    padding: 28px 0;
    position: relative;
    text-decoration: none;
}

.menu a:not(.btn-menu_signin):not(.btn-menu_login):hover::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 5px;
    background-color: $primary-gold;
    bottom: 0;
    text-decoration: none;
}

.btn-menu {
    width: 170px;
    height: auto;
    border-radius: 9px;
    border: none;
    font-size: 20px;
    padding: 12px 22px;
    text-align: center;
    transition: ease 0.2s;
    &_login {
        background-color: $primary-green;
        color: $secondary-white !important;
        &:hover {
            background-color: $primary-green;
            color: #fff;
            filter: opacity(95%);
            cursor: pointer;
        }
    }
    &_signin {
        border: 1px solid $primary-green;
        &:hover {
            background-color: $primary-green;
            color: #fff;
            filter: opacity(95%);
            cursor: pointer;
        }
    }
}

.btn-menu_login:hover {
    opacity: 0.5;
}

@media (max-width: 960px) {
    .nav-mobile {
        display: block;
    }

    .header-container {
        justify-content: space-between;
    }
    .menu {
        display: none;
    }

    .menu-btn {
        width: 100%;
    }

    .hb {
        display: block;
    }
}
</style>
