const chalk = require('chalk')
const fs = require('fs')

const addNotes = (title,body)=>{
    const notes = loadNotes()

   
        const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        debugger
        saveNotes(notes)
        console.log(chalk.green('New note added!'))
    }
    else{
        console.log(chalk.red('note title taken'))
    }    
}

const removeNote = (title)=>{
    const notes = loadNotes()
     const matchinNote = notes.find((note) => note.title===title)
 
    
    if(matchinNote){

        notes.pop({
            title: title,           
        })
        saveNotes(notes)
        console.log(chalk.green('Note removed'))
    }else{
        console.log(chalk.red('There is no note exist for that title'))
    }

}
const saveNotes = (note)=>{
    const noteJson = JSON.stringify(note)
    fs.writeFileSync('notes.json',noteJson)
}

const loadNotes = ()=>{
    try{
    const dataBuffer = fs.readFileSync('notes.json')
    const data = dataBuffer.toString()
    return JSON.parse(data)
    }
    catch(e){
        return[]
    }
    
}
const listNote = () =>{
    const notes = loadNotes();

    console.log(chalk.inverse('Your Note...'))
    notes.forEach(element => {
        console.log(element.title)
        
    });
}
const readNotes = (title) =>{

    const notes = loadNotes();
    const findnote = notes.find((note)=>note.title===title)

    if(findnote){
        console.log(chalk.inverse(findnote.title))
        console.log(chalk.green(findnote.body))
    }else{
        console.log(chalk.red.inverse("Note not found!"))
    }



}
module.exports = {
    addNotes,
    removeNote,
    listNote,
    readNotes
    
}