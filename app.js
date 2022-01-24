const notes = require('./utils')
const yargs = require('yargs')
const chalk = require('chalk')
const { demandOption, string } = require('yargs')


yargs.version('1.1.0')


yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title:{
            describe:'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe:'Body of a note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNotes(argv.title,argv.body)
    }
})


yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title,argv.body)
    }
})

yargs.command({
    command: 'list',
    describe: 'list the note',
    handler(){
        notes.listNote()

    }
})
debugger
yargs.command({
    command: 'read',
    describe: 'to read a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNotes(argv.title)
    }
})


/* console.log(yargs.argv) */
yargs.parse()