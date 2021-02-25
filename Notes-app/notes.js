const fs = require('fs')
//const { require } = require('yargs')
const chalk = require('chalk')
// const getNotes=()=>{
    
//     return "your notes ..."
// }
//module.exports= data;


const addNote =(title, body) =>{
    const notes = loadNotes()
    console.log(notes)
    // const duplicateNotes = notes.filter(function (note){
    //     return note.title === title

    const duplicateNotes = notes.filter((note) => note.title === title)
    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })    
        saveNotes(notes)
        console.log(chalk.green.inverse( "New NoteAdded!"))}
    else{
        console.log(chalk.red.inverse( 'Note TItle taken!'))
    }    
}    
const listNotes = ()=>{
    console.log('List function running')
    const notes = loadNotes();
    console.log(chalk.red.inverse('Your Note'))
    notes.forEach(note => {
        console.log(note.title)
        
    });

}

const removeNote = (title)=>{
    console.log('remove function running')
    const notes = loadNotes();
    console.log(notes)
    const notesToKeep = notes.filter((note)=> note.title !==title)
        if (notes.length > notesToKeep.length){
            console.log(chalk.green.inverse("NOTE REMOVED !!"))
            saveNotes(notesToKeep)

        }
        else{
            console.log(chalk.red("Note NOT FOUND"))
        }

    //    if (note.title !==title){
    //      return console.log("note removed")
    
    //    }
    //    else{
    //     return console.log("note NOTTT removed")
    //    }
    // })    
     saveNotes(notesToKeep)
}
const readNote = (title) =>{
    const notes = loadNotes()
    console.log('reading the notes running notes file')
    const note= notes.find((note)=>note.title===title)
    if (note) {
        console.log("aefaefasd")
        console.log(chalk.grey.inverse(note.title))
        console.log(note.body)        
    }else{
        console.log("afafasf")
        console.log(chalk.red.inverse("READ Note Not FOUND"))
    }
}

const saveNotes = (notes) => {//--title="shri" --body="arts"
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = ()=>{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON)

    } catch(e) {
        return []
    } 
}
module.exports={
    //getNotes: getNotes,
    addNote: addNote,
    removeNote:removeNote,
    listNotes : listNotes,
    readNote : readNote
}