// import {dadosFeedback}  from "@/helpers/DadosFeedBack.js";
export class AvaliacaoFeedback {
    private nome: string = ''
    private sobrenome: string = ''
    private descricao: string = ''
    private notaavaliacao: number

    constructor() {}

    avaliacao(e) {
        let opcao = Number(e.target.getAttribute('data-avaliacao'))
        let ele = e.target.parentNode
        for (let i in ele.children) {
            if (ele.children[i].classList.contains('ativo')) {
                ele.children[i].classList.remove('ativo')
            }
            if (ele.children[i].getAttribute('data-avaliacao') == opcao) {
                ele.children[i].classList.add('ativo')
            }
        }
    }

    setlocalStorage(nome: string, sobrenome: string, descricao: string, avaliacao: number) {
        this.nome = nome
        this.sobrenome = sobrenome
        this.descricao = descricao
        this.notaavaliacao = avaliacao
        let avaliacaofe = {
            nome: this.nome,
            sobrenome: this.sobrenome,
            descricao: this.descricao,
            nota: this.notaavaliacao,
        }
        let dadosfe = []
        if (this.getLocalStorage()) {
            dadosfe.push(JSON.parse(JSON.stringify(avaliacaofe)))
            let dadosInfo = this.getLocalStorage()
            for (let [_, dados] of Object.entries(dadosInfo)) {
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
        window.location.href = '/feedback'
    }

    getLocalStorage(): string {
        let dadosFeedback = localStorage.getItem('avaliacaoFedBack')
        let dados = ''
        if (dadosFeedback) {
            dados = JSON.parse(dadosFeedback)
        }
        return dados
    }

    salvaLocalStorage(ob: object) {
        let feedbackAvaliacao = JSON.stringify(ob)
        localStorage.setItem('avaliacaoFedBack', feedbackAvaliacao)
    }
}
