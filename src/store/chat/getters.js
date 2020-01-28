export default {
  getMessages: ({ messages }) => {
    return messages
  },
  getBeafq: ({ messages }) => (id = 1) => {
    return messages[id]
  },
  getBeaf: ({ messages }) => (id) => {
    return messages[id]
  }
}
