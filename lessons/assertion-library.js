const {sum, subtract} = require('../math')

let result, expected

result = sum(3, 7)
expected = 10
expect(result).toBe(expected)

result = subtract(7, 3)
expected = 4
expect(result).toBe(expected)

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`)
      }
    }
  }
}

// const {sum, subtract} = require('../math')

// let result, expected


// function sumtest() {
// }

// test('sum adds numbers', () => {
//   const result = sum(3, 7)
//   const expected = 10

//   expect(result).toBe(expected)
// })


// function subtractTest() {
// }

// test('subtract subtracts numbers', () => {
//   const result = subtract(7, 3)
//   const expected = 4
  
//   expect(result).toBe(expected)
// })

// function test(title, callback) {
//   try {
//     callback()
//     console.log(`✓ ${title}`)
//   } catch (error) {
//     console.error(`✗ ${title}`)
//     console.error(error)
//   }
// }

// function expect(actual) {
//   return {
//     toBe(expected) {
//       if(actual !== expected) {
//         throw new Error(`${actual} is not equal to ${expected}`)
//       }
//     },
//     toEqual(expected) {},
//     toBegreaterThan(expected) {},
//   }
// }
