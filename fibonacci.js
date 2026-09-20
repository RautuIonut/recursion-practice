function fibs(n) {
  let firstNum = 0
  let lastNum = 1
  let current
  const result = []

  for (let i = 0; i < n; i++) {
    current = firstNum + lastNum
    result.push(firstNum)

    firstNum = lastNum
    lastNum = current
  }

  return result
}