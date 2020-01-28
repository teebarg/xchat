export default {
  getMessages: ({ messages }) => {
    return messages
  },
  getBeafq: ({ messages }) => (id = 1) => {
    console.log(id, messages)
    return messages[id]
    // return 'skksksk'
  },
  getBeaf: ({ messages }) => (id) => {
    console.log(id)
    return messages[id]
    // return 'skksksk'
  }
}
