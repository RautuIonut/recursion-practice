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

function fibsRec(n) {
  let sequence = []

  if (n === 0) return []
  if (n === 1) return [0]
  if (n === 2) return [0, 1]

  const result = fibsRec(n - 1)
  sequence = result
  sequence.push(result.at(-1) + result.at(-2))

  return sequence
}