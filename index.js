function splitExpression(expression) {
  return expression
    .split(/([\+\-\*\/])/)
    .map((e) => (!["+", "-", "*", "/"].includes(e) ? Number(e) : e))
}

function resolveAddition(arrayOfOperators, result) {
  for (let i = 0; i < arrayOfOperators.length; i++) {
    if (arrayOfOperators[i] !== "+") {
      result.push(arrayOfOperators[i])
    }
  }
}

function isAllMultiplicationsOver(result) {
  return result.includes("*")
}

function isAllSubtractionsOver(result) {
  return result.includes("-")
}

function isAllDivisionsOver(result) {
  return result.includes("/")
}

function makeOperations(arrayOfOperators) {
  let result = []
  resolveAddition(arrayOfOperators, result)

  for (let i = 0; i < result.length; i++) {
    if (isAllMultiplicationsOver(result)) {
      for (let j = 0; j < result.length; j++) {
        if (result[j] === "*") {
          result[j] = result[j - 1] * result[j + 1]
          result[j - 1] = 0
          result[j + 1] = 0
          result = result.filter((e) => e !== 0)
        }
      }
    } else if (isAllSubtractionsOver(result)) {
      for (let j = 0; j < result.length; j++) {
        if (result[j] === "-") {
          result[j] = result[j - 1] - result[j + 1]
          result[j - 1] = 0
          result[j + 1] = 0
          result = result.filter((e) => e !== 0)
        }
      }
    } else if (isAllDivisionsOver(result)) {
      for (let j = 0; j < result.length; j++) {
        if (result[j] === "/") {
          result[j] = result[j - 1] / result[j + 1]
          result[j - 1] = 0
          result[j + 1] = 0
          result = result.filter((e) => e !== 0)
        }
      }
    } else {
      break
    }
  }

  return result.reduce((acum, value) => acum + value)
}

function evalExpression(expression) {
  return makeOperations(splitExpression(expression))
}

module.exports = {
  splitExpression,
  evalExpression,
}
