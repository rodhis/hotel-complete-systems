'use strict'
exports.__esModule = true
exports.AvaliacaoFeedback = void 0
// import {dadosFeedback}  from "@/helpers/DadosFeedBack.js";
var AvaliacaoFeedback = /** @class */ (function () {
    function AvaliacaoFeedback() {
        this.nome = ''
        this.sobrenome = ''
        this.descricao = ''
    }
    AvaliacaoFeedback.prototype.avaliacao = function (e) {
        var opcao = Number(e.target.getAttribute('data-avaliacao'))
        var ele = e.target.parentNode
        for (var i in ele.children) {
            if (ele.children[i].classList.contains('ativo')) {
                ele.children[i].classList.remove('ativo')
            }
            if (ele.children[i].getAttribute('data-avaliacao') == opcao) {
                ele.children[i].classList.add('ativo')
            }
        }
    }
    AvaliacaoFeedback.prototype.setlocalStorage = function (nome, sobrenome, descricao, avaliacao) {
        this.nome = nome
        this.sobrenome = sobrenome
        this.descricao = descricao
        this.notaavaliacao = avaliacao
        var avaliacaofe = {
            nome: this.nome,
            sobrenome: this.sobrenome,
            descricao: this.descricao,
            nota: this.notaavaliacao,
        }
        var dadosfe = []
        if (this.getLocalStorage()) {
            dadosfe.push(JSON.parse(JSON.stringify(avaliacaofe)))
            var dadosInfo = this.getLocalStorage()
            for (var _i = 0, _a = Object.entries(dadosInfo); _i < _a.length; _i++) {
                var _b = _a[_i],
                    _ = _b[0],
                    dados = _b[1]
                avaliacaofe.nome = dados['nome']
                avaliacaofe.sobrenome = dados['sobrenome']
                avaliacaofe.descricao = dados['descricao']
                avaliacaofe.nota = dados['nota']
                dadosfe.push(JSON.parse(JSON.stringify(avaliacaofe)))
            }
            this.salvaLocalStorage(dadosfe)
        } else {
            dadosfe.push(avaliacaofe)
            this.salvaLocalStorage(dadosfe)
        }
        alert('Obrigado pelo FeedBack')
        window.location.href = '/avaliacoes'
    }
    AvaliacaoFeedback.prototype.getLocalStorage = function () {
        var dadosFeedback = localStorage.getItem('avaliacaoFedBack')
        var dados = ''
        if (dadosFeedback) {
            dados = JSON.parse(dadosFeedback)
        }
        return dados
    }
    AvaliacaoFeedback.prototype.salvaLocalStorage = function (ob) {
        var feedbackAvaliacao = JSON.stringify(ob)
        localStorage.setItem('avaliacaoFedBack', feedbackAvaliacao)
    }
    return AvaliacaoFeedback
})()
exports.AvaliacaoFeedback = AvaliacaoFeedback
