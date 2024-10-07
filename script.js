const API = {
  Prefeitos : "https://resultados.tse.jus.br/oficial/ele2024/619/dados/pb/pb20516-c0011-e000619-u.json",
  Vereadores : "https://resultados.tse.jus.br/oficial/ele2024/619/dados/pb/pb20516-c0013-e000619-u.json"
}

const nomeCand = document.querySelector(".nome")
const porcCand = document.querySelector(".porc")
const partidoCand = document.querySelector(".partido")
const votosCand = document.querySelector(".votos")
const situacaoCand = document.querySelector(".situacao")

const getPrefeitos = async () => {
  const response = await fetch(PrefeitosAPI)
  const data = await response.json()
  const AllCandidatos = data.carg[0].agr
  return AllCandidatos
}

const ShowPrefeitos = async () => {
  const dataAPI = await getPrefeitos()
  
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

    nomeCand.appendChild(nome)
  }) 
}

ShowPrefeitos()
