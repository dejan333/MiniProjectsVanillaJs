const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
  'Message One',
  'Message Two',
  'Message Three',
  'Message Four'
]
  const types = ['info','success','error']

button.addEventListener('click', () => createNotification())

function createNotification(message, type){
  const notif = document.createElement('div')

  notif.classList.add('toast')
  notif.classList.add(type ? type : getRamdomTypes())

  notif.innerText = message ? message :  getRamdomMessage()

  toasts.appendChild(notif)

  setTimeout(() => {
    notif.remove()
  },3000)
}

function getRamdomMessage(){
  return messages[Math.floor(Math.random() * messages.length)]
}
function getRamdomTypes(){
  return types[Math.floor(Math.random() * types.length)]
}