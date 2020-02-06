export function normalize(collection = [], startingIndex = 0) {
  let result = {}

  let index = startingIndex

  for (const item of collection) {
    if (item.id) {
      result[item.id] = {
        ...item,
        index
      }
    }

    index++
  }

  return result
}

export function trimText(text = '', length = 100) {
  if (!text || text.length < length) {
    return text
  }

  return text.substr(0, length) + '...'
}