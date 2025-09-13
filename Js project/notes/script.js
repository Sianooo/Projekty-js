const addNoteBtn=document.querySelector('#addNoteBtn');
const notesContainer=document.querySelector('.notesContainer');

function saveNotes() {
    const notes = [];
    document.querySelectorAll('.note textarea').forEach(textarea=>{
        notes.push(textarea.value);
    });
    localStorage.setItem('notes', JSON.stringify(notes));
}

function loadNotes(){
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.forEach(text=>{
        createNote(text);
    });
}

function createNote(text=''){
    const div=document.createElement('div');
    div.classList.add('note');

    const noteHeader=document.createElement('div');
    noteHeader.classList.add('noteHeader');

    const editBtn=document.createElement('button');
    editBtn.textContent='Edit';
    editBtn.classList.add('editBtn');   
    noteHeader.appendChild(editBtn);

    const deleteBtn=document.createElement('button');
    deleteBtn.textContent='Delete';
    deleteBtn.classList.add('deleteBtn');
    noteHeader.appendChild(deleteBtn);

    div.appendChild(noteHeader);
    
    const textarea=document.createElement('textarea');
    textarea.classList.add('textarea');
    textarea.value=text;
    textarea.readOnly=true;
    div.appendChild(textarea);
    notesContainer.appendChild(div);

    deleteBtn.addEventListener('click',()=>{
        div.remove();
        saveNotes();
    });

    editBtn.addEventListener('click',()=>{
        textarea.readOnly=false;
    });

    textarea.addEventListener('input', saveNotes);
};

addNoteBtn.addEventListener('click',()=>{
    createNote();
    saveNotes();
});

window.addEventListener('DOMContentLoaded', loadNotes);