// Get the add button element by its ID
const addBtn = document.getElementById('add')

const notes = JSON.parse(localStorage.getItem('notes'))

console.log(notes)
if(notes){
  notes.forEach((note) => addNewNote(note))
}

// Add an event listener to the add button that calls the addNewNote function when clicked
addBtn.addEventListener('click', () => addNewNote())

// Define the addNewNote function, which creates a new note element and adds it to the page

function addNewNote(text = '') {
  // Create a new div element for the note and give it the 'note' class
  const note = document.createElement('div')
  note.classList.add('note')

  // Set the innerHTML of the note element to include the note tools (edit and delete buttons),
  // the note content (either a textarea or a div), and the initial text (if any)
  note.innerHTML = `
  <div class="tools">
    <button class="edit"><i class="fa fa-edit"></i></button>
    <button class="delete"><i class="fa fa-trash-alt"></i></button>
    <button class="togglePrimary"><i class="fa-sharp fa-solid fa-bullseye"></i></button>
  </div>
  <div class="main ${text ? '' : 'hidden'}"></div>
  <textarea class="${text ? 'hidden' : ''}"></textarea>
  `
  // Get references to the edit and delete buttons, the main content div, and the textarea element
  const editBtn = note.querySelector('.edit')
  const deleteBtn = note.querySelector('.delete')
  const toggleBtn = note.querySelector('.togglePrimary')
  const main = note.querySelector('.main')
  const textArea = note.querySelector('textarea')
  

  // Set the value of the textarea to the initial text (if any) and the innerHTML of the main content div
  // to the marked version of the initial text (using the marked library)
  textArea.value = text
  main.innerHTML = marked(text)

  // Add event listeners to the edit and delete buttons and the textarea to allow for editing and deletion
  toggleBtn.addEventListener('click', () => {
    note.classList.toggle('toggleBtn') 
  })
  deleteBtn.addEventListener('click', () => {
    note.remove()
    updateLS()
  })
  editBtn.addEventListener('click', () => {
    main.classList.toggle('hidden')
    textArea.classList.toggle('hidden')
  })
  textArea.addEventListener('input', (e) => {
    const {value} = e.target
    main.innerHTML = marked(value)

    updateLS()
  })
  

  // Add the note element to the body of the page
  document.body.appendChild(note)
}


  function updateLS(){
    const noteText = document.querySelectorAll('textarea')

    const notes = []

    noteText.forEach((note) => notes.push(note.value))

    localStorage.setItem('notes', JSON.stringify(notes))
  }

