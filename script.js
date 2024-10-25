const API = {
  Prefeitos : "https://resultados.tse.jus.br/oficial/ele2024/619/dados/pb/pb20516-c0011-e000619-u.json"
}

const nomeCand = document.querySelector(".nome")
const porcCand = document.querySelector(".porc")
const partidoCand = document.querySelector(".partido")
const votosCand = document.querySelector(".votos")
const situacaoCand = document.querySelector(".situacao")

//Recarregar os votos
const refresh = setInterval(() => {

  //Consumindo API
  const getPrefeitos = async () => {
    const response = await fetch(API.Prefeitos)
    const data = await response.json()
    const AllCandidatos = data.carg[0].agr
    return AllCandidatos
  }
  
  //Mostrar as informacoes da API
  const ShowPrefeitos = async () => {
    const dataAPI = await getPrefeitos()
    
    //mapeando a API para mostrar no HTML
    const showInHTML = dataAPI.map(candidato => {
      const infos = {
        Partido : candidato.par[0].sg,
        Numero : candidato.par[0].n,
        Nome : candidato.par[0].cand[0].nmu,
        Votos : candidato.par[0].cand[0].vap,
        Porcentagem : candidato.par[0].cand[0].pvap,
        Situacao : candidato.par[0].cand[0].st
      }
  
      const nome = document.createElement("p")
      nome.innerHTML = `${infos.Nome}`

      const votos = document.createElement("p")
      votos.innerHTML = `${infos.Votos}`

      const situ = document.createElement("p")
      situ.innerHTML = `${infos.Situacao}`
  
      //remover elementos filhos para nao ficar duplicado no HTML por conta do refresh
      nomeCand.removeChild(nome)
      votosCand.removeChild(votos)
      situacaoCand.removeChild(situ)
      
      nomeCand.appendChild(nome)
      votosCand.appendChild(votos)
      situacaoCand.appendChild(situ)
    }) 
  }
  
  ShowPrefeitos()
}, 1000)

