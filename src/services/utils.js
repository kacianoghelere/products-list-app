import swal from 'sweetalert'

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

export function pluralizer(
  text,
  count = 1,
  multipleSuffix = 's',
  singleSuffix = ''
) {
  return `${text}${count <= 1 ? singleSuffix : multipleSuffix}`
}

export function trimText(text = '', length = 100) {
  if (!text || text.length < length) {
    return text
  }

  return text.substr(0, length) + '...'
}

export function handleError(error) {
  console.error(error)

  const { response: { data: { message = '' } } } = error

  swal({
    title: 'Ooops! Parece que temos um problema...',
    text: message,
    icon: 'warning'
  })
}