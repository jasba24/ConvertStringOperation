const { evalExpression } = require("./index")

describe("Code Enterview", () => {
  test('Should "1+2+3-4" return 15', () => {
    const expected = 15
    const result = evalExpression("1+2+3*4")
    expect(expected).toEqual(result)
  })
  // test('Should "1+2*3*5+3+4*2" return 42', () => {
  //   const expected = 42
  //   const result = evalExpression("1+2*3*5+3+4*2")
  //   expect(expected).toEqual(result)
  // })
  test('Should "1+2*3*5-2+10/5" return 31', () => {
    const expected = 31
    const result = evalExpression("1+2*3*5-2+10/5")
    expect(expected).toEqual(result)
  })
  test('Should "1+2*3-2+10/5" return 7', () => {
    const expected = 7
    const result = evalExpression("1+2*3-2+10/5")
    expect(expected).toEqual(result)
  })
})
