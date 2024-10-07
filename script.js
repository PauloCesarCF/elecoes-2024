const PrefeitosAPI = "https://resultados.tse.jus.br/oficial/ele2024/619/dados/pb/pb20516-c0011-e000619-u.json"

const VereadoresAPI = "https://resultados.tse.jus.br/oficial/ele2024/619/dados/pb/pb20516-c0013-e000619-u.json"

const getPrefeitos = async () => {
  const response = await fetch(PrefeitosAPI)
  const data = await response.json()
  const AllCandidatos = data.carg[0].agr
  return AllCandidatos
}

console.log(getPrefeitos())
const ShowPrefeitos = async () => {
  const teste = await getPrefeitos()
  
  const teste2 = teste.map(candidato => {
    console.log(candidato.par[0].cand[0].nm)
  }) 
}

function teste(CandidatosAPI){
  console.log(CandidatosAPI)
}

//teste(PrefeitosAPI)
ShowPrefeitos()
