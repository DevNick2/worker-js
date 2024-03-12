const prime = num => {
  for (let i = 0; i <= num; i++) {
    let flag = 0

    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        flag = 1
        break
      }
    }

    if (i > 1 && flag === 0) {
      console.log(i)
    }
  }
}

self.onmessage = event => { // quando ele dispara o evento roda a função
  const num = event.data
  const result = prime(num)

  self.postMessage(result) // enviando uma mensagem a si mesmo, isto dispara no onmessage do index.js
  self.close()
}