var evens = [0, 2, 4, 6, 8, 10]

evens.forEach(even => {
  console.log(`${even} is not odd!`)
})

function square(n) {
  console.log(n * n)
}

function doToEvens(callback) {
  evens.forEach(callback)
}