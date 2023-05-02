<template>
    <main>
        <h2 class="title title-feedback">Como foi sua experiência conosco?</h2>
        <div class="content-subtitle">
            <h4 class="subtitle">Conta pra gente!</h4>
            <img src="@/assets/images/message-alt.svg" alt="Icon Message" />
        </div>
        <section class="section">
            <article class="container">
                <div class="itens-form">
                    <div class="nomes">
                        <div class="nome1">
                            <label for="nome">Nome:</label>
                            <input type="text" v-model="nome" name="Nome" />
                        </div>
                        <div class="nome2">
                            <label for="sobrenome">Sobrenome:</label>
                            <input type="text" v-model="sobrenome" name="sobrenome" />
                        </div>
                    </div>
                    <div class="cells">
                        <label for="message">Mensagem:</label>
                        <textarea name="message" v-model="mensagem" class="message" cols="30" rows="10"></textarea>
                    </div>
                    <div class="avaliacao-content">
                        <p>Avalie nossos serviços:</p>
                        <ul class="avaliacao-icons">
                            <li class="star-icon ativo" data-avaliacao="1" @click="avaliacao"></li>
                            <li class="star-icon" data-avaliacao="2" @click="avaliacao"></li>
                            <li class="star-icon" data-avaliacao="3" @click="avaliacao"></li>
                            <li class="star-icon" data-avaliacao="4" @click="avaliacao"></li>
                            <li class="star-icon" data-avaliacao="5" @click="avaliacao"></li>
                        </ul>
                    </div>
                    <input class="btn" type="submit" value="Enviar" @click="submit" />
                </div>
            </article>
        </section>
        <div class="container-feedback">
            <div class="feedback">
                <h3>Confira os Feedbacks</h3>
                <hr />
                <ul v-for="dados in dadosAvaliacao" :key="dados.descricao">
                    <div class="feedback-descricao">
                        <li><span>Nome:</span> {{ dados.nome }} {{ dados.sobrenome }}</li>
                        <li><span>Descrição:</span> {{ dados.descricao }}</li>
                        <ul class="feedback_avaliacao">
                            <li>Avaliação:</li>
                            <li :class="['star-icon', { ativo: dados.nota == 1 }]" data-avaliacao="1"></li>
                            <li :class="['star-icon', { ativo: dados.nota == 2 }]" data-avaliacao="2"></li>
                            <li :class="['star-icon', { ativo: dados.nota == 3 }]" data-avaliacao="3"></li>
                            <li :class="['star-icon', { ativo: dados.nota == 4 }]" data-avaliacao="4"></li>
                            <li :class="['star-icon', { ativo: dados.nota == 5 }]" data-avaliacao="5"></li>
                        </ul>
                    </div>
                    <hr />
                    <br />
                </ul>
            </div>
        </div>
    </main>
</template>

<script>
import { AvaliacaoFeedback } from '@/class/AvaliacaoFeedback'
export default {
    name: 'FormFeedback',
    data() {
        return {
            nome: '',
            sobrenome: '',
            mensagem: '',
            notaAvaliacao: '1',
            dadosAvaliacao: [],
            testeClass: 'text',
        }
    },

    methods: {
        avaliacao(e) {
            this.notaAvaliacao = e.target.getAttribute('data-avaliacao')
            let avaliacao = new AvaliacaoFeedback()
            try {
                avaliacao.avaliacao(e)
            } catch (erro) {
                // console.error(erro);
            }
        },

        submit() {
            let avaliacao = new AvaliacaoFeedback()
            avaliacao.setlocalStorage(this.nome, this.sobrenome, this.mensagem, this.notaAvaliacao)
        },
        getFeedBack() {
            let avaliacao = new AvaliacaoFeedback()
            let dados = avaliacao.getLocalStorage()
            this.dadosAvaliacao = dados
        },
    },
    mounted() {
        this.getFeedBack()
    },
}
</script>

<style lang="scss" scoped>
/* Style de Titles and Form */
.title-feedback {
    font-size: 40px;
    text-align: center;
    margin-top: 20px;
}
.content-subtitle {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    gap: 10px;
}
.subtitle {
    text-align: center;
    font-size: 20px;
}
.container {
    background-color: #eff5f0;
    width: 700px;
    border-radius: 12px;
}
.itens-form {
    margin: 50px;
}
.btn {
  width: 288px;
  height: auto;
  border-radius: 9px;
  border: none;
  box-shadow: none;
  font-size: 20px;
  padding: 12px 22px;
  color: #fff;
  background-color: #558e60;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  cursor: pointer;
  text-align: center;
}

.btn:hover {
  background-color: #558e60;
  color: #fff;
  opacity: 0.5;
  transition: ease 0.2s;
  cursor: pointer;
}

/* Style Star */

.avaliacao-content {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
    gap: 10px;
}

.avaliacao-icons {
    margin: 10px 0 20px 0;
    text-align: right;
    display: flex;
    align-items: center;
    gap: 5px;
}

.star-icon {
    width: 30px;
    list-style: none;
    cursor: pointer;
    color: #ffe500;
    font-size: 30px;
}

.star-icon::before {
    content: '\2605';
}

.star-icon.ativo ~ .star-icon::before {
    content: '\2606';
}

.avaliacao-icons:hover .star-icon::before {
    content: '\2605';
}

.star-icon:hover ~ .star-icon::before {
    content: '\2606';
}

// Feedback

.container-feedback {
    margin-top: 20px;
    text-align: center;
    display: flex;
    justify-content: center;
    height: 400px;
}

.feedback {
    background-color: #eff5f0;
    border-radius: 20px;
    width: 700px;
}
.feedback > h3 {
    margin: 20px;
    font-size: 30px;
}

.feedback_avaliacao {
    // justify-content: space-around;
    display: flex;
    align-items: center;
    justify-content: center;
    // background-color: red;
}
.feedback_avaliacao li:nth-of-type(1) {
    font-weight: bold;
    margin-left: 0px;
}
.feedback-descricao {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    padding: 10px;
    color: #2b2a26;
}
.feedback-descricao span:nth-of-type(1) {
    font-weight: bold;
}

ul > li {
    margin: 10px;
}
</style>
