<template>
    <nav class="mobile-nav">
        <label class="menu-mobile-icon" for="menu-toggle"> &#9776; </label>

        <input type="checkbox" id="menu-toggle" />
        <ul class="menu-mobile">
            <NavLink />
            <li>
                <router-link to="/cadastrar" class="menu-btn menu-btn_signin"> Cadastrar </router-link>
            </li>
            <li>
                <router-link to="/acessar" class="menu-btn menu-btn_login"> Acessar </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
import NavLink from '@/components/commons/NavLink'

export default {
    name: 'NavMobile',
    components: { NavLink },
}
</script>

<style lang="scss">
@use '@/assets/scss/index' as *;

.mobile-nav {
    display: flex;
}

.menu-mobile {
    display: none;
    position: absolute;
    top: 167px;
    right: 0px;
    width: 100%;
    height: 267vh;
    padding: 24px 30px;
    background-color: #fff;
    transition: 0.3s ease;
    z-index: 100;
    overflow: hidden;
}

.menu-mobile-icon {
    font-size: 28px;
    cursor: pointer;
}

.menu-mobile-icon:hover {
    opacity: 0.5;
}

.menu-mobile ul {
    padding: 5px;
}

#menu-toggle {
    display: none;
}

#menu-toggle:checked + .menu-mobile {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 0 30px !important;
}

.menu-btn {
    width: 140px;
    height: auto;
    border-radius: 9px;
    border: none;
    font-size: 20px;
    padding: 12px 22px;
    text-align: center;
    transition: ease 0.2s;
    &_signin {
        border: 1px solid $primary-green;
        &:hover {
            background-color: $primary-green;
            color: #fff;
            filter: opacity(50%);
            cursor: pointer;
        }
    }
    &_login {
        background-color: $primary-green;
        color: #fff;
        &:hover {
            filter: opacity(50%);
            color: #fff;
            cursor: pointer;
        }
    }
}

@media (max-width: 1058px) {
    .menu-btn {
        width: 100%;
    }
}
</style>
