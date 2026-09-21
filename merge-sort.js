function merge(a, b) {
  const result = []
  let i = 0
  let j = 0

  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
      result.push(a[i++])
    } else {
      result.push(b[j++])
    }
  }

  for (; i < a.length; i++) {
    result.push(a[i])
  }

  for (; j < b.length; j++) {
    result.push(b[j])
  }

  return result
}

function mergeSort(arr) {
  const low = 0
  const high = arr.length - 1
  const mid = Math.floor(arr.length / 2)

  if (arr.length <= 1) return arr

  const left = mergeSort(arr.slice(low, mid))
  const right = mergeSort(arr.slice(mid))
  return merge(left, right)
}