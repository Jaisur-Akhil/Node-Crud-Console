//const validator = require('validator')
// const chalk = require('chalk')
// //validator
// console.log(validator.isEmail("akhil@gmail.com"))
// console.log(validator.isURL('https/MediaDeviceInfo.io'));
// //chalk
// console.log(chalk.bgBlueBright.bold('Full stack developer'))
// console.log(chalk.yellow.bold('Full stack developer'))
// console.log(chalk.bgBlueBright.inverse('Full stack developer'))
// //file system
// const name = require('./utils.js')
// const data = require('./notes.js')
// console.log('Hey ia am full stack coder')
// const msg =  data(); 
// const fs = require('fs')
// fs.writeFileSync('notes.txt','this file was ceated by akhil')
// fs.appendFileSync("notes.txt",'  This person is Coder Full Stack Coder')
// fs.writeFileSync('notes.js',' ');
// console.log('data')
// console.log(msg)

//const { require } = require("yargs");

//Process Arguivement vector


// const command = process.argv[2]
// console.log(command);
// console.log(process.argv);
// if(command === 'add'){
//     console.log('Adding note')
// }
// else if(command === 'remove'){
//     console.log("Removing Note")
// }
const notes = require('./notes.js')
const yargs = require('yargs')
yargs.version('1.1.0') //changing the cersion of yargs
// create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe:'Title Note',
            demandOption: true,
            type:'string'
        },
        body:{
            describe:'body Note',
            demandOption:true,
            type:'string'
        }
    },
    handler : function(argv) {
        notes.addNote(argv.title, argv.body);
    }
});
console.log(yargs.argv)
yargs.parse()
// create remove command
yargs.command({
    command:'remove',
    describe:'Remove note',
    builder:{title:{
        describe:'title for remove note',
        demandOption: true,
        type:'string'
        }
    },
    //handler : function(argv){
    handler(argv){
        notes.removeNote(argv.title);
}});
yargs.command({
    command:'read',
    describe:'reading a note',
    builder:{title:{
        describe:'title for read note',
        demandOption: true,
        type: 'string'
    }},
    handler(argv) {
        console.log('reading the note Running');
        notes.readNote(argv.title)
    }
});
yargs.command({
    command:'list',
    describe:'Listing the notes',
    title:{
        describe:'title for list ',
        demandOption:true,
        type:'string'
    },
    body:{
        describe:'body list',
        demandOption:true,
        type:'string'

    },
    handler(argv) {
        notes.listNotes()
        
    }
})

console.log(yargs.argv)
yargs.parse()