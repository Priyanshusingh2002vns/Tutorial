document.getElementById('noteForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const subject = document.getElementById('subject').value;
    const note = document.getElementById('note').value;
    
    if (subject && note) {
        const noteContainer = document.createElement('div');
        noteContainer.classList.add('note');
        
        const noteTitle = document.createElement('h3');
        noteTitle.textContent = subject;
        noteContainer.appendChild(noteTitle);
        
        const noteContent = document.createElement('p');
        noteContent.textContent = note;
        noteContainer.appendChild(noteContent);
        
        document.getElementById('notesContainer').appendChild(noteContainer);
        
        // Clear the form
        document.getElementById('noteForm').reset();
    }
});
