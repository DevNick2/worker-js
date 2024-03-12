const worker = new Worker('./worker.js')

const run = () => {
  const num = 5000
  worker.postMessage(num) // enviando uma mensagem para o worker.js
}

worker.onmessage = event => { // escutando as mensagens do worker.js
  const num = event.data
  console.log(num)
}

const start = () => {
  for (let i = 0; i < 3; i++) {
    const bikeId = `bike${i + 1}`
    let bike = document.getElementById(bikeId)

    let position = 0

    setInterval(() => {
      if (position > window.innerWidth / 1.2) {
        position = 0
      } else {
        position++
        bike.style.left = position + 'px'
      }
    }, 1)
  }
}

