const joinName = require('./join-name')

const empty = '[Aguardando você]'

const generateQuizPodium = (podium = {}) => {
  return `
Pódio:

🥇 1º - ${(podium.first && joinName(podium.first)) || empty}
🥈 2º - ${(podium.second && joinName(podium.second)) || empty}
🥉 3º - ${(podium.third && joinName(podium.third)) || empty}
`
}

module.exports = generateQuizPodium
