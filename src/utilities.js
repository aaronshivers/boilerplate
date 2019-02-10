// Named export
const add = (a, b) => a + b
const name = 'Beavis'

// Default export
const square = (x) => x * x

export { add, name, square as default }